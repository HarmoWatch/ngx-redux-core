import { InjectionToken } from '@angular/core';
import { Store } from 'redux';

export class ReduxStore extends InjectionToken<Store<{}>> {

  constructor() {
    super('ReduxStore');
  }

}
