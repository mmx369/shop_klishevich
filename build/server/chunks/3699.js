"use strict";
exports.id = 3699;
exports.ids = [3699];
exports.modules = {

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ dbApi)
/* harmony export */ });
/* harmony import */ var _models_shopFaq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8557);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2235);
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4903);




const fetchTypesCount = async productTypes => {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();
  const promises = productTypes.map(type => _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* ["default"].countDocuments */ .Z.countDocuments({
    category: type
  }));
  return await Promise.all(promises);
};

const fetchCountries = async productType => {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();
  const countries = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
    category: productType
  }).select('country -_id');
  return countries;
};

const getSingleProductById = async productId => {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();
  const product = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(productId).select('-date -__v');
  return product;
};

const getFaqList = async () => {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();
  const faqList = await _models_shopFaq__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find().select('-date -__v');
  return faqList;
};

const getPaginationData = async (findQuery, offset, rowsPerPage) => {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* .dbConnect */ .C)();
  const resultPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find(findQuery).skip(offset).limit(rowsPerPage).select('-__v -date');
  const resultCountPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find(findQuery).count();
  const [result, resultCount] = await Promise.all([resultPromise, resultCountPromise]);
  return {
    result,
    resultCount
  };
};

const dbApi = {
  fetchTypesCount,
  fetchCountries,
  getSingleProductById,
  getFaqList,
  getPaginationData
};

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

/***/ })

};
;