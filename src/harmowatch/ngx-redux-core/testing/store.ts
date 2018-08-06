import { Action, Store, Unsubscribe } from 'redux';
import { BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Injectable, Type } from '@angular/core';
import { ReduxRootState } from '../interfaces/redux-root-state.interface';
import { ReduxStateDecorator } from '@harmowatch/redux-decorators';
import { ReduxStateProvider } from '../providers/redux-state.provider';

@Injectable()
export class ReduxTestingStore implements Store<{}> {

  private state = new BehaviorSubject(null);

  public static factory(): ReduxTestingStore {
    return new ReduxTestingStore();
  }

  public setState<S>(state: Type<ReduxStateProvider>, value: S): Promise<ReduxRootState> {
    const {name} = ReduxStateDecorator.get(state);

    const nextState = Object.assign({}, this.state.getValue(), {
      [ name ]: value,
    });

    this.state.next(nextState);

    return this.state
      .pipe(takeWhile(currentState => currentState !== nextState))
      .toPromise().then(() => this.state.getValue());
  }

  public getState(): {} {
    return this.state.getValue();
  }

  public subscribe(listener: () => void): Unsubscribe {
    return this.state.subscribe.call(this.state, listener);
  }

  public replaceReducer() {
  }

  public dispatch<T extends Action>(action: T): T {
    return action;
  }

}
