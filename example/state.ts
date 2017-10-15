import { IReduxState, ReduxState } from '../src/decorator/state/state';

export interface ISampleState {
  todo: {
    items: string[];
  };
}

@ReduxState({
  name: 'sample',
})
export class SampleState implements IReduxState<ISampleState> {

  initialize(): Promise<ISampleState> {
    return Promise.resolve({
      todo: {
        items: [],
      },
    });
  }

}
