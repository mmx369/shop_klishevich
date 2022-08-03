"use strict";
exports.id = 1612;
exports.ids = [1612];
exports.modules = {

/***/ 1612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/actions/appActions.ts
var appActions = __webpack_require__(9133);
// EXTERNAL MODULE: ./src/redux/actions/cartActions.ts
var cartActions = __webpack_require__(5801);
// EXTERNAL MODULE: ./src/redux/selectors.ts
var selectors = __webpack_require__(1053);
// EXTERNAL MODULE: ./src/types/ELoggedIn.ts
var ELoggedIn = __webpack_require__(399);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/layout/bottomAppBar.tsx







const useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    marginBottom: '50px',
    textAlign: 'center',
    padding: '1rem'
  }
}));
function BottomAppBar() {
  const classes = useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
      className: classes.root,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D. \u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.AppBar, {
      position: "fixed",
      color: "primary",
      sx: {
        top: 'auto',
        bottom: 0
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(material_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Toolbar, {
          variant: "dense",
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
            sx: {
              display: {
                xs: 'none',
                sm: 'block'
              }
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
                  sx: router.pathname === '/' ? {
                    border: 'solid 1px'
                  } : null,
                  color: "primary",
                  variant: "contained",
                  size: "small",
                  "data-testid": "footerHomepageBtn",
                  disableElevation: true,
                  children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/paymentandshipping",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
                sx: router.pathname === '/paymentandshipping' ? {
                  border: 'solid 1px'
                } : null,
                color: "primary",
                variant: "contained",
                size: "small",
                "data-testid": "footerPaymentBtn",
                disableElevation: true,
                children: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/faq",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
                sx: router.pathname === '/faq' ? {
                  border: 'solid 1px'
                } : null,
                color: "primary",
                variant: "contained",
                size: "small",
                disableElevation: true,
                children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/contacts",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
                sx: router.pathname === '/contacts' ? {
                  border: 'solid 1px'
                } : null,
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
    })]
  });
}
// EXTERNAL MODULE: external "@mui/icons-material/ChevronLeft"
var ChevronLeft_ = __webpack_require__(6959);
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);
// EXTERNAL MODULE: external "@mui/icons-material/Contacts"
var Contacts_ = __webpack_require__(3403);
var Contacts_default = /*#__PURE__*/__webpack_require__.n(Contacts_);
// EXTERNAL MODULE: external "@mui/icons-material/Home"
var Home_ = __webpack_require__(3467);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);
// EXTERNAL MODULE: external "@mui/icons-material/LiveHelp"
var LiveHelp_ = __webpack_require__(5799);
var LiveHelp_default = /*#__PURE__*/__webpack_require__.n(LiveHelp_);
// EXTERNAL MODULE: external "@mui/icons-material/LocalShipping"
var LocalShipping_ = __webpack_require__(4107);
var LocalShipping_default = /*#__PURE__*/__webpack_require__.n(LocalShipping_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/ShoppingCartRounded"
var ShoppingCartRounded_ = __webpack_require__(2548);
var ShoppingCartRounded_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartRounded_);
// EXTERNAL MODULE: external "@mui/icons-material/SupervisorAccount"
var SupervisorAccount_ = __webpack_require__(2584);
var SupervisorAccount_default = /*#__PURE__*/__webpack_require__.n(SupervisorAccount_);
// EXTERNAL MODULE: ./src/types/ERole.ts
var ERole = __webpack_require__(5472);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./src/components/auth/sign_in_button.tsx





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
    children: [!isSignedIn && /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      color: "primary",
      variant: "contained",
      size: "small",
      disableElevation: true,
      onClick: handleSignIn,
      children: "\u0412\u043E\u0439\u0442\u0438"
    }), isSignedIn && /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      sx: {
        marginLeft: '5px'
      },
      color: "primary",
      variant: "contained",
      size: "small",
      disableElevation: true,
      onClick: handleSignOut,
      children: "\u0412\u044B\u0439\u0442\u0438"
    })]
  });
};

/* harmony default export */ const sign_in_button = (SignInButtons);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(238);
// EXTERNAL MODULE: ./src/redux/actions/shippingAction.ts
var shippingAction = __webpack_require__(557);
// EXTERNAL MODULE: ./src/lib/translate.ts
var translate = __webpack_require__(7169);
;// CONCATENATED MODULE: ./src/components/shop/CartItem.tsx






const CartItem_useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Arial, Helvetica, sans-serif',
    borderBottom: '1px solid lightblue',
    paddingBottom: '10px'
  },
  info: {
    fontSize: 'small'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  img: {
    maxWidth: '80px',
    objectFit: 'contain',
    marginLeft: '10px'
  }
}));
const CartItem = ({
  item,
  addToCart,
  removeFromCart
}) => {
  const classes = CartItem_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    "data-testid": "cartItem",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
        style: {
          marginBottom: '5px'
        },
        children: [(0,translate/* translateCategory */.Jv)(item.category), " | ", (0,translate/* translateCountry */.yy)(item.country), ' ', "| ", item.nameOfGoods]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.info,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " ", constants/* ROUBLE */.$y]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: ["\u0418\u0442\u043E\u0433\u043E: ", (item.amountOfGoods * item.priceOfGoods).toFixed(0), ' ', constants/* ROUBLE */.$y]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.buttons,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          size: "small",
          variant: "outlined",
          "data-testid": "removeFromCart",
          onClick: () => removeFromCart(item._id),
          children: "-"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: item.amountOfGoods
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          size: "small",
          variant: "outlined",
          "data-testid": "addToCart",
          onClick: () => addToCart(item._id),
          children: "+"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: item.imageUrl[0],
      alt: item.nameOfGoods,
      className: classes.img
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/shop/Cart.tsx











const Cart_useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    width: '250px',
    padding: '10px'
  },
  label: {
    fontSize: 'x-small'
  },
  btn: {
    marginBottom: '5px'
  }
}));
const Cart = ({
  cartItems,
  addToCart,
  removeFromCart,
  setCartOpen
}) => {
  const classes = Cart_useStyles();
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('courier');
  (0,external_react_.useEffect)(() => {
    dispatch((0,shippingAction/* addShippingPrice */.i)(constants/* SHIPPING_PRICES */.bW[value]));
    window.localStorage.setItem('shippingPrice', '' + constants/* SHIPPING_PRICES */.bW[value]);
  }, [value]);

  const calculateTotal = items => items.reduce((ack, item) => ack + item.amountOfGoods * item.priceOfGoods, 0);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleClearCart = () => {
    window.localStorage.removeItem('cart');
    router.reload();
  };

  const handleCheckout = () => {
    setCartOpen(false);
    router.push('/checkout');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      style: {
        textAlign: 'center',
        borderBottom: '1px solid lightblue'
      },
      children: "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430"
    }), cartItems.length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("h4", {
      style: {
        textAlign: 'center'
      },
      children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"
    }) : null, cartItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(CartItem, {
      item: item,
      addToCart: addToCart,
      removeFromCart: removeFromCart
    }, item._id)), !!cartItems.length && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["\u0412\u0441\u0435\u0433\u043E: ", calculateTotal(cartItems).toFixed(0), " ", constants/* ROUBLE */.$y]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          variant: "subtitle2",
          children: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.FormControl, {
            component: "fieldset",
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.FormLabel, {
              component: "legend"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.RadioGroup, {
              "aria-label": "shipping",
              name: "shipping",
              value: value,
              onChange: handleChange,
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.FormControlLabel, {
                classes: {
                  label: classes.label
                },
                value: "courier",
                control: /*#__PURE__*/jsx_runtime_.jsx(material_.Radio, {}),
                label: "\u041A\u0443\u0440\u044C\u0435\u0440 (\u0433.\u041C\u043E\u0441\u043A\u0432\u0430 400 \u0440\u0443\u0431.)",
                "data-testid": "shippingDefaultOption"
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.FormControlLabel, {
                classes: {
                  label: classes.label
                },
                value: "mail",
                control: /*#__PURE__*/jsx_runtime_.jsx(material_.Radio, {}),
                label: "\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E 1 \u043A\u043B\u0430\u0441\u0441\u0430 (\u041F\u043E\u0447\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438) \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 200 \u0440\u0443\u0431."
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.FormControlLabel, {
                classes: {
                  label: classes.label
                },
                value: "mailOverseas",
                control: /*#__PURE__*/jsx_runtime_.jsx(material_.Radio, {}),
                label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u041F\u043E\u0447\u0442\u043E\u0439 \u0420\u043E\u0441\u0441\u0438\u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436 500 \u0440\u0443\u0431."
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
            variant: "subtitle2",
            children: ["\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:", ' ', constants/* SHIPPING_PRICES */.bW[value] + +calculateTotal(cartItems).toFixed(2), ' ', constants/* ROUBLE */.$y]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
        className: classes.btn,
        variant: "contained",
        color: "primary",
        onClick: handleCheckout,
        fullWidth: true,
        size: "small",
        "data-testid": "checkoutBtn",
        children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
        variant: "contained",
        color: "primary",
        onClick: handleClearCart,
        fullWidth: true,
        size: "small",
        children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/layout/nav.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const nav_useStyles = (0,styles_.makeStyles)(() => (0,styles_.createStyles)({
  root: {
    flexGrow: 1
  },
  drawer: {
    width: 250,
    height: '100%'
  }
}));
function Nav({
  currentEmail,
  currentRole,
  isLoggedIn
}) {
  const classes = nav_useStyles();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    left: false
  });
  const cartItems = (0,external_react_redux_.useSelector)(selectors/* cartSelectors.currentCart */.nG.currentCart) || [];
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,external_react_.useState)(false);

  const getTotalItems = cartItems => {
    return cartItems.reduce((acc, item) => acc + item.amountOfGoods, 0);
  };

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      [anchor]: open
    }));
  };

  const DrawerHeader = (0,styles_.styled)('div')(({
    theme
  }) => _objectSpread(_objectSpread({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar), {}, {
    justifyContent: 'flex-end'
  }));

  const list = anchor => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.drawer,
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false),
    "data-testid": "drawer",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.List, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
            button: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
              children: /*#__PURE__*/jsx_runtime_.jsx((Home_default()), {})
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
              primary: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/paymentandshipping",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
            button: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
              children: /*#__PURE__*/jsx_runtime_.jsx((LocalShipping_default()), {})
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
              primary: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/faq",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
            button: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
              children: /*#__PURE__*/jsx_runtime_.jsx((LiveHelp_default()), {})
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
              primary: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx(material_.List, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/contacts",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
            button: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
              children: /*#__PURE__*/jsx_runtime_.jsx((Contacts_default()), {})
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
              primary: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {}), currentRole === ERole/* ERole.Client */.S.Client && /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      href: "/profile",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
          button: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((SupervisorAccount_default()), {})
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
            primary: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
          })]
        })
      })
    }), currentRole === ERole/* ERole.Admin */.S.Admin && /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      href: "/admin",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItem, {
          button: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((SupervisorAccount_default()), {})
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
            primary: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
          })]
        })
      })
    })]
  });

  const handleAddToCart = (id, value = 1) => {
    dispatch((0,cartActions/* addNewItem */.v5)(id, value));
  };

  const handleRemoveFromCart = (id, value = 1) => {
    dispatch((0,cartActions/* removeFromCart */.h2)(id, value));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Drawer, {
      anchor: "right",
      open: cartOpen,
      onClose: () => setCartOpen(false),
      children: /*#__PURE__*/jsx_runtime_.jsx(Cart, {
        cartItems: cartItems,
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        setCartOpen: setCartOpen
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.AppBar, {
      position: "fixed",
      sx: {
        boxShadow: 'none'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(material_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Toolbar, {
          variant: "dense",
          className: classes.root,
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
            color: "inherit",
            "aria-label": "open drawer",
            onClick: toggleDrawer('left', true),
            edge: "start",
            "data-testid": "drawerBtn",
            children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {})
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            variant: "subtitle2",
            className: classes.root,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                "data-testid": "navhomepagelink",
                children: "\u041D\u0443\u043C\u0438\u0437\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0431\u043E\u043D\u0438\u0441\u0442\u0438\u043A\u0430"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
            sx: {
              display: {
                xs: 'none',
                sm: 'block'
              }
            },
            children: isLoggedIn === ELoggedIn/* ELoggedIn.True */.Y.True && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                fontStyle: 'italic'
              },
              children: ["\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A ", currentEmail]
            })
          }), isLoggedIn !== ELoggedIn/* ELoggedIn.Unknown */.Y.Unknown && /*#__PURE__*/jsx_runtime_.jsx(sign_in_button, {
            isSignedIn: isLoggedIn === ELoggedIn/* ELoggedIn.True */.Y.True
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
              color: "inherit",
              onClick: () => setCartOpen(true),
              "data-testid": "cartBtn",
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.Badge, {
                badgeContent: getTotalItems(cartItems),
                color: "error",
                "data-testid": "badgeNumber",
                children: /*#__PURE__*/jsx_runtime_.jsx((ShoppingCartRounded_default()), {})
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Drawer, {
      anchor: "left",
      open: state['left'],
      onClose: toggleDrawer('left', false),
      children: [/*#__PURE__*/jsx_runtime_.jsx(DrawerHeader, {
        children: /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
          onClick: toggleDrawer('left', false),
          "data-testid": "drawerCloseBtn",
          children: /*#__PURE__*/jsx_runtime_.jsx((ChevronLeft_default()), {})
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {}), list('left')]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/layout/layout.tsx













function Layout({
  children,
  title
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const currentEmail = (0,external_react_redux_.useSelector)(selectors/* appSelectors.currentEmail */.LL.currentEmail);
  const currentRole = (0,external_react_redux_.useSelector)(selectors/* appSelectors.currentRole */.LL.currentRole);
  const isLoggedIn = (0,external_react_redux_.useSelector)(selectors/* appSelectors.isLoggedIn */.LL.isLoggedIn);
  (0,external_react_.useEffect)(() => {
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
  (0,external_react_.useEffect)(() => {
    dispatch((0,cartActions/* initItems */.D3)());
  }, [dispatch]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("header", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Nav, {
        currentEmail: currentEmail,
        currentRole: currentRole,
        isLoggedIn: isLoggedIn
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: /*#__PURE__*/jsx_runtime_.jsx(material_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: children
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      children: /*#__PURE__*/jsx_runtime_.jsx(BottomAppBar, {})
    })]
  });
}

/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tl": () => (/* binding */ CONSTANTS),
/* harmony export */   "bW": () => (/* binding */ SHIPPING_PRICES),
/* harmony export */   "jr": () => (/* binding */ PRODUCTS_TYPES),
/* harmony export */   "$y": () => (/* binding */ ROUBLE)
/* harmony export */ });
const CONSTANTS = {
  CLOUDINARY: {
    NAME: 'dxalptcye',
    API_KEY: '269656785337686'
  }
};
const SHIPPING_PRICES = {
  courier: 400,
  mail: 200,
  mailOverseas: 500
};
const PRODUCTS_TYPES = ['Paper Money', 'Coins', 'Other'];
const ROUBLE = '\u20bd';

/***/ }),

/***/ 6228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aA": () => (/* binding */ CATEGORIES),
/* harmony export */   "od": () => (/* binding */ COUNTRIES),
/* harmony export */   "NA": () => (/* binding */ TRANSLATE_MAP)
/* harmony export */ });
const CATEGORIES = {
  'Paper Money': 'Банкноты',
  Coins: 'Монеты',
  Other: 'Прочие'
};
const COUNTRIES = {
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
const TRANSLATE_MAP = {
  open: 'открыт',
  paid: 'оплачен',
  shipped: 'отправлен',
  received: 'получен',
  closed: 'закрыт'
};

/***/ }),

/***/ 7169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yy": () => (/* binding */ translateCountry),
/* harmony export */   "Jv": () => (/* binding */ translateCategory),
/* harmony export */   "Iu": () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _constants_translate_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6228);

function translateCountry(country) {
  if (!_constants_translate_map__WEBPACK_IMPORTED_MODULE_0__/* .COUNTRIES */ .od[country]) {
    return country;
  }

  return _constants_translate_map__WEBPACK_IMPORTED_MODULE_0__/* .COUNTRIES */ .od[country];
}
function translateCategory(category) {
  if (!_constants_translate_map__WEBPACK_IMPORTED_MODULE_0__/* .CATEGORIES */ .aA[category]) {
    return category;
  }

  return _constants_translate_map__WEBPACK_IMPORTED_MODULE_0__/* .CATEGORIES */ .aA[category];
}
function translate(word) {
  if (!_constants_translate_map__WEBPACK_IMPORTED_MODULE_0__/* .TRANSLATE_MAP */ .NA[word]) {
    return word;
  }

  return _constants_translate_map__WEBPACK_IMPORTED_MODULE_0__/* .TRANSLATE_MAP */ .NA[word];
}

/***/ }),

/***/ 1053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LL": () => (/* binding */ appSelectors),
/* harmony export */   "nG": () => (/* binding */ cartSelectors),
/* harmony export */   "bc": () => (/* binding */ shippingSelectors)
/* harmony export */ });
const currentEmail = state => state.app.currentEmail;

const currentRole = state => state.app.currentRole;

const isLoggedIn = state => state.app.isLoggedIn;

const currentCart = state => state.cart;

const shippingPrice = state => state.shippingState.shippingPrice;

const appSelectors = {
  currentEmail,
  currentRole,
  isLoggedIn
};
const cartSelectors = {
  currentCart
};
const shippingSelectors = {
  shippingPrice
};

/***/ }),

/***/ 5472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ERole)
/* harmony export */ });
let ERole;

(function (ERole) {
  ERole["Admin"] = "admin";
  ERole["Client"] = "client";
})(ERole || (ERole = {}));

/***/ })

};
;