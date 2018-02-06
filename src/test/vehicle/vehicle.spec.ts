// import { async, TestBed } from '@angular/core/testing';
// import { configureTestingModule } from '../test-bed';
// import { BikeActionsProvider } from './bike/bike.actions.provider';
// import { BikeState } from './bike/bike.state';
//
// describe('Integration Test', () => {
//
//   let testBikeActions: BikeActionsProvider;
//   let testBikeStateProvider: TestBikeStateProvider;
//   let testBikeStateProviderRootSelectSpy: jasmine.Spy;
//   let testBikeStateProviderMenuOpenSelectSpy: jasmine.Spy;
//
//   function resetSpies() {
//     testBikeStateProviderRootSelectSpy.calls.reset();
//     testBikeStateProviderMenuOpenSelectSpy.calls.reset();
//   }
//
//   beforeEach(async(() => {
//     configureTestingModule();
//     testBikeStateProviderRootSelectSpy = jasmine.createSpy('fooState/');
//     testBikeStateProviderMenuOpenSelectSpy = jasmine.createSpy('fooState/menu/open');
//
//     testBikeActions = TestBed.get(BikeActions);
//     testBikeStateProvider = TestBed.get(TestBikeStateProvider);
//   }));
//
//   beforeEach(async(() => {
//     testBikeStateProvider.select().subscribe(testBikeStateProviderRootSelectSpy);
//     testBikeStateProvider.select('menu/open').subscribe(testBikeStateProviderMenuOpenSelectSpy);
//   }));
//
//   it('is initialized well', () => {
//     expect(testBikeStateProviderRootSelectSpy).toHaveBeenCalledTimes(1);
//     expect(testBikeStateProviderRootSelectSpy).toHaveBeenCalledWith(TestBikeStateProvider.initialState);
//   });
//
//   describe('todo add', () => {
//
//     beforeEach(async(() => {
//       resetSpies();
//       testBikeActions.addBike('new foo');
//     }));
//
//     it('will add a foo', () => {
//
//       const expectedState: BikeState = {
//         ...TestBikeStateProvider.initialState,
//         list: {
//           ...TestBikeStateProvider.initialState.list,
//           items: TestBikeStateProvider.initialState.list.items.concat('new foo'),
//         }
//       };
//
//       expect(testBikeStateProviderMenuOpenSelectSpy).not.toHaveBeenCalled();
//
//       expect(testBikeStateProviderRootSelectSpy).toHaveBeenCalledTimes(1);
//       expect(testBikeStateProviderRootSelectSpy).toHaveBeenCalledWith(expectedState);
//
//     });
//
//   });
//
// });
