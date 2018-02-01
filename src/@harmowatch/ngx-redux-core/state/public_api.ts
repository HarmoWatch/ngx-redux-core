import { ReduxStateDecorator } from '@harmowatch/redux-decorators';

export * from './constructor';
export * from './definition';

export const ReduxState = ReduxStateDecorator.forClass;
