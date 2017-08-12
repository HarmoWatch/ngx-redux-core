import { kebabCase } from 'lodash';
import { IAction, IGenericType, IReduxModule, IRootState } from '../interfaces';
import { ReduxModule } from '../redux.module';
import { IReducerForDecorated, reduce } from './reducer-for';

interface IConfig {
  actions?: IGenericType[];
  reducers?: IGenericType[];
  stateName?: string;
}

export function Redux(config: IConfig = {}) {
  return <T extends IGenericType<IReduxModule<{}>>>(constructor: T) => {

    return class extends constructor {
      redux = (() => {
        const stateName = config.stateName || kebabCase(constructor.name.replace(/Module$/, ''));
        const reducers: IReducerForDecorated[] = (config.reducers || [])
          .map(r => (new r() as IReducerForDecorated));

        const reducerFunction = (state: IRootState, action: IAction): IRootState => {
          state.module[ stateName ] = reducers.reduce((reducedState, reducer: IReducerForDecorated) => {
            return reduce(reducer, reducedState, action);
          }, state.module[ stateName ]);

          return state;
        };

        ReduxModule.registerModule$.next({
          initialState: this.initialState,
          reducer: reducerFunction,
          stateName,
        });

        return {
          enabled: true,
        };
      })();
    };

  };
}
