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
  email: String,
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





async function checkAmountOfProducts(products) {
  const productsOutOfStock = [];

  for (let product of products) {
    const [id, amount] = product;
    const currentProductData = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__["default"].findById(id);

    if (currentProductData.amountOfGoods - amount < 0) {
      productsOutOfStock.push(currentProductData);
    }
  }

  return productsOutOfStock;
}

async function decreaseProducts(products) {
  let result = true;

  for (let product of products) {
    const [id, amount] = product;
    const currentProductData = await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__["default"].findById(id);

    if (currentProductData.amountOfGoods - amount >= 0) {
      await _models_shopGoods__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(id, {
        amountOfGoods: currentProductData.amountOfGoods - amount
      });
    } else {
      result = false;
    }
  }

  return result;
}

const handler = async (req, res) => {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])({
    req
  });

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы'
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
      const checkAmount = await checkAmountOfProducts(goodsFromOrders);

      if (checkAmount.length != 0) {
        return res.status(201).json({
          message: 'Отдельные позиции отсутствуют на складе',
          outOfStock: checkAmount
        });
      }

      const newOrder = new _models_newOrder__WEBPACK_IMPORTED_MODULE_2__["default"]({
        email: session.user.email,
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
      console.log(1111, newOrder);
      const decreaseStatus = await decreaseProducts(goodsFromOrders);

      if (decreaseStatus) {
        const response = await newOrder.save();
        return res.status(201).json({
          message: 'Заказ успешно оформлен',
          order: response.toJSON()
        });
      } else {
        return res.status(201).json({
          message: 'Что-то пошло не так попробуйте позднее'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29ubmVjdERiLnRzIiwid2VicGFjazovLy8uL21vZGVscy9uZXdPcmRlci50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcEdvb2RzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hZGRuZXdvcmRlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibW9uZ29vc2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwiU2NoZW1hIiwibmV3T3JkZXIiLCJlbWFpbCIsIlN0cmluZyIsImZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJmYXRoZXJOYW1lIiwiemlwIiwiY291bnRyeSIsInJlZ2lvbiIsImNpdHkiLCJhZGRyZXNzIiwicGhvbmUiLCJjb21tZW50cyIsIm9yZGVyIiwiX2lkIiwibmFtZU9mR29vZHMiLCJhbW91bnRPZkdvb2RzIiwiTnVtYmVyIiwicHJpY2VPZkdvb2RzIiwidG90YWxQcmljZSIsInNoaXBwaW5nUHJpY2UiLCJzdGF0dXMiLCJ0eXBlIiwiZGVmYXVsdCIsImRhdGUiLCJEYXRlIiwibW9kZWxzIiwiTmV3T3JkZXIiLCJtb2RlbCIsInNob3BHb29kcyIsInVuaXF1ZSIsInJlcXVpcmVkIiwibWlubGVuZ3RoIiwiY2F0YWxvZ051bWJlciIsImNhdGVnb3J5IiwiaW1hZ2VVcmwiLCJTaG9wR29vZHMiLCJjaGVja0Ftb3VudE9mUHJvZHVjdHMiLCJwcm9kdWN0cyIsInByb2R1Y3RzT3V0T2ZTdG9jayIsInByb2R1Y3QiLCJpZCIsImFtb3VudCIsImN1cnJlbnRQcm9kdWN0RGF0YSIsImZpbmRCeUlkIiwicHVzaCIsImRlY3JlYXNlUHJvZHVjdHMiLCJyZXN1bHQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwic2VuZCIsImVycm9yIiwibWV0aG9kIiwiYm9keSIsImdvb2RzRnJvbU9yZGVycyIsIm1hcCIsImVsIiwiY2hlY2tBbW91bnQiLCJsZW5ndGgiLCJqc29uIiwibWVzc2FnZSIsIm91dE9mU3RvY2siLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRlY3JlYXNlU3RhdHVzIiwicmVzcG9uc2UiLCJzYXZlIiwidG9KU09OIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFB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ZXMvYXBpL2FkZG5ld29yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYWRkbmV3b3JkZXIudHNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuY29uc3QgY29ubmVjdERCID1cclxuICAoaGFuZGxlcjogYW55KSA9PiBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICAgIC8vIFVzZSBjdXJyZW50IGRiIGNvbm5lY3Rpb25cclxuICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpXHJcbiAgICB9XHJcbiAgICAvLyBVc2UgbmV3IGRiIGNvbm5lY3Rpb25cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCXHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJ1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWFcclxuXHJcbmludGVyZmFjZSBJTmV3T3JkZXIgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgc2Vjb25kTmFtZTogc3RyaW5nXHJcbiAgZmF0aGVyTmFtZTogc3RyaW5nXHJcbiAgemlwOiBzdHJpbmdcclxuICBjb3VudHJ5OiBzdHJpbmdcclxuICByZWdpb246IHN0cmluZ1xyXG4gIGNpdHk6IHN0cmluZ1xyXG4gIGFkZHJlc3M6IHN0cmluZ1xyXG4gIHBob25lOiBzdHJpbmdcclxuICBjb21tZW50czogc3RyaW5nXHJcbiAgb3JkZXI6IHN0cmluZ1tdXHJcbiAgdG90YWxQcmljZTogbnVtYmVyXHJcbiAgc2hpcHBpbmdQcmljZTogbnVtYmVyXHJcbiAgc3RhdHVzOiAnb3BlbicgfCAncGFpZCcgfCAnc2hpcHBlZCcgfCAncmVjZWl2ZWQnIHwgJ2Nsb3NlZCdcclxuICBkYXRlOiBEYXRlXHJcbn1cclxuXHJcbmNvbnN0IG5ld09yZGVyID0gbmV3IFNjaGVtYTxJTmV3T3JkZXI+KHtcclxuICBlbWFpbDogU3RyaW5nLFxyXG4gIGZpcnN0TmFtZTogU3RyaW5nLFxyXG4gIHNlY29uZE5hbWU6IFN0cmluZyxcclxuICBmYXRoZXJOYW1lOiBTdHJpbmcsXHJcbiAgemlwOiBTdHJpbmcsXHJcbiAgY291bnRyeTogU3RyaW5nLFxyXG4gIHJlZ2lvbjogU3RyaW5nLFxyXG4gIGNpdHk6IFN0cmluZyxcclxuICBhZGRyZXNzOiBTdHJpbmcsXHJcbiAgcGhvbmU6IFN0cmluZyxcclxuICBjb21tZW50czogU3RyaW5nLFxyXG4gIG9yZGVyOiBbXHJcbiAgICB7XHJcbiAgICAgIF9pZDogU3RyaW5nLFxyXG4gICAgICBuYW1lT2ZHb29kczogU3RyaW5nLFxyXG4gICAgICBhbW91bnRPZkdvb2RzOiBOdW1iZXIsXHJcbiAgICAgIHByaWNlT2ZHb29kczogTnVtYmVyLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIHRvdGFsUHJpY2U6IE51bWJlcixcclxuICBzaGlwcGluZ1ByaWNlOiBOdW1iZXIsXHJcbiAgc3RhdHVzOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnb3BlbicsXHJcbiAgfSxcclxuICBkYXRlOiBEYXRlLFxyXG59KVxyXG5cclxuLy8gdG8gYXZvaWQgb3ZlcndyaXRlIGVycnJvcj8/P1xyXG4vLyBAdHMtaWdub3JlXHJcbm1vbmdvb3NlLm1vZGVscyA9IHt9XHJcblxyXG5jb25zdCBOZXdPcmRlciA9IG1vbmdvb3NlLm1vZGVsPElOZXdPcmRlcj4oJ05ld09yZGVyJywgbmV3T3JkZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdPcmRlclxyXG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYVxyXG5cclxuaW50ZXJmYWNlIElTaG9wR29vZHMgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgbmFtZU9mR29vZHM6IHN0cmluZ1xyXG4gIGFtb3VudE9mR29vZHM6IG51bWJlclxyXG4gIHByaWNlT2ZHb29kczogbnVtYmVyXHJcbiAgY2F0YWxvZ051bWJlcjogc3RyaW5nXHJcbiAgY291bnRyeTogc3RyaW5nXHJcbiAgY2F0ZWdvcnk6IHN0cmluZ1xyXG4gIGltYWdlUGF0aDogc3RyaW5nW11cclxuICBkYXRlOiBEYXRlXHJcbn1cclxuXHJcbmNvbnN0IHNob3BHb29kcyA9IG5ldyBTY2hlbWE8SVNob3BHb29kcz4oe1xyXG4gIG5hbWVPZkdvb2RzOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIG1pbmxlbmd0aDogMyxcclxuICB9LFxyXG4gIGFtb3VudE9mR29vZHM6IE51bWJlcixcclxuICBwcmljZU9mR29vZHM6IE51bWJlcixcclxuICBjYXRhbG9nTnVtYmVyOiBTdHJpbmcsXHJcbiAgY291bnRyeTogU3RyaW5nLFxyXG4gIGNhdGVnb3J5OiBTdHJpbmcsXHJcbiAgaW1hZ2VVcmw6IFtTdHJpbmddLFxyXG4gIGRhdGU6IERhdGUsXHJcbn0pXHJcblxyXG4vLyB0byBhdm9pZCBvdmVyd3JpdGUgZXJycm9yPz8/XHJcbi8vIEB0cy1pZ25vcmVcclxubW9uZ29vc2UubW9kZWxzID0ge31cclxuXHJcbmNvbnN0IFNob3BHb29kcyA9IG1vbmdvb3NlLm1vZGVsPElTaG9wR29vZHM+KCdTaG9wR29vZHMnLCBzaG9wR29vZHMpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wR29vZHNcclxuIiwiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vZGIvY29ubmVjdERiJ1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IE5ld09yZGVyIGZyb20gJy4uLy4uL21vZGVscy9uZXdPcmRlcidcclxuaW1wb3J0IFNob3BHb29kcyBmcm9tICcuLi8uLi9tb2RlbHMvc2hvcEdvb2RzJ1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBbW91bnRPZlByb2R1Y3RzKHByb2R1Y3RzKSB7XHJcbiAgY29uc3QgcHJvZHVjdHNPdXRPZlN0b2NrID0gW11cclxuICBmb3IgKGxldCBwcm9kdWN0IG9mIHByb2R1Y3RzKSB7XHJcbiAgICBjb25zdCBbaWQsIGFtb3VudF0gPSBwcm9kdWN0XHJcbiAgICBjb25zdCBjdXJyZW50UHJvZHVjdERhdGEgPSBhd2FpdCBTaG9wR29vZHMuZmluZEJ5SWQoaWQpXHJcbiAgICBpZiAoY3VycmVudFByb2R1Y3REYXRhLmFtb3VudE9mR29vZHMgLSBhbW91bnQgPCAwKSB7XHJcbiAgICAgIHByb2R1Y3RzT3V0T2ZTdG9jay5wdXNoKGN1cnJlbnRQcm9kdWN0RGF0YSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHByb2R1Y3RzT3V0T2ZTdG9ja1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWNyZWFzZVByb2R1Y3RzKHByb2R1Y3RzKSB7XHJcbiAgbGV0IHJlc3VsdCA9IHRydWVcclxuICBmb3IgKGxldCBwcm9kdWN0IG9mIHByb2R1Y3RzKSB7XHJcbiAgICBjb25zdCBbaWQsIGFtb3VudF0gPSBwcm9kdWN0XHJcbiAgICBjb25zdCBjdXJyZW50UHJvZHVjdERhdGEgPSBhd2FpdCBTaG9wR29vZHMuZmluZEJ5SWQoaWQpXHJcbiAgICBpZiAoY3VycmVudFByb2R1Y3REYXRhLmFtb3VudE9mR29vZHMgLSBhbW91bnQgPj0gMCkge1xyXG4gICAgICBhd2FpdCBTaG9wR29vZHMuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHtcclxuICAgICAgICBhbW91bnRPZkdvb2RzOiBjdXJyZW50UHJvZHVjdERhdGEuYW1vdW50T2ZHb29kcyAtIGFtb3VudCxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBlcnJvcjogJ9CS0Ysg0LTQvtC70LbQvdGLINCx0YvRgtGMINCw0LLRgtC+0YDQuNC30L7QstCw0L3RiycsXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgIHNlY29uZE5hbWUsXHJcbiAgICAgICAgZmF0aGVyTmFtZSxcclxuICAgICAgICB6aXAsXHJcbiAgICAgICAgY291bnRyeSxcclxuICAgICAgICByZWdpb24sXHJcbiAgICAgICAgY2l0eSxcclxuICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgIG9yZGVyLFxyXG4gICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2hpcHBpbmdQcmljZSxcclxuICAgICAgfSA9IHJlcS5ib2R5XHJcblxyXG4gICAgICBjb25zdCBnb29kc0Zyb21PcmRlcnMgPSBvcmRlci5tYXAoKGVsKSA9PiBbZWwuX2lkLCBlbC5hbW91bnRPZkdvb2RzXSlcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrQW1vdW50ID0gYXdhaXQgY2hlY2tBbW91bnRPZlByb2R1Y3RzKGdvb2RzRnJvbU9yZGVycylcclxuXHJcbiAgICAgIGlmIChjaGVja0Ftb3VudC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgICBtZXNzYWdlOiAn0J7RgtC00LXQu9GM0L3Ri9C1INC/0L7Qt9C40YbQuNC4INC+0YLRgdGD0YLRgdGC0LLRg9GO0YIg0L3QsCDRgdC60LvQsNC00LUnLFxyXG4gICAgICAgICAgb3V0T2ZTdG9jazogY2hlY2tBbW91bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3T3JkZXIgPSBuZXcgTmV3T3JkZXIoe1xyXG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgIHNlY29uZE5hbWUsXHJcbiAgICAgICAgZmF0aGVyTmFtZSxcclxuICAgICAgICB6aXAsXHJcbiAgICAgICAgY291bnRyeSxcclxuICAgICAgICByZWdpb24sXHJcbiAgICAgICAgY2l0eSxcclxuICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgIG9yZGVyLFxyXG4gICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2hpcHBpbmdQcmljZSxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc29sZS5sb2coMTExMSwgbmV3T3JkZXIpXHJcblxyXG4gICAgICBjb25zdCBkZWNyZWFzZVN0YXR1cyA9IGF3YWl0IGRlY3JlYXNlUHJvZHVjdHMoZ29vZHNGcm9tT3JkZXJzKVxyXG5cclxuICAgICAgaWYgKGRlY3JlYXNlU3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXdPcmRlci5zYXZlKClcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKDIwMSlcclxuICAgICAgICAgIC5qc29uKHsgbWVzc2FnZTogJ9CX0LDQutCw0Lcg0YPRgdC/0LXRiNC90L4g0L7RhNC+0YDQvNC70LXQvScsIG9yZGVyOiByZXNwb25zZS50b0pTT04oKSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgICBtZXNzYWdlOiAn0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiDQv9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQtNC90LXQtScsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MjIpLnNlbmQoJ1JlcXVlc3QgbWV0aG9kIG5vdCBzdXBwb3J0ZWQnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCKGhhbmRsZXIpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==