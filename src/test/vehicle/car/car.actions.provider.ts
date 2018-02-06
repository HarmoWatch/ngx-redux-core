import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '@harmowatch/ngx-redux-core';

@Injectable()
@ReduxActionContext({prefix: 'CarActionsProvider://'})
export class CarActionsProvider {

  @ReduxAction({type: 'add-license-plate'})
  public addLicensePlate(licensePlate: string) {
    return licensePlate;
  }

}
