import { NgModule } from '@angular/core';
import { ReduxModule } from '../../harmowatch/ngx-redux-core/redux.module';
import { VehicleStateProvider } from './vehicle.state.provider';
import { BikeReducer } from './bike/bike.reducer';
import { CarReducer } from './car/car.reducer';
import { VehicleActions } from './vehicle.actions.provider';
import { BikeActionsProvider } from './bike/bike.actions.provider';
import { CarActionsProvider } from './car/car.actions.provider';

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
