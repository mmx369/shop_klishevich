(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./theme.ts
var theme = __webpack_require__(1766);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
;// CONCATENATED MODULE: ./redux/actions/testActions.ts
let TestActionTypes;

(function (TestActionTypes) {
  TestActionTypes["TICK"] = "TICK";
  TestActionTypes["INCREMENT"] = "INCREMENT";
  TestActionTypes["DECREMENT"] = "DECREMENT";
  TestActionTypes["RESET"] = "RESET";
})(TestActionTypes || (TestActionTypes = {}));

const tickAC = (light = true) => ({
  type: TestActionTypes.TICK,
  light,
  lastUpdate: Date.now()
});
const incrementAC = () => ({
  type: TestActionTypes.INCREMENT
});
const decrementAC = () => ({
  type: TestActionTypes.DECREMENT
});
const resetAC = () => ({
  type: TestActionTypes.RESET
});
;// CONCATENATED MODULE: ./redux/reducers/testReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TestActionTypes.TICK:
      return _objectSpread(_objectSpread({}, state), {}, {
        lastUpdate: action.lastUpdate,
        light: !!action.light
      });

    case TestActionTypes.INCREMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count + 1
      });

    case TestActionTypes.DECREMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count - 1
      });

    case TestActionTypes.RESET:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: initialState.count
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./types/ELoggedIn.ts
var ELoggedIn = __webpack_require__(5629);
// EXTERNAL MODULE: ./redux/actions/appActions.ts
var appActions = __webpack_require__(3023);
;// CONCATENATED MODULE: ./redux/reducers/appReducer.ts
function appReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function appReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { appReducer_ownKeys(Object(source), true).forEach(function (key) { appReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { appReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const appReducer_initialState = {
  loading: false,
  currentUser: undefined,
  currentEmail: undefined,
  currentId: undefined,
  currentRole: undefined,
  isLoggedIn: ELoggedIn/* ELoggedIn.Unknown */.Y.Unknown
};
const appReducer = (state = appReducer_initialState, action) => {
  switch (action.type) {
    case appActions/* AppActionTypes.UPDATE_USER */.T7.UPDATE_USER:
      return appReducer_objectSpread(appReducer_objectSpread({}, state), {}, {
        currentUser: action.currentUser,
        currentEmail: action.currentEmail,
        currentId: action.currentId,
        currentRole: action.currentRole
      });

    case appActions/* AppActionTypes.UPDATE_LOADER */.T7.UPDATE_LOADER:
      return appReducer_objectSpread(appReducer_objectSpread({}, state), {}, {
        loading: action.loading
      });

    case appActions/* AppActionTypes.UPDATE_IS_LOGGED_IN */.T7.UPDATE_IS_LOGGED_IN:
      return appReducer_objectSpread(appReducer_objectSpread({}, state), {}, {
        isLoggedIn: action.isLoggedIn
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./redux/actions/notificationActions.ts
let NotificationActionTypes;

(function (NotificationActionTypes) {
  NotificationActionTypes["NEW_MESSAGE"] = "NEW_MESSAGE";
})(NotificationActionTypes || (NotificationActionTypes = {}));

const createNewMsg = msg => ({
  type: NotificationActionTypes.NEW_MESSAGE,
  data: msg
});
;// CONCATENATED MODULE: ./redux/reducers/notificationReducer.ts

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
var cartActions = __webpack_require__(456);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./redux/reducers/cartReducer.ts
function cartReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cartReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cartReducer_ownKeys(Object(source), true).forEach(function (key) { cartReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cartReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cartReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




external_react_toastify_.toast.configure();
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case cartActions/* CartActionTypes.NEW_ITEM */._E.NEW_ITEM:
      if (!state.some(el => el._id === action.data._id)) {
        const newState = [...state, action.data];
        localStorage.setItem('cart', JSON.stringify(newState));
        external_react_toastify_.toast.success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
          position: external_react_toastify_.toast.POSITION.TOP_LEFT,
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
          external_react_toastify_.toast.success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
            position: external_react_toastify_.toast.POSITION.TOP_LEFT,
            autoClose: 5000
          });
          return newState;
        } else {
          external_react_toastify_.toast.error(`Ошибка: на складе нет такого количества товара`, {
            position: external_react_toastify_.toast.POSITION.TOP_LEFT,
            autoClose: 5000
          });
          return state;
        }
      }

    case cartActions/* CartActionTypes.INIT_ITEMS */._E.INIT_ITEMS:
      return action.data;

    case cartActions/* CartActionTypes.DEFAULT */._E.DEFAULT:
      external_react_toastify_.toast.error(`Ошибка: на складе нет такого количества товара`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      return state;

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./redux/actions/shippingAction.ts
var shippingAction = __webpack_require__(8400);
;// CONCATENATED MODULE: ./redux/reducers/shippingReducer.ts

const shippingReducer_initialState = {
  shippingPrice: null
};
const createShippingPrice = (state = shippingReducer_initialState, action) => {
  console.log(2222, action);

  switch (action.type) {
    case shippingAction/* ShippingActionTypes.NEW_SHIPPING_PRICE */.I.NEW_SHIPPING_PRICE:
      {
        return action.data;
      }

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./redux/reducers/index.ts






const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  test: testReducer,
  app: appReducer,
  newMsg: createNewMsgReducer,
  cart: cartReducer,
  shippingPrice: createShippingPrice
});
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./store.ts
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;

function initStore(preloadedState) {
  return (0,external_redux_namespaceObject.createStore)(rootReducer, preloadedState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(store_objectSpread(store_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = (0,external_react_.useMemo)(() => initializeStore(initialState), [initialState]);
  return store;
}
;// CONCATENATED MODULE: ./pages/_app.tsx



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function App({
  Component,
  pageProps
}) {
  const store = useStore(pageProps.initialReduxState);
  external_react_default().useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(styles_.ThemeProvider, {
    theme: theme/* default */.Z,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(client_.Provider, {
        session: pageProps.session,
        children: [/*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
      })
    })
  });
}

/***/ }),

/***/ 8400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ ShippingActionTypes; },
/* harmony export */   "i": function() { return /* binding */ addShippingPrice; }
/* harmony export */ });
let ShippingActionTypes;

(function (ShippingActionTypes) {
  ShippingActionTypes["NEW_SHIPPING_PRICE"] = "NEW_SHIPPING_PRICE";
})(ShippingActionTypes || (ShippingActionTypes = {}));

const addShippingPrice = value => ({
  type: ShippingActionTypes.NEW_SHIPPING_PRICE,
  data: value
});

/***/ }),

/***/ 1766:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(907);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);

 // Create a theme instance.

const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__/* .default.A400 */ .Z.A400
    },
    background: {
      default: 'white'
    }
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (theme);

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [8689,6534,1865], function() { return __webpack_exec__(2787); });
module.exports = __webpack_exports__;

})();