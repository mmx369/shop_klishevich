(function() {
var exports = {};
exports.id = 4800;
exports.ids = [4800];
exports.modules = {

/***/ 1268:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ShopList; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Search.tsx
var Search = __webpack_require__(3941);
// EXTERNAL MODULE: ./database/getAsString.ts
var getAsString = __webpack_require__(6594);
// EXTERNAL MODULE: ./database/getType.ts
var getType = __webpack_require__(9338);
// EXTERNAL MODULE: ./database/getCountry.ts
var getCountry = __webpack_require__(2030);
// EXTERNAL MODULE: ./database/getPaginatedItems.ts
var getPaginatedItems = __webpack_require__(3823);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "querystring"
var external_querystring_namespaceObject = require("querystring");;
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: external "fast-deep-equal"
var external_fast_deep_equal_namespaceObject = require("fast-deep-equal");;
var external_fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(external_fast_deep_equal_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(4508);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/ShopPagination.tsx


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ShopPagination({
  totalPages
}) {
  const {
    query
  } = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(lab_.Pagination, {
    page: parseInt((0,getAsString/* getAsString */.X)(query.page) || '1'),
    count: totalPages,
    renderItem: item => /*#__PURE__*/jsx_runtime_.jsx(lab_.PaginationItem, _objectSpread({
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
      props = _objectWithoutProperties(_ref, ["item", "query"]);

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(5117);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(4697);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
var CardMedia = __webpack_require__(951);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/red.js
var red = __webpack_require__(907);
// EXTERNAL MODULE: ./translate/category.ts
var category = __webpack_require__(2738);
// EXTERNAL MODULE: ./translate/country.ts
var country = __webpack_require__(220);
;// CONCATENATED MODULE: ./components/ShopCard.tsx














const useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  avatar: {
    backgroundColor: red/* default.500 */.Z[500]
  },
  achorTag: {
    textDecoration: 'none'
  }
}));
function ShopCard({
  item
}) {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/goods/[type]/[country]/[id]",
      as: `/goods/${item.category}/${item.country}/${item._id}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: classes.achorTag,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
          elevation: 5,
          children: [/*#__PURE__*/jsx_runtime_.jsx(CardHeader/* default */.Z, {
            title: `${(0,category/* translateCategory */.J)(item.category)} | ${(0,country/* translateCountry */.y)(item.country)}`,
            subheader: item.nameOfGoods
          }), /*#__PURE__*/jsx_runtime_.jsx(CardMedia/* default */.Z, {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods
          }), /*#__PURE__*/jsx_runtime_.jsx(CardContent/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует']
            })
          })]
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./components/layout.tsx + 3 modules
var layout = __webpack_require__(6013);
;// CONCATENATED MODULE: ./pages/shop.tsx



function shop_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = shop_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function shop_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















function ShopList({
  types,
  countries,
  goods,
  totalPages
}) {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    0: serverQuery
  } = (0,external_react_.useState)(query);
  const {
    data
  } = external_swr_default()('/api/shop?' + (0,external_querystring_namespaceObject.stringify)(query), {
    // dedupingInterval: 15000,
    initialData: external_fast_deep_equal_default()(query, serverQuery) ? {
      goods,
      totalPages
    } : undefined
  });
  return (
    /*#__PURE__*/
    // //TODO: use skeleton to avoid blinking
    jsx_runtime_.jsx(layout/* default */.Z, {
      title: "Shop Page",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          xs: 12,
          sm: 5,
          md: 3,
          lg: 2,
          children: /*#__PURE__*/jsx_runtime_.jsx(Search/* default */.Z, {
            singleColumn: true,
            types: types,
            countries: countries
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
          container: true,
          item: true,
          xs: 12,
          sm: 7,
          md: 9,
          lg: 10,
          spacing: 2,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ShopPagination, {
              totalPages: data === null || data === void 0 ? void 0 : data.totalPages
            })
          }), ((data === null || data === void 0 ? void 0 : data.goods) || []).map(item => /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            xs: 12,
            sm: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(ShopCard, {
              item: item
            })
          }, item._id)), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ShopPagination, {
              totalPages: data === null || data === void 0 ? void 0 : data.totalPages
            })
          })]
        })]
      })
    })
  );
}
const getServerSideProps = async ctx => {
  const type = (0,getAsString/* getAsString */.X)(ctx.query.type);
  const [types, countries, pagination] = await Promise.all([(0,getType/* getTypes */.y)(), (0,getCountry/* getCountry */.r)(type), (0,getPaginatedItems/* getPaginatedItem */.q)(ctx.query)]); //@ts-ignore

  const goodsSerialized = pagination.goods.map( //@ts-ignore
  (_ref) => {
    let {
      _doc: {
        _id,
        date
      }
    } = _ref,
        rest = shop_objectWithoutProperties(_ref._doc, ["_id", "date"]);

    rest._id = _id.toString();
    return rest;
  });
  return {
    props: {
      types,
      countries,
      goods: goodsSerialized,
      totalPages: pagination.totalPages
    }
  };
};

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 5855:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ShoppingCartRounded");;

/***/ }),

/***/ 4508:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/lab");;

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 7717:
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ 8104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 3810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [8689,2956,2318,4418,4697,1865,3157,8223,9743,3823], function() { return __webpack_exec__(1268); });
module.exports = __webpack_exports__;

})();