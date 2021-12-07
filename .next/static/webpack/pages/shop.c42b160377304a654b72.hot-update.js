webpackHotUpdate_N_E("pages/shop",{

/***/ "./components/shop/ShopCard.tsx":
/*!**************************************!*\
  !*** ./components/shop/ShopCard.tsx ***!
  \**************************************/
/*! exports provided: ShopCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCard", function() { return ShopCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/translate */ "./lib/translate.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\shop\\ShopCard.tsx",
    _s = $RefreshSig$();












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    paper: {
      backgroundColor: 'white'
    },
    media: {
      backgroundSize: 'contain',
      paddingTop: '56.25%' // 16:9

    },
    achorTag: {
      textDecoration: 'none'
    }
  });
});
function ShopCard(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 1,
      className: classes.paper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/shop/goods/[type]/[country]/[id]",
        as: "/shop/goods/".concat(item.category, "/").concat(item.country, "/").concat(item._id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: classes.achorTag,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "".concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_8__["translateCategory"])(item.category), " | ").concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_8__["translateCountry"])(item.country)),
            subheader: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "body2",
          color: "textSecondary",
          component: "p",
          children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              size: "small",
              variant: "contained",
              color: "primary",
              children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ShopCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ShopCard;

var _c;

$RefreshReg$(_c, "ShopCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL1Nob3BDYXJkLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJwYXBlciIsImJhY2tncm91bmRDb2xvciIsIm1lZGlhIiwiYmFja2dyb3VuZFNpemUiLCJwYWRkaW5nVG9wIiwiYWNob3JUYWciLCJ0ZXh0RGVjb3JhdGlvbiIsIlNob3BDYXJkIiwiaXRlbSIsImNsYXNzZXMiLCJjYXRlZ29yeSIsImNvdW50cnkiLCJfaWQiLCJ0cmFuc2xhdGVDYXRlZ29yeSIsInRyYW5zbGF0ZUNvdW50cnkiLCJuYW1lT2ZHb29kcyIsImltYWdlVXJsIiwicHJpY2VPZkdvb2RzIiwiYW1vdW50T2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRTtBQURaLEtBREk7QUFJWEMsU0FBSyxFQUFFO0FBQ0xDLG9CQUFjLEVBQUUsU0FEWDtBQUVMQyxnQkFBVSxFQUFFLFFBRlAsQ0FFaUI7O0FBRmpCLEtBSkk7QUFRWEMsWUFBUSxFQUFFO0FBQ1JDLG9CQUFjLEVBQUU7QUFEUjtBQVJDLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUFtQk8sU0FBU0MsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFDaEQsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsRUFBRSxDQUFqQjtBQUFvQixlQUFTLEVBQUVhLE9BQU8sQ0FBQ1QsS0FBdkM7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxtQ0FEUDtBQUVFLFVBQUUsd0JBQWlCUSxJQUFJLENBQUNFLFFBQXRCLGNBQWtDRixJQUFJLENBQUNHLE9BQXZDLGNBQWtESCxJQUFJLENBQUNJLEdBQXZELENBRko7QUFBQSwrQkFJRTtBQUFHLG1CQUFTLEVBQUVILE9BQU8sQ0FBQ0osUUFBdEI7QUFBQSxrQ0FDRSxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLFlBQUtRLHdFQUFpQixDQUFDTCxJQUFJLENBQUNFLFFBQU4sQ0FBdEIsZ0JBQTJDSSx1RUFBZ0IsQ0FDOUROLElBQUksQ0FBQ0csT0FEeUQsQ0FBM0QsQ0FEUDtBQUlFLHFCQUFTLEVBQUVILElBQUksQ0FBQ087QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FLHFFQUFDLG1FQUFEO0FBQ0UscUJBQVMsRUFBRU4sT0FBTyxDQUFDUCxLQURyQjtBQUVFLGlCQUFLLEVBQUVNLElBQUksQ0FBQ1EsUUFBTCxDQUFjLENBQWQsQ0FGVDtBQUdFLGlCQUFLLEVBQUVSLElBQUksQ0FBQ087QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQW1CRSxxRUFBQyxxRUFBRDtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUE0QixlQUFLLEVBQUMsZUFBbEM7QUFBa0QsbUJBQVMsRUFBQyxHQUE1RDtBQUFBLG1EQUNTUCxJQUFJLENBQUNTLFlBRGQsd0ZBQzZDLEdBRDdDLEVBRUdULElBQUksQ0FBQ1UsYUFBTCxHQUFxQixDQUFyQixHQUNHVixJQUFJLENBQUNVLGFBQUwsR0FBcUIsTUFEeEIsR0FFRyxtQkFKTixlQUtFO0FBQUEsdUJBQ0csR0FESCxlQUVFLHFFQUFDLHlEQUFEO0FBQVEsa0JBQUksRUFBQyxPQUFiO0FBQXFCLHFCQUFPLEVBQUMsV0FBN0I7QUFBeUMsbUJBQUssRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUlZLEdBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzQ0Q7O0dBeENlWCxRO1VBQ0VYLFM7OztLQURGVyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AuYzQyYjE2MDM3NzMwNGE2NTRiNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcidcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgSXRlbU1vZGVsIH0gZnJvbSAnLi4vLi4vcGFnZXMvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9saWIvdHJhbnNsYXRlJ1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDb3VudHJ5IH0gZnJvbSAnLi4vLi4vbGliL3RyYW5zbGF0ZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcclxuICAgIH0sXHJcbiAgICBhY2hvclRhZzoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BDYXJkUHJvcHMge1xyXG4gIGl0ZW06IEl0ZW1Nb2RlbFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hvcENhcmQoeyBpdGVtIH06IFNob3BDYXJkUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQgZWxldmF0aW9uPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPScvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0nXHJcbiAgICAgICAgICBhcz17YC9zaG9wL2dvb2RzLyR7aXRlbS5jYXRlZ29yeX0vJHtpdGVtLmNvdW50cnl9LyR7aXRlbS5faWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYWNob3JUYWd9PlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgIHRpdGxlPXtgJHt0cmFuc2xhdGVDYXRlZ29yeShpdGVtLmNhdGVnb3J5KX0gfCAke3RyYW5zbGF0ZUNvdW50cnkoXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50cnlcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgc3ViaGVhZGVyPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRTZWNvbmRhcnknIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgINCm0LXQvdCwOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsdC70LXQuS4g0J7RgdGC0LDRgtC+0Lo6eycgJ31cclxuICAgICAgICAgICAge2l0ZW0uYW1vdW50T2ZHb29kcyA+IDBcclxuICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50T2ZHb29kcyArICcg0YjRgi4nXHJcbiAgICAgICAgICAgICAgOiAn0KLQvtCy0LDRgCDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCJ31cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J3NtYWxsJyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuICAgICAgICAgICAgICAgINCyINC60L7RgNC30LjQvdGDXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+eycgJ31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9