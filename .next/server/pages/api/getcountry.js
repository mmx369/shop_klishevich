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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAsString\", function() { return getAsString; });\nfunction getAsString(value) {\n  if (Array.isArray(value)) {\n    return value[0];\n  }\n\n  return value;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9nZXRBc1N0cmluZy50cz9jNTI2Il0sIm5hbWVzIjpbImdldEFzU3RyaW5nIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUF1RDtBQUM1RCxNQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCLFdBQU9BLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoiLi9kYXRhYmFzZS9nZXRBc1N0cmluZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRBc1N0cmluZyh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVbMF1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/getAsString.ts\n");

/***/ }),

/***/ "./database/getCountry.ts":
/*!********************************!*\
  !*** ./database/getCountry.ts ***!
  \********************************/
/*! exports provided: getCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCountry\", function() { return getCountry; });\n/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/shopGoods */ \"./models/shopGoods.ts\");\n\nasync function getCountry(type) {\n  const countries = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n    category: type\n  });\n  const res = countries.reduce((acc, curr) => {\n    const currCountry = curr.country;\n\n    if (acc[currCountry]) {\n      acc[currCountry] += 1;\n    } else {\n      acc[currCountry] = 1;\n    }\n\n    return acc;\n  }, {});\n  const arrOfObj = [];\n\n  for (let [key, value] of Object.entries(res)) {\n    arrOfObj.push({\n      country: key,\n      count: value\n    });\n  }\n\n  return arrOfObj;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9nZXRDb3VudHJ5LnRzPzA0N2QiXSwibmFtZXMiOlsiZ2V0Q291bnRyeSIsInR5cGUiLCJjb3VudHJpZXMiLCJTaG9wR29vZHMiLCJmaW5kIiwiY2F0ZWdvcnkiLCJyZXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiY3VyckNvdW50cnkiLCJjb3VudHJ5IiwiYXJyT2ZPYmoiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJwdXNoIiwiY291bnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT08sZUFBZUEsVUFBZixDQUEwQkMsSUFBMUIsRUFBd0M7QUFDN0MsUUFBTUMsU0FBUyxHQUFHLE1BQU1DLHlEQUFTLENBQUNDLElBQVYsQ0FBZTtBQUFFQyxZQUFRLEVBQUVKO0FBQVosR0FBZixDQUF4QjtBQUVBLFFBQU1LLEdBQUcsR0FBR0osU0FBUyxDQUFDSyxNQUFWLENBQWlCLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQzFDLFVBQU1DLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxPQUF6Qjs7QUFDQSxRQUFJSCxHQUFHLENBQUNFLFdBQUQsQ0FBUCxFQUFzQjtBQUNwQkYsU0FBRyxDQUFDRSxXQUFELENBQUgsSUFBb0IsQ0FBcEI7QUFDRCxLQUZELE1BRU87QUFDTEYsU0FBRyxDQUFDRSxXQUFELENBQUgsR0FBbUIsQ0FBbkI7QUFDRDs7QUFDRCxXQUFPRixHQUFQO0FBQ0QsR0FSVyxFQVFULEVBUlMsQ0FBWjtBQVVBLFFBQU1JLFFBQVEsR0FBRyxFQUFqQjs7QUFFQSxPQUFLLElBQUksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLENBQVQsSUFBeUJDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVixHQUFmLENBQXpCLEVBQThDO0FBQzVDTSxZQUFRLENBQUNLLElBQVQsQ0FBYztBQUFFTixhQUFPLEVBQUVFLEdBQVg7QUFBZ0JLLFdBQUssRUFBRUo7QUFBdkIsS0FBZDtBQUNEOztBQUNELFNBQU9GLFFBQVA7QUFDRCIsImZpbGUiOiIuL2RhdGFiYXNlL2dldENvdW50cnkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hvcEdvb2RzIGZyb20gJy4uL21vZGVscy9zaG9wR29vZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeSB7XG4gIGNvdW50cnk6IHN0cmluZ1xuICBjb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3VudHJ5KHR5cGU6IHN0cmluZykge1xuICBjb25zdCBjb3VudHJpZXMgPSBhd2FpdCBTaG9wR29vZHMuZmluZCh7IGNhdGVnb3J5OiB0eXBlIH0pXG5cbiAgY29uc3QgcmVzID0gY291bnRyaWVzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgY29uc3QgY3VyckNvdW50cnkgPSBjdXJyLmNvdW50cnlcbiAgICBpZiAoYWNjW2N1cnJDb3VudHJ5XSkge1xuICAgICAgYWNjW2N1cnJDb3VudHJ5XSArPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tjdXJyQ291bnRyeV0gPSAxXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG5cbiAgY29uc3QgYXJyT2ZPYmogPSBbXVxuXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyZXMpKSB7XG4gICAgYXJyT2ZPYmoucHVzaCh7IGNvdW50cnk6IGtleSwgY291bnQ6IHZhbHVlIH0pXG4gIH1cbiAgcmV0dXJuIGFyck9mT2JqXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./database/getCountry.ts\n");

/***/ }),

/***/ "./models/shopGoods.ts":
/*!*****************************!*\
  !*** ./models/shopGoods.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nconst shopGoods = new Schema({\n  nameOfGoods: {\n    type: String,\n    unique: true,\n    required: true,\n    minlength: 3\n  },\n  amountOfGoods: Number,\n  priceOfGoods: Number,\n  catalogNumber: String,\n  country: String,\n  category: String,\n  imageUrl: [String],\n  date: Date\n}); // to avoid overwrite errror???\n// @ts-ignore\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models = {};\nconst ShopGoods = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('ShopGoods', shopGoods);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopGoods);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcEdvb2RzLnRzP2E0ODEiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJzaG9wR29vZHMiLCJuYW1lT2ZHb29kcyIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImFtb3VudE9mR29vZHMiLCJOdW1iZXIiLCJwcmljZU9mR29vZHMiLCJjYXRhbG9nTnVtYmVyIiwiY291bnRyeSIsImNhdGVnb3J5IiwiaW1hZ2VVcmwiLCJkYXRlIiwiRGF0ZSIsIm1vZGVscyIsIlNob3BHb29kcyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU1BLE1BQU0sR0FBR0MsK0NBQVEsQ0FBQ0QsTUFBeEI7QUFhQSxNQUFNRSxTQUFTLEdBQUcsSUFBSUYsTUFBSixDQUF1QjtBQUN2Q0csYUFBVyxFQUFFO0FBQ1hDLFFBQUksRUFBRUMsTUFESztBQUVYQyxVQUFNLEVBQUUsSUFGRztBQUdYQyxZQUFRLEVBQUUsSUFIQztBQUlYQyxhQUFTLEVBQUU7QUFKQSxHQUQwQjtBQU92Q0MsZUFBYSxFQUFFQyxNQVB3QjtBQVF2Q0MsY0FBWSxFQUFFRCxNQVJ5QjtBQVN2Q0UsZUFBYSxFQUFFUCxNQVR3QjtBQVV2Q1EsU0FBTyxFQUFFUixNQVY4QjtBQVd2Q1MsVUFBUSxFQUFFVCxNQVg2QjtBQVl2Q1UsVUFBUSxFQUFFLENBQUNWLE1BQUQsQ0FaNkI7QUFhdkNXLE1BQUksRUFBRUM7QUFiaUMsQ0FBdkIsQ0FBbEIsQyxDQWdCQTtBQUNBOztBQUNBaEIsK0NBQVEsQ0FBQ2lCLE1BQVQsR0FBa0IsRUFBbEI7QUFFQSxNQUFNQyxTQUFTLEdBQUdsQiwrQ0FBUSxDQUFDbUIsS0FBVCxDQUEyQixXQUEzQixFQUF3Q2xCLFNBQXhDLENBQWxCO0FBRWVpQix3RUFBZiIsImZpbGUiOiIuL21vZGVscy9zaG9wR29vZHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWFcblxuaW50ZXJmYWNlIElTaG9wR29vZHMgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIG5hbWVPZkdvb2RzOiBzdHJpbmdcbiAgYW1vdW50T2ZHb29kczogbnVtYmVyXG4gIHByaWNlT2ZHb29kczogbnVtYmVyXG4gIGNhdGFsb2dOdW1iZXI6IHN0cmluZ1xuICBjb3VudHJ5OiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBpbWFnZVBhdGg6IHN0cmluZ1tdXG4gIGRhdGU6IERhdGVcbn1cblxuY29uc3Qgc2hvcEdvb2RzID0gbmV3IFNjaGVtYTxJU2hvcEdvb2RzPih7XG4gIG5hbWVPZkdvb2RzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDMsXG4gIH0sXG4gIGFtb3VudE9mR29vZHM6IE51bWJlcixcbiAgcHJpY2VPZkdvb2RzOiBOdW1iZXIsXG4gIGNhdGFsb2dOdW1iZXI6IFN0cmluZyxcbiAgY291bnRyeTogU3RyaW5nLFxuICBjYXRlZ29yeTogU3RyaW5nLFxuICBpbWFnZVVybDogW1N0cmluZ10sXG4gIGRhdGU6IERhdGUsXG59KVxuXG4vLyB0byBhdm9pZCBvdmVyd3JpdGUgZXJycm9yPz8/XG4vLyBAdHMtaWdub3JlXG5tb25nb29zZS5tb2RlbHMgPSB7fVxuXG5jb25zdCBTaG9wR29vZHMgPSBtb25nb29zZS5tb2RlbDxJU2hvcEdvb2RzPignU2hvcEdvb2RzJywgc2hvcEdvb2RzKVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wR29vZHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/shopGoods.ts\n");

/***/ }),

/***/ "./pages/api/getcountry.ts":
/*!*********************************!*\
  !*** ./pages/api/getcountry.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return country; });\n/* harmony import */ var _database_getAsString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/getAsString */ \"./database/getAsString.ts\");\n/* harmony import */ var _database_getCountry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/getCountry */ \"./database/getCountry.ts\");\n\n\nasync function country(req, res) {\n  const type = Object(_database_getAsString__WEBPACK_IMPORTED_MODULE_0__[\"getAsString\"])(req.query.type);\n  const country = await Object(_database_getCountry__WEBPACK_IMPORTED_MODULE_1__[\"getCountry\"])(type);\n  res.json(country);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0Y291bnRyeS50cz9mNTYzIl0sIm5hbWVzIjpbImNvdW50cnkiLCJyZXEiLCJyZXMiLCJ0eXBlIiwiZ2V0QXNTdHJpbmciLCJxdWVyeSIsImdldENvdW50cnkiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxlQUFlQSxPQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyx5RUFBVyxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVUYsSUFBWCxDQUF4QjtBQUNBLFFBQU1ILE9BQU8sR0FBRyxNQUFNTSx1RUFBVSxDQUFDSCxJQUFELENBQWhDO0FBQ0FELEtBQUcsQ0FBQ0ssSUFBSixDQUFTUCxPQUFUO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0Y291bnRyeS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgZ2V0QXNTdHJpbmcgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9nZXRBc1N0cmluZydcbmltcG9ydCB7IGdldENvdW50cnkgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9nZXRDb3VudHJ5J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb3VudHJ5KFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHR5cGUgPSBnZXRBc1N0cmluZyhyZXEucXVlcnkudHlwZSlcbiAgY29uc3QgY291bnRyeSA9IGF3YWl0IGdldENvdW50cnkodHlwZSlcbiAgcmVzLmpzb24oY291bnRyeSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getcountry.ts\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });