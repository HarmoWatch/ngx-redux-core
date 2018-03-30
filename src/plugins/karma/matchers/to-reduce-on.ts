import { ReduxActionFunction, ReduxReducerDecorator } from '@harmowatch/redux-decorators';
import { getActionType } from '../../../harmowatch/ngx-redux-core/index';

function printList(actions: string[]) {

  return actions
    .map(action => `- "${action}"`)
    .join('\n');

}

export function compare(actual: Function, ...expected: ReduxActionFunction[]): jasmine.CustomMatcherResult {

  const expectedActionTypes = expected.map(getActionType);

  const givenActionTypes = []
    .concat(ReduxReducerDecorator.get(actual))
    .map(type => getActionType(type));

  const actionsNotListeningTo = expectedActionTypes
    .filter(type => !givenActionTypes.includes(type));

  const pass = actionsNotListeningTo.length === 0;

  if (expectedActionTypes.length === 1) {
    return {
      pass,
      message: `Expected the reducer to listen for action "${expectedActionTypes[ 0 ]}", but it doesn\'t!`,
    };
  } else if (expectedActionTypes.length > 1) {
    return {
      pass,
      message: `
Expected the reducer to listen for the actions:
${printList(expectedActionTypes)}

But it did not listen to:
${printList(actionsNotListeningTo)}
          `.trim(),
    };
  }

}

export function toReduceOn(): jasmine.CustomMatcher {
  return {compare};
}
