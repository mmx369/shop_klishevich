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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ "./src/theme.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./src/store.ts");

var _jsxFileName = "C:\\projects\\shop_klishevich\\src\\pages\\_app.tsx";

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
    const jssStyles = document.querySelector('#jss-server-side');

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
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "description",
            content: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0438. \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 | \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/redux/actions/appActions.ts":
/*!*****************************************!*\
  !*** ./src/redux/actions/appActions.ts ***!
  \*****************************************/
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

/***/ "./src/redux/actions/cartActions.ts":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.ts ***!
  \******************************************/
/*! exports provided: CartActionTypes, initItems, addNewItem, removeFromCart, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartActionTypes", function() { return CartActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initItems", function() { return initItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewItem", function() { return addNewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

let CartActionTypes;

(function (CartActionTypes) {
  CartActionTypes["INIT_ITEMS"] = "INIT_ITEMS";
  CartActionTypes["NEW_ITEM"] = "NEW_ITEM";
  CartActionTypes["DELETE_ITEM"] = "DELETE_ITEM";
  CartActionTypes["DEFAULT"] = "DEFAULT";
  CartActionTypes["REMOVE_FROM_CART"] = "REMOVE_FROM_CART";
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
    //получил текущий продукт из базы
    const item = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${"http://localhost:3000"}/api/getitembyid`, {
      params: {
        id
      }
    });
    const itemAmount = item.data.amountOfGoods; //получил текущий остаток

    if (itemAmount <= 0) {
      //если остаток меньше ноля выдал ошибку - корзину не меняю
      dispatch({
        type: CartActionTypes.DEFAULT
      });
    } else {
      //изменил остаток на желаемый добавить в корзину
      item.data.amountOfGoods = value;
      dispatch({
        type: CartActionTypes.NEW_ITEM,
        data: item.data,
        //new data for cart
        stockamount: itemAmount // stock quantity

      });
    }
  };
};
const removeFromCart = (id, value) => {
  return async dispatch => {
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      data: {
        id,
        value
      }
    });
  };
};
const deleteItem = id => {
  return async dispatch => {
    dispatch({
      type: CartActionTypes.DELETE_ITEM,
      data: id
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/notificationActions.ts":
/*!**************************************************!*\
  !*** ./src/redux/actions/notificationActions.ts ***!
  \**************************************************/
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

/***/ "./src/redux/actions/shippingAction.ts":
/*!*********************************************!*\
  !*** ./src/redux/actions/shippingAction.ts ***!
  \*********************************************/
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

/***/ "./src/redux/reducers/appReducer.ts":
/*!******************************************!*\
  !*** ./src/redux/reducers/appReducer.ts ***!
  \******************************************/
/*! exports provided: initialState, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _types_ELoggedIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/ELoggedIn */ "./src/types/ELoggedIn.ts");
/* harmony import */ var _actions_appActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/appActions */ "./src/redux/actions/appActions.ts");
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

/***/ "./src/redux/reducers/cartReducer.ts":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.ts ***!
  \*******************************************/
/*! exports provided: cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cartActions */ "./src/redux/actions/cartActions.ts");
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
      //если в корзине нет такого товара добавляю товар
      if (!state.some(el => el._id === action.data._id)) {
        const newState = [...state, action.data];
        localStorage.setItem('cart', JSON.stringify(newState)); //@ts-ignore

        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
          autoClose: 3000
        });
        return newState;
      } else {
        //если в корзине есть то добавляем количество
        const element = state.find(el => el._id === action.data._id);

        if (element.amountOfGoods + action.data.amountOfGoods <= action.stockamount) {
          const newElement = _objectSpread(_objectSpread({}, element), {}, {
            amountOfGoods: element.amountOfGoods + action.data.amountOfGoods
          });

          const newState = state.filter(el => el._id !== action.data._id); //@ts-ignore

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

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__["CartActionTypes"].REMOVE_FROM_CART:
      const resState = state.reduce((acc, item) => {
        if (item._id === action.data.id) {
          if (item.amountOfGoods === 1) return acc;
          return [...acc, _objectSpread(_objectSpread({}, item), {}, {
            amountOfGoods: item.amountOfGoods - action.data.value
          })];
        } else {
          return [...acc, item];
        }
      }, []);
      localStorage.setItem('cart', JSON.stringify(resState));
      return resState;

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

/***/ "./src/redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.ts ***!
  \*************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appReducer */ "./src/redux/reducers/appReducer.ts");
/* harmony import */ var _notificationReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationReducer */ "./src/redux/reducers/notificationReducer.ts");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.ts");
/* harmony import */ var _shippingReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shippingReducer */ "./src/redux/reducers/shippingReducer.ts");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _appReducer__WEBPACK_IMPORTED_MODULE_1__["appReducer"],
  newMsg: _notificationReducer__WEBPACK_IMPORTED_MODULE_2__["createNewMsgReducer"],
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_3__["cartReducer"],
  shippingPrice: _shippingReducer__WEBPACK_IMPORTED_MODULE_4__["createShippingPrice"]
});

/***/ }),

/***/ "./src/redux/reducers/notificationReducer.ts":
/*!***************************************************!*\
  !*** ./src/redux/reducers/notificationReducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, createNewMsgReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewMsgReducer", function() { return createNewMsgReducer; });
/* harmony import */ var _actions_notificationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/notificationActions */ "./src/redux/actions/notificationActions.ts");

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

/***/ "./src/redux/reducers/shippingReducer.ts":
/*!***********************************************!*\
  !*** ./src/redux/reducers/shippingReducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, createShippingPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShippingPrice", function() { return createShippingPrice; });
/* harmony import */ var _actions_shippingAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/shippingAction */ "./src/redux/actions/shippingAction.ts");

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

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
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
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/reducers */ "./src/redux/reducers/index.ts");
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

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
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

/***/ "./src/types/ELoggedIn.ts":
/*!********************************!*\
  !*** ./src/types/ELoggedIn.ts ***!
  \********************************/
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

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FwcEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9ub3RpZmljYXRpb25BY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc2hpcHBpbmdBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FwcFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2NhcnRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25SZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zaGlwcGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3RoZW1lLnRzIiwid2VicGFjazovLy8uL3R5cGVzL0VMb2dnZWRJbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRoZW1lIiwic2Vzc2lvbiIsIkFwcEFjdGlvblR5cGVzIiwidXBkYXRlVXNlckFDIiwiY3VycmVudFVzZXIiLCJjdXJyZW50RW1haWwiLCJjdXJyZW50SWQiLCJjdXJyZW50Um9sZSIsInR5cGUiLCJVUERBVEVfVVNFUiIsInVwZGF0ZUxvYWRlckFDIiwibG9hZGluZyIsIlVQREFURV9MT0FERVIiLCJ1cGRhdGVJc0xvZ2dlZEluQUMiLCJpc0xvZ2dlZEluIiwiVVBEQVRFX0lTX0xPR0dFRF9JTiIsIkNhcnRBY3Rpb25UeXBlcyIsImluaXRJdGVtcyIsImRpc3BhdGNoIiwiaXRlbXMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSU5JVF9JVEVNUyIsImRhdGEiLCJhZGROZXdJdGVtIiwiaWQiLCJ2YWx1ZSIsIml0ZW0iLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJwYXJhbXMiLCJpdGVtQW1vdW50IiwiYW1vdW50T2ZHb29kcyIsIkRFRkFVTFQiLCJORVdfSVRFTSIsInN0b2NrYW1vdW50IiwicmVtb3ZlRnJvbUNhcnQiLCJSRU1PVkVfRlJPTV9DQVJUIiwiZGVsZXRlSXRlbSIsIkRFTEVURV9JVEVNIiwiTm90aWZpY2F0aW9uQWN0aW9uVHlwZXMiLCJjcmVhdGVOZXdNc2ciLCJtc2ciLCJORVdfTUVTU0FHRSIsIlNoaXBwaW5nQWN0aW9uVHlwZXMiLCJhZGRTaGlwcGluZ1ByaWNlIiwiTkVXX1NISVBQSU5HX1BSSUNFIiwiaW5pdGlhbFN0YXRlIiwidW5kZWZpbmVkIiwiRUxvZ2dlZEluIiwiVW5rbm93biIsImFwcFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInRvYXN0IiwiY29uZmlndXJlIiwiY2FydFJlZHVjZXIiLCJzb21lIiwiZWwiLCJfaWQiLCJuZXdTdGF0ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwibmFtZU9mR29vZHMiLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiVE9QX0xFRlQiLCJhdXRvQ2xvc2UiLCJlbGVtZW50IiwiZmluZCIsIm5ld0VsZW1lbnQiLCJmaWx0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyZXNTdGF0ZSIsInJlZHVjZSIsImFjYyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYXBwIiwibmV3TXNnIiwiY3JlYXRlTmV3TXNnUmVkdWNlciIsImNhcnQiLCJzaGlwcGluZ1ByaWNlIiwiY3JlYXRlU2hpcHBpbmdQcmljZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVzZU1lbW8iLCJjcmVhdGVUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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REM7QUFWTDtBQURlLENBQUQsQ0FBekI7QUFpQmUzRyxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFPLElBQUtvRCxTQUFaOztXQUFZQSxTO0FBQUFBLFc7QUFBQUEsVztBQUFBQSxXO0dBQUFBLFMsS0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBWiwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSdcclxuXHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBQcm92aWRlciBhcyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxyXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpXHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cclxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgY29udGVudD0n0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvSDQvdGD0LzQuNC30LzQsNGC0LjQutC4INC4INCx0L7QvdC40YHRgtC40LrQuC4g0J/RgNC+0LTQsNC20LAg0LHQsNC90LrQvdC+0YIg0Lgg0LzQvtC90LXRgidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPSd2aWV3cG9ydCdcclxuICAgICAgICAgICAgICBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuXHJcbiAgICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgICDQndGD0LzQuNC30LzQsNGC0LjQutCwINC4INCx0L7QvdC40YHRgtC40LrQsCB8INCY0L3RgtC10YDQvdC10YIt0LzQsNCz0LDQt9C40L0gfCDQn9GA0L7QtNCw0LbQsCDQsdCw0L3QutC90L7RgiDQuFxyXG4gICAgICAgICAgICAgINC80L7QvdC10YJcclxuICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgRUxvZ2dlZEluIH0gZnJvbSAnLi4vLi4vdHlwZXMvRUxvZ2dlZEluJ1xyXG5cclxuZXhwb3J0IGVudW0gQXBwQWN0aW9uVHlwZXMge1xyXG4gIFVQREFURV9VU0VSID0gJ1VQREFURV9VU0VSJyxcclxuICBVUERBVEVfTE9BREVSID0gJ1VQREFURV9MT0FERVInLFxyXG4gIFVQREFURV9JU19MT0dHRURfSU4gPSAnVVBEQVRFX0lTX0xPR0dFRF9JTicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQUMgPSAoXHJcbiAgY3VycmVudFVzZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBjdXJyZW50RW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBjdXJyZW50SWQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBjdXJyZW50Um9sZTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbikgPT4gKHtcclxuICB0eXBlOiBBcHBBY3Rpb25UeXBlcy5VUERBVEVfVVNFUixcclxuICBjdXJyZW50VXNlcixcclxuICBjdXJyZW50RW1haWwsXHJcbiAgY3VycmVudElkLFxyXG4gIGN1cnJlbnRSb2xlLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxvYWRlckFDID0gKGxvYWRpbmc6IGJvb2xlYW4pID0+ICh7XHJcbiAgdHlwZTogQXBwQWN0aW9uVHlwZXMuVVBEQVRFX0xPQURFUixcclxuICBsb2FkaW5nLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlzTG9nZ2VkSW5BQyA9IChpc0xvZ2dlZEluOiBFTG9nZ2VkSW4pID0+ICh7XHJcbiAgdHlwZTogQXBwQWN0aW9uVHlwZXMuVVBEQVRFX0lTX0xPR0dFRF9JTixcclxuICBpc0xvZ2dlZEluLFxyXG59KVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZW51bSBDYXJ0QWN0aW9uVHlwZXMge1xyXG4gIElOSVRfSVRFTVMgPSAnSU5JVF9JVEVNUycsXHJcbiAgTkVXX0lURU0gPSAnTkVXX0lURU0nLFxyXG4gIERFTEVURV9JVEVNID0gJ0RFTEVURV9JVEVNJyxcclxuICBERUZBVUxUID0gJ0RFRkFVTFQnLFxyXG4gIFJFTU9WRV9GUk9NX0NBUlQgPSAnUkVNT1ZFX0ZST01fQ0FSVCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0SXRlbXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSBhcyBzdHJpbmcpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENhcnRBY3Rpb25UeXBlcy5JTklUX0lURU1TLFxyXG4gICAgICBkYXRhOiBpdGVtcyB8fCBbXSxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTmV3SXRlbSA9IChpZDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICAvL9C/0L7Qu9GD0YfQuNC7INGC0LXQutGD0YnQuNC5INC/0YDQvtC00YPQutGCINC40Lcg0LHQsNC30YtcclxuICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuUkVTVFVSTH0vYXBpL2dldGl0ZW1ieWlkYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBpdGVtQW1vdW50ID0gaXRlbS5kYXRhLmFtb3VudE9mR29vZHMgLy/Qv9C+0LvRg9GH0LjQuyDRgtC10LrRg9GJ0LjQuSDQvtGB0YLQsNGC0L7QulxyXG5cclxuICAgIGlmIChpdGVtQW1vdW50IDw9IDApIHtcclxuICAgICAgLy/QtdGB0LvQuCDQvtGB0YLQsNGC0L7QuiDQvNC10L3RjNGI0LUg0L3QvtC70Y8g0LLRi9C00LDQuyDQvtGI0LjQsdC60YMgLSDQutC+0YDQt9C40L3RgyDQvdC1INC80LXQvdGP0Y5cclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENhcnRBY3Rpb25UeXBlcy5ERUZBVUxULFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy/QuNC30LzQtdC90LjQuyDQvtGB0YLQsNGC0L7QuiDQvdCwINC20LXQu9Cw0LXQvNGL0Lkg0LTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rg1xyXG4gICAgICBpdGVtLmRhdGEuYW1vdW50T2ZHb29kcyA9IHZhbHVlXHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZXMuTkVXX0lURU0sXHJcbiAgICAgICAgZGF0YTogaXRlbS5kYXRhLCAvL25ldyBkYXRhIGZvciBjYXJ0XHJcbiAgICAgICAgc3RvY2thbW91bnQ6IGl0ZW1BbW91bnQsIC8vIHN0b2NrIHF1YW50aXR5XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoaWQ6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZXMuUkVNT1ZFX0ZST01fQ0FSVCxcclxuICAgICAgZGF0YTogeyBpZCwgdmFsdWUgfSxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENhcnRBY3Rpb25UeXBlcy5ERUxFVEVfSVRFTSxcclxuICAgICAgZGF0YTogaWQsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBOb3RpZmljYXRpb25BY3Rpb25UeXBlcyB7XHJcbiAgTkVXX01FU1NBR0UgPSAnTkVXX01FU1NBR0UnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3TXNnID0gKG1zZzogYW55KSA9PiAoe1xyXG4gIHR5cGU6IE5vdGlmaWNhdGlvbkFjdGlvblR5cGVzLk5FV19NRVNTQUdFLFxyXG4gIGRhdGE6IG1zZyxcclxufSlcclxuIiwiZXhwb3J0IGVudW0gU2hpcHBpbmdBY3Rpb25UeXBlcyB7XHJcbiAgTkVXX1NISVBQSU5HX1BSSUNFID0gJ05FV19TSElQUElOR19QUklDRScsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTaGlwcGluZ1ByaWNlID0gKHZhbHVlOiBudW1iZXIpID0+ICh7XHJcbiAgdHlwZTogU2hpcHBpbmdBY3Rpb25UeXBlcy5ORVdfU0hJUFBJTkdfUFJJQ0UsXHJcbiAgZGF0YTogdmFsdWUsXHJcbn0pXHJcbiIsImltcG9ydCB7IEVMb2dnZWRJbiB9IGZyb20gJy4uLy4uL3R5cGVzL0VMb2dnZWRJbidcclxuaW1wb3J0IHsgQXBwQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2FwcEFjdGlvbnMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG4gIGN1cnJlbnRVc2VyOiBzdHJpbmdcclxuICBjdXJyZW50RW1haWw6IHN0cmluZ1xyXG4gIGN1cnJlbnRJZDogc3RyaW5nXHJcbiAgY3VycmVudFJvbGU6IHN0cmluZ1xyXG4gIGlzTG9nZ2VkSW46IEVMb2dnZWRJblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBJQXBwU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgY3VycmVudFVzZXI6IHVuZGVmaW5lZCEsXHJcbiAgY3VycmVudEVtYWlsOiB1bmRlZmluZWQhLFxyXG4gIGN1cnJlbnRJZDogdW5kZWZpbmVkISxcclxuICBjdXJyZW50Um9sZTogdW5kZWZpbmVkISxcclxuICBpc0xvZ2dlZEluOiBFTG9nZ2VkSW4uVW5rbm93bixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBcHBBY3Rpb25UeXBlcy5VUERBVEVfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIGN1cnJlbnRFbWFpbDogYWN0aW9uLmN1cnJlbnRFbWFpbCxcclxuICAgICAgICBjdXJyZW50SWQ6IGFjdGlvbi5jdXJyZW50SWQsXHJcbiAgICAgICAgY3VycmVudFJvbGU6IGFjdGlvbi5jdXJyZW50Um9sZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBBcHBBY3Rpb25UeXBlcy5VUERBVEVfTE9BREVSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5sb2FkaW5nLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFwcEFjdGlvblR5cGVzLlVQREFURV9JU19MT0dHRURfSU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogYWN0aW9uLmlzTG9nZ2VkSW4sXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDYXJ0QWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2NhcnRBY3Rpb25zJ1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYXJ0U3RhdGUge1xyXG4gIG1zZzogc3RyaW5nXHJcbn1cclxuXHJcbnRvYXN0LmNvbmZpZ3VyZSgpXHJcblxyXG5leHBvcnQgY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUgPSBbXSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ORVdfSVRFTTpcclxuICAgICAgLy/QtdGB0LvQuCDQsiDQutC+0YDQt9C40L3QtSDQvdC10YIg0YLQsNC60L7Qs9C+INGC0L7QstCw0YDQsCDQtNC+0LHQsNCy0LvRj9GOINGC0L7QstCw0YBcclxuICAgICAgaWYgKCFzdGF0ZS5zb21lKChlbDogYW55KSA9PiBlbC5faWQgPT09IGFjdGlvbi5kYXRhLl9pZCkpIHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZSwgYWN0aW9uLmRhdGFdXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkpXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHthY3Rpb24uZGF0YS5uYW1lT2ZHb29kc30g0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvSDQsiDQutC+0YDQt9C40L3Rg2AsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfTEVGVCxcclxuICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8v0LXRgdC70Lgg0LIg0LrQvtGA0LfQuNC90LUg0LXRgdGC0Ywg0YLQviDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQvtC70LjRh9C10YHRgtCy0L5cclxuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSBzdGF0ZS5maW5kKChlbDogYW55KSA9PiBlbC5faWQgPT09IGFjdGlvbi5kYXRhLl9pZClcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBlbGVtZW50LmFtb3VudE9mR29vZHMgKyBhY3Rpb24uZGF0YS5hbW91bnRPZkdvb2RzIDw9XHJcbiAgICAgICAgICBhY3Rpb24uc3RvY2thbW91bnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQ6IGFueSA9IHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudCxcclxuICAgICAgICAgICAgYW1vdW50T2ZHb29kczogZWxlbWVudC5hbW91bnRPZkdvb2RzICsgYWN0aW9uLmRhdGEuYW1vdW50T2ZHb29kcyxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3RhdGUuZmlsdGVyKChlbDogYW55KSA9PiBlbC5faWQgIT09IGFjdGlvbi5kYXRhLl9pZClcclxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgbmV3U3RhdGUucHVzaChuZXdFbGVtZW50KVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkpXHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgICBgJHthY3Rpb24uZGF0YS5uYW1lT2ZHb29kc30g0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvSDQsiDQutC+0YDQt9C40L3Rg2AsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKGDQntGI0LjQsdC60LA6INC90LAg0YHQutC70LDQtNC1INC90LXRgiDRgtCw0LrQvtCz0L4g0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQvtCy0LDRgNCwYCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5SRU1PVkVfRlJPTV9DQVJUOlxyXG4gICAgICBjb25zdCByZXNTdGF0ZSA9IHN0YXRlLnJlZHVjZSgoYWNjOiBhbnksIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLl9pZCA9PT0gYWN0aW9uLmRhdGEuaWQpIHtcclxuICAgICAgICAgIGlmIChpdGVtLmFtb3VudE9mR29vZHMgPT09IDEpIHJldHVybiBhY2NcclxuICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgeyAuLi5pdGVtLCBhbW91bnRPZkdvb2RzOiBpdGVtLmFtb3VudE9mR29vZHMgLSBhY3Rpb24uZGF0YS52YWx1ZSB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gWy4uLmFjYywgaXRlbV1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtdKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHJlc1N0YXRlKSlcclxuICAgICAgcmV0dXJuIHJlc1N0YXRlXHJcblxyXG4gICAgY2FzZSBDYXJ0QWN0aW9uVHlwZXMuSU5JVF9JVEVNUzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcblxyXG4gICAgY2FzZSBDYXJ0QWN0aW9uVHlwZXMuREVMRVRFX0lURU06XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3RhdGUuZmlsdGVyKChlbDogYW55KSA9PiBlbC5faWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKSlcclxuICAgICAgdG9hc3Quc3VjY2Vzcyhg0KLQvtCy0LDRgCDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L0g0LjQtyDQutC+0YDQt9C40L3Ri2AsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ERUZBVUxUOlxyXG4gICAgICB0b2FzdC5lcnJvcihg0J7RiNC40LHQutCwOiDQvdCwINGB0LrQu9Cw0LTQtSDQvdC10YIg0YLQsNC60L7Qs9C+INC60L7Qu9C40YfQtdGB0YLQstCwINGC0L7QstCw0YDQsGAsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGFwcFJlZHVjZXIsIElBcHBTdGF0ZSB9IGZyb20gJy4vYXBwUmVkdWNlcidcclxuaW1wb3J0IHsgY3JlYXRlTmV3TXNnUmVkdWNlciwgSU5vdGlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25SZWR1Y2VyJ1xyXG5pbXBvcnQgeyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydFJlZHVjZXInXHJcbmltcG9ydCB7IElTaGlwcGluZ1N0YXRlIH0gZnJvbSAnLi9zaGlwcGluZ1JlZHVjZXInXHJcbmltcG9ydCB7IGNyZWF0ZVNoaXBwaW5nUHJpY2UgfSBmcm9tICcuL3NoaXBwaW5nUmVkdWNlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RTdGF0ZSB7XHJcbiAgYXBwOiBJQXBwU3RhdGVcclxuICBuZXdNc2c6IElOb3RpZmljYXRpb25TdGF0ZVxyXG4gIGNhcnQ6IGFueVxyXG4gIHNoaXBwaW5nUHJpY2U6IElTaGlwcGluZ1N0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiBhcHBSZWR1Y2VyLFxyXG4gIG5ld01zZzogY3JlYXRlTmV3TXNnUmVkdWNlcixcclxuICBjYXJ0OiBjYXJ0UmVkdWNlcixcclxuICBzaGlwcGluZ1ByaWNlOiBjcmVhdGVTaGlwcGluZ1ByaWNlLFxyXG59KVxyXG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb25BY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uQWN0aW9ucydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvblN0YXRlIHtcclxuICBtc2c6IHN0cmluZyB8IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogSU5vdGlmaWNhdGlvblN0YXRlID0ge1xyXG4gIG1zZzogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld01zZ1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBOb3RpZmljYXRpb25BY3Rpb25UeXBlcy5ORVdfTUVTU0FHRToge1xyXG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGlwcGluZ0FjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9zaGlwcGluZ0FjdGlvbidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNoaXBwaW5nU3RhdGUge1xyXG4gIHNoaXBwaW5nUHJpY2U6IG51bWJlciB8IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogSVNoaXBwaW5nU3RhdGUgPSB7XHJcbiAgc2hpcHBpbmdQcmljZTogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNoaXBwaW5nUHJpY2UgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTaGlwcGluZ0FjdGlvblR5cGVzLk5FV19TSElQUElOR19QUklDRToge1xyXG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIFN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IHJvb3RSZWR1Y2VyLCBJUm9vdFN0YXRlIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2VycydcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxubGV0IHN0b3JlOiBTdG9yZTxJUm9vdFN0YXRlPlxyXG5cclxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlOiBJUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcm9vdFJlZHVjZXIsXHJcbiAgICBwcmVsb2FkZWRTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGU6IElSb290U3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkIVxyXG4gIH1cclxuXHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZTogSVJvb3RTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyNlNmVlOWMnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiAnIzE5ODU3YicsXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IHtcclxuICAgICAgbWFpbjogcmVkLkE0MDAsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBkZWZhdWx0OiAnd2hpdGUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcclxuIiwiZXhwb3J0IGVudW0gRUxvZ2dlZEluIHtcclxuICBVbmtub3duID0gJ1Vua25vd24nLFxyXG4gIFRydWUgPSAnVHJ1ZScsXHJcbiAgRmFsc2UgPSAnRmFsc2UnLFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9