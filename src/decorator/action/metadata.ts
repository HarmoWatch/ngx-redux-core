import { ReduxActionConfig } from './config';

export interface ReduxActionMetadata extends ReduxActionConfig {
  contextClazz: any;
}
