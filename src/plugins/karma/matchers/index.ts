import { notToMutateTheGivenState } from './not-to-mutate-the-given-state';
import { toDispatchAction } from './to-dispatch-action';
import { toReduceOn } from './to-reduce-on';

beforeEach(function () {

  jasmine.addMatchers({
    notToMutateTheGivenState,
    toDispatchAction,
    toReduceOn,
  });

});
