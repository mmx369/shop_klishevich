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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDB\", function() { return connectDB; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('MONGO_URI!!!!', process.env.MONGODB_URI);\nconst connectDB = async () => {\n  var _mongoose$connections;\n\n  if (!((_mongoose$connections = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0]) !== null && _mongoose$connections !== void 0 && _mongoose$connections.readyState)) {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {\n      useUnifiedTopology: true,\n      useFindAndModify: false,\n      useCreateIndex: true,\n      useNewUrlParser: true\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi9jb25uZWN0LnRzP2RlZjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3REQiIsIm1vbmdvb3NlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsInVzZU5ld1VybFBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBekM7QUFFTyxNQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUFBOztBQUNuQyxNQUFJLDJCQUFDQywrQ0FBUSxDQUFDQyxXQUFULENBQXFCLENBQXJCLENBQUQsa0RBQUMsc0JBQXlCQyxVQUExQixDQUFKLEVBQTBDO0FBQ3hDLFVBQU1GLCtDQUFRLENBQUNHLE9BQVQsQ0FBaUJQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUE3QixFQUEwQztBQUM5Q00sd0JBQWtCLEVBQUUsSUFEMEI7QUFFOUNDLHNCQUFnQixFQUFFLEtBRjRCO0FBRzlDQyxvQkFBYyxFQUFFLElBSDhCO0FBSTlDQyxxQkFBZSxFQUFFO0FBSjZCLEtBQTFDLENBQU47QUFNRDtBQUNGLENBVE0iLCJmaWxlIjoiLi9kYi9jb25uZWN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zb2xlLmxvZygnTU9OR09fVVJJISEhIScsIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKVxuXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoIW1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdPy5yZWFkeVN0YXRlKSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db/connect.ts\n");

/***/ }),

/***/ "./models/shopUser.ts":
/*!****************************!*\
  !*** ./models/shopUser.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/ERole */ \"./types/ERole.ts\");\n\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nconst shopUser = new Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  role: {\n    type: String,\n    default: _types_ERole__WEBPACK_IMPORTED_MODULE_1__[\"ERole\"].Client\n  },\n  name: String,\n  date: Date,\n  passwordHash: String,\n  orders: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'ShopOrders'\n  }]\n}); // to avoid overwrite errror???\n// @ts-ignore\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models = {};\nconst ShopUser = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('ShopUser', shopUser);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopUser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvc2hvcFVzZXIudHM/NWY5YyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsInNob3BVc2VyIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJyb2xlIiwiZGVmYXVsdCIsIkVSb2xlIiwiQ2xpZW50IiwibmFtZSIsImRhdGUiLCJEYXRlIiwicGFzc3dvcmRIYXNoIiwib3JkZXJzIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIm1vZGVscyIsIlNob3BVc2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE1BQU1BLE1BQU0sR0FBR0MsK0NBQVEsQ0FBQ0QsTUFBeEI7QUFXQSxNQUFNRSxRQUFRLEdBQUcsSUFBSUYsTUFBSixDQUFzQjtBQUNyQ0csT0FBSyxFQUFFO0FBQUVDLFFBQUksRUFBRUMsTUFBUjtBQUFnQkMsWUFBUSxFQUFFLElBQTFCO0FBQWdDQyxVQUFNLEVBQUU7QUFBeEMsR0FEOEI7QUFFckNDLE1BQUksRUFBRTtBQUNKSixRQUFJLEVBQUVDLE1BREY7QUFFSkksV0FBTyxFQUFFQyxrREFBSyxDQUFDQztBQUZYLEdBRitCO0FBTXJDQyxNQUFJLEVBQUVQLE1BTitCO0FBT3JDUSxNQUFJLEVBQUVDLElBUCtCO0FBUXJDQyxjQUFZLEVBQUVWLE1BUnVCO0FBU3JDVyxRQUFNLEVBQUUsQ0FDTjtBQUNFWixRQUFJLEVBQUVILCtDQUFRLENBQUNELE1BQVQsQ0FBZ0JpQixLQUFoQixDQUFzQkMsUUFEOUI7QUFFRUMsT0FBRyxFQUFFO0FBRlAsR0FETTtBQVQ2QixDQUF0QixDQUFqQixDLENBaUJBO0FBQ0E7O0FBQ0FsQiwrQ0FBUSxDQUFDbUIsTUFBVCxHQUFrQixFQUFsQjtBQUVBLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRLENBQUNxQixLQUFULENBQTBCLFVBQTFCLEVBQXNDcEIsUUFBdEMsQ0FBakI7QUFFZW1CLHVFQUFmIiwiZmlsZSI6Ii4vbW9kZWxzL3Nob3BVc2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnXG5pbXBvcnQgeyBFUm9sZSB9IGZyb20gJy4uL3R5cGVzL0VSb2xlJ1xuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXG5cbmludGVyZmFjZSBJU2hvcFVzZXIgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGVtYWlsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHJvbGU6IEVSb2xlLkFkbWluIHwgRVJvbGUuQ2xpZW50XG4gIGRhdGU6IERhdGVcbiAgcGFzc3dvcmRIYXNoOiBzdHJpbmdcbiAgb3JkZXJzOiBzdHJpbmdbXVxufVxuXG5jb25zdCBzaG9wVXNlciA9IG5ldyBTY2hlbWE8SVNob3BVc2VyPih7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICByb2xlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IEVSb2xlLkNsaWVudCxcbiAgfSxcbiAgbmFtZTogU3RyaW5nLFxuICBkYXRlOiBEYXRlLFxuICBwYXNzd29yZEhhc2g6IFN0cmluZyxcbiAgb3JkZXJzOiBbXG4gICAge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnU2hvcE9yZGVycycsXG4gICAgfSxcbiAgXSxcbn0pXG5cbi8vIHRvIGF2b2lkIG92ZXJ3cml0ZSBlcnJyb3I/Pz9cbi8vIEB0cy1pZ25vcmVcbm1vbmdvb3NlLm1vZGVscyA9IHt9XG5cbmNvbnN0IFNob3BVc2VyID0gbW9uZ29vc2UubW9kZWw8SVNob3BVc2VyPignU2hvcFVzZXInLCBzaG9wVXNlcilcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFVzZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/shopUser.ts\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_shopUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/shopUser */ \"./models/shopUser.ts\");\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../db/connect */ \"./db/connect.ts\");\n\n\n\n\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({\n    clientId: process.env.GOOGLE_ID,\n    clientSecret: process.env.GOOGLE_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({\n    clientId: process.env.FACEBOOK_ID,\n    clientSecret: process.env.FACEBOOK_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Email({\n    server: {\n      host: process.env.EMAIL_SERVER_HOST,\n      port: 587,\n      auth: {\n        user: process.env.EMAIL_SERVER_USER,\n        pass: process.env.EMAIL_SERVER_PASSWORD\n      }\n    },\n    from: process.env.EMAIL_FROM\n  })],\n  database: process.env.MONGODB_URI,\n  callbacks: {\n    async signIn(user, account, profile) {\n      await Object(_db_connect__WEBPACK_IMPORTED_MODULE_3__[\"connectDB\"])();\n\n      try {\n        const candidate = await _models_shopUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n          email: user.email\n        });\n\n        if (!candidate) {\n          const newShopUser = new _models_shopUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            email: user.email,\n            name: user.name,\n            image: user.image,\n            date: new Date()\n          });\n          await newShopUser.save();\n          console.log('New user added');\n          return;\n        }\n\n        return;\n      } catch (e) {\n        console.error(e);\n      }\n\n      const isAllowedToSignIn = true;\n\n      if (isAllowedToSignIn) {\n        return true;\n      } else {\n        // Return false to display a default error message\n        return false; // Or you can return a URL to redirect to:\n        // return '/unauthorized'\n      }\n    },\n\n    async session(session, token) {\n      await Object(_db_connect__WEBPACK_IMPORTED_MODULE_3__[\"connectDB\"])();\n\n      if (session) {\n        try {\n          const {\n            email\n          } = session.user;\n          const shopUser = await _models_shopUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email\n          });\n          session.databaseId = shopUser._id;\n          session.role = shopUser.role;\n        } catch (error) {\n          console.error(error);\n        }\n      }\n\n      session.someInfo = 'testing';\n      return session;\n    }\n\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  return next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzI4YzIiXSwibmFtZXMiOlsib3B0aW9ucyIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsIkdvb2dsZSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJGYWNlYm9vayIsIkZBQ0VCT09LX0lEIiwiRkFDRUJPT0tfU0VDUkVUIiwiRW1haWwiLCJzZXJ2ZXIiLCJob3N0IiwiRU1BSUxfU0VSVkVSX0hPU1QiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJFTUFJTF9TRVJWRVJfVVNFUiIsInBhc3MiLCJFTUFJTF9TRVJWRVJfUEFTU1dPUkQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsImRhdGFiYXNlIiwiTU9OR09EQl9VUkkiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImNvbm5lY3REQiIsImNhbmRpZGF0ZSIsIlNob3BVc2VyIiwiZmluZE9uZSIsImVtYWlsIiwibmV3U2hvcFVzZXIiLCJuYW1lIiwiaW1hZ2UiLCJkYXRlIiwiRGF0ZSIsInNhdmUiLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIiwiaXNBbGxvd2VkVG9TaWduSW4iLCJzZXNzaW9uIiwidG9rZW4iLCJzaG9wVXNlciIsImRhdGFiYXNlSWQiLCJfaWQiLCJyb2xlIiwic29tZUluZm8iLCJyZXEiLCJyZXMiLCJOZXh0QXV0aCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBRztBQUNkQyxXQUFTLEVBQUUsQ0FDVEMsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQjtBQUNmQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURQO0FBRWZDLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZ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Z2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgVXNlciB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgVFVzZXJTZXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdXNlclNlc3Npb24nXG5pbXBvcnQgU2hvcFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Nob3BVc2VyJ1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnLi4vLi4vLi4vZGIvY29ubmVjdCdcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkdvb2dsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5GYWNlYm9vayh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuRW1haWwoe1xuICAgICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgICAgICBwb3J0OiA1ODcsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfVVNFUixcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUEFTU1dPUkQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICB9KSxcbiAgXSxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih1c2VyOiBVc2VyLCBhY2NvdW50OiBhbnksIHByb2ZpbGU6IGFueSkge1xuICAgICAgYXdhaXQgY29ubmVjdERCKClcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IFNob3BVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghY2FuZGlkYXRlKSB7XG4gICAgICAgICAgY29uc3QgbmV3U2hvcFVzZXIgPSBuZXcgU2hvcFVzZXIoe1xuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZSxcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhd2FpdCBuZXdTaG9wVXNlci5zYXZlKClcbiAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IHVzZXIgYWRkZWQnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNBbGxvd2VkVG9TaWduSW4gPSB0cnVlXG5cbiAgICAgIGlmIChpc0FsbG93ZWRUb1NpZ25Jbikge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIGRpc3BsYXkgYSBkZWZhdWx0IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIC8vIE9yIHlvdSBjYW4gcmV0dXJuIGEgVVJMIHRvIHJlZGlyZWN0IHRvOlxuICAgICAgICAvLyByZXR1cm4gJy91bmF1dGhvcml6ZWQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbjogVFVzZXJTZXNzaW9uLCB0b2tlbjogYW55KSB7XG4gICAgICBhd2FpdCBjb25uZWN0REIoKVxuICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSBzZXNzaW9uLnVzZXJcbiAgICAgICAgICBjb25zdCBzaG9wVXNlciA9IGF3YWl0IFNob3BVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KVxuXG4gICAgICAgICAgc2Vzc2lvbi5kYXRhYmFzZUlkID0gc2hvcFVzZXIuX2lkXG4gICAgICAgICAgc2Vzc2lvbi5yb2xlID0gc2hvcFVzZXIucm9sZVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlc3Npb24uc29tZUluZm8gPSAndGVzdGluZydcbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHJldHVybiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./types/ERole.ts":
/*!************************!*\
  !*** ./types/ERole.ts ***!
  \************************/
/*! exports provided: ERole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERole\", function() { return ERole; });\nlet ERole;\n\n(function (ERole) {\n  ERole[\"Admin\"] = \"admin\";\n  ERole[\"Client\"] = \"client\";\n})(ERole || (ERole = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90eXBlcy9FUm9sZS50cz80ODAyIl0sIm5hbWVzIjpbIkVSb2xlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sSUFBS0EsS0FBWjs7V0FBWUEsSztBQUFBQSxPO0FBQUFBLE87R0FBQUEsSyxLQUFBQSxLIiwiZmlsZSI6Ii4vdHlwZXMvRVJvbGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFUm9sZSB7XG4gIEFkbWluID0gJ2FkbWluJyxcbiAgQ2xpZW50ID0gJ2NsaWVudCcsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./types/ERole.ts\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });