"use strict";
exports.id = 2085;
exports.ids = [2085];
exports.modules = {

/***/ 9416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Search)
/* harmony export */ });
/* unused harmony export CountrySelect */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_getAsString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6126);
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7169);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["countries", "type"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(() => (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.createStyles)({
  root: {
    margin: '10px',
    marginTop: '50px'
  },
  paper: {
    margin: 'auto',
    maxWidth: '500px',
    padding: '2rem'
  }
}));
function Search({
  productTypesCount,
  countriesCount,
  singleColumn
}) {
  const classes = useStyles();
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const smValue = singleColumn ? 12 : 6;
  const prices = [0, 10, 100, 500, 1000, 5000, 10000];
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('all');

  const getMaxPrices = minPrice => {
    return minPrice === 'all' ? prices : prices.filter(el => el >= minPrice);
  };

  let maxPrices = prices;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    maxPrices = getMaxPrices(minPrice);
  }, [minPrice]);
  const initialValues = {
    type: (0,_lib_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.type) || 'all',
    country: (0,_lib_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.country) || 'all',
    minPrice: (0,_lib_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.minPrice) || 'all',
    maxPrice: (0,_lib_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.maxPrice) || 'all'
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    className: classes.root,
    "data-testid": "searchForm",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: initialValues,
      onSubmit: values => {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
          pathname: '/shop',
          query: _objectSpread(_objectSpread({}, values), {}, {
            page: 1
          })
        }, undefined, {
          shallow: true
        });
      },
      children: ({
        values
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper, {
          elevation: 2,
          className: classes.paper,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
                fullWidth: true,
                variant: "standard",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputLabel, {
                  id: "search-type",
                  children: "\u0422\u0438\u043F \u0442\u043E\u0432\u0430\u0440\u0430"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                  name: "type",
                  as: _mui_material__WEBPACK_IMPORTED_MODULE_0__.Select,
                  labelId: "search-type",
                  label: "Type",
                  "data-testid": "productFieldSelect",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
                    value: "all",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("em", {
                      children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
                    })
                  }), productTypesCount.map(type => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
                    value: type.type,
                    "data-testid": "selectOptionsProductTypes",
                    children: `${(0,_lib_translate__WEBPACK_IMPORTED_MODULE_6__/* .translateCategory */ .Jv)(type.type)} (${type.count})`
                  }, type.type))]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(CountrySelect, {
                type: values.type,
                name: "country",
                countries: countriesCount
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
                fullWidth: true,
                variant: "standard",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputLabel, {
                  id: "search-min-price",
                  children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                  name: "minPrice",
                  as: _mui_material__WEBPACK_IMPORTED_MODULE_0__.Select,
                  labelId: "search-min-price",
                  label: "Min price",
                  "data-testid": "minPriceFieldSelect",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
                    value: "all",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("em", {
                      children: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
                    })
                  }), prices.map(price => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
                    value: price,
                    "data-testid": "selectOptionsMinPrice",
                    children: price
                  }, price))]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
              item: true,
              xs: 12,
              sm: smValue,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
                fullWidth: true,
                variant: "standard",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputLabel, {
                  id: "search-max-price",
                  children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                  name: "maxPrice",
                  as: _mui_material__WEBPACK_IMPORTED_MODULE_0__.Select,
                  labelId: "search-max-price",
                  label: "Max price",
                  "data-testid": "maxPriceFieldSelect",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
                    value: "all",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("em", {
                      children: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
                    })
                  }), maxPrices.map(price => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
                    value: price,
                    "data-testid": "selectOptionsMaxPrice",
                    children: price
                  }, price))]
                })]
              })
            }), setMinPrice(values.minPrice), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
                fullWidth: true,
                type: "submit",
                variant: "contained",
                color: "primary",
                "data-testid": "searchBtn",
                children: "\u0418\u0441\u043A\u0430\u0442\u044C"
              })
            })]
          })
        })
      })
    })
  });
}
function CountrySelect(_ref) {
  let {
    countries,
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    setFieldValue
  } = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormikContext)();
  const [field] = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)({
    name: props.name
  });
  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_5___default()('/api/getcountry?type=' + type, {
    dedupingInterval: 60000,
    onSuccess: newValues => {
      if (!newValues.map(a => a.country).includes(field.value)) {
        setFieldValue('country', 'all');
      }
    }
  });
  const newCountries = data || countries;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
    fullWidth: true,
    variant: "standard",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputLabel, {
      id: "search-country",
      children: "\u0421\u0442\u0440\u0430\u043D\u0430"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Select, _objectSpread(_objectSpread(_objectSpread({
      labelId: "search-country",
      label: "Country"
    }, field), props), {}, {
      "data-testid": "countryFieldSelect",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        value: "all",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("em", {
          children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
        })
      }), newCountries.map(country => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        value: country.country,
        "data-testid": "selectOptionsCountry",
        children: `${(0,_lib_translate__WEBPACK_IMPORTED_MODULE_6__/* .translateCountry */ .yy)(country.country)} (${country.count})`
      }, country.country))]
    }))]
  });
}

/***/ }),

/***/ 6126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getAsString)
/* harmony export */ });
function getAsString(value) {
  if (typeof value === 'undefined') {
    return '';
  }

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

/***/ }),

/***/ 2843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _db_dbApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6841);


async function getTypesCount(productTypes) {
  const data = await _db_dbApi__WEBPACK_IMPORTED_MODULE_0__/* .dbApi.fetchTypesCount */ .B.fetchTypesCount(productTypes);
  const productTypesCount = [];
  productTypes.forEach((product, i) => {
    productTypesCount.push({
      type: product,
      count: data[i]
    });
  });
  return productTypesCount;
}

async function getCountry(productType) {
  const countries = await _db_dbApi__WEBPACK_IMPORTED_MODULE_0__/* .dbApi.fetchCountries */ .B.fetchCountries(productType);
  const res = countries.reduce((acc, curr) => {
    const currCountry = curr.country;

    if (acc[currCountry]) {
      acc[currCountry] += 1;
    } else {
      acc[currCountry] = 1;
    }

    return acc;
  }, {});
  const listOfCountriesCount = [];

  for (let [key, value] of Object.entries(res)) {
    listOfCountriesCount.push({
      country: key,
      count: value
    });
  }

  return listOfCountriesCount;
}

const getData = {
  getTypesCount,
  getCountry
};

/***/ })

};
;