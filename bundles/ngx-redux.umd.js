(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs/AsyncSubject"), require("rxjs/ReplaySubject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/AsyncSubject", "rxjs/ReplaySubject"], factory);
	else if(typeof exports === 'object')
		exports["ngx-redux"] = factory(require("@angular/core"), require("rxjs/AsyncSubject"), require("rxjs/ReplaySubject"));
	else
		root["ngx-redux"] = factory(root["@angular/core"], root["rxjs/AsyncSubject"], root["rxjs/ReplaySubject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__redux_module__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ReduxModule", function() { return __WEBPACK_IMPORTED_MODULE_0__redux_module__["a"]; });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registry__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReduxModule = (function () {
    function ReduxModule(injector) {
        __WEBPACK_IMPORTED_MODULE_1__registry__["a" /* ReduxRegistry */].modules.subscribe(function (moduleItem) {
            __WEBPACK_IMPORTED_MODULE_1__registry__["a" /* ReduxRegistry */].getStore().then(function (store) {
                var initialState = {};
                if (moduleItem.onReduxInit) {
                    var initialStateFromInit = moduleItem.onReduxInit();
                    if (initialStateFromInit != null) {
                        initialState = initialStateFromInit;
                    }
                }
                store.dispatch({
                    payload: {
                        initialState: initialState,
                        stateName: moduleItem.constructor.name,
                    },
                    type: ReduxModule_1.ACTION_REGISTER_MODULE,
                });
            });
        });
    }
    ReduxModule_1 = ReduxModule;
    ReduxModule.forChild = function () {
        return {
            ngModule: ReduxModule_1,
            providers: [],
        };
    };
    ReduxModule.forRoot = function () {
        // const storeProvider = {
        //   provide: StoreProvider,
        //   useValue: new StoreProvider(config as {} as IStoreConfig<IRootState>),
        //   useFactory: () => {
        //   if (config.store) {
        //     return new config.store(config);
        //   }
        //
        //   return new StoreProvider(config as {} as IStoreConfig<IRootState>);
        // },
        // };
        return {
            ngModule: ReduxModule_1,
            providers: [],
        };
    };
    ReduxModule.ACTION_REGISTER_MODULE = ReduxModule_1.name + "://registerModule";
    ReduxModule = ReduxModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [],
            providers: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ReduxModule);
    return ReduxModule;
    var ReduxModule_1;
}());



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_AsyncSubject__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_AsyncSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_AsyncSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);


var ReduxRegistry = (function () {
    function ReduxRegistry() {
    }
    ReduxRegistry.registerStore = function (store) {
        ReduxRegistry._store.next(store);
        ReduxRegistry._store.complete();
    };
    ReduxRegistry.registerReducer = function (type, reducer) {
        ReduxRegistry._reducers[type] = ReduxRegistry._reducers[type] || [];
        ReduxRegistry._reducers[type].push(reducer);
    };
    ReduxRegistry.registerModule = function (/*config: IReduxModuleConfig,
                                     moduleConstructor: IReduxModuleType<{}>,*/ module) {
        this.modules.next(module);
    };
    ReduxRegistry.getReducersByType = function (type) {
        return ReduxRegistry._reducers[type] || [];
    };
    ReduxRegistry.getStore = function () {
        return new Promise(ReduxRegistry._store.subscribe.bind(ReduxRegistry._store));
    };
    ReduxRegistry._store = new __WEBPACK_IMPORTED_MODULE_0_rxjs_AsyncSubject__["AsyncSubject"]();
    ReduxRegistry._reducers = {};
    ReduxRegistry.modules = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
    return ReduxRegistry;
}());



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlM2IwYzFhMTJlMzgzNTM4M2NhZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQXN5bmNTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SZXBsYXlTdWJqZWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3RCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDN0I7QUFPM0M7SUFJRSxxQkFBWSxRQUFrQjtRQUM1QixnRUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQVU7WUFDeEMsZ0VBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUVsQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBRXRCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFNLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFdEQsRUFBRSxDQUFDLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsWUFBWSxHQUFHLG9CQUEwQixDQUFDO29CQUM1QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFDYixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixTQUFTLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJO3FCQUN2QztvQkFDRCxJQUFJLEVBQUUsYUFBVyxDQUFDLHNCQUFzQjtpQkFDekMsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7b0JBNUJVLFdBQVc7SUE4QlIsb0JBQVEsR0FBdEI7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsYUFBVztZQUNyQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO0lBRWEsbUJBQU8sR0FBckI7UUFFRSwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLDJFQUEyRTtRQUMzRSx3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLHVDQUF1QztRQUN2QyxNQUFNO1FBQ04sRUFBRTtRQUNGLHdFQUF3RTtRQUN4RSxLQUFLO1FBQ0wsS0FBSztRQUVMLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRSxFQUNWO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUF0RHNCLGtDQUFzQixHQUFNLGFBQVcsQ0FBQyxJQUFJLHNCQUFtQixDQUFDO0lBRjVFLFdBQVc7UUFMdkIsK0RBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO3lDQUtzQix1REFBUTtPQUpuQixXQUFXLENBMER2QjtJQUFELGtCQUFDOztDQUFBO0FBMUR1Qjs7Ozs7OztBQ1J4QiwrQzs7Ozs7Ozs7Ozs7O0FDQ2lEO0FBQ0U7QUFHbkQ7SUFBQTtJQStCQSxDQUFDO0lBekJlLDJCQUFhLEdBQTNCLFVBQTRCLEtBQWdCO1FBQzFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVhLDZCQUFlLEdBQTdCLFVBQThCLElBQVksRUFBRSxPQUFvQjtRQUM5RCxhQUFhLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLElBQUksRUFBRSxDQUFDO1FBQ3hFLGFBQWEsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFYSw0QkFBYyxHQUE1QixVQUE2QjsrRUFDMEMsQ0FDMUMsTUFBd0I7UUFFbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVhLCtCQUFpQixHQUEvQixVQUFnQyxJQUFZO1FBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxJQUFJLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRWEsc0JBQVEsR0FBdEI7UUFDRSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUEzQnVCLG9CQUFNLEdBQUcsSUFBSSwrREFBWSxFQUFhLENBQUM7SUFDdkMsdUJBQVMsR0FBMkMsRUFBRSxDQUFDO0lBQ3hELHFCQUFPLEdBQUcsSUFBSSxpRUFBYSxFQUFvQixDQUFDO0lBMkJ6RSxvQkFBQztDQUFBO0FBL0J5Qjs7Ozs7OztBQ0wxQiwrQzs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoibmd4LXJlZHV4LnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJyeGpzL0FzeW5jU3ViamVjdFwiKSwgcmVxdWlyZShcInJ4anMvUmVwbGF5U3ViamVjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwicnhqcy9Bc3luY1N1YmplY3RcIiwgXCJyeGpzL1JlcGxheVN1YmplY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmd4LXJlZHV4XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcInJ4anMvQXN5bmNTdWJqZWN0XCIpLCByZXF1aXJlKFwicnhqcy9SZXBsYXlTdWJqZWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ3gtcmVkdXhcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wicnhqcy9Bc3luY1N1YmplY3RcIl0sIHJvb3RbXCJyeGpzL1JlcGxheVN1YmplY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTNiMGMxYTEyZTM4MzUzODNjYWUiLCJleHBvcnQgKiBmcm9tICcuL3JlZHV4Lm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9pbmRleC50cyIsImltcG9ydCB7IEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVkdXhSZWdpc3RyeSB9IGZyb20gJy4vcmVnaXN0cnknO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVkdXhNb2R1bGUge1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUNUSU9OX1JFR0lTVEVSX01PRFVMRSA9IGAke1JlZHV4TW9kdWxlLm5hbWV9Oi8vcmVnaXN0ZXJNb2R1bGVgO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIFJlZHV4UmVnaXN0cnkubW9kdWxlcy5zdWJzY3JpYmUobW9kdWxlSXRlbSA9PiB7XG4gICAgICBSZWR1eFJlZ2lzdHJ5LmdldFN0b3JlKCkudGhlbigoc3RvcmUpID0+IHtcblxuICAgICAgICBsZXQgaW5pdGlhbFN0YXRlID0ge307XG5cbiAgICAgICAgaWYgKG1vZHVsZUl0ZW0ub25SZWR1eEluaXQpIHtcbiAgICAgICAgICBjb25zdCBpbml0aWFsU3RhdGVGcm9tSW5pdCA9IG1vZHVsZUl0ZW0ub25SZWR1eEluaXQoKTtcblxuICAgICAgICAgIGlmIChpbml0aWFsU3RhdGVGcm9tSW5pdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGVGcm9tSW5pdCBhcyB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgc3RhdGVOYW1lOiBtb2R1bGVJdGVtLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiBSZWR1eE1vZHVsZS5BQ1RJT05fUkVHSVNURVJfTU9EVUxFLFxuICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVkdXhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cbiAgICAvLyBjb25zdCBzdG9yZVByb3ZpZGVyID0ge1xuICAgIC8vICAgcHJvdmlkZTogU3RvcmVQcm92aWRlcixcbiAgICAvLyAgIHVzZVZhbHVlOiBuZXcgU3RvcmVQcm92aWRlcihjb25maWcgYXMge30gYXMgSVN0b3JlQ29uZmlnPElSb290U3RhdGU+KSxcbiAgICAvLyAgIHVzZUZhY3Rvcnk6ICgpID0+IHtcbiAgICAvLyAgIGlmIChjb25maWcuc3RvcmUpIHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBjb25maWcuc3RvcmUoY29uZmlnKTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgcmV0dXJuIG5ldyBTdG9yZVByb3ZpZGVyKGNvbmZpZyBhcyB7fSBhcyBJU3RvcmVDb25maWc8SVJvb3RTdGF0ZT4pO1xuICAgIC8vIH0sXG4gICAgLy8gfTtcblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVkdXhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9yZWR1eC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJlZHVjZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0IH0gZnJvbSAncnhqcy9Bc3luY1N1YmplY3QnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMvUmVwbGF5U3ViamVjdCc7XG5pbXBvcnQgeyBJUmVkdXhNb2R1bGUgfSBmcm9tICcuL2RlY29yYXRvci9yZWR1eC9yZWR1eCc7XG5cbmV4cG9ydCBjbGFzcyBSZWR1eFJlZ2lzdHJ5IHtcblxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc3RvcmUgPSBuZXcgQXN5bmNTdWJqZWN0PFN0b3JlPHt9Pj4oKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3JlZHVjZXJzOiB7IFt0eXBlOiBzdHJpbmddOiBBcnJheTxSZWR1Y2VyPHt9Pj4gfSA9IHt9O1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG1vZHVsZXMgPSBuZXcgUmVwbGF5U3ViamVjdDxJUmVkdXhNb2R1bGU8e30+PigpO1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJTdG9yZShzdG9yZTogU3RvcmU8e30+KSB7XG4gICAgUmVkdXhSZWdpc3RyeS5fc3RvcmUubmV4dChzdG9yZSk7XG4gICAgUmVkdXhSZWdpc3RyeS5fc3RvcmUuY29tcGxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJSZWR1Y2VyKHR5cGU6IHN0cmluZywgcmVkdWNlcjogUmVkdWNlcjx7fT4pIHtcbiAgICBSZWR1eFJlZ2lzdHJ5Ll9yZWR1Y2Vyc1sgdHlwZSBdID0gUmVkdXhSZWdpc3RyeS5fcmVkdWNlcnNbIHR5cGUgXSB8fCBbXTtcbiAgICBSZWR1eFJlZ2lzdHJ5Ll9yZWR1Y2Vyc1sgdHlwZSBdLnB1c2gocmVkdWNlcik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyTW9kdWxlKC8qY29uZmlnOiBJUmVkdXhNb2R1bGVDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlQ29uc3RydWN0b3I6IElSZWR1eE1vZHVsZVR5cGU8e30+LCovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBJUmVkdXhNb2R1bGU8e30+KSB7XG5cbiAgICB0aGlzLm1vZHVsZXMubmV4dChtb2R1bGUpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRSZWR1Y2Vyc0J5VHlwZSh0eXBlOiBzdHJpbmcpOiBBcnJheTxSZWR1Y2VyPHt9Pj4ge1xuICAgIHJldHVybiBSZWR1eFJlZ2lzdHJ5Ll9yZWR1Y2Vyc1sgdHlwZSBdIHx8IFtdO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRTdG9yZSgpOiBQcm9taXNlPFN0b3JlPHt9Pj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShSZWR1eFJlZ2lzdHJ5Ll9zdG9yZS5zdWJzY3JpYmUuYmluZChSZWR1eFJlZ2lzdHJ5Ll9zdG9yZSkpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3JlZ2lzdHJ5LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvQXN5bmNTdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUmVwbGF5U3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=