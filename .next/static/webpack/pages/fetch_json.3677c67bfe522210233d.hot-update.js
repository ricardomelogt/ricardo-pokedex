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
      respostaJson = "vazio";
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
      "for": "name",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmV0Y2hfanNvbi4zNjc3YzY3YmZlNTIyMjEwMjMzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVNDLE9BQVQsR0FBa0I7QUFDNUIsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWDtBQUFBLE1BQ0FDLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxLQURoQjtBQUFBLE1BRUFDLFlBQVksR0FBRyxPQUZmO0FBSUFDLEVBQUFBLEtBQUssQ0FBRSxLQUFLSCxRQUFQLENBQUwsQ0FDQ0ksSUFERCxDQUNPLFVBQUNDLFFBQUQsRUFBYztBQUFDQSxJQUFBQSxRQUFRLENBQUNDLElBQVQ7QUFBZ0IsR0FEdEMsRUFFQ0YsSUFGRCxDQUVPLFVBQUNDLFFBQUQsRUFBYztBQUFDSCxJQUFBQSxZQUFZLEdBQUdHLFFBQWY7QUFBd0IsR0FGOUM7QUFJQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLFlBQVo7QUFDSCxDQVZEOztBQVllLFNBQVNPLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBRXhDLHNCQUNJO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQU8sYUFBSSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFPLFFBQUUsRUFBRSxjQUFYO0FBQTJCLFVBQUksRUFBRSxNQUFqQztBQUF5QyxVQUFJLEVBQUU7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBLGVBSUE7QUFBUSxhQUFPLEVBQUVmLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDtLQVh1QmMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmV0Y2hfanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IGJvdGFvID0gZnVuY3Rpb24gZ29GZXRjaCgpe1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGZXRjaEZpZWxkJyksXHJcbiAgICBmZXRjaFVybCA9IGVsZW0udmFsdWUsXHJcbiAgICByZXNwb3N0YUpzb24gPSBcInZhemlvXCI7XHJcblxyXG4gICAgZmV0Y2goICcnICsgZmV0Y2hVcmwgKVxyXG4gICAgLnRoZW4oIChyZXNwb3N0YSkgPT4ge3Jlc3Bvc3RhLmpzb24oKX0gKVxyXG4gICAgLnRoZW4oIChyZXNwb3N0YSkgPT4ge3Jlc3Bvc3RhSnNvbiA9IHJlc3Bvc3RhfSApXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHJlc3Bvc3RhSnNvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZldGNoVG9Kc29uKHBhcmFtcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+RmV0Y2ggdG8gSnNvbjwvaDE+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5JbnB1dCBVUkwgdG8gdXNlIGpzIGZldGNoKCkgbWV0aG9kOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPXsnbXlGZXRjaEZpZWxkJ30gdHlwZT17J3RleHQnfSBuYW1lPXsnbmFtZSd9PjwvaW5wdXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtib3Rhb30+dGVzdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJib3RhbyIsImdvRmV0Y2giLCJlbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2hVcmwiLCJ2YWx1ZSIsInJlc3Bvc3RhSnNvbiIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJGZXRjaFRvSnNvbiIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=