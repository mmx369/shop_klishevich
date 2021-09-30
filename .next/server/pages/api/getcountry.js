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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getcountry.ts");
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

/***/ "./database/getCountry.ts":
/*!********************************!*\
  !*** ./database/getCountry.ts ***!
  \********************************/
/*! exports provided: getCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountry", function() { return getCountry; });
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/shopGoods */ "./models/shopGoods.ts");

async function getCountry(type) {
  const countries = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_0__["default"].find({
    category: type
  });
  const res = countries.reduce((acc, curr) => {
    const currCountry = curr.country;

    if (acc[currCountry]) {
      acc[currCountry] += 1;
    } else {
      acc[currCountry] = 1;
    }

    return acc;
  }, {});
  const arrOfObj = [];

  for (let [key, value] of Object.entries(res)) {
    arrOfObj.push({
      country: key,
      count: value
    });
  }

  return arrOfObj;
}

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

/***/ "./pages/api/getcountry.ts":
/*!*********************************!*\
  !*** ./pages/api/getcountry.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return country; });
/* harmony import */ var _database_getAsString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/getAsString */ "./database/getAsString.ts");
/* harmony import */ var _database_getCountry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/getCountry */ "./database/getCountry.ts");


async function country(req, res) {
  const type = Object(_database_getAsString__WEBPACK_IMPORTED_MODULE_0__["getAsString"])(req.query.type);
  const country = await Object(_database_getCountry__WEBPACK_IMPORTED_MODULE_1__["getCountry"])(type);
  res.json(country);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZ2V0QXNTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZ2V0Q291bnRyeS50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcEdvb2RzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9nZXRjb3VudHJ5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiZ2V0QXNTdHJpbmciLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImdldENvdW50cnkiLCJ0eXBlIiwiY291bnRyaWVzIiwiU2hvcEdvb2RzIiwiZmluZCIsImNhdGVnb3J5IiwicmVzIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImN1cnJDb3VudHJ5IiwiY291bnRyeSIsImFyck9mT2JqIiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsInB1c2giLCJjb3VudCIsIlNjaGVtYSIsIm1vbmdvb3NlIiwic2hvcEdvb2RzIiwibmFtZU9mR29vZHMiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImFtb3VudE9mR29vZHMiLCJOdW1iZXIiLCJwcmljZU9mR29vZHMiLCJjYXRhbG9nTnVtYmVyIiwiaW1hZ2VVcmwiLCJkYXRlIiwiRGF0ZSIsIm1vZGVscyIsIm1vZGVsIiwicmVxIiwicXVlcnkiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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Q0FBQ0MsS0FBSixDQUFVbkMsSUFBWCxDQUF4QjtBQUNBLFFBQU1VLE9BQU8sR0FBRyxNQUFNWCx1RUFBVSxDQUFDQyxJQUFELENBQWhDO0FBQ0FLLEtBQUcsQ0FBQytCLElBQUosQ0FBUzFCLE9BQVQ7QUFDRCxDOzs7Ozs7Ozs7OztBQ1hELHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9nZXRjb3VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvZ2V0Y291bnRyeS50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRBc1N0cmluZyh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlWzBdXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcbiIsImltcG9ydCBTaG9wR29vZHMgZnJvbSAnLi4vbW9kZWxzL3Nob3BHb29kcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeSB7XHJcbiAgY291bnRyeTogc3RyaW5nXHJcbiAgY291bnQ6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnRyeSh0eXBlOiBzdHJpbmcpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBhd2FpdCBTaG9wR29vZHMuZmluZCh7IGNhdGVnb3J5OiB0eXBlIH0pXHJcblxyXG4gIGNvbnN0IHJlcyA9IGNvdW50cmllcy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgY29uc3QgY3VyckNvdW50cnkgPSBjdXJyLmNvdW50cnlcclxuICAgIGlmIChhY2NbY3VyckNvdW50cnldKSB7XHJcbiAgICAgIGFjY1tjdXJyQ291bnRyeV0gKz0gMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWNjW2N1cnJDb3VudHJ5XSA9IDFcclxuICAgIH1cclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7fSlcclxuXHJcbiAgY29uc3QgYXJyT2ZPYmogPSBbXVxyXG5cclxuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmVzKSkge1xyXG4gICAgYXJyT2ZPYmoucHVzaCh7IGNvdW50cnk6IGtleSwgY291bnQ6IHZhbHVlIH0pXHJcbiAgfVxyXG4gIHJldHVybiBhcnJPZk9ialxyXG59XHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBEb2N1bWVudCwgVHlwZXMgfSBmcm9tICdtb25nb29zZSdcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXHJcblxyXG5pbnRlcmZhY2UgSVNob3BHb29kcyBleHRlbmRzIERvY3VtZW50IHtcclxuICBuYW1lT2ZHb29kczogc3RyaW5nXHJcbiAgYW1vdW50T2ZHb29kczogbnVtYmVyXHJcbiAgcHJpY2VPZkdvb2RzOiBudW1iZXJcclxuICBjYXRhbG9nTnVtYmVyOiBzdHJpbmdcclxuICBjb3VudHJ5OiBzdHJpbmdcclxuICBjYXRlZ29yeTogc3RyaW5nXHJcbiAgaW1hZ2VQYXRoOiBzdHJpbmdbXVxyXG4gIGRhdGU6IERhdGVcclxufVxyXG5cclxuY29uc3Qgc2hvcEdvb2RzID0gbmV3IFNjaGVtYTxJU2hvcEdvb2RzPih7XHJcbiAgbmFtZU9mR29vZHM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbWlubGVuZ3RoOiAzLFxyXG4gIH0sXHJcbiAgYW1vdW50T2ZHb29kczogTnVtYmVyLFxyXG4gIHByaWNlT2ZHb29kczogTnVtYmVyLFxyXG4gIGNhdGFsb2dOdW1iZXI6IFN0cmluZyxcclxuICBjb3VudHJ5OiBTdHJpbmcsXHJcbiAgY2F0ZWdvcnk6IFN0cmluZyxcclxuICBpbWFnZVVybDogW1N0cmluZ10sXHJcbiAgZGF0ZTogRGF0ZSxcclxufSlcclxuXHJcbi8vIHRvIGF2b2lkIG92ZXJ3cml0ZSBlcnJyb3I/Pz9cclxuLy8gQHRzLWlnbm9yZVxyXG5tb25nb29zZS5tb2RlbHMgPSB7fVxyXG5cclxuY29uc3QgU2hvcEdvb2RzID0gbW9uZ29vc2UubW9kZWw8SVNob3BHb29kcz4oJ1Nob3BHb29kcycsIHNob3BHb29kcylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BHb29kc1xyXG4iLCJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgZ2V0QXNTdHJpbmcgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9nZXRBc1N0cmluZydcclxuaW1wb3J0IHsgZ2V0Q291bnRyeSB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL2dldENvdW50cnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb3VudHJ5KFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgY29uc3QgdHlwZSA9IGdldEFzU3RyaW5nKHJlcS5xdWVyeS50eXBlKVxyXG4gIGNvbnN0IGNvdW50cnkgPSBhd2FpdCBnZXRDb3VudHJ5KHR5cGUpXHJcbiAgcmVzLmpzb24oY291bnRyeSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9