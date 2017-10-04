import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { select } from '../../core/select';

@Pipe({
  name: 'reduxSelect',
})
export class ReduxSelectPipe implements PipeTransform {
  transform(selector: string): Observable<{}> {
    return select(selector);
  }
}
