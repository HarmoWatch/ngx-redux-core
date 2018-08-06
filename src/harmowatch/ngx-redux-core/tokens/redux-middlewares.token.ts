import { InjectionToken } from '@angular/core';

export class ReduxMiddlewares extends InjectionToken<Function[]> {

  constructor() {
    super('ReduxMiddlewares');
  }

}
