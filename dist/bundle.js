!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.applyMiddleware=t.subscribe=t.combineReducers=t.createStore=void 0;var n=r(1);t.createStore=n.createStore,t.combineReducers=n.combineReducers,t.subscribe=n.subscribe,t.applyMiddleware=n.applyMiddleware},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var i=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};function u(e,t){if("object"!==(void 0===e?"undefined":o(e))){if("function"!=typeof e)throw"error typeof reducer:"+(void 0===e?"undefined":o(e));i.state=e(i.state,t)}else Object.keys(e).forEach(function(r){console.log(r),i.state[r]=e[r](i.state[r],t)})}i.callbackList=[],t.createStore=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];return i.state=r,"function"==typeof n?n(e)(t,r):(u(t),{dispatch:function(e,r){u(t,e),r&&r(i.state),i.callbackList.forEach(function(e){e()})},getState:function(){return i.state}})},t.combineReducers=function(e){return e},t.subscribe=function(e){var t=i.callbackList.length;return i.callbackList.push(e),function(){i.callbackList.splice(t,1)}},t.applyMiddleware=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var u=e.apply(void 0,o),c=function(){},a={getState:u.getState,dispatch:function(){return c.apply(void 0,arguments)}},f=t.map(function(e){return e(a)});return c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(f))(u.dispatch),n({},u,{dispatch:c})}}}}])});