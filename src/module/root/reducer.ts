import { ReduxActionInterface } from '../../action/interface';
import { IRegisterModulePayload, ReduxRegistry } from '../../registry';
import { ReduxModuleRootState } from './state';

export class ReduxModuleRootReducer {

  public static reduce(state: ReduxModuleRootState, action: ReduxActionInterface<{}>): ReduxModuleRootState {
    if (action.type === ReduxRegistry.ACTION_REGISTER_MODULE) {
      return ReduxModuleRootReducer.reduceRegisterModule(state, action as ReduxActionInterface<IRegisterModulePayload>);
    }

    return ReduxModuleRootReducer.reduceByRegisteredReducers(state, action);
  }

  public static reduceRegisterModule(state: ReduxModuleRootState,
                                     action: ReduxActionInterface<IRegisterModulePayload>): ReduxModuleRootState {
    const {stateName, initialState} = action.payload;

    return Object.assign({}, state, {
      [stateName]: initialState,
    });

  }

  public static reduceByRegisteredReducers(state: ReduxModuleRootState,
                                           action: ReduxActionInterface<{}>): ReduxModuleRootState {

    const reducers = ReduxRegistry.getReducerItemsByType(action.type);
    return reducers.reduce((stateToReduce, reducerItem) => {
      const {stateName, reducer} = reducerItem;

      return Object.assign({}, stateToReduce, {
        [stateName]: reducer(stateToReduce[ stateName ], action),
      });

    }, state);
  }

}
