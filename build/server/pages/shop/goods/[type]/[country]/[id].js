"use strict";
(() => {
var exports = {};
exports.id = 3654;
exports.ids = [3654];
exports.modules = {

/***/ 4750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ serializeData)
/* harmony export */ });
function serializeData(data) {
  const serializedArray = data.map(el => {
    const resultArr = Object.entries(el._doc).map(([key, value]) => {
      if (key === 'order') {
        return [key, JSON.stringify(value)];
      }

      if (Array.isArray(value)) {
        return [key, value];
      }

      if (value instanceof Date) {
        return [key, value.toISOString()];
      }

      if (typeof value === 'object' && value !== null) {
        return [key, value.toString()];
      }

      return [key, value];
    });
    return Object.fromEntries(resultArr);
  });
  return serializedArray;
}

/***/ }),

/***/ 7254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemsDetails),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1612);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(238);
/* harmony import */ var _db_dbApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(403);
/* harmony import */ var _lib_serialize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4750);
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7169);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5801);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1053);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

















react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.configure();
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(() => (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.createStyles)({
  root: {
    marginTop: '50px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  input: {
    margin: '10px'
  },
  img: {
    textAlign: 'center'
  }
}));
function ItemsDetails({
  item
}) {
  const classes = useStyles();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const isLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_selectors__WEBPACK_IMPORTED_MODULE_12__/* .appSelectors.isLoggedIn */ .LL.isLoggedIn);
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(item.amountOfGoods > 0 ? 1 : 0);

  const handleInputChange = event => {
    setValue(Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > item.amountOfGoods) {
      setValue(item.amountOfGoods);
    }
  };

  const handleDispatch = id => {
    dispatch((0,_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_11__/* .addNewItem */ .v5)(id, value));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      title: (0,_lib_translate__WEBPACK_IMPORTED_MODULE_10__/* .translateCountry */ .y)(item.country) + ' ' + item.nameOfGoods,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("main", {
        className: classes.root,
        "data-testid": "detailedProductPageContent",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
          sx: {
            margin: '5px'
          },
          variant: "outlined",
          color: "primary",
          size: "small",
          onClick: () => router.back(),
          children: "\u043D\u0430\u0437\u0430\u0434"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
            item: true,
            xs: 12,
            sm: 6,
            md: 5,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
              className: classes.img,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                src: item.imageUrl[0],
                alt: `${item.country} | ${item.nameOfGoods}`,
                width: 300,
                height: 300
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
            item: true,
            xs: 12,
            sm: 6,
            md: 7,
            container: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
              item: true,
              xs: true,
              container: true,
              direction: "column",
              spacing: 2,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
                item: true,
                xs: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                  gutterBottom: true,
                  variant: "h6",
                  children: [(0,_lib_translate__WEBPACK_IMPORTED_MODULE_10__/* .translateCategory */ .J)(item.category), " |", (0,_lib_translate__WEBPACK_IMPORTED_MODULE_10__/* .translateCountry */ .y)(item.country)]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                  gutterBottom: true,
                  variant: "h5",
                  children: item.nameOfGoods
                }), item.catalogNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041D\u043E\u043C\u0435\u0440 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435: ", item.catalogNumber]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443:", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("strong", {
                    children: [item.priceOfGoods, " ", _constants__WEBPACK_IMPORTED_MODULE_8__/* .ROUBLE */ .$y]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", item.amountOfGoods, " \u0448\u0442."]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
                  variant: "contained",
                  color: "primary",
                  size: "small",
                  "data-testid": "addToCartBtn",
                  onClick: () => {
                    handleDispatch(item._id);
                  },
                  children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Input, {
                  className: classes.input,
                  value: value,
                  onChange: handleInputChange,
                  onBlur: handleBlur,
                  "data-testid": "inputAddToCart",
                  inputProps: {
                    step: 1,
                    min: 0,
                    max: `${item.amountOfGoods}`,
                    type: 'number',
                    'aria-labelledby': 'input-slider'
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                  variant: "subtitle2",
                  children: "\u041D\u043E\u043C\u0435\u0440, \u0441\u0435\u0440\u0438\u044F \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0444\u043E\u0442\u043E. \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443."
                })]
              })
            })
          })]
        })]
      })
    })
  });
}
const getServerSideProps = async ctx => {
  const productId = ctx.params.id;
  const data = await _db_dbApi__WEBPACK_IMPORTED_MODULE_9__/* .dbApi.getSingleProductById */ .B.getSingleProductById(productId);

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const serializedItem = (0,_lib_serialize__WEBPACK_IMPORTED_MODULE_14__/* .serializeData */ .L)([data])[0];
  return {
    props: {
      item: serializedItem
    }
  };
};

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 3403:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Contacts");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 5799:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LiveHelp");

/***/ }),

/***/ 4107:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalShipping");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 2548:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCartRounded");

/***/ }),

/***/ 2584:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SupervisorAccount");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,5675,2246,1612,403], () => (__webpack_exec__(7254)));
module.exports = __webpack_exports__;

})();