import { ReduxActionConfig } from './config';

export interface ReduxActionDecoratorMetadata extends ReduxActionConfig {
  contextClazz: any;
}
