import {take} from 'rxjs/operators';

import { describeIntegrationTest } from '../../test-bed.spec';
import { TestBed } from '@angular/core/testing';
import { BikeActionsProvider } from './bike.actions.provider';
import { ReduxStore } from '../../../harmowatch/ngx-redux-core/tokens/redux-store.token';
import { Store } from 'redux';
import { BikeState } from './bike.state';
import { VehicleStateProvider } from '../vehicle.state.provider';

describeIntegrationTest('BikeActions', () => {

  let bikeActions: BikeActionsProvider;
  let vehicleStateProvider: VehicleStateProvider;
  let store: Store<{ vehicle: { bike: BikeState } }>;

  beforeEach(() => {
    store = TestBed.get(ReduxStore);
    bikeActions = TestBed.get(BikeActionsProvider);
    vehicleStateProvider = TestBed.get(VehicleStateProvider);
  });

  it('calls "addLicensePlateSuccess" after the state was reduced', done => {
    const licensePlate = 'IK-184n2-43';

    BikeActionsProvider.addLicensePlateSuccessEmitter.pipe(take(1)).subscribe(() => {
      vehicleStateProvider.getState().then(state => {
        expect(state.bike.licensePlates).toEqual([ licensePlate ]);
        done();
      });
    });

    vehicleStateProvider.getState().then(state => {
      bikeActions.addLicensePlate(licensePlate);
      expect(state.bike.licensePlates.length).toEqual(0);
    });

  });

});

