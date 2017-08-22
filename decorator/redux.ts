import { kebabCase } from 'lodash';
import { IGenericType, IReduxModule } from '../interfaces';
import { IReduxModuleItemConfig, ReduxModuleItem } from '../redux-module-item';

export function Redux(config: IReduxModuleItemConfig = {}) {
  return <T extends IGenericType<IReduxModule<{}>>>(constructor: T) => {

    return class extends constructor {
      redux = (() => {
        ReduxModuleItem.onRegister$.next(new ReduxModuleItem(config, constructor, this));
      })();
    };

  };
}
