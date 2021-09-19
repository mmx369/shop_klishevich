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

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "5i8Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addShippingPrice; });
let ShippingActionTypes;

(function (ShippingActionTypes) {
  ShippingActionTypes["NEW_SHIPPING_PRICE"] = "NEW_SHIPPING_PRICE";
})(ShippingActionTypes || (ShippingActionTypes = {}));

const addShippingPrice = value => ({
  type: ShippingActionTypes.NEW_SHIPPING_PRICE,
  data: value
});

/***/ }),

/***/ "9398":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
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
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "L1EO":
/***/ (function(module, exports) {



/***/ }),

/***/ "SqCa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUserAC; });
/* unused harmony export updateLoaderAC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateIsLoggedInAC; });
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

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles.css
var styles = __webpack_require__("L1EO");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: ./theme.ts
var theme = __webpack_require__("9398");

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./types/ELoggedIn.ts
var ELoggedIn = __webpack_require__("mE3t");

// EXTERNAL MODULE: ./redux/actions/appActions.ts
var appActions = __webpack_require__("SqCa");

// CONCATENATED MODULE: ./redux/reducers/appReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const appReducer_initialState = {
  loading: false,
  currentUser: undefined,
  currentEmail: undefined,
  currentId: undefined,
  currentRole: undefined,
  isLoggedIn: ELoggedIn["a" /* ELoggedIn */].Unknown
};
const appReducer = (state = appReducer_initialState, action) => {
  switch (action.type) {
    case appActions["a" /* AppActionTypes */].UPDATE_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.currentUser,
        currentEmail: action.currentEmail,
        currentId: action.currentId,
        currentRole: action.currentRole
      });

    case appActions["a" /* AppActionTypes */].UPDATE_LOADER:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading
      });

    case appActions["a" /* AppActionTypes */].UPDATE_IS_LOGGED_IN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: action.isLoggedIn
      });

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./redux/actions/notificationActions.ts
let NotificationActionTypes;

(function (NotificationActionTypes) {
  NotificationActionTypes["NEW_MESSAGE"] = "NEW_MESSAGE";
})(NotificationActionTypes || (NotificationActionTypes = {}));

const createNewMsg = msg => ({
  type: NotificationActionTypes.NEW_MESSAGE,
  data: msg
});
// CONCATENATED MODULE: ./redux/reducers/notificationReducer.ts

const notificationReducer_initialState = {
  msg: null
};
const createNewMsgReducer = (state = notificationReducer_initialState, action) => {
  switch (action.type) {
    case NotificationActionTypes.NEW_MESSAGE:
      {
        return action.data;
      }

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./redux/actions/cartActions.ts
var cartActions = __webpack_require__("ks2Y");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// CONCATENATED MODULE: ./redux/reducers/cartReducer.ts
function cartReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cartReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cartReducer_ownKeys(Object(source), true).forEach(function (key) { cartReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cartReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cartReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




external_react_toastify_["toast"].configure();
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case cartActions["a" /* CartActionTypes */].NEW_ITEM:
      if (!state.some(el => el._id === action.data._id)) {
        const newState = [...state, action.data];
        localStorage.setItem('cart', JSON.stringify(newState));
        external_react_toastify_["toast"].success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
          position: external_react_toastify_["toast"].POSITION.TOP_LEFT,
          autoClose: 5000
        });
        return newState;
      } else {
        const element = state.find(el => el._id === action.data._id);

        if (element.amountOfGoods + action.data.amountOfGoods <= action.stockamount) {
          const newElement = cartReducer_objectSpread(cartReducer_objectSpread({}, element), {}, {
            amountOfGoods: element.amountOfGoods + action.data.amountOfGoods
          });

          const newState = state.filter(el => el._id !== action.data._id);
          newState.push(newElement);
          localStorage.setItem('cart', JSON.stringify(newState));
          external_react_toastify_["toast"].success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
            position: external_react_toastify_["toast"].POSITION.TOP_LEFT,
            autoClose: 5000
          });
          return newState;
        } else {
          external_react_toastify_["toast"].error(`Ошибка: на складе нет такого количества товара`, {
            position: external_react_toastify_["toast"].POSITION.TOP_LEFT,
            autoClose: 5000
          });
          return state;
        }
      }

    case cartActions["a" /* CartActionTypes */].INIT_ITEMS:
      return action.data;

    case cartActions["a" /* CartActionTypes */].DEFAULT:
      external_react_toastify_["toast"].error(`Ошибка: на складе нет такого количества товара`, {
        position: external_react_toastify_["toast"].POSITION.TOP_LEFT,
        autoClose: 5000
      });
      return state;

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./redux/actions/shippingAction.ts
var shippingAction = __webpack_require__("5i8Z");

// CONCATENATED MODULE: ./redux/reducers/shippingReducer.ts

const shippingReducer_initialState = {
  shippingPrice: null
};
const createShippingPrice = (state = shippingReducer_initialState, action) => {
  switch (action.type) {
    case shippingAction["a" /* ShippingActionTypes */].NEW_SHIPPING_PRICE:
      {
        return action.data;
      }

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./redux/reducers/index.ts





const rootReducer = Object(external_redux_["combineReducers"])({
  app: appReducer,
  newMsg: createNewMsgReducer,
  cart: cartReducer,
  shippingPrice: createShippingPrice
});
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./store.ts
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store_store;

function initStore(preloadedState) {
  return Object(external_redux_["createStore"])(rootReducer, preloadedState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store_store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store_store) {
    _store = initStore(store_objectSpread(store_objectSpread({}, store_store.getState()), preloadedState)); // Reset the current store

    store_store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store_store) store_store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(external_react_["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}
// CONCATENATED MODULE: ./pages/_app.tsx



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function App({
  Component,
  pageProps
}) {
  const store = useStore(pageProps.initialReduxState);
  external_react_default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_["ThemeProvider"], {
    theme: theme["a" /* default */],
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(client_["Provider"], {
        session: pageProps.session,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CssBaseline_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))]
      })
    })
  });
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "ks2Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addNewItem; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
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
    const item = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${process.env.RESTURL}/api/getitembyid`, {
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

/***/ "mE3t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ELoggedIn; });
let ELoggedIn;

(function (ELoggedIn) {
  ELoggedIn["Unknown"] = "Unknown";
  ELoggedIn["True"] = "True";
  ELoggedIn["False"] = "False";
})(ELoggedIn || (ELoggedIn = {}));

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });