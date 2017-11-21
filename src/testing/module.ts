import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReduxCommonModule } from '../common/module';
import { Registry } from '../registry';
import { StateConstructor } from '../state/constructor';
import { TestingStore } from './store';

@NgModule({
  exports: [
    ReduxCommonModule,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    TestingStore,
  ],
})
export class ReduxTestingModule {

  private static store: TestingStore;

  public static setState<S>(clazz: StateConstructor, value: S): any {
    if (!ReduxTestingModule.store) {
      ReduxTestingModule.initTestingStore();
    }

    ReduxTestingModule.store.setState(clazz, value);
  }

  private static initTestingStore() {
    ReduxTestingModule.store = new TestingStore();
    Registry.registerStore(ReduxTestingModule.store);
  }

}
