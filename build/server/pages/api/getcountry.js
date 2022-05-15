"use strict";
(() => {
var exports = {};
exports.id = 4441;
exports.ids = [4441];
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

/***/ }),

/***/ 620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ country)
});

// EXTERNAL MODULE: ./src/lib/getAsString.ts
var getAsString = __webpack_require__(8168);
// EXTERNAL MODULE: ./src/models/shopFaq.ts
var shopFaq = __webpack_require__(8557);
// EXTERNAL MODULE: ./src/models/shopGoods.ts
var shopGoods = __webpack_require__(2235);
// EXTERNAL MODULE: ./src/db/dbConnect.ts
var dbConnect = __webpack_require__(4903);
;// CONCATENATED MODULE: ./src/db/dbApi.ts




const fetchTypesCount = async productTypes => {
  await (0,dbConnect/* dbConnect */.C)();
  const promises = productTypes.map(type => shopGoods/* default.countDocuments */.Z.countDocuments({
    category: type
  }));
  return await Promise.all(promises);
};

const fetchCountries = async productType => {
  await (0,dbConnect/* dbConnect */.C)();
  const countries = await shopGoods/* default.find */.Z.find({
    category: productType
  }).select('country -_id');
  return countries;
};

const getSingleProductById = async productId => {
  await (0,dbConnect/* dbConnect */.C)();
  const product = await shopGoods/* default.findById */.Z.findById(productId).select('-date -__v');
  return product;
};

const getFaqList = async () => {
  await (0,dbConnect/* dbConnect */.C)();
  const faqList = await shopFaq/* default.find */.Z.find().select('-date -__v');
  return faqList;
};

const dbApi = {
  fetchTypesCount,
  fetchCountries,
  getSingleProductById,
  getFaqList
};
;// CONCATENATED MODULE: ./src/lib/getData.ts


async function getTypesCount(productTypes) {
  const data = await dbApi.fetchTypesCount(productTypes);
  const productTypesCount = [];
  productTypes.forEach((product, i) => {
    productTypesCount.push({
      type: product,
      count: data[i]
    });
  });
  return productTypesCount;
}

async function getCountry(productType) {
  const countries = await dbApi.fetchCountries(productType);
  const res = countries.reduce((acc, curr) => {
    const currCountry = curr.country;

    if (acc[currCountry]) {
      acc[currCountry] += 1;
    } else {
      acc[currCountry] = 1;
    }

    return acc;
  }, {});
  const listOfCountriesCount = [];

  for (let [key, value] of Object.entries(res)) {
    listOfCountriesCount.push({
      country: key,
      count: value
    });
  }

  return listOfCountriesCount;
}

const getData = {
  getTypesCount,
  getCountry
};
;// CONCATENATED MODULE: ./src/pages/api/getcountry.ts


async function country(req, res) {
  const type = (0,getAsString/* getAsString */.X)(req.query.type);
  const country = await getData.getCountry(type);
  res.json(country);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(620)));
module.exports = __webpack_exports__;

})();