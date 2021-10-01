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
      margin: '15px' // backgroundColor:'red'

    },
    breadcrumps: {
      marginTop: 50 // backgroundColor:'green'

    },
    footer: {
      margin: '15px',
      textAlign: 'center',
      backgroundColor: 'blue'
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
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
        lineNumber: 100,
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
                lineNumber: 112,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
                lineNumber: 117,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
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
                lineNumber: 122,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
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
                lineNumber: 127,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
                lineNumber: 133,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
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
          lineNumber: 142,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
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
            lineNumber: 148,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BottomAppBar__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJtYWluIiwibWFyZ2luIiwiYnJlYWRjcnVtcHMiLCJtYXJnaW5Ub3AiLCJmb290ZXIiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJicmVhZCIsIm1hcmdpbkxlZnQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiY2xhc3NlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjdXJyZW50VXNlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhcHAiLCJjdXJyZW50RW1haWwiLCJjdXJyZW50SWQiLCJjdXJyZW50Um9sZSIsImlzTG9nZ2VkSW4iLCJSZWFjdCIsInVzZUVmZmVjdCIsIkVMb2dnZWRJbiIsIlVua25vd24iLCJnZXRTZXNzaW9uIiwic2Vzc2lvbiIsInVwZGF0ZUlzTG9nZ2VkSW5BQyIsIlRydWUiLCJ1cGRhdGVVc2VyQUMiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiZGF0YWJhc2VJZCIsInJvbGUiLCJGYWxzZSIsInVuZGVmaW5lZCIsImluaXRJdGVtcyIsImlzQ2FydEVtcHR5IiwiY2FydCIsIkVSb2xlIiwiQWRtaW4iLCJmbGV4R3JvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsTUFESixDQUVKOztBQUZJLEtBREs7QUFLWEMsZUFBVyxFQUFDO0FBQ1ZDLGVBQVMsRUFBQyxFQURBLENBRVY7O0FBRlUs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RUFBRU8sT0FBTyxDQUFDZCxJQUF6QjtBQUFBLDZCQUNFLHFFQUFDLDJEQUFEO0FBQVcsZ0JBQVEsRUFBQyxJQUFwQjtBQUFBLCtCQUNFO0FBQUssZUFBSyxFQUFFO0FBQUU4QyxvQkFBUSxFQUFFO0FBQVosV0FBWjtBQUFBLG9CQUE4QmxDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhERixlQXFERTtBQUFRLGVBQVMsRUFBRUUsT0FBTyxDQUFDVixNQUEzQjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUVVLE9BQU8sQ0FBQ1AsSUFBdEI7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0VEOztHQXhHdUJJLE07VUFDTmQsUyxFQUNDbUIsdUQsRUFDR0UsdUQsRUFDQ0EsdUQsRUFHSEEsdUQsRUFFRUEsdUQsRUFDREEsdUQsRUE0QkNBLHVEOzs7S0F0Q0VQLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJlNDc3NDMxYWQ3YTMzMzdiYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL05hdidcclxuaW1wb3J0IHtcclxuICBCcmVhZGNydW1icyxcclxuICBDb250YWluZXIsXHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzJ1xyXG5pbXBvcnQgeyBFTG9nZ2VkSW4gfSBmcm9tICcuLi90eXBlcy9FTG9nZ2VkSW4nXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgeyB1cGRhdGVJc0xvZ2dlZEluQUMsIHVwZGF0ZVVzZXJBQyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYXBwQWN0aW9ucydcclxuaW1wb3J0IHsgRVJvbGUgfSBmcm9tICcuLi90eXBlcy9FUm9sZSdcclxuaW1wb3J0IHsgaW5pdEl0ZW1zIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucydcclxuaW1wb3J0IEJvdHRvbUFwcEJhciBmcm9tICcuL0JvdHRvbUFwcEJhcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgbWFpbjoge1xyXG4gICAgICBtYXJnaW46ICcxNXB4JyxcclxuICAgICAgLy8gYmFja2dyb3VuZENvbG9yOidyZWQnXHJcbiAgICB9LFxyXG4gICAgYnJlYWRjcnVtcHM6e1xyXG4gICAgICBtYXJnaW5Ub3A6NTAsXHJcbiAgICAgIC8vIGJhY2tncm91bmRDb2xvcjonZ3JlZW4nXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1hcmdpbjogJzE1cHgnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsdWUnXHJcbiAgICB9LFxyXG4gICAgbGluazoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGJyZWFkOiB7XHJcbiAgICAgIG1hcmdpblRvcDogJzEwcHgnLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAnMTVweCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbnR5cGUgVFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICB0aXRsZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB0aXRsZSB9OiBUUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBjdXJyZW50VXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuYXBwLmN1cnJlbnRVc2VyKVxyXG4gIGNvbnN0IGN1cnJlbnRFbWFpbCA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHAuY3VycmVudEVtYWlsXHJcbiAgKVxyXG4gIGNvbnN0IGN1cnJlbnRJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuYXBwLmN1cnJlbnRJZClcclxuXHJcbiAgY29uc3QgY3VycmVudFJvbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElSb290U3RhdGUpID0+IHN0YXRlLmFwcC5jdXJyZW50Um9sZSlcclxuICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHAuaXNMb2dnZWRJbilcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0xvZ2dlZEluID09PSBFTG9nZ2VkSW4uVW5rbm93bikge1xyXG4gICAgICA7KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcbiAgICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUlzTG9nZ2VkSW5BQyhFTG9nZ2VkSW4uVHJ1ZSkpXHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgdXBkYXRlVXNlckFDKFxyXG4gICAgICAgICAgICAgIHNlc3Npb24udXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgIHNlc3Npb24udXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICBzZXNzaW9uLmRhdGFiYXNlSWQgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHNlc3Npb24ucm9sZSBhcyBzdHJpbmdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJc0xvZ2dlZEluQUMoRUxvZ2dlZEluLkZhbHNlKSlcclxuICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXJBQyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaW5pdEl0ZW1zKCkpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3QgaXNDYXJ0RW1wdHkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElSb290U3RhdGUpID0+IHN0YXRlLmNhcnQpIHx8IFtdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPE5hdlxyXG4gICAgICAgICAgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfVxyXG4gICAgICAgICAgY3VycmVudEVtYWlsPXtjdXJyZW50RW1haWx9XHJcbiAgICAgICAgICBjdXJyZW50SWQ9e2N1cnJlbnRJZH1cclxuICAgICAgICAgIGN1cnJlbnRSb2xlPXtjdXJyZW50Um9sZX1cclxuICAgICAgICAgIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59XHJcbiAgICAgICAgICBpc0NhcnRFbXB0eT17aXNDYXJ0RW1wdHl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnJlYWRjcnVtcHN9PlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJyZWFkfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj7Qk9C70LDQstC90LDRjzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYXltZW50YW5kc2hpcHBpbmdcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj7QntC/0LvQsNGC0LAg0Lgg0LTQvtGB0YLQsNCy0LrQsDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIj7QktC+0L/RgNC+0YHRizwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0c1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwicHJpbWFyeVwiPtCa0L7QvdGC0LDQutGC0Ys8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHtjdXJyZW50Um9sZSA9PT0gRVJvbGUuQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJpbmhlcml0XCI+0JDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjQtTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JyZWFkY3J1bWJzPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4R3JvdzogMSB9fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICA8Yj7QmNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9LiDQndGD0LzQuNC30LzQsNGC0LjQutCwINC4INCx0L7QvdC40YHRgtC40LrQsDwvYj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPEJvdHRvbUFwcEJhciAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9