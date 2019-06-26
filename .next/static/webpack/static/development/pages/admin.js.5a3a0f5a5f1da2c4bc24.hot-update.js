webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./hoc/Auth.js":
/*!*********************!*\
  !*** ./hoc/Auth.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




var Auth = function Auth(Component) {
  return function (props) {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isAuth = _useState2[0],
        setIsAuth = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      if (next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pathname !== '/login') {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
      } else if (next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pathname === '/blogs') {
        setIsAuth(true);
      }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isAuth && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, props));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/AdminLayout */ "./hoc/AdminLayout.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./pages/index.js");





var Admin = function Admin(_ref) {
  var router = _ref.router;
  console.log('props', router);

  var renderPage = function renderPage() {
    switch (router.asPath) {
      case '/admin':
        return;

      default:
        break;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_AdminLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, "asd");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Admin));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/Auth */ "./hoc/Auth.js");



var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0441\u0430\u0439\u0442 \u0433\u043B\u0430\u0432\u043D\u0430\u044F");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_Auth__WEBPACK_IMPORTED_MODULE_1__["default"])(Home));

/***/ })

})
//# sourceMappingURL=admin.js.5a3a0f5a5f1da2c4bc24.hot-update.js.map