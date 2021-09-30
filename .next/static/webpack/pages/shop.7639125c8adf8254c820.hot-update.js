webpackHotUpdate_N_E("pages/shop",{

/***/ "./components/ShopCard.tsx":
/*!*********************************!*\
  !*** ./components/ShopCard.tsx ***!
  \*********************************/
/*! exports provided: ShopCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCard", function() { return ShopCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _translate_category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../translate/category */ "./translate/category.ts");
/* harmony import */ var _translate_country__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../translate/country */ "./translate/country.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\ShopCard.tsx",
    _s = $RefreshSig$();












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    media: {
      // height: 0,
      paddingTop: '56.25%' // 16:9

    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["red"][500]
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/goods/[type]/[country]/[id]",
      as: "/goods/".concat(item.category, "/").concat(item.country, "/").concat(item._id),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: classes.achorTag,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
          elevation: 5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "".concat(Object(_translate_category__WEBPACK_IMPORTED_MODULE_10__["translateCategory"])(item.category), " | ").concat(Object(_translate_country__WEBPACK_IMPORTED_MODULE_11__["translateCountry"])(item.country)),
            subheader: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods // component='img'

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wQ2FyZC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibWVkaWEiLCJwYWRkaW5nVG9wIiwiYXZhdGFyIiwiYmFja2dyb3VuZENvbG9yIiwicmVkIiwiYWNob3JUYWciLCJ0ZXh0RGVjb3JhdGlvbiIsIlNob3BDYXJkIiwiaXRlbSIsImNsYXNzZXMiLCJjYXRlZ29yeSIsImNvdW50cnkiLCJfaWQiLCJ0cmFuc2xhdGVDYXRlZ29yeSIsInRyYW5zbGF0ZUNvdW50cnkiLCJuYW1lT2ZHb29kcyIsImltYWdlVXJsIiwicHJpY2VPZkdvb2RzIiwiYW1vdW50T2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0w7QUFDQUMsZ0JBQVUsRUFBRSxRQUZQLENBRWlCOztBQUZqQixLQURJO0FBS1hDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFQyw0REFBRyxDQUFDLEdBQUQ7QUFEZCxLQUxHO0FBUVhDLFlBQVEsRUFBRTtBQUNSQyxvQkFBYyxFQUFFO0FBRFI7QUFSQyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBbUJPLFNBQVNDLFFBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQ2hELE1BQU1DLE9BQU8sR0FBR2IsU0FBUyxFQUF6QjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxVQUFJLEVBQUMsOEJBRFA7QUFFRSxRQUFFLG1CQUFZWSxJQUFJLENBQUNFLFFBQWpCLGNBQTZCRixJQUFJLENBQUNHLE9BQWxDLGNBQTZDSCxJQUFJLENBQUNJLEdBQWxELENBRko7QUFBQSw2QkFJRTtBQUFHLGlCQUFTLEVBQUVILE9BQU8sQ0FBQ0osUUFBdEI7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUFNLG1CQUFTLEVBQUUsQ0FBakI7QUFBQSxrQ0FDRSxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLFlBQUtRLDhFQUFpQixDQUFDTCxJQUFJLENBQUNFLFFBQU4sQ0FBdEIsZ0JBQTJDSSw0RUFBZ0IsQ0FDOUROLElBQUksQ0FBQ0csT0FEeUQsQ0FBM0QsQ0FEUDtBQUlFLHFCQUFTLEVBQUVILElBQUksQ0FBQ087QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FLHFFQUFDLG1FQUFEO0FBQ0UscUJBQVMsRUFBRU4sT0FBTyxDQUFDVCxLQURyQjtBQUVFLGlCQUFLLEVBQUVRLElBQUksQ0FBQ1EsUUFBTCxDQUFjLENBQWQsQ0FGVDtBQUdFLGlCQUFLLEVBQUVSLElBQUksQ0FBQ08sV0FIZCxDQUlFOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsZUFhRSxxRUFBQyxxRUFBRDtBQUFBLG1DQUNFLHFFQUFDLG9FQUFEO0FBQVkscUJBQU8sRUFBQyxPQUFwQjtBQUE0QixtQkFBSyxFQUFDLGVBQWxDO0FBQWtELHVCQUFTLEVBQUMsR0FBNUQ7QUFBQSx1REFDU1AsSUFBSSxDQUFDUyxZQURkLHdGQUM2QyxHQUQ3QyxFQUVHVCxJQUFJLENBQUNVLGFBQUwsR0FBcUIsQ0FBckIsR0FDR1YsSUFBSSxDQUFDVSxhQUFMLEdBQXFCLE1BRHhCLEdBRUcsbUJBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUNEOztHQW5DZVgsUTtVQUNFWCxTOzs7S0FERlcsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wLjc2MzkxMjVjOGFkZjgyNTRjODIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcidcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQgeyBJdGVtTW9kZWwgfSBmcm9tICcuLi9wYWdlcy9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ2F0ZWdvcnkgfSBmcm9tICcuLi90cmFuc2xhdGUvY2F0ZWdvcnknXHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNvdW50cnkgfSBmcm9tICcuLi90cmFuc2xhdGUvY291bnRyeSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBtZWRpYToge1xyXG4gICAgICAvLyBoZWlnaHQ6IDAsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcmVkWzUwMF0sXHJcbiAgICB9LFxyXG4gICAgYWNob3JUYWc6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSlcclxuKVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaG9wQ2FyZFByb3BzIHtcclxuICBpdGVtOiBJdGVtTW9kZWxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNob3BDYXJkKHsgaXRlbSB9OiBTaG9wQ2FyZFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj1cIi9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF1cIlxyXG4gICAgICAgIGFzPXtgL2dvb2RzLyR7aXRlbS5jYXRlZ29yeX0vJHtpdGVtLmNvdW50cnl9LyR7aXRlbS5faWR9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2hvclRhZ30+XHJcbiAgICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezV9ID5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICB0aXRsZT17YCR7dHJhbnNsYXRlQ2F0ZWdvcnkoaXRlbS5jYXRlZ29yeSl9IHwgJHt0cmFuc2xhdGVDb3VudHJ5KFxyXG4gICAgICAgICAgICAgICAgaXRlbS5jb3VudHJ5XHJcbiAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgIHN1YmhlYWRlcj17aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAvLyBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgINCm0LXQvdCwOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsdC70LXQuS4g0J7RgdGC0LDRgtC+0Lo6eycgJ31cclxuICAgICAgICAgICAgICAgIHtpdGVtLmFtb3VudE9mR29vZHMgPiAwXHJcbiAgICAgICAgICAgICAgICAgID8gaXRlbS5hbW91bnRPZkdvb2RzICsgJyDRiNGCLidcclxuICAgICAgICAgICAgICAgICAgOiAn0KLQvtCy0LDRgCDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCJ31cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==