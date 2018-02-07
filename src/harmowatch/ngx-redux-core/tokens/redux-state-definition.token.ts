import { Store } from 'redux';
import { InjectionToken } from '@angular/core';

export class ReduxStateDefinitionToken extends InjectionToken<Store<{}>> {

  constructor() {
    super('ReduxStateDefinitionToken');
  }

}
