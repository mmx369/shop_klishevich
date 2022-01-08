webpackHotUpdate_N_E("pages/client",{

/***/ "./pages/client/index.tsx":
/*!********************************!*\
  !*** ./pages/client/index.tsx ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/layout */ "./components/layout/layout.tsx");
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/ERole */ "./types/ERole.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\client\\index.tsx",
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    main: {
      margin: '15px'
    },
    footer: {
      margin: '15px',
      textAlign: 'center'
    },
    link: {
      textDecoration: 'none'
    }
  });
});
var __N_SSP = true;
function ClientPage(props) {
  _s();

  var classes = useStyles();

  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["useSession"])(),
      _useSession2 = Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  console.log(111, props);
  if ( true && loading) return null;

  if (!session) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), ";"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this);
  }

  if (session.role !== _types_ERole__WEBPACK_IMPORTED_MODULE_6__["ERole"].Client) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), ";"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(ClientPage, "4hrU0RB5yEMCz0S8r8BNLYTQRtg=", false, function () {
  return [useStyles, next_auth_client__WEBPACK_IMPORTED_MODULE_3__["useSession"]];
});

_c = ClientPage;

var _c;

$RefreshReg$(_c, "ClientPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwibWFpbiIsIm1hcmdpbiIsImZvb3RlciIsInRleHRBbGlnbiIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsIkNsaWVudFBhZ2UiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwicm9sZSIsIkVSb2xlIiwiQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsWUFBTSxFQUFFO0FBREosS0FESztBQUlYQyxVQUFNLEVBQUU7QUFDTkQsWUFBTSxFQUFFLE1BREY7QUFFTkUsZUFBUyxFQUFFO0FBRkwsS0FKRztBQVFYQyxRQUFJLEVBQUU7QUFDSkMsb0JBQWMsRUFBRTtBQURaO0FBUkssR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUFpQmUsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBbUM7QUFBQTs7QUFDaEQsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCOztBQURnRCxvQkFFckJZLG1FQUFVLEVBRlc7QUFBQTtBQUFBLE1BRXpDQyxPQUZ5QztBQUFBLE1BRWhDQyxPQUZnQzs7QUFJaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJOLEtBQWpCO0FBRUEsTUFBSSxTQUFpQ0ksT0FBckMsRUFBOEMsT0FBTyxJQUFQOztBQUM5QyxNQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLHdCQUNFLHFFQUFDLGlFQUFEO0FBQVEsV0FBSyxFQUFDLGlGQUFkO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUNELE1BQUlBLE9BQU8sQ0FBQ0ksSUFBUixLQUFpQkMsa0RBQUssQ0FBQ0MsTUFBM0IsRUFBbUM7QUFDakMsd0JBQ0UscUVBQUMsaUVBQUQ7QUFBUSxXQUFLLEVBQUMsaUZBQWQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBUSxTQUFLLEVBQUMsaUZBQWQ7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQTFCdUJWLFU7VUFDTlQsUyxFQUNXWSwyRDs7O0tBRkxILFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2xpZW50LmFmYWI5YWNjZDQ5ZDY3NmJkZDIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnXHJcbmltcG9ydCB7IEVSb2xlIH0gZnJvbSAnLi4vLi4vdHlwZXMvRVJvbGUnXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvc2hvcFVzZXInXHJcbmltcG9ydCBOZXdPcmRlciBmcm9tICcuLi8uLi9tb2RlbHMvbmV3T3JkZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIG1haW46IHtcclxuICAgICAgbWFyZ2luOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1hcmdpbjogJzE1cHgnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGxpbms6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSlcclxuKVxyXG5cclxudHlwZSBUUHJvcHMgPSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50UGFnZShwcm9wczogVFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnNvbGUubG9nKDExMSwgcHJvcHMpXHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkaW5nKSByZXR1cm4gbnVsbFxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT0n0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCJz5cclxuICAgICAgICA8aDE+0JLRiyDQtNC+0LvQttC90Ysg0LDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRjzwvaDE+O1xyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbiAgaWYgKHNlc3Npb24ucm9sZSAhPT0gRVJvbGUuQ2xpZW50KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHRpdGxlPSfQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YInPlxyXG4gICAgICAgIDxoMT7QktGLINC00L7Qu9C20L3RiyDQsNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPPC9oMT47XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT0n0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCJz5cclxuICAgICAgPGRpdj7Qm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IHt9XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KVxyXG4gICAgY29uc29sZS5sb2coMjIyLCBzZXNzaW9uKVxyXG4gICAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyRW1haWwpXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB1c2VyRW1haWwgfSlcclxuICAgIGNvbnN0IG15T3JkZXJzID0gYXdhaXQgTmV3T3JkZXIuY29uc29sZS5sb2coMjIyLCB1c2VyRGF0YSlcclxuXHJcbiAgICBkYXRhLmVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsXHJcblxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=