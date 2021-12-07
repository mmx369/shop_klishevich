webpackHotUpdate_N_E("pages/shop/goods/[type]/[country]/[id]",{

/***/ "./pages/shop/goods/[type]/[country]/[id].tsx":
/*!****************************************************!*\
  !*** ./pages/shop/goods/[type]/[country]/[id].tsx ***!
  \****************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemsDetails; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/layout/layout */ "./components/layout/layout.tsx");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../lib/translate */ "./lib/translate.ts");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\shop\\goods\\[type]\\[country]\\[id].tsx",
    _s = $RefreshSig$();









var __N_SSP = true;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      backgroundColor: 'white',
      maxWidth: '600px'
    },
    img: {
      width: '100%'
    },
    root: {
      width: 250
    },
    input: {
      width: 42,
      margin: 10
    },
    btn: {
      margin: 5
    }
  });
});
function ItemsDetails(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(item.amountOfGoods > 0 ? 1 : 0),
      value = _useState[0],
      setValue = _useState[1];

  var handleInputChange = function handleInputChange(event) {
    setValue(Number(event.target.value));
  };

  var handleBlur = function handleBlur() {
    if (value < 0) {
      setValue(0);
    } else if (value > item.amountOfGoods) {
      setValue(item.amountOfGoods);
    }
  };

  var handleDispatch = function handleDispatch(id) {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["addNewItem"])(id, value));
  };

  if (item === null) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435 \u0442\u0430\u043A\u043E\u0439 \u0442\u043E\u0432\u0430\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: Object(_lib_translate__WEBPACK_IMPORTED_MODULE_7__["translateCountry"])(item.country) + ' ' + item.nameOfGoods,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        className: classes.paper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: classes.btn,
          variant: "contained",
          color: "primary",
          onClick: function onClick() {
            return router.back();
          },
          children: "\u043D\u0430\u0437\u0430\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            item: true,
            xs: 12,
            sm: 6,
            md: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
              src: item.imageUrl[0],
              alt: "".concat(item.country, " | ").concat(item.nameOfGoods),
              width: 300,
              height: 300
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            item: true,
            xs: 12,
            sm: 6,
            md: 7,
            container: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
              item: true,
              xs: true,
              container: true,
              direction: "column",
              spacing: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
                item: true,
                xs: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "h6",
                  children: [Object(_lib_translate__WEBPACK_IMPORTED_MODULE_7__["translateCategory"])(item.category), " |", Object(_lib_translate__WEBPACK_IMPORTED_MODULE_7__["translateCountry"])(item.country)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "h5",
                  children: item.nameOfGoods
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, this), item.catalogNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041D\u043E\u043C\u0435\u0440 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435: ", item.catalogNumber]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  variant: "contained",
                  color: "primary",
                  onClick: function onClick() {
                    handleDispatch(item._id);
                  },
                  children: "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
                  className: classes.input,
                  value: value,
                  onChange: handleInputChange,
                  onBlur: handleBlur,
                  inputProps: {
                    step: 1,
                    min: 0,
                    max: "".concat(item.amountOfGoods),
                    type: 'number',
                    'aria-labelledby': 'input-slider'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "subtitle2",
                  children: "\u041D\u043E\u043C\u0435\u0440, \u0441\u0435\u0440\u0438\u044F \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0444\u043E\u0442\u043E. \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

_s(ItemsDetails, "SI4jIWralJJC1fteSIRUZEGeMBo=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = ItemsDetails;

var _c;

$RefreshReg$(_c, "ItemsDetails");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldLy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsIm1heFdpZHRoIiwiaW1nIiwid2lkdGgiLCJyb290IiwiaW5wdXQiLCJidG4iLCJJdGVtc0RldGFpbHMiLCJpdGVtIiwiY2xhc3NlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImFtb3VudE9mR29vZHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIk51bWJlciIsInRhcmdldCIsImhhbmRsZUJsdXIiLCJoYW5kbGVEaXNwYXRjaCIsImlkIiwiYWRkTmV3SXRlbSIsInRyYW5zbGF0ZUNvdW50cnkiLCJjb3VudHJ5IiwibmFtZU9mR29vZHMiLCJiYWNrIiwiaW1hZ2VVcmwiLCJ0cmFuc2xhdGVDYXRlZ29yeSIsImNhdGVnb3J5IiwiY2F0YWxvZ051bWJlciIsInByaWNlT2ZHb29kcyIsIl9pZCIsInN0ZXAiLCJtaW4iLCJtYXgiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7QUFpQkEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTEMscUJBQWUsRUFBRSxPQUhaO0FBSUxDLGNBQVEsRUFBRTtBQUpMLEtBREk7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c2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0uM2RkZjYwMzVlMWQ5NTBlZDE1NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBHcmlkLFxyXG4gIElucHV0LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgUGFwZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0J1xyXG5pbXBvcnQgU2hvcEdvb2RzIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscy9zaG9wR29vZHMnXHJcbmltcG9ydCB7IGFkZE5ld0l0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zJ1xyXG5pbXBvcnQge1xyXG4gIHRyYW5zbGF0ZUNhdGVnb3J5LFxyXG4gIHRyYW5zbGF0ZUNvdW50cnksXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3RyYW5zbGF0ZSdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbnRlcmZhY2UgSXRlbXNEZXRhaWxzUHJvcHMge1xyXG4gIGl0ZW06IEl0ZW1Nb2RlbCB8IG51bGwgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtTW9kZWwge1xyXG4gIF9pZDogc3RyaW5nXHJcbiAgaW1hZ2VVcmw6IHN0cmluZ1tdXHJcbiAgbmFtZU9mR29vZHM6IHN0cmluZ1xyXG4gIGFtb3VudE9mR29vZHM6IG51bWJlclxyXG4gIHByaWNlT2ZHb29kczogbnVtYmVyXHJcbiAgY2F0YWxvZ051bWJlcjogc3RyaW5nXHJcbiAgY291bnRyeTogc3RyaW5nXHJcbiAgY2F0ZWdvcnk6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcGFwZXI6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgbWF4V2lkdGg6ICc2MDBweCcsXHJcbiAgICB9LFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogMjUwLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIHdpZHRoOiA0MixcclxuICAgICAgbWFyZ2luOiAxMCxcclxuICAgIH0sXHJcbiAgICBidG46IHtcclxuICAgICAgbWFyZ2luOiA1LFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtc0RldGFpbHMoeyBpdGVtIH06IEl0ZW1zRGV0YWlsc1Byb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KGl0ZW0uYW1vdW50T2ZHb29kcyA+IDAgPyAxIDogMClcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRWYWx1ZShOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgIHNldFZhbHVlKDApXHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gaXRlbS5hbW91bnRPZkdvb2RzKSB7XHJcbiAgICAgIHNldFZhbHVlKGl0ZW0uYW1vdW50T2ZHb29kcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3BhdGNoID0gKGlkKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhZGROZXdJdGVtKGlkLCB2YWx1ZSkpXHJcbiAgfVxyXG5cclxuICBpZiAoaXRlbSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIDxoMT7QmNC30LLQuNC90LjRgtC1INGC0LDQutC+0Lkg0YLQvtCy0LDRgCDQvdC1INC90LDQudC00LXQvSE8L2gxPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9e3RyYW5zbGF0ZUNvdW50cnkoaXRlbS5jb3VudHJ5KSArICcgJyArIGl0ZW0ubmFtZU9mR29vZHN9PlxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDQvdCw0LfQsNC0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NX0+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2VVcmxbMF19XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2l0ZW0uY291bnRyeX0gfCAke2l0ZW0ubmFtZU9mR29vZHN9YH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezd9IGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD0naDYnPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVDYXRlZ29yeShpdGVtLmNhdGVnb3J5KX0gfFxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVDb3VudHJ5KGl0ZW0uY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J2g1Jz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0YWxvZ051bWJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J3N1YnRpdGxlMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQndC+0LzQtdGAINCyINC60LDRgtCw0LvQvtCz0LU6IHtpdGVtLmNhdGFsb2dOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J3N1YnRpdGxlMSc+XHJcbiAgICAgICAgICAgICAgICAgICAg0KbQtdC90LAg0LfQsCDQtdC00LjQvdC40YbRgzoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9J3N1YnRpdGxlMSc+XHJcbiAgICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEaXNwYXRjaChpdGVtLl9pZClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0LTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IGAke2l0ZW0uYW1vdW50T2ZHb29kc31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2lucHV0LXNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5cclxuICAgICAgICAgICAgICAgICAgICDQndC+0LzQtdGALCDRgdC10YDQuNGPINC4INC/0L7QtNC/0LjRgdGMINC80L7Qs9GD0YIg0L7RgtC70LjRh9Cw0YLRjNGB0Y8g0L7RgiDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90L3Ri9GFINC90LBcclxuICAgICAgICAgICAgICAgICAgICDRhNC+0YLQvi4g0K3RgtCwINC40L3RhNC+0YDQvNCw0YbQuNGPINC80L7QttC10YIg0LHRi9GC0Ywg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LAg0L/QviDQt9Cw0L/RgNC+0YHRgy5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBjdHgucGFyYW1zLmlkXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFNob3BHb29kcy5maW5kQnlJZChpZCkuZXhlYygpXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgaXRlbSA9IGRhdGEuX2RvY1xyXG5cclxuICBjb25zdCBzZXJpYWxpemVkSXRlbSA9IHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICBfaWQ6IGl0ZW0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICBkYXRlOiBpdGVtLmRhdGUudG9TdHJpbmcoKSxcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGl0ZW06IHNlcmlhbGl6ZWRJdGVtIHx8IG51bGwgfSB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==