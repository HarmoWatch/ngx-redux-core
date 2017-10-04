import { Reducer } from 'redux';
import { IReduxAction, IRootState } from './interfaces';
import { IRegisterModulePayload, ReduxRegistry } from './registry';

export const rootReducer: Reducer<IRootState> = (state: IRootState,
                                                 action: IReduxAction<IRegisterModulePayload>): IRootState => {

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
