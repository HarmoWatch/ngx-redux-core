import { NgModule } from '@angular/core';
import { ReduxModule } from '@harmowatch/ngx-redux-core';

import { VehicleStateProvider } from 'test/vehicle/vehicle.state.provider';
import { BikeReducer } from 'test/vehicle/bike/bike.reducer';
import { CarReducer } from 'test/vehicle/car/car.reducer';
import { VehicleActions } from 'test/vehicle/vehicle.actions.provider';
import { BikeActionsProvider } from 'test/vehicle/bike/bike.actions.provider';
import { CarActionsProvider } from 'test/vehicle/car/car.actions.provider';

@NgModule({
  imports: [
    ReduxModule.forChild({
      state: {
        provider: VehicleStateProvider,
        reducers: [
          BikeReducer,
          CarReducer,
        ],
      }
    }),
  ],
  providers: [
    VehicleActions,
    BikeActionsProvider,
    CarActionsProvider,
    VehicleStateProvider,
  ]
})
export class VehicleModule {
}
