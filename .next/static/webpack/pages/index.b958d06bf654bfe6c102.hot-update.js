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
      overflow: scroll
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRhbG9nLnRzeCJdLCJuYW1lcyI6WyJ1c2VUcmVlSXRlbVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiYWN0aW9uIiwiaG92ZXIiLCJncmV5IiwiY29udGVudCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic3BhY2luZyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwicGFkZGluZ1JpZ2h0IiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJncm91cCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsImV4cGFuZGVkIiwic2VsZWN0ZWQiLCJsYWJlbCIsImxhYmVsUm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImxhYmVsSWNvbiIsIm1hcmdpblJpZ2h0IiwibGFiZWxUZXh0IiwiZmxleEdyb3ciLCJTdHlsZWRUcmVlSXRlbSIsInByb3BzIiwiY2xhc3NlcyIsIkxhYmVsSWNvbiIsImxhYmVsSW5mbyIsImJnQ29sb3IiLCJvdGhlciIsInVzZVN0eWxlcyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiQ2F0YWxvZyIsImxpc3RPZkNvdW50cmllcyIsImxpc3RPZkNvdW50cmllc0NvaW5zIiwiaGFuZGxlQ2xpY2siLCJ0eXBlIiwiY291bnRyeSIsInJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicGFnZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJvdmVyZmxvdyIsInNjcm9sbCIsIndpZHRoIiwiTGFiZWwiLCJNb25leSIsIkFycm93UmlnaHQiLCJtYXAiLCJlbCIsImluZGV4IiwiU3RyaW5nIiwidHJhbnNsYXRlQ291bnRyeSIsImNvdW50Il0sIm1hcHBp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QWpCO0FBQUE7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQU9HRCxvQkFBb0IsQ0FBQ2lCLEdBQXJCLENBQXlCLFVBQUNDLEVBQUQsRUFBS0MsS0FBTDtBQUFBLGdDQUN4QixxRUFBQyxjQUFEO0FBRUUsb0JBQU0sRUFBRUMsTUFBTSxDQUFDRCxLQUFLLEdBQUcsR0FBVCxDQUZoQjtBQUdFLHVCQUFTLFlBQUtFLDRFQUFnQixDQUFDSCxFQUFFLENBQUNmLE9BQUosQ0FBckIsQ0FIWDtBQUlFLHVCQUFTLEVBQUVhLDhEQUpiO0FBS0UsdUJBQVMsRUFBRUUsRUFBRSxDQUFDSSxLQUxoQjtBQU1FLG1CQUFLLEVBQUMsU0FOUjtBQU9FLHFCQUFPLEVBQUMsU0FQVjtBQVFFLDBCQUFZLEVBQUU7QUFBQSx1QkFBTXJCLFdBQVcsQ0FBQyxPQUFELEVBQVVpQixFQUFFLENBQUNmLE9BQWIsQ0FBakI7QUFBQTtBQVJoQixlQUNPZSxFQUFFLENBQUNmLE9BRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEd0I7QUFBQSxXQUF6QixDQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVERDs7SUF6RXVCTCxPO1VBQ05ILFM7OztNQURNRyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5NThkMDZiZjY1NGJmZTZjMTAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IFRyZWVJdGVtLCBUcmVlSXRlbVByb3BzLCBUcmVlVmlldyB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgU3ZnSWNvblByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbidcclxuaW1wb3J0IEFycm93RHJvcERvd25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BEb3duJ1xyXG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHQnXHJcbmltcG9ydCB7IEFycm93UmlnaHQsIExhYmVsLCBNb25leSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHsgdHJhbnNsYXRlQ291bnRyeSB9IGZyb20gJy4uL3RyYW5zbGF0ZS9jb3VudHJ5J1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgJ2Nzc3R5cGUnIHtcclxuICBpbnRlcmZhY2UgUHJvcGVydGllcyB7XHJcbiAgICAnLS10cmVlLXZpZXctY29sb3InPzogc3RyaW5nXHJcbiAgICAnLS10cmVlLXZpZXctYmctY29sb3InPzogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG50eXBlIFN0eWxlZFRyZWVJdGVtUHJvcHMgPSBUcmVlSXRlbVByb3BzICYge1xyXG4gIGJnQ29sb3I/OiBzdHJpbmdcclxuICBjb2xvcj86IHN0cmluZ1xyXG4gIGxhYmVsSWNvbjogUmVhY3QuRWxlbWVudFR5cGU8U3ZnSWNvblByb3BzPlxyXG4gIGxhYmVsSW5mbz86IHN0cmluZ1xyXG4gIGxhYmVsVGV4dDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHVzZVRyZWVJdGVtU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gICAgICAnJjpob3ZlciA+ICRjb250ZW50Jzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmZvY3VzID4gJGNvbnRlbnQsICYkc2VsZWN0ZWQgPiAkY29udGVudCc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGB2YXIoLS10cmVlLXZpZXctYmctY29sb3IsICR7dGhlbWUucGFsZXR0ZS5ncmV5WzQwMF19KWAsXHJcbiAgICAgICAgY29sb3I6ICd2YXIoLS10cmVlLXZpZXctY29sb3IpJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6Zm9jdXMgPiAkY29udGVudCAkbGFiZWwsICY6aG92ZXIgPiAkY29udGVudCAkbGFiZWwsICYkc2VsZWN0ZWQgPiAkY29udGVudCAkbGFiZWwnOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgICckZXhwYW5kZWQgPiAmJzoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZ3JvdXA6IHtcclxuICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgJyYgJGNvbnRlbnQnOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwYW5kZWQ6IHt9LFxyXG4gICAgc2VsZWN0ZWQ6IHt9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgfSxcclxuICAgIGxhYmVsUm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSwgMCksXHJcbiAgICB9LFxyXG4gICAgbGFiZWxJY29uOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIGxhYmVsVGV4dDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5mdW5jdGlvbiBTdHlsZWRUcmVlSXRlbShwcm9wczogU3R5bGVkVHJlZUl0ZW1Qcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VUcmVlSXRlbVN0eWxlcygpXHJcbiAgY29uc3Qge1xyXG4gICAgbGFiZWxUZXh0LFxyXG4gICAgbGFiZWxJY29uOiBMYWJlbEljb24sXHJcbiAgICBsYWJlbEluZm8sXHJcbiAgICBjb2xvcixcclxuICAgIGJnQ29sb3IsXHJcbiAgICAuLi5vdGhlclxyXG4gIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRyZWVJdGVtXHJcbiAgICAgIGxhYmVsPXtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbFJvb3R9PlxyXG4gICAgICAgICAgPExhYmVsSWNvbiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxJY29ufSAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsVGV4dH0+XHJcbiAgICAgICAgICAgIHtsYWJlbFRleHR9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICB7bGFiZWxJbmZvfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgJy0tdHJlZS12aWV3LWNvbG9yJzogY29sb3IsXHJcbiAgICAgICAgJy0tdHJlZS12aWV3LWJnLWNvbG9yJzogYmdDb2xvcixcclxuICAgICAgfX1cclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHJvb3Q6IGNsYXNzZXMucm9vdCxcclxuICAgICAgICBjb250ZW50OiBjbGFzc2VzLmNvbnRlbnQsXHJcbiAgICAgICAgZXhwYW5kZWQ6IGNsYXNzZXMuZXhwYW5kZWQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGNsYXNzZXMuc2VsZWN0ZWQsXHJcbiAgICAgICAgZ3JvdXA6IGNsYXNzZXMuZ3JvdXAsXHJcbiAgICAgICAgbGFiZWw6IGNsYXNzZXMubGFiZWwsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIG1heFdpZHRoOiAzMDAsXHJcbiAgICBoZWlnaHQ6IDI2NCxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0YWxvZyh7IGxpc3RPZkNvdW50cmllcywgbGlzdE9mQ291bnRyaWVzQ29pbnMgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICh0eXBlLCBjb3VudHJ5KSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIHBhdGhuYW1lOiAnL3Nob3AnLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgY291bnRyeSxcclxuICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3tvdmVyZmxvdzpzY3JvbGx9fT5cclxuICAgICAgPFRyZWVWaWV3XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcbiAgICAgICAgZGVmYXVsdEV4cGFuZGVkPXtbJzEnLCAnMiddfVxyXG4gICAgICAgIGRlZmF1bHRDb2xsYXBzZUljb249ezxBcnJvd0Ryb3BEb3duSWNvbiAvPn1cclxuICAgICAgICBkZWZhdWx0RXhwYW5kSWNvbj17PEFycm93UmlnaHRJY29uIC8+fVxyXG4gICAgICAgIGRlZmF1bHRFbmRJY29uPXs8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyNCB9fSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdHlsZWRUcmVlSXRlbSBub2RlSWQ9XCIxXCIgbGFiZWxUZXh0PVwi0JrQsNGC0LDQu9C+0LNcIiBsYWJlbEljb249e0xhYmVsfT5cclxuICAgICAgICAgIDxTdHlsZWRUcmVlSXRlbSBub2RlSWQ9XCIyXCIgbGFiZWxUZXh0PVwi0JHQsNC90LrQvdC+0YLRi1wiIGxhYmVsSWNvbj17TW9uZXl9PlxyXG4gICAgICAgICAgICA8U3R5bGVkVHJlZUl0ZW1cclxuICAgICAgICAgICAgICBub2RlSWQ9XCI4XCJcclxuICAgICAgICAgICAgICBsYWJlbFRleHQ9XCLQn9C+0LrQsNC30LDRgtGMINCy0YHQtVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxJY29uPXtBcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgIG9uTGFiZWxDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ1BhcGVyIE1vbmV5JywgJ2FsbCcpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAge2xpc3RPZkNvdW50cmllcz8ubWFwKChlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8U3R5bGVkVHJlZUl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17ZWwuY291bnRyeX1cclxuICAgICAgICAgICAgICAgIG5vZGVJZD17U3RyaW5nKGluZGV4ICsgMTApfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxJY29uPXtBcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PXtgJHt0cmFuc2xhdGVDb3VudHJ5KGVsLmNvdW50cnkpfWB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbEluZm89e2VsLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMWE3M2U4XCJcclxuICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjZThmMGZlXCJcclxuICAgICAgICAgICAgICAgIG9uTGFiZWxDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ1BhcGVyIE1vbmV5JywgZWwuY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N0eWxlZFRyZWVJdGVtPlxyXG4gICAgICAgICAgPFN0eWxlZFRyZWVJdGVtIG5vZGVJZD1cIjVcIiBsYWJlbFRleHQ9XCLQnNC+0L3QtdGC0YtcIiBsYWJlbEljb249e01vbmV5fT5cclxuICAgICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgICAgbm9kZUlkPVwiOVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxUZXh0PVwi0J/QvtC60LDQt9Cw0YLRjCDQstGB0LVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICBvbkxhYmVsQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdDb2lucycsICdhbGwnKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2xpc3RPZkNvdW50cmllc0NvaW5zLm1hcCgoZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRyZWVJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2VsLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICBub2RlSWQ9e1N0cmluZyhpbmRleCArIDEwMCl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ9e2Ake3RyYW5zbGF0ZUNvdW50cnkoZWwuY291bnRyeSl9YH1cclxuICAgICAgICAgICAgICAgIGxhYmVsSWNvbj17QXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGxhYmVsSW5mbz17ZWwuY291bnR9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMxYTczZThcIlxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcj1cIiNlOGYwZmVcIlxyXG4gICAgICAgICAgICAgICAgb25MYWJlbENsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnQ29pbnMnLCBlbC5jb3VudHJ5KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU3R5bGVkVHJlZUl0ZW0+XHJcbiAgICAgICAgPC9TdHlsZWRUcmVlSXRlbT5cclxuICAgICAgPC9UcmVlVmlldz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9