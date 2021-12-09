module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ "./theme.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./store.ts");

var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function App({
  Component,
  pageProps
}) {
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useStore"])(pageProps.initialReduxState);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_auth_client__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
        session: pageProps.session,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "description",
            content: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0438. \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 | \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./redux/actions/appActions.ts":
/*!*************************************!*\
  !*** ./redux/actions/appActions.ts ***!
  \*************************************/
/*! exports provided: AppActionTypes, updateUserAC, updateLoaderAC, updateIsLoggedInAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActionTypes", function() { return AppActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserAC", function() { return updateUserAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoaderAC", function() { return updateLoaderAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIsLoggedInAC", function() { return updateIsLoggedInAC; });
let AppActionTypes;

(function (AppActionTypes) {
  AppActionTypes["UPDATE_USER"] = "UPDATE_USER";
  AppActionTypes["UPDATE_LOADER"] = "UPDATE_LOADER";
  AppActionTypes["UPDATE_IS_LOGGED_IN"] = "UPDATE_IS_LOGGED_IN";
})(AppActionTypes || (AppActionTypes = {}));

const updateUserAC = (currentUser, currentEmail, currentId, currentRole) => ({
  type: AppActionTypes.UPDATE_USER,
  currentUser,
  currentEmail,
  currentId,
  currentRole
});
const updateLoaderAC = loading => ({
  type: AppActionTypes.UPDATE_LOADER,
  loading
});
const updateIsLoggedInAC = isLoggedIn => ({
  type: AppActionTypes.UPDATE_IS_LOGGED_IN,
  isLoggedIn
});

/***/ }),

/***/ "./redux/actions/cartActions.ts":
/*!**************************************!*\
  !*** ./redux/actions/cartActions.ts ***!
  \**************************************/
/*! exports provided: CartActionTypes, initItems, addNewItem, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartActionTypes", function() { return CartActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initItems", function() { return initItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewItem", function() { return addNewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

let CartActionTypes;

(function (CartActionTypes) {
  CartActionTypes["INIT_ITEMS"] = "INIT_ITEMS";
  CartActionTypes["NEW_ITEM"] = "NEW_ITEM";
  CartActionTypes["DELETE_ITEM"] = "DELETE_ITEM";
  CartActionTypes["DEFAULT"] = "DEFAULT";
})(CartActionTypes || (CartActionTypes = {}));

const initItems = () => {
  return async dispatch => {
    const items = JSON.parse(localStorage.getItem('cart'));
    dispatch({
      type: CartActionTypes.INIT_ITEMS,
      data: items || []
    });
  };
};
const addNewItem = (id, value) => {
  return async dispatch => {
    const item = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${"http://localhost:3000"}/api/getitembyid`, {
      params: {
        id
      }
    });
    const itemAmount = item.data.amountOfGoods;

    if (itemAmount <= 0) {
      dispatch({
        type: CartActionTypes.DEFAULT
      });
    } else {
      item.data.amountOfGoods = value;
      dispatch({
        type: CartActionTypes.NEW_ITEM,
        data: item.data,
        stockamount: itemAmount
      });
    }
  };
};
const deleteItem = id => {
  console.log('Action: ', id);
  return async dispatch => {
    dispatch({
      type: CartActionTypes.DELETE_ITEM,
      data: id
    });
  };
};

/***/ }),

/***/ "./redux/actions/notificationActions.ts":
/*!**********************************************!*\
  !*** ./redux/actions/notificationActions.ts ***!
  \**********************************************/
/*! exports provided: NotificationActionTypes, createNewMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationActionTypes", function() { return NotificationActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewMsg", function() { return createNewMsg; });
let NotificationActionTypes;

(function (NotificationActionTypes) {
  NotificationActionTypes["NEW_MESSAGE"] = "NEW_MESSAGE";
})(NotificationActionTypes || (NotificationActionTypes = {}));

const createNewMsg = msg => ({
  type: NotificationActionTypes.NEW_MESSAGE,
  data: msg
});

/***/ }),

/***/ "./redux/actions/shippingAction.ts":
/*!*****************************************!*\
  !*** ./redux/actions/shippingAction.ts ***!
  \*****************************************/
/*! exports provided: ShippingActionTypes, addShippingPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingActionTypes", function() { return ShippingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShippingPrice", function() { return addShippingPrice; });
let ShippingActionTypes;

(function (ShippingActionTypes) {
  ShippingActionTypes["NEW_SHIPPING_PRICE"] = "NEW_SHIPPING_PRICE";
})(ShippingActionTypes || (ShippingActionTypes = {}));

const addShippingPrice = value => ({
  type: ShippingActionTypes.NEW_SHIPPING_PRICE,
  data: value
});

/***/ }),

/***/ "./redux/reducers/appReducer.ts":
/*!**************************************!*\
  !*** ./redux/reducers/appReducer.ts ***!
  \**************************************/
/*! exports provided: initialState, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/ELoggedIn */ "./types/ELoggedIn.ts");
/* harmony import */ var _actions_appActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/appActions */ "./redux/actions/appActions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  loading: false,
  currentUser: undefined,
  currentEmail: undefined,
  currentId: undefined,
  currentRole: undefined,
  isLoggedIn: _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_0__["ELoggedIn"].Unknown
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_appActions__WEBPACK_IMPORTED_MODULE_1__["AppActionTypes"].UPDATE_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.currentUser,
        currentEmail: action.currentEmail,
        currentId: action.currentId,
        currentRole: action.currentRole
      });

    case _actions_appActions__WEBPACK_IMPORTED_MODULE_1__["AppActionTypes"].UPDATE_LOADER:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading
      });

    case _actions_appActions__WEBPACK_IMPORTED_MODULE_1__["AppActionTypes"].UPDATE_IS_LOGGED_IN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: action.isLoggedIn
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducers/cartReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/cartReducer.ts ***!
  \***************************************/
/*! exports provided: cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].configure();
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__["CartActionTypes"].NEW_ITEM:
      if (!state.some(el => el._id === action.data._id)) {
        const newState = [...state, action.data];
        localStorage.setItem('cart', JSON.stringify(newState));
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
          autoClose: 3000
        });
        return newState;
      } else {
        const element = state.find(el => el._id === action.data._id);

        if (element.amountOfGoods + action.data.amountOfGoods <= action.stockamount) {
          const newElement = _objectSpread(_objectSpread({}, element), {}, {
            amountOfGoods: element.amountOfGoods + action.data.amountOfGoods
          });

          const newState = state.filter(el => el._id !== action.data._id);
          newState.push(newElement);
          localStorage.setItem('cart', JSON.stringify(newState));
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
            position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
            autoClose: 3000
          });
          return newState;
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(`Ошибка: на складе нет такого количества товара`, {
            position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
            autoClose: 3000
          });
          return state;
        }
      }

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__["CartActionTypes"].INIT_ITEMS:
      return action.data;

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__["CartActionTypes"].DELETE_ITEM:
      const newState = state.filter(el => el._id !== action.data);
      localStorage.setItem('cart', JSON.stringify(newState));
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(`Товар успешно удален из корзины`, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
        autoClose: 3000
      });
      return newState;

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__["CartActionTypes"].DEFAULT:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(`Ошибка: на складе нет такого количества товара`, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
        autoClose: 3000
      });
      return state;

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducers/index.ts":
/*!*********************************!*\
  !*** ./redux/reducers/index.ts ***!
  \*********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appReducer */ "./redux/reducers/appReducer.ts");
/* harmony import */ var _notificationReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationReducer */ "./redux/reducers/notificationReducer.ts");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartReducer */ "./redux/reducers/cartReducer.ts");
/* harmony import */ var _shippingReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shippingReducer */ "./redux/reducers/shippingReducer.ts");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _appReducer__WEBPACK_IMPORTED_MODULE_1__["appReducer"],
  newMsg: _notificationReducer__WEBPACK_IMPORTED_MODULE_2__["createNewMsgReducer"],
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_3__["cartReducer"],
  shippingPrice: _shippingReducer__WEBPACK_IMPORTED_MODULE_4__["createShippingPrice"]
});

/***/ }),

/***/ "./redux/reducers/notificationReducer.ts":
/*!***********************************************!*\
  !*** ./redux/reducers/notificationReducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, createNewMsgReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewMsgReducer", function() { return createNewMsgReducer; });
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/notificationActions */ "./redux/actions/notificationActions.ts");

const initialState = {
  msg: null
};
const createNewMsgReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__["NotificationActionTypes"].NEW_MESSAGE:
      {
        return action.data;
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducers/shippingReducer.ts":
/*!*******************************************!*\
  !*** ./redux/reducers/shippingReducer.ts ***!
  \*******************************************/
/*! exports provided: initialState, createShippingPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShippingPrice", function() { return createShippingPrice; });
/* harmony import */ var _actions_shippingAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/shippingAction */ "./redux/actions/shippingAction.ts");

const initialState = {
  shippingPrice: null
};
const createShippingPrice = (state = initialState, action) => {
  switch (action.type) {
    case _actions_shippingAction__WEBPACK_IMPORTED_MODULE_0__["ShippingActionTypes"].NEW_SHIPPING_PRICE:
      {
        return action.data;
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/reducers */ "./redux/reducers/index.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;

function initStore(preloadedState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_redux_reducers__WEBPACK_IMPORTED_MODULE_3__["rootReducer"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({
  palette: {
    primary: {
      main: '#e6ee9c'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["red"].A400
    },
    background: {
      default: 'white'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./types/ELoggedIn.ts":
/*!****************************!*\
  !*** ./types/ELoggedIn.ts ***!
  \****************************/
/*! exports provided: ELoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELoggedIn", function() { return ELoggedIn; });
let ELoggedIn;

(function (ELoggedIn) {
  ELoggedIn["Unknown"] = "Unknown";
  ELoggedIn["True"] = "True";
  ELoggedIn["False"] = "False";
})(ELoggedIn || (ELoggedIn = {}));

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9hcHBBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9ub3RpZmljYXRpb25BY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc2hpcHBpbmdBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25SZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3NoaXBwaW5nUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi90eXBlcy9FTG9nZ2VkSW4udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aGVtZSIsInNlc3Npb24iLCJBcHBBY3Rpb25UeXBlcyIsInVwZGF0ZVVzZXJBQyIsImN1cnJlbnRVc2VyIiwiY3VycmVudEVtYWlsIiwiY3VycmVudElkIiwiY3VycmVudFJvbGUiLCJ0eXBlIiwiVVBEQVRFX1VTRVIiLCJ1cGRhdGVMb2FkZXJBQyIsImxvYWRpbmciLCJVUERBVEVfTE9BREVSIiwidXBkYXRlSXNMb2dnZWRJbkFDIiwiaXNMb2dnZWRJbiIsIlVQREFURV9JU19MT0dHRURfSU4iLCJDYXJ0QWN0aW9uVHlwZXMiLCJpbml0SXRlbXMiLCJkaXNwYXRjaCIsIml0ZW1zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIklOSVRfSVRFTVMiLCJkYXRhIiwiYWRkTmV3SXRlbSIsImlkIiwidmFsdWUiLCJpdGVtIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwicGFyYW1zIiwiaXRlbUFtb3VudCIsImFtb3VudE9mR29vZHMiLCJERUZBVUxUIiwiTkVXX0lURU0iLCJzdG9ja2Ftb3VudCIsImRlbGV0ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwiREVMRVRFX0lURU0iLCJOb3RpZmljYXRpb25BY3Rpb25UeXBlcyIsImNyZWF0ZU5ld01zZyIsIm1zZyIsIk5FV19NRVNTQUdFIiwiU2hpcHBpbmdBY3Rpb25UeXBlcyIsImFkZFNoaXBwaW5nUHJpY2UiLCJORVdfU0hJUFBJTkdfUFJJQ0UiLCJpbml0aWFsU3RhdGUiLCJ1bmRlZmluZWQiLCJFTG9nZ2VkSW4iLCJVbmtub3duIiwiYXBwUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidG9hc3QiLCJjb25maWd1cmUiLCJjYXJ0UmVkdWNlciIsInNvbWUiLCJlbCIsIl9pZCIsIm5ld1N0YXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJuYW1lT2ZHb29kcyIsInBvc2l0aW9uIiwiUE9TSVRJT04iLCJUT1BfTEVGVCIsImF1dG9DbG9zZSIsImVsZW1lbnQiLCJmaW5kIiwibmV3RWxlbWVudCIsImZpbHRlciIsInB1c2giLCJlcnJvciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYXBwIiwibmV3TXNnIiwiY3JlYXRlTmV3TXNnUmVkdWNlciIsImNhcnQiLCJzaGlwcGluZ1ByaWNlIiwiY3JlYXRlU2hpcHBpbmdQcmljZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVzZU1lbW8iLCJjcmVhdGVUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FB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LGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUU7QUFEQztBQVZMO0FBRGUsQ0FBRCxDQUF6QjtBQWlCZXhHLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQU8sSUFBS29ELFNBQVo7O1dBQVlBLFM7QUFBQUEsVztBQUFBQSxXO0FBQUFBLFc7R0FBQUEsUyxLQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FaLDBEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgYXMgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNzLXNlcnZlci1zaWRlXCIpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCLQmNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9INC90YPQvNC40LfQvNCw0YLQuNC60Lgg0Lgg0LHQvtC90LjRgdGC0LjQutC4LiDQn9GA0L7QtNCw0LbQsCDQsdCw0L3QutC90L7RgiDQuCDQvNC+0L3QtdGCXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuXHJcbiAgICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgICDQndGD0LzQuNC30LzQsNGC0LjQutCwINC4INCx0L7QvdC40YHRgtC40LrQsCB8INCY0L3RgtC10YDQvdC10YIt0LzQsNCz0LDQt9C40L0gfCDQn9GA0L7QtNCw0LbQsCDQsdCw0L3QutC90L7RgiDQuFxyXG4gICAgICAgICAgICAgINC80L7QvdC10YJcclxuICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEVMb2dnZWRJbiB9IGZyb20gJy4uLy4uL3R5cGVzL0VMb2dnZWRJbidcclxuXHJcbmV4cG9ydCBlbnVtIEFwcEFjdGlvblR5cGVzIHtcclxuICBVUERBVEVfVVNFUiA9ICdVUERBVEVfVVNFUicsXHJcbiAgVVBEQVRFX0xPQURFUiA9ICdVUERBVEVfTE9BREVSJyxcclxuICBVUERBVEVfSVNfTE9HR0VEX0lOID0gJ1VQREFURV9JU19MT0dHRURfSU4nLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckFDID0gKFxyXG4gIGN1cnJlbnRVc2VyOiBzdHJpbmcsXHJcbiAgY3VycmVudEVtYWlsOiBzdHJpbmcsXHJcbiAgY3VycmVudElkOiBzdHJpbmcsXHJcbiAgY3VycmVudFJvbGU6IHN0cmluZ1xyXG4pID0+ICh7XHJcbiAgdHlwZTogQXBwQWN0aW9uVHlwZXMuVVBEQVRFX1VTRVIsXHJcbiAgY3VycmVudFVzZXIsXHJcbiAgY3VycmVudEVtYWlsLFxyXG4gIGN1cnJlbnRJZCxcclxuICBjdXJyZW50Um9sZSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMb2FkZXJBQyA9IChsb2FkaW5nOiBib29sZWFuKSA9PiAoe1xyXG4gIHR5cGU6IEFwcEFjdGlvblR5cGVzLlVQREFURV9MT0FERVIsXHJcbiAgbG9hZGluZyxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJc0xvZ2dlZEluQUMgPSAoaXNMb2dnZWRJbjogRUxvZ2dlZEluKSA9PiAoe1xyXG4gIHR5cGU6IEFwcEFjdGlvblR5cGVzLlVQREFURV9JU19MT0dHRURfSU4sXHJcbiAgaXNMb2dnZWRJbixcclxufSlcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGVudW0gQ2FydEFjdGlvblR5cGVzIHtcclxuICBJTklUX0lURU1TID0gJ0lOSVRfSVRFTVMnLFxyXG4gIE5FV19JVEVNID0gJ05FV19JVEVNJyxcclxuICBERUxFVEVfSVRFTSA9ICdERUxFVEVfSVRFTScsXHJcbiAgREVGQVVMVCA9ICdERUZBVUxUJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSlcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGVzLklOSVRfSVRFTVMsXHJcbiAgICAgIGRhdGE6IGl0ZW1zIHx8IFtdLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdJdGVtID0gKGlkOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LlJFU1RVUkx9L2FwaS9nZXRpdGVtYnlpZGAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgY29uc3QgaXRlbUFtb3VudCA9IGl0ZW0uZGF0YS5hbW91bnRPZkdvb2RzXHJcblxyXG4gICAgaWYgKGl0ZW1BbW91bnQgPD0gMCkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGVzLkRFRkFVTFQsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmRhdGEuYW1vdW50T2ZHb29kcyA9IHZhbHVlXHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZXMuTkVXX0lURU0sXHJcbiAgICAgICAgZGF0YTogaXRlbS5kYXRhLFxyXG4gICAgICAgIHN0b2NrYW1vdW50OiBpdGVtQW1vdW50LFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdBY3Rpb246ICcsIGlkKVxyXG5cclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENhcnRBY3Rpb25UeXBlcy5ERUxFVEVfSVRFTSxcclxuICAgICAgZGF0YTogaWQsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBOb3RpZmljYXRpb25BY3Rpb25UeXBlcyB7XHJcbiAgTkVXX01FU1NBR0UgPSAnTkVXX01FU1NBR0UnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3TXNnID0gKG1zZzogYW55KSA9PiAoe1xyXG4gIHR5cGU6IE5vdGlmaWNhdGlvbkFjdGlvblR5cGVzLk5FV19NRVNTQUdFLFxyXG4gIGRhdGE6IG1zZyxcclxufSlcclxuIiwiZXhwb3J0IGVudW0gU2hpcHBpbmdBY3Rpb25UeXBlcyB7XHJcbiAgTkVXX1NISVBQSU5HX1BSSUNFID0gJ05FV19TSElQUElOR19QUklDRScsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTaGlwcGluZ1ByaWNlID0gKHZhbHVlOiBudW1iZXIpID0+ICh7XHJcbiAgdHlwZTogU2hpcHBpbmdBY3Rpb25UeXBlcy5ORVdfU0hJUFBJTkdfUFJJQ0UsXHJcbiAgZGF0YTogdmFsdWUsXHJcbn0pXHJcbiIsImltcG9ydCB7IEVMb2dnZWRJbiB9IGZyb20gJy4uLy4uL3R5cGVzL0VMb2dnZWRJbidcclxuaW1wb3J0IHsgQXBwQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2FwcEFjdGlvbnMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG4gIGN1cnJlbnRVc2VyOiBzdHJpbmdcclxuICBjdXJyZW50RW1haWw6IHN0cmluZ1xyXG4gIGN1cnJlbnRJZDogc3RyaW5nXHJcbiAgY3VycmVudFJvbGU6IHN0cmluZ1xyXG4gIGlzTG9nZ2VkSW46IEVMb2dnZWRJblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBJQXBwU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgY3VycmVudFVzZXI6IHVuZGVmaW5lZCxcclxuICBjdXJyZW50RW1haWw6IHVuZGVmaW5lZCxcclxuICBjdXJyZW50SWQ6IHVuZGVmaW5lZCxcclxuICBjdXJyZW50Um9sZTogdW5kZWZpbmVkLFxyXG4gIGlzTG9nZ2VkSW46IEVMb2dnZWRJbi5Vbmtub3duLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFwcEFjdGlvblR5cGVzLlVQREFURV9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24uY3VycmVudFVzZXIsXHJcbiAgICAgICAgY3VycmVudEVtYWlsOiBhY3Rpb24uY3VycmVudEVtYWlsLFxyXG4gICAgICAgIGN1cnJlbnRJZDogYWN0aW9uLmN1cnJlbnRJZCxcclxuICAgICAgICBjdXJyZW50Um9sZTogYWN0aW9uLmN1cnJlbnRSb2xlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFwcEFjdGlvblR5cGVzLlVQREFURV9MT0FERVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQXBwQWN0aW9uVHlwZXMuVVBEQVRFX0lTX0xPR0dFRF9JTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBhY3Rpb24uaXNMb2dnZWRJbixcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENhcnRBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvY2FydEFjdGlvbnMnXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNhcnRTdGF0ZSB7XHJcbiAgbXNnOiBzdHJpbmdcclxufVxyXG5cclxudG9hc3QuY29uZmlndXJlKClcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ2FydEFjdGlvblR5cGVzLk5FV19JVEVNOlxyXG4gICAgICBpZiAoIXN0YXRlLnNvbWUoKGVsKSA9PiBlbC5faWQgPT09IGFjdGlvbi5kYXRhLl9pZCkpIHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZSwgYWN0aW9uLmRhdGFdXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkpXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHthY3Rpb24uZGF0YS5uYW1lT2ZHb29kc30g0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvSDQsiDQutC+0YDQt9C40L3Rg2AsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfTEVGVCxcclxuICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGF0ZS5maW5kKChlbCkgPT4gZWwuX2lkID09PSBhY3Rpb24uZGF0YS5faWQpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZWxlbWVudC5hbW91bnRPZkdvb2RzICsgYWN0aW9uLmRhdGEuYW1vdW50T2ZHb29kcyA8PVxyXG4gICAgICAgICAgYWN0aW9uLnN0b2NrYW1vdW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0ge1xyXG4gICAgICAgICAgICAuLi5lbGVtZW50LFxyXG4gICAgICAgICAgICBhbW91bnRPZkdvb2RzOiBlbGVtZW50LmFtb3VudE9mR29vZHMgKyBhY3Rpb24uZGF0YS5hbW91bnRPZkdvb2RzLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZS5maWx0ZXIoKGVsKSA9PiBlbC5faWQgIT09IGFjdGlvbi5kYXRhLl9pZClcclxuICAgICAgICAgIG5ld1N0YXRlLnB1c2gobmV3RWxlbWVudClcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpKVxyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICAgICAgYCR7YWN0aW9uLmRhdGEubmFtZU9mR29vZHN9INGD0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L0g0LIg0LrQvtGA0LfQuNC90YNgLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9MRUZULFxyXG4gICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKGDQntGI0LjQsdC60LA6INC90LAg0YHQutC70LDQtNC1INC90LXRgiDRgtCw0LrQvtCz0L4g0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQvtCy0LDRgNCwYCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5JTklUX0lURU1TOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ERUxFVEVfSVRFTTpcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZS5maWx0ZXIoKGVsKSA9PiBlbC5faWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKSlcclxuICAgICAgdG9hc3Quc3VjY2Vzcyhg0KLQvtCy0LDRgCDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L0g0LjQtyDQutC+0YDQt9C40L3Ri2AsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ERUZBVUxUOlxyXG4gICAgICB0b2FzdC5lcnJvcihg0J7RiNC40LHQutCwOiDQvdCwINGB0LrQu9Cw0LTQtSDQvdC10YIg0YLQsNC60L7Qs9C+INC60L7Qu9C40YfQtdGB0YLQstCwINGC0L7QstCw0YDQsGAsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGFwcFJlZHVjZXIsIElBcHBTdGF0ZSB9IGZyb20gJy4vYXBwUmVkdWNlcidcclxuaW1wb3J0IHsgY3JlYXRlTmV3TXNnUmVkdWNlciwgSU5vdGlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25SZWR1Y2VyJ1xyXG5pbXBvcnQgeyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydFJlZHVjZXInXHJcbmltcG9ydCB7IElTaGlwcGluZ1N0YXRlIH0gZnJvbSAnLi9zaGlwcGluZ1JlZHVjZXInXHJcbmltcG9ydCB7IGNyZWF0ZVNoaXBwaW5nUHJpY2UgfSBmcm9tICcuL3NoaXBwaW5nUmVkdWNlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RTdGF0ZSB7XHJcbiAgYXBwOiBJQXBwU3RhdGVcclxuICBuZXdNc2c6IElOb3RpZmljYXRpb25TdGF0ZVxyXG4gIGNhcnQ6IGFueVxyXG4gIHNoaXBwaW5nUHJpY2U6IElTaGlwcGluZ1N0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiBhcHBSZWR1Y2VyLFxyXG4gIG5ld01zZzogY3JlYXRlTmV3TXNnUmVkdWNlcixcclxuICBjYXJ0OiBjYXJ0UmVkdWNlcixcclxuICBzaGlwcGluZ1ByaWNlOiBjcmVhdGVTaGlwcGluZ1ByaWNlLFxyXG59KVxyXG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb25BY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uQWN0aW9ucydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvblN0YXRlIHtcclxuICBtc2c6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBJTm90aWZpY2F0aW9uU3RhdGUgPSB7XHJcbiAgbXNnOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3TXNnUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIE5vdGlmaWNhdGlvbkFjdGlvblR5cGVzLk5FV19NRVNTQUdFOiB7XHJcbiAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoaXBwaW5nQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL3NoaXBwaW5nQWN0aW9uJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2hpcHBpbmdTdGF0ZSB7XHJcbiAgc2hpcHBpbmdQcmljZTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IElTaGlwcGluZ1N0YXRlID0ge1xyXG4gIHNoaXBwaW5nUHJpY2U6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwcGluZ1ByaWNlID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU2hpcHBpbmdBY3Rpb25UeXBlcy5ORVdfU0hJUFBJTkdfUFJJQ0U6IHtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyByb290UmVkdWNlciwgSVJvb3RTdGF0ZSB9IGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzXCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbmxldCBzdG9yZTogU3RvcmU8SVJvb3RTdGF0ZT47XHJcblxyXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGU6IElSb290U3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICByb290UmVkdWNlcixcclxuICAgIHByZWxvYWRlZFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGU6IElSb290U3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKTtcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSk7XHJcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX3N0b3JlO1xyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmU7XHJcblxyXG4gIHJldHVybiBfc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlOiBJUm9vdFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiIsImltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjZTZlZTljJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lXHJcbiIsImV4cG9ydCBlbnVtIEVMb2dnZWRJbiB7XHJcbiAgVW5rbm93biA9ICdVbmtub3duJyxcclxuICBUcnVlID0gJ1RydWUnLFxyXG4gIEZhbHNlID0gJ0ZhbHNlJyxcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==