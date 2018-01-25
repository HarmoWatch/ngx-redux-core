import { NgModule } from '@angular/core';

import { ReduxSelectPipe } from '../select/pipe';

@NgModule({
  declarations: [
    ReduxSelectPipe,
  ],
  exports: [
    ReduxSelectPipe,
  ],
})
export class ReduxCommonModule {

}
