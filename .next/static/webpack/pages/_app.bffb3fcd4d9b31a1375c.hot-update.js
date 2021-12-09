webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cartReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/cartReducer.ts ***!
  \***************************************/
/*! exports provided: cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].configure();
var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["CartActionTypes"].NEW_ITEM:
      if (!state.some(function (el) {
        return el._id === action.data._id;
      })) {
        var _newState = [].concat(Object(C_projects_shop_klishevich_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [action.data]);

        localStorage.setItem('cart', JSON.stringify(_newState));
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("".concat(action.data.nameOfGoods, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"), {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.TOP_LEFT,
          autoClose: 3000
        });
        return _newState;
      } else {
        var element = state.find(function (el) {
          return el._id === action.data._id;
        });

        if (element.amountOfGoods + action.data.amountOfGoods <= action.stockamount) {
          var newElement = _objectSpread(_objectSpread({}, element), {}, {
            amountOfGoods: element.amountOfGoods + action.data.amountOfGoods
          });

          var _newState2 = state.filter(function (el) {
            return el._id !== action.data._id;
          });

          _newState2.push(newElement);

          localStorage.setItem('cart', JSON.stringify(_newState2));
          react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("".concat(action.data.nameOfGoods, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"), {
            position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.TOP_LEFT,
            autoClose: 3000
          });
          return _newState2;
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("\u041E\u0448\u0438\u0431\u043A\u0430: \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435 \u043D\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0430", {
            position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.TOP_LEFT,
            autoClose: 3000
          });
          return state;
        }
      }

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["CartActionTypes"].INIT_ITEMS:
      return action.data;

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["CartActionTypes"].DELETE_ITEM:
      var newState = state.filter(function (el) {
        return el._id !== action.data;
      });
      localStorage.setItem('cart', JSON.stringify(newState));
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("\u0422\u043E\u0432\u0430\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B", {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.TOP_LEFT,
        autoClose: 3000
      });
      return newState;

    case _actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["CartActionTypes"].DEFAULT:
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("\u041E\u0448\u0438\u0431\u043A\u0430: \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435 \u043D\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0430", {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.TOP_LEFT,
        autoClose: 3000
      });
      return state;

    default:
      return state;
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2FydFJlZHVjZXIudHMiXSwibmFtZXMiOlsidG9hc3QiLCJjb25maWd1cmUiLCJjYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkNhcnRBY3Rpb25UeXBlcyIsIk5FV19JVEVNIiwic29tZSIsImVsIiwiX2lkIiwiZGF0YSIsIm5ld1N0YXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwibmFtZU9mR29vZHMiLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiVE9QX0xFRlQiLCJhdXRvQ2xvc2UiLCJlbGVtZW50IiwiZmluZCIsImFtb3VudE9mR29vZHMiLCJzdG9ja2Ftb3VudCIsIm5ld0VsZW1lbnQiLCJmaWx0ZXIiLCJwdXNoIiwiZXJyb3IiLCJJTklUX0lURU1TIiwiREVMRVRFX0lURU0iLCJERUZBVUxUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUFBLG9EQUFLLENBQUNDLFNBQU47QUFFTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUE2QjtBQUFBLE1BQTVCQyxLQUE0Qix1RUFBcEIsRUFBb0I7QUFBQSxNQUFoQkMsTUFBZ0I7O0FBQ3RELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG9FQUFlLENBQUNDLFFBQXJCO0FBQ0UsVUFBSSxDQUFDSixLQUFLLENBQUNLLElBQU4sQ0FBVyxVQUFDQyxFQUFEO0FBQUEsZUFBUUEsRUFBRSxDQUFDQyxHQUFILEtBQVdOLE1BQU0sQ0FBQ08sSUFBUCxDQUFZRCxHQUEvQjtBQUFBLE9BQVgsQ0FBTCxFQUFxRDtBQUNuRCxZQUFNRSxTQUFRLGlKQUFPVCxLQUFQLElBQWNDLE1BQU0sQ0FBQ08sSUFBckIsRUFBZDs7QUFDQUUsb0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFNBQWYsQ0FBN0I7QUFDQVosNERBQUssQ0FBQ2lCLE9BQU4sV0FBaUJiLE1BQU0sQ0FBQ08sSUFBUCxDQUFZTyxXQUE3QixxSkFBdUU7QUFDckVDLGtCQUFRLEVBQUVuQixvREFBSyxDQUFDb0IsUUFBTixDQUFlQyxRQUQ0QztBQUVyRUMsbUJBQVMsRUFBRTtBQUYwRCxTQUF2RTtBQUlBLGVBQU9WLFNBQVA7QUFDRCxPQVJELE1BUU87QUFDTCxZQUFNVyxPQUFPLEdBQUdwQixLQUFLLENBQUNxQixJQUFOLENBQVcsVUFBQ2YsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLENBQUNDLEdBQUgsS0FBV04sTUFBTSxDQUFDTyxJQUFQLENBQVlELEdBQS9CO0FBQUEsU0FBWCxDQUFoQjs7QUFDQSxZQUNFYSxPQUFPLENBQUNFLGFBQVIsR0FBd0JyQixNQUFNLENBQUNPLElBQVAsQ0FBWWMsYUFBcEMsSUFDQXJCLE1BQU0sQ0FBQ3NCLFdBRlQsRUFHRTtBQUNBLGNBQU1DLFVBQVUsbUNBQ1hKLE9BRFc7QUFFZEUseUJBQWEsRUFBRUYsT0FBTyxDQUFDRSxhQUFSLEdBQXdCckIsTUFBTSxDQUFDTyxJQUFQLENBQVljO0FBRnJDLFlBQWhCOztBQUlBLGNBQU1iLFVBQVEsR0FBR1QsS0FBSyxDQUFDeUIsTUFBTixDQUFhLFVBQUNuQixFQUFEO0FBQUEsbUJBQVFBLEVBQUUsQ0FBQ0MsR0FBSCxLQUFXTixNQUFNLENBQUNPLElBQVAsQ0FBWUQsR0FBL0I7QUFBQSxXQUFiLENBQWpCOztBQUNBRSxvQkFBUSxDQUFDaUIsSUFBVCxDQUFjRixVQUFkOztBQUNBZCxzQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosVUFBZixDQUE3QjtBQUNBWiw4REFBSyxDQUFDaUIsT0FBTixXQUNLYixNQUFNLENBQUNPLElBQVAsQ0FBWU8sV0FEakIscUpBRUU7QUFDRUMsb0JBQVEsRUFBRW5CLG9EQUFLLENBQUNvQixRQUFOLENBQWVDLFFBRDNCO0FBRUVDLHFCQUFTLEVBQUU7QUFGYixXQUZGO0FBT0EsaUJBQU9WLFVBQVA7QUFDRCxTQW5CRCxNQW1CTztBQUNMWiw4REFBSyxDQUFDOEIsS0FBTixzUEFBOEQ7QUFDNURYLG9CQUFRLEVBQUVuQixvREFBSyxDQUFDb0IsUUFBTixDQUFlQyxRQURtQztBQUU1REMscUJBQVMsRUFBRTtBQUZpRCxXQUE5RDtBQUlBLGlCQUFPbkIsS0FBUDtBQUNEO0FBQ0Y7O0FBRUgsU0FBS0csb0VBQWUsQ0FBQ3lCLFVBQXJCO0FBQ0UsYUFBTzNCLE1BQU0sQ0FBQ08sSUFBZDs7QUFFRixTQUFLTCxvRUFBZSxDQUFDMEIsV0FBckI7QUFDRSxVQUFNcEIsUUFBUSxHQUFHVCxLQUFLLENBQUN5QixNQUFOLENBQWEsVUFBQ25CLEVBQUQ7QUFBQSxlQUFRQSxFQUFFLENBQUNDLEdBQUgsS0FBV04sTUFBTSxDQUFDTyxJQUExQjtBQUFBLE9BQWIsQ0FBakI7QUFDQUUsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFFBQWYsQ0FBN0I7QUFDQVosMERBQUssQ0FBQ2lCLE9BQU4sMktBQWlEO0FBQy9DRSxnQkFBUSxFQUFFbkIsb0RBQUssQ0FBQ29CLFFBQU4sQ0FBZUMsUUFEc0I7QUFFL0NDLGlCQUFTLEVBQUU7QUFGb0MsT0FBakQ7QUFJQSxhQUFPVixRQUFQOztBQUVGLFNBQUtOLG9FQUFlLENBQUMyQixPQUFyQjtBQUNFakMsMERBQUssQ0FBQzhCLEtBQU4sc1BBQThEO0FBQzVEWCxnQkFBUSxFQUFFbkIsb0RBQUssQ0FBQ29CLFFBQU4sQ0FBZUMsUUFEbUM7QUFFNURDLGlCQUFTLEVBQUU7QUFGaUQsT0FBOUQ7QUFJQSxhQUFPbkIsS0FBUDs7QUFFRjtBQUNFLGFBQU9BLEtBQVA7QUE1REo7QUE4REQsQ0EvRE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZmZiM2ZjZDRkOWIzMWExMzc1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9jYXJ0QWN0aW9ucydcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FydFN0YXRlIHtcclxuICBtc2c6IHN0cmluZ1xyXG59XHJcblxyXG50b2FzdC5jb25maWd1cmUoKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlID0gW10sIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDYXJ0QWN0aW9uVHlwZXMuTkVXX0lURU06XHJcbiAgICAgIGlmICghc3RhdGUuc29tZSgoZWwpID0+IGVsLl9pZCA9PT0gYWN0aW9uLmRhdGEuX2lkKSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlLCBhY3Rpb24uZGF0YV1cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKSlcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKGAke2FjdGlvbi5kYXRhLm5hbWVPZkdvb2RzfSDRg9GB0L/QtdGI0L3QviDQtNC+0LHQsNCy0LvQtdC9INCyINC60L7RgNC30LjQvdGDYCwge1xyXG4gICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9MRUZULFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0YXRlLmZpbmQoKGVsKSA9PiBlbC5faWQgPT09IGFjdGlvbi5kYXRhLl9pZClcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBlbGVtZW50LmFtb3VudE9mR29vZHMgKyBhY3Rpb24uZGF0YS5hbW91bnRPZkdvb2RzIDw9XHJcbiAgICAgICAgICBhY3Rpb24uc3RvY2thbW91bnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB7XHJcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIGFtb3VudE9mR29vZHM6IGVsZW1lbnQuYW1vdW50T2ZHb29kcyArIGFjdGlvbi5kYXRhLmFtb3VudE9mR29vZHMsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlLmZpbHRlcigoZWwpID0+IGVsLl9pZCAhPT0gYWN0aW9uLmRhdGEuX2lkKVxyXG4gICAgICAgICAgbmV3U3RhdGUucHVzaChuZXdFbGVtZW50KVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkpXHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgICBgJHthY3Rpb24uZGF0YS5uYW1lT2ZHb29kc30g0YPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvSDQsiDQutC+0YDQt9C40L3Rg2AsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0xFRlQsXHJcbiAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoYNCe0YjQuNCx0LrQsDog0L3QsCDRgdC60LvQsNC00LUg0L3QtdGCINGC0LDQutC+0LPQviDQutC+0LvQuNGH0LXRgdGC0LLQsCDRgtC+0LLQsNGA0LBgLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfTEVGVCxcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQ2FydEFjdGlvblR5cGVzLklOSVRfSVRFTVM6XHJcbiAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG5cclxuICAgIGNhc2UgQ2FydEFjdGlvblR5cGVzLkRFTEVURV9JVEVNOlxyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlLmZpbHRlcigoZWwpID0+IGVsLl9pZCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpKVxyXG4gICAgICB0b2FzdC5zdWNjZXNzKGDQotC+0LLQsNGAINGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvSDQuNC3INC60L7RgNC30LjQvdGLYCwge1xyXG4gICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfTEVGVCxcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxyXG5cclxuICAgIGNhc2UgQ2FydEFjdGlvblR5cGVzLkRFRkFVTFQ6XHJcbiAgICAgIHRvYXN0LmVycm9yKGDQntGI0LjQsdC60LA6INC90LAg0YHQutC70LDQtNC1INC90LXRgiDRgtCw0LrQvtCz0L4g0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQvtCy0LDRgNCwYCwge1xyXG4gICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfTEVGVCxcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9