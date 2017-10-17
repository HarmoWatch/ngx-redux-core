import { Reducer } from 'redux';
import { IReduxAction} from './interfaces';
import { IRegisterModulePayload, ReduxRegistry } from './registry';
import { ReduxRootState } from './root-state';

export const rootReducer: Reducer<ReduxRootState> = (state: ReduxRootState,
                                                     action: IReduxAction<IRegisterModulePayload>): ReduxRootState => {

  if (action.type === ReduxRegistry.ACTION_REGISTER_MODULE) {
    const {stateName, initialState} = action.payload;

    return Object.assign({}, state, {
      [stateName]: initialState,
    });
  }

  return ReduxRegistry.getReducerItemsByType(action.type)
    .reduce((stateToReduce, reducerItem) => {
      const {stateName, reducer} = reducerItem;

      return Object.assign({}, stateToReduce, {
        [stateName]: reducer(stateToReduce[ stateName ], action),
      });

    }, state);

};
