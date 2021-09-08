(function() {
var exports = {};
exports.id = 1426;
exports.ids = [1426];
exports.modules = {

/***/ 5646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const newOrder = new Schema({
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
}); // to avoid overwrite errror???
// @ts-ignore

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const NewOrder = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('NewOrder', newOrder);
/* harmony default export */ __webpack_exports__["Z"] = (NewOrder);

/***/ }),

/***/ 6356:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Orders; },
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(2302);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(9613);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(8222);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(6847);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TablePagination/TablePagination.js + 5 modules
var TablePagination = __webpack_require__(3794);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(7394);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/TableOrders.tsx













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
const useStyles = (0,makeStyles/* default */.Z)({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
});
function TableOrders({
  listOfOrders
}) {
  const classes = useStyles();
  const [page, setPage] = external_react_default().useState(0);
  const [rowsPerPage, setRowsPerPage] = external_react_default().useState(10);
  const router = (0,router_.useRouter)();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOrder = (event, id) => {
    event.preventDefault();
    router.push(`orders/${id}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(TableContainer/* default */.Z, {
      className: classes.container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Table/* default */.Z, {
        stickyHeader: true,
        "aria-label": "sticky table",
        children: [/*#__PURE__*/jsx_runtime_.jsx(TableHead/* default */.Z, {
          children: /*#__PURE__*/jsx_runtime_.jsx(TableRow/* default */.Z, {
            children: columns.map(column => /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              //@ts-ignore
              align: column.align,
              style: {
                minWidth: column.minWidth
              },
              children: column.label
            }, column.id))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(TableBody/* default */.Z, {
          children: listOfOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(order => {
            return /*#__PURE__*/jsx_runtime_.jsx(TableRow/* default */.Z, {
              hover: true,
              role: "checkbox",
              tabIndex: -1,
              onClick: () => handleOrder(event, order._id),
              children: columns.map(column => {
                const value = column.id === 'date' ? new Date(order[column.id]).toLocaleDateString() : column.id === 'firstName' ? order[column.id] + ' ' + order.secondName : order[column.id];
                return (
                  /*#__PURE__*/
                  //@ts-ignore
                  jsx_runtime_.jsx(TableCell/* default */.Z, {
                    align: column.align,
                    children: value
                  }, column.id)
                );
              })
            }, order._id);
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(TablePagination/* default */.Z, {
      rowsPerPageOptions: [10, 25, 100],
      component: "div",
      count: listOfOrders.length,
      rowsPerPage: rowsPerPage,
      page: page,
      onPageChange: handleChangePage,
      onRowsPerPageChange: handleChangeRowsPerPage
    })]
  });
}
// EXTERNAL MODULE: ./models/newOrder.ts
var newOrder = __webpack_require__(5646);
// EXTERNAL MODULE: ./types/ERole.ts
var ERole = __webpack_require__(2244);
;// CONCATENATED MODULE: ./pages/admin/orders.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Orders({
  res
}) {
  const [session, loading] = (0,client_.useSession)();
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
    children: /*#__PURE__*/jsx_runtime_.jsx(TableOrders, {
      listOfOrders: res
    })
  });
}
const getServerSideProps = async () => {
  try {
    const data = await newOrder/* default.find */.Z.find({});
    const resSerialized = data.map( //@ts-ignore
    (_ref) => {
      let {
        _doc: {
          _id,
          date,
          __v,
          order
        }
      } = _ref,
          rest = _objectWithoutProperties(_ref._doc, ["_id", "date", "__v", "order"]);

      rest._id = _id.toString();
      rest.date = date.toString();
      rest.order = order.toString();
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

/***/ 3857:
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

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
var __webpack_exports__ = __webpack_require__.X(0, [8689,2956,2004,2318,1344,9569,8550,170,6527,8695,3794,1865,3157], function() { return __webpack_exec__(6356); });
module.exports = __webpack_exports__;

})();