import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReduxModuleChildConfig } from '../../module/child/config';
import { ReduxSelector } from '../../selector';
import { REDUX_MODULE_CHILD_CONFIG } from '../../module/child/token';

@Pipe({
  name: 'reduxSelect',
})
export class ReduxSelectPipe implements PipeTransform {

  constructor(@Inject(REDUX_MODULE_CHILD_CONFIG) private moduleConfig: ReduxModuleChildConfig) {
  }

  transform(selector: string): Observable<{}> {
    return new ReduxSelector(selector, this.moduleConfig.state).subscribe();
  }
}
