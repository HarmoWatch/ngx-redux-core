import { NgModule } from '@angular/core';
import { ReduxModule } from '@harmowatch/ngx-redux-core';
import { BikeActionsProvider } from './bike/bike.actions.provider';
import { BikeReducer } from './bike/bike.reducer';
import { CarActionsProvider } from './car/car.actions.provider';
import { CarReducer } from './car/car.reducer';
import { VehicleActions } from './vehicle.actions.provider';

import { VehicleStateProvider } from './vehicle.state.provider';

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
