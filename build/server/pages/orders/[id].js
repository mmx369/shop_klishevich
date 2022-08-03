"use strict";
(() => {
var exports = {};
exports.id = 3750;
exports.ids = [3750];
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

/***/ 4844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderFinished),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1612);
/* harmony import */ var _models_newOrder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(894);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(() => (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.createStyles)({
  root: {
    marginTop: '50px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btn: {
    margin: '0 auto',
    display: 'block'
  }
}));
function OrderFinished({
  orderNumber,
  paymentAmount
}) {
  const classes = useStyles();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const handleCreatePayment = async (paymentAmount, orderId) => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${"https://klishevich.ru"}/api/createpayment`, {
        paymentAmount,
        orderId
      });

      if (false) {}
    } catch (err) {
      throw new Error(`Something went wrong try later`);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: classes.root,
      "data-testid": "orderSuccessPage",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        variant: "subtitle1",
        children: "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0441\u0435\u0439\u0447\u0430\u0441 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439. \u0415\u0441\u043B\u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0438\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0442\u043E \u0434\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C \u043A\u043E\u0433\u0434\u0430 \u0441 \u0412\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0434\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        variant: "subtitle1",
        children: ["\u041D\u043E\u043C\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430:", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          style: {
            color: 'Highlight'
          },
          children: orderNumber
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        variant: "subtitle1",
        children: ["\u0415\u0441\u043B\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u043A\u0430\u043A\u0438\u0435-\u0442\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043A\u0430\u0441\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0412\u0430\u0448\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443:", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          style: {
            color: 'Highlight'
          },
          children: "+7-968-429-62-04"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        variant: "subtitle1",
        children: ["\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0412\u0430\u0448\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          href: "/profile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("strong", {
              children: "\u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435"
            }), "."]
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {
      className: classes.btn,
      variant: "outlined",
      onClick: () => handleCreatePayment(paymentAmount, orderNumber),
      children: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439"
    })]
  });
}
const getServerSideProps = async ctx => {
  const id = ctx.params.id;
  const data = await _models_newOrder__WEBPACK_IMPORTED_MODULE_7__/* ["default"].findById */ .Z.findById(id).select('-__v');

  if (!(data !== null && data !== void 0 && data.totalPrice) || !(data !== null && data !== void 0 && data.shippingPrice)) {
    throw new Error('Что-то пошло не так попробуйте позже');
  }

  const paymentAmount = (data === null || data === void 0 ? void 0 : data.totalPrice) + (data === null || data === void 0 ? void 0 : data.shippingPrice);
  const orderNumber = id === null || id === void 0 ? void 0 : id.slice(-6);
  return {
    props: {
      orderNumber,
      paymentAmount
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
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,2246,1612], () => (__webpack_exec__(4844)));
module.exports = __webpack_exports__;

})();