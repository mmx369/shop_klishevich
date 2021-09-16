(function() {
var exports = {};
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 3375:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const shopGoods = new Schema({
  nameOfGoods: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  amountOfGoods: Number,
  priceOfGoods: Number,
  catalogNumber: String,
  country: String,
  category: String,
  imageUrl: [String],
  date: Date
}); // to avoid overwrite errror???
// @ts-ignore

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const ShopGoods = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ShopGoods', shopGoods);
/* harmony default export */ __webpack_exports__["Z"] = (ShopGoods);

/***/ }),

/***/ 4691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EditItems; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/layout.tsx + 3 modules
var layout = __webpack_require__(6013);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./translate/category.ts
var category = __webpack_require__(2738);
// EXTERNAL MODULE: ./translate/country.ts
var country = __webpack_require__(220);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(5117);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js + 6 modules
var Modal = __webpack_require__(4038);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js
var Backdrop = __webpack_require__(2692);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fade/Fade.js
var Fade = __webpack_require__(3637);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./components/ModalEditGoods.tsx











const useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 42,
    margin: 10
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
function ModalEditGoods({
  open,
  price,
  amount,
  id,
  setOpen,
  handleOpen,
  handleClose
}) {
  const classes = useStyles();
  const [value, setValue] = external_react_default().useState(price > 0 ? price : 0);

  const handleInputChange = event => {
    setValue(Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    }
  };

  const updatePriceHandler = async () => {
    try {
      const updatePrice = {
        newPrice: value,
        id
      };
      const res = await external_axios_default().put(`${"https://shop.klishevich.ru"}/api/updateprice`, updatePrice);

      if (res.status === 200) {
        external_react_toastify_.toast.success('Цена успешна изменена', {
          position: external_react_toastify_.toast.POSITION.TOP_LEFT,
          autoClose: 5000
        });
        setValue(0);
        handleClose();
      }
    } catch (e) {
      external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      console.log(e);
    }
  };

  const updateAmountHandler = async () => {
    try {
      const updateAmount = {
        newAmount: value,
        id
      };
      const res = await external_axios_default().put(`${"https://shop.klishevich.ru"}/api/updateamount`, updateAmount);

      if (res.status === 200) {
        external_react_toastify_.toast.success('Количество успешна изменено', {
          position: external_react_toastify_.toast.POSITION.TOP_LEFT,
          autoClose: 5000
        });
        setValue(0);
        handleClose();
      }
    } catch (e) {
      external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      console.log(e);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
      "aria-labelledby": "transition-modal-title",
      "aria-describedby": "transition-modal-description",
      className: classes.modal,
      open: open,
      onClose: handleClose,
      closeAfterTransition: true,
      BackdropComponent: Backdrop/* default */.Z,
      BackdropProps: {
        timeout: 500
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Fade/* default */.Z, {
        in: open,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.paper,
          children: [price && /*#__PURE__*/jsx_runtime_.jsx("h2", {
            id: "transition-modal-title",
            children: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043D\u043E\u0432\u0443\u044E \u0446\u0435\u043D\u0443"
          }), price && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            id: "transition-modal-description",
            children: ["\u0421\u0442\u0430\u0440\u0430\u044F \u0446\u0435\u043D\u0430: ", price, " \u0440\u0443\u0431."]
          }), amount && /*#__PURE__*/jsx_runtime_.jsx("h2", {
            id: "transition-modal-title",
            children: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"
          }), amount && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            id: "transition-modal-description",
            children: ["\u0421\u0442\u0430\u0440\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ", amount, " \u0440\u0443\u0431."]
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Input, {
            className: classes.input,
            value: value,
            onChange: handleInputChange,
            onBlur: handleBlur,
            inputProps: {
              step: 1,
              min: 0,
              max: 100000,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
            variant: "contained",
            color: "primary",
            onClick: price ? updatePriceHandler : updateAmountHandler,
            children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          })]
        })
      })
    })
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/ListOfGoods.tsx












const ListOfGoods_useStyles = (0,core_.makeStyles)(theme => (0,core_.createStyles)({
  card: {
    maxWidth: 275,
    minHeight: 300
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  }
}));
function ListOfGoods({
  res
}) {
  const classes = ListOfGoods_useStyles();
  const router = (0,router_.useRouter)();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    0: id,
    1: setId
  } = (0,external_react_.useState)('');
  const {
    0: price,
    1: setPrice
  } = (0,external_react_.useState)('');
  const {
    0: amount,
    1: setAmount
  } = (0,external_react_.useState)('');

  const handleOpen = (id, price, amount) => {
    setOpen(true);
    setId(id);
    setPrice(price);
    setAmount(amount);
  };

  const handleDelete = async id => {
    try {
      await external_axios_default().delete(`${"https://shop.klishevich.ru"}/api/deleteitem`, {
        data: id
      });
      external_react_toastify_.toast.success('Позиция успешна удалена', {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      router.replace(router.asPath);
    } catch (e) {
      external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      console.log(e);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
      container: true,
      spacing: 2,
      children: res && res.res.map(item => /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Card, {
          elevation: 5,
          className: classes.card,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.CardHeader, {
            title: `${(0,category/* translateCategory */.J)(item.category)} | ${(0,country/* translateCountry */.y)(item.country)}`,
            subheader: item.nameOfGoods
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.CardMedia, {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.CardContent, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует']
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.CardActions, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              size: "small",
              color: "primary",
              onClick: () => handleOpen(item._id, item.priceOfGoods, null),
              children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0435\u043D\u0443"
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              size: "small",
              color: "primary",
              onClick: () => handleOpen(item._id, null, item.amountOfGoods),
              children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              size: "small",
              color: "primary",
              onClick: () => handleDelete(item._id),
              children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440"
            })]
          })]
        })
      }, item._id))
    }), /*#__PURE__*/jsx_runtime_.jsx(ModalEditGoods, {
      open: open,
      price: price,
      amount: amount,
      id: id,
      setOpen: setOpen,
      handleOpen: handleOpen,
      handleClose: handleClose
    }), /*#__PURE__*/jsx_runtime_.jsx("pre", {
      children: JSON.stringify(res, null, 3)
    })]
  });
}
// EXTERNAL MODULE: ./models/shopGoods.ts
var shopGoods = __webpack_require__(3375);
// EXTERNAL MODULE: ./types/ERole.ts
var ERole = __webpack_require__(2244);
;// CONCATENATED MODULE: ./pages/admin/edititems.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function EditItems(res) {
  const [session, loading] = (0,client_.useSession)();
  console.log(444444, res);
  if (false) {}

  if (!session) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      title: "Admin profile",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      }), ";"]
    });
  }

  if (session.role !== ERole/* ERole.Admin */.S.Admin) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      title: "Admin profile",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C"
      }), ";"]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438",
    children: /*#__PURE__*/jsx_runtime_.jsx(ListOfGoods, {
      res: res
    })
  });
}
const getServerSideProps = async () => {
  try {
    const data = await shopGoods/* default.find */.Z.find({});
    console.log(11111, data);
    const resSerialized = data.map( //@ts-ignore
    (_ref) => {
      let {
        _doc: {
          _id,
          date,
          __v
        }
      } = _ref,
          rest = _objectWithoutProperties(_ref._doc, ["_id", "date", "__v"]);

      rest._id = _id.toString();
      rest.date = date.toString();
      return rest;
    });
    return {
      props: {
        res: resSerialized
      } // will be passed to the page component as props

    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true
    };
  }
};

/***/ }),

/***/ 2738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ categories; },
/* harmony export */   "J": function() { return /* binding */ translateCategory; }
/* harmony export */ });
const categories = {
  'Paper Money': 'Банкноты',
  Coins: 'Монеты',
  Other: 'Прочие'
};
function translateCategory(category) {
  return categories[category];
}

/***/ }),

/***/ 220:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ countryList; },
/* harmony export */   "y": function() { return /* binding */ translateCountry; }
/* harmony export */ });
const countryList = {
  USSR: 'СССР',
  Russia: 'Россия',
  Tajikistan: 'Таджикистан',
  Uzbekistan: 'Узбекистан',
  Burma: 'Бирма',
  Yugoslavia: 'Югославия',
  Cambodia: 'Камбоджа',
  Iran: 'Иран',
  Nepal: 'Непал',
  Bhutan: 'Бутан',
  Lao: 'Лаос',
  China: 'Китай',
  Afganistan: 'Афганистан'
};
function translateCountry(country) {
  return countryList[country];
}

/***/ }),

/***/ 8819:
/***/ (function() {



/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 5855:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ShoppingCartRounded");;

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

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ 8104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

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

/***/ 3810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [8689,2956,2004,1344,2692,1865,3157], function() { return __webpack_exec__(4691); });
module.exports = __webpack_exports__;

})();