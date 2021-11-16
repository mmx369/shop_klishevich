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
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");
/* harmony import */ var _redux_actions_shippingAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/shippingAction */ "./redux/actions/shippingAction.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\shop\\CartTable.tsx",
    _this = undefined,
    _s = $RefreshSig$();

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    maxWidth: 300
  },
  media: {
    height: 100
  }
});
var CartTable = function CartTable() {
  _s();

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("courier"),
      value = _useState[0],
      setValue = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_redux_actions_shippingAction__WEBPACK_IMPORTED_MODULE_16__["addShippingPrice"])(_constants__WEBPACK_IMPORTED_MODULE_15__["SHIPPING_PRICES"][value]));
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h4",
        children: "\u0412\u0430\u0448\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        container: true,
        spacing: 1,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
          item: true,
          xs: 12,
          sm: 6,
          children: cart.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
              item: true,
              xs: 12,
              sm: 6,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: classes.root,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    component: "img",
                    className: classes.media,
                    image: item.imageUrl[0],
                    title: item.nameOfGoods
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      gutterBottom: true,
                      variant: "h5",
                      component: "h4",
                      children: item.nameOfGoods
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      variant: "body2",
                      color: "textSecondary",
                      component: "p",
                      children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      variant: "body2",
                      color: "textSecondary",
                      component: "p",
                      children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      variant: "body2",
                      color: "textSecondary",
                      component: "p",
                      children: ["\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:", " ", item.priceOfGoods * item.amountOfGoods, " \u0440\u0443\u0431."]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, _this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
            component: "fieldset",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
              component: "legend",
              children: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
              "aria-label": "shipping",
              name: "shipping",
              value: value,
              onChange: handleChange,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: "courier",
                control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 28
                }, _this),
                label: "\u041A\u0443\u0440\u044C\u0435\u0440 (\u0433\u043E\u0440.\u041C\u043E\u0441\u043A\u0432\u0430 400 \u0440\u0443\u0431.)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: "mail",
                control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 28
                }, _this),
                label: "\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E 1 \u043A\u043B\u0430\u0441\u0441\u0430 (\u041F\u043E\u0447\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438) \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 200 \u0440\u0443\u0431."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: "mailOverseas",
                control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 28
                }, _this),
                label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u041F\u043E\u0447\u0442\u043E\u0439 \u0420\u043E\u0441\u0441\u0438\u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436 500 \u0440\u0443\u0431."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
            variant: "subtitle2",
            component: "p",
            children: ["\u0418\u0442\u043E\u0433\u043E \u0437\u0430 \u0442\u043E\u0432\u0430\u0440: ", totalPrice, " \u0440\u0443\u0431."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
            variant: "subtitle2",
            component: "p",
            children: ["\u0418\u0442\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430: ", _constants__WEBPACK_IMPORTED_MODULE_15__["SHIPPING_PRICES"][value], " \u0440\u0443\u0431."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
            variant: "subtitle2",
            component: "p",
            children: ["\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435: ", _constants__WEBPACK_IMPORTED_MODULE_15__["SHIPPING_PRICES"][value] + totalPrice, " \u0440\u0443\u0431."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CartTable, "SyXGF9FvpnoC2xiET2xNG84+gQ0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL0NhcnRUYWJsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiQ2FydFRhYmxlIiwiY2xhc3NlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJhZGRTaGlwcGluZ1ByaWNlIiwiU0hJUFBJTkdfUFJJQ0VTIiwiY2FydCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b3RhbFByaWNlIiwicmVkdWNlIiwiYWNjIiwic3VtIiwicHJpY2VPZkdvb2RzIiwiYW1vdW50T2ZHb29kcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImltYWdlVXJsIiwibmFtZU9mR29vZHMiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQURxQjtBQUkzQkMsT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRTtBQURIO0FBSm9CLENBQUQsQ0FBNUI7QUFTTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBR1AsU0FBUyxFQUF6QjtBQUNBLE1BQU1RLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjZCLGtCQUdIQyxzREFBUSxDQUFDLFNBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBSzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEwsWUFBUSxDQUFDTSx1RkFBZ0IsQ0FBQ0MsMkRBQWUsQ0FBQ0osS0FBRCxDQUFoQixDQUFqQixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTUssSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUF1QkEsS0FBSyxDQUFDRixJQUE3QjtBQUFBLEdBQUQsQ0FBWCxJQUFrRCxFQUEvRDtBQUVBLE1BQU1HLFVBQVUsR0FBR0gsSUFBSSxDQUFDSSxNQUFMLENBQVksVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2pELFdBQU9ELEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxZQUFKLEdBQW1CRCxHQUFHLENBQUNFLGFBQXBDO0FBQ0QsR0FGa0IsRUFFaEIsQ0FGZ0IsQ0FBbkI7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFnRDtBQUNuRWQsWUFBUSxDQUFFYyxLQUFLLENBQUNDLE1BQVAsQ0FBbUNoQixLQUFwQyxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0UscUVBQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUFBLG9CQUNHSyxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsZ0NBQ1IscUVBQUMsc0RBQUQ7QUFBcUIsa0JBQUksTUFBekI7QUFBMEIsZ0JBQUUsRUFBRSxFQUE5QjtBQUFrQyxnQkFBRSxFQUFFLENBQXRDO0FBQUEscUNBQ0UscUVBQUMsOERBQUQ7QUFBTSx5QkFBUyxFQUFFdEIsT0FBTyxDQUFDTCxJQUF6QjtBQUFBLHVDQUNFLHFFQUFDLHdFQUFEO0FBQUEsMENBQ0UscUVBQUMsbUVBQUQ7QUFDRSw2QkFBUyxFQUFDLEtBRFo7QUFFRSw2QkFBUyxFQUFFSyxPQUFPLENBQUNILEtBRnJCO0FBR0UseUJBQUssRUFBRXlCLElBQUksQ0FBQ0MsUUFBTCxDQUFjLENBQWQsQ0FIVDtBQUlFLHlCQUFLLEVBQUVELElBQUksQ0FBQ0U7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBT0UscUVBQUMscUVBQUQ7QUFBQSw0Q0FDRSxxRUFBQyxvRUFBRDtBQUFZLGtDQUFZLE1BQXhCO0FBQXlCLDZCQUFPLEVBQUMsSUFBakM7QUFBc0MsK0JBQVMsRUFBQyxJQUFoRDtBQUFBLGdDQUNHRixJQUFJLENBQUNFO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUlFLHFFQUFDLG9FQUFEO0FBQ0UsNkJBQU8sRUFBQyxPQURWO0FBRUUsMkJBQUssRUFBQyxlQUZSO0FBR0UsK0JBQVMsRUFBQyxHQUhaO0FBQUEsbUdBS2VGLElBQUksQ0FBQ0wsYUFMcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGLGVBV0UscUVBQUMsb0VBQUQ7QUFDRSw2QkFBTyxFQUFDLE9BRFY7QUFFRSwyQkFBSyxFQUFDLGVBRlI7QUFHRSwrQkFBUyxFQUFDLEdBSFo7QUFBQSx1SEFLb0JLLElBQUksQ0FBQ04sWUFMekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVhGLGVBa0JFLHFFQUFDLG9FQUFEO0FBQ0UsNkJBQU8sRUFBQyxPQURWO0FBRUUsMkJBQUssRUFBQyxlQUZSO0FBR0UsK0JBQVMsRUFBQyxHQUhaO0FBQUEsMkhBS21CLEdBTG5CLEVBTUdNLElBQUksQ0FBQ04sWUFBTCxHQUFvQk0sSUFBSSxDQUFDTCxhQU41QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBV0ssSUFBSSxDQUFDRyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUE0Q0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFBLGlDQUNFLHFFQUFDLHNFQUFEO0FBQWEscUJBQVMsRUFBQyxVQUF2QjtBQUFBLG9DQUNFLHFFQUFDLG9FQUFEO0FBQVcsdUJBQVMsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLHFFQUFEO0FBQ0UsNEJBQVcsVUFEYjtBQUVFLGtCQUFJLEVBQUMsVUFGUDtBQUdFLG1CQUFLLEVBQUVyQixLQUhUO0FBSUUsc0JBQVEsRUFBRWMsWUFKWjtBQUFBLHNDQU1FLHFFQUFDLDJFQUFEO0FBQ0UscUJBQUssRUFBQyxTQURSO0FBRUUsdUJBQU8sZUFBRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZYO0FBR0UscUJBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFXRSxxRUFBQywyRUFBRDtBQUNFLHFCQUFLLEVBQUMsTUFEUjtBQUVFLHVCQUFPLGVBQUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGWDtBQUdFLHFCQUFLLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGLGVBZ0JFLHFFQUFDLDJFQUFEO0FBQ0UscUJBQUssRUFBQyxjQURSO0FBRUUsdUJBQU8sZUFBRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZYO0FBR0UscUJBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVDRixlQXVFRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQUEsaUNBQ0UscUVBQUMsb0VBQUQ7QUFBWSxtQkFBTyxFQUFDLFdBQXBCO0FBQWdDLHFCQUFTLEVBQUMsR0FBMUM7QUFBQSx1R0FDbUJOLFVBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkVGLGVBNEVFLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBQSxpQ0FDRSxxRUFBQyxvRUFBRDtBQUFZLG1CQUFPLEVBQUMsV0FBcEI7QUFBZ0MscUJBQVMsRUFBQyxHQUExQztBQUFBLDRHQUNtQkosMkRBQWUsQ0FBQ0osS0FBRCxDQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVFRixlQWlGRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQUEsaUNBQ0UscUVBQUMsb0VBQUQ7QUFBWSxtQkFBTyxFQUFDLFdBQXBCO0FBQWdDLHFCQUFTLEVBQUMsR0FBMUM7QUFBQSx1R0FDbUJJLDJEQUFlLENBQUNKLEtBQUQsQ0FBZixHQUF5QlEsVUFENUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE4RkQsQ0FqSE07O0dBQU1iLFM7VUFDS04sUyxFQUNDUyx1RCxFQU9KUSx1RDs7O0tBVEZYLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9jYXJ0LmIzNDUzMTU3Y2RlNjc5NTM3ZjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmFkaW8gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsXCI7XHJcbmltcG9ydCB7IFNISVBQSU5HX1BSSUNFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgYWRkU2hpcHBpbmdQcmljZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3NoaXBwaW5nQWN0aW9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMzAwLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogMTAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJjb3VyaWVyXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkU2hpcHBpbmdQcmljZShTSElQUElOR19QUklDRVNbdmFsdWVdKSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElSb290U3RhdGUpID0+IHN0YXRlLmNhcnQpIHx8IFtdO1xyXG5cclxuICBjb25zdCB0b3RhbFByaWNlID0gY2FydC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3VtKSB7XHJcbiAgICByZXR1cm4gYWNjICsgc3VtLnByaWNlT2ZHb29kcyAqIHN1bS5hbW91bnRPZkdvb2RzO1xyXG4gIH0sIDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRWYWx1ZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj7QktCw0YjQuCDQv9C+0LrRg9C/0LrQuDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICB7Y2FydC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBrZXk9e2l0ZW0uX2lkfSBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KbQtdC90LAg0LfQsCDQtdC00LjQvdC40YbRgzoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7QsdGJ0LDRjyDRgdGC0L7QuNC80L7RgdGC0Yw6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZU9mR29vZHMgKiBpdGVtLmFtb3VudE9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+0KHQv9C+0YHQvtCxINC00L7RgdGC0LDQstC60Lg8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNoaXBwaW5nXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY291cmllclwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQmtGD0YDRjNC10YAgKNCz0L7RgC7QnNC+0YHQutCy0LAgNDAwINGA0YPQsS4pXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JfQsNC60LDQt9C90L7QtSDQv9C40YHRjNC80L4gMSDQutC70LDRgdGB0LAgKNCf0L7Rh9GC0LAg0KDQvtGB0YHQuNC4KSDQv9C+INCg0L7RgdGB0LjQuCAyMDAg0YDRg9CxLlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJtYWlsT3ZlcnNlYXNcIlxyXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0KDQtdCz0LjRgdGC0YDQuNGA0YPQtdC80L7QtSDQv9C40YHRjNC80L4g0J/QvtGH0YLQvtC5INCg0L7RgdGB0LjQuCDQt9CwINGA0YPQsdC10LYgNTAwINGA0YPQsS5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAg0JjRgtC+0LPQviDQt9CwINGC0L7QstCw0YA6IHt0b3RhbFByaWNlfSDRgNGD0LEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICDQmNGC0L7Qs9C+INC00L7RgdGC0LDQstC60LA6IHtTSElQUElOR19QUklDRVNbdmFsdWVdfSDRgNGD0LEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICDQmNGC0L7Qs9C+INC6INC+0L/Qu9Cw0YLQtToge1NISVBQSU5HX1BSSUNFU1t2YWx1ZV0gKyB0b3RhbFByaWNlfSDRgNGD0LEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==