import { Inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/state/state.provider';
import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { StateDefinition } from '../state/definition';
import { StateDefToken } from '../state/definition/token';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  private provider: ReduxStateProvider<{}>;

  constructor(@Inject(StateDefToken) stateDefs: StateDefinition[] = [], injector: Injector) {
    this.provider = injector.get(stateDefs[ 0 ].provider) as ReduxStateProvider<{}>;
  }

  transform(selector: string): Observable<{}> {
    return this.provider.select(selector);
  }

}
