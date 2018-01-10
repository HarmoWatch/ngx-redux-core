import { ReduxStateDecorator } from '@harmowatch/redux-decorators';

export * from './constructor';
export * from './definition';
export * from './interface';
export * from './selector';
export * from './selector/subject-type';
export * from './provider';
export { ReduxStateProvider } from './provider';
export { ReduxStateProviderConstructor } from './provider.constructor';

export const ReduxState = ReduxStateDecorator.forClass;
