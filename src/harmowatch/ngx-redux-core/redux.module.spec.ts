import { async } from '@angular/core/testing';
import { compose, Middleware } from 'redux';
import { ReduxActionWithPayload } from './index';
import { ReduxReducerProvider } from './providers/redux-reducer.provider';
import { ReduxModule } from './redux.module';

describe('ReduxModule', () => {

  let reduxReducerProviderMock: ReduxReducerProvider;

  describe('.defaultStoreFactory()', () => {

    beforeEach(async(() => {
      reduxReducerProviderMock = {
        rootReducer: s => s,
      } as {} as ReduxReducerProvider;

      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] = jasmine.createSpy('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__').and.callFake(compose);
    }));

    it('enables the dev tools only if we are in dev mode', () => {
      ReduxModule.defaultStoreFactory(reduxReducerProviderMock, [], true);
      expect(window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']).toHaveBeenCalledTimes(1);
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'].calls.reset();

      ReduxModule.defaultStoreFactory(reduxReducerProviderMock, [], false);
      expect(window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']).not.toHaveBeenCalled();
    });


    describe('middleware registration', () => {

      let middlewareA: Middleware;
      let middlewareASpy: jasmine.Spy;

      let middlewareB: Middleware;
      let middlewareBSpy: jasmine.Spy;

      beforeEach(() => {
        middlewareASpy = jasmine.createSpy('middlewareASpy');
        middlewareBSpy = jasmine.createSpy('middlewareBSpy');

        middlewareA = _store => next => (action: ReduxActionWithPayload) => {
          middlewareASpy(action);
          return next(action);
        };

        middlewareB = _store => next => (action: ReduxActionWithPayload) => {
          middlewareBSpy(action);
          return next(action);
        };

      });

      it('will register when devMode is true', () => {
        const store = ReduxModule.defaultStoreFactory(
          reduxReducerProviderMock,
          [middlewareA, middlewareB],
          true
        );

        const expectedAction = {type: 'Foo'};

        store.dispatch(expectedAction);

        expect(middlewareASpy).toHaveBeenCalledTimes(1);
        expect(middlewareASpy).toHaveBeenCalledWith(expectedAction);

        expect(middlewareBSpy).toHaveBeenCalledTimes(1);
        expect(middlewareBSpy).toHaveBeenCalledWith(expectedAction);
      });

      it('will register when devMode is false', () => {
        const store = ReduxModule.defaultStoreFactory(
          reduxReducerProviderMock,
          [middlewareA, middlewareB],
          false
        );

        const expectedAction = {type: 'Foo'};

        store.dispatch(expectedAction);

        expect(middlewareASpy).toHaveBeenCalledTimes(1);
        expect(middlewareASpy).toHaveBeenCalledWith(expectedAction);

        expect(middlewareBSpy).toHaveBeenCalledTimes(1);
        expect(middlewareBSpy).toHaveBeenCalledWith(expectedAction);
      });

    });

  });

});
