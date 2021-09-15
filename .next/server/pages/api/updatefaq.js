(function() {
var exports = {};
exports.id = 5860;
exports.ids = [5860];
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

/***/ 8302:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
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
}); // to avoid overwrite errror???
// @ts-ignore

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const Faq = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Faq', faq);
/* harmony default export */ __webpack_exports__["Z"] = (Faq);

/***/ }),

/***/ 5880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3463);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2244);
/* harmony import */ var _models_shopFaq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8302);





const handler = async (req, res) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы не авторизованы'
    });
    return;
  }

  if (session.role !== _types_ERole__WEBPACK_IMPORTED_MODULE_2__/* .ERole.Admin */ .S.Admin) {
    res.send({
      error: 'Вы должны быть администратором'
    });
    return;
  }

  if (req.method === 'PUT') {
    try {
      const {
        id,
        question,
        answer
      } = req.body;
      console.log(id, question, answer);

      if (!question && !answer) {
        return res.status(400).send({
          message: 'Должно быть заполнено хотя бы одно поле'
        });
      } else if (!question) {
        const updateFaqInfo = await _models_shopFaq__WEBPACK_IMPORTED_MODULE_3__/* .default.findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
          answer
        }, {
          new: true
        });
        return res.json(updateFaqInfo);
      } else if (!answer) {
        const updateFaqInfo = await _models_shopFaq__WEBPACK_IMPORTED_MODULE_3__/* .default.findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
          question
        }, {
          new: true
        });
        return res.json(updateFaqInfo);
      } else {
        const updateFaqInfo = await _models_shopFaq__WEBPACK_IMPORTED_MODULE_3__/* .default.findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
          question,
          answer
        }, {
          new: true
        });
        return res.json(updateFaqInfo);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_db_connectDb__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(handler));

/***/ }),

/***/ 2244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ ERole; }
/* harmony export */ });
let ERole;

(function (ERole) {
  ERole["Admin"] = "admin";
  ERole["Client"] = "client";
})(ERole || (ERole = {}));

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
var __webpack_exports__ = (__webpack_exec__(5880));
module.exports = __webpack_exports__;

})();