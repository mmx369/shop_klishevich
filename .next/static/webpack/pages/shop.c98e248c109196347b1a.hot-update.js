webpackHotUpdate_N_E("pages/shop",{

/***/ "./components/ShopCard.tsx":
/*!*********************************!*\
  !*** ./components/ShopCard.tsx ***!
  \*********************************/
/*! exports provided: ShopCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCard", function() { return ShopCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _translate_category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../translate/category */ "./translate/category.ts");
/* harmony import */ var _translate_country__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../translate/country */ "./translate/country.ts");



var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\ShopCard.tsx",
    _s = $RefreshSig$();












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    media: {
      backgroundSize: 'contain' // height: 0,
      // paddingTop: '56.25%', // 16:9

    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["red"][500]
    },
    achorTag: {
      textDecoration: 'none'
    }
  });
});
function ShopCard(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/goods/[type]/[country]/[id]",
      as: "/goods/".concat(item.category, "/").concat(item.country, "/").concat(item._id),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: classes.achorTag,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
          elevation: 5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "".concat(Object(_translate_category__WEBPACK_IMPORTED_MODULE_10__["translateCategory"])(item.category), " | ").concat(Object(_translate_country__WEBPACK_IMPORTED_MODULE_11__["translateCountry"])(item.country)),
            subheader: item.nameOfGoods
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: classes.media,
            image: item.imageUrl[0],
            title: item.nameOfGoods // component='img'

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: ["\u0426\u0435\u043D\u0430: ", item.priceOfGoods, " \u0440\u0443\u0431\u043B\u0435\u0439. \u041E\u0441\u0442\u0430\u0442\u043E\u043A:", ' ', item.amountOfGoods > 0 ? item.amountOfGoods + ' шт.' : 'Товар отсутствует']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ShopCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ShopCard;

var _c;

$RefreshReg$(_c, "ShopCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wQ2FyZC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibWVkaWEiLCJiYWNrZ3JvdW5kU2l6ZSIsImF2YXRhciIsImJhY2tncm91bmRDb2xvciIsInJlZCIsImFjaG9yVGFnIiwidGV4dERlY29yYXRpb24iLCJTaG9wQ2FyZCIsIml0ZW0iLCJjbGFzc2VzIiwiY2F0ZWdvcnkiLCJjb3VudHJ5IiwiX2lkIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJ0cmFuc2xhdGVDb3VudHJ5IiwibmFtZU9mR29vZHMiLCJpbWFnZVVybCIsInByaWNlT2ZHb29kcyIsImFtb3VudE9mR29vZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxvQkFBYyxFQUFDLFNBRFYsQ0FFTDtBQUNBOztBQUhLLEtBREk7QUFNWEMsVUFBTSxFQUFFO0FBQ05DLHFCQUFlLEVBQUVDLDREQUFHLENBQUMsR0FBRDtBQURkLEtBTkc7QUFTWEMsWUFBUSxFQUFFO0FBQ1JDLG9CQUFjLEVBQUU7QUFEUjtBQVRDLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUFvQk8sU0FBU0MsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFDaEQsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxnREFBRDtBQUNFLFVBQUksRUFBQyw4QkFEUDtBQUVFLFFBQUUsbUJBQVlZLElBQUksQ0FBQ0UsUUFBakIsY0FBNkJGLElBQUksQ0FBQ0csT0FBbEMsY0FBNkNILElBQUksQ0FBQ0ksR0FBbEQsQ0FGSjtBQUFBLDZCQUlFO0FBQUcsaUJBQVMsRUFBRUgsT0FBTyxDQUFDSixRQUF0QjtBQUFBLCtCQUNFLHFFQUFDLDhEQUFEO0FBQU0sbUJBQVMsRUFBRSxDQUFqQjtBQUFBLGtDQUNFLHFFQUFDLG9FQUFEO0FBQ0UsaUJBQUssWUFBS1EsOEVBQWlCLENBQUNMLElBQUksQ0FBQ0UsUUFBTixDQUF0QixnQkFBMkNJLDRFQUFnQixDQUM5RE4sSUFBSSxDQUFDRyxPQUR5RCxDQUEzRCxDQURQO0FBSUUscUJBQVMsRUFBRUgsSUFBSSxDQUFDTztBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0UscUVBQUMsbUVBQUQ7QUFDRSxxQkFBUyxFQUFFTixPQUFPLENBQUNULEtBRHJCO0FBRUUsaUJBQUssRUFBRVEsSUFBSSxDQUFDUSxRQUFMLENBQWMsQ0FBZCxDQUZUO0FBR0UsaUJBQUssRUFBRVIsSUFBSSxDQUFDTyxXQUhkLENBSUU7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQWFFLHFFQUFDLHFFQUFEO0FBQUEsbUNBQ0UscUVBQUMsb0VBQUQ7QUFBWSxxQkFBTyxFQUFDLE9BQXBCO0FBQTRCLG1CQUFLLEVBQUMsZUFBbEM7QUFBa0QsdUJBQVMsRUFBQyxHQUE1RDtBQUFBLHVEQUNTUCxJQUFJLENBQUNTLFlBRGQsd0ZBQzZDLEdBRDdDLEVBRUdULElBQUksQ0FBQ1UsYUFBTCxHQUFxQixDQUFyQixHQUNHVixJQUFJLENBQUNVLGFBQUwsR0FBcUIsTUFEeEIsR0FFRyxtQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpQ0Q7O0dBbkNlWCxRO1VBQ0VYLFM7OztLQURGVyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AuYzk4ZTI0OGMxMDkxOTYzNDdiMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJ1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gJy4uL3BhZ2VzL2dvb2RzL1t0eXBlXS9bY291bnRyeV0vW2lkXSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDYXRlZ29yeSB9IGZyb20gJy4uL3RyYW5zbGF0ZS9jYXRlZ29yeSdcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ291bnRyeSB9IGZyb20gJy4uL3RyYW5zbGF0ZS9jb3VudHJ5J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOidjb250YWluJyxcclxuICAgICAgLy8gaGVpZ2h0OiAwLFxyXG4gICAgICAvLyBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxyXG4gICAgfSxcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJlZFs1MDBdLFxyXG4gICAgfSxcclxuICAgIGFjaG9yVGFnOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcENhcmRQcm9wcyB7XHJcbiAgaXRlbTogSXRlbU1vZGVsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaG9wQ2FyZCh7IGl0ZW0gfTogU2hvcENhcmRQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIGhyZWY9XCIvZ29vZHMvW3R5cGVdL1tjb3VudHJ5XS9baWRdXCJcclxuICAgICAgICBhcz17YC9nb29kcy8ke2l0ZW0uY2F0ZWdvcnl9LyR7aXRlbS5jb3VudHJ5fS8ke2l0ZW0uX2lkfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYWNob3JUYWd9PlxyXG4gICAgICAgICAgPENhcmQgZWxldmF0aW9uPXs1fSA+XHJcbiAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2Ake3RyYW5zbGF0ZUNhdGVnb3J5KGl0ZW0uY2F0ZWdvcnkpfSB8ICR7dHJhbnNsYXRlQ291bnRyeShcclxuICAgICAgICAgICAgICAgIGl0ZW0uY291bnRyeVxyXG4gICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICBzdWJoZWFkZXI9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2VVcmxbMF19XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZU9mR29vZHN9XHJcbiAgICAgICAgICAgICAgLy8gY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICDQptC10L3QsDoge2l0ZW0ucHJpY2VPZkdvb2RzfSDRgNGD0LHQu9C10LkuINCe0YHRgtCw0YLQvtC6OnsnICd9XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5hbW91bnRPZkdvb2RzID4gMFxyXG4gICAgICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50T2ZHb29kcyArICcg0YjRgi4nXHJcbiAgICAgICAgICAgICAgICAgIDogJ9Ci0L7QstCw0YAg0L7RgtGB0YPRgtGB0YLQstGD0LXRgid9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=