webpackHotUpdate_N_E("pages/index",{

/***/ "./components/homepage/Catalog.tsx":
/*!*****************************************!*\
  !*** ./components/homepage/Catalog.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Catalog; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "./node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _lib_translate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/translate */ "./lib/translate.ts");
/* harmony import */ var _StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StyledTreeItem */ "./components/homepage/StyledTreeItem.tsx");




var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\homepage\\Catalog.tsx",
    _s = $RefreshSig$();









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    flexGrow: 1,
    maxWidth: 300
  }
});
function Catalog(_ref) {
  _s();

  var _this = this;

  var listOfCountries = _ref.listOfCountries,
      listOfCountriesCoins = _ref.listOfCountriesCoins;
  var classes = useStyles();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(type, country) {
      return C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                pathname: "/shop",
                query: {
                  type: type,
                  country: country,
                  page: 1
                }
              }, undefined, {
                shallow: true
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeView"], {
    className: classes.root,
    defaultExpanded: ["1", "2"],
    defaultCollapseIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 28
    }, this),
    defaultExpandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 26
    }, this),
    defaultEndIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: 24
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }, this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__["StyledTreeItem"], {
      nodeId: "1",
      labelText: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
      labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Label"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__["StyledTreeItem"], {
        nodeId: "2",
        labelText: "\u0411\u0430\u043D\u043A\u043D\u043E\u0442\u044B",
        labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Money"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__["StyledTreeItem"], {
          nodeId: "8",
          labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
          labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowRight"],
          onLabelClick: function onLabelClick() {
            return handleClick("Paper Money", "all");
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), listOfCountries === null || listOfCountries === void 0 ? void 0 : listOfCountries.map(function (el, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__["StyledTreeItem"], {
            nodeId: String(index + 10),
            labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowRight"],
            labelText: "".concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_9__["translateCountry"])(el.country)),
            labelInfo: el.count,
            color: "#1a73e8",
            bgColor: "#e8f0fe",
            onLabelClick: function onLabelClick() {
              return handleClick("Paper Money", el.country);
            }
          }, el.country, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__["StyledTreeItem"], {
        nodeId: "5",
        labelText: "\u041C\u043E\u043D\u0435\u0442\u044B",
        labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Money"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__["StyledTreeItem"], {
          nodeId: "9",
          labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
          labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowRight"],
          onLabelClick: function onLabelClick() {
            return handleClick("Coins", "all");
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), listOfCountriesCoins.map(function (el, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTreeItem__WEBPACK_IMPORTED_MODULE_10__["StyledTreeItem"], {
            nodeId: String(index + 100),
            labelText: "".concat(Object(_lib_translate__WEBPACK_IMPORTED_MODULE_9__["translateCountry"])(el.country)),
            labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowRight"],
            labelInfo: el.count,
            color: "#1a73e8",
            bgColor: "#e8f0fe",
            onLabelClick: function onLabelClick() {
              return handleClick("Coins", el.country);
            }
          }, el.country, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Catalog, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Catalog;

var _c;

$RefreshReg$(_c, "Catalog");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lcGFnZS9DYXRhbG9nLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwibWF4V2lkdGgiLCJDYXRhbG9nIiwibGlzdE9mQ291bnRyaWVzIiwibGlzdE9mQ291bnRyaWVzQ29pbnMiLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJ0eXBlIiwiY291bnRyeSIsInJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicGFnZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJ3aWR0aCIsIkxhYmVsIiwiTW9uZXkiLCJBcnJvd1JpZ2h0IiwibWFwIiwiZWwiLCJpbmRleCIsIlN0cmluZyIsInRyYW5zbGF0ZUNvdW50cnkiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLENBRE47QUFFSkMsWUFBUSxFQUFFO0FBRk47QUFEcUIsQ0FBRCxDQUE1QjtBQU9lLFNBQVNDLE9BQVQsT0FBNEQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsZUFBeUMsUUFBekNBLGVBQXlDO0FBQUEsTUFBeEJDLG9CQUF3QixRQUF4QkEsb0JBQXdCO0FBQ3pFLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6Qjs7QUFFQSxNQUFNUyxXQUFXO0FBQUEsK1FBQUcsaUJBQU9DLElBQVAsRUFBcUJDLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJDLGdFQUFNLENBQUNDLElBQVAsQ0FDRTtBQUNFQyx3QkFBUSxFQUFFLE9BRFo7QUFFRUMscUJBQUssRUFBRTtBQUNMTCxzQkFBSSxFQUFKQSxJQURLO0FBRUxDLHlCQUFPLEVBQVBBLE9B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LEVBQUVFLEVBQUUsQ0FBQ0ksS0FMaEI7QUFNRSxpQkFBSyxFQUFDLFNBTlI7QUFPRSxtQkFBTyxFQUFDLFNBUFY7QUFRRSx3QkFBWSxFQUFFO0FBQUEscUJBQU1uQixXQUFXLENBQUMsT0FBRCxFQUFVZSxFQUFFLENBQUNiLE9BQWIsQ0FBakI7QUFBQTtBQVJoQixhQUNPYSxFQUFFLENBQUNiLE9BRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEd0I7QUFBQSxTQUF6QixDQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxREQ7O0dBdkV1Qk4sTztVQUNOTCxTOzs7S0FETUssTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMTVlNzZlMDY4YjMyYWZlOTMwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBUcmVlVmlldyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd25cIjtcclxuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodFwiO1xyXG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBMYWJlbCwgTW9uZXkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZUNvdW50cnkgfSBmcm9tIFwiLi4vLi4vbGliL3RyYW5zbGF0ZVwiO1xyXG5pbXBvcnQgeyBTdHlsZWRUcmVlSXRlbSB9IGZyb20gXCIuL1N0eWxlZFRyZWVJdGVtXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIG1heFdpZHRoOiAzMDAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRhbG9nKHsgbGlzdE9mQ291bnRyaWVzLCBsaXN0T2ZDb3VudHJpZXNDb2lucyB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICh0eXBlOiBzdHJpbmcsIGNvdW50cnk6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTogXCIvc2hvcFwiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgY291bnRyeSxcclxuICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRyZWVWaWV3XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICBkZWZhdWx0RXhwYW5kZWQ9e1tcIjFcIiwgXCIyXCJdfVxyXG4gICAgICBkZWZhdWx0Q29sbGFwc2VJY29uPXs8QXJyb3dEcm9wRG93bkljb24gLz59XHJcbiAgICAgIGRlZmF1bHRFeHBhbmRJY29uPXs8QXJyb3dSaWdodEljb24gLz59XHJcbiAgICAgIGRlZmF1bHRFbmRJY29uPXs8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyNCB9fSAvPn1cclxuICAgID5cclxuICAgICAgPFN0eWxlZFRyZWVJdGVtIG5vZGVJZD1cIjFcIiBsYWJlbFRleHQ9XCLQmtCw0YLQsNC70L7Qs1wiIGxhYmVsSWNvbj17TGFiZWx9PlxyXG4gICAgICAgIDxTdHlsZWRUcmVlSXRlbSBub2RlSWQ9XCIyXCIgbGFiZWxUZXh0PVwi0JHQsNC90LrQvdC+0YLRi1wiIGxhYmVsSWNvbj17TW9uZXl9PlxyXG4gICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgIG5vZGVJZD1cIjhcIlxyXG4gICAgICAgICAgICBsYWJlbFRleHQ9XCLQn9C+0LrQsNC30LDRgtGMINCy0YHQtVwiXHJcbiAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgb25MYWJlbENsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlBhcGVyIE1vbmV5XCIsIFwiYWxsXCIpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7bGlzdE9mQ291bnRyaWVzPy5tYXAoKGVsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVHJlZUl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2VsLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgbm9kZUlkPXtTdHJpbmcoaW5kZXggKyAxMCl9XHJcbiAgICAgICAgICAgICAgbGFiZWxJY29uPXtBcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgIGxhYmVsVGV4dD17YCR7dHJhbnNsYXRlQ291bnRyeShlbC5jb3VudHJ5KX1gfVxyXG4gICAgICAgICAgICAgIGxhYmVsSW5mbz17ZWwuY291bnR9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjMWE3M2U4XCJcclxuICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2U4ZjBmZVwiXHJcbiAgICAgICAgICAgICAgb25MYWJlbENsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIlBhcGVyIE1vbmV5XCIsIGVsLmNvdW50cnkpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWRUcmVlSXRlbT5cclxuICAgICAgICA8U3R5bGVkVHJlZUl0ZW0gbm9kZUlkPVwiNVwiIGxhYmVsVGV4dD1cItCc0L7QvdC10YLRi1wiIGxhYmVsSWNvbj17TW9uZXl9PlxyXG4gICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgIG5vZGVJZD1cIjlcIlxyXG4gICAgICAgICAgICBsYWJlbFRleHQ9XCLQn9C+0LrQsNC30LDRgtGMINCy0YHQtVwiXHJcbiAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgb25MYWJlbENsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkNvaW5zXCIsIFwiYWxsXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtsaXN0T2ZDb3VudHJpZXNDb2lucy5tYXAoKGVsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVHJlZUl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2VsLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgbm9kZUlkPXtTdHJpbmcoaW5kZXggKyAxMDApfVxyXG4gICAgICAgICAgICAgIGxhYmVsVGV4dD17YCR7dHJhbnNsYXRlQ291bnRyeShlbC5jb3VudHJ5KX1gfVxyXG4gICAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICBsYWJlbEluZm89e2VsLmNvdW50fVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiIzFhNzNlOFwiXHJcbiAgICAgICAgICAgICAgYmdDb2xvcj1cIiNlOGYwZmVcIlxyXG4gICAgICAgICAgICAgIG9uTGFiZWxDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJDb2luc1wiLCBlbC5jb3VudHJ5KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkVHJlZUl0ZW0+XHJcbiAgICAgIDwvU3R5bGVkVHJlZUl0ZW0+XHJcbiAgICA8L1RyZWVWaWV3PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==