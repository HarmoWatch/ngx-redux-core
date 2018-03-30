###### [@harmowatch/ngx-redux-core](../../README.md) / [articles](./index.md)

# Testing Guide

## Matcher

There are some jasmine matchers provided by this package. This makes it easy to test whether a method triggers a redux action and 
if the reducer really listens to it. There is also a matcher available which will ensure that the reducer does not work on the state reference.

### Installation

#### Add the framework and the plugin to your karma config

```js
module.exports = function (config) {
  config.set({
    // ...
    frameworks: ['jasmine', '@angular/cli', '@harmowatch/ngx-redux-core'], // (1) Enable the framework
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('@harmowatch/ngx-redux-core/plugins/karma') // (2) Require the plugin
    ],
    // ...
  });
};
```

### Usage

##### toDispatchAction

```ts
it('will dispatch a redux action', () => {
  expect(TodoListComponent.prototype.toggleListMode).toDispatchAction();
  // or test for a specific action name
  expect(TodoListComponent.prototype.toggleListMode).toDispatchAction('toggleListMode');
});
```

##### toReduceOn

```ts
it('listens to the correct actions', () => {
  expect(TodoReducer.prototype.add).toReduceOn(TodoListComponent.prototype.add);
});

// or you can check for many actions
it('listens to the correct actions', () => {
  expect(TodoReducer.prototype.add).toReduceOn(
    'addTodo',
    TodoComponent.prototype.add,
    TodoListComponent.prototype.add,
  );
});
```

##### notToMutateTheGivenState

```ts
it('does not mutate the given state', () => {
  expect(TodoReducer.prototype.add).notToMutateTheGivenState(state);
});
```

## ReduxTestingStore

The ReduxTestingStore provides a [Store](https://redux.js.org/docs/api/Store.html) implementation that can be used in 
your unit tests. It adds an additional method `setState()` which allows easy state manipulation.

### Example  

```ts
describe('TodoListComponent', () => {

  let fixture: ComponentFixture<TodoListComponent>;
  let testingStore: ReduxTestingStore;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent
      ],
      imports: [
        ReduxModule.forRoot({
          storeFactory: ReduxTestingStore.factory, // (1) Provide the ReduxTestingStore.factory
          state: {
            provider: TodoStateProvider,
          }
        })
      ],
      providers: [
        TodoStateProvider,
      ],
    }).compileComponents();
  }));
  
  beforeEach(async(() => {
    testingStore = TestBed.get(ReduxStore);
    fixture = TestBed.createComponent(TodoListComponent);
    fixture.detectChanges();
  }));

  describe('todo rendering', () => {

    beforeEach(async(() => {

      /*
       * set the state in a async beforeEach block, so your "it" is called after the state change was applied
       */
      testingStore.setState<TodoState>(TodoStateProvider, {
        ...TodoStateProvider.default,
        items: [{
          uuid: '14cf5fdb-afcf-4297-9507-ff645e47d3af',
          label: 'Some todo',
          creationDate: '2018-03-30T14:44:01.452Z',
        }, {
          uuid: '38150de6-7ad6-4007-af71-409a668a449e',
          label: 'Some other todo',
          creationDate: '2018-03-30T14:44:26.796Z',
        }],
      }).then(() => fixture.detectChanges());

    }));

    it('displays two todo items', () => {

      const todos = fixture.debugElement.queryAll(By.css('.todo-item > span'))
        .map(({nativeElement}) => nativeElement.innerText.trim());

      expect(todos).toEqual([
        'Some todo',
        'Some other todo',
      ]);

    });

  });
  
});
```
