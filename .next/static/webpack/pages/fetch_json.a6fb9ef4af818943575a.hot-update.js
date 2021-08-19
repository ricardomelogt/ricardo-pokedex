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
      respostaJson,
      stringJson;
  fetch('' + fetchUrl).then(function (resposta) {
    return resposta.json();
  }).then(function (respostaObj) {
    return respostaJson = respostaObj;
  }).then(function () {
    return stringJson = JSON.stringify(respostaJson, null, 4);
  }).then(function () {
    document.querySelector('#outputString').innerHTML = stringJson;
  }).then(function () {
    return console.log(respostaJson);
  });
};

var divStyle = {
  border: '1px solid #dedede',
  borderRadius: '5px',
  padding: "10px",
  fontFamily: 'Calibri'
};
function FetchToJson(params) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: divStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Fetch to Json"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: 'name',
      children: "Input URL to use js fetch() method:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      id: 'myFetchField',
      type: 'text',
      name: 'name'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: botao,
      children: "Go fetch!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Check the console in your browser element inspector for details."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "outputSring",
      style: divStyle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmV0Y2hfanNvbi5hNmZiOWVmNGFmODE4OTQzNTc1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVNDLE9BQVQsR0FBa0I7QUFDNUIsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWDtBQUFBLE1BQ0FDLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxLQURoQjtBQUFBLE1BRUFDLFlBRkE7QUFBQSxNQUdBQyxVQUhBO0FBS0FDLEVBQUFBLEtBQUssQ0FBRSxLQUFLSixRQUFQLENBQUwsQ0FDQ0ssSUFERCxDQUNPLFVBQUFDLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEdBRGYsRUFFQ0YsSUFGRCxDQUVPLFVBQUFHLFdBQVc7QUFBQSxXQUFJTixZQUFZLEdBQUdNLFdBQW5CO0FBQUEsR0FGbEIsRUFHQ0gsSUFIRCxDQUdPO0FBQUEsV0FBTUYsVUFBVSxHQUFJTSxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsWUFBZixFQUE2QixJQUE3QixFQUFtQyxDQUFuQyxDQUFwQjtBQUFBLEdBSFAsRUFJQ0csSUFKRCxDQUlPLFlBQU07QUFDVFAsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDWSxTQUF4QyxHQUFvRFIsVUFBcEQ7QUFDSCxHQU5ELEVBT0NFLElBUEQsQ0FPTztBQUFBLFdBQU1PLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxZQUFaLENBQU47QUFBQSxHQVBQO0FBUUgsQ0FkRDs7QUFnQkEsSUFBTVksUUFBUSxHQUFHO0FBQ2JDLEVBQUFBLE1BQU0sRUFBRSxtQkFESztBQUViQyxFQUFBQSxZQUFZLEVBQUUsS0FGRDtBQUdiQyxFQUFBQSxPQUFPLEVBQUUsTUFISTtBQUliQyxFQUFBQSxVQUFVLEVBQUU7QUFKQyxDQUFqQjtBQU9lLFNBQVNDLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBRXhDLHNCQUNJO0FBQUssU0FBSyxFQUFFTixRQUFaO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQU8sYUFBTyxFQUFFLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFPLFFBQUUsRUFBRSxjQUFYO0FBQTJCLFVBQUksRUFBRSxNQUFqQztBQUF5QyxVQUFJLEVBQUU7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBLGVBSUE7QUFBUSxhQUFPLEVBQUVuQixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBLGVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQSxlQU1BO0FBQUssUUFBRSxFQUFDLGFBQVI7QUFBc0IsV0FBSyxFQUFFbUI7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7S0FmdUJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZldGNoX2pzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBib3RhbyA9IGZ1bmN0aW9uIGdvRmV0Y2goKXtcclxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215RmV0Y2hGaWVsZCcpLFxyXG4gICAgZmV0Y2hVcmwgPSBlbGVtLnZhbHVlLFxyXG4gICAgcmVzcG9zdGFKc29uLFxyXG4gICAgc3RyaW5nSnNvbjtcclxuXHJcbiAgICBmZXRjaCggJycgKyBmZXRjaFVybCApXHJcbiAgICAudGhlbiggcmVzcG9zdGEgPT4gcmVzcG9zdGEuanNvbigpIClcclxuICAgIC50aGVuKCByZXNwb3N0YU9iaiA9PiByZXNwb3N0YUpzb24gPSByZXNwb3N0YU9iaiApXHJcbiAgICAudGhlbiggKCkgPT4gc3RyaW5nSnNvbiAgPSBKU09OLnN0cmluZ2lmeShyZXNwb3N0YUpzb24sIG51bGwsIDQpIClcclxuICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dFN0cmluZycpLmlubmVySFRNTCA9IHN0cmluZ0pzb247XHJcbiAgICB9IClcclxuICAgIC50aGVuKCAoKSA9PiBjb25zb2xlLmxvZyhyZXNwb3N0YUpzb24pIClcclxufVxyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2RlZGVkZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICBmb250RmFtaWx5OiAnQ2FsaWJyaSdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hUb0pzb24ocGFyYW1zKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XHJcbiAgICAgICAgPGgxPkZldGNoIHRvIEpzb248L2gxPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXsnbmFtZSd9PklucHV0IFVSTCB0byB1c2UganMgZmV0Y2goKSBtZXRob2Q6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9eydteUZldGNoRmllbGQnfSB0eXBlPXsndGV4dCd9IG5hbWU9eyduYW1lJ30+PC9pbnB1dD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2JvdGFvfT5HbyBmZXRjaCE8L2J1dHRvbj5cclxuICAgICAgICA8cD5DaGVjayB0aGUgY29uc29sZSBpbiB5b3VyIGJyb3dzZXIgZWxlbWVudCBpbnNwZWN0b3IgZm9yIGRldGFpbHMuPC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvdXRwdXRTcmluZ1wiIHN0eWxlPXtkaXZTdHlsZX0+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImJvdGFvIiwiZ29GZXRjaCIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaFVybCIsInZhbHVlIiwicmVzcG9zdGFKc29uIiwic3RyaW5nSnNvbiIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhIiwianNvbiIsInJlc3Bvc3RhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJkaXZTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiRmV0Y2hUb0pzb24iLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9