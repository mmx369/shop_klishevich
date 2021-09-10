(function() {
var exports = {};
exports.id = 2610;
exports.ids = [2610];
exports.modules = {

/***/ 5646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const newOrder = new Schema({
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
}); // to avoid overwrite errror???
// @ts-ignore

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const NewOrder = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('NewOrder', newOrder);
/* harmony default export */ __webpack_exports__["Z"] = (NewOrder);

/***/ }),

/***/ 5789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ItemsDetails; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/layout.tsx + 3 modules
var layout = __webpack_require__(6013);
// EXTERNAL MODULE: ./models/newOrder.ts
var newOrder = __webpack_require__(5646);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(2302);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(9613);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(8222);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(6847);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(7394);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(5117);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(2663);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(6856);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(9525);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(6083);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js
var InputLabel = __webpack_require__(6394);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Input/Input.js
var Input = __webpack_require__(8799);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(6445);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 12 modules
var Select = __webpack_require__(6527);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/DialogSelect.tsx















const useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));
function DialogSelect({
  currStatus,
  currId
}) {
  const classes = useStyles();
  const router = (0,router_.useRouter)();
  const [open, setOpen] = external_react_default().useState(false);
  const [status, setStatus] = external_react_default().useState(currStatus);

  const handleChange = event => {
    setStatus(String(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setStatus(currStatus);
  };

  const handleSaveChange = async () => {
    console.log(status);
    const newStatus = {
      id: currId,
      status
    };
    const res = await external_axios_default().put(`${"https://shop.klishevich.ru"}/api/changestatusorder`, newStatus);
    setOpen(false);
    setStatus(currStatus);
    router.reload();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      onClick: handleClickOpen,
      children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dialog/* default */.Z, {
      open: open,
      onClose: handleClose,
      children: [/*#__PURE__*/jsx_runtime_.jsx(DialogTitle/* default */.Z, {
        children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430"
      }), /*#__PURE__*/jsx_runtime_.jsx(DialogContent/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx("form", {
          className: classes.container,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormControl/* default */.Z, {
            className: classes.formControl,
            children: [/*#__PURE__*/jsx_runtime_.jsx(InputLabel/* default */.Z, {
              htmlFor: "order-status",
              children: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Select/* default */.Z, {
              native: true,
              value: status,
              onChange: handleChange,
              input: /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                defaultValue: status
              }),
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                "aria-label": "\u041D\u0435\u0442",
                value: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: 'open',
                children: "\u041E\u0442\u043A\u0440\u044B\u0442"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: 'paid',
                children: "\u041E\u043F\u043B\u0430\u0447\u0435\u043D"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: 'shipped',
                children: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: 'received',
                children: "\u041F\u043E\u043B\u0443\u0447\u0435\u043D"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: 'closed',
                children: "\u0417\u0430\u043A\u0440\u044B\u0442"
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DialogActions/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          onClick: handleClose,
          color: "primary",
          children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          onClick: handleSaveChange,
          color: "primary",
          children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/admin/orders/[id].tsx













const _id_useStyles = (0,core_.makeStyles)(theme => (0,core_.createStyles)({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto'
  },
  img: {
    width: '100%'
  },
  table: {
    minWidth: 150
  }
}));
function ItemsDetails({
  order
}) {
  const classes = _id_useStyles();
  const orderToJSON = JSON.parse(order);
  const newDate = new Date(orderToJSON.date).toLocaleDateString();

  const currentStatus = status => {
    if (status === 'open') return 'Заказ открыт';
    if (status === 'paid') return 'Заказ оплачен';
    if (status === 'shipped') return 'Заказ отправлен';
    if (status === 'received') return 'Заказ получен';
    if (status === 'closed') return 'Заказ закрыт';
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      title: "",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
          variant: "h6",
          children: ["\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F:", newDate]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
          variant: "h6",
          children: ["\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441:", ` ${currentStatus(orderToJSON.status)}`]
        }), /*#__PURE__*/jsx_runtime_.jsx(DialogSelect, {
          currStatus: orderToJSON.status,
          currId: orderToJSON._id
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h6",
          children: "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            border: 'solid 1px',
            padding: '5px'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            variant: "body2",
            children: `${orderToJSON.secondName} ${orderToJSON.firstName} ${orderToJSON.fatherName ? orderToJSON.fatherName : ''}`
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            variant: "body2",
            children: `${orderToJSON.address}`
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            variant: "body2",
            children: `${orderToJSON.region ? orderToJSON.region : ''} ${orderToJSON.city ? orderToJSON.city : ''}`
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            variant: "body2",
            children: `${orderToJSON.zip}`
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h6",
          children: "\u0417\u0430\u043A\u0430\u0437:"
        }), /*#__PURE__*/jsx_runtime_.jsx(TableContainer/* default */.Z, {
          component: core_.Paper,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Table/* default */.Z, {
            className: classes.table,
            size: "small",
            "aria-label": "a dense table",
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableHead/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  children: "\u0422\u043E\u0432\u0430\u0440"
                }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  align: "right",
                  children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"
                }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  align: "right",
                  children: "\u0426\u0435\u043D\u0430"
                }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  align: "right",
                  children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(TableBody/* default */.Z, {
              children: orderToJSON.order.map(el => /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  component: "th",
                  scope: "row",
                  children: el.nameOfGoods
                }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  align: "right",
                  children: el.amountOfGoods
                }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  align: "right",
                  children: el.priceOfGoods
                }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                  align: "right",
                  children: el.priceOfGoods * el.amountOfGoods
                })]
              }, el._id))
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
          variant: "subtitle2",
          children: ["\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ", orderToJSON.totalPrice, " \u0440\u0443\u0431\u043B\u0435\u0439"]
        })]
      })]
    })
  });
}
const getServerSideProps = async ctx => {
  const id = ctx.params.id;
  const data = await newOrder/* default.findById */.Z.findById(id).exec();
  const order = JSON.stringify(data);
  return {
    props: {
      order
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

/***/ 3857:
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [8689,2956,2004,2318,1344,9569,8550,170,6527,5464,2692,4201,1865,3157], function() { return __webpack_exec__(5789); });
module.exports = __webpack_exports__;

})();