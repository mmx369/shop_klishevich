module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db/dbConnect.ts":
/*!*************************!*\
  !*** ./db/dbConnect.ts ***!
  \*************************/
/*! exports provided: dbConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbConnect", function() { return dbConnect; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function dbConnect() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  try {
    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('bufferTimeoutMS', 30000);
    let conn = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(MONGODB_URI, opts);
    console.log('Connected to MongoDB');
    return conn;
  } catch (err) {
    console.log(err);
  }
}

/***/ }),

/***/ "./models/shopUser.ts":
/*!****************************!*\
  !*** ./models/shopUser.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/ERole */ "./types/ERole.ts");


const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const shopUser = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: _types_ERole__WEBPACK_IMPORTED_MODULE_1__["ERole"].Client
  },
  name: String,
  date: Date,
  passwordHash: String,
  orders: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'ShopOrders'
  }],
  cart: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'ShopGoods',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
}); //@ts-ignore

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models = {};
const ShopUser = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('ShopUser', shopUser);
/* harmony default export */ __webpack_exports__["default"] = (ShopUser);

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_shopUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/shopUser */ "./models/shopUser.ts");
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../db/dbConnect */ "./db/dbConnect.ts");




const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({
    clientId: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Email({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    },
    from: process.env.EMAIL_FROM
  })],
  database: process.env.MONGODB_URI,
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async signIn(user, account, profile) {
      await Object(_db_dbConnect__WEBPACK_IMPORTED_MODULE_3__["dbConnect"])();

      try {
        const candidate = await _models_shopUser__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
          email: user.email
        });

        if (!candidate) {
          const newShopUser = new _models_shopUser__WEBPACK_IMPORTED_MODULE_2__["default"]({
            email: user.email,
            name: user.name,
            image: user.image,
            date: new Date()
          });
          await newShopUser.save();
          console.log('New user added');
          return;
        }

        return;
      } catch (e) {
        console.error(e);
      }

      const isAllowedToSignIn = true;

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false; // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },

    async session(session, token) {
      await Object(_db_dbConnect__WEBPACK_IMPORTED_MODULE_3__["dbConnect"])();

      if (session) {
        try {
          const {
            email
          } = session.user;
          const shopUser = await _models_shopUser__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
            email
          });
          session.databaseId = shopUser._id;
          session.role = shopUser.role;
        } catch (error) {
          console.error(error);
        }
      }

      session.someInfo = 'testing';
      return session;
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  return next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);
});

/***/ }),

/***/ "./types/ERole.ts":
/*!************************!*\
  !*** ./types/ERole.ts ***!
  \************************/
/*! exports provided: ERole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERole", function() { return ERole; });
let ERole;

(function (ERole) {
  ERole["Admin"] = "admin";
  ERole["Client"] = "client";
})(ERole || (ERole = {}));

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvZGJDb25uZWN0LnRzIiwid2VicGFjazovLy8uL21vZGVscy9zaG9wVXNlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwid2VicGFjazovLy8uL3R5cGVzL0VSb2xlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sIm5hbWVzIjpbIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiZGJDb25uZWN0Iiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsIm1vbmdvb3NlIiwic2V0IiwiY29ubiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiU2NoZW1hIiwic2hvcFVzZXIiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInJvbGUiLCJkZWZhdWx0IiwiRVJvbGUiLCJDbGllbnQiLCJuYW1lIiwiZGF0ZSIsIkRhdGUiLCJwYXNzd29yZEhhc2giLCJvcmRlcnMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY2FydCIsInByb2R1Y3RJZCIsInF1YW50aXR5IiwiTnVtYmVyIiwibW9kZWxzIiwiU2hvcFVzZXIiLCJtb2RlbCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJGYWNlYm9vayIsIkZBQ0VCT09LX0lEIiwiRkFDRUJPT0tfU0VDUkVUIiwiRW1haWwiLCJzZXJ2ZXIiLCJob3N0IiwiRU1BSUxfU0VSVkVSX0hPU1QiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJFTUFJTF9TRVJWRVJfVVNFUiIsInBhc3MiLCJFTUFJTF9TRVJWRVJfUEFTU1dPUkQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsImRhdGFiYXNlIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJhY2NvdW50IiwicHJvZmlsZSIsImNhbmRpZGF0ZSIsImZpbmRPbmUiLCJuZXdTaG9wVXNlciIsImltYWdlIiwic2F2ZSIsImUiLCJlcnJvciIsImlzQWxsb3dlZFRvU2lnbkluIiwic2Vzc2lvbiIsInRva2VuIiwiZGF0YWJhc2VJZCIsIl9pZCIsInNvbWVJbmZvIiwicmVxIiwicmVzIiwiTmV4dEF1dGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFB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Lm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c1wiKTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGNvbnN0IG9wdHMgPSB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gIH1cclxuICB0cnkge1xyXG4gICAgbW9uZ29vc2Uuc2V0KCdidWZmZXJUaW1lb3V0TVMnLCAzMDAwMClcclxuICAgIGxldCBjb25uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cylcclxuICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpXHJcbiAgICByZXR1cm4gY29ublxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIE1vZGVsLCBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJ1xyXG5pbXBvcnQgeyBFUm9sZSB9IGZyb20gJy4uL3R5cGVzL0VSb2xlJ1xyXG5cclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXHJcblxyXG5pbnRlcmZhY2UgSVNob3BVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICByb2xlOiBFUm9sZS5BZG1pbiB8IEVSb2xlLkNsaWVudFxyXG4gIGRhdGU6IERhdGVcclxuICBwYXNzd29yZEhhc2g6IHN0cmluZ1xyXG4gIG9yZGVyczogVHlwZXMuT2JqZWN0SWRcclxuICBjYXJ0OiBhbnlbXVxyXG59XHJcblxyXG5jb25zdCBzaG9wVXNlciA9IG5ldyBTY2hlbWE8SVNob3BVc2VyPih7XHJcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgcm9sZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogRVJvbGUuQ2xpZW50LFxyXG4gIH0sXHJcbiAgbmFtZTogU3RyaW5nLFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgcGFzc3dvcmRIYXNoOiBTdHJpbmcsXHJcbiAgb3JkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgcmVmOiAnU2hvcE9yZGVycycsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2FydDogW1xyXG4gICAge1xyXG4gICAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVmOiAnU2hvcEdvb2RzJyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgcXVhbnRpdHk6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5cclxuLy9AdHMtaWdub3JlXHJcbm1vbmdvb3NlLm1vZGVscyA9IHt9XHJcblxyXG5jb25zdCBTaG9wVXNlciA9IG1vbmdvb3NlLm1vZGVsPElTaG9wVXNlcj4oJ1Nob3BVc2VyJywgc2hvcFVzZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wVXNlclxyXG4iLCJpbXBvcnQgTmV4dEF1dGgsIHsgVXNlciB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgVFVzZXJTZXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdXNlclNlc3Npb24nXHJcbmltcG9ydCBTaG9wVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvc2hvcFVzZXInXHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4uLy4uLy4uL2RiL2RiQ29ubmVjdCdcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR29vZ2xlKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBQcm92aWRlcnMuRmFjZWJvb2soe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBQcm92aWRlcnMuRW1haWwoe1xyXG4gICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfSE9TVCxcclxuICAgICAgICBwb3J0OiA1ODcsXHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1VTRVIsXHJcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUEFTU1dPUkQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLFxyXG4gIHBhZ2VzOiB7IHNpZ25JbjogJy9zaWduaW4nIH0sXHJcblxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2lnbkluKHVzZXI6IFVzZXIsIGFjY291bnQ6IGFueSwgcHJvZmlsZTogYW55KSB7XHJcbiAgICAgIGF3YWl0IGRiQ29ubmVjdCgpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gYXdhaXQgU2hvcFVzZXIuZmluZE9uZSh7XHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3U2hvcFVzZXIgPSBuZXcgU2hvcFVzZXIoe1xyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZSxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBhd2FpdCBuZXdTaG9wVXNlci5zYXZlKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgdXNlciBhZGRlZCcpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpc0FsbG93ZWRUb1NpZ25JbiA9IHRydWVcclxuXHJcbiAgICAgIGlmIChpc0FsbG93ZWRUb1NpZ25Jbikge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIGRpc3BsYXkgYSBkZWZhdWx0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAvLyBPciB5b3UgY2FuIHJldHVybiBhIFVSTCB0byByZWRpcmVjdCB0bzpcclxuICAgICAgICAvLyByZXR1cm4gJy91bmF1dGhvcml6ZWQnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uOiBUVXNlclNlc3Npb24sIHRva2VuOiBhbnkpIHtcclxuICAgICAgYXdhaXQgZGJDb25uZWN0KClcclxuICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gc2Vzc2lvbi51c2VyXHJcbiAgICAgICAgICBjb25zdCBzaG9wVXNlciA9IGF3YWl0IFNob3BVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KVxyXG5cclxuICAgICAgICAgIHNlc3Npb24uZGF0YWJhc2VJZCA9IHNob3BVc2VyLl9pZFxyXG4gICAgICAgICAgc2Vzc2lvbi5yb2xlID0gc2hvcFVzZXIucm9sZVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXNzaW9uLnNvbWVJbmZvID0gJ3Rlc3RpbmcnXHJcbiAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucylcclxufVxyXG4iLCJleHBvcnQgZW51bSBFUm9sZSB7XHJcbiAgQWRtaW4gPSAnYWRtaW4nLFxyXG4gIENsaWVudCA9ICdjbGllbnQnLFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=