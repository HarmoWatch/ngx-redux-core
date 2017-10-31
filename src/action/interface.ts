export interface Action<P = void> {
  type: string;
  payload?: P;
}
