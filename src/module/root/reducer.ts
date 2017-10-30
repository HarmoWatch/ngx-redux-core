import { Action } from '../../action/interface';
import { IRegisterStatePayload, Registry } from '../../registry';
import { ReduxRootState } from './state';

export class ReduxModuleRootReducer {

  public static reduce(state: ReduxRootState, action: Action<{}>): ReduxRootState {
    if (action.type === Registry.ACTION_REGISTER_STATE) {
      return ReduxModuleRootReducer.reduceRegisterState(state, action as Action<IRegisterStatePayload>);
    }

    return ReduxModuleRootReducer.reduceByRegisteredReducers(state, action);
  }

  public static reduceRegisterState(state: ReduxRootState,
                                    action: Action<IRegisterStatePayload>): ReduxRootState {
    const {name, initialValue} = action.payload;

    return Object.assign({}, state, {
      [name]: initialValue,
    });

  }

  public static reduceByRegisteredReducers(state: ReduxRootState,
                                           action: Action<{}>): ReduxRootState {

    const reducers = Registry.getReducerItemsByType(action.type);
    return reducers.reduce((stateToReduce, reducerItem) => {
      const {stateName, reducer} = reducerItem;

      return Object.assign({}, stateToReduce, {
        [stateName]: reducer(stateToReduce[ stateName ], action),
      });

    }, state);
  }

}
