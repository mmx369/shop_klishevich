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
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'red'
    },
    paper: {
      padding: theme.spacing(1),
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
          spacing: 2,
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
                      variant: "contained",
                      onClick: function onClick() {
                        return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["signIn"])(provider.id, {
                          callbackUrl: callbackUrl
                        });
                      },
                      children: ["Sign in with ", provider.name]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, _this)
              }, provider.name, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
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
                  lineNumber: 81,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: ["Email address", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: classes.input,
                    type: "email",
                    id: "email",
                    name: "email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                  type: "submit",
                  color: "primary",
                  variant: "contained",
                  children: "Sign in with Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJpbnB1dCIsIm1hcmdpbiIsIlNpZ25JbiIsInByb3ZpZGVycyIsImNzcmZUb2tlbiIsImNsYXNzZXMiLCJuZXdQcm92aWRlciIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsImVsIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlUm91dGVyIiwiY2FsbGJhY2tVcmwiLCJxdWVyeSIsIm1hcCIsInByb3ZpZGVyIiwic2lnbmluVXJsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbkluIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKO0FBQ0E7QUFDQUMscUJBQWUsRUFBRTtBQUpiLEtBREs7QUFPWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLGNBQVEsRUFBRTtBQUhMLEtBUEk7QUFZWEMsUUFBSSxFQUFFO0FBQ0pDLG9CQUFjLEVBQUU7QUFEWixLQVpLO0FBZVhDLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUU7QUFESDtBQWZJLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7O0FBaUNlLFNBQVNDLE1BQVQsT0FBd0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUNyRSxNQUFNQyxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBQ0EsTUFBTW9CLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNMLFNBQWQsRUFBeUJNLE1BQXpCLENBQWdDLFVBQUNDLEVBQUQ7QUFBQSxXQUFRQSxFQUFFLENBQUNDLEVBQUgsSUFBUyxPQUFqQjtBQUFBLEdBQWhDLENBQXBCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaOztBQUhxRSxtQkFPNURRLDZEQUFTLEVBUG1EO0FBQUEsTUFNMURDLFdBTjBELGNBTW5FQyxLQU5tRSxDQU0xREQsV0FOMEQ7O0FBU3JFLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsaUVBQUQ7QUFBUSxXQUFLLEVBQUMsU0FBZDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRVYsT0FBTyxDQUFDZixJQUF4QjtBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFnQixpQkFBTyxFQUFFLENBQXpCO0FBQUEsaUNBQ0UscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBQSx1QkFDR2dCLFdBQVcsQ0FBQ1csR0FBWixDQUFnQixVQUFDQyxRQUFEO0FBQUEsa0NBQ2Y7QUFBQSx1Q0FDRSxxRUFBQyx1REFBRDtBQUFPLDJCQUFTLEVBQUViLE9BQU8sQ0FBQ1osS0FBMUI7QUFBQSx5Q0FDRTtBQUNFLDZCQUFTLEVBQUVZLE9BQU8sQ0FBQ1AsSUFEckI7QUFFRSx3QkFBSSxFQUFFb0IsUUFBUSxDQUFDQyxTQUZqQjtBQUdFLDJCQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSw2QkFBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxxQkFIWDtBQUFBLDJDQUtFLHFFQUFDLHdEQUFEO0FBQ0UsK0JBQVMsTUFEWDtBQUVFLDJCQUFLLEVBQUMsU0FGUjtBQUdFLDZCQUFPLEVBQUMsV0FIVjtBQUlFLDZCQUFPLEVBQUU7QUFBQSwrQkFDUEMsK0RBQU0sQ0FBQ0osUUFBUSxDQUFDUCxFQUFWLEVBQWM7QUFDbEJJLHFDQUFXLEVBQVhBO0FBRGtCLHlCQUFkLENBREM7QUFBQSx1QkFKWDtBQUFBLGtEQVVnQkcsUUFBUSxDQUFDSyxJQVZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFVTCxRQUFRLENBQUNLLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGU7QUFBQSxhQUFoQixDQURILGVBeUJFLHFFQUFDLHVEQUFEO0FBQU8sdUJBQVMsRUFBRWxCLE9BQU8sQ0FBQ1osS0FBMUI7QUFBQSxxQ0FDRTtBQUFNLHNCQUFNLEVBQUMsTUFBYjtBQUFvQixzQkFBTSxFQUFDLHdCQUEzQjtBQUFBLHdDQUNFO0FBQ0Usc0JBQUksRUFBQyxXQURQO0FBRUUsc0JBQUksRUFBQyxRQUZQO0FBR0UsOEJBQVksRUFBRVc7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQU1FO0FBQUEsMkRBRUU7QUFDRSw2QkFBUyxFQUFFQyxPQUFPLENBQUNMLEtBRHJCO0FBRUUsd0JBQUksRUFBQyxPQUZQO0FBR0Usc0JBQUUsRUFBQyxPQUhMO0FBSUUsd0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GLGVBZUUscUVBQUMsd0RBQUQ7QUFBUSxzQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQUssRUFBQyxTQUE1QjtBQUFzQyx5QkFBTyxFQUFDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBeUREOztHQWxFdUJFLE07VUFDTmhCLFMsRUFNUDRCLHFEOzs7S0FQYVosTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uZjMxMzA0YThhOTRkZTUwZWY1ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb3ZpZGVycywgc2lnbkluLCBnZXRDc3JmVG9rZW4gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgLy8gYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIC8vIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIH0sXHJcbiAgICBwYXBlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXhXaWR0aDogJzMwMHB4JyxcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpZ25JblByb3BzIHtcclxuICBwcm92aWRlcnM6IElQcm92aWRlciB8IHVuZGVmaW5lZFxyXG4gIGNzcmZUb2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3ZpZGVyIHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBpZDogc3RyaW5nXHJcbiAgc2lnbmluVXJsOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKHsgcHJvdmlkZXJzLCBjc3JmVG9rZW4gfTogSVNpZ25JblByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgbmV3UHJvdmlkZXIgPSBPYmplY3QudmFsdWVzKHByb3ZpZGVycykuZmlsdGVyKChlbCkgPT4gZWwuaWQgIT0gJ2VtYWlsJylcclxuICBjb25zb2xlLmxvZyhuZXdQcm92aWRlcilcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgY2FsbGJhY2tVcmwgfSxcclxuICB9OiBhbnkgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCB0aXRsZT0nU2lnbiBpbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICB7bmV3UHJvdmlkZXIubWFwKChwcm92aWRlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm92aWRlci5zaWduaW5Vcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbkluKHByb3ZpZGVyLmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gaW4gd2l0aCB7cHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9hcGkvYXV0aC9zaWduaW4vZW1haWwnPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjc3JmVG9rZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0naGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgY29sb3I9J3ByaW1hcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcclxuICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oY29udGV4dClcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvdmlkZXJzOiBhd2FpdCBwcm92aWRlcnMoKSwgY3NyZlRva2VuIH0gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=