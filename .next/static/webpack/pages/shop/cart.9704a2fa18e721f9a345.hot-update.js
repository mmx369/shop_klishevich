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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _redux_actions_shippingAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/shippingAction */ "./redux/actions/shippingAction.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\shop\\CartTable.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    maxWidth: 200,
    maxHeight: 300
  },
  media: {
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
    dispatch(Object(_redux_actions_shippingAction__WEBPACK_IMPORTED_MODULE_11__["addShippingPrice"])(_constants__WEBPACK_IMPORTED_MODULE_10__["SHIPPING_PRICES"][value]));
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
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
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
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h4",
                  children: item.nameOfGoods
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: ["\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ", item.priceOfGoods * item.amountOfGoods, ' ', "\u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL0NhcnRUYWJsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1lZGlhIiwiYmFja2dyb3VuZFNpemUiLCJDYXJ0VGFibGUiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUVmZmVjdCIsImFkZFNoaXBwaW5nUHJpY2UiLCJTSElQUElOR19QUklDRVMiLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRvdGFsUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJzdW0iLCJwcmljZU9mR29vZHMiLCJhbW91bnRPZkdvb2RzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwiaW1hZ2VVcmwiLCJuYW1lT2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxHQUROO0FBRUpDLGFBQVMsRUFBRTtBQUZQLEdBRHFCO0FBSzNCQyxPQUFLLEVBQUU7QUFDTEMsa0JBQWMsRUFBRTtBQURYO0FBTG9CLENBQUQsQ0FBNUI7QUFVTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUNBLE1BQU1TLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjZCLGtCQUdIQyxzREFBUSxDQUFDLFNBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBSzdCQyx5REFB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VEZYLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9jYXJ0Ljk3MDRhMmZhMThlNzIxZjlhMzQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nXHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnXHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCdcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnXHJcbmltcG9ydCB7IFNISVBQSU5HX1BSSUNFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgYWRkU2hpcHBpbmdQcmljZSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2hpcHBpbmdBY3Rpb24nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgbWF4SGVpZ2h0OiAzMDAsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCdjb3VyaWVyJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZFNoaXBwaW5nUHJpY2UoU0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXSkpXHJcbiAgfSwgW3ZhbHVlXSlcclxuXHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuY2FydCkgfHwgW11cclxuXHJcbiAgY29uc3QgdG90YWxQcmljZSA9IGNhcnQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN1bSkge1xyXG4gICAgcmV0dXJuIGFjYyArIHN1bS5wcmljZU9mR29vZHMgKiBzdW0uYW1vdW50T2ZHb29kc1xyXG4gIH0sIDApXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFZhbHVlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+0JLQsNGI0Lgg0L/QvtC60YPQv9C60Lg8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAge2NhcnQubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xyXG4gICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9JzEwMCdcclxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9JzEwMCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD0naDUnIGNvbXBvbmVudD0naDQnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQptC10L3QsCDQt9CwINC10LTQuNC90LjRhtGDOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCe0LHRidCw0Y8g0YHRgtC+0LjQvNC+0YHRgtGMOiB7aXRlbS5wcmljZU9mR29vZHMgKiBpdGVtLmFtb3VudE9mR29vZHN9eycgJ31cclxuICAgICAgICAgICAgICAgICAgICDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8ZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPtCS0LDRiNC4INC/0L7QutGD0L/QutC4PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NX0gbWQ9ezN9IGxnPXsyfT5cclxuICAgICAgICAgICAge2NhcnQubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQga2V5PXtpdGVtLl9pZH0gaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD0naDUnIGNvbXBvbmVudD0naDQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmtC+0LvQuNGH0LXRgdGC0LLQvjoge2l0ZW0uYW1vdW50T2ZHb29kc30g0YjRgi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQptC10L3QsCDQt9CwINC10LTQuNC90LjRhtGDOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntCx0YnQsNGPINGB0YLQvtC40LzQvtGB0YLRjDp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZU9mR29vZHMgKiBpdGVtLmFtb3VudE9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9J2ZpZWxkc2V0Jz5cclxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD0nbGVnZW5kJz7QodC/0L7RgdC+0LEg0LTQvtGB0YLQsNCy0LrQuDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICAgIG5hbWU9J3NoaXBwaW5nJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT0nY291cmllcidcclxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0n0JrRg9GA0YzQtdGAICjQs9C+0YAu0JzQvtGB0LrQstCwIDQwMCDRgNGD0LEuKSdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT0nbWFpbCdcclxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0n0JfQsNC60LDQt9C90L7QtSDQv9C40YHRjNC80L4gMSDQutC70LDRgdGB0LAgKNCf0L7Rh9GC0LAg0KDQvtGB0YHQuNC4KSDQv9C+INCg0L7RgdGB0LjQuCAyMDAg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT0nbWFpbE92ZXJzZWFzJ1xyXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSfQoNC10LPQuNGB0YLRgNC40YDRg9C10LzQvtC1INC/0LjRgdGM0LzQviDQn9C+0YfRgtC+0Lkg0KDQvtGB0YHQuNC4INC30LAg0YDRg9Cx0LXQtiA1MDAg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgICAg0JjRgtC+0LPQviDQt9CwINGC0L7QstCw0YA6IHt0b3RhbFByaWNlfSDRgNGD0LEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgINCY0YLQvtCz0L4g0LTQvtGB0YLQsNCy0LrQsDoge1NISVBQSU5HX1BSSUNFU1t2YWx1ZV19INGA0YPQsS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgICAg0JjRgtC+0LPQviDQuiDQvtC/0LvQsNGC0LU6IHtTSElQUElOR19QUklDRVNbdmFsdWVdICsgdG90YWxQcmljZX0g0YDRg9CxLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==