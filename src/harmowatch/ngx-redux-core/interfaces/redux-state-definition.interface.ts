import { Type } from '@angular/core';

import { ReduxStateProvider } from '../providers/redux-state.provider';

export interface ReduxStateDefinition<S = {}> {
  provider: Type<ReduxStateProvider<S>>;
  reducers?: Type<{}>[];
}
