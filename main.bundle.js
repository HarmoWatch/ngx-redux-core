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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/example-app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__harmowatch_ngx_redux_core_redux_module__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/redux.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__harmowatch_ngx_redux_core_redux_module__["a" /* ReduxModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'todo', loadChildren: './todo/todo.module#TodoModule' },
                    { path: '', redirectTo: 'todo', pathMatch: 'prefix' },
                ], { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/harmowatch/ngx-redux-core/pipes/redux-select.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens_redux_state_definition_token__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/tokens/redux-state-definition.token.ts");
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
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__tokens_redux_state_definition_token__["a" /* ReduxStateDefinitionToken */])),
        __metadata("design:paramtypes", [Array, __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injector */]])
    ], ReduxSelectPipe);
    return ReduxSelectPipe;
}());



/***/ }),

/***/ "../../../../../src/harmowatch/ngx-redux-core/providers/redux-reducer.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxReducerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_registry__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/providers/redux-registry.ts");
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


var ReduxReducerProvider = /** @class */ (function () {
    function ReduxReducerProvider() {
        this.stateProviders = {};
    }
    ReduxReducerProvider.prototype.addStateProvider = function (provider) {
        if (!this.stateProviders[provider.name]) {
            __WEBPACK_IMPORTED_MODULE_1__redux_registry__["a" /* ReduxRegistry */].registerState(provider);
            this.stateProviders[provider.name] = provider;
        }
    };
    ReduxReducerProvider.prototype.reduce = function (rootState, action) {
        if (action.type === __WEBPACK_IMPORTED_MODULE_1__redux_registry__["a" /* ReduxRegistry */].ACTION_REGISTER_STATE) {
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
    ReduxReducerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ReduxReducerProvider);
    return ReduxReducerProvider;
}());



/***/ }),

/***/ "../../../../../src/harmowatch/ngx-redux-core/providers/redux-registry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RegistryReducerItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__ = __webpack_require__("../../../../rxjs/_esm5/AsyncSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tokens_redux_store_token__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/tokens/redux-store.token.ts");
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






var RegistryReducerItem = /** @class */ (function () {
    function RegistryReducerItem() {
    }
    return RegistryReducerItem;
}());

var ReduxRegistry = /** @class */ (function () {
    function ReduxRegistry(store) {
        if (store === void 0) { store = null; }
        ReduxRegistry_1.reset();
        ReduxRegistry_1.registerStore(store);
    }
    ReduxRegistry_1 = ReduxRegistry;
    ReduxRegistry.reset = function () {
        ReduxRegistry_1._store = new __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__["a" /* AsyncSubject */]();
        ReduxRegistry_1._reducers = [];
    };
    ReduxRegistry.registerStore = function (store) {
        ReduxRegistry_1.reset();
        ReduxRegistry_1._store.next(store);
        ReduxRegistry_1._store.complete();
        __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxActionDispatcher"].dispatchedActions.subscribe(function (action) {
            store.dispatch(action);
        });
    };
    ReduxRegistry.registerState = function (state) {
        ReduxRegistry_1.getStore().then(function (store) {
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
                    type: ReduxRegistry_1.ACTION_REGISTER_STATE,
                });
            });
        });
    };
    ReduxRegistry.getStore = function () {
        return new Promise(ReduxRegistry_1._store.subscribe.bind(ReduxRegistry_1._store));
    };
    ReduxRegistry.ACTION_REGISTER_STATE = "@harmowatch/ngx-redux-core/registerState";
    ReduxRegistry._store = new __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__["a" /* AsyncSubject */]();
    ReduxRegistry._reducers = [];
    ReduxRegistry = ReduxRegistry_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__tokens_redux_store_token__["a" /* ReduxStore */])),
        __metadata("design:paramtypes", [Object])
    ], ReduxRegistry);
    return ReduxRegistry;
    var ReduxRegistry_1;
}());



/***/ }),

/***/ "../../../../../src/harmowatch/ngx-redux-core/redux.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_redux_select_pipe__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/pipes/redux-select.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_redux_reducer_provider__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/providers/redux-reducer.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tokens_redux_state_definition_token__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/tokens/redux-state-definition.token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_redux_registry__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/providers/redux-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tokens_redux_store_token__ = __webpack_require__("../../../../../src/harmowatch/ngx-redux-core/tokens/redux-store.token.ts");
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








var ReduxModule = /** @class */ (function () {
    function ReduxModule(injector, reducer, stateDefs) {
        if (stateDefs === void 0) { stateDefs = []; }
        injector.get(__WEBPACK_IMPORTED_MODULE_6__providers_redux_registry__["a" /* ReduxRegistry */]); // just make the the provider is instantiated
        if (Array.isArray(stateDefs)) {
            stateDefs
                .filter(function (def) { return def && def.provider; })
                .map(function (def) { return injector.get(def.provider); })
                .forEach(function (provider) { return reducer.addStateProvider(provider); });
        }
    }
    ReduxModule_1 = ReduxModule;
    ReduxModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ReduxModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__tokens_redux_state_definition_token__["a" /* ReduxStateDefinitionToken */], useValue: config.state || null, multi: true },
            ],
        };
    };
    ReduxModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ReduxModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_redux_reducer_provider__["a" /* ReduxReducerProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_redux_registry__["a" /* ReduxRegistry */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__tokens_redux_store_token__["a" /* ReduxStore */],
                    useFactory: config.storeFactory || ReduxModule_1.defaultStoreFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__providers_redux_reducer_provider__["a" /* ReduxReducerProvider */]]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_5__tokens_redux_state_definition_token__["a" /* ReduxStateDefinitionToken */], useValue: config.state || null, multi: true },
            ],
        };
    };
    ReduxModule.defaultStoreFactory = function (reducer) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* createStore */])(reducer.reduce.bind(reducer), {}, ReduxModule_1.defaultEnhancerFactory());
    };
    ReduxModule.defaultEnhancerFactory = function () {
        if (console && window['__REDUX_DEVTOOLS_EXTENSION__'] && Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_16" /* isDevMode */])()) {
            return window['__REDUX_DEVTOOLS_EXTENSION__']();
        }
        return ReduxModule_1.noopEnhancer;
    };
    ReduxModule.noopEnhancer = function (next) {
        return next;
    };
    ReduxModule = ReduxModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_redux_select_pipe__["a" /* ReduxSelectPipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_redux_select_pipe__["a" /* ReduxSelectPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__tokens_redux_state_definition_token__["a" /* ReduxStateDefinitionToken */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_4__providers_redux_reducer_provider__["a" /* ReduxReducerProvider */], Array])
    ], ReduxModule);
    return ReduxModule;
    var ReduxModule_1;
}());



/***/ }),

/***/ "../../../../../src/harmowatch/ngx-redux-core/tokens/redux-state-definition.token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxStateDefinitionToken; });
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

var ReduxStateDefinitionToken = /** @class */ (function (_super) {
    __extends(ReduxStateDefinitionToken, _super);
    function ReduxStateDefinitionToken() {
        return _super.call(this, 'ReduxStateDefinitionToken') || this;
    }
    return ReduxStateDefinitionToken;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]));



/***/ }),

/***/ "../../../../../src/harmowatch/ngx-redux-core/tokens/redux-store.token.ts":
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