import { ReduxReducerActionTypeArray, ReduxReducerFunc } from '../decorator/reducer/reducer';
import { IReducerType } from '../redux.module';

export interface ActionData {
  methodType: string | symbol;
  targetConstructor: any;
}

export interface ActionContextData {
  prefix: string;
}

export interface ReducerData {
  reducers: Array<{
    types: ReduxReducerActionTypeArray<{}>,
    reducer: ReduxReducerFunc<{}, {}>,
  }>;
}

export interface StateData {
  name: string;
  reducers?: IReducerType[];
}

export class MetaDataManager {

  private static readonly ACTION_KEY = Symbol('@ReduxAction');
  private static readonly ACTION_DEFAULT: ActionData = {
    methodType: '',
    targetConstructor: null,
  };

  private static readonly ACTION_CONTEXT_KEY = Symbol('@ReduxActionContext');
  private static readonly ACTION_CONTEXT_DEFAULT: ActionContextData = {
    prefix: '',
  };

  private static readonly REDUCER_KEY = Symbol('@ReduxReducer');
  private static readonly REDUCER_DEFAULT: ReducerData = {
    reducers: [],
  };

  private static readonly STATE_KEY = Symbol('@ReduxState');
  private static readonly STATE_DEFAULT: StateData = {
    name: '',
    reducers: [],
  };

  public static setActionMetaData<T>(target: T, data: ActionData) {
    MetaDataManager.set(target, MetaDataManager.ACTION_KEY, data);
  }

  public static getActionMetaData<T>(target: T): ActionData {
    return MetaDataManager.get(target, MetaDataManager.ACTION_KEY, MetaDataManager.ACTION_DEFAULT);
  }

  public static setActionContextMetaData<T>(target: T, data: ActionContextData) {
    MetaDataManager.set(target, MetaDataManager.ACTION_CONTEXT_KEY, data);
  }

  public static getActionContextMetaData<T>(target: T): ActionContextData {
    return MetaDataManager.get(target, MetaDataManager.ACTION_CONTEXT_KEY, MetaDataManager.ACTION_CONTEXT_DEFAULT);
  }

  public static setReducerMetaData<T>(target: T, data: ReducerData) {
    MetaDataManager.set(target, MetaDataManager.REDUCER_KEY, data);
  }

  public static getReducerMetaData<T>(target: T): ReducerData {
    return MetaDataManager.get(target, MetaDataManager.REDUCER_KEY, MetaDataManager.REDUCER_DEFAULT);
  }

  public static setStateMetaData<T>(target: T, data: StateData) {
    MetaDataManager.set(target, MetaDataManager.STATE_KEY, data);
  }

  public static getStateMetaData<T>(target: T): StateData {
    return MetaDataManager.get(target, MetaDataManager.STATE_KEY, MetaDataManager.STATE_DEFAULT);
  }

  private static set <D, T>(target: T, key: string | symbol, data: D) {
    Reflect[ 'defineMetadata' ](key, data, target);
  }

  private static get <D, T>(target: T, key: string | symbol, defaultData: D): D {
    defaultData = defaultData || {} as D;
    return Object.assign({}, defaultData, Reflect[ 'getMetadata' ](key, target));
  }

}
