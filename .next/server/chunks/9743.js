exports.id = 9743;
exports.ids = [9743];
exports.modules = {

/***/ 3941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Search; }
/* harmony export */ });
/* unused harmony export CountrySelect */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7717);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _database_getAsString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6594);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _translate_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2738);
/* harmony import */ var _translate_country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(220);



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)({
  paper: {
    margin: 'auto',
    maxWidth: 500,
    padding: theme.spacing(3)
  }
}));
const prices = [0, 10, 100, 500, 1000, 5000, 10000];
function Search({
  types,
  countries,
  singleColumn
}) {
  const classes = useStyles();
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const smValue = singleColumn ? 12 : 6;
  const initialValues = {
    type: (0,_database_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.type) || 'all',
    country: (0,_database_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.country) || 'all',
    minPrice: (0,_database_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.minPrice) || 'all',
    maxPrice: (0,_database_getAsString__WEBPACK_IMPORTED_MODULE_8__/* .getAsString */ .X)(query.maxPrice) || 'all'
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: initialValues,
    onSubmit: values => {
      console.log(1111, values);
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
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
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        elevation: 5,
        className: classes.paper,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            sm: smValue,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
              fullWidth: true,
              variant: "outlined",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                id: "search-type",
                children: "\u0422\u0438\u043F \u0442\u043E\u0432\u0430\u0440\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                name: "type",
                as: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Select,
                labelId: "search-type",
                label: "Type",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                  value: "all",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                    children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
                  })
                }), types.map(type => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                  value: type.type,
                  children: `${(0,_translate_category__WEBPACK_IMPORTED_MODULE_6__/* .translateCategory */ .J)(type.type)} (${type.count})`
                }, type.type))]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            sm: smValue,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CountrySelect, {
              type: values.type,
              name: "country",
              countries: countries
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            sm: smValue,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
              fullWidth: true,
              variant: "outlined",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                id: "search-min-price",
                children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                name: "minPrice",
                as: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Select,
                labelId: "search-min-price",
                label: "Min price",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                  value: "all",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                    children: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
                  })
                }), prices.map(price => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                  value: price,
                  children: price
                }, price))]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            sm: smValue,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
              fullWidth: true,
              variant: "outlined",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                id: "search-max-price",
                children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                name: "maxPrice",
                as: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Select,
                labelId: "search-max-price",
                label: "Max price",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                  value: "all",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                    children: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
                  })
                }), prices.map(price => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                  value: price,
                  children: price
                }, price))]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
              fullWidth: true,
              type: "submit",
              variant: "contained",
              color: "primary",
              children: "\u0418\u0441\u043A\u0430\u0442\u044C"
            })
          })]
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
      props = _objectWithoutProperties(_ref, ["countries", "type"]);

  const {
    setFieldValue
  } = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormikContext)();
  const [field] = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)({
    name: props.name
  });
  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_5___default()('/api/getcountry?type=' + type, {
    // dedupingInterval: 60000,
    onSuccess: newValues => {
      if (!newValues.map(a => a.country).includes(field.value)) {
        setFieldValue('country', 'all');
      }
    }
  });
  const newCountries = data || countries;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
    fullWidth: true,
    variant: "outlined",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
      id: "search-country",
      children: "\u0421\u0442\u0440\u0430\u043D\u0430"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Select, _objectSpread(_objectSpread(_objectSpread({
      name: "country",
      labelId: "search-country",
      label: "Country"
    }, field), props), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        value: "all",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
          children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
        })
      }), newCountries.map(country => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        value: country.country,
        children: `${(0,_translate_country__WEBPACK_IMPORTED_MODULE_7__/* .translateCountry */ .y)(country.country)} (${country.count})`
      }, country.country))]
    }))]
  });
}

/***/ }),

/***/ 9338:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": function() { return /* binding */ getTypes; }
/* harmony export */ });
/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6331);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3375);


async function getTypes() {
  await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u)();
  const countTypeBanknote = await (await _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find({
    category: 'Paper Money'
  })).length;
  const countTypeCoin = await (await _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find({
    category: 'Coins'
  })).length;
  const countTypeOther = await (await _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find({
    category: 'Other'
  })).length;
  return [{
    type: 'Paper Money',
    count: countTypeBanknote
  }, {
    type: 'Coins',
    count: countTypeCoin
  }, {
    type: 'Other',
    count: countTypeOther
  }];
}

/***/ }),

/***/ 6331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ connectDB; }
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

console.log('MONGO_URI!!!!', process.env.MONGODB_URI);
const connectDB = async () => {
  var _mongoose$connections;

  if (!((_mongoose$connections = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0])) !== null && _mongoose$connections !== void 0 && _mongoose$connections.readyState)) {
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }
};

/***/ }),

/***/ 2738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ category; },
/* harmony export */   "J": function() { return /* binding */ translateCategory; }
/* harmony export */ });
const category = {
  'Paper Money': 'Банкноты',
  Coins: 'Монеты',
  Other: 'Прочие'
};
function translateCategory(category) {
  return category[category];
}

/***/ }),

/***/ 220:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ countryList; },
/* harmony export */   "y": function() { return /* binding */ translateCountry; }
/* harmony export */ });
const countryList = {
  USSR: 'СССР',
  Russia: 'Россия',
  Tajikistan: 'Таджикистан',
  Uzbekistan: 'Узбекистан',
  Burma: 'Бирма',
  Yugoslavia: 'Югославия',
  Cambodia: 'Камбоджа',
  Iran: 'Иран',
  Nepal: 'Непал',
  Bhutan: 'Бутан',
  Lao: 'Лаос',
  China: 'Китай',
  Afganistan: 'Афганистан'
};
function translateCountry(country) {
  return countryList[country];
}

/***/ })

};
;