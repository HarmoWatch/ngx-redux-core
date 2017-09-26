export * from './decorator/action/action';
export * from './decorator/reducer/reducer';
export * from './decorator/redux/redux';
export * from './decorator/select/select';
export * from './redux.module';

export interface OnReduxInit<S = void> {
  onReduxInit?(): S;
}
