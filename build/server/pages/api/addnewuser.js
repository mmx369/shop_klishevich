"use strict";
(() => {
var exports = {};
exports.id = 7081;
exports.ids = [7081];
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

/***/ 1376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1535);


const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const shopUser = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: _types_ERole__WEBPACK_IMPORTED_MODULE_1__/* .ERole.Client */ .S.Client
  },
  name: String,
  date: Date,
  passwordHash: String,
  orders: [{
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
    ref: 'ShopOrders'
  }],
  cart: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'ShopGoods',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
}); //@ts-ignore
//avoid OverwriteModelError

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const ShopUser = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ShopUser', shopUser);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopUser);

/***/ }),

/***/ 8021:
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
/* harmony import */ var _models_shopUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1376);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1535);





async function handler(req, res) {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы.'
    });
    return;
  }

  if (session.role !== _types_ERole__WEBPACK_IMPORTED_MODULE_4__/* .ERole.Admin */ .S.Admin) {
    res.send({
      error: 'Вы должны быть администратором.'
    });
    return;
  }

  await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();

  if (req.method === 'POST') {
    let schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      username: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(3).max(40).required(),
      email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
      role: yup__WEBPACK_IMPORTED_MODULE_1__.string().required()
    });

    try {
      const isValid = await schema.isValid(req.body);

      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`
        });
      }

      const {
        username,
        email,
        role
      } = req.body;
      const findUser = await _models_shopUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findOne */ .Z.findOne({
        email
      });

      if (findUser) {
        return res.status(400).send({
          message: `Пользователь с ${email} уже существует.`
        });
      }

      const newShopUser = new _models_shopUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
        name: username,
        email,
        role,
        date: new Date()
      });
      const response = await newShopUser.save();
      return res.status(201).json({
        message: 'Новый пользователь добавлен',
        user: response.toJSON()
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
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(8021)));
module.exports = __webpack_exports__;

})();