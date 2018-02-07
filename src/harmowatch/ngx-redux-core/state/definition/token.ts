import { Store } from 'redux';
import { InjectionToken } from '@angular/core';

export class StateDefToken extends InjectionToken<Store<{}>> {

  constructor() {
    super('StateDefToken');
  }

}
