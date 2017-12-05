import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ReduxCommonModule } from '../common/module';
import { Registry } from '../registry';
import { ReduxSelectorCacheFactory } from '../selector/cache/selector-cache-factory';
import { ReduxTestingStore } from './store';
import { ReduxModuleRootConfig } from '../module/root/config';
import { StateDefToken } from '../state/definition/token';
import { Store } from 'redux';

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
    ReduxSelectorCacheFactory.clear();

    if (store) {
      Registry.reset();
      Registry.registerStore(store);
    }
  }

  public static forRoot(config: ReduxModuleRootConfig = {}): ModuleWithProviders {
    return {
      ngModule: ReduxTestingModule,
      providers: config.state ? [
        {provide: ReduxTestingStore, useFactory: config.storeFactory || ReduxTestingModule.defaultStoreFactory},
        {provide: StateDefToken, useValue: config.state || null, multi: true},
        config.state ? config.state.provider : null,
      ] : [
        {provide: ReduxTestingStore, useFactory: config.storeFactory || ReduxTestingModule.defaultStoreFactory},
        {provide: StateDefToken, useValue: config.state || null, multi: true},
      ],
    };
  }

  public static defaultStoreFactory(): Store<{}> {
    return new ReduxTestingStore();
  }


}
