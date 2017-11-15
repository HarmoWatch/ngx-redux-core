import { MetadataManager } from '../../metadata/manager';
import { ReduxActionContext } from './decorator';

describe('action/context/decorator', () => {

  it('sets the correct meta data', () => {
    spyOn(MetadataManager, 'setActionContextMetadata');

    const expectedContext = {
      prefix: 'YOLO',
    };

    @ReduxActionContext(expectedContext)
    class TestClass {

    }

    expect(MetadataManager.setActionContextMetadata).toHaveBeenCalledTimes(1);
    expect(MetadataManager.setActionContextMetadata).toHaveBeenCalledWith(TestClass, expectedContext);

  });


});
