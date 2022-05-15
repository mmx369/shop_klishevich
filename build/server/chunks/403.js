"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ dbApi)
/* harmony export */ });
/* harmony import */ var _models_shopFaq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2119);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1243);
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(703);




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

const dbApi = {
  fetchTypesCount,
  fetchCountries,
  getSingleProductById,
  getFaqList
};

/***/ }),

/***/ 703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ dbConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null
  };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    };
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set('bufferTimeoutMS', 30000);
    cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then(mongoose => {
      console.log('Connected to MongoDB');
      return mongoose;
    }).catch(err => {
      console.log('Error on start: ' + err.stack);
      throw new Error("Сan't connect to database");
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/***/ }),

/***/ 2119:
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

/***/ 1243:
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