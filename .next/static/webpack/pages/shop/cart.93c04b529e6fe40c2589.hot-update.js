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
          lineNumber: 52,
          columnNumber: 30
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [" ", isCartEmpty || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shop_CartTable__WEBPACK_IMPORTED_MODULE_5__["CartTable"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 31
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
          lineNumber: 57,
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
          lineNumber: 66,
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
          lineNumber: 75,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9jYXJ0LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsImJ1dHRvbiIsIkNhcnQiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImluaXRJdGVtcyIsImlzQ2FydEVtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNsZWFyQ2FydCIsInJlbW92ZUl0ZW0iLCJyZWxvYWQiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJoYW5kbGVHb1Nob3BwaW5nIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRTtBQURKLEdBRHFCO0FBSTNCQyxRQUFNLEVBQUU7QUFDTkQsVUFBTSxFQUFFO0FBREY7QUFKbUIsQ0FBRCxDQUE1QjtBQVNlLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHTixTQUFTLEVBQXpCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsQ0FBQ0ssNEVBQVMsRUFBVixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNMLFFBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBSU0sV0FBSjs7QUFFQSxZQUFtQztBQUNqQ0EsZUFBVyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBZjtBQUNEOztBQUVELE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkgsVUFBTSxDQUFDQyxZQUFQLENBQW9CRyxVQUFwQixDQUErQixNQUEvQjtBQUNBVCxVQUFNLENBQUNVLE1BQVA7QUFDRCxHQUhEOztBQUtBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FiLFVBQU0sQ0FBQ2MsSUFBUCxDQUFZLFdBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QmYsVUFBTSxDQUFDZ0IsSUFBUDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFRLFdBQUssRUFBQyw0Q0FBZDtBQUFBLDhCQUNFO0FBQUEsa0JBQU1aLFdBQVcsaUJBQUkscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLHdCQUFPQSxXQUFXLGlCQUFJLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBSUdBLFdBQVcsaUJBQ1Y7QUFBQSxnQ0FDRSxxRUFBQyxnRUFBRDtBQUNFLG1CQUFTLEVBQUVQLE9BQU8sQ0FBQ0YsTUFEckI7QUFFRSxpQkFBTyxFQUFDLFdBRlY7QUFHRSxlQUFLLEVBQUMsU0FIUjtBQUlFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWEsZUFBZSxFQUFyQjtBQUFBLFdBSlg7QUFLRSxtQkFBUyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUscUVBQUMsZ0VBQUQ7QUFDRSxtQkFBUyxFQUFFWCxPQUFPLENBQUNGLE1BRHJCO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UsZUFBSyxFQUFDLFNBSFI7QUFJRSxpQkFBTyxFQUFFZ0IsV0FKWDtBQUtFLG1CQUFTLE1BTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFtQkUscUVBQUMsZ0VBQUQ7QUFDRSxtQkFBUyxFQUFFZCxPQUFPLENBQUNGLE1BRHJCO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UsZUFBSyxFQUFDLFNBSFI7QUFJRSxtQkFBUyxNQUpYO0FBS0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNb0IsZ0JBQWdCLEVBQXRCO0FBQUEsV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3Q0Q7O0dBckV1Qm5CLEk7VUFDTkwsUyxFQUNDUSx1RCxFQUNGRSxxRDs7O0tBSE9MLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9jYXJ0LjkzYzA0YjUyOWU2ZmU0MGMyNTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCB7IENhcnRFbXB0eSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hvcC9DYXJ0RW1wdHknXHJcbmltcG9ydCB7IENhcnRUYWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hvcC9DYXJ0VGFibGUnXHJcbmltcG9ydCB7IGluaXRJdGVtcyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpbjogNSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaW5pdEl0ZW1zKCkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgbGV0IGlzQ2FydEVtcHR5XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgaXNDYXJ0RW1wdHkgPSAhd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JylcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyQ2FydCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydCcpXHJcbiAgICByb3V0ZXIucmVsb2FkKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgcm91dGVyLnB1c2goJy9jaGVja291dCcpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVHb1Nob3BwaW5nID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLmJhY2soKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9J9Ca0L7RgNC30LjQvdCwJz5cclxuICAgICAgICA8ZGl2Pntpc0NhcnRFbXB0eSAmJiA8Q2FydEVtcHR5IC8+fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+IHtpc0NhcnRFbXB0eSB8fCA8Q2FydFRhYmxlIC8+fTwvZGl2PlxyXG5cclxuICAgICAgICB7aXNDYXJ0RW1wdHkgfHwgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsZWFyQ2FydCgpfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg0J7Rh9C40YHRgtC40YLRjCDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg0J7RhNC+0YDQvNC40YLRjFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdvU2hvcHBpbmcoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgINCf0YDQvtC00L7QttC40YLRjCDQv9C+0LrRg9C/0LrQuFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=