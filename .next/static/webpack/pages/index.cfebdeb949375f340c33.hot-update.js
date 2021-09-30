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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRhbG9nLnRzeCJdLCJuYW1lcyI6WyJ1c2VUcmVlSXRlbVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiYWN0aW9uIiwiaG92ZXIiLCJncmV5IiwiY29udGVudCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic3BhY2luZyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwicGFkZGluZ1JpZ2h0IiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJncm91cCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsImV4cGFuZGVkIiwic2VsZWN0ZWQiLCJsYWJlbCIsImxhYmVsUm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImxhYmVsSWNvbiIsIm1hcmdpblJpZ2h0IiwibGFiZWxUZXh0IiwiZmxleEdyb3ciLCJTdHlsZWRUcmVlSXRlbSIsInByb3BzIiwiY2xhc3NlcyIsIkxhYmVsSWNvbiIsImxhYmVsSW5mbyIsImJnQ29sb3IiLCJvdGhlciIsInVzZVN0eWxlcyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiQ2F0YWxvZyIsImxpc3RPZkNvdW50cmllcyIsImxpc3RPZkNvdW50cmllc0NvaW5zIiwiaGFuZGxlQ2xpY2siLCJ0eXBlIiwiY291bnRyeSIsInJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicGFnZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJ3aWR0aCIsIkxhYmVsIiwiTW9uZXkiLCJBcnJvd1JpZ2h0IiwibWFwIiwiZWwiLCJpbmRleCIsIlN0cmluZyIsInRyYW5zbGF0ZUNvdW50cnkiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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QixDQUF5QixVQUFDQyxFQUFELEVBQUtDLEtBQUw7QUFBQSxnQ0FDeEIscUVBQUMsY0FBRDtBQUVFLG9CQUFNLEVBQUVDLE1BQU0sQ0FBQ0QsS0FBSyxHQUFHLEdBQVQsQ0FGaEI7QUFHRSx1QkFBUyxZQUFLRSw0RUFBZ0IsQ0FBQ0gsRUFBRSxDQUFDYixPQUFKLENBQXJCLENBSFg7QUFJRSx1QkFBUyxFQUFFVyw4REFKYjtBQUtFLHVCQUFTLEVBQUVFLEVBQUUsQ0FBQ0ksS0FMaEI7QUFNRSxtQkFBSyxFQUFDLFNBTlI7QUFPRSxxQkFBTyxFQUFDLFNBUFY7QUFRRSwwQkFBWSxFQUFFO0FBQUEsdUJBQU1uQixXQUFXLENBQUMsT0FBRCxFQUFVZSxFQUFFLENBQUNiLE9BQWIsQ0FBakI7QUFBQTtBQVJoQixlQUNPYSxFQUFFLENBQUNiLE9BRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEd0I7QUFBQSxXQUF6QixDQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVERDs7SUF6RXVCTCxPO1VBQ05ILFM7OztNQURNRyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmZWJkZWI5NDkzNzVmMzQwYzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IFRyZWVJdGVtLCBUcmVlSXRlbVByb3BzLCBUcmVlVmlldyB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgU3ZnSWNvblByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbidcclxuaW1wb3J0IEFycm93RHJvcERvd25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BEb3duJ1xyXG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHQnXHJcbmltcG9ydCB7IEFycm93UmlnaHQsIExhYmVsLCBNb25leSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ291bnRyeSB9IGZyb20gJy4uL3RyYW5zbGF0ZS9jb3VudHJ5J1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgJ2Nzc3R5cGUnIHtcclxuICBpbnRlcmZhY2UgUHJvcGVydGllcyB7XHJcbiAgICAnLS10cmVlLXZpZXctY29sb3InPzogc3RyaW5nXHJcbiAgICAnLS10cmVlLXZpZXctYmctY29sb3InPzogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG50eXBlIFN0eWxlZFRyZWVJdGVtUHJvcHMgPSBUcmVlSXRlbVByb3BzICYge1xyXG4gIGJnQ29sb3I/OiBzdHJpbmdcclxuICBjb2xvcj86IHN0cmluZ1xyXG4gIGxhYmVsSWNvbjogUmVhY3QuRWxlbWVudFR5cGU8U3ZnSWNvblByb3BzPlxyXG4gIGxhYmVsSW5mbz86IHN0cmluZ1xyXG4gIGxhYmVsVGV4dDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHVzZVRyZWVJdGVtU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gICAgICAnJjpob3ZlciA+ICRjb250ZW50Jzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmZvY3VzID4gJGNvbnRlbnQsICYkc2VsZWN0ZWQgPiAkY29udGVudCc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGB2YXIoLS10cmVlLXZpZXctYmctY29sb3IsICR7dGhlbWUucGFsZXR0ZS5ncmV5WzQwMF19KWAsXHJcbiAgICAgICAgY29sb3I6ICd2YXIoLS10cmVlLXZpZXctY29sb3IpJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6Zm9jdXMgPiAkY29udGVudCAkbGFiZWwsICY6aG92ZXIgPiAkY29udGVudCAkbGFiZWwsICYkc2VsZWN0ZWQgPiAkY29udGVudCAkbGFiZWwnOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgICckZXhwYW5kZWQgPiAmJzoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZ3JvdXA6IHtcclxuICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgJyYgJGNvbnRlbnQnOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwYW5kZWQ6IHt9LFxyXG4gICAgc2VsZWN0ZWQ6IHt9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgfSxcclxuICAgIGxhYmVsUm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSwgMCksXHJcbiAgICB9LFxyXG4gICAgbGFiZWxJY29uOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIGxhYmVsVGV4dDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5mdW5jdGlvbiBTdHlsZWRUcmVlSXRlbShwcm9wczogU3R5bGVkVHJlZUl0ZW1Qcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VUcmVlSXRlbVN0eWxlcygpXHJcbiAgY29uc3Qge1xyXG4gICAgbGFiZWxUZXh0LFxyXG4gICAgbGFiZWxJY29uOiBMYWJlbEljb24sXHJcbiAgICBsYWJlbEluZm8sXHJcbiAgICBjb2xvcixcclxuICAgIGJnQ29sb3IsXHJcbiAgICAuLi5vdGhlclxyXG4gIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRyZWVJdGVtXHJcbiAgICAgIGxhYmVsPXtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbFJvb3R9PlxyXG4gICAgICAgICAgPExhYmVsSWNvbiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxJY29ufSAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsVGV4dH0+XHJcbiAgICAgICAgICAgIHtsYWJlbFRleHR9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICB7bGFiZWxJbmZvfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgJy0tdHJlZS12aWV3LWNvbG9yJzogY29sb3IsXHJcbiAgICAgICAgJy0tdHJlZS12aWV3LWJnLWNvbG9yJzogYmdDb2xvcixcclxuICAgICAgfX1cclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHJvb3Q6IGNsYXNzZXMucm9vdCxcclxuICAgICAgICBjb250ZW50OiBjbGFzc2VzLmNvbnRlbnQsXHJcbiAgICAgICAgZXhwYW5kZWQ6IGNsYXNzZXMuZXhwYW5kZWQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGNsYXNzZXMuc2VsZWN0ZWQsXHJcbiAgICAgICAgZ3JvdXA6IGNsYXNzZXMuZ3JvdXAsXHJcbiAgICAgICAgbGFiZWw6IGNsYXNzZXMubGFiZWwsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIG1heFdpZHRoOiAzMDAsXHJcbiAgICBoZWlnaHQ6IDI2NCxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0YWxvZyh7IGxpc3RPZkNvdW50cmllcywgbGlzdE9mQ291bnRyaWVzQ29pbnMgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICh0eXBlLCBjb3VudHJ5KSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIHBhdGhuYW1lOiAnL3Nob3AnLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgY291bnRyeSxcclxuICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUcmVlVmlld1xyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgIGRlZmF1bHRFeHBhbmRlZD17WycxJywgJzInXX1cclxuICAgICAgICBkZWZhdWx0Q29sbGFwc2VJY29uPXs8QXJyb3dEcm9wRG93bkljb24gLz59XHJcbiAgICAgICAgZGVmYXVsdEV4cGFuZEljb249ezxBcnJvd1JpZ2h0SWNvbiAvPn1cclxuICAgICAgICBkZWZhdWx0RW5kSWNvbj17PGRpdiBzdHlsZT17eyB3aWR0aDogMjQgfX0gLz59XHJcbiAgICAgID5cclxuICAgICAgICA8U3R5bGVkVHJlZUl0ZW0gbm9kZUlkPVwiMVwiIGxhYmVsVGV4dD1cItCa0LDRgtCw0LvQvtCzXCIgbGFiZWxJY29uPXtMYWJlbH0+XHJcbiAgICAgICAgICA8U3R5bGVkVHJlZUl0ZW0gbm9kZUlkPVwiMlwiIGxhYmVsVGV4dD1cItCR0LDQvdC60L3QvtGC0YtcIiBsYWJlbEljb249e01vbmV5fT5cclxuICAgICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgICAgbm9kZUlkPVwiOFwiXHJcbiAgICAgICAgICAgICAgbGFiZWxUZXh0PVwi0J/QvtC60LDQt9Cw0YLRjCDQstGB0LVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICBvbkxhYmVsQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdQYXBlciBNb25leScsICdhbGwnKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtsaXN0T2ZDb3VudHJpZXM/Lm1hcCgoZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2VsLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICBub2RlSWQ9e1N0cmluZyhpbmRleCArIDEwKX1cclxuICAgICAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD17YCR7dHJhbnNsYXRlQ291bnRyeShlbC5jb3VudHJ5KX1gfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxJbmZvPXtlbC5jb3VudH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzFhNzNlOFwiXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiI2U4ZjBmZVwiXHJcbiAgICAgICAgICAgICAgICBvbkxhYmVsQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdQYXBlciBNb25leScsIGVsLmNvdW50cnkpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TdHlsZWRUcmVlSXRlbT5cclxuICAgICAgICAgIDxTdHlsZWRUcmVlSXRlbSBub2RlSWQ9XCI1XCIgbGFiZWxUZXh0PVwi0JzQvtC90LXRgtGLXCIgbGFiZWxJY29uPXtNb25leX0+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUcmVlSXRlbVxyXG4gICAgICAgICAgICAgIG5vZGVJZD1cIjlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsVGV4dD1cItCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XCJcclxuICAgICAgICAgICAgICBsYWJlbEljb249e0Fycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgb25MYWJlbENsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnQ29pbnMnLCAnYWxsJyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtsaXN0T2ZDb3VudHJpZXNDb2lucy5tYXAoKGVsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUcmVlSXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtlbC5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgbm9kZUlkPXtTdHJpbmcoaW5kZXggKyAxMDApfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PXtgJHt0cmFuc2xhdGVDb3VudHJ5KGVsLmNvdW50cnkpfWB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbEljb249e0Fycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbEluZm89e2VsLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMWE3M2U4XCJcclxuICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjZThmMGZlXCJcclxuICAgICAgICAgICAgICAgIG9uTGFiZWxDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ0NvaW5zJywgZWwuY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N0eWxlZFRyZWVJdGVtPlxyXG4gICAgICAgIDwvU3R5bGVkVHJlZUl0ZW0+XHJcbiAgICAgIDwvVHJlZVZpZXc+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==