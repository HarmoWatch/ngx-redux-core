import { Type } from '@angular/core';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/state/state.provider';
import { ReduxStateType } from '@harmowatch/redux-decorators';

export interface StateDefinition<S = {}> {
  provider: ReduxStateType<ReduxStateProvider<S>>;
  reducers?: Type<S>[];
}
