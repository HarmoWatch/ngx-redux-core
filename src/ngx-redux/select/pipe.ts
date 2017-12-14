import 'rxjs/add/operator/distinctUntilChanged';

import * as reduxCore from '@harmowatch/redux-core';
import { Inject, NgModuleRef, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReduxSelectorCacheFactory } from '../selector/cache/selector-cache-factory';
import { StateDefinition } from '../state/definition';
import { StateDefToken } from '../state/definition/token';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  private stateDef: StateDefinition;

  constructor(@Inject(StateDefToken) stateDefs: StateDefinition[] = [], private ref: NgModuleRef<{}>) {
    this.stateDef = stateDefs[ 0 ];

    // console.log(reduxCore.ReduxModuleDecorator.instance.get(ref.instance.constructor).state);
  }

  transform(selector: string): Observable<{}> {
    return ReduxSelectorCacheFactory.getOrCreate(selector, reduxCore.ReduxModuleDecorator.instance.get(this.ref.instance.constructor).state)
      .distinctUntilChanged();
  }
}
