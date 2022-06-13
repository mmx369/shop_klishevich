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

/***/ 6216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shop)
});

// EXTERNAL MODULE: ./src/db/dbApi.ts
var dbApi = __webpack_require__(701);
// EXTERNAL MODULE: ./src/lib/getAsString.ts
var getAsString = __webpack_require__(8168);
;// CONCATENATED MODULE: ./src/lib/getPaginatedItems.ts


async function getPaginatedItem(query) {
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

  const {
    result,
    resultCount
  } = await dbApi/* dbApi.getPaginationData */.B.getPaginationData(findQuery, offset, rowsPerPage);
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
var __webpack_exports__ = __webpack_require__.X(0, [4903,3699], () => (__webpack_exec__(6216)));
module.exports = __webpack_exports__;

})();