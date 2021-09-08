(function() {
var exports = {};
exports.id = 4441;
exports.ids = [4441];
exports.modules = {

/***/ 5139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ country; }
/* harmony export */ });
/* harmony import */ var _database_getAsString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6594);
/* harmony import */ var _database_getCountry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2030);


async function country(req, res) {
  const type = (0,_database_getAsString__WEBPACK_IMPORTED_MODULE_1__/* .getAsString */ .X)(req.query.type);
  const country = await (0,_database_getCountry__WEBPACK_IMPORTED_MODULE_0__/* .getCountry */ .r)(type);
  res.json(country);
}

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [8223], function() { return __webpack_exec__(5139); });
module.exports = __webpack_exports__;

})();