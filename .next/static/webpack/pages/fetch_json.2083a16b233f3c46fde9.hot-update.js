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
    document.querySelector('#result').innerHTML = stringJson;
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
      style: {
        minWidth: '100%',
        display: 'block',
        margin: '10px auto'
      },
      id: 'myFetchField',
      type: 'text',
      name: 'name',
      placeholder: 'Your URL...'
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
      children: "Check out the javascript console in your browser element inspector for better view."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: 'result',
          style: divStyle,
          children: "Result:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 14
      }, this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmV0Y2hfanNvbi4yMDgzYTE2YjIzM2YzYzQ2ZmRlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVNDLE9BQVQsR0FBa0I7QUFDNUIsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWDtBQUFBLE1BQ0FDLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxLQURoQjtBQUFBLE1BRUFDLFlBRkE7QUFBQSxNQUdBQyxVQUhBO0FBS0FDLEVBQUFBLEtBQUssQ0FBRSxLQUFLSixRQUFQLENBQUwsQ0FDQ0ssSUFERCxDQUNPLFVBQUFDLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEdBRGYsRUFFQ0YsSUFGRCxDQUVPLFVBQUFHLFdBQVc7QUFBQSxXQUFJTixZQUFZLEdBQUdNLFdBQW5CO0FBQUEsR0FGbEIsRUFHQ0gsSUFIRCxDQUdPO0FBQUEsV0FBTUYsVUFBVSxHQUFJTSxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsWUFBZixFQUE2QixJQUE3QixFQUFtQyxDQUFuQyxDQUFwQjtBQUFBLEdBSFAsRUFJQ0csSUFKRCxDQUlPLFlBQU07QUFDVFAsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDWSxTQUFsQyxHQUE4Q1IsVUFBOUM7QUFDSCxHQU5ELEVBT0NFLElBUEQsQ0FPTztBQUFBLFdBQU1PLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxZQUFaLENBQU47QUFBQSxHQVBQO0FBUUgsQ0FkRDs7QUFnQkEsSUFBTVksUUFBUSxHQUFHO0FBQ2JDLEVBQUFBLE1BQU0sRUFBRSxtQkFESztBQUViQyxFQUFBQSxZQUFZLEVBQUUsS0FGRDtBQUdiQyxFQUFBQSxPQUFPLEVBQUUsTUFISTtBQUliQyxFQUFBQSxVQUFVLEVBQUU7QUFKQyxDQUFqQjtBQU9lLFNBQVNDLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBRXhDLHNCQUNJO0FBQUssU0FBSyxFQUFFTixRQUFaO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQU8sYUFBTyxFQUFFLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFPLFdBQUssRUFBRTtBQUFDTyxRQUFBQSxRQUFRLEVBQUUsTUFBWDtBQUFtQkMsUUFBQUEsT0FBTyxFQUFFLE9BQTVCO0FBQXFDQyxRQUFBQSxNQUFNLEVBQUU7QUFBN0MsT0FBZDtBQUF5RSxRQUFFLEVBQUUsY0FBN0U7QUFBNkYsVUFBSSxFQUFFLE1BQW5HO0FBQTJHLFVBQUksRUFBRSxNQUFqSDtBQUF5SCxpQkFBVyxFQUFFO0FBQXRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQSxlQUlBO0FBQVEsYUFBTyxFQUFFNUIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEEsZUFNQTtBQUFBLDZCQUFLO0FBQUEsK0JBQU07QUFBSyxZQUFFLEVBQUUsUUFBVDtBQUFtQixlQUFLLEVBQUVtQixRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDtLQWJ1QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmV0Y2hfanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IGJvdGFvID0gZnVuY3Rpb24gZ29GZXRjaCgpe1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGZXRjaEZpZWxkJyksXHJcbiAgICBmZXRjaFVybCA9IGVsZW0udmFsdWUsXHJcbiAgICByZXNwb3N0YUpzb24sXHJcbiAgICBzdHJpbmdKc29uO1xyXG5cclxuICAgIGZldGNoKCAnJyArIGZldGNoVXJsIClcclxuICAgIC50aGVuKCByZXNwb3N0YSA9PiByZXNwb3N0YS5qc29uKCkgKVxyXG4gICAgLnRoZW4oIHJlc3Bvc3RhT2JqID0+IHJlc3Bvc3RhSnNvbiA9IHJlc3Bvc3RhT2JqIClcclxuICAgIC50aGVuKCAoKSA9PiBzdHJpbmdKc29uICA9IEpTT04uc3RyaW5naWZ5KHJlc3Bvc3RhSnNvbiwgbnVsbCwgNCkgKVxyXG4gICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0JykuaW5uZXJIVE1MID0gc3RyaW5nSnNvbjtcclxuICAgIH0gKVxyXG4gICAgLnRoZW4oICgpID0+IGNvbnNvbGUubG9nKHJlc3Bvc3RhSnNvbikgKVxyXG59XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGVkZWRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgIGZvbnRGYW1pbHk6ICdDYWxpYnJpJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZXRjaFRvSnNvbihwYXJhbXMpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfT5cclxuICAgICAgICA8aDE+RmV0Y2ggdG8gSnNvbjwvaDE+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyduYW1lJ30+SW5wdXQgVVJMIHRvIHVzZSBqcyBmZXRjaCgpIG1ldGhvZDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBzdHlsZT17e21pbldpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzEwcHggYXV0byd9fSBpZD17J215RmV0Y2hGaWVsZCd9IHR5cGU9eyd0ZXh0J30gbmFtZT17J25hbWUnfSBwbGFjZWhvbGRlcj17J1lvdXIgVVJMLi4uJ30gPjwvaW5wdXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtib3Rhb30+R28gZmV0Y2ghPC9idXR0b24+XHJcbiAgICAgICAgPHA+Q2hlY2sgb3V0IHRoZSBqYXZhc2NyaXB0IGNvbnNvbGUgaW4geW91ciBicm93c2VyIGVsZW1lbnQgaW5zcGVjdG9yIGZvciBiZXR0ZXIgdmlldy48L3A+XHJcbiAgICAgICAgPHByZT48Y29kZT48ZGl2IGlkPXsncmVzdWx0J30gc3R5bGU9e2RpdlN0eWxlfT5SZXN1bHQ6PC9kaXY+PC9jb2RlPjwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImJvdGFvIiwiZ29GZXRjaCIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaFVybCIsInZhbHVlIiwicmVzcG9zdGFKc29uIiwic3RyaW5nSnNvbiIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhIiwianNvbiIsInJlc3Bvc3RhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJkaXZTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiRmV0Y2hUb0pzb24iLCJwYXJhbXMiLCJtaW5XaWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9