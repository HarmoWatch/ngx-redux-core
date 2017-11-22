// interface doesn't work @see https://github.com/angular/angular-cli/issues/2034#issuecomment-302666897 :/
export class ActionInterface<P = void> {
  type: string;
  payload?: P;
}
