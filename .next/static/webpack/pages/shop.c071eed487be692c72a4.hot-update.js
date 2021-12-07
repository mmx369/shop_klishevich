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
    },
    btn: {
      "float": 'right'
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
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "body2",
          color: "textSecondary",
          component: "p",
          children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          size: "small",
          variant: "contained",
          color: "primary",
          className: classes.btn,
          children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL1Nob3BDYXJkLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJwYXBlciIsImJhY2tncm91bmRDb2xvciIsIm1lZGlhIiwiYmFja2dyb3VuZFNpemUiLCJwYWRkaW5nVG9wIiwiYWNob3JUYWciLCJ0ZXh0RGVjb3JhdGlvbiIsImJ0biIsIlNob3BDYXJkIiwiaXRlbSIsImNsYXNzZXMiLCJjYXRlZ29yeSIsImNvdW50cnkiLCJfaWQiLCJ0cmFuc2xhdGVDYXRlZ29yeSIsInRyYW5zbGF0ZUNvdW50cnkiLCJuYW1lT2ZHb29kcyIsImltYWdlVXJsIiwicHJpY2VPZkdvb2RzIiwiYW1vdW50T2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRTtBQURaLEtBREk7QUFJWEMsU0FBSyxFQUFFO0FBQ0xDLG9CQUFjLEVBQUUsU0FEWDtBQUVMQyxnQkFBVSxFQUFFLFFBRlAsQ0FFaUI7O0FBRmpCLEtBSkk7QUFRWEMsWUFBUSxFQUFFO0FBQ1JDLG9CQUFjLEVBQUU7QUFEUixLQVJDO0FBV1hDLE9BQUcsRUFBRTtBQUNILGVBQU87QUFESjtBQVhNLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUFzQk8sU0FBU0MsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFDaEQsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsRUFBRSxDQUFqQjtBQUFvQixlQUFTLEVBQUVjLE9BQU8sQ0FBQ1YsS0FBdkM7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxtQ0FEUDtBQUVFLFVBQUUsd0JBQWlCUyxJQUFJLENBQUNFLFFBQXRCLGNBQWtDRixJQUFJLENBQUNHLE9BQXZDLGNBQWtESCxJQUFJLENBQUNJLEdBQXZELENBRko7QUFBQSwrQkFJRTtBQUFHLG1CQUFTLEVBQUVILE9BQU8sQ0FBQ0wsUUFBdEI7QUFBQSxrQ0FDRSxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLFlBQUtTLHdFQUFpQixDQUFDTCxJQUFJLENBQUNFLFFBQU4sQ0FBdEIsZ0JBQTJDSSx1RUFBZ0IsQ0FDOUROLElBQUksQ0FBQ0csT0FEeUQsQ0FBM0QsQ0FEUDtBQUlFLHFCQUFTLEVBQUVILElBQUksQ0FBQ087QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FLHFFQUFDLG1FQUFEO0FBQ0UscUJBQVMsRUFBRU4sT0FBTyxDQUFDUixLQURyQjtBQUVFLGlCQUFLLEVBQUVPLElBQUksQ0FBQ1EsUUFBTCxDQUFjLENBQWQsQ0FGVDtBQUdFLGlCQUFLLEVBQUVSLElBQUksQ0FBQ087QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQW1CRSxxRUFBQyxxRUFBRDtBQUFBLGdDQUNFLHFFQUFDLG9FQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUE0QixlQUFLLEVBQUMsZUFBbEM7QUFBa0QsbUJBQVMsRUFBQyxHQUE1RDtBQUFBLG1EQUNTUCxJQUFJLENBQUNTLFlBRGQsd0ZBQzZDLEdBRDdDLEVBRUdULElBQUksQ0FBQ1UsYUFBTCxHQUFxQixDQUFyQixHQUNHVixJQUFJLENBQUNVLGFBQUwsR0FBcUIsTUFEeEIsR0FFRyxtQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRSxxRUFBQyx5REFBRDtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UsZUFBSyxFQUFDLFNBSFI7QUFJRSxtQkFBUyxFQUFFVCxPQUFPLENBQUNILEdBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXdDRDs7R0ExQ2VDLFE7VUFDRVosUzs7O0tBREZZLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC5jMDcxZWVkNDg3YmU2OTJjNzJhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJ1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgeyBJdGVtTW9kZWwgfSBmcm9tICcuLi8uLi9wYWdlcy9zaG9wL2dvb2RzL1t0eXBlXS9bY291bnRyeV0vW2lkXSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2xpYi90cmFuc2xhdGUnXHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNvdW50cnkgfSBmcm9tICcuLi8uLi9saWIvdHJhbnNsYXRlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxyXG4gICAgfSxcclxuICAgIGFjaG9yVGFnOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgYnRuOiB7XHJcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BDYXJkUHJvcHMge1xyXG4gIGl0ZW06IEl0ZW1Nb2RlbFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hvcENhcmQoeyBpdGVtIH06IFNob3BDYXJkUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQgZWxldmF0aW9uPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPScvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0nXHJcbiAgICAgICAgICBhcz17YC9zaG9wL2dvb2RzLyR7aXRlbS5jYXRlZ29yeX0vJHtpdGVtLmNvdW50cnl9LyR7aXRlbS5faWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYWNob3JUYWd9PlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgIHRpdGxlPXtgJHt0cmFuc2xhdGVDYXRlZ29yeShpdGVtLmNhdGVnb3J5KX0gfCAke3RyYW5zbGF0ZUNvdW50cnkoXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50cnlcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgc3ViaGVhZGVyPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRTZWNvbmRhcnknIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgINCm0LXQvdCwOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsdC70LXQuS4g0J7RgdGC0LDRgtC+0Lo6eycgJ31cclxuICAgICAgICAgICAge2l0ZW0uYW1vdW50T2ZHb29kcyA+IDBcclxuICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50T2ZHb29kcyArICcg0YjRgi4nXHJcbiAgICAgICAgICAgICAgOiAn0KLQvtCy0LDRgCDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCJ31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCyINC60L7RgNC30LjQvdGDXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==