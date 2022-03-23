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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9hcHBBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9ub3RpZmljYXRpb25BY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc2hpcHBpbmdBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25SZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3NoaXBwaW5nUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi90eXBlcy9FTG9nZ2VkSW4udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aGVtZSIsInNlc3Npb24iLCJBcHBBY3Rpb25UeXBlcyIsInVwZGF0ZVVzZXJBQyIsImN1cnJlbnRVc2VyIiwiY3VycmVudEVtYWlsIiwiY3VycmVudElkIiwiY3VycmVudFJvbGUiLCJ0eXBlIiwiVVBEQVRFX1VTRVIiLCJ1cGRhdGVMb2FkZXJBQyIsImxvYWRpbmciLCJVUERBVEVfTE9BREVSIiwidXBkYXRlSXNMb2dnZWRJbkFDIiwiaXNMb2dnZWRJbiIsIlVQREFURV9JU19MT0dHRURfSU4iLCJDYXJ0QWN0aW9uVHlwZXMiLCJpbml0SXRlbXMiLCJkaXNwYXRjaCIsIml0ZW1zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIklOSVRfSVRFTVMiLCJkYXRhIiwiYWRkTmV3SXRlbSIsImlkIiwidmFsdWUiLCJpdGVtIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwicGFyYW1zIiwiaXRlbUFtb3VudCIsImFtb3VudE9mR29vZHMiLCJERUZBVUxUIiwiTkVXX0lURU0iLCJzdG9ja2Ftb3VudCIsInJlbW92ZUZyb21DYXJ0IiwiUkVNT1ZFX0ZST01fQ0FSVCIsImRlbGV0ZUl0ZW0iLCJERUxFVEVfSVRFTSIsIk5vdGlmaWNhdGlvbkFjdGlvblR5cGVzIiwiY3JlYXRlTmV3TXNnIiwibXNnIiwiTkVXX01FU1NBR0UiLCJTaGlwcGluZ0FjdGlvblR5cGVzIiwiYWRkU2hpcHBpbmdQcmljZSIsIk5FV19TSElQUElOR19QUklDRSIsImluaXRpYWxTdGF0ZSIsInVuZGVmaW5lZCIsIkVMb2dnZWRJbiIsIlVua25vd24iLCJhcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0b2FzdCIsImNvbmZpZ3VyZSIsImNhcnRSZWR1Y2VyIiwic29tZSIsImVsIiwiX2lkIiwibmV3U3RhdGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsIm5hbWVPZkdvb2RzIiwicG9zaXRpb24iLCJQT1NJVElPTiIsIlRPUF9MRUZUIiwiYXV0b0Nsb3NlIiwiZWxlbWVudCIsImZpbmQiLCJuZXdFbGVtZW50IiwiZmlsdGVyIiwicHVzaCIsImVycm9yIiwicmVzU3RhdGUiLCJyZWR1Y2UiLCJhY2MiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImFwcCIsIm5ld01zZyIsImNyZWF0ZU5ld01zZ1JlZHVjZXIiLCJjYXJ0Iiwic2hpcHBpbmdQcmljZSIsImNyZWF0ZVNoaXBwaW5nUHJpY2UiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1c2VNZW1vIiwiY3JlYXRlVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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Ozs7OztBQ3BCQTtBQUFBO0FBQU8sSUFBS29ELFNBQVo7O1dBQVlBLFM7QUFBQUEsVztBQUFBQSxXO0FBQUFBLFc7R0FBQUEsUyxLQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FaLDBEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgYXMgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNzLXNlcnZlci1zaWRlXCIpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCLQmNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9INC90YPQvNC40LfQvNCw0YLQuNC60Lgg0Lgg0LHQvtC90LjRgdGC0LjQutC4LiDQn9GA0L7QtNCw0LbQsCDQsdCw0L3QutC90L7RgiDQuCDQvNC+0L3QtdGCXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuXHJcbiAgICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgICDQndGD0LzQuNC30LzQsNGC0LjQutCwINC4INCx0L7QvdC40YHRgtC40LrQsCB8INCY0L3RgtC10YDQvdC10YIt0LzQsNCz0LDQt9C40L0gfCDQn9GA0L7QtNCw0LbQsCDQsdCw0L3QutC90L7RgiDQuFxyXG4gICAgICAgICAgICAgINC80L7QvdC10YJcclxuICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEVMb2dnZWRJbiB9IGZyb20gJy4uLy4uL3R5cGVzL0VMb2dnZWRJbidcclxuXHJcbmV4cG9ydCBlbnVtIEFwcEFjdGlvblR5cGVzIHtcclxuICBVUERBVEVfVVNFUiA9ICdVUERBVEVfVVNFUicsXHJcbiAgVVBEQVRFX0xPQURFUiA9ICdVUERBVEVfTE9BREVSJyxcclxuICBVUERBVEVfSVNfTE9HR0VEX0lOID0gJ1VQREFURV9JU19MT0dHRURfSU4nLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckFDID0gKFxyXG4gIGN1cnJlbnRVc2VyOiBzdHJpbmcsXHJcbiAgY3VycmVudEVtYWlsOiBzdHJpbmcsXHJcbiAgY3VycmVudElkOiBzdHJpbmcsXHJcbiAgY3VycmVudFJvbGU6IHN0cmluZ1xyXG4pID0+ICh7XHJcbiAgdHlwZTogQXBwQWN0aW9uVHlwZXMuVVBEQVRFX1VTRVIsXHJcbiAgY3VycmVudFVzZXIsXHJcbiAgY3VycmVudEVtYWlsLFxyXG4gIGN1cnJlbnRJZCxcclxuICBjdXJyZW50Um9sZSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMb2FkZXJBQyA9IChsb2FkaW5nOiBib29sZWFuKSA9PiAoe1xyXG4gIHR5cGU6IEFwcEFjdGlvblR5cGVzLlVQREFURV9MT0FERVIsXHJcbiAgbG9hZGluZyxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJc0xvZ2dlZEluQUMgPSAoaXNMb2dnZWRJbjogRUxvZ2dlZEluKSA9PiAoe1xyXG4gIHR5cGU6IEFwcEFjdGlvblR5cGVzLlVQREFURV9JU19MT0dHRURfSU4sXHJcbiAgaXNMb2dnZWRJbixcclxufSlcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGVudW0gQ2FydEFjdGlvblR5cGVzIHtcclxuICBJTklUX0lURU1TID0gJ0lOSVRfSVRFTVMnLFxyXG4gIE5FV19JVEVNID0gJ05FV19JVEVNJyxcclxuICBERUxFVEVfSVRFTSA9ICdERUxFVEVfSVRFTScsXHJcbiAgREVGQVVMVCA9ICdERUZBVUxUJyxcclxuICBSRU1PVkVfRlJPTV9DQVJUID0gJ1JFTU9WRV9GUk9NX0NBUlQnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdEl0ZW1zID0gKCkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZXMuSU5JVF9JVEVNUyxcclxuICAgICAgZGF0YTogaXRlbXMgfHwgW10sXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE5ld0l0ZW0gPSAoaWQ6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIC8v0L/QvtC70YPRh9C40Lsg0YLQtdC60YPRidC40Lkg0L/RgNC+0LTRg9C60YIg0LjQtyDQsdCw0LfRi1xyXG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5SRVNUVVJMfS9hcGkvZ2V0aXRlbWJ5aWRgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGl0ZW1BbW91bnQgPSBpdGVtLmRhdGEuYW1vdW50T2ZHb29kcyAvL9C/0L7Qu9GD0YfQuNC7INGC0LXQutGD0YnQuNC5INC+0YHRgtCw0YLQvtC6XHJcblxyXG4gICAgaWYgKGl0ZW1BbW91bnQgPD0gMCkge1xyXG4gICAgICAvL9C10YHQu9C4INC+0YHRgtCw0YLQvtC6INC80LXQvdGM0YjQtSDQvdC+0LvRjyDQstGL0LTQsNC7INC+0YjQuNCx0LrRgyAtINC60L7RgNC30LjQvdGDINC90LUg0LzQtdC90Y/RjlxyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGVzLkRFRkFVTFQsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL9C40LfQvNC10L3QuNC7INC+0YHRgtCw0YLQvtC6INC90LAg0LbQtdC70LDQtdC80YvQuSDQtNC+0LHQsNCy0LjRgtGMINCyINC60L7RgNC30LjQvdGDXHJcbiAgICAgIGl0ZW0uZGF0YS5hbW91bnRPZkdvb2RzID0gdmFsdWVcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENhcnRBY3Rpb25UeXBlcy5ORVdfSVRFTSxcclxuICAgICAgICBkYXRhOiBpdGVtLmRhdGEsIC8vbmV3IGRhdGEgZm9yIGNhcnRcclxuICAgICAgICBzdG9ja2Ftb3VudDogaXRlbUFtb3VudCwgLy8gc3RvY2sgcXVhbnRpdHlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpZDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZXMuUkVNT1ZFX0ZST01fQ0FSVCxcclxuICAgICAgZGF0YTogeyBpZCwgdmFsdWUgfSxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZXMuREVMRVRFX0lURU0sXHJcbiAgICAgIGRhdGE6IGlkLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uQWN0aW9uVHlwZXMge1xyXG4gIE5FV19NRVNTQUdFID0gJ05FV19NRVNTQUdFJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld01zZyA9IChtc2c6IGFueSkgPT4gKHtcclxuICB0eXBlOiBOb3RpZmljYXRpb25BY3Rpb25UeXBlcy5ORVdfTUVTU0FHRSxcclxuICBkYXRhOiBtc2csXHJcbn0pXHJcbiIsImV4cG9ydCBlbnVtIFNoaXBwaW5nQWN0aW9uVHlwZXMge1xyXG4gIE5FV19TSElQUElOR19QUklDRSA9ICdORVdfU0hJUFBJTkdfUFJJQ0UnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU2hpcHBpbmdQcmljZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoe1xyXG4gIHR5cGU6IFNoaXBwaW5nQWN0aW9uVHlwZXMuTkVXX1NISVBQSU5HX1BSSUNFLFxyXG4gIGRhdGE6IHZhbHVlLFxyXG59KVxyXG4iLCJpbXBvcnQgeyBFTG9nZ2VkSW4gfSBmcm9tICcuLi8uLi90eXBlcy9FTG9nZ2VkSW4nXHJcbmltcG9ydCB7IEFwcEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hcHBBY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RhdGUge1xyXG4gIGxvYWRpbmc6IGJvb2xlYW5cclxuICBjdXJyZW50VXNlcjogc3RyaW5nXHJcbiAgY3VycmVudEVtYWlsOiBzdHJpbmdcclxuICBjdXJyZW50SWQ6IHN0cmluZ1xyXG4gIGN1cnJlbnRSb2xlOiBzdHJpbmdcclxuICBpc0xvZ2dlZEluOiBFTG9nZ2VkSW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogSUFwcFN0YXRlID0ge1xyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGN1cnJlbnRVc2VyOiB1bmRlZmluZWQsXHJcbiAgY3VycmVudEVtYWlsOiB1bmRlZmluZWQsXHJcbiAgY3VycmVudElkOiB1bmRlZmluZWQsXHJcbiAgY3VycmVudFJvbGU6IHVuZGVmaW5lZCxcclxuICBpc0xvZ2dlZEluOiBFTG9nZ2VkSW4uVW5rbm93bixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBcHBBY3Rpb25UeXBlcy5VUERBVEVfVVNFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50VXNlcjogYWN0aW9uLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIGN1cnJlbnRFbWFpbDogYWN0aW9uLmN1cnJlbnRFbWFpbCxcclxuICAgICAgICBjdXJyZW50SWQ6IGFjdGlvbi5jdXJyZW50SWQsXHJcbiAgICAgICAgY3VycmVudFJvbGU6IGFjdGlvbi5jdXJyZW50Um9sZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBBcHBBY3Rpb25UeXBlcy5VUERBVEVfTE9BREVSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5sb2FkaW5nLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFwcEFjdGlvblR5cGVzLlVQREFURV9JU19MT0dHRURfSU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogYWN0aW9uLmlzTG9nZ2VkSW4sXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDYXJ0QWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2NhcnRBY3Rpb25zJ1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYXJ0U3RhdGUge1xyXG4gIG1zZzogc3RyaW5nXHJcbn1cclxuXHJcbnRvYXN0LmNvbmZpZ3VyZSgpXHJcblxyXG5leHBvcnQgY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUgPSBbXSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ORVdfSVRFTTpcclxuICAgICAgLy/QtdGB0LvQuCDQsiDQutC+0YDQt9C40L3QtSDQvdC10YIg0YLQsNC60L7Qs9C+INGC0L7QstCw0YDQsCDQtNC+0LHQsNCy0LvRj9GOINGC0L7QstCw0YBcclxuICAgICAgaWYgKCFzdGF0ZS5zb21lKChlbCkgPT4gZWwuX2lkID09PSBhY3Rpb24uZGF0YS5faWQpKSB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGUsIGFjdGlvbi5kYXRhXVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpKVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7YWN0aW9uLmRhdGEubmFtZU9mR29vZHN9INGD0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L0g0LIg0LrQvtGA0LfQuNC90YNgLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL9C10YHQu9C4INCyINC60L7RgNC30LjQvdC1INC10YHRgtGMINGC0L4g0LTQvtCx0LDQstC70Y/QtdC8INC60L7Qu9C40YfQtdGB0YLQstC+XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0YXRlLmZpbmQoKGVsKSA9PiBlbC5faWQgPT09IGFjdGlvbi5kYXRhLl9pZClcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBlbGVtZW50LmFtb3VudE9mR29vZHMgKyBhY3Rpb24uZGF0YS5hbW91bnRPZkdvb2RzIDw9XHJcbiAgICAgICAgICBhY3Rpb24uc3RvY2thbW91bnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB7XHJcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIGFtb3VudE9mR29vZHM6IGVsZW1lbnQuYW1vdW50T2ZHb29kcyArIGFjdGlvbi5kYXRhLmFtb3VudE9mR29vZHMsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlLmZpbHRlcigoZWwpID0+IGVsLl9pZCAhPT0gYWN0aW9uLmRhdGEuX2lkKVxyXG4gICAgICAgICAgbmV3U3RhdGUucHVzaChuZXdFbGVtZW50KVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkpXHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgICBgJHthY3Rpb24uZGF0YS5uYW1lT2ZHb29kc30g0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvSDQsiDQutC+0YDQt9C40L3Rg2AsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKGDQntGI0LjQsdC60LA6INC90LAg0YHQutC70LDQtNC1INC90LXRgiDRgtCw0LrQvtCz0L4g0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQvtCy0LDRgNCwYCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5SRU1PVkVfRlJPTV9DQVJUOlxyXG4gICAgICBjb25zdCByZXNTdGF0ZSA9IHN0YXRlLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uX2lkID09PSBhY3Rpb24uZGF0YS5pZCkge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uYW1vdW50T2ZHb29kcyA9PT0gMSkgcmV0dXJuIGFjY1xyXG4gICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICB7IC4uLml0ZW0sIGFtb3VudE9mR29vZHM6IGl0ZW0uYW1vdW50T2ZHb29kcyAtIGFjdGlvbi5kYXRhLnZhbHVlIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBbLi4uYWNjLCBpdGVtXVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkocmVzU3RhdGUpKVxyXG4gICAgICByZXR1cm4gcmVzU3RhdGVcclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5JTklUX0lURU1TOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ERUxFVEVfSVRFTTpcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZS5maWx0ZXIoKGVsKSA9PiBlbC5faWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKSlcclxuICAgICAgdG9hc3Quc3VjY2Vzcyhg0KLQvtCy0LDRgCDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L0g0LjQtyDQutC+0YDQt9C40L3Ri2AsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ERUZBVUxUOlxyXG4gICAgICB0b2FzdC5lcnJvcihg0J7RiNC40LHQutCwOiDQvdCwINGB0LrQu9Cw0LTQtSDQvdC10YIg0YLQsNC60L7Qs9C+INC60L7Qu9C40YfQtdGB0YLQstCwINGC0L7QstCw0YDQsGAsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGFwcFJlZHVjZXIsIElBcHBTdGF0ZSB9IGZyb20gJy4vYXBwUmVkdWNlcidcclxuaW1wb3J0IHsgY3JlYXRlTmV3TXNnUmVkdWNlciwgSU5vdGlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25SZWR1Y2VyJ1xyXG5pbXBvcnQgeyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydFJlZHVjZXInXHJcbmltcG9ydCB7IElTaGlwcGluZ1N0YXRlIH0gZnJvbSAnLi9zaGlwcGluZ1JlZHVjZXInXHJcbmltcG9ydCB7IGNyZWF0ZVNoaXBwaW5nUHJpY2UgfSBmcm9tICcuL3NoaXBwaW5nUmVkdWNlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RTdGF0ZSB7XHJcbiAgYXBwOiBJQXBwU3RhdGVcclxuICBuZXdNc2c6IElOb3RpZmljYXRpb25TdGF0ZVxyXG4gIGNhcnQ6IGFueVxyXG4gIHNoaXBwaW5nUHJpY2U6IElTaGlwcGluZ1N0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiBhcHBSZWR1Y2VyLFxyXG4gIG5ld01zZzogY3JlYXRlTmV3TXNnUmVkdWNlcixcclxuICBjYXJ0OiBjYXJ0UmVkdWNlcixcclxuICBzaGlwcGluZ1ByaWNlOiBjcmVhdGVTaGlwcGluZ1ByaWNlLFxyXG59KVxyXG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb25BY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uQWN0aW9ucydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvblN0YXRlIHtcclxuICBtc2c6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBJTm90aWZpY2F0aW9uU3RhdGUgPSB7XHJcbiAgbXNnOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3TXNnUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIE5vdGlmaWNhdGlvbkFjdGlvblR5cGVzLk5FV19NRVNTQUdFOiB7XHJcbiAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoaXBwaW5nQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL3NoaXBwaW5nQWN0aW9uJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2hpcHBpbmdTdGF0ZSB7XHJcbiAgc2hpcHBpbmdQcmljZTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IElTaGlwcGluZ1N0YXRlID0ge1xyXG4gIHNoaXBwaW5nUHJpY2U6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwcGluZ1ByaWNlID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU2hpcHBpbmdBY3Rpb25UeXBlcy5ORVdfU0hJUFBJTkdfUFJJQ0U6IHtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyByb290UmVkdWNlciwgSVJvb3RTdGF0ZSB9IGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzXCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbmxldCBzdG9yZTogU3RvcmU8SVJvb3RTdGF0ZT47XHJcblxyXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGU6IElSb290U3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICByb290UmVkdWNlcixcclxuICAgIHByZWxvYWRlZFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGU6IElSb290U3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKTtcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSk7XHJcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX3N0b3JlO1xyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmU7XHJcblxyXG4gIHJldHVybiBfc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlOiBJUm9vdFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiIsImltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjZTZlZTljJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lXHJcbiIsImV4cG9ydCBlbnVtIEVMb2dnZWRJbiB7XHJcbiAgVW5rbm93biA9ICdVbmtub3duJyxcclxuICBUcnVlID0gJ1RydWUnLFxyXG4gIEZhbHNlID0gJ0ZhbHNlJyxcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==