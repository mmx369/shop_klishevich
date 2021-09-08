(function() {
var exports = {};
exports.id = 4577;
exports.ids = [4577];
exports.modules = {

/***/ 8302:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
const faq = new Schema({
  answer: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  question: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  date: Date
}); // to avoid overwrite errror???
// @ts-ignore

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const Faq = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Faq', faq);
/* harmony default export */ __webpack_exports__["Z"] = (Faq);

/***/ }),

/***/ 9778:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AddNewFaq; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/layout.tsx + 3 modules
var layout = __webpack_require__(6013);
// EXTERNAL MODULE: ./models/shopFaq.ts
var shopFaq = __webpack_require__(8302);
// EXTERNAL MODULE: ./types/ERole.ts
var ERole = __webpack_require__(2244);
// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__(9513);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./components/AddNewFaqForm.tsx









external_react_toastify_.toast.configure();
const AddNewFaqForm = () => {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: question,
    1: setQuestion
  } = (0,external_react_.useState)('');
  const {
    0: answer,
    1: setAnswer
  } = (0,external_react_.useState)('');

  const changeHandlerQuestion = event => {
    setQuestion(event.target.value);
  };

  const changeHandlerAnswer = event => {
    setAnswer(event.target.value);
  };

  const addNewFaq = async () => {
    try {
      const addNewFaq = {
        question,
        answer
      };
      await external_axios_default().post(`${"http://shop.klishevich.ru"}/api/addnewfaq`, addNewFaq);
      external_react_toastify_.toast.success('Новая запись успешна добавлена', {
        position: external_react_toastify_.toast.POSITION.TOP_LEFT,
        autoClose: 5000
      });
      setQuestion('');
      setAnswer('');
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
              children: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextareaAutosize, {
              onChange: changeHandlerQuestion,
              minRows: 4,
              maxRows: 30,
              "aria-label": "\u0412\u043E\u043F\u0440\u043E\u0441",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441...",
              value: question
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextareaAutosize, {
              onChange: changeHandlerAnswer,
              minRows: 4,
              maxRows: 30,
              "aria-label": "\u041E\u0442\u0432\u0435\u0442",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043E\u0442\u0432\u0435\u0442...",
              value: answer
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
            variant: "outlined",
            color: "secondary",
            onClick: addNewFaq,
            children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/EditFaqForm.tsx









const EditFaqForm = ({
  id,
  updateFaqList,
  changeVisibility,
  answer,
  question
}) => {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: newQuestion,
    1: setNewQuestion
  } = (0,external_react_.useState)('');
  const {
    0: newAnswer,
    1: setNewAnswer
  } = (0,external_react_.useState)('');

  const changeHandlerQuestion = event => {
    setNewQuestion(event.target.value);
  };

  const changeHandlerAnswer = event => {
    setNewAnswer(event.target.value);
  };

  const deleteHandler = async () => {
    try {
      await external_axios_default().delete(`${"http://shop.klishevich.ru"}/api/deletefaq`, {
        data: id
      });
      external_react_toastify_.toast.success('Запись успешна удалена', {
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
      const updateFaq = {
        answer: newAnswer,
        question: newQuestion,
        id
      };
      const res = await external_axios_default().put(`${"http://shop.klishevich.ru"}/api/updatefaq`, updateFaq);

      if (res.status === 200) {
        external_react_toastify_.toast.success('Запись успешна изменена', {
          position: external_react_toastify_.toast.POSITION.TOP_LEFT,
          autoClose: 5000
        });
        updateFaqList();
        setNewQuestion('');
        setNewAnswer('');
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
          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u0438\u043B\u0438 \u043E\u0442\u0432\u0435\u0442"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextareaAutosize, {
            onChange: changeHandlerQuestion,
            minRows: 4,
            maxRows: 30,
            "aria-label": "\u0412\u043E\u043F\u0440\u043E\u0441",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441...",
            defaultValue: question
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextareaAutosize, {
            onChange: changeHandlerAnswer,
            minRows: 4,
            maxRows: 30,
            "aria-label": "\u041E\u0442\u0432\u0435\u0442",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043E\u0442\u0432\u0435\u0442...",
            defaultValue: answer
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
          children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./pages/admin/addnewfaq.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











function AddNewFaq({
  res
}) {
  const [session, loading] = (0,client_.useSession)();
  const {
    0: showAddFaqForm,
    1: setShowAddFaqForm
  } = (0,external_react_.useState)(false);
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false);
  const {
    0: id,
    1: setId
  } = (0,external_react_.useState)('');
  const {
    0: question,
    1: setQuestion
  } = (0,external_react_.useState)('');
  const {
    0: answer,
    1: setAnswer
  } = (0,external_react_.useState)('');
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

  const addNewFaq = () => {
    setShowAddFaqForm(true);
    console.log('add new faq');
  };

  const updateFaqList = () => {
    router_default().replace((router_default()).asPath);
  };

  const handleEdit = (id, question, answer) => () => {
    setVisible(true);
    setShowAddFaqForm(false);
    setId(id);
    setQuestion(question);
    setAnswer(answer);
  };

  const changeVisibility = () => {
    setVisible(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 | \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        container: true,
        spacing: 2,
        justifyContent: "center",
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: !showAddFaqForm && /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
            variant: "outlined",
            color: "secondary",
            fullWidth: true,
            onClick: addNewFaq,
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441(\u043E\u0442\u0432\u0435\u0442)"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: visible && !showAddFaqForm && /*#__PURE__*/jsx_runtime_.jsx(EditFaqForm, {
            id: id,
            updateFaqList: updateFaqList,
            changeVisibility: changeVisibility,
            answer: answer,
            question: question
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: showAddFaqForm && /*#__PURE__*/jsx_runtime_.jsx(AddNewFaqForm, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableContainer, {
        component: core_.Paper,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Table, {
          "aria-label": "simple table",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableHead, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                children: "\u0412\u043E\u043F\u0440\u043E\u0441"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                children: "\u041E\u0442\u0432\u0435\u0442"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "center",
                children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableBody, {
            children: res && res.map(row => /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                component: "th",
                scope: "row",
                children: row.question
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                children: row.answer
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
                align: "center",
                children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
                  color: "primary",
                  "aria-label": "upload picture",
                  component: "span",
                  onClick: handleEdit(row._id, row.question, row.answer),
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
    const data = await shopFaq/* default.find */.Z.find({});
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
var __webpack_exports__ = __webpack_require__.X(0, [8689,2956,1865,3157], function() { return __webpack_exec__(9778); });
module.exports = __webpack_exports__;

})();