"use strict";
(() => {
var exports = {};
exports.id = 7845;
exports.ids = [7845];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 5444:
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

/***/ 7549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./src/db/dbConnect.ts
var dbConnect = __webpack_require__(4903);
// EXTERNAL MODULE: ./src/models/newOrder.ts
var newOrder = __webpack_require__(5444);
;// CONCATENATED MODULE: ./src/pages/api/sendgrid.ts




async function handler(req, res) {
  const session = await (0,client_.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: '???? ???????????? ???????? ????????????????????????.'
    });
    return;
  }

  if (req.method === 'POST') {
    try {
      await (0,dbConnect/* dbConnect */.C)();
      const currentOrder = await newOrder/* default.findById */.Z.findById(req.body.orderId).select('order totalPrice shippingPrice _id');

      if (!currentOrder) {
        return res.status(500).send('Order not found');
      }

      const productList = currentOrder.order;

      const orderNumber = currentOrder._id.toString().slice(-6);

      const orderList = order => {
        return order.map(el => '<li>' + el.nameOfGoods + ' ' + el.amountOfGoods.toLocaleString('ru') + ' ????. ' + el.priceOfGoods.toLocaleString('ru') + ' ??????. ???? ?????????? ' + '???? ?????????? ' + (el.amountOfGoods * el.priceOfGoods).toLocaleString('ru') + ' ??????.' + '</li>');
      };

      mail_default().setApiKey(process.env.SENDGRID_API_KEY);
      await mail_default().send({
        to: [session.user.email, 'maksim@klishevich.com'],
        from: 'maksim@klishevich.com',
        subject: '?????? ?????????? ???? ?????????? ?????????????????? ?? ?????????????????????? ?????????????? ????????????????',
        html: `<!DOCTYPE html>
          <html lang="ru">
          <head>
          <meta charset="utf-8">
          <title>'?????? ?????????? ???? ?????????? ?????????????????? ?? ??????????????????????'</title>
          <meta name="description" content='???????????? ????????????'>
          <meta name="author" content="?????????? ?? ????????????????-????????????????">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>??????????????????(-????),<br/> ${req.body.fullname}!</h3>
              <p>???? ???????????????? ?????? ???????????? ?????? ?????? ???????????????? ?????????? ???? ?????????? ?????????????????? ?? ??????????????????????.<br/>
                ?????? ?????????? ?????????????? ????????????????, ?? ?????????????????? ?????????? ?? ???????? ???????????????? ?????? ???????????????? ?????? ?????????????????? ?????????????? ???????????? ?? ????????????????.
              </p>
              <p>?????? ???????????? ??????????????:</p>
              <ul>
              ${orderList(productList)}
              </ul>
              <p><h4>?????????? ?????????????????? ????????????: ${currentOrder.totalPrice.toLocaleString('ru')} ??????.</h4></p>
              <p><h4>?????????????????? ???????????????? ${currentOrder.shippingPrice.toLocaleString('ru')} ??????.</h4></p>
              <p><h4>?????????? ?????????? ?? ???????????? ${(currentOrder.shippingPrice + currentOrder.totalPrice).toLocaleString('ru')} ??????.</h4></p>
              
              <p>?????????? ???????????? ????????????: <strong>${orderNumber}</strong></p>

              <p>?? ??????????????????, <br/>???????????? ???????????????? <br/>
              ??????. +7-968-429-62-04 </p>
              </div>
      </body>
          </html>
          `
      }).then(() => {
        console.log('Email has been sent');
        return res.json('Email has been sent');
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  } else {
    res.status(422).send('Request method not supported');
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(7549)));
module.exports = __webpack_exports__;

})();