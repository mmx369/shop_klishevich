module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/shop.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/getAsString.ts":
/*!*********************************!*\
  !*** ./database/getAsString.ts ***!
  \*********************************/
/*! exports provided: getAsString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsString", function() { return getAsString; });
function getAsString(value) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

/***/ }),

/***/ "./database/getPaginatedItems.ts":
/*!***************************************!*\
  !*** ./database/getPaginatedItems.ts ***!
  \***************************************/
/*! exports provided: getPaginatedItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatedItem", function() { return getPaginatedItem; });
/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/connect */ "./db/connect.ts");
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/shopGoods */ "./models/shopGoods.ts");
/* harmony import */ var _getAsString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAsString */ "./database/getAsString.ts");



async function getPaginatedItem(query) {
  await Object(_db_connect__WEBPACK_IMPORTED_MODULE_0__["connectDB"])();
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

  const resultPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__["default"].find(findQuery).skip(offset).limit(rowsPerPage);
  const resultCountPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__["default"].find(findQuery).count();
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
  const str = Object(_getAsString__WEBPACK_IMPORTED_MODULE_2__["getAsString"])(value);
  return !str || str.toLowerCase() === 'all' ? null : str;
}

/***/ }),

/***/ "./db/connect.ts":
/*!***********************!*\
  !*** ./db/connect.ts ***!
  \***********************/
/*! exports provided: connectDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectDB", function() { return connectDB; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

console.log('MONGO_URI!!!!', process.env.MONGODB_URI);
const connectDB = async () => {
  var _mongoose$connections;

  if (!((_mongoose$connections = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0]) !== null && _mongoose$connections !== void 0 && _mongoose$connections.readyState)) {
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }
};

/***/ }),

/***/ "./models/shopGoods.ts":
/*!*****************************!*\
  !*** ./models/shopGoods.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
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

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models = {};
const ShopGoods = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('ShopGoods', shopGoods);
/* harmony default export */ __webpack_exports__["default"] = (ShopGoods);

/***/ }),

/***/ "./pages/api/shop.ts":
/*!***************************!*\
  !*** ./pages/api/shop.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shop; });
/* harmony import */ var _database_getPaginatedItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/getPaginatedItems */ "./database/getPaginatedItems.ts");

async function shop(req, res) {
  const shop = await Object(_database_getPaginatedItems__WEBPACK_IMPORTED_MODULE_0__["getPaginatedItem"])(req.query);
  res.json(shop);
}

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZ2V0QXNTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZ2V0UGFnaW5hdGVkSXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vZGIvY29ubmVjdC50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcEdvb2RzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zaG9wLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiZ2V0QXNTdHJpbmciLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImdldFBhZ2luYXRlZEl0ZW0iLCJxdWVyeSIsImNvbm5lY3REQiIsInBhZ2UiLCJnZXRWYWx1ZU51bWJlciIsInJvd3NQZXJQYWdlIiwib2Zmc2V0IiwiZGJQYXJhbXMiLCJ0eXBlIiwiZ2V0VmFsdWVTdHIiLCJjb3VudHJ5IiwibWluUHJpY2UiLCJtYXhQcmljZSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kUXVlcnkiLCJjYXRlZ29yeSIsInByaWNlT2ZHb29kcyIsIiRndGUiLCIkbHRlIiwicmVzdWx0UHJvbWlzZSIsIlNob3BHb29kcyIsImZpbmQiLCJza2lwIiwibGltaXQiLCJyZXN1bHRDb3VudFByb21pc2UiLCJjb3VudCIsInJlc3VsdCIsInJlc3VsdENvdW50IiwiUHJvbWlzZSIsImFsbCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImdvb2RzIiwic3RyIiwibnVtYmVyIiwicGFyc2VJbnQiLCJpc05hTiIsInRvTG93ZXJDYXNlIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwibW9uZ29vc2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwidXNlTmV3VXJsUGFyc2VyIiwiU2NoZW1hIiwic2hvcEdvb2RzIiwibmFtZU9mR29vZHMiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImFtb3VudE9mR29vZHMiLCJOdW1iZXIiLCJjYXRhbG9nTnVtYmVyIiwiaW1hZ2VVcmwiLCJkYXRlIiwiRGF0ZSIsIm1vZGVscyIsIm1vZGVsIiwic2hvcCIsInJlcSIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFPLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQXVEO0FBQzVELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUosRUFBMEI7QUFDeEIsV0FBT0EsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7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LENBWjZCO0FBYXZDUSxNQUFJLEVBQUVDO0FBYmlDLENBQXZCLENBQWxCLEMsQ0FnQkE7QUFDQTs7QUFDQXBCLCtDQUFRLENBQUNxQixNQUFULEdBQWtCLEVBQWxCO0FBRUEsTUFBTTNDLFNBQVMsR0FBR3NCLCtDQUFRLENBQUNzQixLQUFULENBQTJCLFdBQTNCLEVBQXdDYixTQUF4QyxDQUFsQjtBQUVlL0Isd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBRWUsZUFBZTZDLElBQWYsQ0FBb0JDLEdBQXBCLEVBQXlDQyxHQUF6QyxFQUErRDtBQUM1RSxRQUFNRixJQUFJLEdBQUcsTUFBTWxFLG9GQUFnQixDQUFDbUUsR0FBRyxDQUFDbEUsS0FBTCxDQUFuQztBQUNBbUUsS0FBRyxDQUFDQyxJQUFKLENBQVNILElBQVQ7QUFDRCxDOzs7Ozs7Ozs7OztBQ05ELHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9zaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvc2hvcC50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRBc1N0cmluZyh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlWzBdXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gJy4uL2RiL2Nvbm5lY3QnXHJcbmltcG9ydCBTaG9wR29vZHMgZnJvbSAnLi4vbW9kZWxzL3Nob3BHb29kcydcclxuaW1wb3J0IHsgZ2V0QXNTdHJpbmcgfSBmcm9tICcuL2dldEFzU3RyaW5nJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luYXRlZEl0ZW0ocXVlcnk6IFBhcnNlZFVybFF1ZXJ5KSB7XHJcbiAgYXdhaXQgY29ubmVjdERCKClcclxuICBjb25zdCBwYWdlID0gZ2V0VmFsdWVOdW1iZXIocXVlcnkucGFnZSkgfHwgMVxyXG4gIGNvbnN0IHJvd3NQZXJQYWdlID0gZ2V0VmFsdWVOdW1iZXIocXVlcnkucm93c1BlclBhZ2UpIHx8IDRcclxuICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogcm93c1BlclBhZ2VcclxuXHJcbiAgY29uc3QgZGJQYXJhbXMgPSB7XHJcbiAgICB0eXBlOiBnZXRWYWx1ZVN0cihxdWVyeS50eXBlKSxcclxuICAgIGNvdW50cnk6IGdldFZhbHVlU3RyKHF1ZXJ5LmNvdW50cnkpLFxyXG4gICAgbWluUHJpY2U6IGdldFZhbHVlTnVtYmVyKHF1ZXJ5Lm1pblByaWNlKSxcclxuICAgIG1heFByaWNlOiBnZXRWYWx1ZU51bWJlcihxdWVyeS5tYXhQcmljZSksXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZygnREIgUGFyYW1zOiAnLCBkYlBhcmFtcylcclxuXHJcbiAgY29uc3QgZmluZFF1ZXJ5OiBhbnkgPSB7fVxyXG5cclxuICBpZiAoZGJQYXJhbXMudHlwZSkge1xyXG4gICAgZmluZFF1ZXJ5LmNhdGVnb3J5ID0gZGJQYXJhbXMudHlwZVxyXG4gIH1cclxuICBpZiAoZGJQYXJhbXMuY291bnRyeSkge1xyXG4gICAgZmluZFF1ZXJ5LmNvdW50cnkgPSBkYlBhcmFtcy5jb3VudHJ5XHJcbiAgfVxyXG5cclxuICBpZiAoZGJQYXJhbXMubWluUHJpY2UgJiYgZGJQYXJhbXMubWF4UHJpY2UpIHtcclxuICAgIGZpbmRRdWVyeS5wcmljZU9mR29vZHMgPSB7XHJcbiAgICAgICRndGU6IGRiUGFyYW1zLm1pblByaWNlLFxyXG4gICAgICAkbHRlOiBkYlBhcmFtcy5tYXhQcmljZSxcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGRiUGFyYW1zLm1pblByaWNlKSB7XHJcbiAgICBmaW5kUXVlcnkucHJpY2VPZkdvb2RzID0ge1xyXG4gICAgICAkZ3RlOiBkYlBhcmFtcy5taW5QcmljZSxcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGRiUGFyYW1zLm1heFByaWNlKSB7XHJcbiAgICBmaW5kUXVlcnkucHJpY2VPZkdvb2RzID0ge1xyXG4gICAgICAkbHRlOiBkYlBhcmFtcy5tYXhQcmljZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdFByb21pc2UgPSBTaG9wR29vZHMuZmluZChmaW5kUXVlcnkpXHJcbiAgICAuc2tpcChvZmZzZXQpXHJcbiAgICAubGltaXQocm93c1BlclBhZ2UpXHJcbiAgY29uc3QgcmVzdWx0Q291bnRQcm9taXNlID0gU2hvcEdvb2RzLmZpbmQoZmluZFF1ZXJ5KS5jb3VudCgpXHJcblxyXG4gIGNvbnN0IFtyZXN1bHQsIHJlc3VsdENvdW50XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHJlc3VsdFByb21pc2UsXHJcbiAgICByZXN1bHRDb3VudFByb21pc2UsXHJcbiAgXSlcclxuXHJcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChyZXN1bHRDb3VudCAvIHJvd3NQZXJQYWdlKVxyXG5cclxuICByZXR1cm4geyBnb29kczogcmVzdWx0LCB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVOdW1iZXIodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgY29uc3Qgc3RyID0gZ2V0VmFsdWVTdHIodmFsdWUpXHJcbiAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQoc3RyKVxyXG4gIHJldHVybiBpc05hTihudW1iZXIpID8gbnVsbCA6IG51bWJlclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZVN0cih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICBjb25zdCBzdHIgPSBnZXRBc1N0cmluZyh2YWx1ZSlcclxuICByZXR1cm4gIXN0ciB8fCBzdHIudG9Mb3dlckNhc2UoKSA9PT0gJ2FsbCcgPyBudWxsIDogc3RyXHJcbn1cclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc29sZS5sb2coJ01PTkdPX1VSSSEhISEnLCBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSlcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKCFtb25nb29zZS5jb25uZWN0aW9uc1swXT8ucmVhZHlTdGF0ZSkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJ1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWFcclxuXHJcbmludGVyZmFjZSBJU2hvcEdvb2RzIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIG5hbWVPZkdvb2RzOiBzdHJpbmdcclxuICBhbW91bnRPZkdvb2RzOiBudW1iZXJcclxuICBwcmljZU9mR29vZHM6IG51bWJlclxyXG4gIGNhdGFsb2dOdW1iZXI6IHN0cmluZ1xyXG4gIGNvdW50cnk6IHN0cmluZ1xyXG4gIGNhdGVnb3J5OiBzdHJpbmdcclxuICBpbWFnZVBhdGg6IHN0cmluZ1tdXHJcbiAgZGF0ZTogRGF0ZVxyXG59XHJcblxyXG5jb25zdCBzaG9wR29vZHMgPSBuZXcgU2NoZW1hPElTaG9wR29vZHM+KHtcclxuICBuYW1lT2ZHb29kczoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtaW5sZW5ndGg6IDMsXHJcbiAgfSxcclxuICBhbW91bnRPZkdvb2RzOiBOdW1iZXIsXHJcbiAgcHJpY2VPZkdvb2RzOiBOdW1iZXIsXHJcbiAgY2F0YWxvZ051bWJlcjogU3RyaW5nLFxyXG4gIGNvdW50cnk6IFN0cmluZyxcclxuICBjYXRlZ29yeTogU3RyaW5nLFxyXG4gIGltYWdlVXJsOiBbU3RyaW5nXSxcclxuICBkYXRlOiBEYXRlLFxyXG59KVxyXG5cclxuLy8gdG8gYXZvaWQgb3ZlcndyaXRlIGVycnJvcj8/P1xyXG4vLyBAdHMtaWdub3JlXHJcbm1vbmdvb3NlLm1vZGVscyA9IHt9XHJcblxyXG5jb25zdCBTaG9wR29vZHMgPSBtb25nb29zZS5tb2RlbDxJU2hvcEdvb2RzPignU2hvcEdvb2RzJywgc2hvcEdvb2RzKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcEdvb2RzXHJcbiIsImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBnZXRQYWdpbmF0ZWRJdGVtIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvZ2V0UGFnaW5hdGVkSXRlbXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzaG9wKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3Qgc2hvcCA9IGF3YWl0IGdldFBhZ2luYXRlZEl0ZW0ocmVxLnF1ZXJ5KVxyXG4gIHJlcy5qc29uKHNob3ApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==