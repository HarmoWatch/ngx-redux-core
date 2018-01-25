import { Type } from '@angular/core';
import { ReduxStateType } from '@harmowatch/redux-decorators';

export interface StateDefinition<S = {}> {
  provider: ReduxStateType;
  reducers?: Type<S>[];
}
