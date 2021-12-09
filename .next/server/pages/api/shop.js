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
      //@ts-ignore
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZ2V0QXNTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZ2V0UGFnaW5hdGVkSXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vZGIvY29ubmVjdC50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcEdvb2RzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zaG9wLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiZ2V0QXNTdHJpbmciLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImdldFBhZ2luYXRlZEl0ZW0iLCJxdWVyeSIsImNvbm5lY3REQiIsInBhZ2UiLCJnZXRWYWx1ZU51bWJlciIsInJvd3NQZXJQYWdlIiwib2Zmc2V0IiwiZGJQYXJhbXMiLCJ0eXBlIiwiZ2V0VmFsdWVTdHIiLCJjb3VudHJ5IiwibWluUHJpY2UiLCJtYXhQcmljZSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kUXVlcnkiLCJjYXRlZ29yeSIsInByaWNlT2ZHb29kcyIsIiRndGUiLCIkbHRlIiwicmVzdWx0UHJvbWlzZSIsIlNob3BHb29kcyIsImZpbmQiLCJza2lwIiwibGltaXQiLCJyZXN1bHRDb3VudFByb21pc2UiLCJjb3VudCIsInJlc3VsdCIsInJlc3VsdENvdW50IiwiUHJvbWlzZSIsImFsbCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImdvb2RzIiwic3RyIiwibnVtYmVyIiwicGFyc2VJbnQiLCJpc05hTiIsInRvTG93ZXJDYXNlIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwibW9uZ29vc2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwidXNlTmV3VXJsUGFyc2VyIiwiU2NoZW1hIiwic2hvcEdvb2RzIiwibmFtZU9mR29vZHMiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImFtb3VudE9mR29vZHMiLCJOdW1iZXIiLCJjYXRhbG9nTnVtYmVyIiwiaW1hZ2VVcmwiLCJkYXRlIiwiRGF0ZSIsIm1vZGVscyIsIm1vZGVsIiwic2hvcCIsInJlcSIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFPLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQXVEO0FBQzVELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUosRUFBMEI7QUFDeEIsV0FBT0EsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7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LE1BQUQsQ0FaNkI7QUFhdkNRLE1BQUksRUFBRUM7QUFiaUMsQ0FBdkIsQ0FBbEIsQyxDQWdCQTtBQUNBOztBQUNBcEIsK0NBQVEsQ0FBQ3FCLE1BQVQsR0FBa0IsRUFBbEI7QUFFQSxNQUFNM0MsU0FBUyxHQUFHc0IsK0NBQVEsQ0FBQ3NCLEtBQVQsQ0FBMkIsV0FBM0IsRUFBd0NiLFNBQXhDLENBQWxCO0FBRWUvQix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFFZSxlQUFlNkMsSUFBZixDQUFvQkMsR0FBcEIsRUFBeUNDLEdBQXpDLEVBQStEO0FBQzVFLFFBQU1GLElBQUksR0FBRyxNQUFNbEUsb0ZBQWdCLENBQUNtRSxHQUFHLENBQUNsRSxLQUFMLENBQW5DO0FBQ0FtRSxLQUFHLENBQUNDLElBQUosQ0FBU0gsSUFBVDtBQUNELEM7Ozs7Ozs7Ozs7O0FDTkQscUMiLCJmaWxlIjoicGFnZXMvYXBpL3Nob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9zaG9wLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEFzU3RyaW5nKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWVbMF1cclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnLi4vZGIvY29ubmVjdCdcclxuaW1wb3J0IFNob3BHb29kcyBmcm9tICcuLi9tb2RlbHMvc2hvcEdvb2RzJ1xyXG5pbXBvcnQgeyBnZXRBc1N0cmluZyB9IGZyb20gJy4vZ2V0QXNTdHJpbmcnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5hdGVkSXRlbShxdWVyeTogUGFyc2VkVXJsUXVlcnkpIHtcclxuICBhd2FpdCBjb25uZWN0REIoKVxyXG4gIGNvbnN0IHBhZ2UgPSBnZXRWYWx1ZU51bWJlcihxdWVyeS5wYWdlKSB8fCAxXHJcbiAgY29uc3Qgcm93c1BlclBhZ2UgPSBnZXRWYWx1ZU51bWJlcihxdWVyeS5yb3dzUGVyUGFnZSkgfHwgNFxyXG4gIGNvbnN0IG9mZnNldCA9IChwYWdlIC0gMSkgKiByb3dzUGVyUGFnZVxyXG5cclxuICBjb25zdCBkYlBhcmFtcyA9IHtcclxuICAgIHR5cGU6IGdldFZhbHVlU3RyKHF1ZXJ5LnR5cGUpLFxyXG4gICAgY291bnRyeTogZ2V0VmFsdWVTdHIocXVlcnkuY291bnRyeSksXHJcbiAgICBtaW5QcmljZTogZ2V0VmFsdWVOdW1iZXIocXVlcnkubWluUHJpY2UpLFxyXG4gICAgbWF4UHJpY2U6IGdldFZhbHVlTnVtYmVyKHF1ZXJ5Lm1heFByaWNlKSxcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCdEQiBQYXJhbXM6ICcsIGRiUGFyYW1zKVxyXG5cclxuICBjb25zdCBmaW5kUXVlcnk6IGFueSA9IHt9XHJcblxyXG4gIGlmIChkYlBhcmFtcy50eXBlKSB7XHJcbiAgICBmaW5kUXVlcnkuY2F0ZWdvcnkgPSBkYlBhcmFtcy50eXBlXHJcbiAgfVxyXG4gIGlmIChkYlBhcmFtcy5jb3VudHJ5KSB7XHJcbiAgICBmaW5kUXVlcnkuY291bnRyeSA9IGRiUGFyYW1zLmNvdW50cnlcclxuICB9XHJcblxyXG4gIGlmIChkYlBhcmFtcy5taW5QcmljZSAmJiBkYlBhcmFtcy5tYXhQcmljZSkge1xyXG4gICAgZmluZFF1ZXJ5LnByaWNlT2ZHb29kcyA9IHtcclxuICAgICAgJGd0ZTogZGJQYXJhbXMubWluUHJpY2UsXHJcbiAgICAgICRsdGU6IGRiUGFyYW1zLm1heFByaWNlLFxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZGJQYXJhbXMubWluUHJpY2UpIHtcclxuICAgIGZpbmRRdWVyeS5wcmljZU9mR29vZHMgPSB7XHJcbiAgICAgICRndGU6IGRiUGFyYW1zLm1pblByaWNlLFxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZGJQYXJhbXMubWF4UHJpY2UpIHtcclxuICAgIGZpbmRRdWVyeS5wcmljZU9mR29vZHMgPSB7XHJcbiAgICAgICRsdGU6IGRiUGFyYW1zLm1heFByaWNlLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0UHJvbWlzZSA9IFNob3BHb29kcy5maW5kKGZpbmRRdWVyeSlcclxuICAgIC5za2lwKG9mZnNldClcclxuICAgIC5saW1pdChyb3dzUGVyUGFnZSlcclxuICBjb25zdCByZXN1bHRDb3VudFByb21pc2UgPSBTaG9wR29vZHMuZmluZChmaW5kUXVlcnkpLmNvdW50KClcclxuXHJcbiAgY29uc3QgW3Jlc3VsdCwgcmVzdWx0Q291bnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVzdWx0UHJvbWlzZSxcclxuICAgIHJlc3VsdENvdW50UHJvbWlzZSxcclxuICBdKVxyXG5cclxuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHJlc3VsdENvdW50IC8gcm93c1BlclBhZ2UpXHJcblxyXG4gIHJldHVybiB7IGdvb2RzOiByZXN1bHQsIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXMgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZU51bWJlcih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICBjb25zdCBzdHIgPSBnZXRWYWx1ZVN0cih2YWx1ZSlcclxuICBjb25zdCBudW1iZXIgPSBwYXJzZUludChzdHIpXHJcbiAgcmV0dXJuIGlzTmFOKG51bWJlcikgPyBudWxsIDogbnVtYmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlU3RyKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gIGNvbnN0IHN0ciA9IGdldEFzU3RyaW5nKHZhbHVlKVxyXG4gIHJldHVybiAhc3RyIHx8IHN0ci50b0xvd2VyQ2FzZSgpID09PSAnYWxsJyA/IG51bGwgOiBzdHJcclxufVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zb2xlLmxvZygnTU9OR09fVVJJISEhIScsIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICBpZiAoIW1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdPy5yZWFkeVN0YXRlKSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJ1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWFcclxuXHJcbmludGVyZmFjZSBJU2hvcEdvb2RzIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIG5hbWVPZkdvb2RzOiBzdHJpbmdcclxuICBhbW91bnRPZkdvb2RzOiBudW1iZXJcclxuICBwcmljZU9mR29vZHM6IG51bWJlclxyXG4gIGNhdGFsb2dOdW1iZXI6IHN0cmluZ1xyXG4gIGNvdW50cnk6IHN0cmluZ1xyXG4gIGNhdGVnb3J5OiBzdHJpbmdcclxuICBpbWFnZVBhdGg6IHN0cmluZ1tdXHJcbiAgZGF0ZTogRGF0ZVxyXG59XHJcblxyXG5jb25zdCBzaG9wR29vZHMgPSBuZXcgU2NoZW1hPElTaG9wR29vZHM+KHtcclxuICBuYW1lT2ZHb29kczoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtaW5sZW5ndGg6IDMsXHJcbiAgfSxcclxuICBhbW91bnRPZkdvb2RzOiBOdW1iZXIsXHJcbiAgcHJpY2VPZkdvb2RzOiBOdW1iZXIsXHJcbiAgY2F0YWxvZ051bWJlcjogU3RyaW5nLFxyXG4gIGNvdW50cnk6IFN0cmluZyxcclxuICBjYXRlZ29yeTogU3RyaW5nLFxyXG4gIGltYWdlVXJsOiBbU3RyaW5nXSxcclxuICBkYXRlOiBEYXRlLFxyXG59KVxyXG5cclxuLy8gdG8gYXZvaWQgb3ZlcndyaXRlIGVycnJvcj8/P1xyXG4vLyBAdHMtaWdub3JlXHJcbm1vbmdvb3NlLm1vZGVscyA9IHt9XHJcblxyXG5jb25zdCBTaG9wR29vZHMgPSBtb25nb29zZS5tb2RlbDxJU2hvcEdvb2RzPignU2hvcEdvb2RzJywgc2hvcEdvb2RzKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcEdvb2RzXHJcbiIsImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBnZXRQYWdpbmF0ZWRJdGVtIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvZ2V0UGFnaW5hdGVkSXRlbXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzaG9wKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3Qgc2hvcCA9IGF3YWl0IGdldFBhZ2luYXRlZEl0ZW0ocmVxLnF1ZXJ5KVxyXG4gIHJlcy5qc29uKHNob3ApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==