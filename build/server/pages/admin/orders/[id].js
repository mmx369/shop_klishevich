"use strict";
(() => {
var exports = {};
exports.id = 2610;
exports.ids = [2610];
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

/***/ 4931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ItemsDetails),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 5 modules
var layout = __webpack_require__(1612);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ModalSelectStatus.tsx






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
function ModalSelectStatus({
  currStatus,
  currId
}) {
  const router = (0,router_.useRouter)();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    0: status,
    1: setStatus
  } = (0,external_react_.useState)(currStatus);

  const handleChange = event => {
    setStatus(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setStatus(currStatus);
  };

  const handleSaveChange = async () => {
    const newStatus = {
      id: currId,
      status
    };
    await external_axios_default().put(`${"https://klishevich.ru"}/api/changestatusorder`, newStatus);
    setOpen(false);
    setStatus(currStatus);
    router.reload();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
      onClick: handleClickOpen,
      variant: "outlined",
      size: "small",
      children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430"
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Modal, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
        sx: style,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
          container: true,
          direction: "column",
          spacing: 2,
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              style: {
                textAlign: 'center'
              },
              children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
            item: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.FormControl, {
              fullWidth: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.InputLabel, {
                id: "order-status",
                children: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Select, {
                labelId: "order-status",
                id: "order-status-select",
                value: status,
                label: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430",
                onChange: handleChange,
                variant: "standard",
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                  value: 'open',
                  children: "\u041E\u0442\u043A\u0440\u044B\u0442"
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                  value: 'paid',
                  children: "\u041E\u043F\u043B\u0430\u0447\u0435\u043D"
                }), ' ', /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                  value: 'shipped',
                  children: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
                }), ' ', /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                  value: 'recieved',
                  children: "\u041F\u043E\u043B\u0443\u0447\u0435\u043D"
                }), ' ', /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                  value: 'closed',
                  children: "\u0417\u0430\u043A\u0440\u044B\u0442"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
            item: true,
            sx: {
              textAlign: 'center'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
              onClick: handleClose,
              color: "primary",
              variant: "outlined",
              sx: {
                margin: '5px'
              },
              children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
              onClick: handleSaveChange,
              color: "primary",
              variant: "outlined",
              sx: {
                margin: '5px'
              },
              children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
            })]
          })]
        })
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(238);
// EXTERNAL MODULE: ./src/models/newOrder.ts
var newOrder = __webpack_require__(894);
;// CONCATENATED MODULE: ./src/pages/admin/orders/[id].tsx









const useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    marginTop: '50px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));
function ItemsDetails({
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

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
          variant: "h6",
          children: ["\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F: ", newDate]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
          variant: "h6",
          children: ["\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441:", ` ${currentStatus(order.status)}`]
        }), /*#__PURE__*/jsx_runtime_.jsx(ModalSelectStatus, {
          currStatus: order.status,
          currId: order._id
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          variant: "h6",
          children: "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            border: 'solid 1px',
            padding: '5px'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            variant: "body2",
            children: `${order.secondName} ${order.firstName} ${order.fatherName ? order.fatherName : ''}`
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            variant: "body2",
            children: `${order.address}`
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            variant: "body2",
            children: `${order.region ? order.region : ''} ${order.city ? order.city : ''}`
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            variant: "body2",
            children: `${order.zip}`
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          variant: "h6",
          children: "\u0417\u0430\u043A\u0430\u0437:"
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableContainer, {
          component: material_.Paper,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Table, {
            size: "small",
            "aria-label": "a dense table",
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableHead, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  children: "\u0422\u043E\u0432\u0430\u0440"
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  align: "right",
                  children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  align: "right",
                  children: "\u0426\u0435\u043D\u0430"
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  align: "right",
                  children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableBody, {
              children: order.order.map(el => /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  component: "th",
                  scope: "row",
                  children: el.nameOfGoods
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  align: "right",
                  children: el.amountOfGoods
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  align: "right",
                  children: el.priceOfGoods
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  align: "right",
                  children: el.priceOfGoods * el.amountOfGoods
                })]
              }, el._id))
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
          variant: "subtitle2",
          children: ["\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ", order.totalPrice, " ", constants/* ROUBLE */.$y]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
          variant: "subtitle2",
          children: ["C\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ", order.shippingPrice, " ", constants/* ROUBLE */.$y]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
          variant: "subtitle2",
          children: ["\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435:", ' ', order.shippingPrice ? order.shippingPrice + order.totalPrice : 'Не выбрана стоимость доставки', ' ', constants/* ROUBLE */.$y]
        })]
      })]
    })
  });
}
const getServerSideProps = async ctx => {
  const id = ctx.params.id;
  const data = await newOrder/* default.findById */.Z.findById(id).select('-__v');
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,2246,1612], () => (__webpack_exec__(4931)));
module.exports = __webpack_exports__;

})();