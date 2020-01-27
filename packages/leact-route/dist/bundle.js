!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var u=0,c=0,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"render",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(++u,console.log(u,"render",e),null===e)return null;if(!Array.isArray(e)||0===e.length){if(["string","number"].includes(void 0===e?"undefined":r(e))){console.log(u,"render:string|number -> text");var o=document.createTextNode(e);return n&&n.appendChild(o),o}if("object"===(void 0===e?"undefined":r(e))&&"string"==typeof e.type){console.log(u,"render:tag -> element");var i=document.createElement(e.type);return i.$$vDom=e,this.mapPropsToAttribute(e.props,i),e.props.children=e.children,e.children.forEach(function(e){t.render(e,i)}),n&&n.appendChild(i),i}if("object"===(void 0===e?"undefined":r(e))&&"function"==typeof e.type){console.log(u,"render:component -> element");var c=new e.type(e.props);c.componentWillMount(),c.props.children=e.children;var a=c.render(),l=this.render(a,n);return void 0!==l&&(c.$$element=l,c.$$element.$$component||(c.$$element.$$component=c)),c.componentDidMount(),l}throw"error "+e}e.forEach(function(e){t.render(e,n)})}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.parentNode;if(++c,console.log(c,"patch",[e],[t],[n]),void 0===e)return console.log(c,"patch:create",[e],t,[n]),void this.render(t,n);if(void 0===t||null===t)return console.log(c,"patch:remove",[e],t,[n]),void e.remove();if(3!==e.nodeType||"string"!=typeof t&&"number"!=typeof t)if(3!==e.nodeType||"object"!==(void 0===t?"undefined":r(t))||"string"!=typeof t.type){if(3===e.nodeType&&"object"===(void 0===t?"undefined":r(t))&&"function"==typeof t.type){console.log(c,"patch:string->function",[e],t,[n]);var i=this.render(t);return e.$$component&&(e.$$component.$$element=i,e.$$component.$$element.$$component=e.$$component),void n.replaceChild(i,e)}if(1===e.nodeType&&"string"==typeof t){console.log(c,"patch:object->string",[e],t,[n]);var u=this.render(t);return e.$$component&&(e.$$component.$$element=u,e.$$component.$$element.$$component=e.$$component),void n.replaceChild(u,e)}if(1!==e.nodeType||"object"!==(void 0===t?"undefined":r(t))||"string"!=typeof t.type){if(1===e.nodeType&&"object"===(void 0===t?"undefined":r(t))&&"function"==typeof t.type){console.log(c,"patch:function",[e],t,[n]);var a=e.$$component;return a.componentWillUpdate(),a.componentWillReceiveProps(o({},t.props),a.state),void a.componentDidUpdate()}throw"error"}if(console.log(c,"patch:string",[e],t,[n]),e.nodeName.toLowerCase()!==t.type){var l=this.render(t);return t.$$element=l,n.replaceChild(l,e),e.$$component.$$element=l,void(e.$$component.$$element.$$component=e.$$component)}this.mapPropsToAttribute(t.props,e);for(var f=Math.max(e.children.length,t.children.length),p=0;p<f;p++)this.patch(e.childNodes[p],t.children[p],e)}else{console.log(c,"patch:text->tag",[e],t,[n]);var s=this.render(t);n.replaceChild(s,e)}else{if(console.log(c,"patch:text->text",[e],t,[n]),e.textContent===t)return;e.textContent=t}}},{key:"mapPropsToAttribute",value:function(e,t){Object.keys(e).forEach(function(n){if("style"===n){var o=e[n];Object.keys(o).forEach(function(e){t.style[e]=o[e]})}else if("className"===n)t.className=e[n];else if(n.startsWith("on")){var r=n;"onChange"===n&&(r="oninput"),t[r.toLowerCase()]=e[n]}else"children"===n||(t[n.toLowerCase()]=e[n])})}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Redirect=t.NavLink=t.Link=t.Route=void 0;var o=n(2);var r=function(e){return e&&e.__esModule?e:{default:e}}(o).default;t.default=r,t.Route=o.Route,t.Link=o.Link,t.NavLink=o.NavLink,t.Redirect=o.Redirect},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withRouter=t.Redirect=t.NavLink=t.Link=t.Route=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(3),u=a(i),c=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(e){function t(e){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return p(t,i.Component),r(t,[{key:"componentDidMount",value:function(){console.log(),c.default.init()}},{key:"render",value:function(){var e=this;return this.props.children=this.props.children.map(function(t){return t.props=o({},t.props,e.props),t}),this.props.children}}]),t}(),d=function(e){function t(e){l(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isMatch:!1,match:{},data:{}},c.default.register(n.props.path,function(e,t,o){n.setState({isMatch:e,match:t,data:o})}),n}return p(t,i.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",null,this.state.isMatch?u.default.createElement(this.props.component,this.props):"")}}]),t}(),y=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,i.Component),r(t,[{key:"render",value:function(){var e=this;return u.default.createElement("a",{href:this.props.to,onClick:function(t){return e.handleClick(t)}},this.props.children)}},{key:"handleClick",value:function(e){e.preventDefault(),c.default.push(this.props.to,this.props.data||{})}}]),t}(),h=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,i.Component),r(t,[{key:"render",value:function(){}}]),t}(),v=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,i.Component),r(t,[{key:"render",value:function(){}}]),t}();t.default=s,t.Route=d,t.Link=y,t.NavLink=h,t.Redirect=v,t.withRouter=function(e){return function(t){function n(e){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return p(n,i.Component),r(n,[{key:"render",value:function(){return u.default.createElement(e,{store:this.props.store})}}]),n}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.LeactDom=void 0;var o=u(n(4)),r=u(n(0)),i=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}t.LeactDom=r.default,t.Component=i.default,t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"createElement",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return{type:e,props:t||{},children:[].concat.apply([],o)}}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=t,this.state={}}return r(e,[{key:"render",value:function(){throw"component must contain render()"}},{key:"setState",value:function(e,t){var n=o({},this.state,e);this.shouldComponentUpdate(this.props,n)&&(this.state=n,t&&t(this.state),i.default.patch(this.$$element,this.render()),this.componentDidUpdate(this.props,n))}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e,t){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}}]),e}();t.default=u},function(e,t,n){"use strict";(function(e){var n,o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(u,c){"object"==i(t)&&"object"==i(e)?e.exports=c():(o=[],void 0===(r="function"==typeof(n=c)?n.apply(t,o):n)||(e.exports=r))}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==(void 0===e?"undefined":i(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=o.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"beforeHook",value:function(e){window.Router.before=e}},{key:"afterHook",value:function(e){window.Router.after=e}},{key:"init",value:function(){this.push(window.location.pathname)}},{key:"register",value:function(e,t){return window.Router.callbackMap[e]=t,function(){delete window.Router.callbackMap[e]}}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.Router.match={path:e,data:t},window.Router.before(e,t,window.Router.match);var n=e.split("/");Object.keys(window.Router.callbackMap).forEach(function(r){var u=!1;if(r.includes(":")||r!==e){var c=r.split("/");if(c.length!==n.length)u=!1;else{for(var a=!1;c.length;){var l=c.pop(),f=n.pop();l===f?a=!0:l.includes(":")&&(window.Router.match=o({},window.Router.match,{params:i({},l.replace(":",""),f)}),a=!0);break}u=a}}else u=!0;window.history.pushState(t,"",e),window.Router.callbackMap[r](u,window.Router.match,t||{})}),window.Router.after(window.Router.match)}}]),e}();window.Router={},window.Router.callbackMap={},window.Router.match={path:"",data:{}},window.Router.before=function(){},window.Router.after=function(){},t.default=u}])})}).call(this,n(7)(e))},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])});