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
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/layout/layout */ "./components/layout/layout.tsx");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../lib/translate */ "./lib/translate.ts");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\shop\\goods\\[type]\\[country]\\[id].tsx",
    _s = $RefreshSig$();









var __N_SSP = true;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      backgroundColor: "#f9fbe7",
      maxWidth: "600px"
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
      lineNumber: 88,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: Object(_lib_translate__WEBPACK_IMPORTED_MODULE_8__["translateCountry"])(item.country) + " " + item.nameOfGoods,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        className: classes.paper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: classes.btn,
          variant: "outlined",
          color: "secondary",
          onClick: function onClick() {
            return router.back();
          },
          children: "\u043D\u0430\u0437\u0430\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            item: true,
            xs: 12,
            sm: 6,
            md: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
              src: item.imageUrl[0],
              alt: "".concat(item.country, " | ").concat(item.nameOfGoods),
              width: 300,
              height: 300
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
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
                  children: [Object(_lib_translate__WEBPACK_IMPORTED_MODULE_8__["translateCategory"])(item.category), " |", Object(_lib_translate__WEBPACK_IMPORTED_MODULE_8__["translateCountry"])(item.country)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "h5",
                  children: item.nameOfGoods
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, this), item.catalogNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041D\u043E\u043C\u0435\u0440 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435: ", item.catalogNumber]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
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
                  lineNumber: 135,
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
                  lineNumber: 144,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "subtitle2",
                  children: "\u041D\u043E\u043C\u0435\u0440, \u0441\u0435\u0440\u0438\u044F \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0444\u043E\u0442\u043E. \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9nb29kcy9bdHlwZV0vW2NvdW50cnldLy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsIm1heFdpZHRoIiwiaW1nIiwid2lkdGgiLCJyb290IiwiaW5wdXQiLCJidG4iLCJJdGVtc0RldGFpbHMiLCJpdGVtIiwiY2xhc3NlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiYW1vdW50T2ZHb29kcyIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwiTnVtYmVyIiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsImhhbmRsZURpc3BhdGNoIiwiaWQiLCJhZGROZXdJdGVtIiwidHJhbnNsYXRlQ291bnRyeSIsImNvdW50cnkiLCJuYW1lT2ZHb29kcyIsImJhY2siLCJpbWFnZVVybCIsInRyYW5zbGF0ZUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJjYXRhbG9nTnVtYmVyIiwicHJpY2VPZkdvb2RzIiwiX2lkIiwic3RlcCIsIm1pbiIsIm1heCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7O0FBaUJBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLHNFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLFlBQU0sRUFBRSxNQUZIO0FBR0xDLHFCQUFlLEVBQUUsU0FIWjtBQUlMQyxjQUFRLEVBQUU7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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS9baWRdLjdiNDlmMmE0ZTliOGZlNGM3MzY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBjcmVhdGVTdHlsZXMsXHJcbiAgR3JpZCxcclxuICBJbnB1dCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dFwiO1xyXG5pbXBvcnQgU2hvcEdvb2RzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9tb2RlbHMvc2hvcEdvb2RzXCI7XHJcbmltcG9ydCB7IGFkZE5ld0l0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIHRyYW5zbGF0ZUNhdGVnb3J5LFxyXG4gIHRyYW5zbGF0ZUNvdW50cnksXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2xpYi90cmFuc2xhdGVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgSXRlbXNEZXRhaWxzUHJvcHMge1xyXG4gIGl0ZW06IEl0ZW1Nb2RlbCB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbU1vZGVsIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBpbWFnZVVybDogc3RyaW5nW107XHJcbiAgbmFtZU9mR29vZHM6IHN0cmluZztcclxuICBhbW91bnRPZkdvb2RzOiBudW1iZXI7XHJcbiAgcHJpY2VPZkdvb2RzOiBudW1iZXI7XHJcbiAgY2F0YWxvZ051bWJlcjogc3RyaW5nO1xyXG4gIGNvdW50cnk6IHN0cmluZztcclxuICBjYXRlZ29yeTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcGFwZXI6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOWZiZTdcIixcclxuICAgICAgbWF4V2lkdGg6IFwiNjAwcHhcIixcclxuICAgIH0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICB3aWR0aDogNDIsXHJcbiAgICAgIG1hcmdpbjogMTAsXHJcbiAgICB9LFxyXG4gICAgYnRuOiB7XHJcbiAgICAgIG1hcmdpbjogNSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1zRGV0YWlscyh7IGl0ZW0gfTogSXRlbXNEZXRhaWxzUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oXHJcbiAgICBpdGVtLmFtb3VudE9mR29vZHMgPiAwID8gMSA6IDBcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFZhbHVlKE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICBzZXRWYWx1ZSgwKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBpdGVtLmFtb3VudE9mR29vZHMpIHtcclxuICAgICAgc2V0VmFsdWUoaXRlbS5hbW91bnRPZkdvb2RzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEaXNwYXRjaCA9IChpZCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkTmV3SXRlbShpZCwgdmFsdWUpKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXRlbSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIDxoMT7QmNC30LLQuNC90LjRgtC1INGC0LDQutC+0Lkg0YLQvtCy0LDRgCDQvdC1INC90LDQudC00LXQvSE8L2gxPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGF5b3V0IHRpdGxlPXt0cmFuc2xhdGVDb3VudHJ5KGl0ZW0uY291bnRyeSkgKyBcIiBcIiArIGl0ZW0ubmFtZU9mR29vZHN9PlxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINC90LDQt9Cw0LRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICAgIGFsdD17YCR7aXRlbS5jb3VudHJ5fSB8ICR7aXRlbS5uYW1lT2ZHb29kc31gfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17N30gY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVDYXRlZ29yeShpdGVtLmNhdGVnb3J5KX0gfFxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVDb3VudHJ5KGl0ZW0uY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWVPZkdvb2RzfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5jYXRhbG9nTnVtYmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0J3QvtC80LXRgCDQsiDQutCw0YLQsNC70L7Qs9C1OiB7aXRlbS5jYXRhbG9nTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0KbQtdC90LAg0LfQsCDQtdC00LjQvdC40YbRgzoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICDQmtC+0LvQuNGH0LXRgdGC0LLQvjoge2l0ZW0uYW1vdW50T2ZHb29kc30g0YjRgi5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURpc3BhdGNoKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0LTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IGAke2l0ZW0uYW1vdW50T2ZHb29kc31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiaW5wdXQtc2xpZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCd0L7QvNC10YAsINGB0LXRgNC40Y8g0Lgg0L/QvtC00L/QuNGB0Ywg0LzQvtCz0YPRgiDQvtGC0LvQuNGH0LDRgtGM0YHRjyDQvtGCINC/0YDQtdC00YHRgtCw0LLQu9C10L3QvdGL0YUg0L3QsFxyXG4gICAgICAgICAgICAgICAgICAgINGE0L7RgtC+LiDQrdGC0LAg0LjQvdGE0L7RgNC80LDRhtC40Y8g0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QsCDQv9C+INC30LDQv9GA0L7RgdGDLlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBjdHgucGFyYW1zLmlkO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBTaG9wR29vZHMuZmluZEJ5SWQoaWQpLmV4ZWMoKTtcclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBpdGVtID0gZGF0YS5fZG9jO1xyXG5cclxuICBjb25zdCBzZXJpYWxpemVkSXRlbSA9IHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICBfaWQ6IGl0ZW0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICBkYXRlOiBpdGVtLmRhdGUudG9TdHJpbmcoKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBpdGVtOiBzZXJpYWxpemVkSXRlbSB8fCBudWxsIH0gfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==