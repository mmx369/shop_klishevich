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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/layout */ "./components/layout.tsx");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _translate_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../translate/category */ "./translate/category.ts");
/* harmony import */ var _translate_country__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../translate/country */ "./translate/country.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\goods\\[type]\\[country]\\[id].tsx",
    _s = $RefreshSig$();








var __N_SSP = true;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto'
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
    }
  });
});
function ItemsDetails(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(item.amountOfGoods > 0 ? 1 : 0),
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
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["addNewItem"])(id, value));
  };

  if (item === null) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435 \u0442\u0430\u043A\u043E\u0439 \u0442\u043E\u0432\u0430\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: item.country + ' ' + item.nameOfGoods,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        className: classes.paper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
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
                  children: [Object(_translate_category__WEBPACK_IMPORTED_MODULE_7__["translateCategory"])(item.category), " |", Object(_translate_country__WEBPACK_IMPORTED_MODULE_8__["translateCountry"])(item.country)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "h5",
                  children: item.nameOfGoods
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, this), item.catalogNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041D\u043E\u043C\u0435\u0440 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435: ", item.catalogNumber]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
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
                  lineNumber: 116,
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
                  lineNumber: 125,
                  columnNumber: 19
                }, this), "jdsjfdsjdsjlkjksdj"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

_s(ItemsDetails, "vz307phyPQMLtN52keEXNxmMdtM=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS8udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW4iLCJpbWciLCJ3aWR0aCIsInJvb3QiLCJpbnB1dCIsIkl0ZW1zRGV0YWlscyIsIml0ZW0iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbW91bnRPZkdvb2RzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRGlzcGF0Y2giLCJpZCIsImFkZE5ld0l0ZW0iLCJjb3VudHJ5IiwibmFtZU9mR29vZHMiLCJpbWFnZVVybCIsInRyYW5zbGF0ZUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJ0cmFuc2xhdGVDb3VudHJ5IiwiY2F0YWxvZ051bWJlciIsInByaWNlT2ZHb29kcyIsIl9pZCIsInN0ZXAiLCJtaW4iLCJtYXgiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFpQkEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsWUFBTSxFQUFFO0FBRkgsS0FESTtBQUtYQyxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBREosS0FMTTtBQVFYQyxRQUFJLEVBQUU7QUFDSkQsV0FBSyxFQUFFO0FBREgsS0FSSztBQVdYRSxTQUFLLEVBQUU7QUFDTEYsV0FB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QixJQUFJLENBQUNNLGFBQVYsQ0FITztBQUlWdUIsd0JBQUksRUFBRSxRQUpJO0FBS1YsdUNBQW1CO0FBTFQ7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtFRDs7R0E5RnVCOUIsWTtVQUNOWixTLEVBQ0NnQix1RDs7O0tBRktKLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS9baWRdLmFiMjNjZjZmNjU3NzdhMGFhZDA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBjcmVhdGVTdHlsZXMsXHJcbiAgR3JpZCxcclxuICBJbnB1dCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IFNob3BHb29kcyBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2hvcEdvb2RzJ1xyXG5pbXBvcnQgeyBhZGROZXdJdGVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucydcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi90cmFuc2xhdGUvY2F0ZWdvcnknXHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNvdW50cnkgfSBmcm9tICcuLi8uLi8uLi8uLi90cmFuc2xhdGUvY291bnRyeSdcclxuXHJcbmludGVyZmFjZSBJdGVtc0RldGFpbHNQcm9wcyB7XHJcbiAgaXRlbTogSXRlbU1vZGVsIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1Nb2RlbCB7XHJcbiAgX2lkOiBzdHJpbmdcclxuICBpbWFnZVVybDogc3RyaW5nW11cclxuICBuYW1lT2ZHb29kczogc3RyaW5nXHJcbiAgYW1vdW50T2ZHb29kczogbnVtYmVyXHJcbiAgcHJpY2VPZkdvb2RzOiBudW1iZXJcclxuICBjYXRhbG9nTnVtYmVyOiBzdHJpbmdcclxuICBjb3VudHJ5OiBzdHJpbmdcclxuICBjYXRlZ29yeTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIH0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiAyNTAsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgd2lkdGg6IDQyLFxyXG4gICAgICBtYXJnaW46IDEwLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtc0RldGFpbHMoeyBpdGVtIH06IEl0ZW1zRGV0YWlsc1Byb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihcclxuICAgIGl0ZW0uYW1vdW50T2ZHb29kcyA+IDAgPyAxIDogMFxyXG4gIClcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRWYWx1ZShOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgIHNldFZhbHVlKDApXHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gaXRlbS5hbW91bnRPZkdvb2RzKSB7XHJcbiAgICAgIHNldFZhbHVlKGl0ZW0uYW1vdW50T2ZHb29kcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3BhdGNoID0gKGlkKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhZGROZXdJdGVtKGlkLCB2YWx1ZSkpXHJcbiAgfVxyXG5cclxuICBpZiAoaXRlbSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIDxoMT7QmNC30LLQuNC90LjRgtC1INGC0LDQutC+0Lkg0YLQvtCy0LDRgCDQvdC1INC90LDQudC00LXQvSE8L2gxPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9e2l0ZW0uY291bnRyeSArICcgJyArIGl0ZW0ubmFtZU9mR29vZHN9PlxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiY29tcGxleFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2VVcmxbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs3fSBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNhdGVnb3J5KGl0ZW0uY2F0ZWdvcnkpfSB8XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNvdW50cnkoaXRlbS5jb3VudHJ5KX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGFsb2dOdW1iZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQndC+0LzQtdGAINCyINC60LDRgtCw0LvQvtCz0LU6IHtpdGVtLmNhdGFsb2dOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICDQptC10L3QsCDQt9CwINC10LTQuNC90LjRhtGDOiB7aXRlbS5wcmljZU9mR29vZHN9INGA0YPQsS5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCa0L7Qu9C40YfQtdGB0YLQstC+OiB7aXRlbS5hbW91bnRPZkdvb2RzfSDRiNGCLlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGlzcGF0Y2goaXRlbS5faWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINC00L7QsdCw0LLQuNGC0Ywg0LIg0LrQvtGA0LfQuNC90YNcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4OiBgJHtpdGVtLmFtb3VudE9mR29vZHN9YCxcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdpbnB1dC1zbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIGpkc2pmZHNqZHNqbGtqa3NkalxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBjdHgucGFyYW1zLmlkXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFNob3BHb29kcy5maW5kQnlJZChpZCkuZXhlYygpXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgaXRlbSA9IGRhdGEuX2RvY1xyXG5cclxuICBjb25zdCBzZXJpYWxpemVkSXRlbSA9IHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICBfaWQ6IGl0ZW0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICBkYXRlOiBpdGVtLmRhdGUudG9TdHJpbmcoKSxcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGl0ZW06IHNlcmlhbGl6ZWRJdGVtIHx8IG51bGwgfSB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==