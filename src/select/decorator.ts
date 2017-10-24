import { ReduxStateConstructor } from '../state/constructor';
import { ReduxStateSelector } from '../state/selector';
import { ReduxStateSelectorSubjectType } from '../state/selector/subject-type';

export function ReduxSelectDecorator(expression: string,
                                     context?: ReduxStateConstructor,
                                     subjectType?: ReduxStateSelectorSubjectType): PropertyDecorator {
  return (target: {}, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      value: new ReduxStateSelector(expression, context)
        .getBySubjectType(subjectType, null)
        .asObservable(),
    });

  };
}
