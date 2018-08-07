import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Inject, NgZone, Type } from '@angular/core';
import { ReduxActionDispatcher, ReduxReducerDecorator, ReduxStateDecorator } from '@harmowatch/redux-decorators';

import { ReduxStateDefinition } from '../interfaces/redux-state-definition.interface';
import { ReduxActionWithPayload } from '../interfaces/redux-action-with-payload.interface';
import { ReduxStateDefinitionToken } from '../tokens/redux-state-definition.token';

import { ReduxSelector } from '../redux-selector';
import { ReduxRegistry } from './redux-registry';

export abstract class ReduxStateProvider<S = {}> {

  public static instancesByName: { [stateName: string]: ReduxStateProvider } = {};

  public readonly name: string;
  public readonly stateDef: ReduxStateDefinition;

  protected selectorCache: { [selector: string]: Observable<{}> } = {};
  protected reducerMethodsByType: { [actionType: string]: Function[] };

  constructor(@Inject(ReduxStateDefinitionToken) stateDefs: ReduxStateDefinition[] = [],
              private zone: NgZone) {

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

    const stateType = this.constructor as Type<ReduxStateProvider<S>>;
    selector = ReduxSelector.normalize(selector, stateType);

    if (!this.selectorCache[ selector ]) {
      this.selectorCache[ selector ] = new ReduxSelector<T>(this.zone, selector, stateType).pipe(distinctUntilChanged());
    }

    return this.selectorCache[ selector ] as ReduxSelector<T>;
  }

  getState(): Promise<S> {
    return ReduxRegistry.getStore().then(store => {
      return ReduxSelector.getValueByState<S>(store.getState(), '/' + this.name);
    });
  }

  reduce<P>(state: S, action: ReduxActionWithPayload<P>): S {
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
      .filter(reducer => reducer && reducer.type)
      // convert array of types to multiple method entries
      .reduce((all, curr) => all.concat([].concat(curr.type).map(type => ({...curr, type}))), []);
  }

}
