(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3226:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Homepage; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layout.tsx + 3 modules
var layout = __webpack_require__(6013);
// EXTERNAL MODULE: ./database/getType.ts
var getType = __webpack_require__(9338);
// EXTERNAL MODULE: ./database/getCountry.ts
var getCountry = __webpack_require__(2030);
// EXTERNAL MODULE: ./database/getAsString.ts
var getAsString = __webpack_require__(6594);
// EXTERNAL MODULE: ./components/Search.tsx
var Search = __webpack_require__(3941);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(4508);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowDropDown"
var ArrowDropDown_namespaceObject = require("@material-ui/icons/ArrowDropDown");;
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowRight"
var ArrowRight_namespaceObject = require("@material-ui/icons/ArrowRight");;
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons"
var icons_namespaceObject = require("@material-ui/icons");;
// EXTERNAL MODULE: ./translate/country.ts
var country = __webpack_require__(220);
;// CONCATENATED MODULE: ./components/Catalog.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useTreeItemStyles = (0,core_.makeStyles)(theme => (0,core_.createStyles)({
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
      fontWeight: theme.typography.fontWeightRegular
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
        other = _objectWithoutProperties(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);

  return /*#__PURE__*/jsx_runtime_.jsx(lab_.TreeItem, _objectSpread({
    label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.labelRoot,
      children: [/*#__PURE__*/jsx_runtime_.jsx(LabelIcon, {
        color: "inherit",
        className: classes.labelIcon
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
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

const useStyles = (0,core_.makeStyles)({
  root: {
    flexGrow: 1,
    maxWidth: 300,
    height: 264
  }
});
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

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(lab_.TreeView, {
      className: classes.root,
      defaultExpanded: ['1', '2'],
      defaultCollapseIcon: /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {}),
      defaultExpandIcon: /*#__PURE__*/jsx_runtime_.jsx((ArrowRight_default()), {}),
      defaultEndIcon: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: 24
        }
      }),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTreeItem, {
        nodeId: "1",
        labelText: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
        labelIcon: icons_namespaceObject.Label,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTreeItem, {
          nodeId: "2",
          labelText: "\u0411\u0430\u043D\u043A\u043D\u043E\u0442\u044B",
          labelIcon: icons_namespaceObject.Money,
          children: [/*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: "8",
            labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
            labelIcon: icons_namespaceObject.ArrowRight,
            onLabelClick: () => handleClick('Paper Money', 'all')
          }), listOfCountries === null || listOfCountries === void 0 ? void 0 : listOfCountries.map((el, index) => /*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: String(index + 10),
            labelIcon: icons_namespaceObject.ArrowRight,
            labelText: `${(0,country/* translateCountry */.y)(el.country)}`,
            labelInfo: el.count,
            color: "#1a73e8",
            bgColor: "#e8f0fe",
            onLabelClick: () => handleClick('Paper Money', el.country)
          }, el.country))]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTreeItem, {
          nodeId: "5",
          labelText: "\u041C\u043E\u043D\u0435\u0442\u044B",
          labelIcon: icons_namespaceObject.Money,
          children: [/*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: "9",
            labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
            labelIcon: icons_namespaceObject.ArrowRight,
            onLabelClick: () => handleClick('Coins', 'all')
          }), listOfCountriesCoins.map((el, index) => /*#__PURE__*/jsx_runtime_.jsx(StyledTreeItem, {
            nodeId: String(index + 100),
            labelText: `${(0,country/* translateCountry */.y)(el.country)}`,
            labelIcon: icons_namespaceObject.ArrowRight,
            labelInfo: el.count,
            color: "#1a73e8",
            bgColor: "#e8f0fe",
            onLabelClick: () => handleClick('Coins', el.country)
          }, el.country))]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/MainTextBlock.tsx


function MainTextBlock() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "subtitle1",
      children: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E \u0412\u0430\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0438 \u0438 \u043D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0438. \u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u043C\u043E\u0435\u0439 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u0411\u0430\u043D\u043A\u043D\u043E\u0442\u044B \u0438 \u041C\u043E\u043D\u0435\u0442\u044B.\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u0442\u0441\u044F. \u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u043C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C (\u041F\u043E\u0447\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438), \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438. \u041A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u041C\u043E\u0441\u043A\u0432\u0435 400 \u0440\u0443\u0431\u043B\u0435\u0439. \u0423\u0434\u0430\u0447\u043D\u043E\u0439 \u0432\u0430\u043C \u043F\u043E\u043A\u0443\u043F\u043A\u0438! \u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0441\u043C\u043E\u0442\u0440\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430."
    })
  });
}
;// CONCATENATED MODULE: ./pages/index.tsx











function Homepage({
  types,
  countries,
  listOfCountries,
  listOfCountriesCoins
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    title: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 | \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442",
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
      container: true,
      spacing: 3,
      item: true,
      xs: 12,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          border: 'ridge 5px',
          padding: '5px',
          margin: '10px'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(MainTextBlock, {})
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        xs: 12,
        sm: 3,
        children: /*#__PURE__*/jsx_runtime_.jsx(Catalog, {
          listOfCountries: listOfCountries,
          listOfCountriesCoins: listOfCountriesCoins
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        xs: 12,
        sm: 9,
        children: /*#__PURE__*/jsx_runtime_.jsx(Search/* default */.Z, {
          types: types,
          countries: countries
        })
      })]
    })]
  });
}
const getServerSideProps = async ctx => {
  try {
    const type = (0,getAsString/* getAsString */.X)(ctx.query.type);
    const [types, countries, listOfCountries, listOfCountriesCoins] = await Promise.all([(0,getType/* getTypes */.y)(), (0,getCountry/* getCountry */.r)(type), (0,getCountry/* getCountry */.r)('Paper Money'), (0,getCountry/* getCountry */.r)('Coins')]);
    return {
      props: {
        types,
        countries,
        listOfCountries,
        listOfCountriesCoins
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
var __webpack_exports__ = __webpack_require__.X(0, [8689,2956,1865,3157,8223,9743], function() { return __webpack_exec__(3226); });
module.exports = __webpack_exports__;

})();