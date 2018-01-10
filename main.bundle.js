webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./todo/todo.module": [
		"../../../../../src/app/todo/todo.module.ts",
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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_redux_module__ = __webpack_require__("../../../../../src/ngx-redux/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_redux_module__["a" /* ReduxModule */].forRoot(),
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/ngx-redux/common/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_pipe__ = __webpack_require__("../../../../../src/ngx-redux/select/pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReduxCommonModule = (function () {
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

/***/ "../../../../../src/ngx-redux/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReduxRootModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_module__ = __webpack_require__("../../../../../src/ngx-redux/common/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_root_reducer__ = __webpack_require__("../../../../../src/ngx-redux/module/root/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registry__ = __webpack_require__("../../../../../src/ngx-redux/registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_definition_manager__ = __webpack_require__("../../../../../src/ngx-redux/state/definition/manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_definition_token__ = __webpack_require__("../../../../../src/ngx-redux/state/definition/token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_token__ = __webpack_require__("../../../../../src/ngx-redux/store/token.ts");
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









var ReduxRootModule = (function () {
    function ReduxRootModule(store, stateDefinitionManager, stateDefs) {
        if (store === void 0) { store = null; }
        if (stateDefs === void 0) { stateDefs = []; }
        this.stateDefinitionManager = stateDefinitionManager;
        __WEBPACK_IMPORTED_MODULE_5__registry__["a" /* Registry */].registerStore(store);
        this.stateDefinitionManager.add(stateDefs);
    }
    ReduxRootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__common_module__["a" /* ReduxCommonModule */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__state_definition_manager__["a" /* StateDefinitionManager */],
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__store_token__["a" /* ReduxStore */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__state_definition_token__["a" /* StateDefToken */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_6__state_definition_manager__["a" /* StateDefinitionManager */], Array])
    ], ReduxRootModule);
    return ReduxRootModule;
}());

var ReduxModule = (function () {
    function ReduxModule(stateDefs, stateDefinitionManager) {
        if (stateDefs === void 0) { stateDefs = []; }
        this.stateDefinitionManager = stateDefinitionManager;
        this.stateDefinitionManager.add(stateDefs);
    }
    ReduxModule_1 = ReduxModule;
    ReduxModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ReduxModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
                config.state ? config.state.provider : null,
            ],
        };
    };
    ReduxModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ReduxRootModule,
            providers: config.state ? [
                { provide: __WEBPACK_IMPORTED_MODULE_8__store_token__["a" /* ReduxStore */], useFactory: config.storeFactory || ReduxModule_1.defaultStoreFactory },
                { provide: __WEBPACK_IMPORTED_MODULE_7__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
                config.state ? config.state.provider : null,
            ] : [
                { provide: __WEBPACK_IMPORTED_MODULE_8__store_token__["a" /* ReduxStore */], useFactory: config.storeFactory || ReduxModule_1.defaultStoreFactory },
                { provide: __WEBPACK_IMPORTED_MODULE_7__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
            ],
        };
    };
    ReduxModule.defaultStoreFactory = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_4__module_root_reducer__["a" /* ReduxModuleRootReducer */].reduce, {}, ReduxModule_1.defaultEnhancerFactory());
    };
    ReduxModule.defaultEnhancerFactory = function () {
        if (console && window['__REDUX_DEVTOOLS_EXTENSION__'] && Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* isDevMode */])()) {
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
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__state_definition_manager__["a" /* StateDefinitionManager */],
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__state_definition_token__["a" /* StateDefToken */])),
        __metadata("design:paramtypes", [Array, __WEBPACK_IMPORTED_MODULE_6__state_definition_manager__["a" /* StateDefinitionManager */]])
    ], ReduxModule);
    return ReduxModule;
    var ReduxModule_1;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/module/root/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxModuleRootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registry__ = __webpack_require__("../../../../../src/ngx-redux/registry.ts");

var ReduxModuleRootReducer = (function () {
    function ReduxModuleRootReducer() {
    }
    ReduxModuleRootReducer.reduce = function (state, action) {
        if (action.type === __WEBPACK_IMPORTED_MODULE_0__registry__["a" /* Registry */].ACTION_REGISTER_STATE) {
            return ReduxModuleRootReducer.reduceRegisterState(state, action);
        }
        return ReduxModuleRootReducer.reduceByRegisteredReducers(state, action);
    };
    ReduxModuleRootReducer.reduceRegisterState = function (state, action) {
        var _a = action.payload, name = _a.name, initialValue = _a.initialValue;
        return Object.assign({}, state, (_b = {},
            _b[name] = initialValue,
            _b));
        var _b;
    };
    ReduxModuleRootReducer.reduceByRegisteredReducers = function (state, action) {
        var reducers = __WEBPACK_IMPORTED_MODULE_0__registry__["a" /* Registry */].getReducerItemsByType(action.type);
        return reducers.reduce(function (stateToReduce, reducerItem) {
            var stateName = reducerItem.stateName, reducer = reducerItem.reducer;
            return Object.assign({}, stateToReduce, (_a = {},
                _a[stateName] = reducer(stateToReduce[stateName], action),
                _a));
            var _a;
        }, state);
    };
    return ReduxModuleRootReducer;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/registry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RegistryReducerItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/@harmowatch/redux-decorators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__ = __webpack_require__("../../../../rxjs/_esm5/AsyncSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");




var RegistryReducerItem = (function () {
    function RegistryReducerItem() {
    }
    return RegistryReducerItem;
}());

var Registry = (function () {
    function Registry() {
    }
    Registry.reset = function () {
        Registry._store = new __WEBPACK_IMPORTED_MODULE_2_rxjs_AsyncSubject__["a" /* AsyncSubject */]();
        Registry._reducers = [];
    };
    Registry.registerStore = function (store) {
        Registry._store.next(store);
        Registry._store.complete();
        __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["c" /* ReduxActionDispatcher */].dispatchedActions.subscribe(function (action) {
            store.dispatch(action);
        });
    };
    Registry.registerReducer = function (stateName, types, reducer) {
        if (Array.isArray(types)) {
            types.forEach(function (type) {
                Registry._reducers.push({
                    reducer: reducer,
                    stateName: stateName,
                    type: type,
                });
            });
        }
        else {
            Registry._reducers.push({
                reducer: reducer,
                stateName: stateName,
                type: types,
            });
        }
    };
    Registry.registerState = function (state) {
        Registry.getStore().then(function (store) {
            var stateConfig = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["e" /* ReduxStateDecorator */].get(state.constructor);
            var initState = state.getInitialState();
            var initStateToResolve = initState;
            if (initState instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]) {
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
    Registry.getReducerItemsByType = function (type) {
        return Registry._reducers
            .filter(function (reducerItem) { return __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["c" /* ReduxActionDispatcher */].getType(reducerItem.type) === type; });
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

/***/ "../../../../../src/ngx-redux/select/pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/ngx-redux/selector/cache/selector-cache-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_definition_token__ = __webpack_require__("../../../../../src/ngx-redux/state/definition/token.ts");
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




var ReduxSelectPipe = (function () {
    function ReduxSelectPipe(stateDefs) {
        if (stateDefs === void 0) { stateDefs = []; }
        this.stateDef = stateDefs[0];
    }
    ReduxSelectPipe.prototype.transform = function (selector) {
        return __WEBPACK_IMPORTED_MODULE_2__selector_cache_selector_cache_factory__["a" /* ReduxSelectorCacheFactory */].getOrCreate(selector, this.stateDef.provider).distinctUntilChanged();
    };
    ReduxSelectPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'reduxSelect' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__state_definition_token__["a" /* StateDefToken */])),
        __metadata("design:paramtypes", [Array])
    ], ReduxSelectPipe);
    return ReduxSelectPipe;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/@harmowatch/redux-decorators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry__ = __webpack_require__("../../../../../src/ngx-redux/registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/ngx-redux/selector/cache/selector-cache-factory.ts");
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





var ReduxSelector = (function (_super) {
    __extends(ReduxSelector, _super);
    function ReduxSelector(selector, stateProvider) {
        if (selector === void 0) { selector = '/'; }
        var _this = _super.call(this, function (observer) {
            __WEBPACK_IMPORTED_MODULE_3__registry__["a" /* Registry */].getStore().then(function (store) {
                var next = function () { return observer.next(ReduxSelector.getValueByState(store.getState(), selector, stateProvider)); };
                store.subscribe(function () { return next(); });
                next(); // we need to trigger a initial value, otherwise we've to wait until the first state change
            });
        }) || this;
        if (!__WEBPACK_IMPORTED_MODULE_4__selector_cache_selector_cache_factory__["a" /* ReduxSelectorCacheFactory */].has(selector, stateProvider)) {
            __WEBPACK_IMPORTED_MODULE_4__selector_cache_selector_cache_factory__["a" /* ReduxSelectorCacheFactory */].set(_this, selector, stateProvider);
        }
        return _this;
    }
    ReduxSelector.create = function (selector, stateProvider) {
        return new ReduxSelector(selector, stateProvider);
    };
    ReduxSelector.getAbsoluteSelector = function (selector, stateProvider) {
        if (!selector.startsWith(ReduxSelector.DELIMITER)) {
            if (!stateProvider) {
                throw new Error('You need to provide a state provider, if you use relative selectors');
            }
            return "/" + __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["e" /* ReduxStateDecorator */].get(stateProvider).name + "/" + selector;
        }
        return selector;
    };
    ReduxSelector.getValueByState = function (state, selector, stateProvider) {
        return ReduxSelector.getAbsoluteSelector(selector, stateProvider).split(ReduxSelector.DELIMITER)
            .filter(function (propertyKey) { return propertyKey !== ''; })
            .reduce(function (previousValue, propertyKey) {
            if (!previousValue || !previousValue.hasOwnProperty(propertyKey)) {
                return null;
            }
            return previousValue[propertyKey];
        }, state);
    };
    ReduxSelector.DELIMITER = '/';
    return ReduxSelector;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]));



/***/ }),

/***/ "../../../../../src/ngx-redux/selector/cache/selector-cache-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelectorCacheFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector__ = __webpack_require__("../../../../../src/ngx-redux/selector.ts");

var ReduxSelectorCacheFactory = (function () {
    function ReduxSelectorCacheFactory() {
    }
    ReduxSelectorCacheFactory.clear = function () {
        ReduxSelectorCacheFactory.selectors = {};
    };
    ReduxSelectorCacheFactory.getOrCreate = function (selector, stateProvider) {
        if (ReduxSelectorCacheFactory.has(selector, stateProvider)) {
            return ReduxSelectorCacheFactory.get(selector, stateProvider);
        }
        return new __WEBPACK_IMPORTED_MODULE_0__selector__["a" /* ReduxSelector */](selector, stateProvider);
    };
    ReduxSelectorCacheFactory.get = function (selector, stateProvider) {
        var key = ReduxSelectorCacheFactory.getKey(selector, stateProvider);
        return ReduxSelectorCacheFactory.selectors[key];
    };
    ReduxSelectorCacheFactory.set = function (reduxSelector, selector, stateProvider) {
        var key = ReduxSelectorCacheFactory.getKey(selector, stateProvider);
        ReduxSelectorCacheFactory.selectors[key] = reduxSelector;
    };
    ReduxSelectorCacheFactory.has = function (selector, stateProvider) {
        var key = ReduxSelectorCacheFactory.getKey(selector, stateProvider);
        return !!ReduxSelectorCacheFactory.selectors[key];
    };
    ReduxSelectorCacheFactory.getKey = function (selector, stateProvider) {
        return __WEBPACK_IMPORTED_MODULE_0__selector__["a" /* ReduxSelector */].getAbsoluteSelector(selector, stateProvider);
    };
    ReduxSelectorCacheFactory.selectors = {};
    return ReduxSelectorCacheFactory;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/state/definition/manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateDefinitionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/@harmowatch/redux-decorators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registry__ = __webpack_require__("../../../../../src/ngx-redux/registry.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateDefinitionManager = (function () {
    function StateDefinitionManager(injector) {
        this.injector = injector;
        this.knownStateDefinitions = {};
    }
    StateDefinitionManager.prototype.add = function (stateDefs) {
        var _this = this;
        stateDefs
            .filter(function (def) { return def != null; })
            .forEach(function (def) {
            var name = __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["e" /* ReduxStateDecorator */].get(def.provider).name;
            if (!_this.knownStateDefinitions[name]) {
                __WEBPACK_IMPORTED_MODULE_2__registry__["a" /* Registry */].registerState(_this.injector.get(def.provider));
                if (Array.isArray(def.reducers)) {
                    _this.registerReducers(name, def.reducers);
                }
                _this.knownStateDefinitions[name] = def;
            }
        });
    };
    StateDefinitionManager.prototype.registerReducers = function (stateName, reducers) {
        reducers.forEach(function (reducerClass) { return Object.values(reducerClass.prototype)
            .forEach(function (reducerMethod) {
            var type = __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["d" /* ReduxReducerDecorator */].get(reducerMethod);
            __WEBPACK_IMPORTED_MODULE_2__registry__["a" /* Registry */].registerReducer(stateName, Array.isArray(type) ? type : [type], reducerMethod);
        }); });
    };
    StateDefinitionManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], StateDefinitionManager);
    return StateDefinitionManager;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/state/definition/token.ts":
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

var StateDefToken = (function (_super) {
    __extends(StateDefToken, _super);
    function StateDefToken() {
        return _super.call(this, 'StateDefToken') || this;
    }
    return StateDefToken;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]));



/***/ }),

/***/ "../../../../../src/ngx-redux/store/token.ts":
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

var ReduxStore = (function (_super) {
    __extends(ReduxStore, _super);
    function ReduxStore() {
        return _super.call(this, 'ReduxStore') || this;
    }
    return ReduxStore;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]));



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map