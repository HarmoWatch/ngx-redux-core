import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StateDefinition } from '../state/definition';
import { StateDefToken } from '../state/definition/token';
import { ReduxStateSelector } from '../state/selector';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  constructor(@Inject(StateDefToken) private stateDef: StateDefinition) {
  }

  transform(selector: string): Observable<{}> {
    return new ReduxStateSelector(selector, this.stateDef.provider).getObservable();
  }
}
