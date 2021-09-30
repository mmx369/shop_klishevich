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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./theme.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store.ts");

var _jsxFileName = "C:\\projects\\shop_klishevich\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function App({
  Component,
  pageProps
}) {
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_8__["useStore"])(pageProps.initialReduxState);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_5__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_auth_client__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
        session: pageProps.session,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
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
/*! exports provided: CartActionTypes, initItems, addNewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartActionTypes", function() { return CartActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initItems", function() { return initItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewItem", function() { return addNewItem; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

let CartActionTypes;

(function (CartActionTypes) {
  CartActionTypes["INIT_ITEMS"] = "INIT_ITEMS";
  CartActionTypes["NEW_ITEM"] = "NEW_ITEM";
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
          autoClose: 5000
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
            autoClose: 5000
          });
          return newState;
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(`Ошибка: на складе нет такого количества товара`, {
            position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
            autoClose: 5000
          });
          return state;
        }
      }

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__["CartActionTypes"].INIT_ITEMS:
      return action.data;

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_0__["CartActionTypes"].DEFAULT:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(`Ошибка: на складе нет такого количества товара`, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_LEFT,
        autoClose: 5000
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

 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({
  palette: {
    primary: {
      main: '#556cd6'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9hcHBBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9ub3RpZmljYXRpb25BY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc2hpcHBpbmdBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25SZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3NoaXBwaW5nUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi90eXBlcy9FTG9nZ2VkSW4udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aGVtZSIsInNlc3Npb24iLCJBcHBBY3Rpb25UeXBlcyIsInVwZGF0ZVVzZXJBQyIsImN1cnJlbnRVc2VyIiwiY3VycmVudEVtYWlsIiwiY3VycmVudElkIiwiY3VycmVudFJvbGUiLCJ0eXBlIiwiVVBEQVRFX1VTRVIiLCJ1cGRhdGVMb2FkZXJBQyIsImxvYWRpbmciLCJVUERBVEVfTE9BREVSIiwidXBkYXRlSXNMb2dnZWRJbkFDIiwiaXNMb2dnZWRJbiIsIlVQREFURV9JU19MT0dHRURfSU4iLCJDYXJ0QWN0aW9uVHlwZXMiLCJpbml0SXRlbXMiLCJkaXNwYXRjaCIsIml0ZW1zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIklOSVRfSVRFTVMiLCJkYXRhIiwiYWRkTmV3SXRlbSIsImlkIiwidmFsdWUiLCJpdGVtIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwicGFyYW1zIiwiaXRlbUFtb3VudCIsImFtb3VudE9mR29vZHMiLCJERUZBVUxUIiwiTkVXX0lURU0iLCJzdG9ja2Ftb3VudCIsIk5vdGlmaWNhdGlvbkFjdGlvblR5cGVzIiwiY3JlYXRlTmV3TXNnIiwibXNnIiwiTkVXX01FU1NBR0UiLCJTaGlwcGluZ0FjdGlvblR5cGVzIiwiYWRkU2hpcHBpbmdQcmljZSIsIk5FV19TSElQUElOR19QUklDRSIsImluaXRpYWxTdGF0ZSIsInVuZGVmaW5lZCIsIkVMb2dnZWRJbiIsIlVua25vd24iLCJhcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0b2FzdCIsImNvbmZpZ3VyZSIsImNhcnRSZWR1Y2VyIiwic29tZSIsImVsIiwiX2lkIiwibmV3U3RhdGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsIm5hbWVPZkdvb2RzIiwicG9zaXRpb24iLCJQT1NJVElPTiIsIlRPUF9MRUZUIiwiYXV0b0Nsb3NlIiwiZWxlbWVudCIsImZpbmQiLCJuZXdFbGVtZW50IiwiZmlsdGVyIiwicHVzaCIsImVycm9yIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHAiLCJuZXdNc2ciLCJjcmVhdGVOZXdNc2dSZWR1Y2VyIiwiY2FydCIsInNoaXBwaW5nUHJpY2UiLCJjcmVhdGVTaGlwcGluZ1ByaWNlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidXNlTWVtbyIsImNyZWF0ZVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwicmVkIiwiQTQwMCIsImJhY2tncm91bmQiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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QmVwRyxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFPLElBQUtnRCxTQUFaOztXQUFZQSxTO0FBQUFBLFc7QUFBQUEsVztBQUFBQSxXO0dBQUFBLFMsS0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBWiwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSdcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXHJcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cclxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBFTG9nZ2VkSW4gfSBmcm9tICcuLi8uLi90eXBlcy9FTG9nZ2VkSW4nXHJcblxyXG5leHBvcnQgZW51bSBBcHBBY3Rpb25UeXBlcyB7XHJcbiAgVVBEQVRFX1VTRVIgPSAnVVBEQVRFX1VTRVInLFxyXG4gIFVQREFURV9MT0FERVIgPSAnVVBEQVRFX0xPQURFUicsXHJcbiAgVVBEQVRFX0lTX0xPR0dFRF9JTiA9ICdVUERBVEVfSVNfTE9HR0VEX0lOJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJBQyA9IChcclxuICBjdXJyZW50VXNlcjogc3RyaW5nLFxyXG4gIGN1cnJlbnRFbWFpbDogc3RyaW5nLFxyXG4gIGN1cnJlbnRJZDogc3RyaW5nLFxyXG4gIGN1cnJlbnRSb2xlOiBzdHJpbmdcclxuKSA9PiAoe1xyXG4gIHR5cGU6IEFwcEFjdGlvblR5cGVzLlVQREFURV9VU0VSLFxyXG4gIGN1cnJlbnRVc2VyLFxyXG4gIGN1cnJlbnRFbWFpbCxcclxuICBjdXJyZW50SWQsXHJcbiAgY3VycmVudFJvbGUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTG9hZGVyQUMgPSAobG9hZGluZzogYm9vbGVhbikgPT4gKHtcclxuICB0eXBlOiBBcHBBY3Rpb25UeXBlcy5VUERBVEVfTE9BREVSLFxyXG4gIGxvYWRpbmcsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSXNMb2dnZWRJbkFDID0gKGlzTG9nZ2VkSW46IEVMb2dnZWRJbikgPT4gKHtcclxuICB0eXBlOiBBcHBBY3Rpb25UeXBlcy5VUERBVEVfSVNfTE9HR0VEX0lOLFxyXG4gIGlzTG9nZ2VkSW4sXHJcbn0pXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBlbnVtIENhcnRBY3Rpb25UeXBlcyB7XHJcbiAgSU5JVF9JVEVNUyA9ICdJTklUX0lURU1TJyxcclxuICBORVdfSVRFTSA9ICdORVdfSVRFTScsXHJcbiAgREVGQVVMVCA9ICdERUZBVUxUJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSlcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGVzLklOSVRfSVRFTVMsXHJcbiAgICAgIGRhdGE6IGl0ZW1zIHx8IFtdLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdJdGVtID0gKGlkOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LlJFU1RVUkx9L2FwaS9nZXRpdGVtYnlpZGAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgY29uc3QgaXRlbUFtb3VudCA9IGl0ZW0uZGF0YS5hbW91bnRPZkdvb2RzXHJcblxyXG4gICAgaWYgKGl0ZW1BbW91bnQgPD0gMCkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGVzLkRFRkFVTFQsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmRhdGEuYW1vdW50T2ZHb29kcyA9IHZhbHVlXHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZXMuTkVXX0lURU0sXHJcbiAgICAgICAgZGF0YTogaXRlbS5kYXRhLFxyXG4gICAgICAgIHN0b2NrYW1vdW50OiBpdGVtQW1vdW50LFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBOb3RpZmljYXRpb25BY3Rpb25UeXBlcyB7XHJcbiAgTkVXX01FU1NBR0UgPSAnTkVXX01FU1NBR0UnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3TXNnID0gKG1zZzogYW55KSA9PiAoe1xyXG4gIHR5cGU6IE5vdGlmaWNhdGlvbkFjdGlvblR5cGVzLk5FV19NRVNTQUdFLFxyXG4gIGRhdGE6IG1zZyxcclxufSlcclxuIiwiZXhwb3J0IGVudW0gU2hpcHBpbmdBY3Rpb25UeXBlcyB7XHJcbiAgTkVXX1NISVBQSU5HX1BSSUNFID0gJ05FV19TSElQUElOR19QUklDRScsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTaGlwcGluZ1ByaWNlID0gKHZhbHVlOiBudW1iZXIpID0+ICh7XHJcbiAgdHlwZTogU2hpcHBpbmdBY3Rpb25UeXBlcy5ORVdfU0hJUFBJTkdfUFJJQ0UsXHJcbiAgZGF0YTogdmFsdWUsXHJcbn0pXHJcbiIsImltcG9ydCB7IEVMb2dnZWRJbiB9IGZyb20gJy4uLy4uL3R5cGVzL0VMb2dnZWRJbidcclxuaW1wb3J0IHsgQXBwQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2FwcEFjdGlvbnMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG4gIGN1cnJlbnRVc2VyOiBzdHJpbmdcclxuICBjdXJyZW50RW1haWw6IHN0cmluZ1xyXG4gIGN1cnJlbnRJZDogc3RyaW5nXHJcbiAgY3VycmVudFJvbGU6IHN0cmluZ1xyXG4gIGlzTG9nZ2VkSW46IEVMb2dnZWRJblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBJQXBwU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgY3VycmVudFVzZXI6IHVuZGVmaW5lZCxcclxuICBjdXJyZW50RW1haWw6IHVuZGVmaW5lZCxcclxuICBjdXJyZW50SWQ6IHVuZGVmaW5lZCxcclxuICBjdXJyZW50Um9sZTogdW5kZWZpbmVkLFxyXG4gIGlzTG9nZ2VkSW46IEVMb2dnZWRJbi5Vbmtub3duLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFwcEFjdGlvblR5cGVzLlVQREFURV9VU0VSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24uY3VycmVudFVzZXIsXHJcbiAgICAgICAgY3VycmVudEVtYWlsOiBhY3Rpb24uY3VycmVudEVtYWlsLFxyXG4gICAgICAgIGN1cnJlbnRJZDogYWN0aW9uLmN1cnJlbnRJZCxcclxuICAgICAgICBjdXJyZW50Um9sZTogYWN0aW9uLmN1cnJlbnRSb2xlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFwcEFjdGlvblR5cGVzLlVQREFURV9MT0FERVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQXBwQWN0aW9uVHlwZXMuVVBEQVRFX0lTX0xPR0dFRF9JTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBhY3Rpb24uaXNMb2dnZWRJbixcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENhcnRBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvY2FydEFjdGlvbnMnXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNhcnRTdGF0ZSB7XHJcbiAgbXNnOiBzdHJpbmdcclxufVxyXG5cclxudG9hc3QuY29uZmlndXJlKClcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ2FydEFjdGlvblR5cGVzLk5FV19JVEVNOlxyXG4gICAgICBpZiAoIXN0YXRlLnNvbWUoKGVsKSA9PiBlbC5faWQgPT09IGFjdGlvbi5kYXRhLl9pZCkpIHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZSwgYWN0aW9uLmRhdGFdXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkpXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHthY3Rpb24uZGF0YS5uYW1lT2ZHb29kc30g0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvSDQsiDQutC+0YDQt9C40L3Rg2AsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfTEVGVCxcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGF0ZS5maW5kKChlbCkgPT4gZWwuX2lkID09PSBhY3Rpb24uZGF0YS5faWQpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZWxlbWVudC5hbW91bnRPZkdvb2RzICsgYWN0aW9uLmRhdGEuYW1vdW50T2ZHb29kcyA8PVxyXG4gICAgICAgICAgYWN0aW9uLnN0b2NrYW1vdW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0ge1xyXG4gICAgICAgICAgICAuLi5lbGVtZW50LFxyXG4gICAgICAgICAgICBhbW91bnRPZkdvb2RzOiBlbGVtZW50LmFtb3VudE9mR29vZHMgKyBhY3Rpb24uZGF0YS5hbW91bnRPZkdvb2RzLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZS5maWx0ZXIoKGVsKSA9PiBlbC5faWQgIT09IGFjdGlvbi5kYXRhLl9pZClcclxuICAgICAgICAgIG5ld1N0YXRlLnB1c2gobmV3RWxlbWVudClcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpKVxyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICAgICAgYCR7YWN0aW9uLmRhdGEubmFtZU9mR29vZHN9INGD0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L0g0LIg0LrQvtGA0LfQuNC90YNgLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9MRUZULFxyXG4gICAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKGDQntGI0LjQsdC60LA6INC90LAg0YHQutC70LDQtNC1INC90LXRgiDRgtCw0LrQvtCz0L4g0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQvtCy0LDRgNCwYCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5JTklUX0lURU1TOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuXHJcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5ERUZBVUxUOlxyXG4gICAgICB0b2FzdC5lcnJvcihg0J7RiNC40LHQutCwOiDQvdCwINGB0LrQu9Cw0LTQtSDQvdC10YIg0YLQsNC60L7Qs9C+INC60L7Qu9C40YfQtdGB0YLQstCwINGC0L7QstCw0YDQsGAsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGFwcFJlZHVjZXIsIElBcHBTdGF0ZSB9IGZyb20gJy4vYXBwUmVkdWNlcidcclxuaW1wb3J0IHsgY3JlYXRlTmV3TXNnUmVkdWNlciwgSU5vdGlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25SZWR1Y2VyJ1xyXG5pbXBvcnQgeyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydFJlZHVjZXInXHJcbmltcG9ydCB7IElTaGlwcGluZ1N0YXRlIH0gZnJvbSAnLi9zaGlwcGluZ1JlZHVjZXInXHJcbmltcG9ydCB7IGNyZWF0ZVNoaXBwaW5nUHJpY2UgfSBmcm9tICcuL3NoaXBwaW5nUmVkdWNlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RTdGF0ZSB7XHJcbiAgYXBwOiBJQXBwU3RhdGVcclxuICBuZXdNc2c6IElOb3RpZmljYXRpb25TdGF0ZVxyXG4gIGNhcnQ6IGFueVxyXG4gIHNoaXBwaW5nUHJpY2U6IElTaGlwcGluZ1N0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiBhcHBSZWR1Y2VyLFxyXG4gIG5ld01zZzogY3JlYXRlTmV3TXNnUmVkdWNlcixcclxuICBjYXJ0OiBjYXJ0UmVkdWNlcixcclxuICBzaGlwcGluZ1ByaWNlOiBjcmVhdGVTaGlwcGluZ1ByaWNlLFxyXG59KVxyXG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb25BY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uQWN0aW9ucydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvblN0YXRlIHtcclxuICBtc2c6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBJTm90aWZpY2F0aW9uU3RhdGUgPSB7XHJcbiAgbXNnOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3TXNnUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIE5vdGlmaWNhdGlvbkFjdGlvblR5cGVzLk5FV19NRVNTQUdFOiB7XHJcbiAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoaXBwaW5nQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL3NoaXBwaW5nQWN0aW9uJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2hpcHBpbmdTdGF0ZSB7XHJcbiAgc2hpcHBpbmdQcmljZTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IElTaGlwcGluZ1N0YXRlID0ge1xyXG4gIHNoaXBwaW5nUHJpY2U6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwcGluZ1ByaWNlID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU2hpcHBpbmdBY3Rpb25UeXBlcy5ORVdfU0hJUFBJTkdfUFJJQ0U6IHtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgeyByb290UmVkdWNlciwgSVJvb3RTdGF0ZSB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMnXHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcclxuXHJcbmxldCBzdG9yZTogU3RvcmU8SVJvb3RTdGF0ZT5cclxuXHJcbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZTogSVJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlOiBJUm9vdFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSlcclxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZTogSVJvb3RTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjNTU2Y2Q2JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lXHJcbiIsImV4cG9ydCBlbnVtIEVMb2dnZWRJbiB7XHJcbiAgVW5rbm93biA9ICdVbmtub3duJyxcclxuICBUcnVlID0gJ1RydWUnLFxyXG4gIEZhbHNlID0gJ0ZhbHNlJyxcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9