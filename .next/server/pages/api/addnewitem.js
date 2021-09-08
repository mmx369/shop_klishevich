(function() {
var exports = {};
exports.id = 6537;
exports.ids = [6537];
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

/***/ 1988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3375);
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3463);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2244);





const handler = async (req, res) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.getSession)({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы'
    });
    return;
  }

  if (session.role !== _types_ERole__WEBPACK_IMPORTED_MODULE_3__/* .ERole.Admin */ .S.Admin) {
    res.send({
      error: 'Вы должны быть администратором'
    });
    return;
  }

  if (req.method === 'POST') {
    try {
      const {
        nameOfGoods,
        amountOfGoods,
        priceOfGoods,
        catalogNumber,
        imageUrl,
        country,
        category
      } = req.body;
      const findItem = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_0__/* .default.findOne */ .Z.findOne({
        nameOfGoods: nameOfGoods
      });

      if (findItem) {
        return res.status(400).send({
          message: `${nameOfGoods} уже есть в магазине. Название товара должно быть уникальным`
        });
      }

      const newItem = new _models_shopGoods__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z({
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
var __webpack_exports__ = (__webpack_exec__(1988));
module.exports = __webpack_exports__;

})();