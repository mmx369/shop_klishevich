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
      lineNumber: 84,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: Object(_translate_country__WEBPACK_IMPORTED_MODULE_9__["translateCountry"])(item.country) + " " + item.nameOfGoods,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        className: classes.paper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: classes.btn,
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return router.back();
          },
          children: "\u043D\u0430\u0437\u0430\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
                  lineNumber: 110,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "h5",
                  children: item.nameOfGoods
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, this), item.catalogNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041D\u043E\u043C\u0435\u0440 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435: ", item.catalogNumber]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
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
                  lineNumber: 130,
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
                  lineNumber: 139,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "subtitle2",
                  children: "\u041D\u043E\u043C\u0435\u0440, \u0441\u0435\u0440\u0438\u044F \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0444\u043E\u0442\u043E. \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS8udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWciLCJ3aWR0aCIsInJvb3QiLCJpbnB1dCIsImJ0biIsIkl0ZW1zRGV0YWlscyIsIml0ZW0iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbW91bnRPZkdvb2RzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRGlzcGF0Y2giLCJpZCIsImFkZE5ld0l0ZW0iLCJ0cmFuc2xhdGVDb3VudHJ5IiwiY291bnRyeSIsIm5hbWVPZkdvb2RzIiwiYmFjayIsImltYWdlVXJsIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImNhdGFsb2dOdW1iZXIiLCJwcmljZU9mR29vZHMiLCJfaWQiLCJzdGVwIiwibWluIiwibWF4IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQWlCQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxZQUFNLEVBQUUsTUFGSDtBQUdMQyxxQkFBZSxFQUFFO0FBSFosS0FESTtBQU1YQyxPQUFHLEVBQUU7QUFDSEMsV0FBSyxF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d0JBbEJGLGVBcUJFLHFFQUFDLHdEQUFEO0FBQ0UseUJBQU8sRUFBQyxXQURWO0FBRUUsdUJBQUssRUFBQyxXQUZSO0FBR0UseUJBQU8sRUFBRSxtQkFBTTtBQUNiUSxrQ0FBYyxDQUFDaEIsSUFBSSxDQUFDNEIsR0FBTixDQUFkO0FBQ0QsbUJBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBckJGLGVBOEJFLHFFQUFDLHVEQUFEO0FBQ0UsMkJBQVMsRUFBRTNCLE9BQU8sQ0FBQ0osS0FEckI7QUFFRSx1QkFBSyxFQUFFWSxLQUZUO0FBR0UsMEJBQVEsRUFBRUUsaUJBSFo7QUFJRSx3QkFBTSxFQUFFSSxVQUpWO0FBS0UsNEJBQVUsRUFBRTtBQUNWYyx3QkFBSSxFQUFFLENBREk7QUFFVkMsdUJBQUcsRUFBRSxDQUZLO0FBR1ZDLHVCQUFHLFlBQUsvQixJQUFJLENBQUNRLGFBQVYsQ0FITztBQUlWd0Isd0JBQUksRUFBRSxRQUpJO0FBS1YsdUNBQW1CO0FBTFQ7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTlCRixlQTJDRSxxRUFBQyw0REFBRDtBQUFZLHlCQUFPLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkVEOztHQTFHdUJqQyxZO1VBQ05kLFMsRUFDQ2tCLHVELEVBQ0ZFLHFEOzs7S0FIT04sWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nb29kcy9bdHlwZV0vW2NvdW50cnldL1tpZF0uYmMxNGMwYWEzMDJhM2RlZGFkZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBHcmlkLFxyXG4gIElucHV0LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgUGFwZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IFNob3BHb29kcyBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL3Nob3BHb29kc1wiO1xyXG5pbXBvcnQgeyBhZGROZXdJdGVtIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHJhbnNsYXRlL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNvdW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHJhbnNsYXRlL2NvdW50cnlcIjtcclxuXHJcbmludGVyZmFjZSBJdGVtc0RldGFpbHNQcm9wcyB7XHJcbiAgaXRlbTogSXRlbU1vZGVsIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtTW9kZWwge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIGltYWdlVXJsOiBzdHJpbmdbXTtcclxuICBuYW1lT2ZHb29kczogc3RyaW5nO1xyXG4gIGFtb3VudE9mR29vZHM6IG51bWJlcjtcclxuICBwcmljZU9mR29vZHM6IG51bWJlcjtcclxuICBjYXRhbG9nTnVtYmVyOiBzdHJpbmc7XHJcbiAgY291bnRyeTogc3RyaW5nO1xyXG4gIGNhdGVnb3J5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y5ZmJlN1wiLFxyXG4gICAgfSxcclxuICAgIGltZzoge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogMjUwLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIHdpZHRoOiA0MixcclxuICAgICAgbWFyZ2luOiAxMCxcclxuICAgIH0sXHJcbiAgICBidG46IHtcclxuICAgICAgbWFyZ2luOiA1LFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNEZXRhaWxzKHsgaXRlbSB9OiBJdGVtc0RldGFpbHNQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihcclxuICAgIGl0ZW0uYW1vdW50T2ZHb29kcyA+IDAgPyAxIDogMFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VmFsdWUoTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgIHNldFZhbHVlKDApO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IGl0ZW0uYW1vdW50T2ZHb29kcykge1xyXG4gICAgICBzZXRWYWx1ZShpdGVtLmFtb3VudE9mR29vZHMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3BhdGNoID0gKGlkKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhZGROZXdJdGVtKGlkLCB2YWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIGlmIChpdGVtID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPGgxPtCY0LfQstC40L3QuNGC0LUg0YLQsNC60L7QuSDRgtC+0LLQsNGAINC90LUg0L3QsNC50LTQtdC9ITwvaDE+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9e3RyYW5zbGF0ZUNvdW50cnkoaXRlbS5jb3VudHJ5KSArIFwiIFwiICsgaXRlbS5uYW1lT2ZHb29kc30+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINC90LDQt9Cw0LRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiY29tcGxleFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2VVcmxbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs3fSBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNhdGVnb3J5KGl0ZW0uY2F0ZWdvcnkpfSB8XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNvdW50cnkoaXRlbS5jb3VudHJ5KX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGFsb2dOdW1iZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQndC+0LzQtdGAINCyINC60LDRgtCw0LvQvtCz0LU6IHtpdGVtLmNhdGFsb2dOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICDQptC10L3QsCDQt9CwINC10LTQuNC90LjRhtGDOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCa0L7Qu9C40YfQtdGB0YLQstC+OiB7aXRlbS5hbW91bnRPZkdvb2RzfSDRiNGCLlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGlzcGF0Y2goaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQtNC+0LHQsNCy0LjRgtGMINCyINC60L7RgNC30LjQvdGDXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1heDogYCR7aXRlbS5hbW91bnRPZkdvb2RzfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJpbnB1dC1zbGlkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0J3QvtC80LXRgCwg0YHQtdGA0LjRjyDQuCDQv9C+0LTQv9C40YHRjCDQvNC+0LPRg9GCINC+0YLQu9C40YfQsNGC0YzRgdGPINC+0YIg0L/RgNC10LTRgdGC0LDQstC70LXQvdC90YvRhSDQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAg0YTQvtGC0L4uINCt0YLQsCDQuNC90YTQvtGA0LzQsNGG0LjRjyDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YDQtdC00L7RgdGC0LDQstC70LXQvdCwINC/0L4g0LfQsNC/0YDQvtGB0YMuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCBpZCA9IGN0eC5wYXJhbXMuaWQ7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFNob3BHb29kcy5maW5kQnlJZChpZCkuZXhlYygpO1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGl0ZW0gPSBkYXRhLl9kb2M7XHJcblxyXG4gIGNvbnN0IHNlcmlhbGl6ZWRJdGVtID0ge1xyXG4gICAgLi4uaXRlbSxcclxuICAgIF9pZDogaXRlbS5faWQudG9TdHJpbmcoKSxcclxuICAgIGRhdGU6IGl0ZW0uZGF0ZS50b1N0cmluZygpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGl0ZW06IHNlcmlhbGl6ZWRJdGVtIHx8IG51bGwgfSB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9