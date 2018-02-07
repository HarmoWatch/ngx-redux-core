import { NgModule } from '@angular/core';

import { ReduxSelectPipe } from '@harmowatch/ngx-redux-core/select/pipe';

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
