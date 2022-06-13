"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 8421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Homepage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: external "@mui/icons-material"
const icons_material_namespaceObject = require("@mui/icons-material");
;// CONCATENATED MODULE: external "@mui/lab"
const lab_namespaceObject = require("@mui/lab");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/lib/dynamicSort.ts
const dynamicSort = property => {
  let sortOrder = 1;

  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};
// EXTERNAL MODULE: ./src/lib/translate.ts
var translate = __webpack_require__(7169);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/homepage/StyledTreeItem.tsx
const _excluded = ["labelText", "labelIcon", "labelInfo", "color", "bgColor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useTreeItemStyles = (0,styles_.makeStyles)(theme => (0,styles_.createStyles)({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)'
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent'
    }
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme === null || theme === void 0 ? void 0 : theme.typography.fontWeightRegular
    }
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2)
    }
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit'
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    marginRight: theme.spacing(1)
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1
  }
}));
function StyledTreeItem(props) {
  const classes = useTreeItemStyles();

  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor
  } = props,
        other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(lab_namespaceObject.TreeItem, _objectSpread({
    label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.labelRoot,
      children: [/*#__PURE__*/jsx_runtime_.jsx(LabelIcon, {
        color: "inherit",
        className: classes.labelIcon
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
        variant: "caption",
        color: "inherit",
        children: labelInfo
      })]
    }),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}
;// CONCATENATED MODULE: ./src/components/homepage/Catalog.tsx
function Catalog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Catalog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Catalog_ownKeys(Object(source), true).forEach(function (key) { Catalog_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Catalog_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Catalog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    padding: 20
  }
}));
function Catalog({
  listOfCountries,
  listOfCountriesCoins
}) {
  const classes = useStyles();

  const handleClick = async (type, country) => {
    router_default().push({
      pathname: '/shop',
      query: {
        type,
        country,
        page: 1
      }
    }, undefined, {
      shallow: true
    });
  };

  const sortedListOfCountries = listOfCountries.map(el => {
    return Catalog_objectSpread(Catalog_objectSpread({}, el), {}, {
      countryTranslated: (0,translate/* translateCountry */.y)(el.country)
    });
  }).sort(dynamicSort('countryTranslated'));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    "data-testid": "catalogLeft",
    children: /*#__PURE__*/jsx_runtime_.jsx(lab_namespaceObject.TreeView, {
      defaultExpanded: ['1', '2'],
      defaultCollapseIcon: /*#__PURE__*/jsx_runtime_.jsx(icons_material_namespaceObject.ArrowDropDown, {}),
      defaultExpandIcon: /*#__PURE__*/jsx_runtime_.jsx(icons_material_namespaceObject.ArrowRight, {}),
      defaultEndIcon: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: 24
        }
      }),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTreeItem, {
        nodeId: "1",
        labelText: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
        labelIcon: icons_material_namespaceObject.Label,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTreeItem, {
          nodeId: "2",
          labelText: "\u0411\u0430\u043D\u043A\u043D\u043E\u0442\u044B",
          labelIcon: icons_material_namespaceObject.Money,
          children: [/*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: "8",
            labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
            labelIcon: icons_material_namespaceObject.ArrowRight,
            onClick: () => handleClick('Paper Money', 'all')
          }), sortedListOfCountries.map((el, index) => /*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: String(index + 10),
            labelIcon: icons_material_namespaceObject.ArrowRight,
            labelText: el.countryTranslated,
            labelInfo: el.count.toString(),
            "data-testid": `test-${el.country}`,
            color: "#1a73e8",
            bgColor: "#e8f0fe",
            onClick: () => handleClick('Paper Money', el.country)
          }, el.country))]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTreeItem, {
          nodeId: "5",
          labelText: "\u041C\u043E\u043D\u0435\u0442\u044B",
          labelIcon: icons_material_namespaceObject.Money,
          children: [/*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: "9",
            labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
            labelIcon: icons_material_namespaceObject.ArrowRight,
            onClick: () => handleClick('Coins', 'all')
          }), listOfCountriesCoins.map((el, index) => /*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: String(index + 100),
            labelText: `${(0,translate/* translateCountry */.y)(el.country)}`,
            labelIcon: icons_material_namespaceObject.ArrowRight,
            labelInfo: el.count.toString(),
            color: "#1a73e8",
            bgColor: "#e8f0fe",
            onClick: () => handleClick('Coins', el.country)
          }, el.country))]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/homepage/MainTextBlock.tsx





const MainTextBlock_useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    marginTop: 50
  }
}));
function MainTextBlock() {
  const classes = MainTextBlock_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
      variant: "subtitle2",
      align: "justify",
      "data-testid": "mainTextBlock",
      children: ["\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E \u0412\u0430\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0438 \u0438 \u043D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0438. \u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u0411\u0430\u043D\u043A\u043D\u043E\u0442\u044B \u0438 \u041C\u043E\u043D\u0435\u0442\u044B. \u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u0442\u0441\u044F. \u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438\u043B\u0438 \u043C\u043E\u043D\u0435\u0442 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u043C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C (\u041F\u043E\u0447\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438), \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438. ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0423\u0434\u0430\u0447\u043D\u043E\u0439 \u0432\u0430\u043C \u043F\u043E\u043A\u0443\u043F\u043A\u0438!"
      }), " \u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "/paymentandshipping",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            "data-testid": "navPaymentLink",
            children: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430."
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/components/homepage/Search.tsx
var Search = __webpack_require__(9416);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 5 modules
var layout = __webpack_require__(1612);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(238);
// EXTERNAL MODULE: ./src/lib/getData.ts
var getData = __webpack_require__(2843);
;// CONCATENATED MODULE: ./src/pages/index.tsx










const pages_useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));
function Homepage({
  productTypesCount,
  listOfCountriesCount,
  listOfCountriesCoinsCount
}) {
  const classes = pages_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 | \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        container: true,
        spacing: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(MainTextBlock, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(Catalog, {
            listOfCountries: listOfCountriesCount,
            listOfCountriesCoins: listOfCountriesCoinsCount
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sm: 8,
          children: /*#__PURE__*/jsx_runtime_.jsx(Search/* default */.Z, {
            productTypesCount: productTypesCount,
            countriesCount: []
          })
        })]
      })]
    })
  });
}
const getServerSideProps = async () => {
  try {
    const [productTypesCount, listOfCountriesCount, listOfCountriesCoinsCount] = await Promise.all([//counts number of product for every product type
    getData/* getData.getTypesCount */.Y.getTypesCount(constants/* PRODUCTS_TYPES */.jr), //counts number of product for every country in Paper Money category
    getData/* getData.getCountry */.Y.getCountry('Paper Money'), getData/* getData.getCountry */.Y.getCountry('Coins')]);
    return {
      props: {
        productTypesCount,
        listOfCountriesCount,
        listOfCountriesCoinsCount
      }
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true
    };
  }
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
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,2246,1612,6841,2085], () => (__webpack_exec__(8421)));
module.exports = __webpack_exports__;

})();