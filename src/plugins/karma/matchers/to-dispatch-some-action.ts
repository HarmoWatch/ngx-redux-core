import { getActionType } from '../../../harmowatch/ngx-redux-core/index';

export function toDispatchSomeAction(util: jasmine.MatchersUtil): jasmine.CustomMatcher {

  return {
    compare: function (actual): jasmine.CustomMatcherResult {
      return {
        pass: getActionType(actual) !== null,
        message: `Expected to dispatch some action, but it dispatches nothing!`,
      };

    }
  };

}
