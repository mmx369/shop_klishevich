"use strict";
(() => {
var exports = {};
exports.id = 1426;
exports.ids = [1426];
exports.modules = {

/***/ 4750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ serializeData)
/* harmony export */ });
function serializeData(data) {
  const serializedArray = data.map(el => {
    const resultArr = Object.entries(el._doc).map(([key, value]) => {
      if (key === 'order') {
        return [key, JSON.stringify(value)];
      }

      if (Array.isArray(value)) {
        return [key, value];
      }

      if (value instanceof Date) {
        return [key, value.toISOString()];
      }

      if (typeof value === 'object' && value !== null) {
        return [key, value.toString()];
      }

      return [key, value];
    });
    return Object.fromEntries(resultArr);
  });
  return serializedArray;
}

/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const newOrder = new Schema({
  email: String,
  firstName: String,
  secondName: String,
  fatherName: String,
  zip: String,
  country: String,
  region: String,
  city: String,
  address: String,
  phone: String,
  comments: String,
  order: [{
    _id: String,
    nameOfGoods: String,
    amountOfGoods: Number,
    priceOfGoods: Number
  }],
  totalPrice: Number,
  shippingPrice: Number,
  status: {
    type: String,
    default: 'open'
  },
  date: Date
}); // @ts-ignore
//avoid OverwriteModelError

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const NewOrder = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('NewOrder', newOrder);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewOrder);

/***/ }),

/***/ 5119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Orders),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 5 modules
var layout = __webpack_require__(1612);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/TableOrders.tsx






const columns = [{
  id: 'date',
  label: 'Дата заказа',
  minWidth: 170
}, {
  id: 'firstName',
  label: 'Клиент',
  minWidth: 100
}, {
  id: 'city',
  label: 'Город',
  minWidth: 170,
  align: 'right'
}, {
  id: 'totalPrice',
  label: 'Сумма заказа',
  minWidth: 170,
  align: 'right'
}, {
  id: 'status',
  label: 'Статус заказа',
  minWidth: 170,
  align: 'right'
}];
const useStyles = (0,styles_.makeStyles)({
  rows: {
    cursor: 'pointer'
  }
});
function TableOrders({
  orderList
}) {
  const classes = useStyles();
  const [page, setPage] = external_react_default().useState(0);
  const [rowsPerPage, setRowsPerPage] = external_react_default().useState(10);
  const router = (0,router_.useRouter)();

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOrder = id => {
    router.push(`orders/${id}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Paper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Table, {
        stickyHeader: true,
        "aria-label": "sticky table",
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableHead, {
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.TableRow, {
            children: columns.map(column => /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
              align: column.align,
              style: {
                minWidth: column.minWidth
              },
              children: column.label
            }, column.id))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableBody, {
          children: orderList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(order => {
            return /*#__PURE__*/jsx_runtime_.jsx(material_.TableRow, {
              className: classes.rows,
              hover: true,
              role: "checkbox",
              tabIndex: -1,
              onClick: () => handleOrder(order._id),
              children: columns.map(column => {
                const value = column.id === 'date' ? new Date(order[column.id]).toLocaleDateString() : column.id === 'firstName' ? order[column.id] + ' ' + order.secondName : order[column.id];
                return /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                  align: column.align,
                  children: value
                }, column.id);
              })
            }, order._id);
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.TablePagination, {
      rowsPerPageOptions: [10, 25, 100],
      component: "div",
      count: orderList.length,
      rowsPerPage: rowsPerPage,
      page: page,
      onPageChange: handleChangePage,
      onRowsPerPageChange: handleChangeRowsPerPage
    })]
  });
}
// EXTERNAL MODULE: ./src/lib/serialize.ts
var serialize = __webpack_require__(4750);
// EXTERNAL MODULE: ./src/models/newOrder.ts
var newOrder = __webpack_require__(894);
// EXTERNAL MODULE: ./src/types/ERole.ts
var ERole = __webpack_require__(5472);
;// CONCATENATED MODULE: ./src/pages/admin/orders.tsx










const orders_useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    marginTop: '50px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));
function Orders({
  orderList
}) {
  const classes = orders_useStyles();
  const [session, loading] = (0,client_.useSession)();
  if (false) {}

  if (!session) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      }), ";"]
    });
  }

  if (session.role !== ERole/* ERole.Admin */.S.Admin) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C"
      }), ";"]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: /*#__PURE__*/jsx_runtime_.jsx(TableOrders, {
        orderList: orderList
      })
    })
  });
}
const getServerSideProps = async () => {
  try {
    const data = await newOrder/* default.find */.Z.find({}).where('status').in(['open', 'paid', 'shipped', 'received']).select('-__v');
    const dataSerialized = (0,serialize/* serializeData */.L)(data);
    return {
      props: {
        orderList: dataSerialized
      }
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true
    };
  }
};

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 3403:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Contacts");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 5799:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LiveHelp");

/***/ }),

/***/ 4107:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalShipping");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 2548:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCartRounded");

/***/ }),

/***/ 2584:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SupervisorAccount");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,2246,1612], () => (__webpack_exec__(5119)));
module.exports = __webpack_exports__;

})();