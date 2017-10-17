import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReduxStateConstructor } from './decorator/state/constructor';
import { MetadataManager } from './metadata/manager';
import { ReduxRegistry } from './registry';

export class ReduxSelector {

  private static readonly DELIMITER = '/';

  constructor(private expression: string,
              private context?: ReduxStateConstructor) {

    if (!expression.startsWith(ReduxSelector.DELIMITER)) {
      if (!context) {
        throw new Error('You need to provide a state context if you want to use relativ selectors');
      }

      this.expression = `/${MetadataManager.getStateMetadata(context).name}/${this.expression}`;
    }

  }

  public subscribe<S>(): Observable<S> {
    const subject = new BehaviorSubject<S>(null);

    ReduxRegistry.getStore().then(store => {
      subject.next(this.getValueFromState(store.getState()));
      store.subscribe(() => subject.next(this.getValueFromState(store.getState())));
    });

    return subject.asObservable();
  }

  public getValueFromState<T, S = {}>(state: S): T {
    return this.expression.split(ReduxSelector.DELIMITER)
      .filter(ReduxSelector.isPropertyKeyValid)
      .reduce((previousValue, propertyKey) => {
        if (!previousValue || !previousValue[ propertyKey ]) {
          return null;
        }

        return previousValue[ propertyKey ];
      }, state);
  }

  private static isPropertyKeyValid(propertyKey: string): boolean {
    return propertyKey !== '';
  }
}
