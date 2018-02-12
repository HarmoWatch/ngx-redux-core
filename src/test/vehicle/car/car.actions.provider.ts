import 'rxjs/add/observable/from';

import { Injectable } from '@angular/core';
import { ReduxAction, ReduxActionContext } from '../../../harmowatch/ngx-redux-core/decorators/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
@ReduxActionContext({prefix: 'CarActionsProvider://'})
export class CarActionsProvider {

  @ReduxAction({type: 'add-license-plate'})
  public addLicensePlate(licensePlate: string) {
    return Observable.from([ 'foo-123', licensePlate ]);
  }

}
