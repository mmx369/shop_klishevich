(() => {
var exports = {};
exports.id = 6911;
exports.ids = [6911];
exports.modules = {

/***/ 4750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Userlist),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@mui/icons-material/Edit"
var Edit_ = __webpack_require__(6902);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/AddNewUserForm.tsx










external_react_toastify_.toast.configure();
const initialValues = {
  username: '',
  email: '',
  role: 'client'
};
const validationSchema = external_yup_.object({
  username: external_yup_.string().min(3, 'Имя пользователя должно содержать минимум 3 символа').max(40, 'Имя пользователя должно содержать не более 40 символов').required('Имя пользователя обязательно'),
  email: external_yup_.string().email('Введите корректный адрес').required('Поле является обязательным'),
  role: external_yup_.string().required('Поле является обязательным')
});
const AddNewUserForm = ({
  setToggleVisability
}) => {
  const router = (0,router_.useRouter)();
  const formik = (0,external_formik_.useFormik)({
    initialValues,
    validationSchema,
    onSubmit: async (values, {
      setStatus
    }) => {
      const addNewUserHandler = async () => {
        try {
          const addNewUser = {
            username: values.username,
            email: values.email,
            role: values.role
          };
          await external_axios_default().post(`${"https://klishevich.ru"}/api/addnewuser`, addNewUser);
          external_react_toastify_.toast.success(`Пользователь ${values.username} успешно добавлен`, {
            position: external_react_toastify_.toast.POSITION.TOP_LEFT,
            autoClose: 5000
          });
          router.replace(router.asPath);
          setToggleVisability({
            addUserForm: false,
            editForm: false,
            addUserButton: true
          });
        } catch (e) {
          external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
            position: external_react_toastify_.toast.POSITION.TOP_LEFT,
            autoClose: 5000
          });
          console.error(e);
          setStatus({
            success: false
          });
        }
      };

      addNewUserHandler();
    }
  });

  const cancelAddUser = () => {
    setToggleVisability({
      addUserForm: false,
      editForm: false,
      addUserButton: true
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      direction: "column",
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          style: {
            textAlign: 'center'
          },
          children: "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: formik.handleSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.TextField, {
            id: "username",
            name: "username",
            label: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
            type: "text",
            value: formik.values.username,
            onChange: formik.handleChange,
            error: formik.touched.username && Boolean(formik.errors.username),
            helperText: formik.touched.username && formik.errors.username,
            variant: "standard",
            margin: "none",
            fullWidth: true
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.TextField, {
            id: "email",
            name: "email",
            label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
            value: formik.values.email,
            onChange: formik.handleChange,
            error: formik.touched.email && Boolean(formik.errors.email),
            helperText: formik.touched.email && formik.errors.email,
            variant: "standard",
            margin: "none",
            fullWidth: true
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.FormControl, {
            fullWidth: true,
            margin: "normal",
            size: "small",
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.InputLabel, {
              id: "role"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TextField, {
              select: true,
              id: "role",
              label: "\u0420\u043E\u043B\u044C",
              variant: "outlined",
              name: "role",
              value: formik.values.role,
              onChange: formik.handleChange,
              error: formik.touched.role && Boolean(formik.errors.role),
              helperText: formik.touched.role && formik.errors.role,
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                value: '',
                children: /*#__PURE__*/jsx_runtime_.jsx("em", {
                  children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                value: 'admin',
                children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                value: 'client',
                children: "\u041A\u043B\u0438\u0435\u043D\u0442"
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
          item: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            sx: {
              margin: '5px'
            },
            variant: "outlined",
            color: "secondary",
            type: "submit",
            children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            sx: {
              margin: '5px'
            },
            variant: "outlined",
            color: "secondary",
            onClick: cancelAddUser,
            children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          })]
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/EditUserlistForm.tsx











const EditUserlistForm_validationSchema = external_yup_.object({
  username: external_yup_.string().min(3, 'Имя пользователя должно содержать минимум 3 символа').max(40, 'Имя пользователя должно содержать не более 40 символов').required('Имя пользователя обязательно'),
  email: external_yup_.string().email('Введите корректный адрес').required('Поле является обязательным'),
  role: external_yup_.string().required('Поле является обязательным')
});
const EditUserlistForm = ({
  id,
  email,
  updateUserList,
  setToggleVisability,
  reloadEditForm
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: initialValues,
    1: setInitialValues
  } = (0,external_react_.useState)({
    username: '',
    email: '',
    role: ''
  });
  (0,external_react_.useEffect)(() => {
    external_axios_default().get(`${"https://klishevich.ru"}/api/getuserdata?id=${id}`).then(({
      data
    }) => {
      setInitialValues({
        username: data.name || '',
        email: data.email || '',
        role: data.role || ''
      });
    }).catch(err => console.log(err));
  }, [reloadEditForm]);
  const formik = (0,external_formik_.useFormik)({
    enableReinitialize: true,
    initialValues,
    validationSchema: EditUserlistForm_validationSchema,
    onSubmit: async values => {
      const updateUserHandler = async () => {
        try {
          const updateUser = {
            username: values.username,
            email: values.email,
            role: values.role,
            id
          };
          const res = await external_axios_default().put(`${"https://klishevich.ru"}/api/updateuser`, updateUser);

          if (res.status === 200) {
            external_react_toastify_.toast.success(`Данные пользователя ${values.username} успешно изменены`, {
              position: external_react_toastify_.toast.POSITION.TOP_LEFT,
              autoClose: 5000
            });
            updateUserList();
            setToggleVisability({
              addUserForm: false,
              editForm: false,
              addUserButton: true
            });
          }
        } catch (e) {
          external_react_toastify_.toast.error(`Ошибка: ${e.response.data.message}`, {
            position: external_react_toastify_.toast.POSITION.TOP_LEFT,
            autoClose: 5000
          });
          console.log(e);
        }
      };

      updateUserHandler();
    }
  });

  const deleteHandler = async () => {
    try {
      await external_axios_default()["delete"](`${"https://klishevich.ru"}/api/deleteuser`, {
        data: id
      });
      external_react_toastify_.toast.success(`Пользователь удален`, {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      setToggleVisability({
        addUserForm: false,
        editForm: false,
        addUserButton: true
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

  const cancelEditUser = () => {
    setToggleVisability({
      addUserForm: false,
      editForm: false,
      addUserButton: true
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 2,
      direction: "column",
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        sx: {
          textAlign: 'center'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
          children: ["\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C: ", email]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: formik.handleSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.TextField, {
            id: "username",
            name: "username",
            label: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
            type: "text",
            value: formik.values.username,
            onChange: formik.handleChange,
            error: formik.touched.username && Boolean(formik.errors.username),
            helperText: formik.touched.username && formik.errors.username,
            variant: "standard",
            margin: "none",
            fullWidth: true
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.TextField, {
            id: "email",
            name: "email",
            label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
            value: formik.values.email,
            onChange: formik.handleChange,
            error: formik.touched.email && Boolean(formik.errors.email),
            helperText: formik.touched.email && formik.errors.email,
            variant: "standard",
            margin: "none",
            fullWidth: true
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.FormControl, {
            fullWidth: true,
            margin: "normal",
            size: "small",
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.InputLabel, {
              id: "role"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TextField, {
              select: true,
              id: "role",
              label: "\u0420\u043E\u043B\u044C",
              variant: "outlined",
              name: "role",
              value: formik.values.role,
              onChange: formik.handleChange,
              error: formik.touched.role && Boolean(formik.errors.role),
              helperText: formik.touched.role && formik.errors.role,
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                value: '',
                children: /*#__PURE__*/jsx_runtime_.jsx("em", {
                  children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                value: 'admin',
                children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
                value: 'client',
                children: "\u041A\u043B\u0438\u0435\u043D\u0442"
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
          item: true,
          sx: {
            textAlign: 'center'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            sx: {
              margin: '5px'
            },
            variant: "outlined",
            color: "secondary",
            type: "submit",
            children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            sx: {
              margin: '5px'
            },
            variant: "outlined",
            color: "secondary",
            onClick: cancelEditUser,
            children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          sx: {
            marginBottom: '5px'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            variant: "outlined",
            color: "secondary",
            fullWidth: true,
            onClick: deleteHandler,
            children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 5 modules
var layout = __webpack_require__(1612);
// EXTERNAL MODULE: ./src/lib/serialize.ts
var serialize = __webpack_require__(4750);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
// EXTERNAL MODULE: ./src/types/ERole.ts
var ERole = __webpack_require__(5472);
;// CONCATENATED MODULE: ./src/models/shopUser.ts


const Schema = (external_mongoose_default()).Schema;
const shopUser = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: ERole/* ERole.Client */.S.Client
  },
  name: String,
  date: Date,
  passwordHash: String,
  orders: [{
    type: (external_mongoose_default()).Schema.Types.ObjectId,
    ref: 'ShopOrders'
  }],
  cart: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'ShopGoods',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
}); //@ts-ignore
//avoid OverwriteModelError

(external_mongoose_default()).models = {};
const ShopUser = external_mongoose_default().model('ShopUser', shopUser);
/* harmony default export */ const models_shopUser = (ShopUser);
;// CONCATENATED MODULE: ./src/pages/admin/userlist.tsx














const useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    marginTop: '50px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));
function Userlist({
  userlist
}) {
  const classes = useStyles();
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
    0: reloadEditForm,
    1: setReloadEditForm
  } = (0,external_react_.useState)(false);
  const {
    0: toggleVisability,
    1: setToggleVisability
  } = (0,external_react_.useState)({
    addUserForm: false,
    editForm: false,
    addUserButton: true
  });
  if (false) {}

  if (!session) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F."
      })
    });
  }

  if (session.role !== ERole/* ERole.Admin */.S.Admin) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u043C\u0435\u0442\u044C \u043F\u0440\u0430\u0432\u0430 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
      })
    });
  }

  const updateUserList = () => {
    router.replace(router.asPath);
  };

  const handleEdit = (id, email) => () => {
    reloadEditForm ? setReloadEditForm(false) : setReloadEditForm(true);
    setToggleVisability({
      addUserForm: false,
      addUserButton: false,
      editForm: true
    });
    setId(id);
    setEmail(email);
  };

  const addNewUser = () => {
    setToggleVisability({
      addUserForm: true,
      addUserButton: false,
      editForm: false
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        spacing: 2,
        justifyContent: "center",
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: toggleVisability.addUserButton && /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            variant: "outlined",
            color: "secondary",
            fullWidth: true,
            onClick: addNewUser,
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: toggleVisability.editForm && /*#__PURE__*/jsx_runtime_.jsx(EditUserlistForm, {
            id: id,
            email: email,
            updateUserList: updateUserList,
            setToggleVisability: setToggleVisability,
            reloadEditForm: reloadEditForm
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: toggleVisability.addUserForm && /*#__PURE__*/jsx_runtime_.jsx(AddNewUserForm, {
            setToggleVisability: setToggleVisability
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableContainer, {
        component: material_.Paper,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Table, {
          "aria-label": "simple table",
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableHead, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                children: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: "\u0418\u043C\u044F"
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: "\u0420\u043E\u043B\u044C"
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: "\u0417\u0430\u043A\u0430\u0437\u044B"
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableBody, {
            children: userlist && userlist.map(row => /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                component: "th",
                scope: "row",
                children: row.email
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: row.name
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: row.role
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: row.orders.length > 0 ? row.orders : 'Нет заказов'
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
                align: "right",
                children: /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
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
  const data = await models_shopUser.find({}).select('-__v -date -cart');
  const userlist = (0,serialize/* serializeData */.L)(data);
  return {
    props: {
      userlist
    }
  };
};

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 3403:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Contacts");

/***/ }),

/***/ 6902:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 3467:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 5799:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LiveHelp");

/***/ }),

/***/ 4107:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LocalShipping");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 2548:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ShoppingCartRounded");

/***/ }),

/***/ 2584:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/SupervisorAccount");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

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

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 427:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2082,676,1664,2246,1612], () => (__webpack_exec__(1514)));
module.exports = __webpack_exports__;

})();