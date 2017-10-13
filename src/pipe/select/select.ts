import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { select } from '../../core/select';
import { STATENAME } from '../../redux.module';

@Pipe({
  name: 'reduxSelect',
})
export class ReduxSelectPipe implements PipeTransform {

  constructor(@Inject(STATENAME) private stateName: string) {
  }

  transform(selector: string): Observable<{}> {

    if (!selector.startsWith('/')) {
      selector = `/${this.stateName}/${selector}`;
    }

    return select(selector);
  }
}
