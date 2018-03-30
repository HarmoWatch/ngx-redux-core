declare module jasmine {

  interface Matchers<T> {

    // reducer matchers
    toReduceOn: (...any) => void;
    notToMutateTheGivenState: <T>(state: {}, action?: { type?: string, payload?: T }) => void;

    // action matchers
    toDispatchAction: <T>(action?: string) => void;

  }
}
