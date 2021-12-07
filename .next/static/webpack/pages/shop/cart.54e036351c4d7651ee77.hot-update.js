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
    maxHeight: 300,
    display: 'flex'
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
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
              lineNumber: 59,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                gutterBottom: true,
                variant: "h5",
                component: "h4",
                children: item.nameOfGoods
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children: ["\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ", item.priceOfGoods * item.amountOfGoods, " \u0440\u0443\u0431."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL0NhcnRUYWJsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImRpc3BsYXkiLCJtZWRpYSIsImJhY2tncm91bmRTaXplIiwiQ2FydFRhYmxlIiwiY2xhc3NlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJhZGRTaGlwcGluZ1ByaWNlIiwiU0hJUFBJTkdfUFJJQ0VTIiwiY2FydCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b3RhbFByaWNlIiwicmVkdWNlIiwiYWNjIiwic3VtIiwicHJpY2VPZkdvb2RzIiwiYW1vdW50T2ZHb29kcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImltYWdlVXJsIiwibmFtZU9mR29vZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsR0FETjtBQUVKQyxhQUFTLEVBQUUsR0FGUDtBQUdKQyxXQUFPLEVBQUU7QUFITCxHQURxQjtBQU0zQkMsT0FBSyxFQUFFO0FBQ0w7QUFDQUMsa0JBQWMsRUFBRTtBQUZYO0FBTm9CLENBQUQsQ0FBNUI7QUFZTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBR1QsU0FBUyxFQUF6QjtBQUNBLE1BQU1VLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjZCLGtCQUdIQyxzREFBUSxDQUFDLFNBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhz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YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvY2FydC41NGUwMzYzNTFjNGQ3NjUxZWU3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJ1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnXHJcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsJ1xyXG5pbXBvcnQgeyBTSElQUElOR19QUklDRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IGFkZFNoaXBwaW5nUHJpY2UgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3NoaXBwaW5nQWN0aW9uJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IDIwMCxcclxuICAgIG1heEhlaWdodDogMzAwLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIC8vIGhlaWdodDogMzAwLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCdjb3VyaWVyJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZFNoaXBwaW5nUHJpY2UoU0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXSkpXHJcbiAgfSwgW3ZhbHVlXSlcclxuXHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuY2FydCkgfHwgW11cclxuXHJcbiAgY29uc3QgdG90YWxQcmljZSA9IGNhcnQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN1bSkge1xyXG4gICAgcmV0dXJuIGFjYyArIHN1bS5wcmljZU9mR29vZHMgKiBzdW0uYW1vdW50T2ZHb29kc1xyXG4gIH0sIDApXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFZhbHVlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+0JLQsNGI0Lgg0L/QvtC60YPQv9C60Lg8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjYXJ0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9JzEwMCdcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoPScxMDAnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g0Jz5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29sb3I9J3RleHRTZWNvbmRhcnknIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgICAgICAgINCa0L7Qu9C40YfQtdGB0YLQstC+OiB7aXRlbS5hbW91bnRPZkdvb2RzfSDRiNGCLlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5JyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgICAgICDQptC10L3QsCDQt9CwINC10LTQuNC90LjRhtGDOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dFNlY29uZGFyeScgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICAgICAg0J7QsdGJ0LDRjyDRgdGC0L7QuNC80L7RgdGC0Yw6IHtpdGVtLnByaWNlT2ZHb29kcyAqIGl0ZW0uYW1vdW50T2ZHb29kc30g0YDRg9CxLlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIDxkaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCc+0JLQsNGI0Lgg0L/QvtC60YPQv9C60Lg8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs1fSBtZD17M30gbGc9ezJ9PlxyXG4gICAgICAgICAgICB7Y2FydC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBrZXk9e2l0ZW0uX2lkfSBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2VVcmxbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PSdoNScgY29tcG9uZW50PSdoNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCa0L7Qu9C40YfQtdGB0YLQstC+OiB7aXRlbS5hbW91bnRPZkdvb2RzfSDRiNGCLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCm0LXQvdCwINC30LAg0LXQtNC40L3QuNGG0YM6IHtpdGVtLnByaWNlT2ZHb29kc30g0YDRg9CxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCe0LHRidCw0Y8g0YHRgtC+0LjQvNC+0YHRgtGMOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlT2ZHb29kcyAqIGl0ZW0uYW1vdW50T2ZHb29kc30g0YDRg9CxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD0nZmllbGRzZXQnPlxyXG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PSdsZWdlbmQnPtCh0L/QvtGB0L7QsSDQtNC+0YHRgtCw0LLQutC4PC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J3NoaXBwaW5nJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPSdjb3VyaWVyJ1xyXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSfQmtGD0YDRjNC10YAgKNCz0L7RgC7QnNC+0YHQutCy0LAgNDAwINGA0YPQsS4pJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPSdtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSfQl9Cw0LrQsNC30L3QvtC1INC/0LjRgdGM0LzQviAxINC60LvQsNGB0YHQsCAo0J/QvtGH0YLQsCDQoNC+0YHRgdC40LgpINC/0L4g0KDQvtGB0YHQuNC4IDIwMCDRgNGD0LEuJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPSdtYWlsT3ZlcnNlYXMnXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J9Cg0LXQs9C40YHRgtGA0LjRgNGD0LXQvNC+0LUg0L/QuNGB0YzQvNC+INCf0L7Rh9GC0L7QuSDQoNC+0YHRgdC40Lgg0LfQsCDRgNGD0LHQtdC2IDUwMCDRgNGD0LEuJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICDQmNGC0L7Qs9C+INC30LAg0YLQvtCy0LDRgDoge3RvdGFsUHJpY2V9INGA0YPQsS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgICAg0JjRgtC+0LPQviDQtNC+0YHRgtCw0LLQutCwOiB7U0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXX0g0YDRg9CxLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICDQmNGC0L7Qs9C+INC6INC+0L/Qu9Cw0YLQtToge1NISVBQSU5HX1BSSUNFU1t2YWx1ZV0gKyB0b3RhbFByaWNlfSDRgNGD0LEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9