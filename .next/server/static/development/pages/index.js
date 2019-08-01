module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_site_hoc_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/site/hoc/Layout */ "./views/site/hoc/Layout.js");
/* harmony import */ var _views_site_pages_Home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/site/pages/Home/Home */ "./views/site/pages/Home/Home.js");
/* harmony import */ var _views_site_pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/site/pages/About */ "./views/site/pages/About.js");
/* harmony import */ var _views_site_pages_Contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/site/pages/Contacts */ "./views/site/pages/Contacts.js");
/* harmony import */ var _views_site_pages_Travels_Travels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/site/pages/Travels/Travels */ "./views/site/pages/Travels/Travels.js");
/* harmony import */ var _views_site_pages_Blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/site/pages/Blog */ "./views/site/pages/Blog.js");
/* harmony import */ var _views_site_pages_FAQ__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/site/pages/FAQ */ "./views/site/pages/FAQ.js");
/* harmony import */ var _views_site_pages_Event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/site/pages/Event */ "./views/site/pages/Event.js");










var Main = function Main(_ref) {
  var page = _ref.page;

  var renderPage = function renderPage() {
    switch (page) {
      case 'about':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_About__WEBPACK_IMPORTED_MODULE_3__["default"], null);

      case 'contacts':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Contacts__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case 'travels':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Travels_Travels__WEBPACK_IMPORTED_MODULE_5__["default"], null);

      case 'blog':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Blog__WEBPACK_IMPORTED_MODULE_6__["default"], null);

      case 'faq':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_FAQ__WEBPACK_IMPORTED_MODULE_7__["default"], null);

      case 'event':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Event__WEBPACK_IMPORTED_MODULE_8__["default"], null);

      default:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Home_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_hoc_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, renderPage());
};

Main.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  var page = query.page;
  return {
    page: page
  };
};

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
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./views/site/elements/Nav.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerBox headerBox_main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerLogoNavBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logoBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
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
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerContentBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headerTitle"
  }, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0441 \u0414\u0430\u0441\u0435\u0439 \u0421\u0443\u0440\u0438\u043A\u043E\u0432\u043E\u0439")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "customFormBox"
  }, "\u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "downArr"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/downArr.svg",
    alt: "down arrow"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
    className: "navBox"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./views/site/elements/RequestForm.js":
/*!********************************************!*\
  !*** ./views/site/elements/RequestForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var RequestForm = function RequestForm() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "requestFormBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "requestFormTitle"
  }, "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "requestForm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name",
    className: "requestFormLabel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041A\u0430\u043A \u0412\u0430\u0441 \u0437\u043E\u0432\u0443\u0442 ?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "name"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name",
    className: "requestFormLabel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0412\u0430\u0448 e-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "email"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name",
    className: "requestFormLabel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "phone"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "message",
    className: "requestFormLabel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    rows: "9",
    name: "message"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0412\u043E\u043F\u0440\u043E\u0441")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footerBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0414\u0430\u0441\u044F \u0421\u0443\u0440\u0438\u043A\u043E\u0432\u0430 (\u0441) - 2019 - \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B - \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")));
};

/* harmony default export */ __webpack_exports__["default"] = (RequestForm);

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


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "globalBox"
  }, children);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/Header */ "./views/site/elements/Header.js");
/* harmony import */ var _HomeAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeAbout */ "./views/site/pages/Home/HomeAbout.js");
/* harmony import */ var _HomeAdvantages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeAdvantages */ "./views/site/pages/Home/HomeAdvantages.js");
/* harmony import */ var _elements_RequestForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/RequestForm */ "./views/site/elements/RequestForm.js");






var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homePageBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeAbout__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeAdvantages__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_RequestForm__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./views/site/pages/Home/HomeAbout.js":
/*!********************************************!*\
  !*** ./views/site/pages/Home/HomeAbout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var HomeAbout = function HomeAbout() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeAboutBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contentMidWrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeAboutContentBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeAboutTextBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "homeAboutTitle"
  }, "\u0432\u0430\u0448", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0442\u0443\u0440\u0430\u0433\u0435\u043D\u0442")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "homeAboutText"
  }, "\u042F \u043F\u043E\u043C\u043E\u0433\u0443 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043B\u044F \u0412\u0430\u0441 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438,  \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0412\u0430\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430 \u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0443, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0443 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0435\u043B\u044F, \u0430\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u043E\u0432, \u0432\u0438\u043B\u043B\u044B \u0438 \u0442.\u0434.,  \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0432\u0430\u0448\u0438\u043C\u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C\u0438, \u0441\u0434\u0435\u043B\u0430\u044E \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0412\u0430\u0448\u0435\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0438 \u044F \u043D\u0430\u0445\u043E\u0436\u0443\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439 \u043F\u043E \u043B\u044E\u0431\u044B\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0412\u0430\u0448\u0435\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn"
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeAboutImgBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/dasya.png",
    alt: "\u0434\u0430\u0441\u044F \u0441\u0443\u0440\u0438\u043A\u043E\u0432\u0430 \u0442\u0443\u0440\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeAbout);

/***/ }),

/***/ "./views/site/pages/Home/HomeAdvantages.js":
/*!*************************************************!*\
  !*** ./views/site/pages/Home/HomeAdvantages.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var HomeAdvantages = function HomeAdvantages() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "HomeAdvantagesBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contentMidWrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "colorBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "advantagesTitle"
  }, "\u041F\u043E\u0447\u0435\u043C\u0443", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u0443\u0440\u044B?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "advantagesSubTitle"
  }, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0443\u0440 \u2013 \u044D\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A, \u043A\u0430\u043A \u0432\u0430\u043C \u0445\u043E\u0447\u0435\u0442\u0441\u044F!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "advantagesListTitle"
  }, "\u0412 \u0447\u0435\u043C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0443\u0440\u043E\u0432?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "advantagesList"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0422\u0443\u0440 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u0432\u0441\u0435\u0445 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430: \u0432\u044B\u0431\u043E\u0440 \u043E\u0442\u0435\u043B\u044F, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0432 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430\u0445 \u0438\u043B\u0438 \u043A\u0430\u0444\u0435, \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0439 \u0438 \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439. \u0417\u0430\u0440\u0430\u043D\u0435\u0435 \u043E\u0431\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043A\u0430\u0441\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0439 \u0438 \u0440\u0430\u0437\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0442\u0443\u0440\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C \u0438 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0433\u0438\u0434\u0430-\u044D\u043A\u0441\u043A\u0443\u0440\u0441\u043E\u0432\u043E\u0434\u0430."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u0443\u0440\u044B, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0442\u0443\u0440\u0438\u0441\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0436\u0435\u043B\u0430\u044E\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442 \u043E\u0442\u0434\u044B\u0445\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u0439, \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0442\u0435 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0442 \u0432 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0440\u0448\u0440\u0443\u0442. \u0412\u044B \u0441\u0430\u043C\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043C\u0435\u0441\u0442\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u044C, \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0432 \u0442\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0435, \u043A\u0443\u0434\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F. \u0412\u0441\u0435 \u043B\u044E\u0434\u0438 \u0440\u0430\u0437\u043D\u044B\u0435, \u043A\u0430\u043A \u0438 \u0440\u0430\u0437\u043D\u044B\u0435 \u0438\u0445 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u044F, \u0436\u0435\u043B\u0430\u043D\u0438\u044F, \u0432\u043A\u0443\u0441\u044B. \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E, \u0432\u044B \u0441\u0430\u043C\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0441\u0435\u0431\u0435 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u043E\u0442\u0434\u044B\u0445\u0430, \u043E\u043F\u0438\u0440\u0430\u044F\u0441\u044C \u043D\u0430 \u0441\u0432\u043E\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B, \u0441\u0430\u043C\u0438 \u0440\u0435\u0448\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u044C \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C - \u043C\u0443\u0437\u0435\u0439, \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0443 \u0438\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u043E\u0440\u0441\u043A\u0443\u044E \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0443?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0433\u0440\u0443\u043F\u043F\u0435. \u042D\u0442\u043E, \u043A\u0441\u0442\u0430\u0442\u0438, \u0432\u0435\u0441\u043E\u043C\u044B\u0439 \u0434\u043E\u0432\u043E\u0434: \u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0434\u043E\u0445\u043D\u0443\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442 \u0440\u0430\u0431\u043E\u0442\u044B, \u043D\u043E \u0438 \u043E\u0442 \u043B\u044E\u0434\u0435\u0439, \u0430 \u0432 \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u043C \u0442\u0443\u0440\u0435 \u044D\u0442\u043E   \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u043E.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeAdvantages);

/***/ }),

/***/ "./views/site/pages/Travels/Travels.js":
/*!*********************************************!*\
  !*** ./views/site/pages/Travels/Travels.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/Header */ "./views/site/elements/Header.js");



var Travels = function Travels() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "travelsBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    class: "headerBox_travels"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Travels);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\desktop\my\nextAdmin\pages\index.js */"./pages/index.js");


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

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map