import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { select } from '../../core/select';
import { IReduxModuleChildConfig, REDUX_MODULE_CONFIG } from '../../redux.module';

@Pipe({
  name: 'reduxSelect',
})
export class ReduxSelectPipe implements PipeTransform {

  constructor(@Inject(REDUX_MODULE_CONFIG) private moduleConfig: IReduxModuleChildConfig) {
  }

  transform(selector: string): Observable<{}> {
    return select(selector, this.moduleConfig.state);
  }
}
