import { CommonModule } from '@angular/common';
import { NgModule, OnDestroy } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createStore, Store } from 'redux';
import { ReduxModuleRootReducer } from '../module/root/reducer';
import { Registry } from '../registry';
import { ReduxSelectPipe } from '../select/pipe';
import { StateDefinition } from '../state/definition';

@NgModule({
  declarations: [
    ReduxSelectPipe,
  ],
  exports: [
    ReduxSelectPipe,
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
  }

  private static storeFactory(): Store<{}> {
    return createStore(
      ReduxModuleRootReducer.reduce,
      {},
    );
  }

}
