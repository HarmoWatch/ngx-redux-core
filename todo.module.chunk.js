webpackJsonp(["todo.module"],{

/***/ "../../../../../src/app/todo/list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<input #todo type=\"text\" />\n<button (click)=\"add(todo.value)\">Add todo</button>\n\n<ul class=\"todo-list\">\n  <li *ngFor=\"let todo of ('items' | reduxSelect | async)\">{{todo}}</li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/todo/list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_redux_action_public_api__ = __webpack_require__("../../../../../src/ngx-redux/action/public_api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = (function () {
    function TodoListComponent() {
    }
    TodoListComponent.prototype.add = function (todo) {
        return todo;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngx_redux_action_public_api__["a" /* ReduxAction */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TodoListComponent.prototype, "add", null);
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/todo/list/todo-list.component.html"),
        })
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo/state/todo-state.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoStateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_redux_public_api__ = __webpack_require__("../../../../../src/ngx-redux/public_api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoStateProvider = (function () {
    function TodoStateProvider() {
    }
    TodoStateProvider.prototype.getInitialState = function () {
        return Promise.resolve({
            items: []
        });
    };
    TodoStateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngx_redux_public_api__["b" /* ReduxState */])({ name: 'todo' })
    ], TodoStateProvider);
    return TodoStateProvider;
}());



/***/ }),

/***/ "../../../../../src/app/todo/state/todo-state.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoStateReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_redux_action_interface__ = __webpack_require__("../../../../../src/ngx-redux/action/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_redux_public_api__ = __webpack_require__("../../../../../src/ngx-redux/public_api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo/list/todo-list.component.ts");
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



var TodoStateReducer = (function () {
    function TodoStateReducer() {
    }
    TodoStateReducer.prototype.addTodo = function (state, action) {
        return __assign({}, state, { items: state.items.concat(action.payload || '- null -') });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngx_redux_public_api__["a" /* ReduxReducer */])([
            __WEBPACK_IMPORTED_MODULE_2__list_todo_list_component__["a" /* TodoListComponent */].prototype.add,
        ]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__ngx_redux_action_interface__["a" /* ActionInterface */]]),
        __metadata("design:returntype", Object)
    ], TodoStateReducer.prototype, "addTodo", null);
    return TodoStateReducer;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_redux_module__ = __webpack_require__("../../../../../src/ngx-redux/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo/list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_todo_state_provider__ = __webpack_require__("../../../../../src/app/todo/state/todo-state.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_todo_state_reducer__ = __webpack_require__("../../../../../src/app/todo/state/todo-state.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TodoModule = (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_redux_module__["a" /* ReduxModule */].forChild({
                    state: {
                        provider: __WEBPACK_IMPORTED_MODULE_5__state_todo_state_provider__["a" /* TodoStateProvider */],
                        reducers: [__WEBPACK_IMPORTED_MODULE_6__state_todo_state_reducer__["a" /* TodoStateReducer */]],
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__list_todo_list_component__["a" /* TodoListComponent */] },
                ]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__list_todo_list_component__["a" /* TodoListComponent */]],
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/action/interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionInterface; });
// interface doesn't work @see https://github.com/angular/angular-cli/issues/2034#issuecomment-302666897 :/
var ActionInterface = (function () {
    function ActionInterface() {
    }
    return ActionInterface;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/action/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxAction; });
/* unused harmony export ReduxActionContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/@harmowatch/redux-decorators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface__ = __webpack_require__("../../../../../src/ngx-redux/action/interface.ts");
/* unused harmony namespace reexport */

var ReduxAction = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["b" /* ReduxActionDecorator */].forMethod;
var ReduxActionContext = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["a" /* ReduxActionContextDecorator */].forClass;



/***/ }),

/***/ "../../../../../src/ngx-redux/module/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_reducer__ = __webpack_require__("../../../../../src/ngx-redux/module/root/reducer.ts");
/* unused harmony namespace reexport */



/***/ }),

/***/ "../../../../../src/ngx-redux/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_public_api__ = __webpack_require__("../../../../../src/ngx-redux/action/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_public_api__ = __webpack_require__("../../../../../src/ngx-redux/module/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer_public_api__ = __webpack_require__("../../../../../src/ngx-redux/reducer/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__reducer_public_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_public_api__ = __webpack_require__("../../../../../src/ngx-redux/select/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_public_api__ = __webpack_require__("../../../../../src/ngx-redux/state/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__state_public_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_public_api__ = __webpack_require__("../../../../../src/ngx-redux/store/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__testing_public_api__ = __webpack_require__("../../../../../src/ngx-redux/testing/public_api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selector__ = __webpack_require__("../../../../../src/ngx-redux/selector.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/ngx-redux/selector/cache/selector-cache-factory.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__module__ = __webpack_require__("../../../../../src/ngx-redux/module.ts");
/* unused harmony namespace reexport */












/***/ }),

/***/ "../../../../../src/ngx-redux/reducer/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/@harmowatch/redux-decorators.es5.js");

var ReduxReducer = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["d" /* ReduxReducerDecorator */].forMethod;


/***/ }),

/***/ "../../../../../src/ngx-redux/select/decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReduxSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__("../../../../../src/ngx-redux/selector.ts");


function ReduxSelect(expression, context) {
    return function (target, propertyKey) {
        var observable;
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                if (!observable) {
                    observable = new __WEBPACK_IMPORTED_MODULE_1__selector__["a" /* ReduxSelector */](expression, context).distinctUntilChanged();
                }
                return observable;
            },
        });
    };
}


/***/ }),

/***/ "../../../../../src/ngx-redux/select/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__("../../../../../src/ngx-redux/select/pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorator__ = __webpack_require__("../../../../../src/ngx-redux/select/decorator.ts");
/* unused harmony reexport ReduxSelect */




/***/ }),

/***/ "../../../../../src/ngx-redux/state/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/@harmowatch/redux-decorators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__("../../../../../src/ngx-redux/state/selector.ts");
/* unused harmony namespace reexport */


var ReduxState = __WEBPACK_IMPORTED_MODULE_0__harmowatch_redux_decorators__["e" /* ReduxStateDecorator */].forClass;


/***/ }),

/***/ "../../../../../src/ngx-redux/state/selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReduxStateSelector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__("../../../../../src/ngx-redux/selector.ts");


/**
 * @deprecated Use "ReduxSelector" instead
 */
var ReduxStateSelector = (function () {
    function ReduxStateSelector(expression, context) {
        this.selector = new __WEBPACK_IMPORTED_MODULE_1__selector__["a" /* ReduxSelector */](expression, context);
    }
    ReduxStateSelector.prototype.asObservable = function () {
        return this.selector;
    };
    return ReduxStateSelector;
}());



/***/ }),

/***/ "../../../../../src/ngx-redux/store/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token__ = __webpack_require__("../../../../../src/ngx-redux/store/token.ts");
/* unused harmony namespace reexport */



/***/ }),

/***/ "../../../../../src/ngx-redux/testing/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReduxTestingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_module__ = __webpack_require__("../../../../../src/ngx-redux/common/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry__ = __webpack_require__("../../../../../src/ngx-redux/registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector_cache_selector_cache_factory__ = __webpack_require__("../../../../../src/ngx-redux/selector/cache/selector-cache-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("../../../../../src/ngx-redux/testing/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_definition_token__ = __webpack_require__("../../../../../src/ngx-redux/state/definition/token.ts");
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







var ReduxTestingModule = (function () {
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

/***/ "../../../../../src/ngx-redux/testing/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module__ = __webpack_require__("../../../../../src/ngx-redux/testing/module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("../../../../../src/ngx-redux/testing/store.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/ngx-redux/testing/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxTestingStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__ = __webpack_require__("../../../../@harmowatch/redux-decorators/@harmowatch/redux-decorators.es5.js");
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





var ReduxTestingStore = (function () {
    function ReduxTestingStore() {
        this.state = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    ReduxTestingStore.prototype.setState = function (state, value) {
        var _this = this;
        var name = __WEBPACK_IMPORTED_MODULE_1__harmowatch_redux_decorators__["e" /* ReduxStateDecorator */].get(state).name;
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

/***/ "../../../../rxjs/_esm5/add/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/operator/takeWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeWhile = __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__["a" /* takeWhile */];
//# sourceMappingURL=takeWhile.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeWhile.js");
/** PURE_IMPORTS_START .._operators_takeWhile PURE_IMPORTS_END */

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__["a" /* takeWhile */])(predicate)(this);
}
//# sourceMappingURL=takeWhile.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return function (source) { return source.lift(new TakeWhileOperator(predicate)); };
}
var TakeWhileOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeWhileSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=takeWhile.js.map 


/***/ })

});
//# sourceMappingURL=todo.module.chunk.js.map