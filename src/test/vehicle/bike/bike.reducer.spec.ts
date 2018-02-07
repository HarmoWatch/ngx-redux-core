import { async, TestBed } from '@angular/core/testing';

import { describeIntegrationTest } from 'test/test-bed.spec';
import { BikeState } from 'test/vehicle/bike/bike.state';
import { VehicleStateProvider } from 'test/vehicle/vehicle.state.provider';
import { VehicleActions } from 'test/vehicle/vehicle.actions.provider';
import { BikeActionsProvider } from 'test/vehicle/bike/bike.actions.provider';


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

