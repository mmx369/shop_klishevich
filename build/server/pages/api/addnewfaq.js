"use strict";
(() => {
var exports = {};
exports.id = 4345;
exports.ids = [4345];
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

/***/ 8557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const faq = new Schema({
  answer: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  question: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  date: Date
}); // @ts-ignore
//avoid OverwriteModelError

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const Faq = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Faq', faq);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faq);

/***/ }),

/***/ 2996:
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
/* harmony import */ var _models_shopFaq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8557);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1535);





async function handler(req, res) {
  await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы не авторизованы'
    });
    return;
  }

  if (session.role !== _types_ERole__WEBPACK_IMPORTED_MODULE_4__/* .ERole.Admin */ .S.Admin) {
    res.send({
      error: 'Вы должны быть администратором '
    });
    return;
  }

  if (req.method === 'POST') {
    let schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      question: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(5).max(1000).required(),
      answer: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(3).max(1000).required()
    });

    try {
      const isValid = await schema.isValid(req.body);

      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`
        });
      }

      const {
        answer,
        question
      } = req.body;
      const newFaq = new _models_shopFaq__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
        question,
        answer,
        date: new Date()
      });
      const response = await newFaq.save();
      return res.status(201).json({
        message: 'Запись добавлена',
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
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(2996)));
module.exports = __webpack_exports__;

})();