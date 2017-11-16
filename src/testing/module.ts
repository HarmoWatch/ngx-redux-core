import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createStore, Store } from 'redux';
import { ReduxCommonModule } from '../common/module';
import { ReduxModuleRootReducer } from '../module/root/reducer';
import { Registry } from '../registry';
import { StateDefinition } from '../state/definition';
import { StateDefinitionManager } from '../state/definition/manager';

@NgModule({
  exports: [
    ReduxCommonModule,
  ],
  imports: [
    CommonModule,
  ],
})
export class ReduxTestingModule {

  constructor() {
    Registry.reset();
    Registry.registerStore(ReduxTestingModule.storeFactory());
  }

  public static addStateDefinition(stateDef: StateDefinition) {
    Registry.registerState(TestBed.get(stateDef.provider));
    StateDefinitionManager.registerReducers(stateDef);
  }

  private static storeFactory(): Store<{}> {
    return createStore(
      ReduxModuleRootReducer.reduce,
      {},
    );
  }

}
