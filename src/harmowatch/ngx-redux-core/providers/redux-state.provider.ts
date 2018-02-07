import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { Inject } from '@angular/core';
import {
  ReduxActionDispatcher,
  ReduxReducerDecorator,
  ReduxStateDecorator,
  ReduxStateInterface
} from '@harmowatch/redux-decorators';

import { StateDefinition } from '../state/definition';
import { ReduxStateProviderType } from '../state/state.provider.type';
import { StateDefToken } from '../state/definition/token';
import { ReduxSelector } from '../selector/selector';
import { ReduxActionWithPayload } from '../interfaces/redux-action.interface';

export abstract class ReduxStateProvider<S> implements ReduxStateInterface<S> {

  public static instancesByName: { [stateName: string]: ReduxStateProvider<{}> } = {};

  public readonly name: string;
  public readonly stateDef: StateDefinition;

  protected selectorCache: { [selector: string]: Observable<{}> } = {};
  protected reducerMethodsByType: { [actionType: string]: Function[] };

  constructor(@Inject(StateDefToken) stateDefs: StateDefinition[] = []) {

    const {name = null} = ReduxStateDecorator.get(this.constructor) || {};

    if (!name) {
      throw new Error(
        'Unable to resolve state name! Make sure you\'ve decorated the provider by "@ReduxState"!'
      );
    }

    this.name = ReduxStateDecorator.get(this.constructor).name;
    this.stateDef = stateDefs.find(def => ReduxStateDecorator.get(def.provider).name === name);

    if (!this.stateDef) {
      throw new Error(
        'Unable to resolve state definition! Make sure you\'ve registered the provider to ReduxModule!'
      );
    }

    this.reducerMethodsByType = (this.stateDef.reducers || [])
      .map(clazz => this.getReducerMethods(new clazz()))
      .reduce((all, curr) => [].concat(curr, all), []) // [].concat keeps the order, all.concat(curr) destroys the order
      // .reduce((all, curr) => [curr, ...all], []) // [].concat keeps the order, all.concat(curr) destroys the order
      .reduce((methodsByType, reducer) => {
        const type = ReduxActionDispatcher.getType(reducer.type);

        return {
          ...methodsByType,
          [ type ]: [ reducer.method ].concat(methodsByType[ type ] || [])
        };
      }, {});

    ReduxStateProvider.instancesByName[ this.name ] = this;
  }

  getInitialState(): S | Promise<S> | Observable<S> {
    throw new Error('Method "getInitialState" not implemented.');
  }

  select<T>(selector = ''): Observable<T> {

    const stateType = this.constructor as ReduxStateProviderType<ReduxStateProvider<S>>;
    selector = ReduxSelector.normalize(selector, stateType);

    if (!this.selectorCache[ selector ]) {
      this.selectorCache[ selector ] = new ReduxSelector<T>(selector, stateType).distinctUntilChanged();
    }

    return this.selectorCache[ selector ] as ReduxSelector<T>;
  }

  reduce<P>(state: S, action: ReduxActionWithPayload<P>) {
    const reducerMethods = this.reducerMethodsByType[ action.type ] || [];
    return reducerMethods.reduce((stateToReduce, method) => method(stateToReduce, action), state);
  }

  private getReducerMethods(reducerClassInstance: any) {
    return Object.values(Object.getPrototypeOf(reducerClassInstance))
      .map(method => {
        return {
          method: (method as Function).bind(reducerClassInstance),
          type: ReduxReducerDecorator.get(method),
        };
      })
      .filter(type => type != null)
      // convert array of types to multiple method entries
      .reduce((all, curr) => all.concat([].concat(curr.type).map(type => ({...curr, type}))), []);
  }

}
