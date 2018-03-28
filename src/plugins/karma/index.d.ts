declare module jasmine {
  interface Matchers<T> {

    doesNotTouchTheGivenState: <T>(config: {state: {}, action: {type?: string, payload?: T}}) => void;

    toDispatchSomeAction: <T>() => void;
    toDispatchAction: <T>(action?: string) => void;

    toListenForAction: (action: Function | string) => void;
    toListenForActions: (action: [Function | string]) => void;

  }
}
