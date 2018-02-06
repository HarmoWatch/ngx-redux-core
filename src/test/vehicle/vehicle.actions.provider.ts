import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '@harmowatch/ngx-redux-core';

@Injectable()
@ReduxActionContext({prefix: 'VehicleActions://'})
export class VehicleActions {

  @ReduxAction()
  public setMaxVelocity(max: number) {
    return max;
  }

  @ReduxAction()
  public setDefaultVelocity() {
  }

}
