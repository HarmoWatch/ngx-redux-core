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
/* unused harmony export getActionType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ReduxReducer; });
/* unused harmony export ActionInterface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/module/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/select/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__state_public_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/store/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__testing_public_api__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/testing/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selector_selector__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/selector.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/cache/selector-cache.factory.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__module__["a"]; });









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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_root_reducer__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/module/root/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registry__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_definition_manager__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_definition_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/store/token.ts");
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

var ReduxModule = /** @class */ (function () {
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

/***/ "../../../../../src/@harmowatch/ngx-redux-core/module/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_reducer__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/module/root/reducer.ts");
/* unused harmony namespace reexport */



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/module/root/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxModuleRootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registry__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/registry.ts");

var ReduxModuleRootReducer = /** @class */ (function () {
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
        Registry._store.next(store);
        Registry._store.complete();
        __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxActionDispatcher"].dispatchedActions.subscribe(function (action) {
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
    Registry.getReducerItemsByType = function (type) {
        var reducerItemsByType = Registry._reducers
            .filter(function (reducerItem) { return __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxActionDispatcher"].getType(reducerItem.type) === type; });
        return reducerItemsByType;
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
/* unused harmony export ReduxSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/cache/selector-cache.factory.ts");


function ReduxSelect(expression, context) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                return __WEBPACK_IMPORTED_MODULE_1__selector_cache_selector_cache_factory__["a" /* ReduxSelectorCacheFactory */].getOrCreate(expression, context)
                    .distinctUntilChanged();
            },
        });
    };
}


/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/select/pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/cache/selector-cache.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_definition_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts");
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

/***/ "../../../../../src/@harmowatch/ngx-redux-core/select/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/select/pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorator__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/select/decorator.ts");
/* unused harmony reexport ReduxSelect */




/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/selector/cache/selector-cache.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelectorCacheFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/selector.ts");

var ReduxSelectorCacheFactory = /** @class */ (function () {
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

/***/ "../../../../../src/@harmowatch/ngx-redux-core/selector/selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
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
        _this = _super.call(this) || this;
        __WEBPACK_IMPORTED_MODULE_3__registry__["a" /* Registry */].getStore().then(function (store) {
            var next = function () { return _this.next(ReduxSelector.getValueByState(store.getState(), selector, stateProvider)); };
            store.subscribe(function () { return next(); });
            next(); // we need to trigger a initial value, otherwise we've to wait until the first state change
        });
        return _this;
    }
    /**
     * @deprecated Will be removed in 0.2.*. Please use the constructor (new ReduxSelector(selector, stateProvider)).
     */
    ReduxSelector.create = function (selector, stateProvider) {
        return new ReduxSelector(selector, stateProvider);
    };
    ReduxSelector.getAbsoluteSelector = function (selector, stateProvider) {
        if (!selector.startsWith(ReduxSelector.DELIMITER)) {
            return "/" + __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxStateDecorator"].get(stateProvider).name + "/" + selector;
        }
        return selector;
    };
    ReduxSelector.getValueByState = function (state, selector, stateProvider) {
        /* save the return value in a constant to prevent
         * "Metadata collected contains an error that will be reported at runtime: Lambda not supported."
         * error
         */
        var value = ReduxSelector.getAbsoluteSelector(selector, stateProvider).split(ReduxSelector.DELIMITER)
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
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]));



/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/state/definition/manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateDefinitionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registry__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/registry.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateDefinitionManager = /** @class */ (function () {
    function StateDefinitionManager(injector) {
        this.injector = injector;
        this.knownStateDefinitions = {};
    }
    StateDefinitionManager.prototype.add = function (stateDefs) {
        var _this = this;
        stateDefs
            .filter(function (def) { return def != null; })
            .forEach(function (def) {
            var name = __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxStateDecorator"].get(def.provider).name;
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
            .map(function (reducerMethod) {
            return {
                reducerMethod: reducerMethod,
                type: __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["ReduxReducerDecorator"].get(reducerMethod),
            };
        })
            .filter(function (type) { return type != null; })
            .forEach(function (_a) {
            var reducerMethod = _a.reducerMethod, type = _a.type;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/selector.ts");
/* unused harmony namespace reexport */


var ReduxState = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["ReduxStateDecorator"].forClass;


/***/ }),

/***/ "../../../../../src/@harmowatch/ngx-redux-core/state/selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReduxStateSelector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_selector__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/selector.ts");


/**
 * @deprecated Use "ReduxSelector" instead
 */
var ReduxStateSelector = /** @class */ (function () {
    function ReduxStateSelector(expression, context) {
        this.selector = new __WEBPACK_IMPORTED_MODULE_1__selector_selector__["a" /* ReduxSelector */](expression, context);
    }
    ReduxStateSelector.prototype.asObservable = function () {
        return this.selector;
    };
    return ReduxStateSelector;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/selector/cache/selector-cache.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/testing/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_definition_token__ = __webpack_require__("../../../../../src/@harmowatch/ngx-redux-core/state/definition/token.ts");
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
        __WEBPACK_IMPORTED_MODULE_4__selector_cache_selector_cache_factory__["a" /* ReduxSelectorCacheFactory */].clear();
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
            providers: config.state ? [
                { provide: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* ReduxTestingStore */], useFactory: config.storeFactory || ReduxTestingModule_1.defaultStoreFactory },
                { provide: __WEBPACK_IMPORTED_MODULE_6__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
                config.state ? config.state.provider : null,
            ] : [
                { provide: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* ReduxTestingStore */], useFactory: config.storeFactory || ReduxTestingModule_1.defaultStoreFactory },
                { provide: __WEBPACK_IMPORTED_MODULE_6__state_definition_token__["a" /* StateDefToken */], useValue: config.state || null, multi: true },
            ],
        };
    };
    ReduxTestingModule.defaultStoreFactory = function () {
        return new __WEBPACK_IMPORTED_MODULE_5__store__["a" /* ReduxTestingStore */]();
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
                __WEBPACK_IMPORTED_MODULE_5__store__["a" /* ReduxTestingStore */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* ReduxTestingStore */])),
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