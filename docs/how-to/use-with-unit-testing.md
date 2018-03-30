###### [@harmowatch/ngx-redux-core](../../README.md) / [docs](../index.md) / [how to](./index.md)
 
# Use With Unit Testing

The ReduxTestingStore provides a [Store](https://redux.js.org/docs/api/Store.html) implementation that can be used in 
your unit tests. It adds an additional method `setState()` which allows for easy manipulation of the state.

## Example

*your.module.state.provider.ts*

```ts
@Injectable()
@ReduxState({name: 'your'})
export class YourModuleStateProvider extends ReduxStateProvider<YourModuleState> {

  public static readonly DEFAULT_STATE: YourModuleState = {
    component: {
      value: ''
    }
  };

  public static getValue(): Observable<String> {
    return new ReduxSelector('component/value', YourModuleStateProvider);
  }

  getInitialState(): YourModuleState {
    return YourModuleStateProvider.DEFAULT_STATE;
  }

}
```

*component.ts*

```ts
@Component({
  selector: 'component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
@ReduxActionContext({prefix: 'Component://'})
export class YourComponent {

  public value: Observable<String> = YourModuleStateProvider.getValue();

  // ...
}
```

*component.html*

```html
<div class="form-group">
  <input type="text" [value]="value | async">
</div>
```

*component.spec.ts*

```ts
describe('your component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YourComponent],
      imports: [
        ReduxModule.forRoot({
          storeFactory: ReduxTestingStore.factory,
          state: {
            provider: YourModuleStateProvider,
          }
        }),
      ],
      providers: [
        YourModuleStateProvider
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    testingStore = TestBed.get(ReduxStore);
    fixture = TestBed.createComponent(YourComponent);
    fixture.detectChanges();
  });

  it('should retrieve it\'s value from state provider', () => {
    fixture.whenRenderingDone().then(() => {
      const state = YourModuleStateProvider.DEFAULT_STATE;
      state.component.someKey = 'some value';

      testingStore.setState(YourModuleStateProvider, state).then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const el = fixture.debugElement.query(By.css('input')).nativeElement;

          expect(el.value).toBe('some value');
        });
      });
    });
  });
});
```