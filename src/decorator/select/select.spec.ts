import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReduxRegistry } from '../../registry';
import { ReduxSelect } from './select';

describe('Decorator/ReduxSelect', () => {

  let store;
  let state = {};
  let component;

  function setState(s) {
    state = s;
    store.next();
  }

  beforeEach(() => {

    state = {
      path: {
        to: {
          the: {
            state: 1,
          },
        },
      },
    };

    store = new Subject();
    store.getState = () => state;

    spyOn(ReduxRegistry, 'getStore').and.callFake(() => Promise.resolve(store));

    class TestComponent {

      @ReduxSelect([ 'path', 'to', 'the', 'state' ])
      testSubject: Observable<number>;

    }

    component = new TestComponent();
  });

  it('reads the value from the store', (done) => {

    const givenSequence = [];
    const expectedSequence = [ null, 1 ];

    component.testSubject.subscribe((value) => {
      givenSequence.push(value);

      if (expectedSequence.length === givenSequence.length) {
        expect(givenSequence).toEqual(expectedSequence);
        done();
      }
    });

  });

  it('updates the value from the store', (done) => {

    const givenSequence = [];
    const expectedSequence = [ null, 1, 2 ];

    component.testSubject.subscribe((value) => {
      givenSequence.push(value);

      if (expectedSequence.length === givenSequence.length) {
        expect(givenSequence).toEqual(expectedSequence);
        done();
      }
    });

    setTimeout(() => {
      setState({
        path: {
          to: {
            the: {
              state: 2,
            },
          },
        },
      });
    });

  });

});
