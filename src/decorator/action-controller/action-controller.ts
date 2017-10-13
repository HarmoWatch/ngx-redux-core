const METADATA_KEY = Symbol('@ReduxActionController');

const METADATA_DEFAULT: IReduxActionControllerMetadata = {
  actionPrefix: '',
};

export interface IReduxActionControllerType {
  new (...args: any[]): any;
}

export interface IReduxActionControllerMetadata {
  actionPrefix: string;
}

export function ReduxActionController(actionPrefix: string) {
  return <T extends IReduxActionControllerType>(constructor: T) => {
    const metadata: IReduxActionControllerMetadata = {actionPrefix};
    Reflect[ 'defineMetadata' ](METADATA_KEY, metadata, constructor);
    return constructor;
  };
}

export function getReduxActionControllerMetadata(target: any): IReduxActionControllerMetadata {
  return Object.assign({}, METADATA_DEFAULT, Reflect[ 'getMetadata' ](METADATA_KEY, target));
}
