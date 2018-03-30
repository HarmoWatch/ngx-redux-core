import './index';
import { toReduceOn } from './to-reduce-on';
import { toDispatchAction } from './to-dispatch-action';
import { notToMutateTheGivenState } from './not-to-mutate-the-given-state';

describe('plugins/karma/matchers', () => {

  describe('index.ts', () => {
    function itRegistersTheMatcher(expectedFunction) {

      it(`registers the matcher "${expectedFunction.name}"`, () => {
        expect(expect()[ expectedFunction.name ]).toBeDefined();
      });

    }

    itRegistersTheMatcher(toReduceOn);
    itRegistersTheMatcher(toDispatchAction);
    itRegistersTheMatcher(notToMutateTheGivenState);

  });

});
