"use strict";
(() => {
var exports = {};
exports.id = "pages/fetch_json";
exports.ids = ["pages/fetch_json"];
exports.modules = {

/***/ "./pages/fetch_json.js":
/*!*****************************!*\
  !*** ./pages/fetch_json.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchToJson)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\code-work\\ricardo-pokedex\\pages\\fetch_json.js";


const botao = function goFetch() {
  var elem = document.querySelector('#myFetchField'),
      fetchUrl = elem.value,
      respostaJson,
      stringJson;
  fetch('' + fetchUrl).then(resposta => resposta.json()).then(respostaObj => respostaJson = respostaObj).then(() => stringJson = JSON.stringify(respostaJson, null, 4)).then(() => {
    document.querySelector('#result').innerHTML = stringJson;
  }).then(() => console.log(respostaJson));
};

const divStyle = {
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/fetch_json.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZmV0Y2hfanNvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLE1BQU1DLEtBQUssR0FBRyxTQUFTQyxPQUFULEdBQWtCO0FBQzVCLE1BQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQVg7QUFBQSxNQUNBQyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksS0FEaEI7QUFBQSxNQUVBQyxZQUZBO0FBQUEsTUFHQUMsVUFIQTtBQUtBQyxFQUFBQSxLQUFLLENBQUUsS0FBS0osUUFBUCxDQUFMLENBQ0NLLElBREQsQ0FDT0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFEbkIsRUFFQ0YsSUFGRCxDQUVPRyxXQUFXLElBQUlOLFlBQVksR0FBR00sV0FGckMsRUFHQ0gsSUFIRCxDQUdPLE1BQU1GLFVBQVUsR0FBSU0sSUFBSSxDQUFDQyxTQUFMLENBQWVSLFlBQWYsRUFBNkIsSUFBN0IsRUFBbUMsQ0FBbkMsQ0FIM0IsRUFJQ0csSUFKRCxDQUlPLE1BQU07QUFDVFAsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDWSxTQUFsQyxHQUE4Q1IsVUFBOUM7QUFDSCxHQU5ELEVBT0NFLElBUEQsQ0FPTyxNQUFNTyxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsWUFBWixDQVBiO0FBUUgsQ0FkRDs7QUFnQkEsTUFBTVksUUFBUSxHQUFHO0FBQ2JDLEVBQUFBLE1BQU0sRUFBRSxtQkFESztBQUViQyxFQUFBQSxZQUFZLEVBQUUsS0FGRDtBQUdiQyxFQUFBQSxPQUFPLEVBQUUsTUFISTtBQUliQyxFQUFBQSxVQUFVLEVBQUU7QUFKQyxDQUFqQjtBQU9lLFNBQVNDLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBRXhDLHNCQUNJO0FBQUssU0FBSyxFQUFFTixRQUFaO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQU8sYUFBTyxFQUFFLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFPLFdBQUssRUFBRTtBQUFDTyxRQUFBQSxRQUFRLEVBQUUsTUFBWDtBQUFtQkMsUUFBQUEsT0FBTyxFQUFFLE9BQTVCO0FBQXFDQyxRQUFBQSxNQUFNLEVBQUU7QUFBN0MsT0FBZDtBQUF5RSxRQUFFLEVBQUUsY0FBN0U7QUFBNkYsVUFBSSxFQUFFLE1BQW5HO0FBQTJHLFVBQUksRUFBRSxNQUFqSDtBQUF5SCxpQkFBVyxFQUFFO0FBQXRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQSxlQUlBO0FBQVEsYUFBTyxFQUFFNUIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEEsZUFNQTtBQUFBLDZCQUFLO0FBQUEsK0JBQU07QUFBSyxZQUFFLEVBQUUsUUFBVDtBQUFtQixlQUFLLEVBQUVtQixRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7Ozs7Ozs7OztBQ3ZDRDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4Ly4vcGFnZXMvZmV0Y2hfanNvbi5qcyIsIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgYm90YW8gPSBmdW5jdGlvbiBnb0ZldGNoKCl7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZldGNoRmllbGQnKSxcclxuICAgIGZldGNoVXJsID0gZWxlbS52YWx1ZSxcclxuICAgIHJlc3Bvc3RhSnNvbixcclxuICAgIHN0cmluZ0pzb247XHJcblxyXG4gICAgZmV0Y2goICcnICsgZmV0Y2hVcmwgKVxyXG4gICAgLnRoZW4oIHJlc3Bvc3RhID0+IHJlc3Bvc3RhLmpzb24oKSApXHJcbiAgICAudGhlbiggcmVzcG9zdGFPYmogPT4gcmVzcG9zdGFKc29uID0gcmVzcG9zdGFPYmogKVxyXG4gICAgLnRoZW4oICgpID0+IHN0cmluZ0pzb24gID0gSlNPTi5zdHJpbmdpZnkocmVzcG9zdGFKc29uLCBudWxsLCA0KSApXHJcbiAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHQnKS5pbm5lckhUTUwgPSBzdHJpbmdKc29uO1xyXG4gICAgfSApXHJcbiAgICAudGhlbiggKCkgPT4gY29uc29sZS5sb2cocmVzcG9zdGFKc29uKSApXHJcbn1cclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZWRlZGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgZm9udEZhbWlseTogJ0NhbGlicmknXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZldGNoVG9Kc29uKHBhcmFtcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17ZGl2U3R5bGV9PlxyXG4gICAgICAgIDxoMT5GZXRjaCB0byBKc29uPC9oMT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17J25hbWUnfT5JbnB1dCBVUkwgdG8gdXNlIGpzIGZldGNoKCkgbWV0aG9kOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHN0eWxlPXt7bWluV2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luOiAnMTBweCBhdXRvJ319IGlkPXsnbXlGZXRjaEZpZWxkJ30gdHlwZT17J3RleHQnfSBuYW1lPXsnbmFtZSd9IHBsYWNlaG9sZGVyPXsnWW91ciBVUkwuLi4nfSA+PC9pbnB1dD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2JvdGFvfT5HbyBmZXRjaCE8L2J1dHRvbj5cclxuICAgICAgICA8cD5DaGVjayBvdXQgdGhlIGphdmFzY3JpcHQgY29uc29sZSBpbiB5b3VyIGJyb3dzZXIgZWxlbWVudCBpbnNwZWN0b3IgZm9yIGJldHRlciB2aWV3LjwvcD5cclxuICAgICAgICA8cHJlPjxjb2RlPjxkaXYgaWQ9eydyZXN1bHQnfSBzdHlsZT17ZGl2U3R5bGV9PlJlc3VsdDo8L2Rpdj48L2NvZGU+PC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImJvdGFvIiwiZ29GZXRjaCIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaFVybCIsInZhbHVlIiwicmVzcG9zdGFKc29uIiwic3RyaW5nSnNvbiIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhIiwianNvbiIsInJlc3Bvc3RhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJkaXZTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiRmV0Y2hUb0pzb24iLCJwYXJhbXMiLCJtaW5XaWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9