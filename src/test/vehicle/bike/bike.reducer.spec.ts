import { async, TestBed } from '@angular/core/testing';
import { describeIntegrationTest } from '../../test-bed.spec';
import { VehicleActions } from '../vehicle.actions.provider';
import { VehicleStateProvider } from '../vehicle.state.provider';
import { BikeActionsProvider } from './bike.actions.provider';
import { BikeState } from './bike.state';


describeIntegrationTest('BikeReducer', () => {

  let bikeState: BikeState;

  beforeEach(async(() => {
    TestBed.get(VehicleStateProvider).select('bike')
      .subscribe(v => bikeState = v);
  }));

  describe('setMaxVelocity()', () => {

    beforeEach(async(() => {
      TestBed.get(VehicleActions).setMaxVelocity(50);
    }));

    it('sets the velocity to 50', () => {
      expect(bikeState).toEqual({
        ...VehicleStateProvider.initialState.bike,
        velocity: {
          ...VehicleStateProvider.initialState.bike.velocity,
          maximum: 50
        },
      });
    });

  });

  describe('setDefaultVelocity()', () => {

    beforeEach(async(() => {
      TestBed.get(VehicleActions).setDefaultVelocity();
    }));

    it('sets the default velocity', () => {
      expect(bikeState).toEqual({
        ...VehicleStateProvider.initialState.bike,
        velocity: {
          ...VehicleStateProvider.initialState.bike.velocity,
          maximum: 25
        },
      });
    });

  });


  describe('addLicensePlate()', () => {

    beforeEach(async(() => {
      TestBed.get(BikeActionsProvider).addLicensePlate('SO-ME-4321');
    }));

    it('sets the default velocity', () => {
      expect(bikeState).toEqual({
        ...VehicleStateProvider.initialState.car,
        licensePlates: [ 'SO-ME-4321' ],
      });
    });

  });

});

