"use strict";
(() => {
var exports = {};
exports.id = 7526;
exports.ids = [7526];
exports.modules = {

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 1204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@a2seven/yoo-checkout"
const yoo_checkout_namespaceObject = require("@a2seven/yoo-checkout");
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
;// CONCATENATED MODULE: ./src/pages/api/createpayment.ts


async function handler(req, res) {
  const session = await (0,client_.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы не авторизованы'
    });
    return;
  }

  if (req.method === 'POST') {
    const {
      orderId,
      paymentAmount
    } = req.body;
    const checkout = new yoo_checkout_namespaceObject.YooCheckout({
      shopId: process.env.UKASSA_SHOP_ID,
      secretKey: process.env.UKASSA_SECRET_KEY
    });
    const idempotenceKey = orderId;
    const createPayload = {
      amount: {
        value: paymentAmount.toString(),
        currency: 'RUB'
      },
      payment_method_data: {
        type: 'bank_card'
      },
      confirmation: {
        type: 'redirect',
        return_url: 'https://www.klishevich.ru'
      }
    };

    try {
      const payment = await checkout.createPayment(createPayload, idempotenceKey);
      res.status(200).json(payment);
    } catch (error) {
      return res.status(500).send(error.response.data);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1204));
module.exports = __webpack_exports__;

})();