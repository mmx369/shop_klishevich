"use strict";
(() => {
var exports = {};
exports.id = 1744;
exports.ids = [1744];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

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

/***/ 2235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const shopGoods = new Schema({
  nameOfGoods: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  amountOfGoods: Number,
  priceOfGoods: Number,
  catalogNumber: String,
  country: String,
  category: String,
  imageUrl: [String],
  date: Date
}); //@ts-ignore
//avoid OverwriteModelError

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const ShopGoods = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ShopGoods', shopGoods);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopGoods);

/***/ }),

/***/ 3629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4903);
/* harmony import */ var _models_newOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5444);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2235);






async function checkAmountOfProducts(products) {
  const productsOutOfStock = [];

  for (let product of products) {
    const [id, amount] = product;
    const currentProductData = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById(id).select('amountOfGoods');

    if (currentProductData.amountOfGoods - amount < 0) {
      productsOutOfStock.push(currentProductData);
    }
  }

  return productsOutOfStock;
}

async function decreaseProducts(products) {
  let result = true;

  for (let product of products) {
    const [id, amount] = product;
    const currentProductData = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById(id).select('amountOfGoods');

    if (currentProductData.amountOfGoods - amount >= 0) {
      await _models_shopGoods__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
        amountOfGoods: currentProductData.amountOfGoods - amount
      });
    } else {
      result = false;
    }
  }

  return result;
}

async function handler(req, res) {
  await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы'
    });
    return;
  }

  if (req.method === 'POST') {
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    let schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      firstName: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().min(3).max(100),
      secondName: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().max(100),
      fatherName: yup__WEBPACK_IMPORTED_MODULE_1__.string().max(100),
      zip: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().max(10),
      country: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().max(100),
      region: yup__WEBPACK_IMPORTED_MODULE_1__.string().max(100),
      city: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().max(100),
      address: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().max(100),
      phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().matches(phoneRegExp).required().min(10).max(15),
      comments: yup__WEBPACK_IMPORTED_MODULE_1__.string().max(100),
      shippingPrice: yup__WEBPACK_IMPORTED_MODULE_1__.number().required()
    });

    try {
      const isValid = await schema.isValid(req.body);

      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`
        });
      }

      const {
        firstName,
        secondName,
        fatherName,
        zip,
        country,
        region,
        city,
        address,
        phone,
        comments,
        order,
        totalPrice,
        shippingPrice
      } = req.body;
      const goodsFromOrders = order.map(el => [el._id, el.amountOfGoods]);
      const checkAmount = await checkAmountOfProducts(goodsFromOrders);

      if (checkAmount.length != 0) {
        return res.status(201).json({
          message: 'Отдельные позиции отсутствуют на складе',
          outOfStock: checkAmount
        });
      }

      const newOrder = new _models_newOrder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
        email: session.user.email,
        firstName,
        secondName,
        fatherName,
        zip,
        country,
        region,
        city,
        address,
        phone,
        comments,
        order,
        totalPrice,
        shippingPrice,
        date: new Date()
      });
      const decreaseStatus = await decreaseProducts(goodsFromOrders);

      if (decreaseStatus) {
        const response = await newOrder.save();
        return res.status(201).json({
          message: 'Заказ успешно оформлен',
          order: response.toJSON()
        });
      } else {
        return res.status(201).json({
          message: 'Что-то пошло не так попробуйте позднее'
        });
      }
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
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(3629)));
module.exports = __webpack_exports__;

})();