import { Reducer } from 'redux';
import { IReduxAction, IRootState } from './interfaces';
import { ReduxRegistry } from './registry';

export const rootReducer: Reducer<IRootState> = (state: IRootState, action: IReduxAction): IRootState => {

  return ReduxRegistry.getReducerItemsByType(action.type)
    .reduce((stateToReduce, reducerItem) => {
      const {stateName, reducer} = reducerItem;

      return Object.assign({}, stateToReduce, {
        [stateName]: reducer(stateToReduce[ stateName ], action),
      });

    }, state);

};
