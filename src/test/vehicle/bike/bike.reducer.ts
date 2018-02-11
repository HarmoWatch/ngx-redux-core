import { ReduxReducer } from '../../../harmowatch/ngx-redux-core/decorators/index';
import { VehicleActions } from '../vehicle.actions.provider';
import { VehicleState } from '../vehicle.state.provider';
import { ReduxActionWithPayload } from '../../../harmowatch/ngx-redux-core/interfaces/redux-action.interface';
import { getActionType } from '../../../harmowatch/ngx-redux-core/index';
import { BikeActionsProvider } from './bike.actions.provider';

export class BikeReducer {

  @ReduxReducer(VehicleActions.prototype.setMaxVelocity)
  @ReduxReducer(VehicleActions.prototype.setDefaultVelocity)
  public setMaxVelocity(state: VehicleState, action: ReduxActionWithPayload<number | void>): VehicleState {

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
  public addLicensePlate(state: VehicleState, action: ReduxActionWithPayload<string>): VehicleState {

    return {
      ...state,
      bike: {
        ...state.bike,
        licensePlates: state.bike.licensePlates.concat(action.payload),
      }
    };

  }

}
