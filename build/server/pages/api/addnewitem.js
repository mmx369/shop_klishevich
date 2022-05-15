"use strict";
(() => {
var exports = {};
exports.id = 6537;
exports.ids = [6537];
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

/***/ 8430:
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
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2235);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1535);





async function handler(req, res) {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы'
    });
    return;
  }

  if (session.role !== _types_ERole__WEBPACK_IMPORTED_MODULE_4__/* .ERole.Admin */ .S.Admin) {
    res.send({
      error: 'Вы должны быть администратором'
    });
    return;
  }

  await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();

  if (req.method === 'POST') {
    let schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      nameOfGoods: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().min(5).max(100),
      amountOfGoods: yup__WEBPACK_IMPORTED_MODULE_1__.number().required().min(0),
      priceOfGoods: yup__WEBPACK_IMPORTED_MODULE_1__.number().required().min(0),
      catalogNumber: yup__WEBPACK_IMPORTED_MODULE_1__.string().max(6),
      imageUrl: yup__WEBPACK_IMPORTED_MODULE_1__.array().of(yup__WEBPACK_IMPORTED_MODULE_1__.string().required()),
      country: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().min(2).max(100),
      category: yup__WEBPACK_IMPORTED_MODULE_1__.string().required().min(2).max(100)
    });

    try {
      const isValid = await schema.isValid(req.body);

      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`
        });
      }

      const {
        nameOfGoods,
        amountOfGoods,
        priceOfGoods,
        catalogNumber,
        imageUrl,
        country,
        category
      } = req.body;
      const findItem = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findOne */ .Z.findOne({
        nameOfGoods
      });

      if (findItem) {
        return res.status(400).send({
          message: `${nameOfGoods} уже есть в магазине. Название товара должно быть уникальным`
        });
      }

      const newItem = new _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
        nameOfGoods,
        amountOfGoods,
        priceOfGoods,
        catalogNumber,
        imageUrl,
        country,
        category,
        date: new Date()
      });
      const response = await newItem.save();
      return res.status(201).json({
        message: 'Товар успешно добавлен',
        item: response.toJSON()
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  } else {
    res.status(422).send('Request method not supported');
  }
}

/***/ }),

/***/ 1535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ERole)
/* harmony export */ });
let ERole;

(function (ERole) {
  ERole["Admin"] = "admin";
  ERole["Client"] = "client";
})(ERole || (ERole = {}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(8430)));
module.exports = __webpack_exports__;

})();