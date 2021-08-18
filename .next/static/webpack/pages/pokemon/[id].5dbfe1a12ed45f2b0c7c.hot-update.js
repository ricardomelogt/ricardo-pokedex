"use strict";
self["webpackHotUpdate_N_E"]("pages/pokemon/[id]",{

/***/ "./pages/pokemon/[id].js":
/*!*******************************!*\
  !*** ./pages/pokemon/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Pokemon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\code-work\\ricardo-pokedex\\pages\\pokemon\\[id].js";

var __N_SSG = true;
function Pokemon(_ref) {
  var pokemon = _ref.pokemon;
  console.log(pokemon);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "poke_info_wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id - 1),
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id + 1),
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 69
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um pokemon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "tipo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: pokemon.types[0].type.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), " /", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: pokemon.types[1].type.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = Pokemon;

var _c;

$RefreshReg$(_c, "Pokemon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjVkYmZlMWExMmVkNDVmMmIwYzdjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0MsT0FBVCxPQUFnQztBQUFBLE1BQVpDLE9BQVksUUFBWkEsT0FBWTtBQUMzQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUUsZUFBYUEsT0FBTyxDQUFDRyxFQUFSLEdBQVcsQ0FBeEIsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLHNCQUN3RDtBQUFHLFlBQUksRUFBRSxlQUFhSCxPQUFPLENBQUNHLEVBQVIsR0FBVyxDQUF4QixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHhELGVBRUk7QUFBQSxtQkFBS0gsT0FBTyxDQUFDRyxFQUFiLFFBQW1CSCxPQUFPLENBQUNJLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSyxXQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsYUFBMUI7QUFBeUMsV0FBRyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLG9CQUFPTixPQUFPLENBQUNPLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxJQUFqQixDQUFzQko7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixxQkFHSTtBQUFBLG9CQUFPSixPQUFPLENBQUNPLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxJQUFqQixDQUFzQko7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDtLQWpCdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vbiggeyBwb2tlbW9uIH0gKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2VfaW5mb193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJysocG9rZW1vbi5pZC0xKX0+YW50ZXJpb3I8L2E+IHwgPGEgaHJlZj17Jy9wb2tlbW9uLycrKHBva2Vtb24uaWQrMSl9PnByw7N4aW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9XCJJbWFnZW0gZGUgdW0gcG9rZW1vblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnRpcG86PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb2tlbW9uLnR5cGVzWzBdLnR5cGUubmFtZX08L3NwYW4+IC8gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bva2Vtb24udHlwZXNbMV0udHlwZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgbyBwb2tlbW9uLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblxyXG4gICAgLy8gZXNwZWNpZmljYXIgbnVtZXJvIG1heGltbyBkZSBwb2tlbW9ucyBkYSBwb2tlZGV4IHBvciBvcmRlbSBjcmVzY2VudGU6XHJcbiAgICB2YXIgbWF4UG9rZXMgPSA2MjA7XHJcbiAgICB2YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCA2MjAgOyBpKysgKSB7XHJcbiAgICAgICAgcG9rZVVuaWNvUGF0aHMucHVzaCgge3BhcmFtczp7aWQ6KGkrMSkudG9TdHJpbmcoKSx9fSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IHBva2VVbmljb1BhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJQb2tlbW9uIiwicG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInR5cGVzIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=