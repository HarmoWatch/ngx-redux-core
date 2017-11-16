import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { MetadataManager } from '../metadata/manager';
import { Registry } from '../registry';
import { StateConstructor } from './constructor';
import { ReduxStateSelectorSubjectType } from './selector/subject-type';

export class ReduxStateSelector {

  private static readonly DELIMITER = '/';

  constructor(private expression: string,
              private context?: StateConstructor) {

    if (!expression.startsWith(ReduxStateSelector.DELIMITER)) {
      if (!context) {
        throw new Error('You need to provide a state context if you want to use relative selectors');
      }

      this.expression = `/${MetadataManager.getStateMetadata(context).name}/${this.expression}`;
    }

  }

  public getObservable<S>(): Observable<S> {
    return this.getSubject<S>().asObservable();
  }

  public getBehaviorSubject<S>(initialValue: S): BehaviorSubject<S> {
    return this.getBySubjectType(ReduxStateSelectorSubjectType.BEHAVIOR_SUBJECT, initialValue) as BehaviorSubject<S>;
  }

  public getReplaySubject<S>(): ReplaySubject<S> {
    return this.getBySubjectType(ReduxStateSelectorSubjectType.REPLAY_SUBJECT) as ReplaySubject<S>;
  }

  public getSubject<S>(): Subject<S> {
    return this.getBySubjectType(ReduxStateSelectorSubjectType.SUBJECT) as Subject<S>;
  }

  public getBySubjectType<S>(type: ReduxStateSelectorSubjectType,
                             initialValue?: S): ReplaySubject<S> | Subject<S> | BehaviorSubject<S> {

    let subject: Subject<S>;

    switch (type) {
      case ReduxStateSelectorSubjectType.REPLAY_SUBJECT:
        subject = new ReplaySubject<S>();
        break;
      case ReduxStateSelectorSubjectType.SUBJECT:
        subject = new Subject<S>();
        break;
      default:
        subject = new BehaviorSubject<S>(initialValue || null);
    }

    Registry.getStore().then(store => {
      subject.next(this.getValueFromState(store.getState()));
      store.subscribe(() => subject.next(this.getValueFromState(store.getState())));
    });

    return subject;
  }

  public getValueFromState<T, S = {}>(state: S): T {
    return this.expression.split(ReduxStateSelector.DELIMITER)
      .filter(ReduxStateSelector.isPropertyKeyValid)
      .reduce((previousValue, propertyKey) => {
        if (!previousValue || !previousValue.hasOwnProperty(propertyKey)) {
          return null;
        }

        return previousValue[ propertyKey ];
      }, state);
  }

  private static isPropertyKeyValid(propertyKey: string): boolean {
    return propertyKey !== '';
  }
}
