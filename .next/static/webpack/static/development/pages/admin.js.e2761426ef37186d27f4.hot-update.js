webpackHotUpdate("static\\development\\pages\\admin.js",{

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
/* harmony import */ var _views_admin_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/admin/Home/Home */ "./views/admin/Home/Home.js");
/* harmony import */ var _views_admin_Pages_Pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/admin/Pages/Pages */ "./views/admin/Pages/Pages.js");






var Admin = function Admin(_ref) {
  var router = _ref.router;
  console.log('props', router);

  var renderPage = function renderPage() {
    switch (router.asPath) {
      case '/admin':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null);

      case '/admin/pages':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_Pages_Pages__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      default:
        break;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_AdminLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, renderPage());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Admin));

/***/ })

})
//# sourceMappingURL=admin.js.e2761426ef37186d27f4.hot-update.js.map