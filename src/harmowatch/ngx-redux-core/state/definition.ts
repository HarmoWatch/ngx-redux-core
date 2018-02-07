import { Type } from '@angular/core';

import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/providers/redux-state.provider';
import { ReduxStateProviderType } from '@harmowatch/ngx-redux-core/state/state.provider.type';

export interface StateDefinition<S = {}> {
  provider: ReduxStateProviderType<ReduxStateProvider<S>>;
  reducers?: Type<S>[];
}
