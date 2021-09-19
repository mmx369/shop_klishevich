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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAsString\", function() { return getAsString; });\nfunction getAsString(value) {\n  if (Array.isArray(value)) {\n    return value[0];\n  }\n\n  return value;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9nZXRBc1N0cmluZy50cz9jNTI2Il0sIm5hbWVzIjpbImdldEFzU3RyaW5nIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUF1RDtBQUM1RCxNQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCLFdBQU9BLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoiLi9kYXRhYmFzZS9nZXRBc1N0cmluZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRBc1N0cmluZyh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVbMF1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/getAsString.ts\n");

/***/ }),

/***/ "./database/getPaginatedItems.ts":
/*!***************************************!*\
  !*** ./database/getPaginatedItems.ts ***!
  \***************************************/
/*! exports provided: getPaginatedItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPaginatedItem\", function() { return getPaginatedItem; });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/connect */ \"./db/connect.ts\");\n/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/shopGoods */ \"./models/shopGoods.ts\");\n/* harmony import */ var _getAsString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAsString */ \"./database/getAsString.ts\");\n\n\n\nasync function getPaginatedItem(query) {\n  await Object(_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"connectDB\"])();\n  const page = getValueNumber(query.page) || 1;\n  const rowsPerPage = getValueNumber(query.rowsPerPage) || 4;\n  const offset = (page - 1) * rowsPerPage;\n  const dbParams = {\n    type: getValueStr(query.type),\n    country: getValueStr(query.country),\n    minPrice: getValueNumber(query.minPrice),\n    maxPrice: getValueNumber(query.maxPrice)\n  };\n  console.log('DB Params: ', dbParams);\n  const findQuery = {};\n\n  if (dbParams.type) {\n    findQuery.category = dbParams.type;\n  }\n\n  if (dbParams.country) {\n    findQuery.country = dbParams.country;\n  }\n\n  if (dbParams.minPrice && dbParams.maxPrice) {\n    findQuery.priceOfGoods = {\n      $gte: dbParams.minPrice,\n      $lte: dbParams.maxPrice\n    };\n  } else if (dbParams.minPrice) {\n    findQuery.priceOfGoods = {\n      $gte: dbParams.minPrice\n    };\n  } else if (dbParams.maxPrice) {\n    findQuery.priceOfGoods = {\n      $lte: dbParams.maxPrice\n    };\n  }\n\n  const resultPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(findQuery).skip(offset).limit(rowsPerPage);\n  const resultCountPromise = _models_shopGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(findQuery).count();\n  const [result, resultCount] = await Promise.all([resultPromise, resultCountPromise]);\n  const totalPages = Math.ceil(resultCount / rowsPerPage);\n  return {\n    goods: result,\n    totalPages: totalPages\n  };\n}\n\nfunction getValueNumber(value) {\n  const str = getValueStr(value);\n  const number = parseInt(str);\n  return isNaN(number) ? null : number;\n}\n\nfunction getValueStr(value) {\n  const str = Object(_getAsString__WEBPACK_IMPORTED_MODULE_2__[\"getAsString\"])(value);\n  return !str || str.toLowerCase() === 'all' ? null : str;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9nZXRQYWdpbmF0ZWRJdGVtcy50cz85OGE5Il0sIm5hbWVzIjpbImdldFBhZ2luYXRlZEl0ZW0iLCJxdWVyeSIsImNvbm5lY3REQiIsInBhZ2UiLCJnZXRWYWx1ZU51bWJlciIsInJvd3NQZXJQYWdlIiwib2Zmc2V0IiwiZGJQYXJhbXMiLCJ0eXBlIiwiZ2V0VmFsdWVTdHIiLCJjb3VudHJ5IiwibWluUHJpY2UiLCJtYXhQcmljZSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kUXVlcnkiLCJjYXRlZ29yeSIsInByaWNlT2ZHb29kcyIsIiRndGUiLCIkbHRlIiwicmVzdWx0UHJvbWlzZSIsIlNob3BHb29kcyIsImZpbmQiLCJza2lwIiwibGltaXQiLCJyZXN1bHRDb3VudFByb21pc2UiLCJjb3VudCIsInJlc3VsdCIsInJlc3VsdENvdW50IiwiUHJvbWlzZSIsImFsbCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImdvb2RzIiwidmFsdWUiLCJzdHIiLCJudW1iZXIiLCJwYXJzZUludCIsImlzTmFOIiwiZ2V0QXNTdHJpbmciLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGdCQUFmLENBQWdDQyxLQUFoQyxFQUF1RDtBQUM1RCxRQUFNQyw2REFBUyxFQUFmO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxjQUFjLENBQUNILEtBQUssQ0FBQ0UsSUFBUCxDQUFkLElBQThCLENBQTNDO0FBQ0EsUUFBTUUsV0FBVyxHQUFHRCxjQUFjLENBQUNILEtBQUssQ0FBQ0ksV0FBUCxDQUFkLElBQXFDLENBQXpEO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLENBQUNILElBQUksR0FBRyxDQUFSLElBQWFFLFdBQTVCO0FBRUEsUUFBTUUsUUFBUSxHQUFHO0FBQ2ZDLFFBQUksRUFBRUMsV0FBVyxDQUFDUixLQUFLLENBQUNPLElBQVAsQ0FERjtBQUVmRSxXQUFPLEVBQUVELFdBQVcsQ0FBQ1IsS0FBSyxDQUFDUyxPQUFQLENBRkw7QUFHZkMsWUFBUSxFQUFFUCxjQUFjLENBQUNILEtBQUssQ0FBQ1UsUUFBUCxDQUhUO0FBSWZDLFlBQVEsRUFBRVIsY0FBYyxDQUFDSCxLQUFLLENBQUNXLFFBQVA7QUFKVCxHQUFqQjtBQU9BQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCUCxRQUEzQjtBQUVBLFFBQU1RLFNBQWMsR0FBRyxFQUF2Qjs7QUFFQSxNQUFJUixRQUFRLENBQUNDLElBQWIsRUFBbUI7QUFDakJPLGFBQVMsQ0FBQ0MsUUFBVixHQUFxQlQsUUFBUSxDQUFDQyxJQUE5QjtBQUNEOztBQUNELE1BQUlELFFBQVEsQ0FBQ0csT0FBYixFQUFzQjtBQUNwQkssYUFBUyxDQUFDTCxPQUFWLEdBQW9CSCxRQUFRLENBQUNHLE9BQTdCO0FBQ0Q7O0FBRUQsTUFBSUgsUUFBUSxDQUFDSSxRQUFULElBQXFCSixRQUFRLENBQUNLLFFBQWxDLEVBQTRDO0FBQzFDRyxhQUFTLENBQUNFLFlBQVYsR0FBeUI7QUFDdkJDLFVBQUksRUFBRVgsUUFBUSxDQUFDSSxRQURRO0FBRXZCUSxVQUFJLEVBQUVaLFFBQVEsQ0FBQ0s7QUFGUSxLQUF6QjtBQUlELEdBTEQsTUFLTyxJQUFJTCxRQUFRLENBQUNJLFFBQWIsRUFBdUI7QUFDNUJJLGFBQVMsQ0FBQ0UsWUFBVixHQUF5QjtBQUN2QkMsVUFBSSxFQUFFWCxRQUFRLENBQUNJO0FBRFEsS0FBekI7QUFHRCxHQUpNLE1BSUEsSUFBSUosUUFBUSxDQUFDSyxRQUFiLEVBQXVCO0FBQzVCRyxhQUFTLENBQUNFLFlBQVYsR0FBeUI7QUFDdkJFLFVBQUksRUFBRVosUUFBUSxDQUFDSztBQURRLEtBQXpCO0FBR0Q7O0FBRUQsUUFBTVEsYUFBYSxHQUFHQyx5REFBUyxDQUFDQyxJQUFWLENBQWVQLFNBQWYsRUFDbkJRLElBRG1CLENBQ2RqQixNQURjLEVBRW5Ca0IsS0FGbUIsQ0FFYm5CLFdBRmEsQ0FBdEI7QUFHQSxRQUFNb0Isa0JBQWtCLEdBQUdKLHlEQUFTLENBQUNDLElBQVYsQ0FBZVAsU0FBZixFQUEwQlcsS0FBMUIsRUFBM0I7QUFFQSxRQUFNLENBQUNDLE1BQUQsRUFBU0MsV0FBVCxJQUF3QixNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUM5Q1YsYUFEOEMsRUFFOUNLLGtCQUY4QyxDQUFaLENBQXBDO0FBS0EsUUFBTU0sVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsV0FBVyxHQUFHdkIsV0FBeEIsQ0FBbkI7QUFFQSxTQUFPO0FBQUU2QixTQUFLLEVBQUVQLE1BQVQ7QUFBaUJJLGNBQVUsRUFBRUE7QUFBN0IsR0FBUDtBQUNEOztBQUVELFNBQVMzQixjQUFULENBQXdCK0IsS0FBeEIsRUFBa0Q7QUFDaEQsUUFBTUMsR0FBRyxHQUFHM0IsV0FBVyxDQUFDMEIsS0FBRCxDQUF2QjtBQUNBLFFBQU1FLE1BQU0sR0FBR0MsUUFBUSxDQUFDRixHQUFELENBQXZCO0FBQ0EsU0FBT0csS0FBSyxDQUFDRixNQUFELENBQUwsR0FBZ0IsSUFBaEIsR0FBdUJBLE1BQTlCO0FBQ0Q7O0FBRUQsU0FBUzVCLFdBQVQsQ0FBcUIwQixLQUFyQixFQUErQztBQUM3QyxRQUFNQyxHQUFHLEdBQUdJLGdFQUFXLENBQUNMLEtBQUQsQ0FBdkI7QUFDQSxTQUFPLENBQUNDLEdBQUQsSUFBUUEsR0FBRyxDQUFDSyxXQUFKLE9BQXNCLEtBQTlCLEdBQXNDLElBQXRDLEdBQTZDTCxHQUFwRDtBQUNEIiwiZmlsZSI6Ii4vZGF0YWJhc2UvZ2V0UGFnaW5hdGVkSXRlbXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnLi4vZGIvY29ubmVjdCdcbmltcG9ydCBTaG9wR29vZHMgZnJvbSAnLi4vbW9kZWxzL3Nob3BHb29kcydcbmltcG9ydCB7IGdldEFzU3RyaW5nIH0gZnJvbSAnLi9nZXRBc1N0cmluZydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luYXRlZEl0ZW0ocXVlcnk6IFBhcnNlZFVybFF1ZXJ5KSB7XG4gIGF3YWl0IGNvbm5lY3REQigpXG4gIGNvbnN0IHBhZ2UgPSBnZXRWYWx1ZU51bWJlcihxdWVyeS5wYWdlKSB8fCAxXG4gIGNvbnN0IHJvd3NQZXJQYWdlID0gZ2V0VmFsdWVOdW1iZXIocXVlcnkucm93c1BlclBhZ2UpIHx8IDRcbiAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIHJvd3NQZXJQYWdlXG5cbiAgY29uc3QgZGJQYXJhbXMgPSB7XG4gICAgdHlwZTogZ2V0VmFsdWVTdHIocXVlcnkudHlwZSksXG4gICAgY291bnRyeTogZ2V0VmFsdWVTdHIocXVlcnkuY291bnRyeSksXG4gICAgbWluUHJpY2U6IGdldFZhbHVlTnVtYmVyKHF1ZXJ5Lm1pblByaWNlKSxcbiAgICBtYXhQcmljZTogZ2V0VmFsdWVOdW1iZXIocXVlcnkubWF4UHJpY2UpLFxuICB9XG5cbiAgY29uc29sZS5sb2coJ0RCIFBhcmFtczogJywgZGJQYXJhbXMpXG5cbiAgY29uc3QgZmluZFF1ZXJ5OiBhbnkgPSB7fVxuXG4gIGlmIChkYlBhcmFtcy50eXBlKSB7XG4gICAgZmluZFF1ZXJ5LmNhdGVnb3J5ID0gZGJQYXJhbXMudHlwZVxuICB9XG4gIGlmIChkYlBhcmFtcy5jb3VudHJ5KSB7XG4gICAgZmluZFF1ZXJ5LmNvdW50cnkgPSBkYlBhcmFtcy5jb3VudHJ5XG4gIH1cblxuICBpZiAoZGJQYXJhbXMubWluUHJpY2UgJiYgZGJQYXJhbXMubWF4UHJpY2UpIHtcbiAgICBmaW5kUXVlcnkucHJpY2VPZkdvb2RzID0ge1xuICAgICAgJGd0ZTogZGJQYXJhbXMubWluUHJpY2UsXG4gICAgICAkbHRlOiBkYlBhcmFtcy5tYXhQcmljZSxcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGJQYXJhbXMubWluUHJpY2UpIHtcbiAgICBmaW5kUXVlcnkucHJpY2VPZkdvb2RzID0ge1xuICAgICAgJGd0ZTogZGJQYXJhbXMubWluUHJpY2UsXG4gICAgfVxuICB9IGVsc2UgaWYgKGRiUGFyYW1zLm1heFByaWNlKSB7XG4gICAgZmluZFF1ZXJ5LnByaWNlT2ZHb29kcyA9IHtcbiAgICAgICRsdGU6IGRiUGFyYW1zLm1heFByaWNlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdFByb21pc2UgPSBTaG9wR29vZHMuZmluZChmaW5kUXVlcnkpXG4gICAgLnNraXAob2Zmc2V0KVxuICAgIC5saW1pdChyb3dzUGVyUGFnZSlcbiAgY29uc3QgcmVzdWx0Q291bnRQcm9taXNlID0gU2hvcEdvb2RzLmZpbmQoZmluZFF1ZXJ5KS5jb3VudCgpXG5cbiAgY29uc3QgW3Jlc3VsdCwgcmVzdWx0Q291bnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIHJlc3VsdFByb21pc2UsXG4gICAgcmVzdWx0Q291bnRQcm9taXNlLFxuICBdKVxuXG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwocmVzdWx0Q291bnQgLyByb3dzUGVyUGFnZSlcblxuICByZXR1cm4geyBnb29kczogcmVzdWx0LCB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzIH1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVOdW1iZXIodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHN0ciA9IGdldFZhbHVlU3RyKHZhbHVlKVxuICBjb25zdCBudW1iZXIgPSBwYXJzZUludChzdHIpXG4gIHJldHVybiBpc05hTihudW1iZXIpID8gbnVsbCA6IG51bWJlclxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZVN0cih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgY29uc3Qgc3RyID0gZ2V0QXNTdHJpbmcodmFsdWUpXG4gIHJldHVybiAhc3RyIHx8IHN0ci50b0xvd2VyQ2FzZSgpID09PSAnYWxsJyA/IG51bGwgOiBzdHJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/getPaginatedItems.ts\n");

/***/ }),

/***/ "./db/connect.ts":
/*!***********************!*\
  !*** ./db/connect.ts ***!
  \***********************/
/*! exports provided: connectDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDB\", function() { return connectDB; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('MONGO_URI!!!!', process.env.MONGODB_URI);\nconst connectDB = async () => {\n  var _mongoose$connections;\n\n  if (!((_mongoose$connections = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0]) !== null && _mongoose$connections !== void 0 && _mongoose$connections.readyState)) {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {\n      useUnifiedTopology: true,\n      useFindAndModify: false,\n      useCreateIndex: true,\n      useNewUrlParser: true\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi9jb25uZWN0LnRzP2RlZjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3REQiIsIm1vbmdvb3NlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsInVzZU5ld1VybFBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBekM7QUFFTyxNQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUFBOztBQUNuQyxNQUFJLDJCQUFDQywrQ0FBUSxDQUFDQyxXQUFULENBQXFCLENBQXJCLENBQUQsa0RBQUMsc0JBQXlCQyxVQUExQixDQUFKLEVBQTBDO0FBQ3hDLFVBQU1GLCtDQUFRLENBQUNHLE9BQVQsQ0FBaUJQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUE3QixFQUEwQztBQUM5Q00sd0JBQWtCLEVBQUUsSUFEMEI7QUFFOUNDLHNCQUFnQixFQUFFLEtBRjRCO0FBRzlDQyxvQkFBYyxFQUFFLElBSDhCO0FBSTlDQyxxQkFBZSxFQUFFO0FBSjZCLEtBQTFDLENBQU47QUFNRDtBQUNGLENBVE0iLCJmaWxlIjoiLi9kYi9jb25uZWN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zb2xlLmxvZygnTU9OR09fVVJJISEhIScsIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKVxuXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoIW1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdPy5yZWFkeVN0YXRlKSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db/connect.ts\n");

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

/***/ "./pages/api/shop.ts":
/*!***************************!*\
  !*** ./pages/api/shop.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shop; });\n/* harmony import */ var _database_getPaginatedItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/getPaginatedItems */ \"./database/getPaginatedItems.ts\");\n\nasync function shop(req, res) {\n  const shop = await Object(_database_getPaginatedItems__WEBPACK_IMPORTED_MODULE_0__[\"getPaginatedItem\"])(req.query);\n  res.json(shop);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2hvcC50cz80NDYwIl0sIm5hbWVzIjpbInNob3AiLCJyZXEiLCJyZXMiLCJnZXRQYWdpbmF0ZWRJdGVtIiwicXVlcnkiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGVBQWVBLElBQWYsQ0FBb0JDLEdBQXBCLEVBQXlDQyxHQUF6QyxFQUErRDtBQUM1RSxRQUFNRixJQUFJLEdBQUcsTUFBTUcsb0ZBQWdCLENBQUNGLEdBQUcsQ0FBQ0csS0FBTCxDQUFuQztBQUNBRixLQUFHLENBQUNHLElBQUosQ0FBU0wsSUFBVDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Nob3AudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IGdldFBhZ2luYXRlZEl0ZW0gfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9nZXRQYWdpbmF0ZWRJdGVtcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2hvcChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCBzaG9wID0gYXdhaXQgZ2V0UGFnaW5hdGVkSXRlbShyZXEucXVlcnkpXG4gIHJlcy5qc29uKHNob3ApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/shop.ts\n");

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