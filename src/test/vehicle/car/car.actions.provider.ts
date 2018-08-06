import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '../../../harmowatch/ngx-redux-core/decorators/index';
import { from } from 'rxjs';

@Injectable()
@ReduxActionContext({prefix: 'CarActionsProvider://'})
export class CarActionsProvider {

  @ReduxAction({type: 'add-license-plate'})
  public addLicensePlate(licensePlate: string) {
    return from([ 'foo-123', licensePlate ]);
  }

}
