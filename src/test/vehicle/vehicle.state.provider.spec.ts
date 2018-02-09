import { TestBed } from '@angular/core/testing';
import { describeIntegrationTest } from '../test-bed.spec';
import { VehicleStateProvider } from './vehicle.state.provider';

describeIntegrationTest('BikeReducer', () => {

  describe('getState()', () => {

    it('returns the correct state', done => {
      TestBed.get(VehicleStateProvider).getState().then(state => {
        expect(state).toEqual(VehicleStateProvider.initialState);
        done();
      });
    });

  });

});
