import 'rxjs/add/operator/distinctUntilChanged';

import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReduxSelectorCacheFactory } from '../selector/cache/selector-cache-factory';
import { StateDefinition } from '../state/definition';
import { StateDefToken } from '../state/definition/token';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  private stateDef: StateDefinition;

  constructor(@Inject(StateDefToken) stateDefs: StateDefinition[] = []) {
    this.stateDef = stateDefs[ 0 ];
  }

  transform(selector: string): Observable<{}> {
    return ReduxSelectorCacheFactory.getOrCreate(selector, this.stateDef.provider)
      .distinctUntilChanged();
  }
}
