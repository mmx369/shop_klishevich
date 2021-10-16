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
      margin: 'auto',
      backgroundColor: 'red'
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
      lineNumber: 79,
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
              lineNumber: 88,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
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
                  lineNumber: 97,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "h5",
                  children: item.nameOfGoods
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, this), item.catalogNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041D\u043E\u043C\u0435\u0440 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435: ", item.catalogNumber]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443: ", item.priceOfGoods, " \u0440\u0443\u0431."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
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
                  lineNumber: 117,
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
                  lineNumber: 126,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "subtitle2",
                  children: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0435\u0440\u0438\u044F \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0444\u043E\u0442\u043E. \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS8udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWciLCJ3aWR0aCIsInJvb3QiLCJpbnB1dCIsIkl0ZW1zRGV0YWlscyIsIml0ZW0iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbW91bnRPZkdvb2RzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRGlzcGF0Y2giLCJpZCIsImFkZE5ld0l0ZW0iLCJjb3VudHJ5IiwibmFtZU9mR29vZHMiLCJpbWFnZVVybCIsInRyYW5zbGF0ZUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJ0cmFuc2xhdGVDb3VudHJ5IiwiY2F0YWxvZ051bWJlciIsInByaWNlT2ZHb29kcyIsIl9pZCIsInN0ZXAiLCJtaW4iLCJtYXgiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFpQkEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTEMscUJBQWUsRUFBQztBQUhYLEtBREk7QUFNWEMsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQURKLEtBTk07QUFTWEMsUUFBSSxFQUFFO0FBQ0pELFdBQUssRUFBRTtBQURILEtBVEs7QUFZWEUsU0FBSyxFQUFFO0FBQ0xGLFdBQUssRUFBRSxFQURGO0FBRUxILFlBQU0sRUFBRTtBQUZIO0FBWkksR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQW9CZSxTQUFTTSxZQUFULE9BQW1EO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUNoRSxNQUFNQyxPQUFPLEdBQUdmLFNBQVMsRUFBekI7QUFDQSxNQUFNZ0IsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGZ0Usd0JBSXRDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQ3hCTCxJQUFJLENBQUNNLGFBQUwsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBekIsR0FBNkIsQ0FETCxDQUpzQztBQUFBO0FBQUEsTUFJekRDLEtBSnlEO0FBQUEsTUFJbERDLFFBSmtEOztBQVFoRSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBZ0Q7QUFDeEVGLFlBQVEsQ0FBQ0csTUFBTSxDQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUwsS0FBZCxDQUFQLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSU4sS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiQyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0QsS0FGRCxNQUVPLElBQUlELEtBQUssR0FBR1AsSUFBSSxDQUFDTSxhQUFqQixFQUFnQztBQUNyQ0UsY0FBUSxDQUFDUixJQUFJLENBQUNNLGFBQU4sQ0FBUjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEVBQUQsRUFBUTtBQUM3QmIsWUFBUSxDQUFDYyw2RUFBVSxDQUFDRCxFQUFELEVBQUtSLEtBQUwsQ0FBWCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFJUCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQywwREFBRDtBQUFRLFdBQUssRUFBRUEsSUFBSSxDQUFDaUIsT0FBTCxHQUFlLEdBQWYsR0FBcUJqQixJQUFJLENBQUNrQixXQUF6QztBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQU8saUJBQVMsRUFBRWpCLE9BQU8sQ0FBQ1gsS0FBMUI7QUFBQSwrQkFDRSxxRUFBQyxzREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsaUJBQU8sRUFBRSxDQUF6QjtBQUFBLGtDQUNFLHFFQUFDLHNEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGNBQUUsRUFBRSxFQUFmO0FBQW1CLGNBQUUsRUFBRSxDQUF2QjtBQUEwQixjQUFFLEVBQUUsQ0FBOUI7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQUVXLE9BQU8sQ0FBQ04sR0FEckI7QUFFRSxpQkFBRyxFQUFDLFNBRk47QUFHRSxpQkFBRyxFQUFFSyxJQUFJLENBQUNtQixRQUFMLENBQWMsQ0FBZDtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBUUUscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBbUIsY0FBRSxFQUFFLENBQXZCO0FBQTBCLGNBQUUsRUFBRSxDQUE5QjtBQUFpQyxxQkFBUyxNQUExQztBQUFBLG1DQUNFLHFFQUFDLHNEQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLE1BQWI7QUFBYyx1QkFBUyxNQUF2QjtBQUF3Qix1QkFBUyxFQUFDLFFBQWxDO0FBQTJDLHFCQUFPLEVBQUUsQ0FBcEQ7QUFBQSxxQ0FDRSxxRUFBQyxzREFBRDtBQUFNLG9CQUFJLE1BQVY7QUFBVyxrQkFBRSxNQUFiO0FBQUEsd0NBQ0UscUVBQUMsNERBQUQ7QUFBWSw4QkFBWSxNQUF4QjtBQUF5Qix5QkFBTyxFQUFDLElBQWpDO0FBQUEsNkJBQ0dDLDZFQUFpQixDQUFDcEIsSUFBSSxDQUFDcUIsUUFBTixDQURwQixRQUVHQywyRUFBZ0IsQ0FBQ3RCLElBQUksQ0FBQ2lCLE9BQU4sQ0FGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBS0UscUVBQUMsNERBQUQ7QUFBWSw4QkFBWSxNQUF4QjtBQUF5Qix5QkFBTyxFQUFDLElBQWpDO0FBQUEsNEJBQ0dqQixJQUFJLENBQUNrQjtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEYsRUFTR2xCLElBQUksQ0FBQ3VCLGFBQUwsaUJBQ0MscUVBQUMsNERBQUQ7QUFBWSw4QkFBWSxNQUF4QjtBQUF5Qix5QkFBTyxFQUFDLFdBQWpDO0FBQUEseUhBQ3FCdkIsSUFBSSxDQUFDdUIsYUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZKLGVBZUUscUVBQUMsNERBQUQ7QUFBWSw4QkFBWSxNQUF4QjtBQUF5Qix5QkFBTyxFQUFDLFdBQWpDO0FBQUEsbUhBQ29CdkIsSUFBSSxDQUFDd0IsWUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWZGLGVBa0JFLHFFQUFDLDREQUFEO0FBQVksOEJBQVksTUFBeEI7QUFBeUIseUJBQU8sRUFBQyxXQUFqQztBQUFBLCtGQUNleEIsSUFBSSxDQUFDTSxhQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBbEJGLGVBcUJFLHFFQUFDLHdEQUFEO0FBQ0UseUJBQU8sRUFBQyxXQURWO0FBRUUsdUJBQUssRUFBQyxXQUZSO0FBR0UseUJBQU8sRUFBRSxtQkFBTTtBQUNiUSxrQ0FBYyxDQUFDZCxJQUFJLENBQUN5QixHQUFOLENBQWQ7QUFDRCxtQkFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQkYsZUE4QkUscUVBQUMsdURBQUQ7QUFDRSwyQkFBUyxFQUFFeEIsT0FBTyxDQUFDSCxLQURyQjtBQUVFLHVCQUFLLEVBQUVTLEtBRlQ7QUFHRSwwQkFBUSxFQUFFRSxpQkFIWjtBQUlFLHdCQUFNLEVBQUVJLFVBSlY7QUFLRSw0QkFBVSxFQUFFO0FBQ1ZhLHdCQUFJLEVBQUUsQ0FESTtBQUVWQyx1QkFBRyxFQUFFLENBRks7QUFHVkMsdUJBQUcsWUFBSzVCLElBQUksQ0FBQ00sYUFBVixDQUhPO0FBSVZ1Qix3QkFBSSxFQUFFLFFBSkk7QUFLVix1Q0FBbUI7QUFMVDtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBOUJGLGVBMkNFLHFFQUFDLDREQUFEO0FBQVkseUJBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrRUQ7O0dBOUZ1QjlCLFk7VUFDTmIsUyxFQUNDaUIsdUQ7OztLQUZLSixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dvb2RzL1t0eXBlXS9bY291bnRyeV0vW2lkXS5iNDk4ZmRiZGRjN2UxMjRmZDg4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIEdyaWQsXHJcbiAgSW5wdXQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBTaG9wR29vZHMgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3Nob3BHb29kcydcclxuaW1wb3J0IHsgYWRkTmV3SXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMnXHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdHJhbnNsYXRlL2NhdGVnb3J5J1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdHJhbnNsYXRlL2NvdW50cnknXHJcblxyXG5pbnRlcmZhY2UgSXRlbXNEZXRhaWxzUHJvcHMge1xyXG4gIGl0ZW06IEl0ZW1Nb2RlbCB8IG51bGwgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtTW9kZWwge1xyXG4gIF9pZDogc3RyaW5nXHJcbiAgaW1hZ2VVcmw6IHN0cmluZ1tdXHJcbiAgbmFtZU9mR29vZHM6IHN0cmluZ1xyXG4gIGFtb3VudE9mR29vZHM6IG51bWJlclxyXG4gIHByaWNlT2ZHb29kczogbnVtYmVyXHJcbiAgY2F0YWxvZ051bWJlcjogc3RyaW5nXHJcbiAgY291bnRyeTogc3RyaW5nXHJcbiAgY2F0ZWdvcnk6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcGFwZXI6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjoncmVkJ1xyXG4gICAgfSxcclxuICAgIGltZzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICB3aWR0aDogNDIsXHJcbiAgICAgIG1hcmdpbjogMTAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1zRGV0YWlscyh7IGl0ZW0gfTogSXRlbXNEZXRhaWxzUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KFxyXG4gICAgaXRlbS5hbW91bnRPZkdvb2RzID4gMCA/IDEgOiAwXHJcbiAgKVxyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFZhbHVlKE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcclxuICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgc2V0VmFsdWUoMClcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBpdGVtLmFtb3VudE9mR29vZHMpIHtcclxuICAgICAgc2V0VmFsdWUoaXRlbS5hbW91bnRPZkdvb2RzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGlzcGF0Y2ggPSAoaWQpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZE5ld0l0ZW0oaWQsIHZhbHVlKSlcclxuICB9XHJcblxyXG4gIGlmIChpdGVtID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPGgxPtCY0LfQstC40L3QuNGC0LUg0YLQsNC60L7QuSDRgtC+0LLQsNGAINC90LUg0L3QsNC50LTQtdC9ITwvaDE+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExheW91dCB0aXRsZT17aXRlbS5jb3VudHJ5ICsgJyAnICsgaXRlbS5uYW1lT2ZHb29kc30+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJjb21wbGV4XCJcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZVVybFswXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezd9IGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlQ2F0ZWdvcnkoaXRlbS5jYXRlZ29yeSl9IHxcclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlQ291bnRyeShpdGVtLmNvdW50cnkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lT2ZHb29kc31cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0YWxvZ051bWJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgINCd0L7QvNC10YAg0LIg0LrQsNGC0LDQu9C+0LPQtToge2l0ZW0uY2F0YWxvZ051bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCm0LXQvdCwINC30LAg0LXQtNC40L3QuNGG0YM6IHtpdGVtLnByaWNlT2ZHb29kc30g0YDRg9CxLlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L46IHtpdGVtLmFtb3VudE9mR29vZHN9INGI0YIuXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEaXNwYXRjaChpdGVtLl9pZClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0LTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IGAke2l0ZW0uYW1vdW50T2ZHb29kc31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2lucHV0LXNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz7QndC+0LzQtdGAINGB0LXRgNC40Y8g0Lgg0L/QvtC00L/QuNGB0Ywg0LzQvtCz0YPRgiDQvtGC0LvQuNGH0LDRgtGM0YHRjyDQvtGCINC/0YDQtdC00YHRgtCw0LLQu9C10L3QvdGL0YUg0L3QsCDRhNC+0YLQvi4g0K3RgtCwINC40L3RhNC+0YDQvNCw0YbQuNGPINC80L7QttC10YIg0LHRi9GC0Ywg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LAg0L/QviDQt9Cw0L/RgNC+0YHRgy48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCBpZCA9IGN0eC5wYXJhbXMuaWRcclxuICBjb25zdCBkYXRhID0gYXdhaXQgU2hvcEdvb2RzLmZpbmRCeUlkKGlkKS5leGVjKClcclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBpdGVtID0gZGF0YS5fZG9jXHJcblxyXG4gIGNvbnN0IHNlcmlhbGl6ZWRJdGVtID0ge1xyXG4gICAgLi4uaXRlbSxcclxuICAgIF9pZDogaXRlbS5faWQudG9TdHJpbmcoKSxcclxuICAgIGRhdGU6IGl0ZW0uZGF0ZS50b1N0cmluZygpLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgaXRlbTogc2VyaWFsaXplZEl0ZW0gfHwgbnVsbCB9IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9