import { InjectionToken } from '@angular/core';
import { Store } from 'redux';

export class StateDefToken extends InjectionToken<Store<{}>> {

  constructor() {
    super('StateDefToken');
  }

}
