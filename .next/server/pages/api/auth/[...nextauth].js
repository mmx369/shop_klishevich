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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KMLI");


/***/ }),

/***/ "1Vwm":
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "3vM9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connectDB; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
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

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "KMLI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1Vwm");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kD0u");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_shopUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("X5z3");
/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3vM9");




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
      await Object(_db_connect__WEBPACK_IMPORTED_MODULE_3__[/* connectDB */ "a"])();

      try {
        const candidate = await _models_shopUser__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].findOne({
          email: user.email
        });

        if (!candidate) {
          const newShopUser = new _models_shopUser__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({
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
      await Object(_db_connect__WEBPACK_IMPORTED_MODULE_3__[/* connectDB */ "a"])();

      if (session) {
        try {
          const {
            email
          } = session.user;
          const shopUser = await _models_shopUser__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].findOne({
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

/***/ "SAJh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERole; });
let ERole;

(function (ERole) {
  ERole["Admin"] = "admin";
  ERole["Client"] = "client";
})(ERole || (ERole = {}));

/***/ }),

/***/ "X5z3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SAJh");


const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const shopUser = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: _types_ERole__WEBPACK_IMPORTED_MODULE_1__[/* ERole */ "a"].Client
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
/* harmony default export */ __webpack_exports__["a"] = (ShopUser);

/***/ }),

/***/ "kD0u":
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });