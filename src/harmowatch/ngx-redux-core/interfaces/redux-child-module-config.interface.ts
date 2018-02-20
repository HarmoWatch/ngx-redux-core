import { ReduxStateDefinition } from './redux-state-definition.interface';

export interface ReduxChildModuleConfig<S = {}> {
  state?: ReduxStateDefinition<S>;
}
