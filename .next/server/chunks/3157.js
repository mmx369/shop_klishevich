exports.id = 3157;
exports.ids = [3157];
exports.modules = {

/***/ 6013:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./types/ELoggedIn.ts
var ELoggedIn = __webpack_require__(5629);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
;// CONCATENATED MODULE: ./components/auth/sign_in_button.tsx






const SignInButtons = ({
  isSignedIn
}) => {
  const handleSignIn = () => {
    (0,client_.signIn)();
  };

  const handleSignOut = () => {
    (0,client_.signOut)();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-103564394",
    children: [!isSignedIn && /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
      color: "primary",
      variant: "contained",
      disableElevation: true,
      onClick: handleSignIn,
      children: "\u0412\u043E\u0439\u0442\u0438"
    }), isSignedIn && /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
      color: "primary",
      variant: "contained",
      disableElevation: true,
      onClick: handleSignOut,
      children: "\u0412\u044B\u0439\u0442\u0438"
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "103564394",
      children: ["div.jsx-103564394{margin:5px;}"]
    })]
  });
};

/* harmony default export */ var sign_in_button = (SignInButtons);
// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCartRounded"
var ShoppingCartRounded_ = __webpack_require__(5855);
var ShoppingCartRounded_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartRounded_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/Nav.tsx








const useStyles = (0,core_.makeStyles)(() => (0,core_.createStyles)({
  root: {
    flexGrow: 1
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));
function Nav({
  currentUser,
  currentEmail,
  currentId,
  currentRole,
  isLoggedIn,
  isCartEmpty
}) {
  const classes = useStyles();
  const router = (0,router_.useRouter)();

  const handleClick = e => {
    e.preventDefault();
    router.push('/cart');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(core_.AppBar, {
    position: "static",
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
      maxWidth: "lg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Toolbar, {
        variant: "dense",
        className: classes.root,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "subtitle2",
          className: classes.root,
          children: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430"
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Hidden, {
          xsDown: true,
          children: isLoggedIn === ELoggedIn/* ELoggedIn.True */.Y.True && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: ["\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A ", currentEmail]
          })
        }), !!isCartEmpty.length && /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
            color: "inherit",
            onClick: handleClick,
            children: /*#__PURE__*/jsx_runtime_.jsx((ShoppingCartRounded_default()), {})
          })
        }), isLoggedIn !== ELoggedIn/* ELoggedIn.Unknown */.Y.Unknown && /*#__PURE__*/jsx_runtime_.jsx(sign_in_button, {
          isSignedIn: isLoggedIn === ELoggedIn/* ELoggedIn.True */.Y.True
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/actions/appActions.ts
var appActions = __webpack_require__(3023);
// EXTERNAL MODULE: ./types/ERole.ts
var ERole = __webpack_require__(2244);
// EXTERNAL MODULE: ./redux/actions/cartActions.ts
var cartActions = __webpack_require__(456);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(5117);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/BottomAppBar.tsx









const BottomAppBar_useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none'
  }
}));
function BottomAppBar() {
  const classes = BottomAppBar_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
      position: "fixed",
      color: "primary",
      className: classes.appBar,
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Toolbar/* default */.Z, {
          variant: "dense",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Hidden, {
            xsDown: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: classes.link,
                children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  color: "primary",
                  variant: "contained",
                  size: "small",
                  disableElevation: true,
                  children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/paymentandshipping",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                color: "primary",
                variant: "contained",
                size: "small",
                disableElevation: true,
                children: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/faq",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                color: "primary",
                variant: "contained",
                size: "small",
                disableElevation: true,
                children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/contacts",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                color: "primary",
                variant: "contained",
                size: "small",
                disableElevation: true,
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              })
            })
          })]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/layout.tsx














const layout_useStyles = (0,core_.makeStyles)(() => (0,core_.createStyles)({
  main: {
    margin: '15px'
  },
  footer: {
    margin: '15px',
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none'
  },
  bread: {
    marginTop: '10px',
    marginLeft: '15px'
  }
}));
function Layout({
  children,
  title
}) {
  const classes = layout_useStyles();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const currentUser = (0,external_react_redux_.useSelector)(state => state.app.currentUser);
  const currentEmail = (0,external_react_redux_.useSelector)(state => state.app.currentEmail);
  const currentId = (0,external_react_redux_.useSelector)(state => state.app.currentId);
  const currentRole = (0,external_react_redux_.useSelector)(state => state.app.currentRole);
  const isLoggedIn = (0,external_react_redux_.useSelector)(state => state.app.isLoggedIn);
  external_react_default().useEffect(() => {
    if (isLoggedIn === ELoggedIn/* ELoggedIn.Unknown */.Y.Unknown) {
      ;

      (async () => {
        const session = await (0,client_.getSession)();

        if (session) {
          dispatch((0,appActions/* updateIsLoggedInAC */.lL)(ELoggedIn/* ELoggedIn.True */.Y.True));
          dispatch((0,appActions/* updateUserAC */.bM)(session.user.name, session.user.email, session.databaseId, session.role));
        } else {
          dispatch((0,appActions/* updateIsLoggedInAC */.lL)(ELoggedIn/* ELoggedIn.False */.Y.False));
          dispatch((0,appActions/* updateUserAC */.bM)(undefined, undefined, undefined, undefined));
        }
      })();
    }
  }, []);
  external_react_default().useEffect(() => {
    dispatch((0,cartActions/* initItems */.D3)());
  }, [dispatch]);
  const isCartEmpty = (0,external_react_redux_.useSelector)(state => state.cart) || [];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Nav, {
        currentUser: currentUser,
        currentEmail: currentEmail,
        currentId: currentId,
        currentRole: currentRole,
        isLoggedIn: isLoggedIn,
        isCartEmpty: isCartEmpty
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Breadcrumbs, {
          "aria-label": "breadcrumb",
          className: classes.bread,
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                color: "primary",
                children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/paymentandshipping",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                color: "primary",
                children: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/faq",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                color: "primary",
                children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/contacts",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                color: "primary",
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              })
            })
          }), currentRole === ERole/* ERole.Admin */.S.Admin && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/admin",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: classes.link,
              children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                color: "inherit",
                children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: classes.main,
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            flexGrow: 1
          },
          children: children
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: classes.footer,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: classes.link,
          children: /*#__PURE__*/jsx_runtime_.jsx("b", {
            children: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D. \u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(BottomAppBar, {})]
    })]
  });
}

/***/ }),

/***/ 2244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ ERole; }
/* harmony export */ });
let ERole;

(function (ERole) {
  ERole["Admin"] = "admin";
  ERole["Client"] = "client";
})(ERole || (ERole = {}));

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;