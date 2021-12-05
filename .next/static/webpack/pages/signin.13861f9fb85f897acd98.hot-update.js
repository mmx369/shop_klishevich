webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.tsx":
/*!**************************!*\
  !*** ./pages/signin.tsx ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.tsx");



var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\signin.tsx",
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
    root: {
      flexGrow: 1,
      color: 'black'
    },
    paper: {
      // padding: theme.spacing(1),
      textAlign: 'center',
      maxWidth: '300px'
    },
    link: {
      textDecoration: 'none'
    },
    input: {
      margin: '10px'
    }
  });
});
var __N_SSP = true;
function SignIn(_ref) {
  _s();

  var _this = this;

  var providers = _ref.providers,
      csrfToken = _ref.csrfToken;
  var classes = useStyles();
  var newProvider = Object.values(providers).filter(function (el) {
    return el.id != 'email';
  });
  console.log(newProvider);

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      callbackUrl = _useRouter.query.callbackUrl;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Sign in",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          container: true,
          spacing: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
            item: true,
            xs: 12,
            children: [newProvider.map(function (provider) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
                  className: classes.paper,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: classes.link,
                    href: provider.signinUrl,
                    onClick: function onClick(e) {
                      return e.preventDefault();
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                      fullWidth: true,
                      color: "primary",
                      variant: "outlined",
                      onClick: function onClick() {
                        return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["signIn"])(provider.id, {
                          callbackUrl: callbackUrl
                        });
                      },
                      children: ["Sign in with ", provider.name]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)
              }, provider.name, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
              className: classes.paper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                method: "post",
                action: "/api/auth/signin/email",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  name: "csrfToken",
                  type: "hidden",
                  defaultValue: csrfToken
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: ["Email address", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: classes.input,
                    type: "email",
                    id: "email",
                    name: "email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                  type: "submit",
                  color: "primary",
                  variant: "outlined",
                  children: "Sign in with Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(SignIn, "zdUYsakJLLRSH9rpC1FZTrQMVps=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = SignIn;

var _c;

$RefreshReg$(_c, "SignIn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJjb2xvciIsInBhcGVyIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJpbnB1dCIsIm1hcmdpbiIsIlNpZ25JbiIsInByb3ZpZGVycyIsImNzcmZUb2tlbiIsImNsYXNzZXMiLCJuZXdQcm92aWRlciIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsImVsIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlUm91dGVyIiwiY2FsbGJhY2tVcmwiLCJxdWVyeSIsIm1hcCIsInByb3ZpZGVyIiwic2lnbmluVXJsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbkluIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKQyxXQUFLLEVBQUU7QUFGSCxLQURLO0FBS1hDLFNBQUssRUFBRTtBQUNMO0FBQ0FDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLGNBQVEsRUFBRTtBQUhMLEtBTEk7QUFVWEMsUUFBSSxFQUFFO0FBQ0pDLG9CQUFjLEVBQUU7QUFEWixLQVZLO0FBYVhDLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUU7QUFESDtBQWJJLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7O0FBK0JlLFNBQVNDLE1BQVQsT0FBd0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtB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O0dBbEV1QkUsTTtVQUNOZCxTLEVBTVAwQixxRDs7O0tBUGFaLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjEzODYxZjlmYjg1Zjg5N2FjZDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlcnMsIHNpZ25JbiwgZ2V0Q3NyZlRva2VuIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgfSxcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIC8vIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxyXG4gICAgfSxcclxuICAgIGxpbms6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgfSlcclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2lnbkluUHJvcHMge1xyXG4gIHByb3ZpZGVyczogSVByb3ZpZGVyIHwgdW5kZWZpbmVkXHJcbiAgY3NyZlRva2VuOiBzdHJpbmcgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZXIge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGlkOiBzdHJpbmdcclxuICBzaWduaW5Vcmw6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBwcm92aWRlcnMsIGNzcmZUb2tlbiB9OiBJU2lnbkluUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBuZXdQcm92aWRlciA9IE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5maWx0ZXIoKGVsKSA9PiBlbC5pZCAhPSAnZW1haWwnKVxyXG4gIGNvbnNvbGUubG9nKG5ld1Byb3ZpZGVyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBjYWxsYmFja1VybCB9LFxyXG4gIH06IGFueSA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0IHRpdGxlPSdTaWduIGluJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIHtuZXdQcm92aWRlci5tYXAoKHByb3ZpZGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3ZpZGVyLnNpZ25pblVybH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25Jbihwcm92aWRlci5pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluIHdpdGgge3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScvYXBpL2F1dGgvc2lnbmluL2VtYWlsJz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nY3NyZlRva2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NzcmZUb2tlbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNvbG9yPSdwcmltYXJ5JyB2YXJpYW50PSdvdXRsaW5lZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcclxuICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oY29udGV4dClcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvdmlkZXJzOiBhd2FpdCBwcm92aWRlcnMoKSwgY3NyZlRva2VuIH0gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=