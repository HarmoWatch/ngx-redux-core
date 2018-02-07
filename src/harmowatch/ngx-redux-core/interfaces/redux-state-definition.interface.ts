import { Type } from '@angular/core';

import { ReduxStateProvider } from '../providers/redux-state.provider';
import { ReduxStateProviderType } from '../state/state.provider.type';

export interface ReduxStateDefinition<S = {}> {
  provider: ReduxStateProviderType<ReduxStateProvider<S>>;
  reducers?: Type<S>[];
}
