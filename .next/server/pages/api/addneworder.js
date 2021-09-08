(function() {
var exports = {};
exports.id = 1744;
exports.ids = [1744];
exports.modules = {

/***/ 3463:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = handler => async (req, res) => {
  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {
    // Use current db connection
    return handler(req, res);
  } // Use new db connection
  //@ts-ignore


  await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  return handler(req, res);
};

/* harmony default export */ __webpack_exports__["Z"] = (connectDB);

/***/ }),

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

/***/ 3375:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
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
}); // to avoid overwrite errror???
// @ts-ignore

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const ShopGoods = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ShopGoods', shopGoods);
/* harmony default export */ __webpack_exports__["Z"] = (ShopGoods);

/***/ }),

/***/ 7668:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3463);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_newOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5646);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3375);





async function decreaseAmountOfGoods(arr) {
  const goodsOutOfStock = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const [id, amountOfGoods] = el;
    const goods = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__/* .default.findById */ .Z.findById(id);
    console.log('goods', goods);

    if (goods.amountOfGoods - amountOfGoods < 0) {
      goodsOutOfStock.push(goods);
    } else {
      await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__/* .default.findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
        amountOfGoods: goods.amountOfGoods - amountOfGoods
      });
    }
  }

  return goodsOutOfStock;
}

const handler = async (req, res) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'You must be authorized'
    });
    return;
  }

  if (req.method === 'POST') {
    try {
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
      const checkAmount = await decreaseAmountOfGoods(goodsFromOrders);
      const newOrder = new _models_newOrder__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z({
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
      const response = await newOrder.save();

      if (checkAmount.length != 0) {
        return res.status(201).json({
          message: 'Отдельные позиции отсутствуют на складе',
          order: response.toJSON(),
          outOfStock: checkAmount
        });
      } else {
        return res.status(201).json({
          message: 'Заказ успешно оформлен',
          order: response.toJSON()
        });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  } else {
    res.status(422).send('Request method not supported');
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(handler));

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7668));
module.exports = __webpack_exports__;

})();