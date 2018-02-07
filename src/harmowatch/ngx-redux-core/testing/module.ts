import { Store } from 'redux';
import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';

import { ReduxCommonModule } from '@harmowatch/ngx-redux-core/common/module';
import { ReduxTestingStore } from '@harmowatch/ngx-redux-core/testing/store';
import { Registry } from '@harmowatch/ngx-redux-core/registry';
import { ReduxModuleRootConfig } from '@harmowatch/ngx-redux-core/module/root/config';
import { StateDefToken } from '@harmowatch/ngx-redux-core/state/definition/token';

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

  constructor(@Optional() @Inject(ReduxTestingStore) store: Store<{}> = null) {
    if (store) {
      Registry.reset();
      Registry.registerStore(store);
    }
  }

  public static forRoot(config: ReduxModuleRootConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxTestingModule,
      providers: [
        {provide: ReduxTestingStore, useFactory: config.storeFactory || ReduxTestingModule.defaultStoreFactory},
        {provide: StateDefToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static defaultStoreFactory(): Store<{}> {
    return new ReduxTestingStore();
  }


}
