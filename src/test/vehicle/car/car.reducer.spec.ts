import { async, TestBed } from '@angular/core/testing';
import { describeIntegrationTest } from '../../test-bed.spec';
import { VehicleActions } from '../vehicle.actions.provider';
import { VehicleStateProvider } from '../vehicle.state.provider';
import { CarActionsProvider } from './car.actions.provider';
import { CarState } from './car.state';

describeIntegrationTest('CarReducer', () => {

  let carState: CarState;

  beforeEach(async(() => {
    TestBed.get(VehicleStateProvider).select('car')
      .subscribe(v => carState = v);
  }));

  describe('setMaxVelocity()', () => {

    beforeEach(async(() => {
      TestBed.get(VehicleActions).setMaxVelocity(50);
    }));

    it('sets the velocity to 50', () => {
      expect(carState).toEqual({
        ...VehicleStateProvider.initialState.car,
        velocity: {
          ...VehicleStateProvider.initialState.car.velocity,
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
      expect(carState).toEqual({
        ...VehicleStateProvider.initialState.car,
        velocity: {
          ...VehicleStateProvider.initialState.car.velocity,
          maximum: 10
        },
      });
    });

  });

  describe('addLicensePlate()', () => {

    beforeEach(async(() => {
      TestBed.get(CarActionsProvider).addLicensePlate('SO-ME-1234');
    }));

    it('sets the default velocity', () => {
      expect(carState).toEqual({
        ...VehicleStateProvider.initialState.car,
        licensePlates: [ 'SO-ME-1234' ],
      });
    });

  });

});
