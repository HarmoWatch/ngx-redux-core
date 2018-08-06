import { ReduxModule } from './redux.module';
import { async } from '@angular/core/testing';

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

    it('will register the given middleware functions', () => {

      function mwF1() {}
      function mwF2() {}

      ReduxModule.defaultEnhancerFactory([mwF1, mwF2], true);
      expect(window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ]).toHaveBeenCalledTimes(1);


      const args = (window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ] as jasmine.Spy).calls.argsFor(0);
      expect(args[0]).toBe(mwF1);
      expect(args[1]).toBe(mwF2);

    });

  });

});
