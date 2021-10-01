webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./components/Nav.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/ELoggedIn */ "./types/ELoggedIn.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_appActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/appActions */ "./redux/actions/appActions.ts");
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../types/ERole */ "./types/ERole.ts");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _BottomAppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BottomAppBar */ "./components/BottomAppBar.tsx");




var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\layout.tsx",
    _s = $RefreshSig$();













var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    main: {
      margin: '15px'
    },
    breadcrumps: {
      marginTop: 50
    },
    footer: {
      margin: '15px',
      textAlign: 'center'
    },
    link: {
      textDecoration: 'none'
    },
    bread: {
      marginTop: '10px',
      marginLeft: '15px'
    }
  });
});
function Layout(_ref) {
  _s();

  var children = _ref.children,
      title = _ref.title;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var currentUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.app.currentUser;
  });
  var currentEmail = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.app.currentEmail;
  });
  var currentId = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.app.currentId;
  });
  var currentRole = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.app.currentRole;
  });
  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.app.isLoggedIn;
  });
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (isLoggedIn === _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_9__["ELoggedIn"].Unknown) {
      ;

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
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_13__["initItems"])());
  }, [dispatch]);
  var isCartEmpty = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.cart;
  }) || [];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
        currentUser: currentUser,
        currentEmail: currentEmail,
        currentId: currentId,
        currentRole: currentRole,
        isLoggedIn: isLoggedIn,
        isCartEmpty: isCartEmpty
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        maxWidth: "lg",
        className: classes.breadcrumps,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Breadcrumbs"], {
          "aria-label": "breadcrumb",
          className: classes.bread,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: classes.link,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                color: "primary",
                children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/paymentandshipping",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: classes.link,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                color: "primary",
                children: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/faq",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: classes.link,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                color: "primary",
                children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/contacts",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: classes.link,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                color: "primary",
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this), currentRole === _types_ERole__WEBPACK_IMPORTED_MODULE_12__["ERole"].Admin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/admin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: classes.link,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                color: "inherit",
                children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: classes.main,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        maxWidth: "lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            flexGrow: 1
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: classes.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: classes.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D. \u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BottomAppBar__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

_s(Layout, "MWK+vaa2HKJ988u/9ELBrFZDLCk=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJtYWluIiwibWFyZ2luIiwiYnJlYWRjcnVtcHMiLCJtYXJnaW5Ub3AiLCJmb290ZXIiLCJ0ZXh0QWxpZ24iLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJicmVhZCIsIm1hcmdpbkxlZnQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiY2xhc3NlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjdXJyZW50VXNlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhcHAiLCJjdXJyZW50RW1haWwiLCJjdXJyZW50SWQiLCJjdXJyZW50Um9sZSIsImlzTG9nZ2VkSW4iLCJSZWFjdCIsInVzZUVmZmVjdCIsIkVMb2dnZWRJbiIsIlVua25vd24iLCJnZXRTZXNzaW9uIiwic2Vzc2lvbiIsInVwZGF0ZUlzTG9nZ2VkSW5BQyIsIlRydWUiLCJ1cGRhdGVVc2VyQUMiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiZGF0YWJhc2VJZCIsInJvbGUiLCJGYWxzZSIsInVuZGVmaW5lZCIsImluaXRJdGVtcyIsImlzQ2FydEVtcHR5IiwiY2FydCIsIkVSb2xlIiwiQWRtaW4iLCJmbGV4R3JvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUU7QUFESixLQURLO0FBSVhDLGVBQVcsRUFBQztBQUNWQyxlQUFTLEVBQUM7QUFEQSxLQUpEO0FBT1hDLFVBQU0sRUFBRTtBQUNOSCxZQUFNLEVBQUUsTUFE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QXBCO0FBQUEsK0JBQ0U7QUFBSyxlQUFLLEVBQUU7QUFBRTZDLG9CQUFRLEVBQUU7QUFBWixXQUFaO0FBQUEsb0JBQThCbEM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaERGLGVBcURFO0FBQVEsZUFBUyxFQUFFRSxPQUFPLENBQUNULE1BQTNCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRVMsT0FBTyxDQUFDUCxJQUF0QjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRUQ7O0dBeEd1QkksTTtVQUNOYixTLEVBQ0NrQix1RCxFQUNHRSx1RCxFQUNDQSx1RCxFQUdIQSx1RCxFQUVFQSx1RCxFQUNEQSx1RCxFQTRCQ0EsdUQ7OztLQXRDRVAsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hM2Q0OTIxYTg1YmFkYTU3ZGZiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vTmF2J1xyXG5pbXBvcnQge1xyXG4gIEJyZWFkY3J1bWJzLFxyXG4gIENvbnRhaW5lcixcclxuICBjcmVhdGVTdHlsZXMsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMnXHJcbmltcG9ydCB7IEVMb2dnZWRJbiB9IGZyb20gJy4uL3R5cGVzL0VMb2dnZWRJbidcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCB7IHVwZGF0ZUlzTG9nZ2VkSW5BQywgdXBkYXRlVXNlckFDIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hcHBBY3Rpb25zJ1xyXG5pbXBvcnQgeyBFUm9sZSB9IGZyb20gJy4uL3R5cGVzL0VSb2xlJ1xyXG5pbXBvcnQgeyBpbml0SXRlbXMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zJ1xyXG5pbXBvcnQgQm90dG9tQXBwQmFyIGZyb20gJy4vQm90dG9tQXBwQmFyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgIG1hcmdpbjogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIGJyZWFkY3J1bXBzOntcclxuICAgICAgbWFyZ2luVG9wOjUwXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1hcmdpbjogJzE1cHgnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGxpbms6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBicmVhZDoge1xyXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcclxuICAgICAgbWFyZ2luTGVmdDogJzE1cHgnLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG50eXBlIFRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgdGl0bGUgfTogVFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElSb290U3RhdGUpID0+IHN0YXRlLmFwcC5jdXJyZW50VXNlcilcclxuICBjb25zdCBjdXJyZW50RW1haWwgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuYXBwLmN1cnJlbnRFbWFpbFxyXG4gIClcclxuICBjb25zdCBjdXJyZW50SWQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElSb290U3RhdGUpID0+IHN0YXRlLmFwcC5jdXJyZW50SWQpXHJcblxyXG4gIGNvbnN0IGN1cnJlbnRSb2xlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHAuY3VycmVudFJvbGUpXHJcbiAgY29uc3QgaXNMb2dnZWRJbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuYXBwLmlzTG9nZ2VkSW4pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNMb2dnZWRJbiA9PT0gRUxvZ2dlZEluLlVua25vd24pIHtcclxuICAgICAgOyhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxyXG4gICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJc0xvZ2dlZEluQUMoRUxvZ2dlZEluLlRydWUpKVxyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJBQyhcclxuICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbi5kYXRhYmFzZUlkIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgICBzZXNzaW9uLnJvbGUgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGF0Y2godXBkYXRlSXNMb2dnZWRJbkFDKEVMb2dnZWRJbi5GYWxzZSkpXHJcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVVc2VyQUModW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGluaXRJdGVtcygpKVxyXG4gIH0sIFtkaXNwYXRjaF0pXHJcblxyXG4gIGNvbnN0IGlzQ2FydEVtcHR5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5jYXJ0KSB8fCBbXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxOYXZcclxuICAgICAgICAgIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn1cclxuICAgICAgICAgIGN1cnJlbnRFbWFpbD17Y3VycmVudEVtYWlsfVxyXG4gICAgICAgICAgY3VycmVudElkPXtjdXJyZW50SWR9XHJcbiAgICAgICAgICBjdXJyZW50Um9sZT17Y3VycmVudFJvbGV9XHJcbiAgICAgICAgICBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufVxyXG4gICAgICAgICAgaXNDYXJ0RW1wdHk9e2lzQ2FydEVtcHR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJyZWFkY3J1bXBzfT5cclxuICAgICAgICAgIDxCcmVhZGNydW1icyBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5icmVhZH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCI+0JPQu9Cw0LLQvdCw0Y88L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGF5bWVudGFuZHNoaXBwaW5nXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCI+0J7Qv9C70LDRgtCwINC4INC00L7RgdGC0LDQstC60LA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFxXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCI+0JLQvtC/0YDQvtGB0Ys8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdHNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj7QmtC+0L3RgtCw0LrRgtGLPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7Y3VycmVudFJvbGUgPT09IEVSb2xlLkFkbWluICYmIChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiPtCQ0LTQvNC40L3QuNGB0YLRgNC40YDQvtCy0LDQvdC40LU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9CcmVhZGNydW1icz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleEdyb3c6IDEgfX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgPGI+0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvS4g0J3Rg9C80LjQt9C80LDRgtC40LrQsCDQuCDQsdC+0L3QuNGB0YLQuNC60LA8L2I+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxCb3R0b21BcHBCYXIgLz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==