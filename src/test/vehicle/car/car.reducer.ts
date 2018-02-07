import { ReduxReducer } from '../../../harmowatch/ngx-redux-core/decorators/index';
import { VehicleActions } from '../vehicle.actions.provider';
import { VehicleState } from '../vehicle.state.provider';
import { ReduxActionWithPayload } from '../../../harmowatch/ngx-redux-core/interfaces/redux-action.interface';
import { getActionType } from '../../../harmowatch/ngx-redux-core/index';

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
