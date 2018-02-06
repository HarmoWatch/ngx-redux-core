import { ActionWithPayload, getActionType, ReduxReducer } from '@harmowatch/ngx-redux-core';

import { VehicleActions } from '../vehicle.actions.provider';
import { VehicleState } from '../vehicle.state.provider';
import { BikeActionsProvider } from './bike.actions.provider';

export class BikeReducer {

  @ReduxReducer([
    VehicleActions.prototype.setDefaultVelocity,
    VehicleActions.prototype.setMaxVelocity
  ])
  public setMaxVelocity(state: VehicleState, action: ActionWithPayload<number | void>): VehicleState {

    let maximum = 25;

    if (action.type === getActionType(VehicleActions.prototype.setMaxVelocity)) {
      maximum = action.payload as number;
    }

    return {
      ...state,
      bike: {
        ...state.bike,
        velocity: {
          ...state.bike.velocity,
          maximum,
        }
      }
    };

  }


  @ReduxReducer(BikeActionsProvider.prototype.addLicensePlate)
  public addLicensePlate(state: VehicleState, action: ActionWithPayload<string>): VehicleState {

    return {
      ...state,
      bike: {
        ...state.bike,
        licensePlates: state.bike.licensePlates.concat(action.payload),
      }
    };

  }

}
