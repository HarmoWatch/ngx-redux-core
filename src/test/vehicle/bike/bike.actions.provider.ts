import { Injectable } from '@angular/core';
import { ReduxAction } from '@harmowatch/ngx-redux-core';

@Injectable()
export class BikeActionsProvider {

  @ReduxAction({type: 'BikeActionsProvider://add-license-plate'})
  public addLicensePlate(licensePlate: string) {
    return licensePlate;
  }

}
