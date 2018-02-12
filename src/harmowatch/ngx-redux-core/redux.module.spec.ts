import { ReduxModule } from './redux.module';
import { async } from '@angular/core/testing';
import { Reducer, StoreEnhancerStoreCreator } from 'redux';

describe('ReduxModule', () => {

  describe('.defaultEnhancerFactory()', () => {

    beforeEach(async(() => {
      window[ '__REDUX_DEVTOOLS_EXTENSION__' ] = jasmine.createSpy('__REDUX_DEVTOOLS_EXTENSION__');
    }));

    it('enables the dev tools only if we are in dev mode', () => {
      ReduxModule.defaultEnhancerFactory(true);
      expect(window[ '__REDUX_DEVTOOLS_EXTENSION__' ]).toHaveBeenCalledTimes(1);
      window[ '__REDUX_DEVTOOLS_EXTENSION__' ].calls.reset();

      ReduxModule.defaultEnhancerFactory(false);
      expect(window[ '__REDUX_DEVTOOLS_EXTENSION__' ]).not.toHaveBeenCalled();
    });

  });

  describe('.noopEnhancer', () => {

    it('just returns the given next function', () => {
      const nextFn = {} as StoreEnhancerStoreCreator<{}>;
      expect(ReduxModule.noopEnhancer(nextFn)).toBe(nextFn);
    });

  });

});
