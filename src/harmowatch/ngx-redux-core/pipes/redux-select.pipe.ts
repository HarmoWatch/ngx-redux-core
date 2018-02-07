import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { Inject, Injector, Pipe, PipeTransform } from '@angular/core';

import { ReduxStateDefinition } from '@harmowatch/ngx-redux-core/interfaces/redux-state-definition.interface';
import { ReduxStateDefinitionToken } from '@harmowatch/ngx-redux-core/tokens/redux-state-definition.token';
import { ReduxStateProvider } from '@harmowatch/ngx-redux-core/providers/redux-state.provider';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  private provider: ReduxStateProvider<{}>;

  constructor(@Inject(ReduxStateDefinitionToken) stateDefs: ReduxStateDefinition[] = [], injector: Injector) {
    this.provider = injector.get(stateDefs[ 0 ].provider) as ReduxStateProvider<{}>;
  }

  transform(selector: string): Observable<{}> {
    return this.provider.select(selector);
  }

}
