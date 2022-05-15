(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ErrorFallback)
/* harmony export */ });
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(() => (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)({
  root: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  }
}));
function ErrorFallback() {
  const classes = useStyles();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      src: '/images/image-404.jpg',
      height: 271,
      width: 332,
      alt: "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A..."
    })
  });
}

/***/ }),

/***/ 9039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/ErrorFallback.tsx
var ErrorFallback = __webpack_require__(2704);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ErrorBoundary.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ErrorBoundary extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      hasError: false
    });
  }

  static getDerivedStateFromError(_) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/jsx_runtime_.jsx(ErrorFallback/* ErrorFallback */.H, {});
    }

    return this.props.children;
  }

}

/* harmony default export */ const components_ErrorBoundary = (ErrorBoundary);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./src/types/ELoggedIn.ts
var ELoggedIn = __webpack_require__(399);
// EXTERNAL MODULE: ./src/redux/actions/appActions.ts
var appActions = __webpack_require__(9133);
;// CONCATENATED MODULE: ./src/redux/reducers/appReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { appReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  loading: false,
  currentUser: undefined,
  currentEmail: undefined,
  currentId: undefined,
  currentRole: undefined,
  isLoggedIn: ELoggedIn/* ELoggedIn.Unknown */.Y.Unknown
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions/* AppActionTypes.UPDATE_USER */.T7.UPDATE_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentUser: action.currentUser,
        currentEmail: action.currentEmail,
        currentId: action.currentId,
        currentRole: action.currentRole
      });

    case appActions/* AppActionTypes.UPDATE_LOADER */.T7.UPDATE_LOADER:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading
      });

    case appActions/* AppActionTypes.UPDATE_IS_LOGGED_IN */.T7.UPDATE_IS_LOGGED_IN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: action.isLoggedIn
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./src/redux/actions/cartActions.ts
var cartActions = __webpack_require__(5801);
;// CONCATENATED MODULE: ./src/redux/reducers/cartReducer.ts
function cartReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function cartReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cartReducer_ownKeys(Object(source), true).forEach(function (key) { cartReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cartReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cartReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




external_react_toastify_.toast.configure();
const cartReducer_initialState = [];
const cartReducer = (state = cartReducer_initialState, action) => {
  switch (action.type) {
    case cartActions/* CartActionTypes.NEW_ITEM */._E.NEW_ITEM:
      //если в корзине нет такого товара добавляю товар
      if (!state.some(el => el._id === action.data._id)) {
        const newState = [...state, action.data];
        localStorage.setItem('cart', JSON.stringify(newState));
        external_react_toastify_.toast.success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
          position: external_react_toastify_.toast.POSITION.TOP_LEFT,
          autoClose: 3000
        });
        return newState;
      } else {
        //если в корзине есть то добавляем количество
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
            autoClose: 3000
          });
          return newState;
        } else {
          external_react_toastify_.toast.error(`Ошибка: на складе нет такого количества товара`, {
            position: external_react_toastify_.toast.POSITION.TOP_LEFT,
            autoClose: 3000
          });
          return state;
        }
      }

    case cartActions/* CartActionTypes.REMOVE_FROM_CART */._E.REMOVE_FROM_CART:
      const resState = state.reduce((acc, item) => {
        if (item._id === action.data.id) {
          if (item.amountOfGoods === 1) return acc;
          return [...acc, cartReducer_objectSpread(cartReducer_objectSpread({}, item), {}, {
            amountOfGoods: item.amountOfGoods - action.data.value
          })];
        } else {
          return [...acc, item];
        }
      }, []);
      window.localStorage.setItem('cart', JSON.stringify(resState));
      return resState;

    case cartActions/* CartActionTypes.INIT_ITEMS */._E.INIT_ITEMS:
      return action.data;

    case cartActions/* CartActionTypes.DELETE_ITEM */._E.DELETE_ITEM:
      const newState = state.filter(el => el._id !== action.data);
      localStorage.setItem('cart', JSON.stringify(newState));
      external_react_toastify_.toast.success(`Товар успешно удален из корзины`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 3000
      });
      return newState;

    case cartActions/* CartActionTypes.DEFAULT */._E.DEFAULT:
      external_react_toastify_.toast.error(`Ошибка: на складе нет такого количества товара`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 3000
      });
      return state;

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./src/redux/actions/shippingAction.ts
var shippingAction = __webpack_require__(557);
;// CONCATENATED MODULE: ./src/redux/reducers/shippingReducer.ts
function shippingReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function shippingReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shippingReducer_ownKeys(Object(source), true).forEach(function (key) { shippingReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shippingReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shippingReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const shippingReducer_initialState = {
  shippingPrice: undefined
};
const createShippingState = (state = shippingReducer_initialState, action) => {
  switch (action.type) {
    case shippingAction/* ShippingActionTypes.NEW_SHIPPING_PRICE */.I.NEW_SHIPPING_PRICE:
      {
        return shippingReducer_objectSpread(shippingReducer_objectSpread({}, state), {}, {
          shippingPrice: action.data
        });
      }

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./src/redux/reducers/index.ts




const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  app: appReducer,
  cart: cartReducer,
  shippingState: createShippingState
});
;// CONCATENATED MODULE: ./src/store.ts
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
// EXTERNAL MODULE: ./src/theme.ts + 2 modules
var theme = __webpack_require__(9500);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(client_.Provider, {
      session: pageProps.session,
      children: [/*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0438. \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "/favicon.ico"
        }), /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430 | \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D | \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0431\u0430\u043D\u043A\u043D\u043E\u0442 \u0438 \u043C\u043E\u043D\u0435\u0442"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(styles_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_ErrorBoundary, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        })
      })]
    })
  });
}

/***/ }),

/***/ 9500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_theme)
});

;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./src/theme.ts


const theme = (0,styles_namespaceObject.createTheme)({
  palette: {
    primary: {
      main: colors_namespaceObject.purple[500]
    },
    secondary: {
      main: '#11cb5f'
    }
  }
});
/* harmony default export */ const src_theme = (theme);

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 9484:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 427:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2082,5675,2246], () => (__webpack_exec__(9039)));
module.exports = __webpack_exports__;

})();