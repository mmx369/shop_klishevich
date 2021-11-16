webpackHotUpdate_N_E("pages/shop/cart",{

/***/ "./components/CartEmpty.tsx":
false,

/***/ "./components/shop/CartEmpty.tsx":
/*!***************************************!*\
  !*** ./components/shop/CartEmpty.tsx ***!
  \***************************************/
/*! exports provided: CartEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartEmpty", function() { return CartEmpty; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\CartEmpty.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  button: {
    borderRadius: 13,
    boxShadow: '0 3px 2px 2px',
    padding: '0 10px',
    margin: 10
  }
});
var CartEmpty = function CartEmpty() {
  _s();

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var handleGoShopping = function handleGoShopping() {
    router.push('/');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.button,
      variant: "outlined",
      color: "secondary",
      onClick: function onClick() {
        return handleGoShopping();
      },
      children: "\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CartEmpty, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = CartEmpty;

var _c;

$RefreshReg$(_c, "CartEmpty");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/shop/cart.tsx":
/*!*****************************!*\
  !*** ./pages/shop/cart.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_shop_CartEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shop/CartEmpty */ "./components/shop/CartEmpty.tsx");
/* harmony import */ var _components_CartTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CartTable */ "./components/CartTable.tsx");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout/layout */ "./components/layout/layout.tsx");



var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\shop\\cart.tsx",
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    margin: 10
  },
  button: {
    borderRadius: 13,
    boxShadow: "0 3px 2px 2px",
    padding: "0 10px",
    margin: 10
  }
});
function Cart() {
  _s();

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["initItems"])());
  }, [dispatch]);
  var isCartEmpty;

  if (true) {
    isCartEmpty = !window.localStorage.getItem("cart");
  }

  var handleClearCart = function handleClearCart() {
    window.localStorage.removeItem("cart");
    router.reload();
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push("/checkout");
  };

  var handleGoShopping = function handleGoShopping() {
    router.back();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
          container: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
            item: true,
            children: isCartEmpty && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shop_CartEmpty__WEBPACK_IMPORTED_MODULE_4__["CartEmpty"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 40
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
            item: true,
            children: isCartEmpty || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CartTable__WEBPACK_IMPORTED_MODULE_5__["CartTable"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 40
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
            container: true,
            item: true,
            children: isCartEmpty || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
                item: true,
                xs: 12,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: classes.button,
                  variant: "outlined",
                  color: "secondary",
                  onClick: function onClick() {
                    return handleClearCart();
                  },
                  fullWidth: true,
                  children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
                item: true,
                xs: 12,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: classes.button,
                  variant: "outlined",
                  color: "secondary",
                  onClick: handleClick,
                  fullWidth: true,
                  children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
                item: true,
                xs: 12,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: classes.button,
                  variant: "outlined",
                  color: "secondary",
                  fullWidth: true,
                  onClick: function onClick() {
                    return handleGoShopping();
                  },
                  children: "\u041F\u0440\u043E\u0434\u043E\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Cart, "/eXZUvoSr7fc6ecz/loPSgy0nAg=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = Cart;

var _c;

$RefreshReg$(_c, "Cart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0RW1wdHkudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zaG9wL2NhcnQudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwibWFyZ2luIiwiQ2FydEVtcHR5IiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUdvU2hvcHBpbmciLCJwdXNoIiwicm9vdCIsIkNhcnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiaW5pdEl0ZW1zIiwiaXNDYXJ0RW1wdHkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQ2xlYXJDYXJ0IiwicmVtb3ZlSXRlbSIsInJlbG9hZCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLFFBQU0sRUFBRTtBQUNOQyxnQkFBWSxFQUFFLEVBRFI7QUFFTkMsYUFBUyxFQUFFLGVBRkw7QUFHTkMsV0FBTyxFQUFFLFFBSEg7QUFJTkMsVUFBTSxFQUFFO0FBSkY7QUFEbUIsQ0FBRCxDQUE1QjtBQVNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBQ0EsTUFBTVMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtB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RUFDRk4scUQ7OztLQUhPSSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvY2FydC44MmFhMDRmMjE0NzlkYTQyYmZlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBidXR0b246IHtcclxuICAgIGJvcmRlclJhZGl1czogMTMsXHJcbiAgICBib3hTaGFkb3c6ICcwIDNweCAycHggMnB4JyxcclxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRFbXB0eSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVHb1Nob3BwaW5nID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy8nKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT7QktCw0YjQsCDQutC+0YDQt9C40L3QsCDQv9GD0YHRgtCwPC9oMT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR29TaG9wcGluZygpfVxyXG4gICAgICA+XHJcbiAgICAgICAg0L/RgNC+0LTQvtC70LbQuNGC0Ywg0L/QvtC60YPQv9C60LhcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBDYXJ0RW1wdHkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wL0NhcnRFbXB0eVwiO1xyXG5pbXBvcnQgeyBDYXJ0VGFibGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXJ0VGFibGVcIjtcclxuaW1wb3J0IHsgaW5pdEl0ZW1zIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46IDEwLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDEzLFxyXG4gICAgYm94U2hhZG93OiBcIjAgM3B4IDJweCAycHhcIixcclxuICAgIHBhZGRpbmc6IFwiMCAxMHB4XCIsXHJcbiAgICBtYXJnaW46IDEwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaW5pdEl0ZW1zKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBsZXQgaXNDYXJ0RW1wdHk7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpc0NhcnRFbXB0eSA9ICF3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJDYXJ0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydFwiKTtcclxuICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9jaGVja291dFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHb1Nob3BwaW5nID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLmJhY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCB0aXRsZT1cItCa0L7RgNC30LjQvdCwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+e2lzQ2FydEVtcHR5ICYmIDxDYXJ0RW1wdHkgLz59PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPntpc0NhcnRFbXB0eSB8fCA8Q2FydFRhYmxlIC8+fTwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgICAge2lzQ2FydEVtcHR5IHx8IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsZWFyQ2FydCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjCDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0J7RhNC+0YDQvNC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR29TaG9wcGluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC00L7QttC40YLRjCDQv9C+0LrRg9C/0LrQuFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9