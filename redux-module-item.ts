import { kebabCase } from 'lodash';
import { Reducer } from 'redux';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IReducer } from './index';
import { IAction, IGenericType, IReduxModule, IRootState } from './interfaces';

export interface IReduxModuleItemConfig {
  actions?: IGenericType[];
  reducers?: IGenericType[];
  stateName?: string;
}

export class ReduxModuleItem {

  public static readonly onRegister$ = new ReplaySubject<ReduxModuleItem>();

  public readonly initialState: {};
  public readonly moduleName: string;
  public readonly stateName: string;

  private reducerClasses: IReducer[];

  constructor(private config: IReduxModuleItemConfig,
              private moduleConstructor: IGenericType<IReduxModule<{}>>,
              public module: IReduxModule<{}>) {

    this.initialState = module.initialState;
    this.moduleName = moduleConstructor.name;
    this.stateName = config.stateName || kebabCase(this.moduleName.replace(/Module$/, ''));

    this.reducerClasses = (config.reducers || []).map(r => (new r() as IReducer));
  }

  // @todo
  public reduce(state: IRootState, action: IAction<{}>): IRootState {
    const reducerFunctions = this.getReducersFunctionsByAction(action);

    return Object.assign({}, {
      module: {
        [this.stateName]: reducerFunctions.reduce((reducedState, reducer) => {
          return reducer(reducedState, action);
        }, state.module[ this.stateName ]),
      },
    });

  }

  private getReducersFunctionsByAction(action: IAction<{}>): Reducer<{}>[] {
    return this.reducerClasses.reduce((all, reducerClass) => {
      return all.concat(reducerClass.reducerFunctions[ action.type ] || []);
    }, []);
  }

}
