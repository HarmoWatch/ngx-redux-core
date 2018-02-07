import { ReduxActionWithPayload, getActionType, ReduxReducer } from '@harmowatch/ngx-redux-core';

import { VehicleActions } from 'test/vehicle/vehicle.actions.provider';
import { VehicleState } from 'test/vehicle/vehicle.state.provider';

export class CarReducer {

  @ReduxReducer([
    'VehicleActions://setDefaultVelocity',
    VehicleActions.prototype.setMaxVelocity
  ])
  public setMaxVelocity(state: VehicleState, action: ReduxActionWithPayload<number | void>): VehicleState {

    let maximum = 10;

    if (action.type === getActionType(VehicleActions.prototype.setMaxVelocity)) {
      maximum = action.payload as number;
    }

    return {
      ...state,
      car: {
        ...state.car,
        velocity: {
          ...state.car.velocity,
          maximum,
        }
      }
    };
  }

  @ReduxReducer('CarActionsProvider://add-license-plate')
  public addLicensePlate(state: VehicleState, action: ReduxActionWithPayload<string>): VehicleState {

    return {
      ...state,
      car: {
        ...state.car,
        licensePlates: state.car.licensePlates.concat(action.payload),
      }
    };

  }

}
