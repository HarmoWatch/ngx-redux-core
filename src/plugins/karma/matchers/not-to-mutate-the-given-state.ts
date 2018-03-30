import diff from 'deep-diff';

import { ReduxActionWithPayload } from '../../../harmowatch/ngx-redux-core/interfaces/redux-action-with-payload.interface';
import { ReduxReducerFunction } from '@harmowatch/redux-decorators/lib/reducer/function/redux-reducer-function.type';

export function compare(actual: ReduxReducerFunction<any, any>,
                        state: {},
                        action: ReduxActionWithPayload): jasmine.CustomMatcherResult {

  const stateJson = JSON.stringify(state);
  const givenState = JSON.parse(stateJson);
  const expectedState = JSON.parse(stateJson);

  actual(givenState, action || null);

  const differences = diff(expectedState, givenState) || [];
  const diffStr = differences
    .map(difference => `- "${difference.path.join('.')}"`)
    .join('\n');

  return {
    pass: differences.length === 0,
    message: `Expected the reducer not to mutate the state, but it mutates the following properties:\n${diffStr}`,
  };

}

export function notToMutateTheGivenState(): jasmine.CustomMatcher {
  return {compare};
}
