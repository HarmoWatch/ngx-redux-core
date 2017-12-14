import { MetadataManager } from '../../metadata/manager';
import { ReduxReducerDecoratorMetadata } from '../../reducer/decorator/metadata';
import { Registry } from '../../registry';
import { StateDefinition } from '../definition';

export class StateDefinitionManager {

  public static registerReducers(stateDef: StateDefinition) {
    if (stateDef.reducers) {
      const stateMetadata = MetadataManager.getStateMetadata(stateDef.provider);

      stateDef.reducers
        .map((reducer) => MetadataManager.getReducerMetadata(reducer))
        .forEach((metadata: ReduxReducerDecoratorMetadata) => {
          metadata.reducers.forEach(reducer => {
            Registry.registerReducer(stateMetadata.name, reducer.types, reducer.reducer);
          });
        });
    }
  }

}
