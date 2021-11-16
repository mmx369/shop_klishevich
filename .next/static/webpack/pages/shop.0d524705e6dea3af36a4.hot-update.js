webpackHotUpdate_N_E("pages/shop",{

/***/ "./components/layout/layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav */ "./components/layout/nav.tsx");
/* harmony import */ var _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../types/ELoggedIn */ "./types/ELoggedIn.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_appActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/appActions */ "./redux/actions/appActions.ts");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _bottomAppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bottomAppBar */ "./components/layout/bottomAppBar.tsx");




var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\layout\\layout.tsx",
    _s = $RefreshSig$();












var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
    main: {
      marginTop: "5px"
    },
    footer: {
      marginTop: "55px",
      textAlign: "center"
    },
    link: {
      textDecoration: "none"
    }
  });
});
function Layout(_ref) {
  _s();

  var children = _ref.children,
      title = _ref.title;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var currentEmail = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.app.currentEmail;
  });
  var currentRole = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.app.currentRole;
  });
  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.app.isLoggedIn;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (isLoggedIn === _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_9__["ELoggedIn"].Unknown) {
      Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var session;
        return C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_10__["getSession"])();

              case 2:
                session = _context.sent;

                if (session) {
                  dispatch(Object(_redux_actions_appActions__WEBPACK_IMPORTED_MODULE_11__["updateIsLoggedInAC"])(_types_ELoggedIn__WEBPACK_IMPORTED_MODULE_9__["ELoggedIn"].True));
                  dispatch(Object(_redux_actions_appActions__WEBPACK_IMPORTED_MODULE_11__["updateUserAC"])(session.user.name, session.user.email, session.databaseId, session.role));
                } else {
                  dispatch(Object(_redux_actions_appActions__WEBPACK_IMPORTED_MODULE_11__["updateIsLoggedInAC"])(_types_ELoggedIn__WEBPACK_IMPORTED_MODULE_9__["ELoggedIn"].False));
                  dispatch(Object(_redux_actions_appActions__WEBPACK_IMPORTED_MODULE_11__["updateUserAC"])(undefined, undefined, undefined, undefined));
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__["initItems"])());
  }, [dispatch]);
  var isCartEmpty = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.cart;
  }) || [];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_nav__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        currentEmail: currentEmail,
        currentRole: currentRole,
        isLoggedIn: isLoggedIn,
        isCartEmpty: isCartEmpty
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: classes.main,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        maxWidth: "lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            flexGrow: 1
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: classes.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: classes.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D. \u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_bottomAppBar__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

_s(Layout, "pIXmqDJFdHbz2xk4kwqOwkvOpmE=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwibWFpbiIsIm1hcmdpblRvcCIsImZvb3RlciIsInRleHRBbGlnbiIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRFbWFpbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhcHAiLCJjdXJyZW50Um9sZSIsImlzTG9nZ2VkSW4iLCJ1c2VFZmZlY3QiLCJFTG9nZ2VkSW4iLCJVbmtub3duIiwiZ2V0U2Vzc2lvbiIsInNlc3Npb24iLCJ1cGRhdGVJc0xvZ2dlZEluQUMiLCJUcnVlIiwidXBkYXRlVXNlckFDIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImRhdGFiYXNlSWQiLCJyb2xlIiwiRmFsc2UiLCJ1bmRlZmluZWQiLCJpbml0SXRlbXMiLCJpc0NhcnRFbXB0eSIsImNhcnQiLCJmbGV4R3JvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQURLO0FBSVhDLFVBQU0sRUFBRTtBQUNORCxlQUFTLEVBQUUsTUFETDtBQUVORSxlQUFTLEVBQUU7QUFGTCxLQUpHO0FBUVhDLFFBQUksRUFBRTtBQUNKQyxvQkFBYyxFQUFFO0FBRFo7QUFSSyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBb0JlLFNBQVNDLE1BQVQsT0FBNkM7QUFBQTs7QUFBQSxNQUEz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RSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFFTyxPQUFPLENBQUNMLElBQXRCO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUUscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0FqRXVCRSxNO1VBQ05ULFMsRUFDQ2MsdUQsRUFDSUUsdUQsRUFHREEsdUQsRUFDREEsdUQsRUE0QkNBLHVEOzs7S0FuQ0VQLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC4wZDUyNDcwNWU2ZGVhM2FmMzZhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4vbmF2XCI7XHJcbmltcG9ydCB7IElSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRUxvZ2dlZEluIH0gZnJvbSBcIi4uLy4uL3R5cGVzL0VMb2dnZWRJblwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVJc0xvZ2dlZEluQUMsXHJcbiAgdXBkYXRlVXNlckFDLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2FwcEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgaW5pdEl0ZW1zIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IEJvdHRvbUFwcEJhciBmcm9tIFwiLi9ib3R0b21BcHBCYXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgbWFpbjoge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCI1NXB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbnR5cGUgVFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB0aXRsZSB9OiBUUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGN1cnJlbnRFbWFpbCA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHAuY3VycmVudEVtYWlsXHJcbiAgKTtcclxuICBjb25zdCBjdXJyZW50Um9sZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuYXBwLmN1cnJlbnRSb2xlKTtcclxuICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHAuaXNMb2dnZWRJbik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNMb2dnZWRJbiA9PT0gRUxvZ2dlZEluLlVua25vd24pIHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpO1xyXG4gICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJc0xvZ2dlZEluQUMoRUxvZ2dlZEluLlRydWUpKTtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICB1cGRhdGVVc2VyQUMoXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgIHNlc3Npb24uZGF0YWJhc2VJZCBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbi5yb2xlIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJc0xvZ2dlZEluQUMoRUxvZ2dlZEluLkZhbHNlKSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVVc2VyQUModW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGluaXRJdGVtcygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaXNDYXJ0RW1wdHkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElSb290U3RhdGUpID0+IHN0YXRlLmNhcnQpIHx8IFtdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPE5hdlxyXG4gICAgICAgICAgY3VycmVudEVtYWlsPXtjdXJyZW50RW1haWx9XHJcbiAgICAgICAgICBjdXJyZW50Um9sZT17Y3VycmVudFJvbGV9XHJcbiAgICAgICAgICBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufVxyXG4gICAgICAgICAgaXNDYXJ0RW1wdHk9e2lzQ2FydEVtcHR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiAxIH19PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvS4g0J3Rg9C80LjQt9C80LDRgtC40LrQsCDQuCDQsdC+0L3QuNGB0YLQuNC60LA8L3N0cm9uZz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPEJvdHRvbUFwcEJhciAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==