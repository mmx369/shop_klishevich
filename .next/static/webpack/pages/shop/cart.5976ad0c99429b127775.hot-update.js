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
    height: 420
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h6",
        children: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          component: "fieldset",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
            component: "legend"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
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
                lineNumber: 112,
                columnNumber: 26
              }, _this),
              label: "\u041A\u0443\u0440\u044C\u0435\u0440 (\u0433\u043E\u0440.\u041C\u043E\u0441\u043A\u0432\u0430 400 \u0440\u0443\u0431.)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
              value: "mail",
              control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 26
              }, _this),
              label: "\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E 1 \u043A\u043B\u0430\u0441\u0441\u0430 (\u041F\u043E\u0447\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438) \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 200 \u0440\u0443\u0431."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
              value: "mailOverseas",
              control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 26
              }, _this),
              label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u041F\u043E\u0447\u0442\u043E\u0439 \u0420\u043E\u0441\u0441\u0438\u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436 500 \u0440\u0443\u0431."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
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
          lineNumber: 130,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
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
          lineNumber: 135,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
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
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG9wL0NhcnRUYWJsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1lZGlhIiwiYmFja2dyb3VuZFNpemUiLCJDYXJ0VGFibGUiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUVmZmVjdCIsImFkZFNoaXBwaW5nUHJpY2UiLCJTSElQUElOR19QUklDRVMiLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRvdGFsUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJzdW0iLCJwcmljZU9mR29vZHMiLCJhbW91bnRPZkdvb2RzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwiaW1hZ2VVcmwiLCJuYW1lT2ZHb29kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxHQUROO0FBRUpDLFVBQU0sRUFBRTtBQUZKLEdBRHFCO0FBSzNCQyxPQUFLLEVBQUU7QUFDTEMsa0JBQWMsRUFBRTtBQURYO0FBTG9CLENBQUQsQ0FBNUI7QUFVTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUNBLE1BQU1TLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjZCLGtCQUdIQyxzREFBUSxDQUFDLFNBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtB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QUE7QUFBQSxlQUZGLGVBOEJFLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBQSwrQkFDRSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFPLEVBQUMsV0FBcEI7QUFBZ0MsbUJBQVMsRUFBQyxHQUExQztBQUFBLHFHQUNtQk4sVUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlCRixlQW1DRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLFdBQXBCO0FBQWdDLG1CQUFTLEVBQUMsR0FBMUM7QUFBQSwwR0FDbUJKLDJEQUFlLENBQUNKLEtBQUQsQ0FEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DRixlQXdDRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLFdBQXBCO0FBQWdDLG1CQUFTLEVBQUMsR0FBMUM7QUFBQSxxR0FDbUJJLDJEQUFlLENBQUNKLEtBQUQsQ0FBZixHQUF5QlEsVUFENUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsREY7QUFBQSxrQkFERjtBQW1HRCxDQXRITTs7R0FBTWIsUztVQUNLUCxTLEVBQ0NVLHVELEVBT0pRLHVEOzs7S0FURlgsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL2NhcnQuNTk3NmFkMGM5OTQyOWIxMjc3NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IElSb290U3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2VycydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJ1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbydcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCdcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJ1xyXG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCdcclxuaW1wb3J0IHsgU0hJUFBJTkdfUFJJQ0VTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBhZGRTaGlwcGluZ1ByaWNlIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9zaGlwcGluZ0FjdGlvbidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiAyMDAsXHJcbiAgICBoZWlnaHQ6IDQyMCxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJ2NvdXJpZXInKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkU2hpcHBpbmdQcmljZShTSElQUElOR19QUklDRVNbdmFsdWVdKSlcclxuICB9LCBbdmFsdWVdKVxyXG5cclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJUm9vdFN0YXRlKSA9PiBzdGF0ZS5jYXJ0KSB8fCBbXVxyXG5cclxuICBjb25zdCB0b3RhbFByaWNlID0gY2FydC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3VtKSB7XHJcbiAgICByZXR1cm4gYWNjICsgc3VtLnByaWNlT2ZHb29kcyAqIHN1bS5hbW91bnRPZkdvb2RzXHJcbiAgfSwgMClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VmFsdWUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz7QktCw0YjQuCDQv9C+0LrRg9C/0LrQuDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAge2NhcnQubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlVXJsWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQmtC+0LvQuNGH0LXRgdGC0LLQvjoge2l0ZW0uYW1vdW50T2ZHb29kc30g0YjRgi5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RleHRTZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J3AnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0KbQtdC90LAg0LfQsCDQtdC00LjQvdC40YbRgzoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdib2R5MidcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINCe0LHRidCw0Y8g0YHRgtC+0LjQvNC+0YHRgtGMOiB7aXRlbS5wcmljZU9mR29vZHMgKiBpdGVtLmFtb3VudE9mR29vZHN9eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgINGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPtCh0L/QvtGB0L7QsSDQtNC+0YHRgtCw0LLQutC4PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9J2ZpZWxkc2V0Jz5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+PC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgbmFtZT0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9J2NvdXJpZXInXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0n0JrRg9GA0YzQtdGAICjQs9C+0YAu0JzQvtGB0LrQstCwIDQwMCDRgNGD0LEuKSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0nbWFpbCdcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSfQl9Cw0LrQsNC30L3QvtC1INC/0LjRgdGM0LzQviAxINC60LvQsNGB0YHQsCAo0J/QvtGH0YLQsCDQoNC+0YHRgdC40LgpINC/0L4g0KDQvtGB0YHQuNC4IDIwMCDRgNGD0LEuJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIHZhbHVlPSdtYWlsT3ZlcnNlYXMnXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0n0KDQtdCz0LjRgdGC0YDQuNGA0YPQtdC80L7QtSDQv9C40YHRjNC80L4g0J/QvtGH0YLQvtC5INCg0L7RgdGB0LjQuCDQt9CwINGA0YPQsdC10LYgNTAwINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAg0JjRgtC+0LPQviDQt9CwINGC0L7QstCw0YA6IHt0b3RhbFByaWNlfSDRgNGD0LEuXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAg0JjRgtC+0LPQviDQtNC+0YHRgtCw0LLQutCwOiB7U0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXX0g0YDRg9CxLlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgINCY0YLQvtCz0L4g0Log0L7Qv9C70LDRgtC1OiB7U0hJUFBJTkdfUFJJQ0VTW3ZhbHVlXSArIHRvdGFsUHJpY2V9INGA0YPQsS5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=