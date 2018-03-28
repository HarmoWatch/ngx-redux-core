import { toDispatchAction } from './to-dispatch-action';
import { toDispatchSomeAction } from './to-dispatch-some-action';
import { doesNotTouchTheGivenState } from './does-not-touch-the-given-state';
import { toListenForActions } from './to-listen-for-actions';

beforeEach(function () {
  jasmine.addMatchers({
    doesNotTouchTheGivenState,

    toDispatchAction,
    toDispatchSomeAction,

    toListenForActions,
    toListenForAction: util => {
      return {
        compare: (actual, expected) => toListenForActions(util).compare(actual, [ expected ]),
      };
    },
  });
});
