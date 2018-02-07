import { BikeState } from './bike/bike.state';
import { CarState } from './car/car.state';
import { ReduxState } from '../../harmowatch/ngx-redux-core/decorators/index';
import { ReduxStateProvider } from '../../harmowatch/ngx-redux-core/providers/redux-state.provider';

export interface VehicleState {
  bike: BikeState;
  car: CarState;
}

@ReduxState({name: 'vehicle'})
export class VehicleStateProvider extends ReduxStateProvider<VehicleState> {

  public static readonly initialState = {
    bike: {
      velocity: {
        maximum: -1
      },
      licensePlates: [],
    },
    car: {
      velocity: {
        maximum: -1
      },
      licensePlates: [],
    },
  };

  getInitialState(): VehicleState {
    return VehicleStateProvider.initialState;
  }

}
