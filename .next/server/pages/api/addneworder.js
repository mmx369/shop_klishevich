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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/addneworder.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db/connectDb.ts":
/*!*************************!*\
  !*** ./db/connectDb.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = handler => async (req, res) => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  } // Use new db connection


  await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {
    //@ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  return handler(req, res);
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "./models/newOrder.ts":
/*!****************************!*\
  !*** ./models/newOrder.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const newOrder = new Schema({
  firstName: String,
  secondName: String,
  fatherName: String,
  zip: String,
  country: String,
  region: String,
  city: String,
  address: String,
  phone: String,
  comments: String,
  order: [{
    _id: String,
    nameOfGoods: String,
    amountOfGoods: Number,
    priceOfGoods: Number
  }],
  totalPrice: Number,
  shippingPrice: Number,
  status: {
    type: String,
    default: 'open'
  },
  date: Date
}); // to avoid overwrite errror???
// @ts-ignore

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models = {};
const NewOrder = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('NewOrder', newOrder);
/* harmony default export */ __webpack_exports__["default"] = (NewOrder);

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

/***/ "./pages/api/addneworder.ts":
/*!**********************************!*\
  !*** ./pages/api/addneworder.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/connectDb */ "./db/connectDb.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_newOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/newOrder */ "./models/newOrder.ts");
/* harmony import */ var _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/shopGoods */ "./models/shopGoods.ts");





async function decreaseAmountOfGoods(arr) {
  const goodsOutOfStock = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const [id, amountOfGoods] = el;
    const goods = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__["default"].findById(id);
    console.log('goods', goods);

    if (goods.amountOfGoods - amountOfGoods < 0) {
      goodsOutOfStock.push(goods);
    } else {
      await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(id, {
        amountOfGoods: goods.amountOfGoods - amountOfGoods
      });
    }
  }

  return goodsOutOfStock;
}

const handler = async (req, res) => {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])({
    req
  });

  if (!session) {
    res.send({
      error: 'You must be authorized'
    });
    return;
  }

  if (req.method === 'POST') {
    try {
      const {
        firstName,
        secondName,
        fatherName,
        zip,
        country,
        region,
        city,
        address,
        phone,
        comments,
        order,
        totalPrice,
        shippingPrice
      } = req.body;
      const goodsFromOrders = order.map(el => [el._id, el.amountOfGoods]);
      const checkAmount = await decreaseAmountOfGoods(goodsFromOrders);
      const newOrder = new _models_newOrder__WEBPACK_IMPORTED_MODULE_2__["default"]({
        firstName,
        secondName,
        fatherName,
        zip,
        country,
        region,
        city,
        address,
        phone,
        comments,
        order,
        totalPrice,
        shippingPrice,
        date: new Date()
      });
      const response = await newOrder.save();

      if (checkAmount.length != 0) {
        return res.status(201).json({
          message: 'Отдельные позиции отсутствуют на складе',
          order: response.toJSON(),
          outOfStock: checkAmount
        });
      } else {
        return res.status(201).json({
          message: 'Заказ успешно оформлен',
          order: response.toJSON()
        });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  } else {
    res.status(422).send('Request method not supported');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_db_connectDb__WEBPACK_IMPORTED_MODULE_0__["default"])(handler));

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29ubmVjdERiLnRzIiwid2VicGFjazovLy8uL21vZGVscy9uZXdPcmRlci50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcEdvb2RzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hZGRuZXdvcmRlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibW9uZ29vc2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwiU2NoZW1hIiwibmV3T3JkZXIiLCJmaXJzdE5hbWUiLCJTdHJpbmciLCJzZWNvbmROYW1lIiwiZmF0aGVyTmFtZSIsInppcCIsImNvdW50cnkiLCJyZWdpb24iLCJjaXR5IiwiYWRkcmVzcyIsInBob25lIiwiY29tbWVudHMiLCJvcmRlciIsIl9pZCIsIm5hbWVPZkdvb2RzIiwiYW1vdW50T2ZHb29kcyIsIk51bWJlciIsInByaWNlT2ZHb29kcyIsInRvdGFsUHJpY2UiLCJzaGlwcGluZ1ByaWNlIiwic3RhdHVzIiwidHlwZSIsImRlZmF1bHQiLCJkYXRlIiwiRGF0ZSIsIm1vZGVscyIsIk5ld09yZGVyIiwibW9kZWwiLCJzaG9wR29vZHMiLCJ1bmlxdWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImNhdGFsb2dOdW1iZXIiLCJjYXRlZ29yeSIsImltYWdlVXJsIiwiU2hvcEdvb2RzIiwiZGVjcmVhc2VBbW91bnRPZkdvb2RzIiwiYXJyIiwiZ29vZHNPdXRPZlN0b2NrIiwiaSIsImxlbmd0aCIsImVsIiwiaWQiLCJnb29kcyIsImZpbmRCeUlkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwic2VuZCIsImVycm9yIiwibWV0aG9kIiwiYm9keSIsImdvb2RzRnJvbU9yZGVycyIsIm1hcCIsImNoZWNrQW1vdW50IiwicmVzcG9uc2UiLCJzYXZlIiwianNvbiIsIm1lc3NhZ2UiLCJ0b0pTT04iLCJvdXRPZlN0b2NrIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBOztBQUdBLE1BQU1BLFNBQVMsR0FDWkMsT0FBRCxJQUFrQixPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNyRSxNQUFJQywrQ0FBUSxDQUFDQyxXQUFULENB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ZUFBSyxFQUFFOEMsUUFBUSxDQUFDSSxNQUFUO0FBQTVDLFNBRkQsQ0FBUDtBQUdEO0FBQ0YsS0FsREQsQ0FrREUsT0FBT0UsR0FBUCxFQUFZO0FBQ1osYUFBTzdFLEdBQUcsQ0FBQ2lDLE1BQUosQ0FBVyxHQUFYLEVBQWdCK0IsSUFBaEIsQ0FBcUJhLEdBQUcsQ0FBQ0gsT0FBekIsQ0FBUDtBQUNEO0FBQ0YsR0F0REQsTUFzRE87QUFDTDFFLE9BQUcsQ0FBQ2lDLE1BQUosQ0FBVyxHQUFYLEVBQWdCK0IsSUFBaEIsQ0FBcUIsOEJBQXJCO0FBQ0Q7QUFDRixDQW5FRDs7QUFxRWVuRSw0SEFBUyxDQUFDQyxPQUFELENBQXhCLEU7Ozs7Ozs7Ozs7O0FDN0ZBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2FwaS9hZGRuZXdvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2FkZG5ld29yZGVyLnRzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9XHJcbiAgKGhhbmRsZXI6IGFueSkgPT4gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgICAvLyBVc2UgY3VycmVudCBkYiBjb25uZWN0aW9uXHJcbiAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKVxyXG4gICAgfVxyXG4gICAgLy8gVXNlIG5ldyBkYiBjb25uZWN0aW9uXHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQlxyXG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSdcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAneXVwL2xpYi9sb2NhbGUnXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYVxyXG5cclxuaW50ZXJmYWNlIElOZXdPcmRlciBleHRlbmRzIERvY3VtZW50IHtcclxuICBmaXJzdE5hbWU6IHN0cmluZ1xyXG4gIHNlY29uZE5hbWU6IHN0cmluZ1xyXG4gIGZhdGhlck5hbWU6IHN0cmluZ1xyXG4gIHppcDogc3RyaW5nXHJcbiAgY291bnRyeTogc3RyaW5nXHJcbiAgcmVnaW9uOiBzdHJpbmdcclxuICBjaXR5OiBzdHJpbmdcclxuICBhZGRyZXNzOiBzdHJpbmdcclxuICBwaG9uZTogc3RyaW5nXHJcbiAgY29tbWVudHM6IHN0cmluZ1xyXG4gIG9yZGVyOiBzdHJpbmdbXVxyXG4gIHRvdGFsUHJpY2U6IG51bWJlclxyXG4gIHNoaXBwaW5nUHJpY2U6IG51bWJlclxyXG4gIHN0YXR1czogJ29wZW4nIHwgJ3BhaWQnIHwgJ3NoaXBwZWQnIHwgJ3JlY2VpdmVkJyB8ICdjbG9zZWQnXHJcbiAgZGF0ZTogRGF0ZVxyXG59XHJcblxyXG5jb25zdCBuZXdPcmRlciA9IG5ldyBTY2hlbWE8SU5ld09yZGVyPih7XHJcbiAgZmlyc3ROYW1lOiBTdHJpbmcsXHJcbiAgc2Vjb25kTmFtZTogU3RyaW5nLFxyXG4gIGZhdGhlck5hbWU6IFN0cmluZyxcclxuICB6aXA6IFN0cmluZyxcclxuICBjb3VudHJ5OiBTdHJpbmcsXHJcbiAgcmVnaW9uOiBTdHJpbmcsXHJcbiAgY2l0eTogU3RyaW5nLFxyXG4gIGFkZHJlc3M6IFN0cmluZyxcclxuICBwaG9uZTogU3RyaW5nLFxyXG4gIGNvbW1lbnRzOiBTdHJpbmcsXHJcbiAgb3JkZXI6IFtcclxuICAgIHtcclxuICAgICAgX2lkOiBTdHJpbmcsXHJcbiAgICAgIG5hbWVPZkdvb2RzOiBTdHJpbmcsXHJcbiAgICAgIGFtb3VudE9mR29vZHM6IE51bWJlcixcclxuICAgICAgcHJpY2VPZkdvb2RzOiBOdW1iZXIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgdG90YWxQcmljZTogTnVtYmVyLFxyXG4gIHNoaXBwaW5nUHJpY2U6IE51bWJlcixcclxuICBzdGF0dXM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdvcGVuJyxcclxuICB9LFxyXG4gIGRhdGU6IERhdGUsXHJcbn0pXHJcblxyXG4vLyB0byBhdm9pZCBvdmVyd3JpdGUgZXJycm9yPz8/XHJcbi8vIEB0cy1pZ25vcmVcclxubW9uZ29vc2UubW9kZWxzID0ge31cclxuXHJcbmNvbnN0IE5ld09yZGVyID0gbW9uZ29vc2UubW9kZWw8SU5ld09yZGVyPignTmV3T3JkZXInLCBuZXdPcmRlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld09yZGVyXHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBEb2N1bWVudCwgVHlwZXMgfSBmcm9tICdtb25nb29zZSdcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXHJcblxyXG5pbnRlcmZhY2UgSVNob3BHb29kcyBleHRlbmRzIERvY3VtZW50IHtcclxuICBuYW1lT2ZHb29kczogc3RyaW5nXHJcbiAgYW1vdW50T2ZHb29kczogbnVtYmVyXHJcbiAgcHJpY2VPZkdvb2RzOiBudW1iZXJcclxuICBjYXRhbG9nTnVtYmVyOiBzdHJpbmdcclxuICBjb3VudHJ5OiBzdHJpbmdcclxuICBjYXRlZ29yeTogc3RyaW5nXHJcbiAgaW1hZ2VQYXRoOiBzdHJpbmdbXVxyXG4gIGRhdGU6IERhdGVcclxufVxyXG5cclxuY29uc3Qgc2hvcEdvb2RzID0gbmV3IFNjaGVtYTxJU2hvcEdvb2RzPih7XHJcbiAgbmFtZU9mR29vZHM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbWlubGVuZ3RoOiAzLFxyXG4gIH0sXHJcbiAgYW1vdW50T2ZHb29kczogTnVtYmVyLFxyXG4gIHByaWNlT2ZHb29kczogTnVtYmVyLFxyXG4gIGNhdGFsb2dOdW1iZXI6IFN0cmluZyxcclxuICBjb3VudHJ5OiBTdHJpbmcsXHJcbiAgY2F0ZWdvcnk6IFN0cmluZyxcclxuICBpbWFnZVVybDogW1N0cmluZ10sXHJcbiAgZGF0ZTogRGF0ZSxcclxufSlcclxuXHJcbi8vIHRvIGF2b2lkIG92ZXJ3cml0ZSBlcnJyb3I/Pz9cclxuLy8gQHRzLWlnbm9yZVxyXG5tb25nb29zZS5tb2RlbHMgPSB7fVxyXG5cclxuY29uc3QgU2hvcEdvb2RzID0gbW9uZ29vc2UubW9kZWw8SVNob3BHb29kcz4oJ1Nob3BHb29kcycsIHNob3BHb29kcylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BHb29kc1xyXG4iLCJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi9kYi9jb25uZWN0RGInXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgTmV3T3JkZXIgZnJvbSAnLi4vLi4vbW9kZWxzL25ld09yZGVyJ1xyXG5pbXBvcnQgU2hvcEdvb2RzIGZyb20gJy4uLy4uL21vZGVscy9zaG9wR29vZHMnXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWNyZWFzZUFtb3VudE9mR29vZHMoYXJyKSB7XHJcbiAgY29uc3QgZ29vZHNPdXRPZlN0b2NrID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWwgPSBhcnJbaV1cclxuICAgIGNvbnN0IFtpZCwgYW1vdW50T2ZHb29kc10gPSBlbFxyXG4gICAgY29uc3QgZ29vZHMgPSBhd2FpdCBTaG9wR29vZHMuZmluZEJ5SWQoaWQpXHJcbiAgICBjb25zb2xlLmxvZygnZ29vZHMnLCBnb29kcylcclxuICAgIGlmIChnb29kcy5hbW91bnRPZkdvb2RzIC0gYW1vdW50T2ZHb29kcyA8IDApIHtcclxuICAgICAgZ29vZHNPdXRPZlN0b2NrLnB1c2goZ29vZHMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCBTaG9wR29vZHMuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHtcclxuICAgICAgICBhbW91bnRPZkdvb2RzOiBnb29kcy5hbW91bnRPZkdvb2RzIC0gYW1vdW50T2ZHb29kcyxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGdvb2RzT3V0T2ZTdG9ja1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSlcclxuXHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIGVycm9yOiAnWW91IG11c3QgYmUgYXV0aG9yaXplZCcsXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgIHNlY29uZE5hbWUsXHJcbiAgICAgICAgZmF0aGVyTmFtZSxcclxuICAgICAgICB6aXAsXHJcbiAgICAgICAgY291bnRyeSxcclxuICAgICAgICByZWdpb24sXHJcbiAgICAgICAgY2l0eSxcclxuICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgIG9yZGVyLFxyXG4gICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2hpcHBpbmdQcmljZSxcclxuICAgICAgfSA9IHJlcS5ib2R5XHJcblxyXG4gICAgICBjb25zdCBnb29kc0Zyb21PcmRlcnMgPSBvcmRlci5tYXAoKGVsKSA9PiBbZWwuX2lkLCBlbC5hbW91bnRPZkdvb2RzXSlcclxuICAgICAgY29uc3QgY2hlY2tBbW91bnQgPSBhd2FpdCBkZWNyZWFzZUFtb3VudE9mR29vZHMoZ29vZHNGcm9tT3JkZXJzKVxyXG5cclxuICAgICAgY29uc3QgbmV3T3JkZXIgPSBuZXcgTmV3T3JkZXIoe1xyXG4gICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICBzZWNvbmROYW1lLFxyXG4gICAgICAgIGZhdGhlck5hbWUsXHJcbiAgICAgICAgemlwLFxyXG4gICAgICAgIGNvdW50cnksXHJcbiAgICAgICAgcmVnaW9uLFxyXG4gICAgICAgIGNpdHksXHJcbiAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICBwaG9uZSxcclxuICAgICAgICBjb21tZW50cyxcclxuICAgICAgICBvcmRlcixcclxuICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgIHNoaXBwaW5nUHJpY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3T3JkZXIuc2F2ZSgpXHJcblxyXG4gICAgICBpZiAoY2hlY2tBbW91bnQubGVuZ3RoICE9IDApIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ9Ce0YLQtNC10LvRjNC90YvQtSDQv9C+0LfQuNGG0LjQuCDQvtGC0YHRg9GC0YHRgtCy0YPRjtGCINC90LAg0YHQutC70LDQtNC1JyxcclxuICAgICAgICAgIG9yZGVyOiByZXNwb25zZS50b0pTT04oKSxcclxuICAgICAgICAgIG91dE9mU3RvY2s6IGNoZWNrQW1vdW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cygyMDEpXHJcbiAgICAgICAgICAuanNvbih7IG1lc3NhZ2U6ICfQl9Cw0LrQsNC3INGD0YHQv9C10YjQvdC+INC+0YTQvtGA0LzQu9C10L0nLCBvcmRlcjogcmVzcG9uc2UudG9KU09OKCkgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MjIpLnNlbmQoJ1JlcXVlc3QgbWV0aG9kIG5vdCBzdXBwb3J0ZWQnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCKGhhbmRsZXIpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==