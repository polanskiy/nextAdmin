module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_site_hoc_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/site/hoc/Layout */ "./views/site/hoc/Layout.js");
/* harmony import */ var _views_site_pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/site/pages/Home/Home */ "./views/site/pages/Home/Home.js");
/* harmony import */ var _views_site_pages_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/site/pages/About */ "./views/site/pages/About.js");
/* harmony import */ var _views_site_pages_Contacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/site/pages/Contacts */ "./views/site/pages/Contacts.js");
/* harmony import */ var _views_site_pages_Travels_Travels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/site/pages/Travels/Travels */ "./views/site/pages/Travels/Travels.js");
/* harmony import */ var _views_site_pages_Blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/site/pages/Blog */ "./views/site/pages/Blog.js");
/* harmony import */ var _views_site_pages_FAQ__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/site/pages/FAQ */ "./views/site/pages/FAQ.js");
/* harmony import */ var _views_site_pages_Event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/site/pages/Event */ "./views/site/pages/Event.js");












var Main = function Main(_ref) {
  var page = _ref.page;

  var renderPage = function renderPage() {
    switch (page) {
      case 'about':
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_pages_About__WEBPACK_IMPORTED_MODULE_5__["default"], null);

      case 'contacts':
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_pages_Contacts__WEBPACK_IMPORTED_MODULE_6__["default"], null);

      case 'travels':
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_pages_Travels_Travels__WEBPACK_IMPORTED_MODULE_7__["default"], null);

      case 'blog':
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_pages_Blog__WEBPACK_IMPORTED_MODULE_8__["default"], null);

      case 'faq':
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_pages_FAQ__WEBPACK_IMPORTED_MODULE_9__["default"], null);

      case 'event':
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_pages_Event__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      default:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
  };

  console.log('reeeender');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_site_hoc_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, renderPage());
};

Main.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, page;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            page = query.page;
            return _context.abrupt("return", {
              page: page
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('admin', '/admin/:slug').add('index', '/:page');

/***/ }),

/***/ "./views/site/elements/Header.js":
/*!***************************************!*\
  !*** ./views/site/elements/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
 // import Nav from './Nav';



var Header = function Header(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      headerBg = _ref.headerBg;
  console.log('header');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "headerBg",
    src: headerBg,
    alt: "\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0443\u0440\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerPositionBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerLogoNavBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logoBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      fontSize: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/logo.png",
    alt: "logo"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:+ 7 (905) 524 16 10"
  }, "+ 7 (905) 524 16 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerContactBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      fontSize: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/phone.svg",
    alt: "logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      fontSize: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/inst.svg",
    alt: "logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      fontSize: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/fb.svg",
    alt: "logo"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerContentBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headerTitle"
  }, title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, subTitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "customFormBox"
  }, "\u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "downArr"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/downArr.svg",
    alt: "down arrow"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Header));

/***/ }),

/***/ "./views/site/elements/Nav.js":
/*!************************************!*\
  !*** ./views/site/elements/Nav.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);




var Nav = function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showMenu = _useState2[0],
      toggleMenu = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: showMenu ? 'menuFixedBox active' : 'menuFixedBox'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: showMenu ? 'hamburger--arrowturn is-active' : 'hamburger--arrowturn',
    type: "button",
    onClick: function onClick() {
      return toggleMenu(!showMenu);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "hamburger-box"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "hamburger-inner"
  }))), showMenu && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "headerMenuBox"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/travels"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u0411\u043B\u043E\u0433 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u041E\u0431\u043E \u043C\u043D\u0435")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/faq"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u0412\u043E\u043F\u0440\u043E\u0441 - \u043E\u0442\u0432\u0435\u0442")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/event"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Event")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/contacts"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./views/site/hoc/Layout.js":
/*!**********************************!*\
  !*** ./views/site/hoc/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Nav */ "./views/site/elements/Nav.js");



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "globalBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./views/site/pages/About.js":
/*!***********************************!*\
  !*** ./views/site/pages/About.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u043E \u043D\u0430\u0441");
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./views/site/pages/Blog.js":
/*!**********************************!*\
  !*** ./views/site/pages/Blog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Blog = function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0431\u043B\u043E\u0433 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430");
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./views/site/pages/Contacts.js":
/*!**************************************!*\
  !*** ./views/site/pages/Contacts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Contacts = function Contacts() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./views/site/pages/Event.js":
/*!***********************************!*\
  !*** ./views/site/pages/Event.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Event = function Event() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Event");
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./views/site/pages/FAQ.js":
/*!*********************************!*\
  !*** ./views/site/pages/FAQ.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var FAQ = function FAQ() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0412\u043E\u043F\u0440\u043E\u0441-\u043E\u0442\u0432\u0435\u0442");
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ }),

/***/ "./views/site/pages/Home/Home.js":
/*!***************************************!*\
  !*** ./views/site/pages/Home/Home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/Header */ "./views/site/elements/Header.js");






var BlockAbout = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../elements/BlockAbout */ "./views/site/elements/BlockAbout.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "LOADING ABOUT");
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../elements/BlockAbout */ "./views/site/elements/BlockAbout.js")];
    },
    modules: ['../../elements/BlockAbout']
  }
});

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      renderAdv = _useState2[0],
      setRenderAdv = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      renderForm = _useState4[0],
      setRenderForm = _useState4[1];

  var renderRequestForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _ref2, RequestForm;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../elements/RequestForm */ "./views/site/elements/RequestForm.js"));

          case 2:
            _ref2 = _context.sent;
            RequestForm = _ref2.default;
            setRenderForm(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RequestForm, null));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  var renderHomeAdvantages = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var _ref4, HomeAdvantages;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./HomeAdvantages */ "./views/site/pages/Home/HomeAdvantages.js"));

          case 2:
            _ref4 = _context2.sent;
            HomeAdvantages = _ref4.default;
            setRenderAdv(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HomeAdvantages, {
              renderNext: renderRequestForm
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "homePageBox"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    subTitle: "\u0441 \u0414\u0430\u0441\u0435\u0439 \u0421\u0443\u0440\u0438\u043A\u043E\u0432\u043E\u0439",
    headerBg: "/static/images/homeHeaderBg.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(BlockAbout, {
    renderNext: renderHomeAdvantages
  }), renderAdv || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "LOADING ADVANTAGES"), renderForm || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "LOADING REQUEST FORM"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./views/site/pages/Travels/Travels.js":
/*!*********************************************!*\
  !*** ./views/site/pages/Travels/Travels.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/Header */ "./views/site/elements/Header.js");






var TravelsList = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../elements/TravelsList */ "./views/site/elements/TravelsList.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "LOADING TravelsList");
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../elements/TravelsList */ "./views/site/elements/TravelsList.js")];
    },
    modules: ['../../elements/TravelsList']
  }
});
var BlockAbout = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../elements/BlockAbout */ "./views/site/elements/BlockAbout.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "LOADING BlockAbout");
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../elements/BlockAbout */ "./views/site/elements/BlockAbout.js")];
    },
    modules: ['../../elements/BlockAbout']
  }
});

var Travels = function Travels() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      requestForm = _useState2[0],
      setRequestForm = _useState2[1];

  var renderRequestForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _ref2, RequestForm;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../elements/RequestForm */ "./views/site/elements/RequestForm.js"));

          case 2:
            _ref2 = _context.sent;
            RequestForm = _ref2.default;
            setRequestForm(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RequestForm, null));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "travelsBox"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439",
    headerClass: "headerBox_travels",
    headerBg: "/static/images/travelsHeaderBg.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TravelsList, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(BlockAbout, {
    renderNext: renderRequestForm
  }), requestForm || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "LOADING REQUEST FORM"));
};

/* harmony default export */ __webpack_exports__["default"] = (Travels);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marius\Desktop\nextAdmin\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map