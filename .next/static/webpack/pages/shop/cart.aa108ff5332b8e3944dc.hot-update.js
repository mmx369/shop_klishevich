webpackHotUpdate_N_E("pages/shop/cart",{

/***/ "./components/shop/CartTable.tsx":
/*!***************************************!*\
  !*** ./components/shop/CartTable.tsx ***!
  \***************************************/
/*! exports provided: CartTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartTable", function() { return CartTable; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _redux_actions_shippingAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/shippingAction */ "./redux/actions/shippingAction.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\shop\\CartTable.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    maxWidth: 200,
    maxHeight: 300
  },
  media: {
    // height: 300,
    backgroundSize: 'contain'
  }
});
var CartTable = function CartTable() {
  _s();

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('courier'),
      value = _useState[0],
      setValue = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_actions_shippingAction__WEBPACK_IMPORTED_MODULE_10__["addShippingPrice"])(_constants__WEBPACK_IMPORTED_MODULE_9__["SHIPPING_PRICES"][value]));
  }, [value]);
  var cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cart;
  }) || [];
  var totalPrice = cart.reduce(function (acc, sum) {
    return acc + sum.priceOfGoods * sum.amountOfGoods;
  }, 0);

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h6",
        children: "\u0412\u0430\u0448\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: cart.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: classes.root,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
              component: "img" // height='100'
              // width='100'
              ,
              className: classes.media,
              image: item.imageUrl[0],
              title: item.nameOfGoods
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                gutterBottom: true,
                variant: "h5",
                component: "h4",
                children: item.nameOfGoods
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: ["\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ", item.priceOfGoods * item.amountOfGoods, " \u0440\u0443\u0431."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CartTable, "WIwucnGFzp7VV1tm/PzpZ3quIYE=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = CartTable;

var _c;

$RefreshReg$(_c, "CartTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL0NhcnRUYWJsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1lZGlhIiwiYmFja2dyb3VuZFNpemUiLCJDYXJ0VGFibGUiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUVmZmVjdCIsImFkZFNoaXBwaW5nUHJpY2UiLCJTSElQUElOR19QUklDRVMiLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRvdGFsUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJzdW0iLCJwcmljZU9mR29vZHMiLCJhbW91bnRPZkdvb2RzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwiaW1hZ2VVcmwiLCJuYW1lT2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxHQUROO0FBRUpDLGFBQVMsRUFBRTtBQUZQLEdBRHFCO0FBSzNCQyxPQUFLLEVBQUU7QUFDTDtBQUNBQyxrQkFBYyxFQUFFO0FBRlg7QUFMb0IsQ0FBRCxDQUE1QjtBQVdPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBQ0EsTUFBTVMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGNkIsa0JBR0hDLHNEQUFRLENBQUMsU0FBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFLN0JDLHlEQUFT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MTA4ZmY1MzMyYjhlMzk0NGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nXHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnXHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCdcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnXHJcbmltcG9ydCB7IFNISVBQSU5HX1BSSUNFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgYWRkU2hpcHBpbmdQcmljZSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2hpcHBpbmdBY3Rpb24nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgbWF4SGVpZ2h0OiAzMDAsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgLy8gaGVpZ2h0OiAzMDAsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJ2NvdXJpZXInKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkU2hpcHBpbmdQcmljZShTSElQUElOR19QUklDRVNbdmFsdWVdKSlcclxuICB9LCBbdmFsdWVdKVxyXG5cclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5jYXJ0KSB8fCBbXVxyXG5cclxuICBjb25zdCB0b3RhbFByaWNlID0gY2FydC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3VtKSB7XHJcbiAgICByZXR1cm4gYWNjICsgc3VtLnByaWNlT2ZHb29kcyAqIHN1bS5hbW91bnRPZkdvb2RzXHJcbiAgfSwgMClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VmFsdWUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz7QktCw0YjQuCDQv9C+0LrRg9C/0LrQuDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NhcnQubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodD0nMTAwJ1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg9JzEwMCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD0naDUnIGNvbXBvbmVudD0naDQnPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFNlY29uZGFyeScgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRTZWNvbmRhcnknIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgICAgICAgINCm0LXQvdCwINC30LAg0LXQtNC40L3QuNGG0YM6IHtpdGVtLnByaWNlT2ZHb29kc30g0YDRg9CxLlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5JyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgICAgICDQntCx0YnQsNGPINGB0YLQvtC40LzQvtGB0YLRjDoge2l0ZW0ucHJpY2VPZkdvb2RzICogaXRlbS5hbW91bnRPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGRpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0Jz7QktCw0YjQuCDQv9C+0LrRg9C/0LrQuDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezV9IG1kPXszfSBsZz17Mn0+XHJcbiAgICAgICAgICAgIHtjYXJ0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGtleT17aXRlbS5faWR9IGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KbQtdC90LAg0LfQsCDQtdC00LjQvdC40YbRgzoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7QsdGJ0LDRjyDRgdGC0L7QuNC80L7RgdGC0Yw6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2VPZkdvb2RzICogaXRlbS5hbW91bnRPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PSdmaWVsZHNldCc+XHJcbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+0KHQv9C+0YHQvtCxINC00L7RgdGC0LDQstC60Lg8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9J2NvdXJpZXInXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J9Ca0YPRgNGM0LXRgCAo0LPQvtGALtCc0L7RgdC60LLQsCA0MDAg0YDRg9CxLiknXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9J21haWwnXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J9CX0LDQutCw0LfQvdC+0LUg0L/QuNGB0YzQvNC+IDEg0LrQu9Cw0YHRgdCwICjQn9C+0YfRgtCwINCg0L7RgdGB0LjQuCkg0L/QviDQoNC+0YHRgdC40LggMjAwINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9J21haWxPdmVyc2VhcydcclxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0n0KDQtdCz0LjRgdGC0YDQuNGA0YPQtdC80L7QtSDQv9C40YHRjNC80L4g0J/QvtGH0YLQvtC5INCg0L7RgdGB0LjQuCDQt9CwINGA0YPQsdC10LYgNTAwINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgINCY0YLQvtCz0L4g0LfQsCDRgtC+0LLQsNGAOiB7dG90YWxQcmljZX0g0YDRg9CxLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICDQmNGC0L7Qs9C+INC00L7RgdGC0LDQstC60LA6IHtTSElQUElOR19QUklDRVNbdmFsdWVdfSDRgNGD0LEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgINCY0YLQvtCz0L4g0Log0L7Qv9C70LDRgtC1OiB7U0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXSArIHRvdGFsUHJpY2V9INGA0YPQsS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=