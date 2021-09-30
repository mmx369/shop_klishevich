webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Catalog.tsx":
/*!********************************!*\
  !*** ./components/Catalog.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Catalog; });
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "./node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _translate_country__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../translate/country */ "./translate/country.ts");






var _jsxFileName = "C:\\projects\\shop_klishevich\\components\\Catalog.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var useTreeItemStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
    root: {
      color: theme.palette.text.secondary,
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: "var(--tree-view-bg-color, ".concat(theme.palette.grey[400], ")"),
        color: 'var(--tree-view-color)'
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent'
      }
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular
      }
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2)
      }
    },
    expanded: {},
    selected: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit'
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0)
    },
    labelIcon: {
      marginRight: theme.spacing(1)
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1
    }
  });
});

function StyledTreeItem(props) {
  _s();

  var classes = useTreeItemStyles();

  var labelText = props.labelText,
      LabelIcon = props.labelIcon,
      labelInfo = props.labelInfo,
      color = props.color,
      bgColor = props.bgColor,
      other = Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], _objectSpread({
    label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: classes.labelRoot,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(LabelIcon, {
        color: "inherit",
        className: classes.labelIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
        variant: "caption",
        color: "inherit",
        children: labelInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

_s(StyledTreeItem, "ZWL6tFu5yHhXYsnvH01dVCD6Dd8=", false, function () {
  return [useTreeItemStyles];
});

_c = StyledTreeItem;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  root: {
    flexGrow: 1,
    maxWidth: 300,
    height: 264
  }
});
function Catalog(_ref) {
  _s2();

  var _this = this;

  var listOfCountries = _ref.listOfCountries,
      listOfCountriesCoins = _ref.listOfCountriesCoins;
  var classes = useStyles();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(type, country) {
      return C_projects_shop_klishevich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
                pathname: '/shop',
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    style: {
      overflow: 'scroll'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeView"], {
      className: classes.root,
      defaultExpanded: ['1', '2'],
      defaultCollapseIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 30
      }, this),
      defaultExpandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 28
      }, this),
      defaultEndIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          width: 24
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTreeItem, {
        nodeId: "1",
        labelText: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
        labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Label"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTreeItem, {
          nodeId: "2",
          labelText: "\u0411\u0430\u043D\u043A\u043D\u043E\u0442\u044B",
          labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Money"],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTreeItem, {
            nodeId: "8",
            labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
            labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ArrowRight"],
            onLabelClick: function onLabelClick() {
              return handleClick('Paper Money', 'all');
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), listOfCountries === null || listOfCountries === void 0 ? void 0 : listOfCountries.map(function (el, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTreeItem, {
              nodeId: String(index + 10),
              labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ArrowRight"],
              labelText: "".concat(Object(_translate_country__WEBPACK_IMPORTED_MODULE_12__["translateCountry"])(el.country)),
              labelInfo: el.count,
              color: "#1a73e8",
              bgColor: "#e8f0fe",
              onLabelClick: function onLabelClick() {
                return handleClick('Paper Money', el.country);
              }
            }, el.country, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTreeItem, {
          nodeId: "5",
          labelText: "\u041C\u043E\u043D\u0435\u0442\u044B",
          labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Money"],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTreeItem, {
            nodeId: "9",
            labelText: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
            labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ArrowRight"],
            onLabelClick: function onLabelClick() {
              return handleClick('Coins', 'all');
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), listOfCountriesCoins.map(function (el, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTreeItem, {
              nodeId: String(index + 100),
              labelText: "".concat(Object(_translate_country__WEBPACK_IMPORTED_MODULE_12__["translateCountry"])(el.country)),
              labelIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ArrowRight"],
              labelInfo: el.count,
              color: "#1a73e8",
              bgColor: "#e8f0fe",
              onLabelClick: function onLabelClick() {
                return handleClick('Coins', el.country);
              }
            }, el.country, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 5
  }, this);
}

_s2(Catalog, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Catalog;

var _c, _c2;

$RefreshReg$(_c, "StyledTreeItem");
$RefreshReg$(_c2, "Catalog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRhbG9nLnRzeCJdLCJuYW1lcyI6WyJ1c2VUcmVlSXRlbVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiYWN0aW9uIiwiaG92ZXIiLCJncmV5IiwiY29udGVudCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic3BhY2luZyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwicGFkZGluZ1JpZ2h0IiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJncm91cCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsImV4cGFuZGVkIiwic2VsZWN0ZWQiLCJsYWJlbCIsImxhYmVsUm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImxhYmVsSWNvbiIsIm1hcmdpblJpZ2h0IiwibGFiZWxUZXh0IiwiZmxleEdyb3ciLCJTdHlsZWRUcmVlSXRlbSIsInByb3BzIiwiY2xhc3NlcyIsIkxhYmVsSWNvbiIsImxhYmVsSW5mbyIsImJnQ29sb3IiLCJvdGhlciIsInVzZVN0eWxlcyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiQ2F0YWxvZyIsImxpc3RPZkNvdW50cmllcyIsImxpc3RPZkNvdW50cmllc0NvaW5zIiwiaGFuZGxlQ2xpY2siLCJ0eXBlIiwiY291bnRyeSIsInJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicGFnZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJvdmVyZmxvdyIsIndpZHRoIiwiTGFiZWwiLCJNb25leSIsIkFycm93UmlnaHQiLCJtYXAiLCJlbCIsImluZGV4IiwiU3RyaW5nIiwidHJhbnNsYXRlQ291bnRyeSIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7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QUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBT0dELG9CQUFvQixDQUFDZ0IsR0FBckIsQ0FBeUIsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMO0FBQUEsZ0NBQ3hCLHFFQUFDLGNBQUQ7QUFFRSxvQkFBTSxFQUFFQyxNQUFNLENBQUNELEtBQUssR0FBRyxHQUFULENBRmhCO0FBR0UsdUJBQVMsWUFBS0UsNEVBQWdCLENBQUNILEVBQUUsQ0FBQ2QsT0FBSixDQUFyQixDQUhYO0FBSUUsdUJBQVMsRUFBRVksOERBSmI7QUFLRSx1QkFBUyxFQUFFRSxFQUFFLENBQUNJLEtBTGhCO0FBTUUsbUJBQUssRUFBQyxTQU5SO0FBT0UscUJBQU8sRUFBQyxTQVBWO0FBUUUsMEJBQVksRUFBRTtBQUFBLHVCQUFNcEIsV0FBVyxDQUFDLE9BQUQsRUFBVWdCLEVBQUUsQ0FBQ2QsT0FBYixDQUFqQjtBQUFBO0FBUmhCLGVBQ09jLEVBQUUsQ0FBQ2QsT0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR3QjtBQUFBLFdBQXpCLENBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUREOztJQXpFdUJMLE87VUFDTkgsUzs7O01BRE1HLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWM0MGVlMzI3MDg3MjI0OTY5YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgVHJlZUl0ZW0sIFRyZWVJdGVtUHJvcHMsIFRyZWVWaWV3IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBTdmdJY29uUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJ1xyXG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd24nXHJcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodCdcclxuaW1wb3J0IHsgQXJyb3dSaWdodCwgTGFiZWwsIE1vbmV5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgeyB0cmFuc2xhdGVDb3VudHJ5IH0gZnJvbSAnLi4vdHJhbnNsYXRlL2NvdW50cnknXHJcblxyXG5kZWNsYXJlIG1vZHVsZSAnY3NzdHlwZScge1xyXG4gIGludGVyZmFjZSBQcm9wZXJ0aWVzIHtcclxuICAgICctLXRyZWUtdmlldy1jb2xvcic/OiBzdHJpbmdcclxuICAgICctLXRyZWUtdmlldy1iZy1jb2xvcic/OiBzdHJpbmdcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgU3R5bGVkVHJlZUl0ZW1Qcm9wcyA9IFRyZWVJdGVtUHJvcHMgJiB7XHJcbiAgYmdDb2xvcj86IHN0cmluZ1xyXG4gIGNvbG9yPzogc3RyaW5nXHJcbiAgbGFiZWxJY29uOiBSZWFjdC5FbGVtZW50VHlwZTxTdmdJY29uUHJvcHM+XHJcbiAgbGFiZWxJbmZvPzogc3RyaW5nXHJcbiAgbGFiZWxUZXh0OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgdXNlVHJlZUl0ZW1TdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgICcmOmhvdmVyID4gJGNvbnRlbnQnOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcclxuICAgICAgfSxcclxuICAgICAgJyY6Zm9jdXMgPiAkY29udGVudCwgJiRzZWxlY3RlZCA+ICRjb250ZW50Jzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYHZhcigtLXRyZWUtdmlldy1iZy1jb2xvciwgJHt0aGVtZS5wYWxldHRlLmdyZXlbNDAwXX0pYCxcclxuICAgICAgICBjb2xvcjogJ3ZhcigtLXRyZWUtdmlldy1jb2xvciknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpmb2N1cyA+ICRjb250ZW50ICRsYWJlbCwgJjpob3ZlciA+ICRjb250ZW50ICRsYWJlbCwgJiRzZWxlY3RlZCA+ICRjb250ZW50ICRsYWJlbCc6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcclxuICAgICAgJyRleHBhbmRlZCA+ICYnOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBncm91cDoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICAnJiAkY29udGVudCc6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHBhbmRlZDoge30sXHJcbiAgICBzZWxlY3RlZDoge30sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICB9LFxyXG4gICAgbGFiZWxSb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41LCAwKSxcclxuICAgIH0sXHJcbiAgICBsYWJlbEljb246IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgbGFiZWxUZXh0OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gIH0pXHJcbilcclxuXHJcbmZ1bmN0aW9uIFN0eWxlZFRyZWVJdGVtKHByb3BzOiBTdHlsZWRUcmVlSXRlbVByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRyZWVJdGVtU3R5bGVzKClcclxuICBjb25zdCB7XHJcbiAgICBsYWJlbFRleHQsXHJcbiAgICBsYWJlbEljb246IExhYmVsSWNvbixcclxuICAgIGxhYmVsSW5mbyxcclxuICAgIGNvbG9yLFxyXG4gICAgYmdDb2xvcixcclxuICAgIC4uLm90aGVyXHJcbiAgfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VHJlZUl0ZW1cclxuICAgICAgbGFiZWw9e1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsUm9vdH0+XHJcbiAgICAgICAgICA8TGFiZWxJY29uIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbEljb259IC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxUZXh0fT5cclxuICAgICAgICAgICAge2xhYmVsVGV4dH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgIHtsYWJlbEluZm99XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAnLS10cmVlLXZpZXctY29sb3InOiBjb2xvcixcclxuICAgICAgICAnLS10cmVlLXZpZXctYmctY29sb3InOiBiZ0NvbG9yLFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGNvbnRlbnQ6IGNsYXNzZXMuY29udGVudCxcclxuICAgICAgICBleHBhbmRlZDogY2xhc3Nlcy5leHBhbmRlZCxcclxuICAgICAgICBzZWxlY3RlZDogY2xhc3Nlcy5zZWxlY3RlZCxcclxuICAgICAgICBncm91cDogY2xhc3Nlcy5ncm91cCxcclxuICAgICAgICBsYWJlbDogY2xhc3Nlcy5sYWJlbCxcclxuICAgICAgfX1cclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgbWF4V2lkdGg6IDMwMCxcclxuICAgIGhlaWdodDogMjY0LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRhbG9nKHsgbGlzdE9mQ291bnRyaWVzLCBsaXN0T2ZDb3VudHJpZXNDb2lucyB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKHR5cGUsIGNvdW50cnkpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aG5hbWU6ICcvc2hvcCcsXHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICBjb3VudHJ5LFxyXG4gICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB1bmRlZmluZWQsXHJcbiAgICAgIHsgc2hhbGxvdzogdHJ1ZSB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e292ZXJmbG93OidzY3JvbGwnfX0+XHJcbiAgICAgIDxUcmVlVmlld1xyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgIGRlZmF1bHRFeHBhbmRlZD17WycxJywgJzInXX1cclxuICAgICAgICBkZWZhdWx0Q29sbGFwc2VJY29uPXs8QXJyb3dEcm9wRG93bkljb24gLz59XHJcbiAgICAgICAgZGVmYXVsdEV4cGFuZEljb249ezxBcnJvd1JpZ2h0SWNvbiAvPn1cclxuICAgICAgICBkZWZhdWx0RW5kSWNvbj17PGRpdiBzdHlsZT17eyB3aWR0aDogMjQgfX0gLz59XHJcbiAgICAgID5cclxuICAgICAgICA8U3R5bGVkVHJlZUl0ZW0gbm9kZUlkPVwiMVwiIGxhYmVsVGV4dD1cItCa0LDRgtCw0LvQvtCzXCIgbGFiZWxJY29uPXtMYWJlbH0+XHJcbiAgICAgICAgICA8U3R5bGVkVHJlZUl0ZW0gbm9kZUlkPVwiMlwiIGxhYmVsVGV4dD1cItCR0LDQvdC60L3QvtGC0YtcIiBsYWJlbEljb249e01vbmV5fT5cclxuICAgICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgICAgbm9kZUlkPVwiOFwiXHJcbiAgICAgICAgICAgICAgbGFiZWxUZXh0PVwi0J/QvtC60LDQt9Cw0YLRjCDQstGB0LVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICBvbkxhYmVsQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdQYXBlciBNb25leScsICdhbGwnKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtsaXN0T2ZDb3VudHJpZXM/Lm1hcCgoZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2VsLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICBub2RlSWQ9e1N0cmluZyhpbmRleCArIDEwKX1cclxuICAgICAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD17YCR7dHJhbnNsYXRlQ291bnRyeShlbC5jb3VudHJ5KX1gfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxJbmZvPXtlbC5jb3VudH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzFhNzNlOFwiXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2U4ZjBmZVwiXHJcbiAgICAgICAgICAgICAgICBvbkxhYmVsQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdQYXBlciBNb25leScsIGVsLmNvdW50cnkpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TdHlsZWRUcmVlSXRlbT5cclxuICAgICAgICAgIDxTdHlsZWRUcmVlSXRlbSBub2RlSWQ9XCI1XCIgbGFiZWxUZXh0PVwi0JzQvtC90LXRgtGLXCIgbGFiZWxJY29uPXtNb25leX0+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUcmVlSXRlbVxyXG4gICAgICAgICAgICAgIG5vZGVJZD1cIjlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsVGV4dD1cItCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XCJcclxuICAgICAgICAgICAgICBsYWJlbEljb249e0Fycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgb25MYWJlbENsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnQ29pbnMnLCAnYWxsJyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtsaXN0T2ZDb3VudHJpZXNDb2lucy5tYXAoKGVsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUcmVlSXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtlbC5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgbm9kZUlkPXtTdHJpbmcoaW5kZXggKyAxMDApfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PXtgJHt0cmFuc2xhdGVDb3VudHJ5KGVsLmNvdW50cnkpfWB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbEljb249e0Fycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbEluZm89e2VsLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMWE3M2U4XCJcclxuICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjZThmMGZlXCJcclxuICAgICAgICAgICAgICAgIG9uTGFiZWxDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ0NvaW5zJywgZWwuY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N0eWxlZFRyZWVJdGVtPlxyXG4gICAgICAgIDwvU3R5bGVkVHJlZUl0ZW0+XHJcbiAgICAgIDwvVHJlZVZpZXc+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==