import { async, TestBed } from '@angular/core/testing';
import { ReduxReducerProvider } from './redux-reducer.provider';
import { Injectable } from '@angular/core';
import { ReduxRegistry } from './redux-registry';

@Injectable()
class StateA {
  public name = 'foo';
}

@Injectable()
class StateB {
  public name = 'foo';
}

describe('ReduxReducerProvider', () => {

  let fixture: ReduxReducerProvider;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      providers: [
        ReduxReducerProvider,
        StateA,
        StateB,
      ]
    });

    fixture = TestBed.get(ReduxReducerProvider);

    spyOn(ReduxRegistry, 'registerState');
  }));

  describe('addStateProvider()', () => {

    it('registers the state t the registry', () => {
      const expectedProvider = TestBed.get(StateA);

      fixture.addStateProvider(expectedProvider);
      expect(ReduxRegistry.registerState).toHaveBeenCalledTimes(1);
      expect(ReduxRegistry.registerState).toHaveBeenCalledWith(expectedProvider);
    });

    it('throws an exception if a state name is registered twice', () => {
      fixture.addStateProvider(TestBed.get(StateA));

      expect(() => {
        fixture.addStateProvider(TestBed.get(StateB));
      }).toThrowError('State "foo" is registered twice! Make sure your state name is unique!');
    });

    it('throws an exception if the provider is registered twice', () => {
      fixture.addStateProvider(TestBed.get(StateA));

      expect(() => {
        fixture.addStateProvider(TestBed.get(StateA));
      }).toThrowError('State "foo" is registered twice! Make sure your state name is unique!');
    });

  });

});
