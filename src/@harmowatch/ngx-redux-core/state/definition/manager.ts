import { Reducer } from 'redux';
import { Injectable, Injector } from '@angular/core';
import { ReduxReducerDecorator, ReduxReducerType, ReduxStateDecorator } from '@harmowatch/redux-decorators';

import { Registry } from '../../registry';
import { StateDefinition } from '../definition';

@Injectable()
export class StateDefinitionManager {

  private knownStateDefinitions: { [name: string]: StateDefinition } = {};

  constructor(private injector: Injector) {
  }

  public add(stateDefs: StateDefinition[]) {
    stateDefs
      .filter(def => def != null)
      .forEach(def => {
        const {name} = ReduxStateDecorator.get(def.provider);

        if (!this.knownStateDefinitions[ name ]) {
          Registry.registerState(this.injector.get(def.provider));

          if (Array.isArray(def.reducers)) {
            this.registerReducers(name, def.reducers);
          }

          this.knownStateDefinitions[ name ] = def;
        }
      });
  }

  private registerReducers(stateName: string, reducers: ReduxReducerType[]) {
    reducers.forEach(reducerClass => Object.values(reducerClass.prototype)
      .map(reducerMethod => {
        return {
          reducerMethod,
          type: ReduxReducerDecorator.get(reducerMethod),
        };
      })
      .filter(type => type != null)
      .forEach(({reducerMethod, type}) => {
        Registry.registerReducer(stateName, Array.isArray(type) ? type : [ type ], reducerMethod as Reducer<{}>);
      })
    );
  }

}
