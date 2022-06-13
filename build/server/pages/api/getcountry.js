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

/***/ 2793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ country)
});

// EXTERNAL MODULE: ./src/lib/getAsString.ts
var getAsString = __webpack_require__(8168);
// EXTERNAL MODULE: ./src/db/dbApi.ts
var dbApi = __webpack_require__(701);
;// CONCATENATED MODULE: ./src/lib/getData.ts


async function getTypesCount(productTypes) {
  const data = await dbApi/* dbApi.fetchTypesCount */.B.fetchTypesCount(productTypes);
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
  const countries = await dbApi/* dbApi.fetchCountries */.B.fetchCountries(productType);
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
var __webpack_exports__ = __webpack_require__.X(0, [4903,3699], () => (__webpack_exec__(2793)));
module.exports = __webpack_exports__;

})();