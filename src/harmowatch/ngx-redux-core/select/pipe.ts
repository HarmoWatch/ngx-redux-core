import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { Inject, Injector, Pipe, PipeTransform } from '@angular/core';

import { StateDefinition } from '@harmowatch/ngx-redux-core/state/definition';
import { StateDefToken } from '@harmowatch/ngx-redux-core/state/definition/token';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/state/state.provider';

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
