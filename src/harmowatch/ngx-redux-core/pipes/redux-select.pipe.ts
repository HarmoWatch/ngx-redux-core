import { Observable } from 'rxjs';
import { Inject, Injector, Pipe, PipeTransform } from '@angular/core';

import { ReduxStateProvider } from '../providers/redux-state.provider';
import { ReduxStateDefinitionToken } from '../tokens/redux-state-definition.token';
import { ReduxStateDefinition } from '../interfaces/redux-state-definition.interface';

@Pipe({name: 'reduxSelect'})
export class ReduxSelectPipe implements PipeTransform {

  private provider: ReduxStateProvider;

  constructor(@Inject(ReduxStateDefinitionToken) stateDefs: ReduxStateDefinition[] = [], injector: Injector) {
    this.provider = injector.get(stateDefs[ 0 ].provider) as ReduxStateProvider;
  }

  transform(selector: string): Observable<{}> {
    return this.provider.select(selector);
  }

}
