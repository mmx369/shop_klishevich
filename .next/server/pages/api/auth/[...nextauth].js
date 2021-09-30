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
  }]
}); // to avoid overwrite errror???
// @ts-ignore

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
/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../db/connect */ "./db/connect.ts");




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
  callbacks: {
    async signIn(user, account, profile) {
      await Object(_db_connect__WEBPACK_IMPORTED_MODULE_3__["connectDB"])();

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
      await Object(_db_connect__WEBPACK_IMPORTED_MODULE_3__["connectDB"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29ubmVjdC50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcFVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIndlYnBhY2s6Ly8vLi90eXBlcy9FUm9sZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdERCIiwibW9uZ29vc2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwidXNlTmV3VXJsUGFyc2VyIiwiU2NoZW1hIiwic2hvcFVzZXIiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInJvbGUiLCJkZWZhdWx0IiwiRVJvbGUiLCJDbGllbnQiLCJuYW1lIiwiZGF0ZSIsIkRhdGUiLCJwYXNzd29yZEhhc2giLCJvcmRlcnMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwibW9kZWxzIiwiU2hvcFVzZXIiLCJtb2RlbCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJGYWNlYm9vayIsIkZBQ0VCT09LX0lEIiwiRkFDRUJPT0tfU0VDUkVUIiwiRW1haWwiLCJzZXJ2ZXIiLCJob3N0IiwiRU1BSUxfU0VSVkVSX0hPU1QiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJFTUFJTF9TRVJWRVJfVVNFUiIsInBhc3MiLCJFTUFJTF9TRVJWRVJfUEFTU1dPUkQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsImRhdGFiYXNlIiwiY2FsbGJhY2tzIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJjYW5kaWRhdGUiLCJmaW5kT25lIiwibmV3U2hvcFVzZXIiLCJpbWFnZSIsInNhdmUiLCJlIiwiZXJyb3IiLCJpc0FsbG93ZWRUb1NpZ25JbiIsInNlc3Npb24iLCJ0b2tlbiIsImRhdGFiYXNlSWQiLCJfaWQiLCJzb21lSW5mbyIsInJlcSIsInJlcyIsIk5leHRBdXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQXpDO0FBRU8sTUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFBQTs7QUFDbkMsTUFBSSwyQkFBQ0MsK0NBQVEsQ0FBQ0MsV0FBVCxDQUFxQixDQUFyQixDQUFELGtEQUFDLHNCQUF5QkMsVUFBMUIsQ0FBSixFQUEwQztBQUN4QyxVQUFNRiwrQ0FBUSxDQUFDRyxPQUFULENBQWlCUCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsRUFBMEM7QUFDOUNNLHdCQUFrQixFQUFFLElBRDBCO0FBRTlDQyxzQkFBZ0IsRUFBRSxLQUY0QjtBQUc5Q0Msb0JBQWMsRUFBRSxJQUg4QjtBQUk5Q0MscUJBQWUsRUFBRTtBQUo2QixLQUExQyxDQUFOO0FBTUQ7QUFDRixDQVRNLEM7Ozs7Ozs7Ozs7OztBQ0pQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE1BQU1DLE1BQU0sR0FBR1IsK0NBQVEsQ0FBQ1EsTUFBeEI7QUFXQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUQsTUFBSixDQUFzQjtBQUNyQ0UsT0FBSyxFQUFFO0FBQUVDLFFBQUksRUFBRUMsTUFBUjtBQUFnQkMsWUFBUSxFQUFFLElBQTFCO0FBQWdDQyxVQUFNLEVBQUU7QUFBeEMsR0FEOEI7QUFFckNDLE1BQUksRUFBRTtBQUNKSixRQUFJLEVBQUVDLE1BREY7QUFFSkksV0FBTyxFQUFFQyxrREFBSyxDQUFDQztBQUZYLEdBRitCO0FBTXJDQyxNQUFJLEVBQUVQLE1BTitCO0FBT3JDUSxNQUFJLEVBQUVDLElBUCtCO0FBUXJDQyxjQUFZLEVBQUVWLE1BUnVCO0FBU3JDVyxRQUFNLEVBQUUsQ0FDTjtBQUNFWixRQUFJLEVBQUVYLCtDQUFRLENBQUNRLE1BQVQsQ0FBZ0JnQixLQUFoQixDQUFzQkMsUUFEOUI7QUFFRUMsT0FBRyxFQUFFO0FBRlAsR0FETTtBQVQ2QixDQUF0QixDQUFqQixDLENBaUJBO0FBQ0E7O0FBQ0ExQiwrQ0FBUSxDQUFDMkIsTUFBVCxHQUFrQixFQUFsQjtBQUVBLE1BQU1DLFFBQVEsR0FBRzVCLCtDQUFRLENBQUM2QixLQUFULENBQTBCLFVBQTFCLEVBQXNDcEIsUUFBdEMsQ0FBakI7QUFFZW1CLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUEsTUFBTUUsT0FBTyxHQUFHO0FBQ2RDLFdBQVMsRUFBRSxDQUNUQywwREFBUyxDQUFDQyxNQUFWLENBQWlCO0FBQ2ZDLFlBQVEsRUFBRXRDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0MsU0FEUDtBQUVmQyxnQkFBWSxFQUFFeEMsT0FBTyxDQUFDQyxHQUFSLENBQVl3QztBQUZYLEdBQWpCLENBRFMsRUFLVEwsMERBQVMsQ0FBQ00sUUFBVixDQUFtQjtBQUNqQkosWUFBUSxFQUFFdEMsT0FBTyxDQUFDQyxHQUFSLENBQVkwQyxXQURMO0FBRWpCSCxnQkFBWSxFQUFFeEMsT0FBTyxDQUFDQyxHQUFSLENBQVkyQztBQUZULEdBQW5CLENBTFMsRUFTVFIsMERBQVMsQ0FBQ1MsS0FBVixDQUFnQjtBQUNkQyxVQUFNLEVBQUU7QUFDTkMsVUFBSSxFQUFFL0MsT0FBTyxDQUFDQyxHQUFSLENBQVkrQyxpQkFEWjtBQUVOQyxVQUFJLEVBQUUsR0FGQTtBQUdOQyxVQUFJLEVBQUU7QUFDSkMsWUFBSSxFQUFFbkQsT0FBTyxDQUFDQyxHQUFSLENBQVltRCxpQkFEZDtBQUVKQyxZQUFJLEVBQUVyRCxPQUFPLENBQUNDLEdBQVIsQ0FBWXFEO0FBRmQ7QUFIQSxLQURNO0FBU2RDLFFBQUksRUFBRXZELE9BQU8sQ0FBQ0MsR0FBUixDQUFZdUQ7QUFUSixHQUFoQixDQVRTLENBREc7QUFzQmRDLFVBQVEsRUFBRXpELE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQXRCUjtBQXdCZHdELFdBQVMsRUFBRTtBQUNULFVBQU1DLE1BQU4sQ0FBYVIsSUFBYixFQUF5QlMsT0FBekIsRUFBdUNDLE9BQXZDLEVBQXFEO0FBQ25ELFlBQU0xRCw2REFBUyxFQUFmOztBQUNBLFVBQUk7QUFDRixjQUFNMkQsU0FBUyxHQUFHLE1BQU05Qix3REFBUSxDQUFDK0IsT0FBVCxDQUFpQjtBQUN2Q2pELGVBQUssRUFBRXFDLElBQUksQ0FBQ3JDO0FBRDJCLFNBQWpCLENBQXhCOztBQUlBLFlBQUksQ0FBQ2dELFNBQUwsRUFBZ0I7QUFDZCxnQkFBTUUsV0FBVyxHQUFHLElBQUloQyx3REFBSixDQUFhO0FBQy9CbEIsaUJBQUssRUFBRXFDLElBQUksQ0FBQ3JDLEtBRG1CO0FBRS9CUyxnQkFBSSxFQUFFNEIsSUFBSSxDQUFDNUIsSUFGb0I7QUFHL0IwQyxpQkFBSyxFQUFFZCxJQUFJLENBQUNjLEtBSG1CO0FBSS9CekMsZ0JBQUksRUFBRSxJQUFJQyxJQUFKO0FBSnlCLFdBQWIsQ0FBcEI7QUFNQSxnQkFBTXVDLFdBQVcsQ0FBQ0UsSUFBWixFQUFOO0FBQ0FwRSxpQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQTtBQUNEOztBQUVEO0FBQ0QsT0FsQkQsQ0FrQkUsT0FBT29FLENBQVAsRUFBVTtBQUNWckUsZUFBTyxDQUFDc0UsS0FBUixDQUFjRCxDQUFkO0FBQ0Q7O0FBRUQsWUFBTUUsaUJBQWlCLEdBQUcsSUFBMUI7O0FBRUEsVUFBSUEsaUJBQUosRUFBdUI7QUFDckIsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQSxlQUFPLEtBQVAsQ0FGSyxDQUdMO0FBQ0E7QUFDRDtBQUNGLEtBbkNROztBQXFDVCxVQUFNQyxPQUFOLENBQWNBLE9BQWQsRUFBcUNDLEtBQXJDLEVBQWlEO0FBQy9DLFlBQU1wRSw2REFBUyxFQUFmOztBQUNBLFVBQUltRSxPQUFKLEVBQWE7QUFDWCxZQUFJO0FBQ0YsZ0JBQU07QUFBRXhEO0FBQUYsY0FBWXdELE9BQU8sQ0FBQ25CLElBQTFCO0FBQ0EsZ0JBQU10QyxRQUFRLEdBQUcsTUFBTW1CLHdEQUFRLENBQUMrQixPQUFULENBQWlCO0FBQUVqRDtBQUFGLFdBQWpCLENBQXZCO0FBRUF3RCxpQkFBTyxDQUFDRSxVQUFSLEdBQXFCM0QsUUFBUSxDQUFDNEQsR0FBOUI7QUFDQUgsaUJBQU8sQ0FBQ25ELElBQVIsR0FBZU4sUUFBUSxDQUFDTSxJQUF4QjtBQUNELFNBTkQsQ0FNRSxPQUFPaUQsS0FBUCxFQUFjO0FBQ2R0RSxpQkFBTyxDQUFDc0UsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRjs7QUFDREUsYUFBTyxDQUFDSSxRQUFSLEdBQW1CLFNBQW5CO0FBQ0EsYUFBT0osT0FBUDtBQUNEOztBQXBEUTtBQXhCRyxDQUFoQjtBQWdGZSxnRUFBQ0ssR0FBRCxFQUFzQkMsR0FBdEIsS0FBK0M7QUFDNUQsU0FBT0MsZ0RBQVEsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVcxQyxPQUFYLENBQWY7QUFDRCxDQUZELEU7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQU8sSUFBS2IsS0FBWjs7V0FBWUEsSztBQUFBQSxPO0FBQUFBLE87R0FBQUEsSyxLQUFBQSxLOzs7Ozs7Ozs7OztBQ0FaLHFDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zb2xlLmxvZygnTU9OR09fVVJJISEhIScsIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICBpZiAoIW1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdPy5yZWFkeVN0YXRlKSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSdcclxuaW1wb3J0IHsgRVJvbGUgfSBmcm9tICcuLi90eXBlcy9FUm9sZSdcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXHJcblxyXG5pbnRlcmZhY2UgSVNob3BVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICByb2xlOiBFUm9sZS5BZG1pbiB8IEVSb2xlLkNsaWVudFxyXG4gIGRhdGU6IERhdGVcclxuICBwYXNzd29yZEhhc2g6IHN0cmluZ1xyXG4gIG9yZGVyczogc3RyaW5nW11cclxufVxyXG5cclxuY29uc3Qgc2hvcFVzZXIgPSBuZXcgU2NoZW1hPElTaG9wVXNlcj4oe1xyXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIHJvbGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6IEVSb2xlLkNsaWVudCxcclxuICB9LFxyXG4gIG5hbWU6IFN0cmluZyxcclxuICBkYXRlOiBEYXRlLFxyXG4gIHBhc3N3b3JkSGFzaDogU3RyaW5nLFxyXG4gIG9yZGVyczogW1xyXG4gICAge1xyXG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIHJlZjogJ1Nob3BPcmRlcnMnLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5cclxuLy8gdG8gYXZvaWQgb3ZlcndyaXRlIGVycnJvcj8/P1xyXG4vLyBAdHMtaWdub3JlXHJcbm1vbmdvb3NlLm1vZGVscyA9IHt9XHJcblxyXG5jb25zdCBTaG9wVXNlciA9IG1vbmdvb3NlLm1vZGVsPElTaG9wVXNlcj4oJ1Nob3BVc2VyJywgc2hvcFVzZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wVXNlclxyXG4iLCJpbXBvcnQgTmV4dEF1dGgsIHsgVXNlciB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgVFVzZXJTZXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdXNlclNlc3Npb24nXHJcbmltcG9ydCBTaG9wVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvc2hvcFVzZXInXHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gJy4uLy4uLy4uL2RiL2Nvbm5lY3QnXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUHJvdmlkZXJzLkdvb2dsZSh7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgUHJvdmlkZXJzLkZhY2Vib29rKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgUHJvdmlkZXJzLkVtYWlsKHtcclxuICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX0hPU1QsXHJcbiAgICAgICAgcG9ydDogNTg3LFxyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxyXG4gICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BBU1NXT1JELFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX0ZST00sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSxcclxuXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzaWduSW4odXNlcjogVXNlciwgYWNjb3VudDogYW55LCBwcm9maWxlOiBhbnkpIHtcclxuICAgICAgYXdhaXQgY29ubmVjdERCKClcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBTaG9wVXNlci5maW5kT25lKHtcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdTaG9wVXNlciA9IG5ldyBTaG9wVXNlcih7XHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGF3YWl0IG5ld1Nob3BVc2VyLnNhdmUoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldyB1c2VyIGFkZGVkJylcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlzQWxsb3dlZFRvU2lnbkluID0gdHJ1ZVxyXG5cclxuICAgICAgaWYgKGlzQWxsb3dlZFRvU2lnbkluKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgdG8gZGlzcGxheSBhIGRlZmF1bHQgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIE9yIHlvdSBjYW4gcmV0dXJuIGEgVVJMIHRvIHJlZGlyZWN0IHRvOlxyXG4gICAgICAgIC8vIHJldHVybiAnL3VuYXV0aG9yaXplZCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBzZXNzaW9uKHNlc3Npb246IFRVc2VyU2Vzc2lvbiwgdG9rZW46IGFueSkge1xyXG4gICAgICBhd2FpdCBjb25uZWN0REIoKVxyXG4gICAgICBpZiAoc2Vzc2lvbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSBzZXNzaW9uLnVzZXJcclxuICAgICAgICAgIGNvbnN0IHNob3BVc2VyID0gYXdhaXQgU2hvcFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pXHJcblxyXG4gICAgICAgICAgc2Vzc2lvbi5kYXRhYmFzZUlkID0gc2hvcFVzZXIuX2lkXHJcbiAgICAgICAgICBzZXNzaW9uLnJvbGUgPSBzaG9wVXNlci5yb2xlXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlc3Npb24uc29tZUluZm8gPSAndGVzdGluZydcclxuICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEVSb2xlIHtcclxuICBBZG1pbiA9ICdhZG1pbicsXHJcbiAgQ2xpZW50ID0gJ2NsaWVudCcsXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==