import { ReduxActionMetadata } from '../decorator/action/metadata';
import { ReduxReducerActionTypeArray, ReduxReducerFunc } from '../decorator/reducer/reducer';
import { IReducerType } from '../redux.module';

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

export class MetadataManager {

  private static readonly ACTION_KEY = Symbol('@ReduxAction');
  private static readonly ACTION_DEFAULT: ReduxActionMetadata = {
    contextClazz: null,
    type: '',
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

  public static setActionMetadata<T>(target: T, data: ReduxActionMetadata) {
    MetadataManager.set(target, MetadataManager.ACTION_KEY, data);
  }

  public static getActionMetadata<T>(target: T): ReduxActionMetadata {
    return MetadataManager.get(target, MetadataManager.ACTION_KEY, MetadataManager.ACTION_DEFAULT);
  }

  public static setActionContextMetadata<T>(target: T, data: ActionContextData) {
    MetadataManager.set(target, MetadataManager.ACTION_CONTEXT_KEY, data);
  }

  public static getActionContextMetadata<T>(target: T): ActionContextData {
    return MetadataManager.get(target, MetadataManager.ACTION_CONTEXT_KEY, MetadataManager.ACTION_CONTEXT_DEFAULT);
  }

  public static setReducerMetadata<T>(target: T, data: ReducerData) {
    MetadataManager.set(target, MetadataManager.REDUCER_KEY, data);
  }

  public static getReducerMetadata<T>(target: T): ReducerData {
    return MetadataManager.get(target, MetadataManager.REDUCER_KEY, MetadataManager.REDUCER_DEFAULT);
  }

  public static setStateMetadata<T>(target: T, data: StateData) {
    MetadataManager.set(target, MetadataManager.STATE_KEY, data);
  }

  public static getStateMetadata<T>(target: T): StateData {
    return MetadataManager.get(target, MetadataManager.STATE_KEY, MetadataManager.STATE_DEFAULT);
  }

  private static set <D, T>(target: T, key: string | symbol, data: D) {
    Reflect[ 'defineMetadata' ](key, data, target);
  }

  private static get <D, T>(target: T, key: string | symbol, defaultData: D): D {
    defaultData = defaultData || {} as D;
    return Object.assign({}, defaultData, Reflect[ 'getMetadata' ](key, target));
  }

}
