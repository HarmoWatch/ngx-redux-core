import { ReduxReducerFunction } from '@harmowatch/redux-decorators/lib/reducer/function/redux-reducer-function.type';
import diff from 'deep-diff';

export function doesNotTouchTheGivenState(util: jasmine.MatchersUtil): jasmine.CustomMatcher {

  return {
    compare: function (actual: ReduxReducerFunction<any, any>,
                       config: { state: any, action: any }): jasmine.CustomMatcherResult {

      const stateJson = JSON.stringify(config.state);
      const givenState = JSON.parse(stateJson);
      const expectedState = JSON.parse(stateJson);

      actual(givenState, config.action);

      const differences = diff(expectedState, givenState) || [];
      const diffStr = differences
        .map(difference => `- "${difference.path.join('.')}"`)
        .join('\n');

      return {
        pass: differences.length === 0,
        message: `
The reducer has modified the following properties:
${diffStr}
`,
      };

    }
  };

}
