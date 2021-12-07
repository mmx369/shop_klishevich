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
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/translate */ "./lib/translate.ts");



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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 1,
      className: classes.paper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "".concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_7__["translateCategory"])(item.category), " | ").concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_7__["translateCountry"])(item.country)),
        subheader: item.nameOfGoods
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.media,
        image: item.imageUrl[0],
        title: item.nameOfGoods
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "body2",
          color: "textSecondary",
          component: "p",
          children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL1Nob3BDYXJkLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJwYXBlciIsImJhY2tncm91bmRDb2xvciIsIm1lZGlhIiwiYmFja2dyb3VuZFNpemUiLCJwYWRkaW5nVG9wIiwiYWNob3JUYWciLCJ0ZXh0RGVjb3JhdGlvbiIsIlNob3BDYXJkIiwiaXRlbSIsImNsYXNzZXMiLCJ0cmFuc2xhdGVDYXRlZ29yeSIsImNhdGVnb3J5IiwidHJhbnNsYXRlQ291bnRyeSIsImNvdW50cnkiLCJuYW1lT2ZHb29kcyIsImltYWdlVXJsIiwicHJpY2VPZkdvb2RzIiwiYW1vdW50T2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0xDLHFCQUFlLEVBQUU7QUFEWixLQURJO0FBSVhDLFNBQUssRUFBRTtBQUNMQyxvQkFBYyxFQUFFLFNBRFg7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQLENBRWlCOztBQUZqQixLQUpJO0FBUVhDLFlBQVEsRUFBRTtBQUNSQyxvQkFBYyxFQUFFO0FBRFI7QUFSQyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBbUJPLFNBQVNDLFFBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQ2hELE1BQU1DLE9BQU8sR0FBR2IsU0FBUyxFQUF6QjtBQUNBLHNCQUNFO0FBQUEsNEJBTUUscUVBQUMsOERBQUQ7QUFBTSxlQUFTLEVBQUUsQ0FBakI7QUFBb0IsZUFBUyxFQUFFYSxPQUFPLENBQUNULEtBQXZDO0FBQUEsOEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxhQUFLLFlBQUtVLHdFQUFpQixDQUFDRixJQUFJLENBQUNHLFFBQU4sQ0FBdEIsZ0JBQTJDQyx1RUFBZ0IsQ0FDOURKLElBQUksQ0FBQ0ssT0FEeUQsQ0FBM0QsQ0FEUDtBQUlFLGlCQUFTLEVBQUVMLElBQUksQ0FBQ007QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsbUVBQUQ7QUFDRSxpQkFBUyxFQUFFTCxPQUFPLENBQUNQLEtBRHJCO0FBRUUsYUFBSyxFQUFFTSxJQUFJLENBQUNPLFFBQUwsQ0FBYyxDQUFkLENBRlQ7QUFHRSxhQUFLLEVBQUVQLElBQUksQ0FBQ007QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFZRSxxRUFBQyxxRUFBRDtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUE0QixlQUFLLEVBQUMsZUFBbEM7QUFBa0QsbUJBQVMsRUFBQyxHQUE1RDtBQUFBLG1EQUNTTixJQUFJLENBQUNRLFlBRGQsd0ZBQzZDLEdBRDdDLEVBRUdSLElBQUksQ0FBQ1MsYUFBTCxHQUFxQixDQUFyQixHQUNHVCxJQUFJLENBQUNTLGFBQUwsR0FBcUIsTUFEeEIsR0FFRyxtQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3QkY7QUFBQSxrQkFERjtBQWlDRDs7R0FuQ2VWLFE7VUFDRVgsUzs7O0tBREZXLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC43ODljMWU1NWRhMDFmZjExYjdmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJ1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgeyBJdGVtTW9kZWwgfSBmcm9tICcuLi8uLi9wYWdlcy9zaG9wL2dvb2RzL1t0eXBlXS9bY291bnRyeV0vW2lkXSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2xpYi90cmFuc2xhdGUnXHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNvdW50cnkgfSBmcm9tICcuLi8uLi9saWIvdHJhbnNsYXRlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxyXG4gICAgfSxcclxuICAgIGFjaG9yVGFnOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcENhcmRQcm9wcyB7XHJcbiAgaXRlbTogSXRlbU1vZGVsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaG9wQ2FyZCh7IGl0ZW0gfTogU2hvcENhcmRQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPExpbmtcclxuICAgICAgICBocmVmPScvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0nXHJcbiAgICAgICAgYXM9e2Avc2hvcC9nb29kcy8ke2l0ZW0uY2F0ZWdvcnl9LyR7aXRlbS5jb3VudHJ5fS8ke2l0ZW0uX2lkfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYWNob3JUYWd9PiAqL31cclxuICAgICAgPENhcmQgZWxldmF0aW9uPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT17YCR7dHJhbnNsYXRlQ2F0ZWdvcnkoaXRlbS5jYXRlZ29yeSl9IHwgJHt0cmFuc2xhdGVDb3VudHJ5KFxyXG4gICAgICAgICAgICBpdGVtLmNvdW50cnlcclxuICAgICAgICAgICl9YH1cclxuICAgICAgICAgIHN1YmhlYWRlcj17aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRTZWNvbmRhcnknIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgINCm0LXQvdCwOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsdC70LXQuS4g0J7RgdGC0LDRgtC+0Lo6eycgJ31cclxuICAgICAgICAgICAge2l0ZW0uYW1vdW50T2ZHb29kcyA+IDBcclxuICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50T2ZHb29kcyArICcg0YjRgi4nXHJcbiAgICAgICAgICAgICAgOiAn0KLQvtCy0LDRgCDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCJ31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHsvKiA8L2E+XHJcbiAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgIDxidXR0b24+0LIg0LrQvtGA0LfQuNC90YM8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9