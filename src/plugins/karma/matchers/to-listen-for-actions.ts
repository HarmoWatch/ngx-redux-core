import { ReduxActionFunction, ReduxReducerDecorator } from '@harmowatch/redux-decorators';
import { getActionType } from '../../../harmowatch/ngx-redux-core/index';

function printList(actions: string[]) {

  return actions
    .map(action => `- "${action}"`)
    .join('\n');

}

export function toListenForActions(util: jasmine.MatchersUtil): jasmine.CustomMatcher {

  return {
    compare: function (actual: Function, expected: ReduxActionFunction[]): jasmine.CustomMatcherResult {

      const expectedActionTypes = expected.map(getActionType);

      const givenActionTypes = []
        .concat(ReduxReducerDecorator.get(actual))
        .map(type => getActionType(type));

      return {
        pass: util.equals(givenActionTypes, expectedActionTypes),
        message: `
Expected that the reducer listens to the action types:
${printList(expectedActionTypes)}

But the reducer listens to:
${printList(givenActionTypes)}
        `,
      };

    }
  };

}

beforeEach(function () {
  jasmine.addMatchers({
    toListenForActions,
    toListenForAction: util => {
      return {
        compare: (actual, expected) => toListenForActions(util).compare(actual, [ expected ]),
      };
    },
  });
});
