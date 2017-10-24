import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReduxModuleChildConfig } from '../module/child/config';
import { REDUX_MODULE_CHILD_CONFIG } from '../module/child/token';
import { ReduxStateSelector } from '../state/selector';
import { ReduxStateSelectorSubjectType } from '../state/selector/subject-type';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  constructor(@Inject(REDUX_MODULE_CHILD_CONFIG) private moduleConfig: ReduxModuleChildConfig) {
  }

  transform(selector: string): Observable<{}> {
    return new ReduxStateSelector(selector, this.moduleConfig.state)
      .getBySubjectType(ReduxStateSelectorSubjectType.DEFAULT)
      .asObservable();
  }
}
