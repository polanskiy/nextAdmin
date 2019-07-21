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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _views_site_pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/site/pages/Home */ "./views/site/pages/Home.js");
/* harmony import */ var _views_site_pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/site/pages/About */ "./views/site/pages/About.js");
/* harmony import */ var _views_site_pages_Contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/site/pages/Contacts */ "./views/site/pages/Contacts.js");
/* harmony import */ var _views_site_pages_Travels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/site/pages/Travels */ "./views/site/pages/Travels.js");
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Travels__WEBPACK_IMPORTED_MODULE_5__["default"], null);

      case 'blog':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Blog__WEBPACK_IMPORTED_MODULE_6__["default"], null);

      case 'faq':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_FAQ__WEBPACK_IMPORTED_MODULE_7__["default"], null);

      case 'event':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Event__WEBPACK_IMPORTED_MODULE_8__["default"], null);

      default:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_site_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null);
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



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);



var SideNav = function SideNav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "adminSidenavBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      fontSize: 20
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/travels"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      fontSize: 20
    }
  }, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u0411\u043B\u043E\u0433 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u041E\u0431\u043E \u043C\u043D\u0435")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/faq"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u0412\u043E\u043F\u0440\u043E\u0441 - \u043E\u0442\u0432\u0435\u0442")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/event"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Event")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "/contacts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")));
};

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

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
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Header */ "./views/site/elements/Header.js");



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contentBox"
  }, children));
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

/***/ "./views/site/pages/Home.js":
/*!**********************************!*\
  !*** ./views/site/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./views/site/pages/Travels.js":
/*!*************************************!*\
  !*** ./views/site/pages/Travels.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Travels = function Travels() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "travelsBox"
  }, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F");
};

/* harmony default export */ __webpack_exports__["default"] = (Travels);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marius\Desktop\nextAdmin\pages\index.js */"./pages/index.js");


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