import { Injectable } from '@angular/core';
import { ReduxAction } from '../../../harmowatch/ngx-redux-core/decorators/index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BikeActionsProvider {

  public static readonly addLicensePlateSuccessEmitter = new Subject<void>();


  @ReduxAction({
    type: 'BikeActionsProvider://add-license-plate',
    onDispatchSuccess: BikeActionsProvider.prototype.addLicensePlateSuccess,
  })
  public addLicensePlate(licensePlate: string) {
    return licensePlate;
  }

  public addLicensePlateSuccess() {
    BikeActionsProvider.addLicensePlateSuccessEmitter.next();
  }

}
