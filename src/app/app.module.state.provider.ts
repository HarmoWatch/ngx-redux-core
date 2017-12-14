import * as reduxCore from '@harmowatch/redux-core';

@reduxCore.ReduxStateClassDecorator({
  name: 'app-module-state'
})
export class AppModuleStateProvider implements reduxCore.ReduxStateInterface<{}> {

  getInitialState(): {} {
    return {
      hello: 'world',
    };
  }

}
