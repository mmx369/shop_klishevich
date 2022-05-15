"use strict";
exports.id = 2246;
exports.ids = [2246];
exports.modules = {

/***/ 9133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T7": () => (/* binding */ AppActionTypes),
/* harmony export */   "bM": () => (/* binding */ updateUserAC),
/* harmony export */   "lL": () => (/* binding */ updateIsLoggedInAC)
/* harmony export */ });
/* unused harmony export updateLoaderAC */
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

/***/ 5801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_E": () => (/* binding */ CartActionTypes),
/* harmony export */   "D3": () => (/* binding */ initItems),
/* harmony export */   "v5": () => (/* binding */ addNewItem),
/* harmony export */   "h2": () => (/* binding */ removeFromCart)
/* harmony export */ });
/* unused harmony export deleteItem */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
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
    //get current product
    const item = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"http://klishevich.ru"}/api/getitembyid`, {
      params: {
        id
      }
    });
    const itemAmount = item.data.amountOfGoods; //get product remain in stock

    if (itemAmount <= 0) {
      //if below 0 dont change cart
      dispatch({
        type: CartActionTypes.DEFAULT
      });
    } else {
      //changed quantity
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

/***/ 557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ShippingActionTypes),
/* harmony export */   "i": () => (/* binding */ addShippingPrice)
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

/***/ 399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ELoggedIn)
/* harmony export */ });
let ELoggedIn;

(function (ELoggedIn) {
  ELoggedIn["Unknown"] = "Unknown";
  ELoggedIn["True"] = "True";
  ELoggedIn["False"] = "False";
})(ELoggedIn || (ELoggedIn = {}));

/***/ })

};
;