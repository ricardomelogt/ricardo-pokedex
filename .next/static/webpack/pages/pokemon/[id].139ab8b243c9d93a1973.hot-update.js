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
  console.log(pokemon); //saber quantos tipos o poke tem:

  var qtdTypes = pokemon.types.length;

  function mostrarTipos() {
    if (qtdTypes == 1) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: pokemon.types[0].type.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: " pokemon.types[0].type.name "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this) + ' / ' + /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: " pokemon.types[1].type.name "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 65
      }, this);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "poke_info_wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id - 1),
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id + 1),
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 69
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um pokemon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "tipo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), mostrarTipos()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjEzOWFiOGIyNDNjOWQ5M2ExOTczLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0MsT0FBVCxPQUFnQztBQUFBLE1BQVpDLE9BQVksUUFBWkEsT0FBWTtBQUMzQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVosRUFEMkMsQ0FHM0M7O0FBQ0EsTUFBSUcsUUFBUSxHQUFHSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsTUFBN0I7O0FBQ0EsV0FBU0MsWUFBVCxHQUF3QjtBQUNwQixRQUFJSCxRQUFRLElBQUksQ0FBaEIsRUFBbUI7QUFDZiwwQkFBUTtBQUFBLGtCQUFPSCxPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxJQUFqQixDQUFzQkM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFSO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNEMsS0FBNUMsZ0JBQW9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHBEO0FBR0g7QUFDSjs7QUFFRCxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUUsZUFBYVIsT0FBTyxDQUFDUyxFQUFSLEdBQVcsQ0FBeEIsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLHNCQUN3RDtBQUFHLFlBQUksRUFBRSxlQUFhVCxPQUFPLENBQUNTLEVBQVIsR0FBVyxDQUF4QixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHhELGVBRUk7QUFBQSxtQkFBS1QsT0FBTyxDQUFDUyxFQUFiLFFBQW1CVCxPQUFPLENBQUNRLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSyxXQUFHLEVBQUVSLE9BQU8sQ0FBQ1UsT0FBUixDQUFnQkMsYUFBMUI7QUFBeUMsV0FBRyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFS0wsWUFBWSxFQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDtLQTlCdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vbiggeyBwb2tlbW9uIH0gKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuXHJcbiAgICAvL3NhYmVyIHF1YW50b3MgdGlwb3MgbyBwb2tlIHRlbTpcclxuICAgIHZhciBxdGRUeXBlcyA9IHBva2Vtb24udHlwZXMubGVuZ3RoO1xyXG4gICAgZnVuY3Rpb24gbW9zdHJhclRpcG9zKCkge1xyXG4gICAgICAgIGlmIChxdGRUeXBlcyA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPHNwYW4+e3Bva2Vtb24udHlwZXNbMF0udHlwZS5uYW1lfTwvc3Bhbj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3Bhbj4gcG9rZW1vbi50eXBlc1swXS50eXBlLm5hbWUgPC9zcGFuPiArICcgLyAnICsgPHNwYW4+IHBva2Vtb24udHlwZXNbMV0udHlwZS5uYW1lIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlX2luZm9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9wb2tlbW9uLycrKHBva2Vtb24uaWQtMSl9PmFudGVyaW9yPC9hPiB8IDxhIGhyZWY9eycvcG9rZW1vbi8nKyhwb2tlbW9uLmlkKzEpfT5wcsOzeGltbzwvYT5cclxuICAgICAgICAgICAgICAgIDxoMj57cG9rZW1vbi5pZH0uIHtwb2tlbW9uLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PVwiSW1hZ2VtIGRlIHVtIHBva2Vtb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj50aXBvOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7bW9zdHJhclRpcG9zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycrcGFyYW1zLmlkKVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG8gcG9rZW1vbi4nKVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG87XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9rZW1vblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cclxuICAgIC8vIGVzcGVjaWZpY2FyIG51bWVybyBtYXhpbW8gZGUgcG9rZW1vbnMgZGEgcG9rZWRleCBwb3Igb3JkZW0gY3Jlc2NlbnRlOlxyXG4gICAgdmFyIG1heFBva2VzID0gNjIwO1xyXG4gICAgdmFyIHBva2VVbmljb1BhdGhzID0gW10gLy97cGFyYW1zOntpZDonMScsfX0se3BhcmFtczp7aWQ6JzInLH19LFxyXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgNjIwIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwicXRkVHlwZXMiLCJ0eXBlcyIsImxlbmd0aCIsIm1vc3RyYXJUaXBvcyIsInR5cGUiLCJuYW1lIiwiaWQiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=