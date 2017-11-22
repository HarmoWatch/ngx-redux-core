import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReduxCommonModule } from '../common/module';
import { Registry } from '../registry';
import { ReduxTestingStore } from './store';

@NgModule({
  exports: [
    ReduxCommonModule,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ReduxTestingStore,
  ],
})
export class ReduxTestingModule {

  constructor(private store: ReduxTestingStore) {
    Registry.reset();
    Registry.registerStore(this.store);
  }

}
