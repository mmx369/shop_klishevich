"use strict";
(() => {
var exports = {};
exports.id = 8178;
exports.ids = [8178];
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

/***/ 9180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4903);
/* harmony import */ var _models_newOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5444);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1535);




async function handler(req, res) {
  await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* .dbConnect */ .C)();
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы не авторизованы'
    });
    return;
  }

  if (session.role !== _types_ERole__WEBPACK_IMPORTED_MODULE_3__/* .ERole.Admin */ .S.Admin) {
    res.send({
      error: 'Вы должны быть администратором'
    });
    return;
  }

  if (req.method === 'PUT') {
    try {
      const {
        id,
        status
      } = req.body;
      const newStatusInfo = await _models_newOrder__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
        status
      }, {
        new: true
      });
      return res.json(newStatusInfo);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
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
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(9180)));
module.exports = __webpack_exports__;

})();