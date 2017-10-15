import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { select } from '../../core/select';
import { getReduxStateMetadata } from '../../decorator/state/state';
import { IReduxModuleChildConfig, REDUX_MODULE_CONFIG } from '../../redux.module';

@Pipe({
  name: 'reduxSelect',
})
export class ReduxSelectPipe implements PipeTransform {

  constructor(@Inject(REDUX_MODULE_CONFIG) private moduleConfig: IReduxModuleChildConfig) {
  }

  transform(selector: string): Observable<{}> {

    if (!selector.startsWith('/')) {
      selector = `/${getReduxStateMetadata(this.moduleConfig.state).name}/${selector}`;
    }

    return select(selector);
  }
}
