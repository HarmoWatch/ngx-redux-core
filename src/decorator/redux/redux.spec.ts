import { ReduxRegistry } from '../../registry';
import { Redux } from './redux';

@Redux()
class TestModule {

}

describe('Decorator/Redux', () => {

  beforeEach(() => {
    spyOn(ReduxRegistry, 'registerModule');
    expect(ReduxRegistry.registerModule).not.toHaveBeenCalled();
  });

  it('registers', () => {
    const testModule = new TestModule();
    expect(ReduxRegistry.registerModule).toHaveBeenCalledTimes(1);
    expect(ReduxRegistry.registerModule).toHaveBeenCalledWith(testModule);
  });


});
