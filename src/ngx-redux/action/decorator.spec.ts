import { async, TestBed } from '@angular/core/testing';
import { ReduxTestingModule } from '../testing/module';
import { ReduxTestingStore } from '../testing/store';
import { ReduxAction } from './decorator';
import { ActionInterface } from './interface';

describe('decorator/ReduxAction', () => {

  let store: ReduxTestingStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        ReduxTestingModule,
      ],
    });

    store = TestBed.get(ReduxTestingStore);
    dispatchSpy = spyOn(store, 'dispatch');

  }));

  describe('dispatcher without ReduxContext', () => {

    [ {
      desc: 'without custom action type',
      type: null,
    }, {
      desc: 'with custom action type "my-cool-action-type"',
      type: 'my-cool-action-type'
    } ].forEach(actionTypeConfig => {

      const actionCfg = actionTypeConfig.type ? {type: actionTypeConfig.type} : {};

      describe(actionTypeConfig.desc, () => {

        class TestDispatcher {

          public static testPayload = {
            id: 13323,
            foo: 'bar',
          };

          @ReduxAction(actionCfg)
          actionWithOutPayload() {
          }

          @ReduxAction(actionCfg)
          actionWithPrimitivePayload() {
            return TestDispatcher.testPayload;
          }

          @ReduxAction(actionCfg)
          actionWithResolvedPromisePayload() {
            return Promise.resolve(TestDispatcher.testPayload);
          }

        }

        let fixture: TestDispatcher;

        beforeEach(() => fixture = new TestDispatcher());

        [ {
          desc: 'actionWithOutPayload()',
          action: TestDispatcher.prototype.actionWithOutPayload,
          dispatchedAction: {
            payload: undefined,
            type: actionTypeConfig.type || 'actionWithOutPayload',
          }
        }, {
          desc: 'actionWithPrimitivePayload()',
          action: TestDispatcher.prototype.actionWithPrimitivePayload,
          dispatchedAction: {
            payload: TestDispatcher.testPayload,
            type: actionTypeConfig.type || 'actionWithPrimitivePayload',
          }
        }, {
          desc: 'actionWithResolvedPromisePayload()',
          action: TestDispatcher.prototype.actionWithResolvedPromisePayload,
          dispatchedAction: {
            payload: TestDispatcher.testPayload,
            type: actionTypeConfig.type || 'actionWithResolvedPromisePayload',
          }
        } ].forEach(cfg => {
          describe(cfg.desc, () => {

            let dispatchedAction: ActionInterface<{}>;

            beforeEach((done) => {
              expect(store.dispatch).toHaveBeenCalledTimes(0);

              dispatchSpy.and.callFake(action => {
                dispatchedAction = action;
                done();
              });

              cfg.action();
            });

            it('dispatches the action with the correct type', () => {
              expect(dispatchedAction.type).toEqual(cfg.dispatchedAction.type);
            });

            it('dispatches the action with the correct payload', () => {
              expect(dispatchedAction.payload).toEqual(cfg.dispatchedAction.payload);
            });

          });

        });

      });

    });

  });

});
