import { ReduxStateDefinition } from './redux-state-definition.interface';

export interface ReduxModuleChildConfig<S = {}> {
  state?: ReduxStateDefinition<S>;
}
