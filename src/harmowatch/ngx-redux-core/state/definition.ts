import { Type } from '@angular/core';
import { ReduxStateType } from '@harmowatch/redux-decorators';

import { ReduxStateProvider } from '../state/state.provider';

export interface StateDefinition<S = {}> {
  provider: ReduxStateType<ReduxStateProvider<S>>;
  reducers?: Type<S>[];
}
