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
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");



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
      marginLeft: '5px'
    }
  });
});
function ShopCard(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var handleDispatch = function handleDispatch(id) {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__["addNewItem"])(id, 1));
  };

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
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
              onClick: function onClick() {
                handleDispatch(item._id);
              },
              children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL1Nob3BDYXJkLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJtZWRpYSIsImJhY2tncm91bmRTaXplIiwicGFkZGluZ1RvcCIsImFjaG9yVGFnIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImJ0biIsIm1hcmdpbkxlZnQiLCJTaG9wQ2FyZCIsIml0ZW0iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZURpc3BhdGNoIiwiaWQiLCJhZGROZXdJdGVtIiwiY2F0ZWdvcnkiLCJjb3VudHJ5IiwiX2lkIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJ0cmFuc2xhdGVDb3VudHJ5IiwibmFtZU9mR29vZHMiLCJpbWFnZVVybCIsInByaWNlT2ZHb29kcyIsImFtb3VudE9mR29vZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0xDLG9CQUFjLEVBQUUsU0FEWDtBQUVMQyxnQkFBVSxFQUFFLFFBRlAsQ0FFaUI7O0FBRmpCLEtBREk7QUFLWEMsWUFBUSxFQUFFO0FBQ1JDLG9CQUFjLEVBQUUsTUFEUjtBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQUxDO0FBU1hDLE9BQUcsRUFBRTtBQUNIQyxnQkFBVSxFQUFFO0FBRFQ7QUFUTSxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBb0JPLFNBQVNDLFFBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQ2hELE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6QjtBQUNBLE1BQU1lLFFBQVEsR0FBR0MsZ0VBQVcsRUFBNUI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7QUFDN0JILFlBQVEsQ0FBQ0ksOEVBQVUsQ0FBQ0QsRUFBRCxFQUFLLENBQUwsQ0FBWCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxFQUFFLENBQWpCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsbUNBRFA7QUFFRSxVQUFFLHdCQUFpQkwsSUFBSSxDQUFDTyxRQUF0QixjQUFrQ1AsSUFBSSxDQUFDUSxPQUF2QyxjQUFrRFIsSUFBSSxDQUFDUyxHQUF2RCxDQUZKO0FBQUEsK0JBSUU7QUFBRyxtQkFBUyxFQUFFUixPQUFPLENBQUNQLFFBQXRCO0FBQUEsa0NBQ0UscUVBQUMsb0VBQUQ7QUFDRSxpQkFBSyxZQUFLZ0Isd0VBQWlCLENBQUNWLElBQUksQ0FBQ08sUUFBTixDQUF0QixnQkFBMkNJLHVFQUFnQixDQUM5RFgsSUFBSSxDQUFDUSxPQUR5RCxDQUEzRCxDQURQO0FBSUUscUJBQVMsRUFBRVIsSUFBSSxDQUFDWTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0UscUVBQUMsbUVBQUQ7QUFDRSxxQkFBUyxFQUFFWCxPQUFPLENBQUNWLEtBRHJCO0FBRUUsaUJBQUssRUFBRVMsSUFBSSxDQUFDYSxRQUFMLENBQWMsQ0FBZCxDQUZUO0FBR0UsaUJBQUssRUFBRWIsSUFBSSxDQUFDWTtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBbUJFLHFFQUFDLHFFQUFEO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLE9BQXBCO0FBQTRCLGVBQUssRUFBQyxlQUFsQztBQUFrRCxtQkFBUyxFQUFDLEdBQTVEO0FBQUEsbURBQ1NaLElBQUksQ0FBQ2MsWUFEZCx3RkFDNkMsR0FEN0MsRUFFR2QsSUFBSSxDQUFDZSxhQUFMLEdBQXFCLENBQXJCLEdBQ0dmLElBQUksQ0FBQ2UsYUFBTCxHQUFxQixNQUR4QixHQUVHLG1CQUpOLGVBS0U7QUFBQSxtQ0FDRSxxRUFBQyx5REFBRDtBQUNFLGtCQUFJLEVBQUMsT0FEUDtBQUVFLHFCQUFPLEVBQUMsV0FGVjtBQUdFLG1CQUFLLEVBQUMsU0FIUjtBQUlFLHVCQUFTLEVBQUVkLE9BQU8sQ0FBQ0osR0FKckI7QUFLRSxxQkFBTyxFQUFFLG1CQUFNO0FBQ2JPLDhCQUFjLENBQUNKLElBQUksQ0FBQ1MsR0FBTixDQUFkO0FBQ0QsZUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTZDRDs7R0FyRGVWLFE7VUFDRVosUyxFQUNDZ0Isd0Q7OztLQUZISixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AuYzUwM2UwNDVmMjEwYTlkMTJiOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcidcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgSXRlbU1vZGVsIH0gZnJvbSAnLi4vLi4vcGFnZXMvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9saWIvdHJhbnNsYXRlJ1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDb3VudHJ5IH0gZnJvbSAnLi4vLi4vbGliL3RyYW5zbGF0ZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgYWRkTmV3SXRlbSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgbWVkaWE6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcclxuICAgIH0sXHJcbiAgICBhY2hvclRhZzoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIH0sXHJcbiAgICBidG46IHtcclxuICAgICAgbWFyZ2luTGVmdDogJzVweCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcENhcmRQcm9wcyB7XHJcbiAgaXRlbTogSXRlbU1vZGVsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaG9wQ2FyZCh7IGl0ZW0gfTogU2hvcENhcmRQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICBjb25zdCBoYW5kbGVEaXNwYXRjaCA9IChpZCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkTmV3SXRlbShpZCwgMSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQgZWxldmF0aW9uPXsxfT5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj0nL3Nob3AvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS9baWRdJ1xyXG4gICAgICAgICAgYXM9e2Avc2hvcC9nb29kcy8ke2l0ZW0uY2F0ZWdvcnl9LyR7aXRlbS5jb3VudHJ5fS8ke2l0ZW0uX2lkfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFjaG9yVGFnfT5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICB0aXRsZT17YCR7dHJhbnNsYXRlQ2F0ZWdvcnkoaXRlbS5jYXRlZ29yeSl9IHwgJHt0cmFuc2xhdGVDb3VudHJ5KFxyXG4gICAgICAgICAgICAgICAgaXRlbS5jb3VudHJ5XHJcbiAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgIHN1YmhlYWRlcj17aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5JyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICDQptC10L3QsDoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LHQu9C10LkuINCe0YHRgtCw0YLQvtC6OnsnICd9XHJcbiAgICAgICAgICAgIHtpdGVtLmFtb3VudE9mR29vZHMgPiAwXHJcbiAgICAgICAgICAgICAgPyBpdGVtLmFtb3VudE9mR29vZHMgKyAnINGI0YIuJ1xyXG4gICAgICAgICAgICAgIDogJ9Ci0L7QstCw0YAg0L7RgtGB0YPRgtGB0YLQstGD0LXRgid9XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVEaXNwYXRjaChpdGVtLl9pZClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg0LIg0LrQvtGA0LfQuNC90YNcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9