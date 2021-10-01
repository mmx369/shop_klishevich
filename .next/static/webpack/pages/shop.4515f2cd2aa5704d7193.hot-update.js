webpackHotUpdate_N_E("pages/shop",{

/***/ "./pages/shop.tsx":
/*!************************!*\
  !*** ./pages/shop.tsx ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ "./components/Search.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ShopPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ShopPagination */ "./components/ShopPagination.tsx");
/* harmony import */ var _components_ShopCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ShopCard */ "./components/ShopCard.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");


var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\shop.tsx",
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {
      marginBottom: '30px'
    }
  });
});
var __N_SSP = true;
function ShopList(_ref) {
  _s();

  var _this = this;

  var types = _ref.types,
      countries = _ref.countries,
      goods = _ref.goods,
      totalPages = _ref.totalPages;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      query = _useRouter.query;

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(query),
      serverQuery = _useState[0];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])('/api/shop?' + Object(querystring__WEBPACK_IMPORTED_MODULE_5__["stringify"])(query), {
    // dedupingInterval: 15000,
    initialData: fast_deep_equal__WEBPACK_IMPORTED_MODULE_7___default()(query, serverQuery) ? {
      goods: goods,
      totalPages: totalPages
    } : undefined
  }),
      data = _useSWR.data;

  return (
    /*#__PURE__*/
    // //TODO: use skeleton to avoid blinking
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u0411\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u043D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        spacing: 2,
        style: {
          backgroundColor: 'red',
          marginBottom: 30
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          xs: 12,
          sm: 5,
          md: 3,
          lg: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
            singleColumn: true,
            types: types,
            countries: countries
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          container: true,
          item: true,
          xs: 12,
          sm: 7,
          md: 9,
          lg: 10,
          spacing: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ShopPagination__WEBPACK_IMPORTED_MODULE_8__["ShopPagination"], {
              totalPages: data === null || data === void 0 ? void 0 : data.totalPages
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, this), ((data === null || data === void 0 ? void 0 : data.goods) || []).map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
              item: true,
              xs: 12,
              sm: 6,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ShopCard__WEBPACK_IMPORTED_MODULE_9__["ShopCard"], {
                item: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, _this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ShopPagination__WEBPACK_IMPORTED_MODULE_8__["ShopPagination"], {
              totalPages: data === null || data === void 0 ? void 0 : data.totalPages
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }, this)
  );
}

_s(ShopList, "mqQPKWEOTV8xR/I8cBLicaKEPyk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], useStyles, swr__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = ShopList;

var _c;

$RefreshReg$(_c, "ShopList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJtYXJnaW5Cb3R0b20iLCJTaG9wTGlzdCIsInR5cGVzIiwiY291bnRyaWVzIiwiZ29vZHMiLCJ0b3RhbFBhZ2VzIiwidXNlUm91dGVyIiwicXVlcnkiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJzZXJ2ZXJRdWVyeSIsInVzZVNXUiIsInN0cmluZ2lmeSIsImluaXRpYWxEYXRhIiwiZGVlcEVxdWFsIiwidW5kZWZpbmVkIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsIml0ZW0iLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxrQkFBWSxFQUFFO0FBRFY7QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQWVlLFNBQVNDLFFBQVQsT0FLRztBQUFBOztBQUFBOztBQUFBLE1BSmhCQyxLQUlnQixRQUpoQkEsS0FJZ0I7QUFBQSxNQUhoQkMsU0FHZ0IsUUFIaEJBLFNBR2dCO0FBQUEsTUFGaEJDLEtBRWdCLFFBRmhCQSxLQUVnQjtBQUFBLE1BRGhCQyxVQUNnQixRQURoQkEsVUFDZ0I7O0FBQUEsbUJBQ0VDLDZEQUFTLEVBRFg7QUFBQSxNQUNSQyxLQURRLGNBQ1JBLEtBRFE7O0FBRWhCLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6Qjs7QUFGZ0Isa0JBR01hLHNEQUFRLENBQUNGLEtBQUQsQ0FIZDtBQUFBLE1BR1RHLFdBSFM7O0FBQUEsZ0JBSUNDLG1EQUFNLENBQUMsZUFBZUMsNkRBQVMsQ0FBQ0wsS0FBRCxDQUF6QixFQUFrQztBQUN2RDtBQUNBTSxlQUFXLEVBQUVDLHNEQUFTLENBQUNQLEtBQUQsRUFBUUcsV0FBUixDQUFULEdBQ1Q7QUFBRU4sV0FBSyxFQUFMQSxLQUFGO0FBQVNDLGdCQUFVLEVBQVZBO0FBQVQsS0FEUyxHQUVUVTtBQUptRCxHQUFsQyxDQUpQO0FBQUEsTUFJUkMsSUFKUSxXQUlSQSxJQUpROztBQVdoQjtBQUFBO0FBQ0U7QUFDQSx5RUFBQywyREFBRDtBQUFRLFdBQUssRUFBQyxnT0FBZDtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBSyxFQUFFO0FBQUNDLHlCQUFlLEVBQUMsS0FBakI7QUFBd0JqQixzQkFBWSxFQUFDO0FBQXJDLFNBQW5DO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFtQixZQUFFLEVBQUUsQ0FBdkI7QUFBMEIsWUFBRSxFQUFFLENBQTlCO0FBQWlDLFlBQUUsRUFBRSxDQUFyQztBQUFBLGlDQUNFLHFFQUFDLDBEQUFEO0FBQVEsd0JBQVksTUFBcEI7QUFBcUIsaUJBQUssRUFBRUUsS0FBNUI7QUFBbUMscUJBQVMsRUFBRUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyxzREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsY0FBSSxNQUFwQjtBQUFxQixZQUFFLEVBQUUsRUFBekI7QUFBNkIsWUFBRSxFQUFFLENBQWpDO0FBQW9DLFlBQUUsRUFBRSxDQUF4QztBQUEyQyxZQUFFLEVBQUUsRUFBL0M7QUFBbUQsaUJBQU8sRUFBRSxDQUE1RDtBQUFBLGtDQUNFLHFFQUFDLHNEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGNBQUUsRUFBRSxFQUFmO0FBQUEsbUNBQ0UscUVBQUMseUVBQUQ7QUFBZ0Isd0JBQVUsRUFBRWEsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVYO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUcsQ0FBQyxDQUFBVyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRVosS0FBTixLQUFlLEVBQWhCLEVBQW9CYyxHQUFwQixDQUF3QixVQUFDQyxJQUFEO0FBQUEsZ0NBQ3ZCLHFFQUFDLHNEQUFEO0FBQXFCLGtCQUFJLE1BQXpCO0FBQTBCLGdCQUFFLEVBQUUsRUFBOUI7QUFBa0MsZ0JBQUUsRUFBRSxDQUF0QztBQUFBLHFDQUNFLHFFQUFDLDZEQUFEO0FBQVUsb0JBQUksRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVdBLElBQUksQ0FBQ0MsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEdUI7QUFBQSxXQUF4QixDQUpILGVBU0UscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBQSxtQ0FDRSxxRUFBQyx5RUFBRDtBQUFnQix3QkFBVSxFQUFFSixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRVg7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQXVCRDs7R0F2Q3VCSixRO1VBTUpLLHFELEVBQ0ZWLFMsRUFFQ2UsMkM7OztLQVRLVixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AuNDUxNWYyY2QyYWE1NzA0ZDcxOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaCdcclxuaW1wb3J0IHsgZ2V0QXNTdHJpbmcgfSBmcm9tICcuLi9kYXRhYmFzZS9nZXRBc1N0cmluZydcclxuaW1wb3J0IHsgZ2V0VHlwZXMsIFR5cGUgfSBmcm9tICcuLi9kYXRhYmFzZS9nZXRUeXBlJ1xyXG5pbXBvcnQgeyBDb3VudHJ5LCBnZXRDb3VudHJ5IH0gZnJvbSAnLi4vZGF0YWJhc2UvZ2V0Q291bnRyeSdcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgZ2V0UGFnaW5hdGVkSXRlbSB9IGZyb20gJy4uL2RhdGFiYXNlL2dldFBhZ2luYXRlZEl0ZW1zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCdcclxuaW1wb3J0IHsgU2hvcFBhZ2luYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1Nob3BQYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBTaG9wQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2hvcENhcmQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206ICczMHB4JyxcclxuICAgIH1cclxuICB9KVxyXG4pXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BMaXN0UHJvcHMge1xyXG4gIHR5cGVzOiBUeXBlW11cclxuICBjb3VudHJpZXM6IENvdW50cnlbXVxyXG4gIGdvb2RzOiBhbnlcclxuICB0b3RhbFBhZ2VzOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvcExpc3Qoe1xyXG4gIHR5cGVzLFxyXG4gIGNvdW50cmllcyxcclxuICBnb29kcyxcclxuICB0b3RhbFBhZ2VzLFxyXG59OiBTaG9wTGlzdFByb3BzKSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbc2VydmVyUXVlcnldID0gdXNlU3RhdGUocXVlcnkpXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoJy9hcGkvc2hvcD8nICsgc3RyaW5naWZ5KHF1ZXJ5KSwge1xyXG4gICAgLy8gZGVkdXBpbmdJbnRlcnZhbDogMTUwMDAsXHJcbiAgICBpbml0aWFsRGF0YTogZGVlcEVxdWFsKHF1ZXJ5LCBzZXJ2ZXJRdWVyeSlcclxuICAgICAgPyB7IGdvb2RzLCB0b3RhbFBhZ2VzIH1cclxuICAgICAgOiB1bmRlZmluZWQsXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIC8vVE9ETzogdXNlIHNrZWxldG9uIHRvIGF2b2lkIGJsaW5raW5nXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwi0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvSB8INCR0L7QvdC40YHRgtC40LrQsCDQuCDQvdGD0LzQuNC30LzQsNGC0LjQutCwXCI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmVkJywgbWFyZ2luQm90dG9tOjMwfX0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs1fSBtZD17M30gbGc9ezJ9PlxyXG4gICAgICAgICAgPFNlYXJjaCBzaW5nbGVDb2x1bW4gdHlwZXM9e3R5cGVzfSBjb3VudHJpZXM9e2NvdW50cmllc30gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17N30gbWQ9ezl9IGxnPXsxMH0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxTaG9wUGFnaW5hdGlvbiB0b3RhbFBhZ2VzPXtkYXRhPy50b3RhbFBhZ2VzfSAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgeyhkYXRhPy5nb29kcyB8fCBbXSkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGtleT17aXRlbS5faWR9IGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgPFNob3BDYXJkIGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8U2hvcFBhZ2luYXRpb24gdG90YWxQYWdlcz17ZGF0YT8udG90YWxQYWdlc30gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHR5cGUgPSBnZXRBc1N0cmluZyhjdHgucXVlcnkudHlwZSlcclxuICBjb25zdCBbdHlwZXMsIGNvdW50cmllcywgcGFnaW5hdGlvbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBnZXRUeXBlcygpLFxyXG4gICAgZ2V0Q291bnRyeSh0eXBlKSxcclxuICAgIGdldFBhZ2luYXRlZEl0ZW0oY3R4LnF1ZXJ5KSxcclxuICBdKVxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGdvb2RzU2VyaWFsaXplZCA9IHBhZ2luYXRpb24uZ29vZHMubWFwKFxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICAoeyBfZG9jOiB7IF9pZCwgZGF0ZSwgLi4ucmVzdCB9IH0pID0+IHtcclxuICAgICAgcmVzdC5faWQgPSBfaWQudG9TdHJpbmcoKVxyXG4gICAgICByZXR1cm4gcmVzdFxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGVzLFxyXG4gICAgICBjb3VudHJpZXMsXHJcbiAgICAgIGdvb2RzOiBnb29kc1NlcmlhbGl6ZWQsXHJcbiAgICAgIHRvdGFsUGFnZXM6IHBhZ2luYXRpb24udG90YWxQYWdlcyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=