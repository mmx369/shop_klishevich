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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL1Nob3BDYXJkLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJtZWRpYSIsImJhY2tncm91bmRTaXplIiwicGFkZGluZ1RvcCIsImFjaG9yVGFnIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImJ0biIsIm1hcmdpbkxlZnQiLCJTaG9wQ2FyZCIsIml0ZW0iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZURpc3BhdGNoIiwiaWQiLCJhZGROZXdJdGVtIiwiY2F0ZWdvcnkiLCJjb3VudHJ5IiwiX2lkIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJ0cmFuc2xhdGVDb3VudHJ5IiwibmFtZU9mR29vZHMiLCJpbWFnZVVybCIsInByaWNlT2ZHb29kcyIsImFtb3VudE9mR29vZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0xDLG9CQUFjLEVBQUUsU0FEWDtBQUVMQyxnQkFBVSxFQUFFLFFBRlAsQ0FFaUI7O0FBRmpCLEtBREk7QUFLWEMsWUFBUSxFQUFFO0FBQ1JDLG9CQUFjLEVBQUUsTUFEUjtBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQUxDO0FBU1hDLE9BQUcsRUFBRTtBQUNIQyxnQkFBVSxFQUFFO0FBRFQ7QUFUTSxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBb0JPLFNBQVNDLFFBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQ2hELE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6QjtBQUNBLE1BQU1lLFFBQVEsR0FBR0MsZ0VBQVcsRUFBNUI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7QUFDN0JILFlBQVEsQ0FBQ0ksOEVBQVUsQ0FBQ0QsRUFBRCxFQUFLLENBQUwsQ0FBWCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxFQUFFLENBQWpCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsbUNBRFA7QUFFRSxVQUFFLHdCQUFpQkwsSUFBSSxDQUFDTyxRQUF0QixjQUFrQ1AsSUFBSSxDQUFDUSxPQUF2QyxjQUFrRFIsSUFBSSxDQUFDUyxHQUF2RCxDQUZKO0FBQUEsK0JBSUU7QUFBRyxtQkFBUyxFQUFFUixPQUFPLENBQUNQLFFBQXRCO0FBQUEsa0NBQ0UscUVBQUMsb0VBQUQ7QUFDRSxpQkFBSyxZQUFLZ0Isd0VBQWlCLENBQUNWLElBQUksQ0FBQ08sUUFBTixDQUF0QixnQkFBMkNJLHVFQUFnQixDQUM5RFgsSUFBSSxDQUFDUSxPQUR5RCxDQUEzRCxDQURQO0FBSUUscUJBQVMsRUFBRVIsSUFBSSxDQUFDWTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0UscUVBQUMsbUVBQUQ7QUFDRSxxQkFBUyxFQUFFWCxPQUFPLENBQUNWLEtBRHJCO0FBRUUsaUJBQUssRUFBRVMsSUFBSSxDQUFDYSxRQUFMLENBQWMsQ0FBZCxDQUZUO0FBR0UsaUJBQUssRUFBRWIsSUFBSSxDQUFDWTtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBbUJFLHFFQUFDLHFFQUFEO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLE9BQXBCO0FBQTRCLGVBQUssRUFBQyxlQUFsQztBQUFrRCxtQkFBUyxFQUFDLEdBQTVEO0FBQUEsbURBQ1NaLElBQUksQ0FBQ2MsWUFEZCx3RkFDNkMsR0FEN0MsRUFFR2QsSUFBSSxDQUFDZSxhQUFMLEdBQXFCLENBQXJCLEdBQ0dmLElBQUksQ0FBQ2UsYUFBTCxHQUFxQixNQUR4QixHQUVHLG1CQUpOLGVBS0U7QUFBQSxtQ0FDRSxxRUFBQyx5REFBRDtBQUNFLGtCQUFJLEVBQUMsT0FEUDtBQUVFLHFCQUFPLEVBQUMsV0FGVjtBQUdFLG1CQUFLLEVBQUMsU0FIUjtBQUlFLHVCQUFTLEVBQUVkLE9BQU8sQ0FBQ0osR0FKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEwQ0Q7O0dBbERlRSxRO1VBQ0VaLFMsRUFDQ2dCLHdEOzs7S0FGSEosUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wLmIzNmM3Yzc0YjkyY2YyNzFjZWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInXHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gJy4uLy4uL3BhZ2VzL3Nob3AvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS9baWRdJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbGliL3RyYW5zbGF0ZSdcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ291bnRyeSB9IGZyb20gJy4uLy4uL2xpYi90cmFuc2xhdGUnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGFkZE5ld0l0ZW0gfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XHJcbiAgICB9LFxyXG4gICAgYWNob3JUYWc6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICB9LFxyXG4gICAgYnRuOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BDYXJkUHJvcHMge1xyXG4gIGl0ZW06IEl0ZW1Nb2RlbFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hvcENhcmQoeyBpdGVtIH06IFNob3BDYXJkUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgaGFuZGxlRGlzcGF0Y2ggPSAoaWQpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZE5ld0l0ZW0oaWQsIDEpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkIGVsZXZhdGlvbj17MX0+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGhyZWY9Jy9zaG9wL2dvb2RzL1t0eXBlXS9bY291bnRyeV0vW2lkXSdcclxuICAgICAgICAgIGFzPXtgL3Nob3AvZ29vZHMvJHtpdGVtLmNhdGVnb3J5fS8ke2l0ZW0uY291bnRyeX0vJHtpdGVtLl9pZH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2hvclRhZ30+XHJcbiAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2Ake3RyYW5zbGF0ZUNhdGVnb3J5KGl0ZW0uY2F0ZWdvcnkpfSB8ICR7dHJhbnNsYXRlQ291bnRyeShcclxuICAgICAgICAgICAgICAgIGl0ZW0uY291bnRyeVxyXG4gICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICBzdWJoZWFkZXI9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2VVcmxbMF19XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFNlY29uZGFyeScgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAg0KbQtdC90LA6IHtpdGVtLnByaWNlT2ZHb29kc30g0YDRg9Cx0LvQtdC5LiDQntGB0YLQsNGC0L7Qujp7JyAnfVxyXG4gICAgICAgICAgICB7aXRlbS5hbW91bnRPZkdvb2RzID4gMFxyXG4gICAgICAgICAgICAgID8gaXRlbS5hbW91bnRPZkdvb2RzICsgJyDRiNGCLidcclxuICAgICAgICAgICAgICA6ICfQotC+0LLQsNGAINC+0YLRgdGD0YLRgdGC0LLRg9C10YInfVxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDQsiDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=