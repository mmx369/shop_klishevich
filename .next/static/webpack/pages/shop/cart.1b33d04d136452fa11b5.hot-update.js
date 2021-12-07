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
        container: true,
        spacing: 3,
        children: cart.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
            item: true,
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
                  lineNumber: 59,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    gutterBottom: true,
                    variant: "h5",
                    component: "h4",
                    children: item.nameOfGoods
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p",
                    children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p",
                    children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p",
                    children: ["\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ", item.priceOfGoods * item.amountOfGoods, ' ', "\u0440\u0443\u0431."]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          component: "fieldset",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
            component: "legend",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
              variant: "h6",
              children: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
            "aria-label": "shipping",
            name: "shipping",
            value: value,
            onChange: handleChange,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
              value: "courier",
              control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 26
              }, _this),
              label: "\u041A\u0443\u0440\u044C\u0435\u0440 (\u0433\u043E\u0440.\u041C\u043E\u0441\u043A\u0432\u0430 400 \u0440\u0443\u0431.)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
              value: "mail",
              control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 26
              }, _this),
              label: "\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E 1 \u043A\u043B\u0430\u0441\u0441\u0430 (\u041F\u043E\u0447\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438) \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 200 \u0440\u0443\u0431."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
              value: "mailOverseas",
              control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 26
              }, _this),
              label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u041F\u043E\u0447\u0442\u043E\u0439 \u0420\u043E\u0441\u0441\u0438\u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436 500 \u0440\u0443\u0431."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "subtitle2",
          component: "p",
          children: ["\u0418\u0442\u043E\u0433\u043E \u0437\u0430 \u0442\u043E\u0432\u0430\u0440: ", totalPrice, " \u0440\u0443\u0431."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "subtitle2",
          component: "p",
          children: ["\u0418\u0442\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430: ", _constants__WEBPACK_IMPORTED_MODULE_15__["SHIPPING_PRICES"][value], " \u0440\u0443\u0431."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "subtitle2",
          component: "p",
          children: ["\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435: ", _constants__WEBPACK_IMPORTED_MODULE_15__["SHIPPING_PRICES"][value] + totalPrice, " \u0440\u0443\u0431."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL0NhcnRUYWJsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1lZGlhIiwiYmFja2dyb3VuZFNpemUiLCJDYXJ0VGFibGUiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUVmZmVjdCIsImFkZFNoaXBwaW5nUHJpY2UiLCJTSElQUElOR19QUklDRVMiLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRvdGFsUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJzdW0iLCJwcmljZU9mR29vZHMiLCJhbW91bnRPZkdvb2RzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwiaW1hZ2VVcmwiLCJuYW1lT2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxHQUROO0FBRUpDLGFBQVMsRUFBRTtBQUZQLEdBRHFCO0FBSzNCQyxPQUFLLEVBQUU7QUFDTEMsa0JBQWMsRUFBRTtBQURYO0FBTG9CLENBQUQsQ0FBNUI7QUFVTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUNBLE1BQU1TLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjZCLGtCQUdIQyxzREFBUSxDQUFDLFNBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhz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QUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQStCRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLFdBQXBCO0FBQWdDLG1CQUFTLEVBQUMsR0FBMUM7QUFBQSxxR0FDbUJOLFVBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQkYsZUFvQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQVksaUJBQU8sRUFBQyxXQUFwQjtBQUFnQyxtQkFBUyxFQUFDLEdBQTFDO0FBQUEsMEdBQ21CSiwyREFBZSxDQUFDSixLQUFELENBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQ0YsZUF5Q0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQVksaUJBQU8sRUFBQyxXQUFwQjtBQUFnQyxtQkFBUyxFQUFDLEdBQTFDO0FBQUEscUdBQ21CSSwyREFBZSxDQUFDSixLQUFELENBQWYsR0FBeUJRLFVBRDVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbERGO0FBQUEsa0JBREY7QUEwTUQsQ0E3Tk07O0dBQU1iLFM7VUFDS1AsUyxFQUNDVSx1RCxFQU9KUSx1RDs7O0tBVEZYLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9jYXJ0LjFiMzNkMDRkMTM2NDUyZmExMWI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nXHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnXHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCdcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnXHJcbmltcG9ydCB7IFNISVBQSU5HX1BSSUNFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgYWRkU2hpcHBpbmdQcmljZSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2hpcHBpbmdBY3Rpb24nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgbWF4SGVpZ2h0OiAzMDAsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCdjb3VyaWVyJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZFNoaXBwaW5nUHJpY2UoU0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXSkpXHJcbiAgfSwgW3ZhbHVlXSlcclxuXHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVJvb3RTdGF0ZSkgPT4gc3RhdGUuY2FydCkgfHwgW11cclxuXHJcbiAgY29uc3QgdG90YWxQcmljZSA9IGNhcnQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN1bSkge1xyXG4gICAgcmV0dXJuIGFjYyArIHN1bS5wcmljZU9mR29vZHMgKiBzdW0uYW1vdW50T2ZHb29kc1xyXG4gIH0sIDApXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFZhbHVlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+0JLQsNGI0Lgg0L/QvtC60YPQv9C60Lg8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgIHtjYXJ0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PSdoNScgY29tcG9uZW50PSdoNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINCm0LXQvdCwINC30LAg0LXQtNC40L3QuNGG0YM6IHtpdGVtLnByaWNlT2ZHb29kc30g0YDRg9CxLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQntCx0YnQsNGPINGB0YLQvtC40LzQvtGB0YLRjDoge2l0ZW0ucHJpY2VPZkdvb2RzICogaXRlbS5hbW91bnRPZkdvb2RzfXsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9J2ZpZWxkc2V0Jz5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPtCh0L/QvtGB0L7QsSDQtNC+0YHRgtCw0LLQutC4PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICBuYW1lPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0nY291cmllcidcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSfQmtGD0YDRjNC10YAgKNCz0L7RgC7QnNC+0YHQutCy0LAgNDAwINGA0YPQsS4pJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIHZhbHVlPSdtYWlsJ1xyXG4gICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J9CX0LDQutCw0LfQvdC+0LUg0L/QuNGB0YzQvNC+IDEg0LrQu9Cw0YHRgdCwICjQn9C+0YfRgtCwINCg0L7RgdGB0LjQuCkg0L/QviDQoNC+0YHRgdC40LggMjAwINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9J21haWxPdmVyc2VhcydcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSfQoNC10LPQuNGB0YLRgNC40YDRg9C10LzQvtC1INC/0LjRgdGM0LzQviDQn9C+0YfRgtC+0Lkg0KDQvtGB0YHQuNC4INC30LAg0YDRg9Cx0LXQtiA1MDAg0YDRg9CxLidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICDQmNGC0L7Qs9C+INC30LAg0YLQvtCy0LDRgDoge3RvdGFsUHJpY2V9INGA0YPQsS5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICDQmNGC0L7Qs9C+INC00L7RgdGC0LDQstC60LA6IHtTSElQUElOR19QUklDRVNbdmFsdWVdfSDRgNGD0LEuXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAg0JjRgtC+0LPQviDQuiDQvtC/0LvQsNGC0LU6IHtTSElQUElOR19QUklDRVNbdmFsdWVdICsgdG90YWxQcmljZX0g0YDRg9CxLlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGRpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0Jz7QktCw0YjQuCDQv9C+0LrRg9C/0LrQuDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezV9IG1kPXszfSBsZz17Mn0+XHJcbiAgICAgICAgICAgIHtjYXJ0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGtleT17aXRlbS5faWR9IGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KbQtdC90LAg0LfQsCDQtdC00LjQvdC40YbRgzoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7QsdGJ0LDRjyDRgdGC0L7QuNC80L7RgdGC0Yw6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2VPZkdvb2RzICogaXRlbS5hbW91bnRPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PSdmaWVsZHNldCc+XHJcbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+0KHQv9C+0YHQvtCxINC00L7RgdGC0LDQstC60Lg8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9J2NvdXJpZXInXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J9Ca0YPRgNGM0LXRgCAo0LPQvtGALtCc0L7RgdC60LLQsCA0MDAg0YDRg9CxLiknXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9J21haWwnXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J9CX0LDQutCw0LfQvdC+0LUg0L/QuNGB0YzQvNC+IDEg0LrQu9Cw0YHRgdCwICjQn9C+0YfRgtCwINCg0L7RgdGB0LjQuCkg0L/QviDQoNC+0YHRgdC40LggMjAwINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9J21haWxPdmVyc2VhcydcclxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0n0KDQtdCz0LjRgdGC0YDQuNGA0YPQtdC80L7QtSDQv9C40YHRjNC80L4g0J/QvtGH0YLQvtC5INCg0L7RgdGB0LjQuCDQt9CwINGA0YPQsdC10LYgNTAwINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICDQmNGC0L7Qs9C+INC30LAg0YLQvtCy0LDRgDoge3RvdGFsUHJpY2V9INGA0YPQsS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgICAg0JjRgtC+0LPQviDQtNC+0YHRgtCw0LLQutCwOiB7U0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXX0g0YDRg9CxLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICDQmNGC0L7Qs9C+INC6INC+0L/Qu9Cw0YLQtToge1NISVBQSU5HX1BSSUNFU1t2YWx1ZV0gKyB0b3RhbFByaWNlfSDRgNGD0LEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9