import { ReduxModule } from './redux.module';
import { async } from '@angular/core/testing';
import { StoreEnhancerStoreCreator } from 'redux';

describe('ReduxModule', () => {

  describe('.defaultEnhancerFactory()', () => {

    beforeEach(async(() => {
      window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ] = jasmine.createSpy('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__');
    }));

    it('enables the dev tools only if we are in dev mode', () => {
      ReduxModule.defaultEnhancerFactory([], true);
      expect(window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ]).toHaveBeenCalledTimes(1);
      window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ].calls.reset();

      ReduxModule.defaultEnhancerFactory([], false);
      expect(window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ]).not.toHaveBeenCalled();
    });

  });

});
