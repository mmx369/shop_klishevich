"use strict";
(() => {
var exports = {};
exports.id = 6266;
exports.ids = [6266];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getAsString)
/* harmony export */ });
function getAsString(value) {
  if (typeof value === 'undefined') {
    return '';
  }

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

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

/***/ 6216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shop)
});

// EXTERNAL MODULE: ./src/db/dbConnect.ts
var dbConnect = __webpack_require__(4903);
// EXTERNAL MODULE: ./src/models/shopGoods.ts
var shopGoods = __webpack_require__(2235);
// EXTERNAL MODULE: ./src/lib/getAsString.ts
var getAsString = __webpack_require__(8168);
;// CONCATENATED MODULE: ./src/lib/getPaginatedItems.ts



async function getPaginatedItem(query) {
  await (0,dbConnect/* dbConnect */.C)();
  const page = getValueNumber(query.page) || 1;
  const rowsPerPage = 4;
  const offset = (page - 1) * rowsPerPage;
  const dbParams = {
    type: getValueStr(query.type),
    country: getValueStr(query.country),
    minPrice: getValueNumber(query.minPrice),
    maxPrice: getValueNumber(query.maxPrice)
  };
  const findQuery = {};

  if (dbParams.type) {
    findQuery.category = dbParams.type;
  }

  if (dbParams.country) {
    findQuery.country = dbParams.country;
  }

  if (dbParams.minPrice && dbParams.maxPrice) {
    findQuery.priceOfGoods = {
      $gte: dbParams.minPrice,
      $lte: dbParams.maxPrice
    };
  } else if (dbParams.minPrice) {
    findQuery.priceOfGoods = {
      $gte: dbParams.minPrice
    };
  } else if (dbParams.maxPrice) {
    findQuery.priceOfGoods = {
      $lte: dbParams.maxPrice
    };
  }

  const resultPromise = shopGoods/* default.find */.Z.find(findQuery).skip(offset).limit(rowsPerPage).select('-__v -date');
  const resultCountPromise = shopGoods/* default.find */.Z.find(findQuery).count();
  const [result, resultCount] = await Promise.all([resultPromise, resultCountPromise]);
  const totalPages = Math.ceil(resultCount / rowsPerPage);
  return {
    goods: result,
    totalPages: totalPages
  };
}

function getValueNumber(value) {
  const str = getValueStr(value);
  const number = parseInt(str);
  return isNaN(number) ? null : number;
}

function getValueStr(value) {
  const str = (0,getAsString/* getAsString */.X)(value);
  return !str || str.toLowerCase() === 'all' ? null : str;
}
;// CONCATENATED MODULE: ./src/pages/api/shop.ts

async function shop(req, res) {
  const shop = await getPaginatedItem(req.query);
  res.json(shop);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(6216)));
module.exports = __webpack_exports__;

})();