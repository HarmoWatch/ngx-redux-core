import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { MetadataManager } from '../metadata/manager';
import { ReduxRegistry } from '../registry';
import { ReduxStateConstructor } from './constructor';
import { ReduxStateSelectorDataType } from './selector/data-type';

export class ReduxStateSelector {

  private static readonly DELIMITER = '/';

  constructor(private expression: string,
              private context?: ReduxStateConstructor) {

    if (!expression.startsWith(ReduxStateSelector.DELIMITER)) {
      if (!context) {
        throw new Error('You need to provide a state context if you want to use relativ selectors');
      }

      this.expression = `/${MetadataManager.getStateMetadata(context).name}/${this.expression}`;
    }

  }

  public asObservable<S>(): Observable<S> {
    return this.getByDataType(ReduxStateSelectorDataType.OBSERVABLE, null) as Observable<S>;
  }

  public asBehaviorSubject<S>(): BehaviorSubject<S> {
    return this.getByDataType(ReduxStateSelectorDataType.BEHAVIOR_SUBJECT, null) as BehaviorSubject<S>;
  }

  public asReplaySubject<S>(): ReplaySubject<S> {
    return this.getByDataType(ReduxStateSelectorDataType.REPLAY_SUBJECT, null) as ReplaySubject<S>;
  }

  public asSubject<S>(): Subject<S> {
    return this.getByDataType(ReduxStateSelectorDataType.SUBJECT, null) as Subject<S>;
  }

  public getByDataType<S>(dataType: ReduxStateSelectorDataType,
                          initialValue: S): ReplaySubject<S> | Subject<S> | BehaviorSubject<S> | Observable<S> {
    const subject = this.getSubjectByDataType(dataType, initialValue);

    ReduxRegistry.getStore().then(store => {
      subject.next(this.getValueFromState(store.getState()));
      store.subscribe(() => subject.next(this.getValueFromState(store.getState())));
    });

    if (dataType === ReduxStateSelectorDataType.OBSERVABLE) {
      return subject.asObservable();
    }

    return subject;
  }

  public getValueFromState<T, S = {}>(state: S): T {
    return this.expression.split(ReduxStateSelector.DELIMITER)
      .filter(ReduxStateSelector.isPropertyKeyValid)
      .reduce((previousValue, propertyKey) => {
        if (!previousValue || !previousValue[ propertyKey ]) {
          return null;
        }

        return previousValue[ propertyKey ];
      }, state);
  }

  private getSubjectByDataType<S>(dataType: ReduxStateSelectorDataType,
                                  initialValue: S): ReplaySubject<S> | Subject<S> | BehaviorSubject<S> {
    switch (dataType) {
      case ReduxStateSelectorDataType.REPLAY_SUBJECT:
        return new ReplaySubject();
      case ReduxStateSelectorDataType.SUBJECT:
        return new Subject();
      default:
        return new BehaviorSubject<S>(initialValue);
    }
  }

  private static isPropertyKeyValid(propertyKey: string): boolean {
    return propertyKey !== '';
  }
}
