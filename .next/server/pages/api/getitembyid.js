(function() {
var exports = {};
exports.id = 1281;
exports.ids = [1281];
exports.modules = {

/***/ 6331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ connectDB; }
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

console.log('MONGO_URI!!!!', process.env.MONGODB_URI);
const connectDB = async () => {
  var _mongoose$connections;

  if (!((_mongoose$connections = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0])) !== null && _mongoose$connections !== void 0 && _mongoose$connections.readyState)) {
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }
};

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

/***/ 3942:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getItemById; }
/* harmony export */ });
/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6331);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3375);


async function getItemById(req, res) {
  await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u)();
  const item = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* .default.findById */ .Z.findById(req.query.id).exec();
  return res.json(item);
}

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3942));
module.exports = __webpack_exports__;

})();