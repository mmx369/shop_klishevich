"use strict";
(() => {
var exports = {};
exports.id = 8955;
exports.ids = [8955];
exports.modules = {

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const newOrder = new Schema({
  email: String,
  firstName: String,
  secondName: String,
  fatherName: String,
  zip: String,
  country: String,
  region: String,
  city: String,
  address: String,
  phone: String,
  comments: String,
  order: [{
    _id: String,
    nameOfGoods: String,
    amountOfGoods: Number,
    priceOfGoods: Number
  }],
  totalPrice: Number,
  shippingPrice: Number,
  status: {
    type: String,
    default: 'open'
  },
  date: Date
}); // @ts-ignore
//avoid OverwriteModelError

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const NewOrder = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('NewOrder', newOrder);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewOrder);

/***/ }),

/***/ 1209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderDetails),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1612);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(238);
/* harmony import */ var _models_newOrder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(894);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(() => (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.createStyles)({
  root: {
    marginTop: '50px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));
function OrderDetails({
  orderJSON
}) {
  const classes = useStyles();
  const order = JSON.parse(orderJSON);
  const newDate = new Date(order.date).toLocaleDateString();

  const currentStatus = status => {
    if (status === 'open') return 'Заказ открыт';
    if (status === 'paid') return 'Заказ оплачен';
    if (status === 'shipped') return 'Заказ отправлен';
    if (status === 'received') return 'Заказ получен';
    if (status === 'closed') return 'Заказ закрыт';
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "h6",
          children: ["\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F: ", newDate]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "h6",
          children: ["\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441:", ` ${currentStatus(order.status)}`]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "h6",
          children: "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            border: 'solid 1px',
            padding: '5px'
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
            variant: "body2",
            children: `${order.secondName} ${order.firstName} ${order.fatherName ? order.fatherName : ''}`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
            variant: "body2",
            children: `${order.address}`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
            variant: "body2",
            children: `${order.region ? order.region : ''} ${order.city ? order.city : ''}`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
            variant: "body2",
            children: `${order.zip}`
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "h6",
          children: "\u0417\u0430\u043A\u0430\u0437:"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableContainer, {
          component: _mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Table, {
            size: "small",
            "aria-label": "a dense table",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableHead, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableRow, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  children: "\u0422\u043E\u0432\u0430\u0440"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  align: "right",
                  children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  align: "right",
                  children: "\u0426\u0435\u043D\u0430"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  align: "right",
                  children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableBody, {
              children: order.order.map(el => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableRow, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  component: "th",
                  scope: "row",
                  children: el.nameOfGoods
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  align: "right",
                  children: el.amountOfGoods
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  align: "right",
                  children: el.priceOfGoods
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
                  align: "right",
                  children: el.priceOfGoods * el.amountOfGoods
                })]
              }, el._id))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "subtitle2",
          children: ["\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ", order.totalPrice, " ", _constants_index__WEBPACK_IMPORTED_MODULE_4__/* .ROUBLE */ .$y]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "subtitle2",
          children: ["C\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ", order.shippingPrice, " ", _constants_index__WEBPACK_IMPORTED_MODULE_4__/* .ROUBLE */ .$y]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "subtitle2",
          children: ["\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435:", ' ', order.shippingPrice ? order.shippingPrice + order.totalPrice : 'Не выбрана стоимость доставки', ' ', _constants_index__WEBPACK_IMPORTED_MODULE_4__/* .ROUBLE */ .$y]
        })]
      })]
    })
  });
}
const getServerSideProps = async ctx => {
  const id = ctx.params.orderId;
  const data = await _models_newOrder__WEBPACK_IMPORTED_MODULE_5__/* ["default"].findById */ .Z.findById(id).select('-__v');
  const orderJSON = JSON.stringify(data);
  return {
    props: {
      orderJSON
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,2246,1612], () => (__webpack_exec__(1209)));
module.exports = __webpack_exports__;

})();