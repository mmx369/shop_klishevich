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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\shop\\ShopCard.tsx",
    _s = $RefreshSig$();













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    media: {
      backgroundSize: 'contain',
      paddingTop: '56.25%' // 16:9

    },
    achorTag: {
      textDecoration: 'none',
      color: 'black'
    },
    btn: {
      marginLeft: '3px'
    }
  });
});
function ShopCard(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 1,
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "body2",
          color: "textSecondary",
          component: "p",
          children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              size: "small",
              variant: "contained",
              color: "primary",
              className: classes.btn,
              children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
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

_s(ShopCard, "aFWslISJzTtHlU1qXyXYeeBhNak=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL1Nob3BDYXJkLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJtZWRpYSIsImJhY2tncm91bmRTaXplIiwicGFkZGluZ1RvcCIsImFjaG9yVGFnIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImJ0biIsIm1hcmdpbkxlZnQiLCJTaG9wQ2FyZCIsIml0ZW0iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhdGVnb3J5IiwiY291bnRyeSIsIl9pZCIsInRyYW5zbGF0ZUNhdGVnb3J5IiwidHJhbnNsYXRlQ291bnRyeSIsIm5hbWVPZkdvb2RzIiwiaW1hZ2VVcmwiLCJwcmljZU9mR29vZHMiLCJhbW91bnRPZkdvb2RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxvQkFBYyxFQUFFLFNBRFg7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQLENBRWlCOztBQUZqQixLQURJO0FBS1hDLFlBQVEsRUFBRTtBQUNSQyxvQkFBYyxFQUFFLE1BRFI7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FMQztBQVNYQyxPQUFHLEVBQUU7QUFDSEMsZ0JBQVUsRUFBRTtBQURUO0FBVE0sR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQW9CTyxTQUFTQyxRQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUNoRCxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7QUFDQSxNQUFNZSxRQUFRLEdBQUdDLGdFQUFXLEVBQTVCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsRUFBRSxDQUFqQjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLG1DQURQO0FBRUUsVUFBRSx3QkFBaUJILElBQUksQ0FBQ0ksUUFBdEIsY0FBa0NKLElBQUksQ0FBQ0ssT0FBdkMsY0FBa0RMLElBQUksQ0FBQ00sR0FBdkQsQ0FGSjtBQUFBLCtCQUlFO0FBQUcsbUJBQVMsRUFBRUwsT0FBTyxDQUFDUCxRQUF0QjtBQUFBLGtDQUNFLHFFQUFDLG9FQUFEO0FBQ0UsaUJBQUssWUFBS2Esd0VBQWlCLENBQUNQLElBQUksQ0FBQ0ksUUFBTixDQUF0QixnQkFBMkNJLHVFQUFnQixDQUM5RFIsSUFBSSxDQUFDSyxPQUR5RCxDQUEzRCxDQURQO0FBSUUscUJBQVMsRUFBRUwsSUFBSSxDQUFDUztBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0UscUVBQUMsbUVBQUQ7QUFDRSxxQkFBUyxFQUFFUixPQUFPLENBQUNWLEtBRHJCO0FBRUUsaUJBQUssRUFBRVMsSUFBSSxDQUFDVSxRQUFMLENBQWMsQ0FBZCxDQUZUO0FBR0UsaUJBQUssRUFBRVYsSUFBSSxDQUFDUztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBbUJFLHFFQUFDLHFFQUFEO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLE9BQXBCO0FBQTRCLGVBQUssRUFBQyxlQUFsQztBQUFrRCxtQkFBUyxFQUFDLEdBQTVEO0FBQUEsbURBQ1NULElBQUksQ0FBQ1csWUFEZCx3RkFDNkMsR0FEN0MsRUFFR1gsSUFBSSxDQUFDWSxhQUFMLEdBQXFCLENBQXJCLEdBQ0daLElBQUksQ0FBQ1ksYUFBTCxHQUFxQixNQUR4QixHQUVHLG1CQUpOLGVBS0U7QUFBQSxtQ0FDRSxxRUFBQyx5REFBRDtBQUNFLGtCQUFJLEVBQUMsT0FEUDtBQUVFLHFCQUFPLEVBQUMsV0FGVjtBQUdFLG1CQUFLLEVBQUMsU0FIUjtBQUlFLHVCQUFTLEVBQUVYLE9BQU8sQ0FBQ0osR0FKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEwQ0Q7O0dBN0NlRSxRO1VBQ0VaLFMsRUFDQ2dCLHdEOzs7S0FGSEosUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wLmFlOTNhZmJlODczNzgyZmU1OWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInXHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gJy4uLy4uL3BhZ2VzL3Nob3AvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS9baWRdJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbGliL3RyYW5zbGF0ZSdcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ291bnRyeSB9IGZyb20gJy4uLy4uL2xpYi90cmFuc2xhdGUnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgbWVkaWE6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcclxuICAgIH0sXHJcbiAgICBhY2hvclRhZzoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIH0sXHJcbiAgICBidG46IHtcclxuICAgICAgbWFyZ2luTGVmdDogJzNweCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcENhcmRQcm9wcyB7XHJcbiAgaXRlbTogSXRlbU1vZGVsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaG9wQ2FyZCh7IGl0ZW0gfTogU2hvcENhcmRQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZCBlbGV2YXRpb249ezF9PlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPScvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0nXHJcbiAgICAgICAgICBhcz17YC9zaG9wL2dvb2RzLyR7aXRlbS5jYXRlZ29yeX0vJHtpdGVtLmNvdW50cnl9LyR7aXRlbS5faWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYWNob3JUYWd9PlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgIHRpdGxlPXtgJHt0cmFuc2xhdGVDYXRlZ29yeShpdGVtLmNhdGVnb3J5KX0gfCAke3RyYW5zbGF0ZUNvdW50cnkoXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50cnlcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgc3ViaGVhZGVyPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRTZWNvbmRhcnknIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgINCm0LXQvdCwOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsdC70LXQuS4g0J7RgdGC0LDRgtC+0Lo6eycgJ31cclxuICAgICAgICAgICAge2l0ZW0uYW1vdW50T2ZHb29kcyA+IDBcclxuICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50T2ZHb29kcyArICcg0YjRgi4nXHJcbiAgICAgICAgICAgICAgOiAn0KLQvtCy0LDRgCDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCJ31cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg0LIg0LrQvtGA0LfQuNC90YNcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9