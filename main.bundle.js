webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./todo/todo.module": [
		"../../../../../src/example-app/todo/todo.module.ts",
		"todo.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/common/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_pipe__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/select/pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReduxCommonModule = /** @class */ (function () {
    function ReduxCommonModule() {
    }
    ReduxCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__select_pipe__["a" /* ReduxSelectPipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__select_pipe__["a" /* ReduxSelectPipe */],
            ],
        })
    ], ReduxCommonModule);
    return ReduxCommonModule;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReduxActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ReduxReducer; });
/* unused harmony export ActionInterface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/select/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__select_public_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__state_public_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/store/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testing_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/testing/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selector_selector__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/selector.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_state_provider__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/state.provider.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__module__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__module__["a"]; });








var ReduxAction = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxActionDecorator"].forMethod;
var ReduxActionContext = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxActionContextDecorator"].forClass;
var getActionType = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxActionDispatcher"].getType;
var ReduxReducer = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxReducerDecorator"].forMethod;
/**
 * interface doesn't work @see https://github.com/angular/angular-cli/issues/2034#issuecomment-302666897 :/
 * @deprecated Please use ActionWithPayload instead
 */
var ActionInterface = /** @class */ (function () {
    function ActionInterface() {
    }
    return ActionInterface;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReduxRootModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_module__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/common/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer_reducer_provider__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/reducer/reducer.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registry__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_definition_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/store/token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ReduxRootModule = /** @class */ (function () {
    function ReduxRootModule(store, reducer, injector, stateDefs) {
        if (store === void 0) { store = null; }
        if (stateDefs === void 0) { stateDefs = []; }
        var _this = this;
        this.reducer = reducer;
        this.injector = injector;
        __WEBPACK_IMPORTED_MODULE_5__registry__["a" /* Registry */].registerStore(store);
        stateDefs
            .filter(function (def) { return def && def.provider; })
            .map(function (def) { return _this.injector.get(def.provider); })
            .forEach(function (provider) { return _this.reducer.addStateProvider(provider); });
    }
    ReduxRootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__common_module__["a" /* ReduxCommonModule */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__store_token__["a" /* ReduxStore */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()), __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__state_definition_token__["a" /* StateDefToken */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_4__reducer_reducer_provider__["a" /* ReducerProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injector */], Array])
    ], ReduxRootModule);
    return ReduxRootModule;
}());

var ReduxModule = /** @class */ (function () {
    function ReduxModule(stateDefs, reducer, injector) {
        if (stateDefs === void 0) { stateDefs = []; }
        var _this = this;
        this.reducer = reducer;
        this.injector = injector;
        stateDefs
            .filter(function (def) { return def && def.provider; })
            .map(function (def) { return _this.injector.get(def.provider); })
            .forEach(function (provider) { return _this.reducer.addStateProvider(provider); });
    }
    ReduxModule_1 = ReduxModule;
    ReduxModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ReduxModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
            ],
        };
    };
    ReduxModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ReduxRootModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__reducer_reducer_provider__["a" /* ReducerProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__store_token__["a" /* ReduxStore */],
                    useFactory: config.storeFactory || ReduxModule_1.defaultStoreFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__reducer_reducer_provider__["a" /* ReducerProvider */]]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_6__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
            ],
        };
    };
    ReduxModule.defaultStoreFactory = function (reducer) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* createStore */])(reducer.reduce.bind(reducer), {}, ReduxModule_1.defaultEnhancerFactory());
    };
    ReduxModule.defaultEnhancerFactory = function () {
        if (console && window['__REDUX_DEVTOOLS_EXTENSION__'] && Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* isDevMode */])()) {
            return window['__REDUX_DEVTOOLS_EXTENSION__']();
        }
        return ReduxModule_1.noopEnhancer;
    };
    ReduxModule.noopEnhancer = function (next) {
        return next;
    };
    ReduxModule = ReduxModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__common_module__["a" /* ReduxCommonModule */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__state_definition_token__["a" /* StateDefToken */])),
        __metadata("design:paramtypes", [Array, __WEBPACK_IMPORTED_MODULE_4__reducer_reducer_provider__["a" /* ReducerProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injector */]])
    ], ReduxModule);
    return ReduxModule;
    var ReduxModule_1;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/reducer/reducer.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReducerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registry__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/registry.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReducerProvider = /** @class */ (function () {
    function ReducerProvider() {
        this.stateProviders = {};
    }
    ReducerProvider.prototype.addStateProvider = function (provider) {
        if (!this.stateProviders[provider.name]) {
            __WEBPACK_IMPORTED_MODULE_1__registry__["a" /* Registry */].registerState(provider);
            this.stateProviders[provider.name] = provider;
        }
    };
    ReducerProvider.prototype.reduce = function (rootState, action) {
        if (action.type === __WEBPACK_IMPORTED_MODULE_1__registry__["a" /* Registry */].ACTION_REGISTER_STATE) {
            var regAction = action;
            return __assign({}, rootState, (_a = {}, _a[regAction.payload.name] = regAction.payload.initialValue, _a));
        }
        return Object.values(this.stateProviders).reduce(function (stateToReduce, provider) {
            return Object.assign({}, stateToReduce, (_a = {},
                _a[provider.name] = provider.reduce(stateToReduce[provider.name], action),
                _a));
            var _a;
        }, rootState);
        var _a;
    };
    ReducerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ReducerProvider);
    return ReducerProvider;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/registry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RegistryReducerItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__ = __webpack_require__("../../../../rxjs/_esm5/AsyncSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");




var RegistryReducerItem = /** @class */ (function () {
    function RegistryReducerItem() {
    }
    return RegistryReducerItem;
}());

var Registry = /** @class */ (function () {
    function Registry() {
    }
    Registry.reset = function () {
        Registry._store = new __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__["a" /* AsyncSubject */]();
        Registry._reducers = [];
    };
    Registry.registerStore = function (store) {
        Registry.reset();
        Registry._store.next(store);
        Registry._store.complete();
        __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxActionDispatcher"].dispatchedActions.subscribe(function (action) {
            store.dispatch(action);
        });
    };
    Registry.registerState = function (state) {
        Registry.getStore().then(function (store) {
            var stateConfig = __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxStateDecorator"].get(state.constructor);
            var initState = state.getInitialState();
            var initStateToResolve = initState;
            if (initState instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) {
                initStateToResolve = initState.toPromise();
            }
            Promise.resolve(initStateToResolve).then(function (initialState) {
                store.dispatch({
                    payload: {
                        initialValue: initialState,
                        name: stateConfig.name,
                    },
                    type: Registry.ACTION_REGISTER_STATE,
                });
            });
        });
    };
    Registry.getStore = function () {
        return new Promise(Registry._store.subscribe.bind(Registry._store));
    };
    Registry.ACTION_REGISTER_STATE = "@harmowatch/ngx-redux-core/registerState";
    Registry._store = new __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__["a" /* AsyncSubject */]();
    Registry._reducers = [];
    return Registry;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/select/decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ReduxSelect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_state_provider__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/state.provider.ts");


function ReduxSelect(expression, context) {
    return function (target, propertyKey) {
        var originalOnInit = target['ngOnInit'];
        Object.defineProperty(target, 'ngOnInit', {
            value: function (injector) {
                var stateName = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxStateDecorator"].get(context).name;
                Object.defineProperty(target, propertyKey, {
                    value: __WEBPACK_IMPORTED_MODULE_1__state_state_provider__["a" /* ReduxStateProvider */].instancesByName[stateName].select(expression)
                });
                if (originalOnInit) {
                    originalOnInit.apply(target, arguments);
                }
            }
        });
    };
}


/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/select/pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_definition_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ReduxSelectPipe = /** @class */ (function () {
    function ReduxSelectPipe(stateDefs, injector) {
        if (stateDefs === void 0) { stateDefs = []; }
        this.provider = injector.get(stateDefs[0].provider);
    }
    ReduxSelectPipe.prototype.transform = function (selector) {
        return this.provider.select(selector);
    };
    ReduxSelectPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* Pipe */])({ name: 'reduxSelect' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__state_definition_token__["a" /* StateDefToken */])),
        __metadata("design:paramtypes", [Array, __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injector */]])
    ], ReduxSelectPipe);
    return ReduxSelectPipe;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/select/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/select/pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorator__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/select/decorator.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__decorator__["a"]; });




/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/selector/selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/registry.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ReduxSelector = /** @class */ (function (_super) {
    __extends(ReduxSelector, _super);
    function ReduxSelector(selector, stateProvider) {
        if (selector === void 0) { selector = '/'; }
        var _this = this;
        if (!selector.startsWith(ReduxSelector.DELIMITER) && !stateProvider) {
            throw new Error('You need to provide a state provider, if you use relative selectors');
        }
        _this = _super.call(this, 1) || this;
        __WEBPACK_IMPORTED_MODULE_3__registry__["a" /* Registry */].getStore().then(function (store) {
            var next = function () {
                _this.next(ReduxSelector.getValueByState(store.getState(), selector, stateProvider));
            };
            store.subscribe(function () { return next(); });
            next(); // we need to trigger a initial value, otherwise we've to wait until the first state change
        });
        return _this;
    }
    ReduxSelector.normalize = function (selector, stateProvider) {
        if (!selector.startsWith(ReduxSelector.DELIMITER)) {
            return "/" + __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__["ReduxStateDecorator"].get(stateProvider).name + "/" + selector;
        }
        return selector;
    };
    ReduxSelector.getValueByState = function (state, selector, stateProvider) {
        /* save the return value in a constant to prevent
         * "Metadata collected contains an error that will be reported at runtime: Lambda not supported."
         * error
         */
        var value = ReduxSelector.normalize(selector, stateProvider).split(ReduxSelector.DELIMITER)
            .filter(function (propertyKey) { return propertyKey !== ''; })
            .reduce(function (previousValue, propertyKey) {
            if (!previousValue || !previousValue.hasOwnProperty(propertyKey)) {
                return null;
            }
            return previousValue[propertyKey];
        }, state);
        return value;
    };
    ReduxSelector.DELIMITER = '/';
    return ReduxSelector;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]));



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateDefToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StateDefToken = /** @class */ (function (_super) {
    __extends(StateDefToken, _super);
    function StateDefToken() {
        return _super.call(this, 'StateDefToken') || this;
    }
    return StateDefToken;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]));



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/state/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__);

var ReduxState = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxStateDecorator"].forClass;


/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/state/state.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxStateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector_selector__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/selector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_definition_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ReduxStateProvider = /** @class */ (function () {
    function ReduxStateProvider(stateDefs) {
        if (stateDefs === void 0) { stateDefs = []; }
        var _this = this;
        this.selectorCache = {};
        var _a = (__WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__["ReduxStateDecorator"].get(this.constructor) || {}).name, name = _a === void 0 ? null : _a;
        if (!name) {
            throw new Error('Unable to resolve state name! Make sure you\'ve decorated the provider by "@ReduxState"!');
        }
        this.name = __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__["ReduxStateDecorator"].get(this.constructor).name;
        this.stateDef = stateDefs.find(function (def) { return __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__["ReduxStateDecorator"].get(def.provider).name === name; });
        if (!this.stateDef) {
            throw new Error('Unable to resolve state definition! Make sure you\'ve registered the provider to ReduxModule!');
        }
        this.reducerMethodsByType = (this.stateDef.reducers || [])
            .map(function (clazz) { return _this.getReducerMethods(new clazz()); })
            .reduce(function (all, curr) { return [].concat(curr, all); }, []) // [].concat keeps the order, all.concat(curr) destroys the order
            .reduce(function (methodsByType, reducer) {
            var type = Object(__WEBPACK_IMPORTED_MODULE_3____["g" /* getActionType */])(reducer.type);
            return __assign({}, methodsByType, (_a = {}, _a[type] = [reducer.method].concat(methodsByType[type] || []), _a));
            var _a;
        }, {});
        ReduxStateProvider.instancesByName[this.name] = this;
    }
    ReduxStateProvider.prototype.getInitialState = function () {
        throw new Error('Method "getInitialState" not implemented.');
    };
    ReduxStateProvider.prototype.select = function (selector) {
        if (selector === void 0) { selector = ''; }
        var stateType = this.constructor;
        selector = __WEBPACK_IMPORTED_MODULE_4__selector_selector__["a" /* ReduxSelector */].normalize(selector, stateType);
        if (!this.selectorCache[selector]) {
            this.selectorCache[selector] = new __WEBPACK_IMPORTED_MODULE_4__selector_selector__["a" /* ReduxSelector */](selector, stateType).distinctUntilChanged();
        }
        return this.selectorCache[selector];
    };
    ReduxStateProvider.prototype.reduce = function (state, action) {
        var reducerMethods = this.reducerMethodsByType[action.type] || [];
        return reducerMethods.reduce(function (stateToReduce, method) { return method(stateToReduce, action); }, state);
    };
    ReduxStateProvider.prototype.getReducerMethods = function (reducerClassInstance) {
        return Object.values(Object.getPrototypeOf(reducerClassInstance))
            .map(function (method) {
            return {
                method: method.bind(reducerClassInstance),
                type: __WEBPACK_IMPORTED_MODULE_2__harmowatch_redux_decorators__["ReduxReducerDecorator"].get(method),
            };
        })
            .filter(function (type) { return type != null; })
            .reduce(function (all, curr) { return all.concat([].concat(curr.type).map(function (type) { return (__assign({}, curr, { type: type })); })); }, []);
    };
    ReduxStateProvider.instancesByName = {};
    ReduxStateProvider = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__state_definition_token__["a" /* StateDefToken */])),
        __metadata("design:paramtypes", [Array])
    ], ReduxStateProvider);
    return ReduxStateProvider;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/store/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/store/token.ts");
/* unused harmony namespace reexport */



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/store/token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ReduxStore = /** @class */ (function (_super) {
    __extends(ReduxStore, _super);
    function ReduxStore() {
        return _super.call(this, 'ReduxStore') || this;
    }
    return ReduxStore;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]));



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/testing/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReduxTestingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_module__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/common/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/testing/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_definition_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ReduxTestingModule = /** @class */ (function () {
    function ReduxTestingModule(store) {
        if (store === void 0) { store = null; }
        if (store) {
            __WEBPACK_IMPORTED_MODULE_3__registry__["a" /* Registry */].reset();
            __WEBPACK_IMPORTED_MODULE_3__registry__["a" /* Registry */].registerStore(store);
        }
    }
    ReduxTestingModule_1 = ReduxTestingModule;
    ReduxTestingModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ReduxTestingModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* ReduxTestingStore */], useFactory: config.storeFactory || ReduxTestingModule_1.defaultStoreFactory },
                { provide: __WEBPACK_IMPORTED_MODULE_5__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
            ],
        };
    };
    ReduxTestingModule.defaultStoreFactory = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__store__["a" /* ReduxTestingStore */]();
    };
    ReduxTestingModule = ReduxTestingModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__common_module__["a" /* ReduxCommonModule */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__store__["a" /* ReduxTestingStore */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__store__["a" /* ReduxTestingStore */])),
        __metadata("design:paramtypes", [Object])
    ], ReduxTestingModule);
    return ReduxTestingModule;
    var ReduxTestingModule_1;
}());



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/testing/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/testing/module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/testing/store.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/testing/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxTestingStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReduxTestingStore = /** @class */ (function () {
    function ReduxTestingStore() {
        this.state = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    ReduxTestingStore.prototype.setState = function (state, value) {
        var _this = this;
        var name = __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxStateDecorator"].get(state).name;
        var nextState = Object.assign({}, this.state.getValue(), (_a = {},
            _a[name] = value,
            _a));
        this.state.next(nextState);
        return this.state
            .takeWhile(function (currentState) { return currentState !== nextState; })
            .toPromise().then(function () { return _this.state.getValue(); });
        var _a;
    };
    ReduxTestingStore.prototype.getState = function () {
        return this.state.getValue();
    };
    ReduxTestingStore.prototype.subscribe = function (listener) {
        return this.state.subscribe.call(this.state, listener);
    };
    ReduxTestingStore.prototype.replaceReducer = function () {
    };
    ReduxTestingStore.prototype.dispatch = function (action) {
        return action;
    };
    ReduxTestingStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ReduxTestingStore);
    return ReduxTestingStore;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/example-app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/example-app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/example-app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/example-app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/example-app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/example-app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harmowatch_ngx_redux_core__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/example-app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__harmowatch_ngx_redux_core__["c" /* ReduxModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'todo', loadChildren: './todo/todo.module#TodoModule' },
                    { path: '', redirectTo: 'todo', pathMatch: 'prefix' },
                ], { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example_app_app_module__ = __webpack_require__("../../../../../src/example-app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__example_app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map