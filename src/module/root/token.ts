import { InjectionToken } from '@angular/core';
import { ReduxModuleRootConfig } from './config';

export const REDUX_MODULE_ROOT_CONFIG = new InjectionToken<ReduxModuleRootConfig>('REDUX_MODULE_ROOT_CONFIG');
