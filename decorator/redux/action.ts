import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { IAction } from '../../interfaces';

interface IReduxAction {
  reduxActionCalls?: Subject<IAction>;
}

export function ReduxAction(type: string) {

  return (target: {}, propertyKey: string, descriptor: PropertyDescriptor): void => {

    // @todo check for static methods

    const reduxAction = target as IReduxAction;

    if (!reduxAction.reduxActionCalls) {
      reduxAction.reduxActionCalls = new ReplaySubject<IAction>();
    }

    const method = descriptor.value;

    // tslint:disable-next-line only-arrow-functions
    descriptor.value = function () {
      const payload = method.apply(null, arguments);
      reduxAction.reduxActionCalls.next({ type, payload });
      return payload;
    };

  };
}
