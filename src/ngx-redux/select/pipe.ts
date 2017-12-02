import 'rxjs/add/operator/distinctUntilChanged';

import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StateDefinition } from '../state/definition';
import { StateDefToken } from '../state/definition/token';
import { ReduxStateSelector } from '../state/selector';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  private stateDef: StateDefinition;

  constructor(@Inject(StateDefToken) stateDefs: StateDefinition[] = []) {
    this.stateDef = stateDefs[ 0 ];
  }

  transform(selector: string): Observable<{}> {
    return new ReduxStateSelector(selector, this.stateDef.provider)
      .asObservable()
      .distinctUntilChanged();
  }
}
