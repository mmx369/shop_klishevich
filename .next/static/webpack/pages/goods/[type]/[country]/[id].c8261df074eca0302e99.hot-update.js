webpackHotUpdate_N_E("pages/goods/[type]/[country]/[id]",{

/***/ "./pages/goods/[type]/[country]/[id].tsx":
/*!***********************************************!*\
  !*** ./pages/goods/[type]/[country]/[id].tsx ***!
  \***********************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemsDetails; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/layout */ "./components/layout.tsx");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _translate_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../translate/category */ "./translate/category.ts");
/* harmony import */ var _translate_country__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../translate/country */ "./translate/country.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\goods\\[type]\\[country]\\[id].tsx",
    _s = $RefreshSig$();









var __N_SSP = true;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      backgroundColor: "#f9fbe7"
    },
    img: {
      width: "100%"
    },
    root: {
      width: 250
    },
    input: {
      width: 42,
      margin: 10
    }
  });
});
function ItemsDetails(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(item.amountOfGoods > 0 ? 1 : 0),
      _React$useState2 = Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

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
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addNewItem"])(id, value));
  };

  if (item === null) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435 \u0442\u0430\u043A\u043E\u0439 \u0442\u043E\u0432\u0430\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: item.country + " " + item.nameOfGoods,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        className: classes.paper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "contained",
          color: "secondary",
          onClick: (function () {
            return router.back();
          }, {
            shallow: true
          }),
          children: "\u043D\u0430\u0437\u0430\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            item: true,
            xs: 12,
            sm: 6,
            md: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: classes.img,
              alt: "complex",
              src: item.imageUrl[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
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
                  children: [Object(_translate_category__WEBPACK_IMPORTED_MODULE_8__["translateCategory"])(item.category), " |", Object(_translate_country__WEBPACK_IMPORTED_MODULE_9__["translateCountry"])(item.country)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "h5",
                  children: item.nameOfGoods
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this), item.catalogNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041D\u043E\u043C\u0435\u0440 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435: ", item.catalogNumber]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  variant: "contained",
                  color: "secondary",
                  onClick: function onClick() {
                    handleDispatch(item._id);
                  },
                  children: "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
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
                    type: "number",
                    "aria-labelledby": "input-slider"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "subtitle2",
                  children: "\u041D\u043E\u043C\u0435\u0440, \u0441\u0435\u0440\u0438\u044F \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0444\u043E\u0442\u043E. \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

_s(ItemsDetails, "SI4jIWralJJC1fteSIRUZEGeMBo=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS8udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWciLCJ3aWR0aCIsInJvb3QiLCJpbnB1dCIsIkl0ZW1zRGV0YWlscyIsIml0ZW0iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbW91bnRPZkdvb2RzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRGlzcGF0Y2giLCJpZCIsImFkZE5ld0l0ZW0iLCJjb3VudHJ5IiwibmFtZU9mR29vZHMiLCJiYWNrIiwic2hhbGxvdyIsImltYWdlVXJsIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsInRyYW5zbGF0ZUNvdW50cnkiLCJjYXRhbG9nTnVtYmVyIiwicHJpY2VPZkdvb2RzIiwiX2lkIiwic3RlcCIsIm1pbiIsIm1heCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFpQkEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTEMscUJBQWUsRUFBRTtBQUhaLEtBREk7QUFNWEMsT0FBRyxFQUFFO0FBQ0hDLFdB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RlI7QUFHRSx5QkFBTyxFQUFFLG1CQUFNO0FBQ2JRLGtDQUFjLENBQUNoQixJQUFJLENBQUM2QixHQUFOLENBQWQ7QUFDRCxtQkFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQkYsZUE4QkUscUVBQUMsdURBQUQ7QUFDRSwyQkFBUyxFQUFFNUIsT0FBTyxDQUFDSCxLQURyQjtBQUVFLHVCQUFLLEVBQUVXLEtBRlQ7QUFHRSwwQkFBUSxFQUFFRSxpQkFIWjtBQUlFLHdCQUFNLEVBQUVJLFVBSlY7QUFLRSw0QkFBVSxFQUFFO0FBQ1ZlLHdCQUFJLEVBQUUsQ0FESTtBQUVWQyx1QkFBRyxFQUFFLENBRks7QUFHVkMsdUJBQUcsWUFBS2hDLElBQUksQ0FBQ1EsYUFBVixDQUhPO0FBSVZ5Qix3QkFBSSxFQUFFLFFBSkk7QUFLVix1Q0FBbUI7QUFMVDtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBOUJGLGVBMkNFLHFFQUFDLDREQUFEO0FBQVkseUJBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0RUQ7O0dBekd1QmxDLFk7VUFDTmIsUyxFQUNDaUIsdUQsRUFDRkUscUQ7OztLQUhPTixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dvb2RzL1t0eXBlXS9bY291bnRyeV0vW2lkXS5jODI2MWRmMDc0ZWNhMDMwMmU5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIEdyaWQsXHJcbiAgSW5wdXQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgU2hvcEdvb2RzIGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvc2hvcEdvb2RzXCI7XHJcbmltcG9ydCB7IGFkZE5ld0l0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi8uLi8uLi90cmFuc2xhdGUvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ291bnRyeSB9IGZyb20gXCIuLi8uLi8uLi8uLi90cmFuc2xhdGUvY291bnRyeVwiO1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1zRGV0YWlsc1Byb3BzIHtcclxuICBpdGVtOiBJdGVtTW9kZWwgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1Nb2RlbCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgaW1hZ2VVcmw6IHN0cmluZ1tdO1xyXG4gIG5hbWVPZkdvb2RzOiBzdHJpbmc7XHJcbiAgYW1vdW50T2ZHb29kczogbnVtYmVyO1xyXG4gIHByaWNlT2ZHb29kczogbnVtYmVyO1xyXG4gIGNhdGFsb2dOdW1iZXI6IHN0cmluZztcclxuICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjlmYmU3XCIsXHJcbiAgICB9LFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiAyNTAsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgd2lkdGg6IDQyLFxyXG4gICAgICBtYXJnaW46IDEwLFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNEZXRhaWxzKHsgaXRlbSB9OiBJdGVtc0RldGFpbHNQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihcclxuICAgIGl0ZW0uYW1vdW50T2ZHb29kcyA+IDAgPyAxIDogMFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VmFsdWUoTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgIHNldFZhbHVlKDApO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IGl0ZW0uYW1vdW50T2ZHb29kcykge1xyXG4gICAgICBzZXRWYWx1ZShpdGVtLmFtb3VudE9mR29vZHMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3BhdGNoID0gKGlkKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhZGROZXdJdGVtKGlkLCB2YWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIGlmIChpdGVtID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPGgxPtCY0LfQstC40L3QuNGC0LUg0YLQsNC60L7QuSDRgtC+0LLQsNGAINC90LUg0L3QsNC50LTQtdC9ITwvaDE+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9e2l0ZW0uY291bnRyeSArIFwiIFwiICsgaXRlbS5uYW1lT2ZHb29kc30+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygoKSA9PiByb3V0ZXIuYmFjaygpLCB7IHNoYWxsb3c6IHRydWUgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINC90LDQt9Cw0LRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiY29tcGxleFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2VVcmxbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs3fSBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNhdGVnb3J5KGl0ZW0uY2F0ZWdvcnkpfSB8XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNvdW50cnkoaXRlbS5jb3VudHJ5KX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGFsb2dOdW1iZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQndC+0LzQtdGAINCyINC60LDRgtCw0LvQvtCz0LU6IHtpdGVtLmNhdGFsb2dOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICDQptC10L3QsCDQt9CwINC10LTQuNC90LjRhtGDOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCa0L7Qu9C40YfQtdGB0YLQstC+OiB7aXRlbS5hbW91bnRPZkdvb2RzfSDRiNGCLlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGlzcGF0Y2goaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQtNC+0LHQsNCy0LjRgtGMINCyINC60L7RgNC30LjQvdGDXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1heDogYCR7aXRlbS5hbW91bnRPZkdvb2RzfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJpbnB1dC1zbGlkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0J3QvtC80LXRgCwg0YHQtdGA0LjRjyDQuCDQv9C+0LTQv9C40YHRjCDQvNC+0LPRg9GCINC+0YLQu9C40YfQsNGC0YzRgdGPINC+0YIg0L/RgNC10LTRgdGC0LDQstC70LXQvdC90YvRhSDQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAg0YTQvtGC0L4uINCt0YLQsCDQuNC90YTQvtGA0LzQsNGG0LjRjyDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YDQtdC00L7RgdGC0LDQstC70LXQvdCwINC/0L4g0LfQsNC/0YDQvtGB0YMuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCBpZCA9IGN0eC5wYXJhbXMuaWQ7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFNob3BHb29kcy5maW5kQnlJZChpZCkuZXhlYygpO1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGl0ZW0gPSBkYXRhLl9kb2M7XHJcblxyXG4gIGNvbnN0IHNlcmlhbGl6ZWRJdGVtID0ge1xyXG4gICAgLi4uaXRlbSxcclxuICAgIF9pZDogaXRlbS5faWQudG9TdHJpbmcoKSxcclxuICAgIGRhdGU6IGl0ZW0uZGF0ZS50b1N0cmluZygpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGl0ZW06IHNlcmlhbGl6ZWRJdGVtIHx8IG51bGwgfSB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9