import { ReduxActionDecoratorConfig } from './config';

export interface ReduxActionDecoratorMetadata extends ReduxActionDecoratorConfig {
  contextClazz: any;
}
