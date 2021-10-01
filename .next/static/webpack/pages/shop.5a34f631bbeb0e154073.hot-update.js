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
      title: "Shop Page",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        spacing: 2,
        style: {
          backgroundColor: 'red'
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
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
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
              lineNumber: 49,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
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
                lineNumber: 53,
                columnNumber: 15
              }, _this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ShopPagination__WEBPACK_IMPORTED_MODULE_8__["ShopPagination"], {
              totalPages: data === null || data === void 0 ? void 0 : data.totalPages
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, this)
  );
}

_s(ShopList, "VVVDkkGLtKQxShze8ditEFGqFw0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC50c3giXSwibmFtZXMiOlsiU2hvcExpc3QiLCJ0eXBlcyIsImNvdW50cmllcyIsImdvb2RzIiwidG90YWxQYWdlcyIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlU3RhdGUiLCJzZXJ2ZXJRdWVyeSIsInVzZVNXUiIsInN0cmluZ2lmeSIsImluaXRpYWxEYXRhIiwiZGVlcEVxdWFsIiwidW5kZWZpbmVkIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsIml0ZW0iLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVZSxTQUFTQSxRQUFULE9BS0c7QUFBQTs7QUFBQTs7QUFBQSxNQUpoQkMsS0FJZ0IsUUFKaEJBLEtBSWdCO0FBQUEsTUFIaEJDLFNBR2dCLFFBSGhCQSxTQUdnQjtBQUFBLE1BRmhCQyxLQUVnQixRQUZoQkEsS0FFZ0I7QUFBQSxNQURoQkMsVUFDZ0IsUUFEaEJBLFVBQ2dCOztBQUFBLG1CQUNFQyw2REFBUyxFQURYO0FBQUEsTUFDUkMsS0FEUSxjQUNSQSxLQURROztBQUFBLGtCQUVNQyxzREFBUSxDQUFDRCxLQUFELENBRmQ7QUFBQSxNQUVURSxXQUZTOztBQUFBLGdCQUdDQyxtREFBTSxDQUFDLGVBQWVDLDZEQUFTLENBQUNKLEtBQUQsQ0FBekIsRUFBa0M7QUFDdkQ7QUFDQUssZUFBVyxFQUFFQyxzREFBUyxDQUFDTixLQUFELEVBQVFFLFdBQVIsQ0FBVCxHQUNUO0FBQUVMLFdBQUssRUFBTEEsS0FBRjtBQUFTQyxnQkFBVSxFQUFWQTtBQUFULEtBRFMsR0FFVFM7QUFKbUQsR0FBbEMsQ0FIUDtBQUFBLE1BR1JDLElBSFEsV0FHUkEsSUFIUTs7QUFVaEI7QUFBQTtBQUNFO0FBQ0EseUVBQUMsMkRBQUQ7QUFBUSxXQUFLLEVBQUMsV0FBZDtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBSyxFQUFFO0FBQUNDLHlCQUFlLEVBQUM7QUFBakIsU0FBbkM7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUEwQixZQUFFLEVBQUUsQ0FBOUI7QUFBaUMsWUFBRSxFQUFFLENBQXJDO0FBQUEsaUNBQ0UscUVBQUMsMERBQUQ7QUFBUSx3QkFBWSxNQUFwQjtBQUFxQixpQkFBSyxFQUFFZCxLQUE1QjtBQUFtQyxxQkFBUyxFQUFFQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLHNEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFnQixjQUFJLE1BQXBCO0FBQXFCLFlBQUUsRUFBRSxFQUF6QjtBQUE2QixZQUFFLEVBQUUsQ0FBakM7QUFBb0MsWUFBRSxFQUFFLENBQXhDO0FBQTJDLFlBQUUsRUFBRSxFQUEvQztBQUFtRCxpQkFBTyxFQUFFLENBQTVEO0FBQUEsa0NBQ0UscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBQSxtQ0FDRSxxRUFBQyx5RUFBRDtBQUFnQix3QkFBVSxFQUFFWSxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRVY7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFJRyxDQUFDLENBQUFVLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFWCxLQUFOLEtBQWUsRUFBaEIsRUFBb0JhLEdBQXBCLENBQXdCLFVBQUNDLElBQUQ7QUFBQSxnQ0FDdkIscUVBQUMsc0RBQUQ7QUFBcUIsa0JBQUksTUFBekI7QUFBMEIsZ0JBQUUsRUFBRSxFQUE5QjtBQUFrQyxnQkFBRSxFQUFFLENBQXRDO0FBQUEscUNBQ0UscUVBQUMsNkRBQUQ7QUFBVSxvQkFBSSxFQUFFQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBV0EsSUFBSSxDQUFDQyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR1QjtBQUFBLFdBQXhCLENBSkgsZUFTRSxxRUFBQyxzREFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsRUFBZjtBQUFBLG1DQUNFLHFFQUFDLHlFQUFEO0FBQWdCLHdCQUFVLEVBQUVKLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFVjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBdUJEOztHQXRDdUJKLFE7VUFNSksscUQsRUFFREksMkM7OztLQVJLVCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AuNWEzNGY2MzFiYmViMGUxNTQwNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2gnXHJcbmltcG9ydCB7IGdldEFzU3RyaW5nIH0gZnJvbSAnLi4vZGF0YWJhc2UvZ2V0QXNTdHJpbmcnXHJcbmltcG9ydCB7IGdldFR5cGVzLCBUeXBlIH0gZnJvbSAnLi4vZGF0YWJhc2UvZ2V0VHlwZSdcclxuaW1wb3J0IHsgQ291bnRyeSwgZ2V0Q291bnRyeSB9IGZyb20gJy4uL2RhdGFiYXNlL2dldENvdW50cnknXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IGdldFBhZ2luYXRlZEl0ZW0gfSBmcm9tICcuLi9kYXRhYmFzZS9nZXRQYWdpbmF0ZWRJdGVtcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnXHJcbmltcG9ydCB7IFNob3BQYWdpbmF0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TaG9wUGFnaW5hdGlvbidcclxuaW1wb3J0IHsgU2hvcENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL1Nob3BDYXJkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BMaXN0UHJvcHMge1xyXG4gIHR5cGVzOiBUeXBlW11cclxuICBjb3VudHJpZXM6IENvdW50cnlbXVxyXG4gIGdvb2RzOiBhbnlcclxuICB0b3RhbFBhZ2VzOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvcExpc3Qoe1xyXG4gIHR5cGVzLFxyXG4gIGNvdW50cmllcyxcclxuICBnb29kcyxcclxuICB0b3RhbFBhZ2VzLFxyXG59OiBTaG9wTGlzdFByb3BzKSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbc2VydmVyUXVlcnldID0gdXNlU3RhdGUocXVlcnkpXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoJy9hcGkvc2hvcD8nICsgc3RyaW5naWZ5KHF1ZXJ5KSwge1xyXG4gICAgLy8gZGVkdXBpbmdJbnRlcnZhbDogMTUwMDAsXHJcbiAgICBpbml0aWFsRGF0YTogZGVlcEVxdWFsKHF1ZXJ5LCBzZXJ2ZXJRdWVyeSlcclxuICAgICAgPyB7IGdvb2RzLCB0b3RhbFBhZ2VzIH1cclxuICAgICAgOiB1bmRlZmluZWQsXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIC8vVE9ETzogdXNlIHNrZWxldG9uIHRvIGF2b2lkIGJsaW5raW5nXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiU2hvcCBQYWdlXCI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmVkJ319PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NX0gbWQ9ezN9IGxnPXsyfT5cclxuICAgICAgICAgIDxTZWFyY2ggc2luZ2xlQ29sdW1uIHR5cGVzPXt0eXBlc30gY291bnRyaWVzPXtjb3VudHJpZXN9IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezd9IG1kPXs5fSBsZz17MTB9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8U2hvcFBhZ2luYXRpb24gdG90YWxQYWdlcz17ZGF0YT8udG90YWxQYWdlc30gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIHsoZGF0YT8uZ29vZHMgfHwgW10pLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBrZXk9e2l0ZW0uX2lkfSBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgIDxTaG9wQ2FyZCBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFNob3BQYWdpbmF0aW9uIHRvdGFsUGFnZXM9e2RhdGE/LnRvdGFsUGFnZXN9IC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB0eXBlID0gZ2V0QXNTdHJpbmcoY3R4LnF1ZXJ5LnR5cGUpXHJcbiAgY29uc3QgW3R5cGVzLCBjb3VudHJpZXMsIHBhZ2luYXRpb25dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZ2V0VHlwZXMoKSxcclxuICAgIGdldENvdW50cnkodHlwZSksXHJcbiAgICBnZXRQYWdpbmF0ZWRJdGVtKGN0eC5xdWVyeSksXHJcbiAgXSlcclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBnb29kc1NlcmlhbGl6ZWQgPSBwYWdpbmF0aW9uLmdvb2RzLm1hcChcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgKHsgX2RvYzogeyBfaWQsIGRhdGUsIC4uLnJlc3QgfSB9KSA9PiB7XHJcbiAgICAgIHJlc3QuX2lkID0gX2lkLnRvU3RyaW5nKClcclxuICAgICAgcmV0dXJuIHJlc3RcclxuICAgIH1cclxuICApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlcyxcclxuICAgICAgY291bnRyaWVzLFxyXG4gICAgICBnb29kczogZ29vZHNTZXJpYWxpemVkLFxyXG4gICAgICB0b3RhbFBhZ2VzOiBwYWdpbmF0aW9uLnRvdGFsUGFnZXMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9