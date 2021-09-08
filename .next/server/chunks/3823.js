exports.id = 3823;
exports.ids = [3823];
exports.modules = {

/***/ 3823:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ getPaginatedItem; }
/* harmony export */ });
/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6331);
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3375);
/* harmony import */ var _getAsString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6594);



async function getPaginatedItem(query) {
  await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__/* .connectDB */ .u)();
  const page = getValueNumber(query.page) || 1;
  const rowsPerPage = getValueNumber(query.rowsPerPage) || 4;
  const offset = (page - 1) * rowsPerPage;
  const dbParams = {
    type: getValueStr(query.type),
    country: getValueStr(query.country),
    minPrice: getValueNumber(query.minPrice),
    maxPrice: getValueNumber(query.maxPrice)
  };
  console.log('DB Params: ', dbParams);
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

  const resultPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find(findQuery).skip(offset).limit(rowsPerPage);
  const resultCountPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find(findQuery).count();
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
  const str = (0,_getAsString__WEBPACK_IMPORTED_MODULE_2__/* .getAsString */ .X)(value);
  return !str || str.toLowerCase() === 'all' ? null : str;
}

/***/ })

};
;