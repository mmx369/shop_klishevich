webpackHotUpdate_N_E("pages/shop/cart",{

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
/* harmony import */ var _components_shop_CartTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop/CartTable */ "./components/shop/CartTable.tsx");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/layout */ "./components/layout/layout.tsx");



var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\shop\\cart.tsx",
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    margin: 10
  },
  button: {
    // borderRadius: 13,
    // boxShadow: '0 3px 2px 2px',
    // padding: '0 10px',
    margin: 5
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
    isCartEmpty = !window.localStorage.getItem('cart');
  }

  var handleClearCart = function handleClearCart() {
    window.localStorage.removeItem('cart');
    router.reload();
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push('/checkout');
  };

  var handleGoShopping = function handleGoShopping() {
    router.back();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: isCartEmpty && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shop_CartEmpty__WEBPACK_IMPORTED_MODULE_4__["CartEmpty"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 30
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [" ", isCartEmpty || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shop_CartTable__WEBPACK_IMPORTED_MODULE_5__["CartTable"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 31
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), isCartEmpty || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.button,
          variant: "contained",
          color: "primary",
          onClick: function onClick() {
            return handleClearCart();
          },
          fullWidth: true,
          children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.button,
          variant: "contained",
          color: "primary",
          onClick: handleClick,
          fullWidth: true,
          children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.button,
          variant: "contained",
          color: "primary",
          fullWidth: true,
          onClick: function onClick() {
            return handleGoShopping();
          },
          children: "\u041F\u0440\u043E\u0434\u043E\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9jYXJ0LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsImJ1dHRvbiIsIkNhcnQiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImluaXRJdGVtcyIsImlzQ2FydEVtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNsZWFyQ2FydCIsInJlbW92ZUl0ZW0iLCJyZWxvYWQiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJoYW5kbGVHb1Nob3BwaW5nIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRTtBQURKLEdBRHFCO0FBSTNCQyxRQUFNLEVBQUU7QUFDTjtBQUNBO0FBQ0E7QUFDQUQsVUFBTSxFQUFFO0FBSkY7QUFKbUIsQ0FBRCxDQUE1QjtBQVllLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHTixTQUFTLEVBQXpCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsQ0FBQ0ssNEVBQVMsRUFBVixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNMLFFBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBSU0sV0FBSjs7QUFFQSxZQUFtQztBQUNqQ0EsZUFBVyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBZjtBQUNEOztBQUVELE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkgsVUFBTSxDQUFDQyxZQUFQLENBQW9CRyxVQUFwQixDQUErQixNQUEvQjtBQUNBVCxVQUFNLENBQUNVLE1BQVA7QUFDRCxHQUhEOztBQUtBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FiLFVBQU0sQ0FBQ2MsSUFBUCxDQUFZLFdBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QmYsVUFBTSxDQUFDZ0IsSUFBUDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFRLFdBQUssRUFBQyw0Q0FBZDtBQUFBLDhCQUNFO0FBQUEsa0JBQU1aLFdBQVcsaUJBQUkscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLHdCQUFPQSxXQUFXLGlCQUFJLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBSUdBLFdBQVcsaUJBQ1Y7QUFBQSxnQ0FDRSxxRUFBQyxnRUFBRDtBQUNFLG1CQUFTLEVBQUVQLE9BQU8sQ0FBQ0YsTUFEckI7QUFFRSxpQkFBTyxFQUFDLFdBRlY7QUFHRSxlQUFLLEVBQUMsU0FIUjtBQUlFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWEsZUFBZSxFQUFyQjtBQUFBLFdBSlg7QUFLRSxtQkFBUyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUscUVBQUMsZ0VBQUQ7QUFDRSxtQkFBUyxFQUFFWCxPQUFPLENBQUNGLE1BRHJCO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UsZUFBSyxFQUFDLFNBSFI7QUFJRSxpQkFBTyxFQUFFZ0IsV0FKWDtBQUtFLG1CQUFTLE1BTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFtQkUscUVBQUMsZ0VBQUQ7QUFDRSxtQkFBUyxFQUFFZCxPQUFPLENBQUNGLE1BRHJCO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UsZUFBSyxFQUFDLFNBSFI7QUFJRSxtQkFBUyxNQUpYO0FBS0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNb0IsZ0JBQWdCLEVBQXRCO0FBQUEsV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3RkQ7O0dBckh1Qm5CLEk7VUFDTkwsUyxFQUNDUSx1RCxFQUNGRSxxRDs7O0tBSE9MLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9jYXJ0LjU4ZjE3NzVmYjczMDlmMDY5ODRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCB7IENhcnRFbXB0eSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hvcC9DYXJ0RW1wdHknXHJcbmltcG9ydCB7IENhcnRUYWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hvcC9DYXJ0VGFibGUnXHJcbmltcG9ydCB7IGluaXRJdGVtcyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAxMCxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgLy8gYm9yZGVyUmFkaXVzOiAxMyxcclxuICAgIC8vIGJveFNoYWRvdzogJzAgM3B4IDJweCAycHgnLFxyXG4gICAgLy8gcGFkZGluZzogJzAgMTBweCcsXHJcbiAgICBtYXJnaW46IDUsXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGluaXRJdGVtcygpKVxyXG4gIH0sIFtkaXNwYXRjaF0pXHJcblxyXG4gIGxldCBpc0NhcnRFbXB0eVxyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGlzQ2FydEVtcHR5ID0gIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhckNhcnQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnQnKVxyXG4gICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHJvdXRlci5wdXNoKCcvY2hlY2tvdXQnKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlR29TaG9wcGluZyA9ICgpID0+IHtcclxuICAgIHJvdXRlci5iYWNrKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0IHRpdGxlPSfQmtC+0YDQt9C40L3QsCc+XHJcbiAgICAgICAgPGRpdj57aXNDYXJ0RW1wdHkgJiYgPENhcnRFbXB0eSAvPn08L2Rpdj5cclxuICAgICAgICA8ZGl2PiB7aXNDYXJ0RW1wdHkgfHwgPENhcnRUYWJsZSAvPn0gPC9kaXY+XHJcblxyXG4gICAgICAgIHtpc0NhcnRFbXB0eSB8fCAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xlYXJDYXJ0KCl9XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQntGH0LjRgdGC0LjRgtGMINC60L7RgNC30LjQvdGDXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQntGE0L7RgNC80LjRgtGMXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR29TaG9wcGluZygpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg0J/RgNC+0LTQvtC20LjRgtGMINC/0L7QutGD0L/QutC4XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPntpc0NhcnRFbXB0eSAmJiA8Q2FydEVtcHR5IC8+fTwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs1fSBtZD17M30gbGc9ezJ9PlxyXG4gICAgICAgICAgICAgIHtpc0NhcnRFbXB0eSB8fCA8Q2FydFRhYmxlIC8+fVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxyXG4gICAgICAgICAgICAgIHtpc0NhcnRFbXB0eSB8fCAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsZWFyQ2FydCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjCDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQntGE0L7RgNC80LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdvU2hvcHBpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7QtNC+0LbQuNGC0Ywg0L/QvtC60YPQv9C60LhcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==