(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Router = __webpack_require__(/*! ./src/Router */ \"./src/Router.js\");\n\nvar _Router2 = _interopRequireDefault(_Router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Router2.default;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Router = function () {\n    function Router() {\n        _classCallCheck(this, Router);\n    }\n\n    _createClass(Router, null, [{\n        key: 'beforeHook',\n        value: function beforeHook(before) {\n            this.before = before;\n        }\n    }, {\n        key: 'afterHook',\n        value: function afterHook(after) {\n            this.after = after;\n        }\n    }, {\n        key: 'init',\n        value: function init() {\n            this.push(window.location.pathname);\n        }\n    }, {\n        key: 'register',\n        value: function register(path, callback) {\n            var _this = this;\n\n            var unregister = function unregister() {\n                delete _this.callbackMap[path];\n            };\n            this.callbackMap[path] = callback;\n            return unregister;\n        }\n    }, {\n        key: 'push',\n        value: function push(path) {\n            var _this2 = this;\n\n            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\n            this.match = {\n                path: path, data: data\n                //['detail','1']\n            };var pathReal = path.split('/');\n            Object.keys(this.callbackMap).forEach(function (key) {\n                var isMatch = false;\n\n                if (!key.includes(':') && key === path) {\n                    isMatch = true;\n                } else {\n                    // ['detail',':id']\n                    var pathPattern = key.split('/');\n                    if (pathPattern.length !== pathReal.length) {\n                        isMatch = false;\n                    } else {\n                        var tempMatch = false;\n                        while (pathPattern.length) {\n                            var pathPatternTmep = pathPattern.pop();\n                            var pathRealtemp = pathReal.pop();\n                            if (pathPatternTmep === pathRealtemp) {\n                                tempMatch = true;\n                            } else if (pathPatternTmep.includes(':')) {\n                                _this2.match = _extends({}, _this2.match, { params: _defineProperty({}, pathPatternTmep.replace(':', ''), pathRealtemp) });\n                                tempMatch = true;\n                            }\n                            tempMatch == false;\n                            break;\n                        }\n                        isMatch = tempMatch;\n                    }\n                }\n                if (!_this2.before(path, data, _this2.match)) return;\n                window.history.pushState(data, '', path);\n                _this2.callbackMap[key](isMatch, _this2.match, data || {});\n            });\n\n            this.after(this.match);\n        }\n    }]);\n\n    return Router;\n}();\n\nRouter.callbackMap = {};\nRouter.match = {\n    path: '',\n    data: {}\n};\n\nRouter.before = function () {};\n\nRouter.after = function () {};\n\nexports.default = Router;\n\n//# sourceURL=webpack:///./src/Router.js?");

/***/ })

/******/ });
});