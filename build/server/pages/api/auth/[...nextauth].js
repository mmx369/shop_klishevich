"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_ERole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1535);


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

(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
const ShopUser = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ShopUser', shopUser);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopUser);

/***/ }),

/***/ 1015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
// EXTERNAL MODULE: ./src/db/dbConnect.ts
var dbConnect = __webpack_require__(4903);
// EXTERNAL MODULE: ./src/models/shopUser.ts
var models_shopUser = __webpack_require__(1376);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts




const options = {
  providers: [providers_default().Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  }), providers_default().Facebook({
    clientId: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET
  }), providers_default().Email({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    },
    from: process.env.EMAIL_FROM
  })],
  database: process.env.MONGODB_URI,
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async signIn(user, _account, _profile) {
      await (0,dbConnect/* dbConnect */.C)();

      try {
        const candidate = await models_shopUser/* default.findOne */.Z.findOne({
          email: user.email
        });

        if (!candidate) {
          const newShopUser = new models_shopUser/* default */.Z({
            email: user.email,
            name: user.name,
            image: user.image,
            date: new Date()
          });
          await newShopUser.save();
          return;
        }

        return;
      } catch (e) {
        console.error(e);
      }

      const isAllowedToSignIn = true;

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false; // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },

    async session(session, _token) {
      await (0,dbConnect/* dbConnect */.C)();

      if (session) {
        try {
          const {
            email
          } = session.user;
          const shopUser = await models_shopUser/* default.findOne */.Z.findOne({
            email
          });

          if (!shopUser) {
            throw new Error('User not found');
          }

          session.databaseId = shopUser._id;
          session.role = shopUser.role;
        } catch (error) {
          console.error(error);
        }
      }

      session.someInfo = 'testing';
      return session;
    }

  }
};
/* harmony default export */ const _nextauth_ = ((req, res) => {
  return external_next_auth_default()(req, res, options);
});

/***/ }),

/***/ 1535:
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

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4903], () => (__webpack_exec__(1015)));
module.exports = __webpack_exports__;

})();