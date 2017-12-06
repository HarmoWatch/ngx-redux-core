import { async } from '@angular/core/testing';
import { MetadataManager } from '../../metadata/manager';
import { Registry } from '../../registry';
import { ActionFunctionType } from '../function-type';
import { ReduxActionManager } from './redux-action-manager';

describe('ReduxActionManager', () => {

  describe('getType()', () => {

    beforeEach(() => {
      spyOn(MetadataManager, 'getActionMetadata').and.callFake(t => t.metadata);
      spyOn(MetadataManager, 'getActionContextMetadata').and.callFake(ctx => ctx ? ctx.metadata : {});
    });

    it('returns the correct type', () => {
      const target = {
        metadata: {
          type: 'custom-type',
          contextClazz: {
            metadata: {
              prefix: 'foo://'
            },
          },
        }
      } as {} as ActionFunctionType<{}>;

      expect(ReduxActionManager.getType(target)).toEqual('foo://custom-type');
    });

  });

  describe('dispatch()', () => {

    let dispatch: jasmine.Spy;
    let target: ActionFunctionType<{}>;

    beforeEach(() => {
      dispatch = jasmine.createSpy();

      target = {
        type: 'custom-type',
      } as {} as ActionFunctionType<{}>;

      spyOn(ReduxActionManager, 'getType').and.callFake(t => t.type);
      spyOn(Registry, 'getStore').and.returnValue({dispatch});
    });

    describe('payload is a promise', () => {

      describe('that resolves', () => {

        const expectedPayload = {foo: 'bar'};

        beforeEach(async(() => {
          ReduxActionManager.dispatch(target, Promise.resolve(expectedPayload));
        }));

        it('dispatches the action', () => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenCalledWith({
            type: 'custom-type',
            payload: expectedPayload,
          });
        });

      });

      describe('that rejects', () => {

        beforeEach(async(() => {
          ReduxActionManager.dispatch(target, Promise.reject('Some error'))
            .catch(() => null);
        }));

        it('does not dispatch any action', () => {
          expect(dispatch).toHaveBeenCalledTimes(0);
        });

      });

    });

    describe('payload is a primitive value', () => {

      const expectedPayload = {foo: 'bar'};

      beforeEach(async(() => {
        ReduxActionManager.dispatch(target, expectedPayload);
      }));

      it('dispatches the action', () => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: 'custom-type',
          payload: expectedPayload,
        });
      });

    });

  });

  describe('createProxy()', () => {

    it('creates a proxy function', () => {
      spyOn(ReduxActionManager, 'dispatch');

      const payload = {sample: 'payload'};
      const value = jasmine.createSpy('PropertyDescriptor.value').and.returnValue(payload);
      const proxy = ReduxActionManager.createProxy({value} as {} as PropertyDescriptor);

      expect(proxy('foo', 'bar', 132)).toEqual(payload);
      expect(value).toHaveBeenCalledTimes(1);
      expect(ReduxActionManager.dispatch).toHaveBeenCalledTimes(1);
      expect(ReduxActionManager.dispatch).toHaveBeenCalledWith(value, payload);
    });

  });

});
