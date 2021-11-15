webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Search.tsx":
false,

/***/ "./components/homepage/Search.tsx":
/*!****************************************!*\
  !*** ./components/homepage/Search.tsx ***!
  \****************************************/
/*! exports provided: default, CountrySelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrySelect", function() { return CountrySelect; });
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _database_getAsString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../database/getAsString */ "./database/getAsString.ts");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/translate */ "./lib/translate.ts");





var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\homepage\\Search.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
    paper: {
      margin: "auto",
      maxWidth: 500,
      padding: theme.spacing(3),
      backgroundColor: "#f9fbe7"
    }
  });
});
var prices = [0, 10, 100, 500, 1000, 5000, 10000];
function Search(_ref) {
  _s();

  var _this = this;

  var types = _ref.types,
      countries = _ref.countries,
      singleColumn = _ref.singleColumn;
  var classes = useStyles();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])(),
      query = _useRouter.query;

  var smValue = singleColumn ? 12 : 6;
  var initialValues = {
    type: Object(_database_getAsString__WEBPACK_IMPORTED_MODULE_8__["getAsString"])(query.type) || "all",
    country: Object(_database_getAsString__WEBPACK_IMPORTED_MODULE_8__["getAsString"])(query.country) || "all",
    minPrice: Object(_database_getAsString__WEBPACK_IMPORTED_MODULE_8__["getAsString"])(query.minPrice) || "all",
    maxPrice: Object(_database_getAsString__WEBPACK_IMPORTED_MODULE_8__["getAsString"])(query.maxPrice) || "all"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    onSubmit: function onSubmit(values) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
        pathname: "/shop",
        query: _objectSpread(_objectSpread({}, values), {}, {
          page: 1
        })
      }, undefined, {
        shallow: true
      });
    },
    children: function children(_ref2) {
      var values = _ref2.values;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
          elevation: 5,
          className: classes.paper,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
                fullWidth: true,
                variant: "outlined",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
                  id: "search-type",
                  children: "\u0422\u0438\u043F \u0442\u043E\u0432\u0430\u0440\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                  name: "type",
                  as: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"],
                  labelId: "search-type",
                  label: "Type",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                    value: "all",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("em", {
                      children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, _this), types.map(function (type) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                      value: type.type,
                      children: "".concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_10__["translateCategory"])(type.type), " (").concat(type.count, ")")
                    }, type.type, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 23
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CountrySelect, {
                type: values.type,
                name: "country",
                countries: countries
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
                fullWidth: true,
                variant: "outlined",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
                  id: "search-min-price",
                  children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                  name: "minPrice",
                  as: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"],
                  labelId: "search-min-price",
                  label: "Min price",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                    value: "all",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("em", {
                      children: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, _this), prices.map(function (price) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                      value: price,
                      children: price
                    }, price, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 23
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
                fullWidth: true,
                variant: "outlined",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
                  id: "search-max-price",
                  children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                  name: "maxPrice",
                  as: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"],
                  labelId: "search-max-price",
                  label: "Max price",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                    value: "all",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("em", {
                      children: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, _this), prices.map(function (price) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                      value: price,
                      children: price
                    }, price, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 23
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                fullWidth: true,
                type: "submit",
                variant: "contained",
                color: "primary",
                children: "\u0418\u0441\u043A\u0430\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(Search, "OVsb4vT0iVZEdpywfyGK0XAdHyA=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = Search;
function CountrySelect(_ref3) {
  _s2();

  var _this2 = this;

  var countries = _ref3.countries,
      type = _ref3.type,
      props = Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["countries", "type"]);

  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useFormikContext"])(),
      setFieldValue = _useFormikContext.setFieldValue;

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useField"])({
    name: props.name
  }),
      _useField2 = Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useField, 1),
      field = _useField2[0];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("/api/getcountry?type=" + type, {
    // dedupingInterval: 60000,
    onSuccess: function onSuccess(newValues) {
      if (!newValues.map(function (a) {
        return a.country;
      }).includes(field.value)) {
        setFieldValue("country", "all");
      }
    }
  }),
      data = _useSWR.data;

  var newCountries = data || countries;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    fullWidth: true,
    variant: "outlined",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
      id: "search-country",
      children: "\u0421\u0442\u0440\u0430\u043D\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], _objectSpread(_objectSpread(_objectSpread({
      name: "country",
      labelId: "search-country",
      label: "Country"
    }, field), props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
        value: "all",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("em", {
          children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this), newCountries.map(function (country) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
          value: country.country,
          children: "".concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_10__["translateCountry"])(country.country), " (").concat(country.count, ")")
        }, country.country, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, _this2);
      })]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 5
  }, this);
}

_s2(CountrySelect, "P5j/V/KiaOMZeo1xKPbv7Z/gciw=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_5__["useFormikContext"], formik__WEBPACK_IMPORTED_MODULE_5__["useField"], swr__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c2 = CountrySelect;

var _c, _c2;

$RefreshReg$(_c, "Search");
$RefreshReg$(_c2, "CountrySelect");

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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Homepage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.tsx");
/* harmony import */ var _components_homepage_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homepage/Search */ "./components/homepage/Search.tsx");
/* harmony import */ var _components_homepage_Catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/homepage/Catalog */ "./components/homepage/Catalog.tsx");
/* harmony import */ var _components_homepage_MainTextBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/homepage/MainTextBlock */ "./components/homepage/MainTextBlock.tsx");

var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\index.tsx";





var __N_SSP = true;
function Homepage(_ref) {
  var types = _ref.types,
      countries = _ref.countries,
      listOfCountries = _ref.listOfCountries,
      listOfCountriesCoins = _ref.listOfCountriesCoins;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 | \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 3,
      item: true,
      xs: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_homepage_MainTextBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        sm: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_homepage_Catalog__WEBPACK_IMPORTED_MODULE_4__["default"], {
          listOfCountries: listOfCountries,
          listOfCountriesCoins: listOfCountriesCoins
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        sm: 9,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_homepage_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
          types: types,
          countries: countries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
_c = Homepage;

var _c;

$RefreshReg$(_c, "Homepage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lcGFnZS9TZWFyY2gudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicGFwZXIiLCJtYXJnaW4iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJpY2VzIiwiU2VhcmNoIiwidHlwZXMiLCJjb3VudHJpZXMiLCJzaW5nbGVDb2x1bW4iLCJjbGFzc2VzIiwidXNlUm91dGVyIiwicXVlcnkiLCJzbVZhbHVlIiwiaW5pdGlhbFZhbHVlcyIsInR5cGUiLCJnZXRBc1N0cmluZyIsImNvdW50cnkiLCJtaW5QcmljZSIsIm1heFByaWNlIiwidmFsdWVzIiwicm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicGFnZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJTZWxlY3QiLCJtYXAiLCJ0cmFuc2xhdGVDYXRlZ29yeSIsImNvdW50IiwicHJpY2UiLCJDb3VudHJ5U2VsZWN0IiwicHJvcHMiLCJ1c2VGb3JtaWtDb250ZXh0Iiwic2V0RmllbGRWYWx1ZSIsInVzZUZpZWxkIiwibmFtZSIsImZpZWxkIiwidXNlU1dSIiwib25TdWNjZXNzIiwibmV3VmFsdWVzIiwiYSIsImluY2x1ZGVzIiwidmFsdWUiLCJkYXRhIiwibmV3Q291bnRyaWVzIiwidHJhbnNsYXRlQ291bnRyeSIsIkhvbWVwYWdlIiwibGlzdE9mQ291bnRyaWVzIiwibGlzdE9mQ291bnRyaWVzQ29pbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VB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QTtBQUFBLFVBREY7QUFrQkQ7S0F4QnVCd0MsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZmNhYjIyODUyZjNjNzFkODgxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIFBhcGVyLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTWVudUl0ZW0sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgU2VsZWN0LFxyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBtYWtlU3R5bGVzLFxyXG4gIEJ1dHRvbixcclxuICBTZWxlY3RQcm9wcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgdXNlRmllbGQsIHVzZUZvcm1pa0NvbnRleHQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHlwZSB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9nZXRUeXBlXCI7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvZ2V0Q291bnRyeVwiO1xyXG5pbXBvcnQgeyBnZXRBc1N0cmluZyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9nZXRBc1N0cmluZ1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGliL3RyYW5zbGF0ZVwiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDb3VudHJ5IH0gZnJvbSBcIi4uLy4uL2xpYi90cmFuc2xhdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUHJvcHMge1xyXG4gIHR5cGVzOiBUeXBlW107XHJcbiAgY291bnRyaWVzOiBDb3VudHJ5W107XHJcbiAgc2luZ2xlQ29sdW1uPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjlmYmU3XCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBwcmljZXMgPSBbMCwgMTAsIDEwMCwgNTAwLCAxMDAwLCA1MDAwLCAxMDAwMF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goe1xyXG4gIHR5cGVzLFxyXG4gIGNvdW50cmllcyxcclxuICBzaW5nbGVDb2x1bW4sXHJcbn06IFNlYXJjaFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNtVmFsdWUgPSBzaW5nbGVDb2x1bW4gPyAxMiA6IDY7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICB0eXBlOiBnZXRBc1N0cmluZyhxdWVyeS50eXBlKSB8fCBcImFsbFwiLFxyXG4gICAgY291bnRyeTogZ2V0QXNTdHJpbmcocXVlcnkuY291bnRyeSkgfHwgXCJhbGxcIixcclxuICAgIG1pblByaWNlOiBnZXRBc1N0cmluZyhxdWVyeS5taW5QcmljZSkgfHwgXCJhbGxcIixcclxuICAgIG1heFByaWNlOiBnZXRBc1N0cmluZyhxdWVyeS5tYXhQcmljZSkgfHwgXCJhbGxcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogXCIvc2hvcFwiLFxyXG4gICAgICAgICAgICBxdWVyeTogeyAuLi52YWx1ZXMsIHBhZ2U6IDEgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyB2YWx1ZXMgfSkgPT4gKFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17c21WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInNlYXJjaC10eXBlXCI+0KLQuNC/INGC0L7QstCw0YDQsDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlYXJjaC10eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZW0+0J/QvtC60LDQt9Cw0YLRjCDQstGB0LU8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlcy5tYXAoKHR5cGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3R5cGUudHlwZX0gdmFsdWU9e3R5cGUudHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0cmFuc2xhdGVDYXRlZ29yeSh0eXBlLnR5cGUpfSAoJHt0eXBlLmNvdW50fSlgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209e3NtVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgPENvdW50cnlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgdHlwZT17dmFsdWVzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgY291bnRyaWVzPXtjb3VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXtzbVZhbHVlfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VhcmNoLW1pbi1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCc0LjQvdC40LzQsNC70YzQvdCw0Y8g0YbQtdC90LBcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWluUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlYXJjaC1taW4tcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWluIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGVtPtCd0LUg0LLRi9Cx0YDQsNC90L48L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge3ByaWNlcy5tYXAoKHByaWNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtwcmljZX0gdmFsdWU9e3ByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209e3NtVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJzZWFyY2gtbWF4LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0JzQsNC60YHQuNC80LDQu9GM0L3QsNGPINGG0LXQvdCwXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1heFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17U2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJzZWFyY2gtbWF4LXByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1heCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJhbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxlbT7QndC1INCy0YvQsdGA0LDQvdC+PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmljZXMubWFwKChwcmljZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17cHJpY2V9IHZhbHVlPXtwcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDQmNGB0LrQsNGC0YxcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvdW50cnlTZWxlY3RQcm9wcyBleHRlbmRzIFNlbGVjdFByb3BzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY291bnRyaWVzOiBDb3VudHJ5W107XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRyeVNlbGVjdCh7XHJcbiAgY291bnRyaWVzLFxyXG4gIHR5cGUsXHJcbiAgLi4ucHJvcHNcclxufTogQ291bnRyeVNlbGVjdFByb3BzKSB7XHJcbiAgY29uc3QgeyBzZXRGaWVsZFZhbHVlIH0gPSB1c2VGb3JtaWtDb250ZXh0KCk7XHJcbiAgY29uc3QgW2ZpZWxkXSA9IHVzZUZpZWxkKHtcclxuICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSPENvdW50cnlbXT4oXCIvYXBpL2dldGNvdW50cnk/dHlwZT1cIiArIHR5cGUsIHtcclxuICAgIC8vIGRlZHVwaW5nSW50ZXJ2YWw6IDYwMDAwLFxyXG4gICAgb25TdWNjZXNzOiAobmV3VmFsdWVzKSA9PiB7XHJcbiAgICAgIGlmICghbmV3VmFsdWVzLm1hcCgoYSkgPT4gYS5jb3VudHJ5KS5pbmNsdWRlcyhmaWVsZC52YWx1ZSkpIHtcclxuICAgICAgICBzZXRGaWVsZFZhbHVlKFwiY291bnRyeVwiLCBcImFsbFwiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmV3Q291bnRyaWVzID0gZGF0YSB8fCBjb3VudHJpZXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICA8SW5wdXRMYWJlbCBpZD1cInNlYXJjaC1jb3VudHJ5XCI+0KHRgtGA0LDQvdCwPC9JbnB1dExhYmVsPlxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgbmFtZT1cImNvdW50cnlcIlxyXG4gICAgICAgIGxhYmVsSWQ9XCJzZWFyY2gtY291bnRyeVwiXHJcbiAgICAgICAgbGFiZWw9XCJDb3VudHJ5XCJcclxuICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiYWxsXCI+XHJcbiAgICAgICAgICA8ZW0+0J/QvtC60LDQt9Cw0YLRjCDQstGB0LU8L2VtPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAge25ld0NvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IChcclxuICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NvdW50cnkuY291bnRyeX0gdmFsdWU9e2NvdW50cnkuY291bnRyeX0+XHJcbiAgICAgICAgICAgIHtgJHt0cmFuc2xhdGVDb3VudHJ5KGNvdW50cnkuY291bnRyeSl9ICgke2NvdW50cnkuY291bnR9KWB9XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NlbGVjdD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dFwiO1xyXG5pbXBvcnQgeyBnZXRUeXBlcywgVHlwZSB9IGZyb20gXCIuLi9kYXRhYmFzZS9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IENvdW50cnksIGdldENvdW50cnkgfSBmcm9tIFwiLi4vZGF0YWJhc2UvZ2V0Q291bnRyeVwiO1xyXG5pbXBvcnQgeyBnZXRBc1N0cmluZyB9IGZyb20gXCIuLi9kYXRhYmFzZS9nZXRBc1N0cmluZ1wiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVwYWdlL1NlYXJjaFwiO1xyXG5pbXBvcnQgQ2F0YWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lcGFnZS9DYXRhbG9nXCI7XHJcbmltcG9ydCBNYWluVGV4dEJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVwYWdlL01haW5UZXh0QmxvY2tcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9tZXBhZ2VQcm9wcyB7XHJcbiAgdHlwZXM6IFR5cGVbXTtcclxuICBjb3VudHJpZXM6IENvdW50cnlbXTtcclxuICBsaXN0T2ZDb3VudHJpZXM6IENvdW50cnlbXTtcclxuICBsaXN0T2ZDb3VudHJpZXNDb2luczogQ291bnRyeVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSh7XHJcbiAgdHlwZXMsXHJcbiAgY291bnRyaWVzLFxyXG4gIGxpc3RPZkNvdW50cmllcyxcclxuICBsaXN0T2ZDb3VudHJpZXNDb2lucyxcclxufTogSG9tZXBhZ2VQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwi0J3Rg9C80LjQt9C80LDRgtC40LrQsCDQuCDQsdC+0L3QuNGB0YLQuNC60LAgfCDQmNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9IHwg0J/RgNC+0LTQsNC20LAg0LHQsNC90LrQvdC+0YIg0Lgg0LzQvtC90LXRglwiPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxNYWluVGV4dEJsb2NrIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17M30+XHJcbiAgICAgICAgICA8Q2F0YWxvZ1xyXG4gICAgICAgICAgICBsaXN0T2ZDb3VudHJpZXM9e2xpc3RPZkNvdW50cmllc31cclxuICAgICAgICAgICAgbGlzdE9mQ291bnRyaWVzQ29pbnM9e2xpc3RPZkNvdW50cmllc0NvaW5zfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs5fT5cclxuICAgICAgICAgIDxTZWFyY2ggdHlwZXM9e3R5cGVzfSBjb3VudHJpZXM9e2NvdW50cmllc30gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdHlwZSA9IGdldEFzU3RyaW5nKGN0eC5xdWVyeS50eXBlKTtcclxuICAgIGNvbnN0IFt0eXBlcywgY291bnRyaWVzLCBsaXN0T2ZDb3VudHJpZXMsIGxpc3RPZkNvdW50cmllc0NvaW5zXSA9XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBnZXRUeXBlcygpLFxyXG4gICAgICAgIGdldENvdW50cnkodHlwZSksXHJcbiAgICAgICAgZ2V0Q291bnRyeShcIlBhcGVyIE1vbmV5XCIpLFxyXG4gICAgICAgIGdldENvdW50cnkoXCJDb2luc1wiKSxcclxuICAgICAgXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyB0eXBlcywgY291bnRyaWVzLCBsaXN0T2ZDb3VudHJpZXMsIGxpc3RPZkNvdW50cmllc0NvaW5zIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==