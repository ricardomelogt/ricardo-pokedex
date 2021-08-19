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
    return stringJson = respostaJson;
  }).then(function () {
    return console.log(respostaJson, stringJson);
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
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: 'name',
      children: "Input URL to use js fetch() method:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      id: 'myFetchField',
      type: 'text',
      name: 'name'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: botao,
      children: "Go fetch!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Check the console in your browser element inspector for details."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmV0Y2hfanNvbi41NzI0ZTNhZDU4NjdjNGUyMDUwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVNDLE9BQVQsR0FBa0I7QUFDNUIsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWDtBQUFBLE1BQ0FDLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxLQURoQjtBQUFBLE1BRUFDLFlBRkE7QUFBQSxNQUdBQyxVQUhBO0FBS0FDLEVBQUFBLEtBQUssQ0FBRSxLQUFLSixRQUFQLENBQUwsQ0FDQ0ssSUFERCxDQUNPLFVBQUFDLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEdBRGYsRUFFQ0YsSUFGRCxDQUVPLFVBQUFHLFdBQVc7QUFBQSxXQUFJTixZQUFZLEdBQUdNLFdBQW5CO0FBQUEsR0FGbEIsRUFHQ0gsSUFIRCxDQUdPO0FBQUEsV0FBTUYsVUFBVSxHQUFJRCxZQUFwQjtBQUFBLEdBSFAsRUFJQ0csSUFKRCxDQUlPO0FBQUEsV0FBTUksT0FBTyxDQUFDQyxHQUFSLENBQVlSLFlBQVosRUFBMEJDLFVBQTFCLENBQU47QUFBQSxHQUpQO0FBTUgsQ0FaRDs7QUFjQSxJQUFNUSxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLG1CQURLO0FBRWJDLEVBQUFBLFlBQVksRUFBRSxLQUZEO0FBR2JDLEVBQUFBLE9BQU8sRUFBRSxNQUhJO0FBSWJDLEVBQUFBLFVBQVUsRUFBRTtBQUpDLENBQWpCO0FBT2UsU0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFFeEMsc0JBQ0k7QUFBSyxTQUFLLEVBQUVOLFFBQVo7QUFBQSw0QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBTyxhQUFPLEVBQUUsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQUdBO0FBQU8sUUFBRSxFQUFFLGNBQVg7QUFBMkIsVUFBSSxFQUFFLE1BQWpDO0FBQXlDLFVBQUksRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEEsZUFJQTtBQUFRLGFBQU8sRUFBRWhCLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkEsZUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7S0FadUJxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mZXRjaF9qc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgYm90YW8gPSBmdW5jdGlvbiBnb0ZldGNoKCl7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZldGNoRmllbGQnKSxcclxuICAgIGZldGNoVXJsID0gZWxlbS52YWx1ZSxcclxuICAgIHJlc3Bvc3RhSnNvbixcclxuICAgIHN0cmluZ0pzb247XHJcblxyXG4gICAgZmV0Y2goICcnICsgZmV0Y2hVcmwgKVxyXG4gICAgLnRoZW4oIHJlc3Bvc3RhID0+IHJlc3Bvc3RhLmpzb24oKSApXHJcbiAgICAudGhlbiggcmVzcG9zdGFPYmogPT4gcmVzcG9zdGFKc29uID0gcmVzcG9zdGFPYmogKVxyXG4gICAgLnRoZW4oICgpID0+IHN0cmluZ0pzb24gID0gcmVzcG9zdGFKc29uIClcclxuICAgIC50aGVuKCAoKSA9PiBjb25zb2xlLmxvZyhyZXNwb3N0YUpzb24sIHN0cmluZ0pzb24pIClcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGVkZWRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgIGZvbnRGYW1pbHk6ICdDYWxpYnJpJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZXRjaFRvSnNvbihwYXJhbXMpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfT5cclxuICAgICAgICA8aDE+RmV0Y2ggdG8gSnNvbjwvaDE+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyduYW1lJ30+SW5wdXQgVVJMIHRvIHVzZSBqcyBmZXRjaCgpIG1ldGhvZDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD17J215RmV0Y2hGaWVsZCd9IHR5cGU9eyd0ZXh0J30gbmFtZT17J25hbWUnfT48L2lucHV0PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Ym90YW99PkdvIGZldGNoITwvYnV0dG9uPlxyXG4gICAgICAgIDxwPkNoZWNrIHRoZSBjb25zb2xlIGluIHlvdXIgYnJvd3NlciBlbGVtZW50IGluc3BlY3RvciBmb3IgZGV0YWlscy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiYm90YW8iLCJnb0ZldGNoIiwiZWxlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZldGNoVXJsIiwidmFsdWUiLCJyZXNwb3N0YUpzb24iLCJzdHJpbmdKc29uIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGEiLCJqc29uIiwicmVzcG9zdGFPYmoiLCJjb25zb2xlIiwibG9nIiwiZGl2U3R5bGUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsIkZldGNoVG9Kc29uIiwicGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==