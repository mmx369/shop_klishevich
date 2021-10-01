webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/ELoggedIn */ "./types/ELoggedIn.ts");
/* harmony import */ var _auth_sign_in_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/sign_in_button */ "./components/auth/sign_in_button.tsx");
/* harmony import */ var _material_ui_icons_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ShoppingCartRounded */ "./node_modules/@material-ui/icons/ShoppingCartRounded.js");
/* harmony import */ var _material_ui_icons_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\Nav.tsx",
    _s = $RefreshSig$();







var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {
      flexGrow: 1
    },
    link: {
      color: 'white',
      textDecoration: 'none'
    }
  });
});
function Nav(_ref) {
  _s();

  var currentUser = _ref.currentUser,
      currentEmail = _ref.currentEmail,
      currentId = _ref.currentId,
      currentRole = _ref.currentRole,
      isLoggedIn = _ref.isLoggedIn,
      isCartEmpty = _ref.isCartEmpty;
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push('/cart');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "fixed",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      maxWidth: "lg",
      style: {
        marginTop: 30
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
        variant: "dense",
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "subtitle2",
          className: classes.root,
          children: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
          xsDown: true,
          children: isLoggedIn === _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_3__["ELoggedIn"].True && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A ", currentEmail]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), !!isCartEmpty.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
            color: "inherit",
            onClick: handleClick,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this), isLoggedIn !== _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_3__["ELoggedIn"].Unknown && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_auth_sign_in_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isSignedIn: isLoggedIn === _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_3__["ELoggedIn"].True
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(Nav, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Nav;

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJsaW5rIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsIk5hdiIsImN1cnJlbnRVc2VyIiwiY3VycmVudEVtYWlsIiwiY3VycmVudElkIiwiY3VycmVudFJvbGUiLCJpc0xvZ2dlZEluIiwiaXNDYXJ0RW1wdHkiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwibWFyZ2luVG9wIiwiRUxvZ2dlZEluIiwiVHJ1ZSIsImxlbmd0aCIsIlVua25vd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FESztBQUlYQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFLE9BREg7QUFFSkMsb0JBQWMsRUFBRTtBQUZaO0FBSkssR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQXFCTyxTQUFTQyxHQUFULE9BT0k7QUFBQTs7QUFBQSxNQU5UQyxXQU1TLFFBTlRBLFdBTVM7QUFBQSxNQUxUQyxZQUtTLFFBTFRBLFlBS1M7QUFBQSxNQUpUQyxTQUlTLFFBSlRBLFNBSVM7QUFBQSxNQUhUQyxXQUdTLFFBSFRBLFdBR1M7QUFBQSxNQUZUQyxVQUVTLFFBRlRBLFVBRVM7QUFBQSxNQURUQyxXQUNTLFFBRFRBLFdBQ1M7QUFDVCxNQUFNQyxPQUFPLEdBQUdmLFNBQVMsRUFBekI7QUFDQSxNQUFNZ0IsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQXlCO0FBQzNDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUosVUFBTSxDQUFDSyxJQUFQLENBQVksT0FBWjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UscUVBQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsT0FBakI7QUFBQSwyQkFDRSxxRUFBQywyREFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUF5QixXQUFLLEVBQUU7QUFBQ0MsaUJBQVMsRUFBQztBQUFYLE9BQWhDO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBUyxlQUFPLEVBQUMsT0FBakI7QUFBeUIsaUJBQVMsRUFBRVAsT0FBTyxDQUFDWixJQUE1QztBQUFBLGdDQUNFLHFFQUFDLDREQUFEO0FBQVksaUJBQU8sRUFBQyxXQUFwQjtBQUFnQyxtQkFBUyxFQUFFWSxPQUFPLENBQUNaLElBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsd0RBQUQ7QUFBUSxnQkFBTSxNQUFkO0FBQUEsb0JBQ0dVLFVBQVUsS0FBS1UsMERBQVMsQ0FBQ0MsSUFBekIsaUJBQ0M7QUFBQSwwRkFBbUJkLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFTRyxDQUFDLENBQUNJLFdBQVcsQ0FBQ1csTUFBZCxpQkFDQztBQUFBLGlDQUNFLHFFQUFDLDREQUFEO0FBQVksaUJBQUssRUFBQyxTQUFsQjtBQUE0QixtQkFBTyxFQUFFUCxXQUFyQztBQUFBLG1DQUNFLHFFQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixFQWdCR0wsVUFBVSxLQUFLVSwwREFBUyxDQUFDRyxPQUF6QixpQkFDQyxxRUFBQyw0REFBRDtBQUFlLG9CQUFVLEVBQUViLFVBQVUsS0FBS1UsMERBQVMsQ0FBQ0M7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7R0ExQ2VoQixHO1VBUUVSLFMsRUFDRGlCLHFEOzs7S0FURFQsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNGVhMDFmYTMwMDczODE0MDViNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBIaWRkZW4sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIFRvb2xiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBFTG9nZ2VkSW4gfSBmcm9tICcuLi90eXBlcy9FTG9nZ2VkSW4nXHJcbmltcG9ydCBTaWduSW5CdXR0b25zIGZyb20gJy4vYXV0aC9zaWduX2luX2J1dHRvbidcclxuaW1wb3J0IFNob3BwaW5nQ2FydFJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnRSb3VuZGVkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG50eXBlIFRQcm9wcyA9IHtcclxuICBjdXJyZW50VXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbiAgY3VycmVudEVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuICBjdXJyZW50SWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG4gIGN1cnJlbnRSb2xlOiBzdHJpbmdcclxuICBpc0xvZ2dlZEluOiBhbnlcclxuICBpc0NhcnRFbXB0eTogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXYoe1xyXG4gIGN1cnJlbnRVc2VyLFxyXG4gIGN1cnJlbnRFbWFpbCxcclxuICBjdXJyZW50SWQsXHJcbiAgY3VycmVudFJvbGUsXHJcbiAgaXNMb2dnZWRJbixcclxuICBpc0NhcnRFbXB0eSxcclxufTogVFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICByb3V0ZXIucHVzaCgnL2NhcnQnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzdHlsZT17e21hcmdpblRvcDozMH19PlxyXG4gICAgICAgIDxUb29sYmFyIHZhcmlhbnQ9XCJkZW5zZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgINCd0YPQvNC40LfQvNCw0YLQuNC60LAg0Lgg0LHQvtC90LjRgdGC0LjQutCwXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAge2lzTG9nZ2VkSW4gPT09IEVMb2dnZWRJbi5UcnVlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PtCS0Ysg0LLQvtGI0LvQuCDQutCw0Loge2N1cnJlbnRFbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgeyEhaXNDYXJ0RW1wdHkubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0Um91bmRlZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtpc0xvZ2dlZEluICE9PSBFTG9nZ2VkSW4uVW5rbm93biAmJiAoXHJcbiAgICAgICAgICAgIDxTaWduSW5CdXR0b25zIGlzU2lnbmVkSW49e2lzTG9nZ2VkSW4gPT09IEVMb2dnZWRJbi5UcnVlfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=