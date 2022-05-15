"use strict";
(() => {
var exports = {};
exports.id = 4800;
exports.ids = [4800];
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

/***/ 4942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShopList),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: external "fast-deep-equal"
const external_fast_deep_equal_namespaceObject = require("fast-deep-equal");
var external_fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(external_fast_deep_equal_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "querystring"
const external_querystring_namespaceObject = require("querystring");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./src/components/homepage/Search.tsx
var Search = __webpack_require__(9416);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 5 modules
var layout = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(238);
// EXTERNAL MODULE: ./src/lib/translate.ts
var translate = __webpack_require__(7169);
// EXTERNAL MODULE: ./src/redux/actions/cartActions.ts
var cartActions = __webpack_require__(5801);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/shop/ShopCard.tsx











const useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  media: {
    backgroundSize: 'contain',
    paddingTop: '56.25%' // 16:9

  },
  btn: {
    marginTop: '5px'
  }
}));
function ShopCard({
  item
}) {
  const classes = useStyles();
  const dispatch = (0,external_react_redux_.useDispatch)();

  const handleDispatch = id => {
    dispatch((0,cartActions/* addNewItem */.v5)(id, 1));
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Card, {
      elevation: 1,
      "data-testid": "shopCard",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/shop/goods/[type]/[country]/[id]",
        as: `/shop/goods/${item.category}/${item.country}/${item._id}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          "data-testid": "productDetailLink",
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.CardHeader, {
            title: `${(0,translate/* translateCategory */.J)(item.category)} | ${(0,translate/* translateCountry */.y)(item.country)}`,
            subheader: item.nameOfGoods
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.CardMedia, {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods,
            "data-testid": "imgProduct"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.CardContent, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
          variant: "body2",
          color: "textSecondary",
          component: "p",
          children: ["\u0426\u0435\u043D\u0430:", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
            children: [item.priceOfGoods, " ", constants/* ROUBLE */.$y]
          }), ". \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует', /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            size: "small",
            variant: "outlined",
            color: "primary",
            "data-testid": "addToCartBtn",
            className: classes.btn,
            onClick: () => {
              handleDispatch(item._id);
            },
            children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
          })]
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/lib/getAsString.ts
var getAsString = __webpack_require__(6126);
;// CONCATENATED MODULE: ./src/components/shop/ShopPagination.tsx
const _excluded = ["item", "query"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ShopPagination({
  totalPages
}) {
  const {
    query
  } = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(material_.Pagination, {
    "data-testid": "paginationMenu",
    page: parseInt((0,getAsString/* getAsString */.X)(query.page) || '1'),
    count: totalPages,
    renderItem: item => /*#__PURE__*/jsx_runtime_.jsx(material_.PaginationItem, _objectSpread({
      component: MaterialUiLink,
      query: query,
      item: item
    }, item))
  });
}
const MaterialUiLink = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    item,
    query
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: {
      pathname: '/shop',
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: item.page
      })
    },
    shallow: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread(_objectSpread({}, props), {}, {
      ref: ref
    }))
  });
});
// EXTERNAL MODULE: ./src/lib/getData.ts
var getData = __webpack_require__(2843);
// EXTERNAL MODULE: ./src/db/dbConnect.ts
var dbConnect = __webpack_require__(703);
// EXTERNAL MODULE: ./src/models/shopGoods.ts
var shopGoods = __webpack_require__(1243);
;// CONCATENATED MODULE: ./src/lib/getPaginatedItems.ts



async function getPaginatedItem(query) {
  await (0,dbConnect/* dbConnect */.C)();
  const page = getValueNumber(query.page) || 1;
  const rowsPerPage = 4;
  const offset = (page - 1) * rowsPerPage;
  const dbParams = {
    type: getValueStr(query.type),
    country: getValueStr(query.country),
    minPrice: getValueNumber(query.minPrice),
    maxPrice: getValueNumber(query.maxPrice)
  };
  const findQuery = {};

  if (dbParams.type) {
    findQuery.category = dbParams.type;
  }

  if (dbParams.country) {
    findQuery.country = dbParams.country;
  }

  if (dbParams.minPrice && dbParams.maxPrice) {
    findQuery.priceOfGoods = {
      $gte: dbParams.minPrice,
      $lte: dbParams.maxPrice
    };
  } else if (dbParams.minPrice) {
    findQuery.priceOfGoods = {
      $gte: dbParams.minPrice
    };
  } else if (dbParams.maxPrice) {
    findQuery.priceOfGoods = {
      $lte: dbParams.maxPrice
    };
  }

  const resultPromise = shopGoods/* default.find */.Z.find(findQuery).skip(offset).limit(rowsPerPage).select('-__v -date');
  const resultCountPromise = shopGoods/* default.find */.Z.find(findQuery).count();
  const [result, resultCount] = await Promise.all([resultPromise, resultCountPromise]);
  const totalPages = Math.ceil(resultCount / rowsPerPage);
  return {
    goods: result,
    totalPages: totalPages
  };
}

function getValueNumber(value) {
  const str = getValueStr(value);
  const number = parseInt(str);
  return isNaN(number) ? null : number;
}

function getValueStr(value) {
  const str = (0,getAsString/* getAsString */.X)(value);
  return !str || str.toLowerCase() === 'all' ? null : str;
}
// EXTERNAL MODULE: ./src/lib/serialize.ts
var serialize = __webpack_require__(4750);
;// CONCATENATED MODULE: ./src/pages/shop/index.tsx


















const shop_useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    marginTop: '50px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));
function ShopList({
  productTypesCount,
  countProductsForEveryCountry,
  goods,
  totalPages
}) {
  const {
    query
  } = (0,router_.useRouter)();
  const classes = shop_useStyles();
  const {
    0: serverQuery
  } = (0,external_react_.useState)(query);
  const {
    data
  } = external_swr_default()('/api/shop?' + (0,external_querystring_namespaceObject.stringify)(query), {
    dedupingInterval: 15000,
    initialData: external_fast_deep_equal_default()(query, serverQuery) ? {
      goods,
      totalPages
    } : undefined
  });
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u0411\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u043D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      "data-testid": "searchResultPage",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(Search/* default */.Z, {
            singleColumn: true,
            productTypesCount: productTypesCount,
            countriesCount: countProductsForEveryCountry
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
          container: true,
          item: true,
          xs: 12,
          sm: 8,
          spacing: 2,
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ShopPagination, {
              totalPages: data === null || data === void 0 ? void 0 : data.totalPages
            })
          }), ((data === null || data === void 0 ? void 0 : data.goods) || []).map(item => /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
            item: true,
            xs: 12,
            sm: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(ShopCard, {
              item: item
            })
          }, item._id)), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ShopPagination, {
              totalPages: data === null || data === void 0 ? void 0 : data.totalPages
            })
          })]
        })]
      })
    })
  });
}
const getServerSideProps = async ctx => {
  const productsType = (0,getAsString/* getAsString */.X)(ctx.query.type);
  const [productTypesCount, countProductsForEveryCountry, pagination] = await Promise.all([//counts number of product for every category
  getData/* getData.getTypesCount */.Y.getTypesCount(constants/* PRODUCTS_TYPES */.jr), //counts number of product for every country in specific category
  getData/* getData.getCountry */.Y.getCountry(productsType), //get items and totalPages
  getPaginatedItem(ctx.query)]);
  const goodsSerialized = (0,serialize/* serializeData */.L)(pagination.goods);
  return {
    props: {
      productTypesCount,
      countProductsForEveryCountry,
      goods: goodsSerialized,
      totalPages: pagination.totalPages
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

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

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

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,2246,1612,403,2085], () => (__webpack_exec__(4942)));
module.exports = __webpack_exports__;

})();