"use strict";
self["webpackHotUpdate_N_E"]("pages/fetch_json",{

/***/ "./pages/fetch_json.js":
/*!*****************************!*\
  !*** ./pages/fetch_json.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FetchToJson; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\code-work\\ricardo-pokedex\\pages\\fetch_json.js";


var botao = function goFetch() {
  var elem = document.querySelector('#myFetchField'),
      fetchUrl = elem.value,
      respostaJson;
  fetch('' + fetchUrl).then(function (resposta) {
    resposta.json();
  }).then(function (resposta) {
    respostaJson = resposta;
  });
  console.log(respostaJson);
};

function FetchToJson(params) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Fetch to Json"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: 'name',
      children: "Input URL to use js fetch() method:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      id: 'myFetchField',
      type: 'text',
      name: 'name'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: botao,
      children: "teste"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}
_c = FetchToJson;

var _c;

$RefreshReg$(_c, "FetchToJson");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmV0Y2hfanNvbi4zMDFkOTkxMWFkMjYwYThjYjA3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVNDLE9BQVQsR0FBa0I7QUFDNUIsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWDtBQUFBLE1BQ0FDLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxLQURoQjtBQUFBLE1BRUFDLFlBRkE7QUFJQUMsRUFBQUEsS0FBSyxDQUFFLEtBQUtILFFBQVAsQ0FBTCxDQUNDSSxJQURELENBQ08sVUFBQ0MsUUFBRCxFQUFjO0FBQUNBLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVDtBQUFnQixHQUR0QyxFQUVDRixJQUZELENBRU8sVUFBQ0MsUUFBRCxFQUFjO0FBQUNILElBQUFBLFlBQVksR0FBR0csUUFBZjtBQUF3QixHQUY5QztBQUlBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sWUFBWjtBQUNILENBVkQ7O0FBWWUsU0FBU08sV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFFeEMsc0JBQ0k7QUFBQSw0QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBTyxhQUFPLEVBQUUsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQUdBO0FBQU8sUUFBRSxFQUFFLGNBQVg7QUFBMkIsVUFBSSxFQUFFLE1BQWpDO0FBQXlDLFVBQUksRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEEsZUFJQTtBQUFRLGFBQU8sRUFBRWYsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIO0tBWHVCYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mZXRjaF9qc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgYm90YW8gPSBmdW5jdGlvbiBnb0ZldGNoKCl7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZldGNoRmllbGQnKSxcclxuICAgIGZldGNoVXJsID0gZWxlbS52YWx1ZSxcclxuICAgIHJlc3Bvc3RhSnNvbjtcclxuXHJcbiAgICBmZXRjaCggJycgKyBmZXRjaFVybCApXHJcbiAgICAudGhlbiggKHJlc3Bvc3RhKSA9PiB7cmVzcG9zdGEuanNvbigpfSApXHJcbiAgICAudGhlbiggKHJlc3Bvc3RhKSA9PiB7cmVzcG9zdGFKc29uID0gcmVzcG9zdGF9IClcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocmVzcG9zdGFKc29uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hUb0pzb24ocGFyYW1zKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5GZXRjaCB0byBKc29uPC9oMT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17J25hbWUnfT5JbnB1dCBVUkwgdG8gdXNlIGpzIGZldGNoKCkgbWV0aG9kOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPXsnbXlGZXRjaEZpZWxkJ30gdHlwZT17J3RleHQnfSBuYW1lPXsnbmFtZSd9PjwvaW5wdXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtib3Rhb30+dGVzdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJib3RhbyIsImdvRmV0Y2giLCJlbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2hVcmwiLCJ2YWx1ZSIsInJlc3Bvc3RhSnNvbiIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJGZXRjaFRvSnNvbiIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=