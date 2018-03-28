import { getActionType } from '../../../harmowatch/ngx-redux-core/index';

export function toDispatchAction(util: jasmine.MatchersUtil): jasmine.CustomMatcher {

    return {
        compare: function (actual, expectedActionType): jasmine.CustomMatcherResult {

            const actionType = getActionType(actual);

            return {
                pass: actionType === expectedActionType,
                message: `Expected to dispatch action "${expectedActionType}", but it dispatches the action "${actionType}"!`,
            };

        }
    };

}
