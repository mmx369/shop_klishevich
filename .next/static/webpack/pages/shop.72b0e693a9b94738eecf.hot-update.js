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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _translate_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../translate/category */ "./translate/category.ts");
/* harmony import */ var _translate_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../translate/country */ "./translate/country.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\ShopCard.tsx",
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    paper: {
      backgroundColor: "#f9fbe7"
    },
    media: {
      backgroundSize: "contain",
      paddingTop: "56.25%" // 16:9

    },
    achorTag: {
      textDecoration: "none"
    }
  });
});
function ShopCard(_ref, props) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/goods/[type]/[country]/[id]",
      as: "/goods/".concat(item.category, "/").concat(item.country, "/").concat(item._id),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: classes.achorTag,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
          elevation: 5,
          className: classes.paper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "".concat(Object(_translate_category__WEBPACK_IMPORTED_MODULE_9__["translateCategory"])(item.category), " | ").concat(Object(_translate_country__WEBPACK_IMPORTED_MODULE_10__["translateCountry"])(item.country)),
            subheader: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", " ", item.amountOfGoods > 0 ? item.amountOfGoods + " шт." : "Товар отсутствует"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wQ2FyZC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicGFwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtZWRpYSIsImJhY2tncm91bmRTaXplIiwicGFkZGluZ1RvcCIsImFjaG9yVGFnIiwidGV4dERlY29yYXRpb24iLCJTaG9wQ2FyZCIsInByb3BzIiwiaXRlbSIsImNsYXNzZXMiLCJsb2FkaW5nIiwiY2F0ZWdvcnkiLCJjb3VudHJ5IiwiX2lkIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJ0cmFuc2xhdGVDb3VudHJ5IiwibmFtZU9mR29vZHMiLCJpbWFnZVVybCIsInByaWNlT2ZHb29kcyIsImFtb3VudE9mR29vZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFO0FBRFosS0FESTtBQUlYQyxTQUFLLEVBQUU7QUFDTEMsb0JBQWMsRUFBRSxTQURYO0FBRUxDLGdCQUFVLEVBQUUsUUFGUCxDQUVpQjs7QUFGakIsS0FKSTtBQVFYQyxZQUFRLEVBQUU7QUFDUkMsb0JBQWMsRUFBRTtBQURSO0FBUkMsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQXVCTyxTQUFTQyxRQUFULE9BQTJDQyxLQUEzQyxFQUE4RDtBQUFBOztBQUFBLE1BQTFDQyxJQUEwQyxRQUExQ0EsSUFBMEM7QUFDbkUsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBRG1FLHVCQUV2Q1ksS0FGdUMsQ0FFM0RHLE9BRjJEO0FBQUEsTUFFM0RBLE9BRjJELCtCQUVqRCxLQUZpRDtBQUduRSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsVUFBSSxFQUFDLDhCQURQO0FBRUUsUUFBRSxtQkFBWUYsSUFBSSxDQUFDRyxRQUFqQixjQUE2QkgsSUFBSSxDQUFDSSxPQUFsQyxjQUE2Q0osSUFBSSxDQUFDSyxHQUFsRCxDQUZKO0FBQUEsNkJBSUU7QUFBRyxpQkFBUyxFQUFFSixPQUFPLENBQUNMLFFBQXRCO0FBQUEsK0JBQ0UscUVBQUMsOERBQUQ7QUFBTSxtQkFBUyxFQUFFLENBQWpCO0FBQW9CLG1CQUFTLEVBQUVLLE9BQU8sQ0FBQ1YsS0FBdkM7QUFBQSxrQ0FDRSxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLFlBQUtlLDZFQUFpQixDQUFDTixJQUFJLENBQUNHLFFBQU4sQ0FBdEIsZ0JBQTJDSSw0RUFBZ0IsQ0FDOURQLElBQUksQ0FBQ0ksT0FEeUQsQ0FBM0QsQ0FEUDtBQUlFLHFCQUFTLEVBQUVKLElBQUksQ0FBQ1E7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FLHFFQUFDLG1FQUFEO0FBQ0UscUJBQVMsRUFBRVAsT0FBTyxDQUFDUixLQURyQjtBQUVFLGlCQUFLLEVBQUVPLElBQUksQ0FBQ1MsUUFBTCxDQUFjLENBQWQsQ0FGVDtBQUdFLGlCQUFLLEVBQUVULElBQUksQ0FBQ1E7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLGVBWUUscUVBQUMscUVBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxvRUFBRDtBQUFZLHFCQUFPLEVBQUMsT0FBcEI7QUFBNEIsbUJBQUssRUFBQyxlQUFsQztBQUFrRCx1QkFBUyxFQUFDLEdBQTVEO0FBQUEsdURBQ1NSLElBQUksQ0FBQ1UsWUFEZCx3RkFDNkMsR0FEN0MsRUFFR1YsSUFBSSxDQUFDVyxhQUFMLEdBQXFCLENBQXJCLEdBQ0dYLElBQUksQ0FBQ1csYUFBTCxHQUFxQixNQUR4QixHQUVHLG1CQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdDRDs7R0FuQ2ViLFE7VUFDRVgsUzs7O0tBREZXLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC43MmIwZTY5M2E5Yjk0NzM4ZWVjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IHsgSXRlbU1vZGVsIH0gZnJvbSBcIi4uL3BhZ2VzL2dvb2RzL1t0eXBlXS9bY291bnRyeV0vW2lkXVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNhdGVnb3J5IH0gZnJvbSBcIi4uL3RyYW5zbGF0ZS9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDb3VudHJ5IH0gZnJvbSBcIi4uL3RyYW5zbGF0ZS9jb3VudHJ5XCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y5ZmJlN1wiLFxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgcGFkZGluZ1RvcDogXCI1Ni4yNSVcIiwgLy8gMTY6OVxyXG4gICAgfSxcclxuICAgIGFjaG9yVGFnOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcENhcmRQcm9wcyB7XHJcbiAgaXRlbTogSXRlbU1vZGVsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWVkaWFQcm9wcyB7XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaG9wQ2FyZCh7IGl0ZW0gfTogU2hvcENhcmRQcm9wcywgcHJvcHM6IE1lZGlhUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nID0gZmFsc2UgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIGhyZWY9XCIvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS9baWRdXCJcclxuICAgICAgICBhcz17YC9nb29kcy8ke2l0ZW0uY2F0ZWdvcnl9LyR7aXRlbS5jb3VudHJ5fS8ke2l0ZW0uX2lkfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYWNob3JUYWd9PlxyXG4gICAgICAgICAgPENhcmQgZWxldmF0aW9uPXs1fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgIHRpdGxlPXtgJHt0cmFuc2xhdGVDYXRlZ29yeShpdGVtLmNhdGVnb3J5KX0gfCAke3RyYW5zbGF0ZUNvdW50cnkoXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50cnlcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgc3ViaGVhZGVyPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAg0KbQtdC90LA6IHtpdGVtLnByaWNlT2ZHb29kc30g0YDRg9Cx0LvQtdC5LiDQntGB0YLQsNGC0L7Qujp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5hbW91bnRPZkdvb2RzID4gMFxyXG4gICAgICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50T2ZHb29kcyArIFwiINGI0YIuXCJcclxuICAgICAgICAgICAgICAgICAgOiBcItCi0L7QstCw0YAg0L7RgtGB0YPRgtGB0YLQstGD0LXRglwifVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==