(function() {
var exports = {};
exports.id = 6911;
exports.ids = [6911];
exports.modules = {

/***/ 4354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2244);


const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const shopUser = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: _types_ERole__WEBPACK_IMPORTED_MODULE_1__/* .ERole.Client */ .S.Client
  },
  name: String,
  date: Date,
  passwordHash: String,
  orders: [{
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
    ref: 'ShopOrders'
  }]
}); // to avoid overwrite errror???
// @ts-ignore

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const ShopUser = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ShopUser', shopUser);
/* harmony default export */ __webpack_exports__["Z"] = (ShopUser);

/***/ }),

/***/ 1772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Userlist; },
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
// EXTERNAL MODULE: ./types/ERole.ts
var ERole = __webpack_require__(2244);
// EXTERNAL MODULE: ./models/shopUser.ts
var shopUser = __webpack_require__(4354);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__(9513);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./components/EditUserlistForm.tsx









const EditUserlistForm = ({
  id,
  email,
  updateUserList,
  changeVisibility
}) => {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)('');
  const {
    0: role,
    1: setRole
  } = (0,external_react_.useState)('');
  const {
    0: newEmail,
    1: setNewEmail
  } = (0,external_react_.useState)('');

  const changeHandlerName = event => {
    setName(event.target.value);
  };

  const changeHandlerRole = event => {
    setRole(event.target.value);
  };

  const changeHandlerEmail = event => {
    setNewEmail(event.target.value);
  };

  const deleteHandler = async () => {
    try {
      await external_axios_default().delete(`${"https://shop.klishevich.ru"}/api/deleteuser`, {
        data: id
      });
      external_react_toastify_.toast.success(`Пользователь успешно удален`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      router.replace(router.asPath);
    } catch (e) {
      external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      console.error(e);
    }
  };

  const updateHandler = async () => {
    try {
      const updateUser = {
        name,
        role,
        email: newEmail,
        id
      };
      const res = await external_axios_default().put(`${"https://shop.klishevich.ru"}/api/updateuser`, updateUser);

      if (res.status === 200) {
        external_react_toastify_.toast.success(`Данные пользователя ${name} успешно изменены`, {
          position: external_react_toastify_.toast.POSITION.TOP_LEFT,
          autoClose: 5000
        });
        updateUserList();
        setName('');
        setRole('');
        setNewEmail('');
        changeVisibility();
      }
    } catch (e) {
      external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      console.log(e);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
      container: true,
      spacing: 2,
      direction: "column",
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C: ", email]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
            onChange: changeHandlerName,
            margin: "normal",
            name: "name",
            value: name,
            type: "text",
            label: "\u0418\u043C\u044F",
            fullWidth: true
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
            onChange: changeHandlerEmail,
            margin: "normal",
            name: "email",
            value: newEmail,
            type: "text",
            label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
            fullWidth: true
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.FormControl, {
            fullWidth: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.InputLabel, {
              id: "select-label",
              children: "\u0420\u043E\u043B\u044C"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Select, {
              labelId: "select-label",
              value: role,
              onChange: changeHandlerRole,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: "",
                children: /*#__PURE__*/jsx_runtime_.jsx("em", {
                  children: "None"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: 'admin',
                children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: 'client',
                children: "\u041A\u043B\u0438\u0435\u043D\u0442"
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
          variant: "outlined",
          color: "secondary",
          fullWidth: true,
          onClick: updateHandler,
          children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
          variant: "outlined",
          color: "secondary",
          fullWidth: true,
          onClick: deleteHandler,
          children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/AddNewUserForm.tsx









external_react_toastify_.toast.configure();
const AddNewUserForm = () => {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: role,
    1: setRole
  } = (0,external_react_.useState)('');

  const changeHandlerName = event => {
    setName(event.target.value);
  };

  const changeHandlerEmail = event => {
    setEmail(event.target.value);
  };

  const changeHandlerRole = event => {
    setRole(event.target.value);
  };

  const addNewUser = async () => {
    try {
      const addNewUser = {
        name,
        email,
        role
      };
      await external_axios_default().post(`${"https://shop.klishevich.ru"}/api/addnewuser`, addNewUser);
      external_react_toastify_.toast.success(`Пользователь ${name} успешно добавлен`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      setName('');
      setEmail('');
      setRole('');
      router.replace(router.asPath);
    } catch (e) {
      external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      console.error(e);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        container: true,
        direction: "column",
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
              onChange: changeHandlerName,
              margin: "normal",
              name: "name",
              value: name,
              type: "text",
              label: "\u0418\u043C\u044F",
              fullWidth: true
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
              onChange: changeHandlerEmail,
              margin: "normal",
              name: "email",
              value: email,
              type: "text",
              label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
              fullWidth: true
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.FormControl, {
              fullWidth: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.InputLabel, {
                id: "select-label",
                children: "role"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Select, {
                labelId: "select-label",
                value: role,
                onChange: changeHandlerRole,
                children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("em", {
                    children: "None"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: 'admin',
                  children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"
                }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: 'client',
                  children: "\u041A\u043B\u0438\u0435\u043D\u0442"
                })]
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
            variant: "outlined",
            color: "secondary",
            onClick: addNewUser,
            children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./pages/admin/userlist.tsx












function Userlist({
  res
}) {
  const router = (0,router_.useRouter)();
  const [session, loading] = (0,client_.useSession)();
  const {
    0: id,
    1: setId
  } = (0,external_react_.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false);
  const {
    0: showAddUserForm,
    1: setShowAddUserForm
  } = (0,external_react_.useState)(false);
  const list = JSON.parse(res);
  console.log(list);
  if (false) {}

  if (!session) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      title: "Admin profile",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "You must sign in"
      }), ";"]
    });
  }

  if (session.role !== ERole/* ERole.Admin */.S.Admin) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      title: "Admin profile",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "You must be an admin to see this page"
      }), ";"]
    });
  }

  const updateUserList = () => {
    router.replace(router.asPath);
  };

  const handleEdit = (id, email) => () => {
    setVisible(true);
    setShowAddUserForm(false);
    setId(id);
    setEmail(email);
  };

  const changeVisibility = () => {
    setVisible(false);
  };

  const addNewUser = () => {
    setShowAddUserForm(true);
    console.log('add new user');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        container: true,
        spacing: 2,
        justifyContent: "center",
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: !showAddUserForm && /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
            variant: "outlined",
            color: "secondary",
            fullWidth: true,
            onClick: addNewUser,
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: visible && !showAddUserForm && /*#__PURE__*/jsx_runtime_.jsx(EditUserlistForm, {
            id: id,
            email: email,
            updateUserList: updateUserList,
            changeVisibility: changeVisibility
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: showAddUserForm && /*#__PURE__*/jsx_runtime_.jsx(AddNewUserForm, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableContainer, {
        component: core_.Paper,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Table, {
          "aria-label": "simple table",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableHead, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                children: "E-mail"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: "\u0418\u043C\u044F"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: "\u0420\u043E\u043B\u044C"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: "\u0417\u0430\u043A\u0430\u0437\u044B"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableBody, {
            children: list && list.map(row => /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                component: "th",
                scope: "row",
                children: row.email
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: row.name
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: row.role
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: row.orders.length > 0 ? row.orders : 'Нет заказов'
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "right",
                children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
                  color: "primary",
                  "aria-label": "upload picture",
                  component: "span",
                  onClick: handleEdit(row._id, row.email),
                  children: /*#__PURE__*/jsx_runtime_.jsx((Edit_default()), {})
                })
              })]
            }, row._id))
          })]
        })
      })]
    })
  });
}
const getServerSideProps = async () => {
  try {
    const data = await shopUser/* default.find */.Z.find({});

    if (!data) {
      return {
        notFound: true
      };
    }

    const res = JSON.stringify(data);
    return {
      props: {
        res
      } // will be passed to the page component as props

    };
  } catch (e) {
    console.error(e);
  }
};

/***/ }),

/***/ 8819:
/***/ (function() {



/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 9513:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Edit");;

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
var __webpack_exports__ = __webpack_require__.X(0, [8689,2956,1865,3157], function() { return __webpack_exec__(1772); });
module.exports = __webpack_exports__;

})();