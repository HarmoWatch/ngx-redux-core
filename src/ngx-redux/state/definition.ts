import { Type } from '@angular/core';
import { StateConstructor } from './constructor';

export interface StateDefinition {
  provider: StateConstructor;
  reducers?: Type<{}>[];
}
