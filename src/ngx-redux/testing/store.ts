import {Injectable} from '@angular/core';
import {Action, Store, Unsubscribe} from 'redux';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MetadataManager} from '../metadata/manager';
import {StateConstructor} from '../state/constructor';

@Injectable()
export class ReduxTestingStore implements Store<{}> {

  private state = new BehaviorSubject(null);

  public setState<S>(state: StateConstructor, value: S): any {
    const {name} = MetadataManager.getStateMetadata(state);

    this.state.next(Object.assign({}, this.state.getValue(), {
      [name]: value,
    }));
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
