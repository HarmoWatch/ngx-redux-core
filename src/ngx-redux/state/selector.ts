import 'rxjs/add/operator/map';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { MetadataManager } from '../metadata/manager';
import { ReduxRootState } from '../module/root/state';
import { Registry } from '../registry';
import { StateConstructor } from './constructor';
import { ReduxStateSelectorSubjectType } from './selector/subject-type';

export class ReduxStateSelector<S = {}> {

  private static readonly DELIMITER = '/';
  private observable: Observable<S>;

  constructor(private expression: string,
              private context?: StateConstructor) {


    if (!expression.startsWith(ReduxStateSelector.DELIMITER)) {
      if (!context) {
        throw new Error('You need to provide a state context if you want to use relative selectors');
      }

      this.expression = `/${MetadataManager.getStateMetadata(context).name}/${this.expression}`;
    }

    this.observable = Observable.create((observer: Observer<ReduxRootState>) => {
      Registry.getStore().then(store => {
        observer.next(store.getState());
        store.subscribe(() => observer.next(store.getState()));
      });
    }).map(state => this.getValueFromState<S>(state));

  }

  public asObservable(): Observable<S> {
    return this.observable;
  }

  /**
   * @deprecated
   * Use asObservable instead
   */
  public getObservable<S>(): Observable<S> {
    return this.getSubject<S>().asObservable();
  }

  /**
   * @deprecated This method will be removed
   */
  public getBehaviorSubject<S>(initialValue: S): BehaviorSubject<S> {
    return this.getBySubjectType(ReduxStateSelectorSubjectType.BEHAVIOR_SUBJECT, initialValue) as BehaviorSubject<S>;
  }

  /**
   * @deprecated This method will be removed
   */
  public getReplaySubject<S>(): ReplaySubject<S> {
    return this.getBySubjectType(ReduxStateSelectorSubjectType.REPLAY_SUBJECT) as ReplaySubject<S>;
  }

  /**
   * @deprecated This method will be removed
   */
  public getSubject<S>(): Subject<S> {
    return this.getBySubjectType(ReduxStateSelectorSubjectType.SUBJECT) as Subject<S>;
  }

  /**
   * @deprecated This method will be removed
   */
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

  public getValueFromState<T>(state: {}): T {
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
