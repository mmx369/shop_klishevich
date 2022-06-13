"use strict";
exports.id = 6841;
exports.ids = [6841];
exports.modules = {

/***/ 6841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ dbApi)
});

// EXTERNAL MODULE: ./src/models/shopFaq.ts
var shopFaq = __webpack_require__(2119);
// EXTERNAL MODULE: ./src/models/shopGoods.ts
var shopGoods = __webpack_require__(1243);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/db/dbConnect.ts

const MONGODB_URI = "mongodb+srv://max:1488@cluster0.0ngzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
    external_mongoose_default().set('bufferTimeoutMS', 30000);
    cached.promise = external_mongoose_default().connect(MONGODB_URI, opts).then(mongoose => {
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
;// CONCATENATED MODULE: ./src/db/dbApi.ts




const fetchTypesCount = async productTypes => {
  await dbConnect();
  const promises = productTypes.map(type => shopGoods/* default.countDocuments */.Z.countDocuments({
    category: type
  }));
  return await Promise.all(promises);
};

const fetchCountries = async productType => {
  await dbConnect();
  const countries = await shopGoods/* default.find */.Z.find({
    category: productType
  }).select('country -_id');
  return countries;
};

const getSingleProductById = async productId => {
  await dbConnect();
  const product = await shopGoods/* default.findById */.Z.findById(productId).select('-date -__v');
  return product;
};

const getFaqList = async () => {
  await dbConnect();
  const faqList = await shopFaq/* default.find */.Z.find().select('-date -__v');
  return faqList;
};

const getPaginationData = async (findQuery, offset, rowsPerPage) => {
  await dbConnect();
  const resultPromise = shopGoods/* default.find */.Z.find(findQuery).skip(offset).limit(rowsPerPage).select('-__v -date');
  const resultCountPromise = shopGoods/* default.find */.Z.find(findQuery).count();
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