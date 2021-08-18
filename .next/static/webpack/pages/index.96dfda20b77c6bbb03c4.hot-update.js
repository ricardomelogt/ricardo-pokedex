"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-css/main-style.module.css */ "./main-css/main-style.module.css");
/* harmony import */ var _main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\code-work\\ricardo-pokedex\\pages\\index.js";


var __N_SSG = true;
function Home(props) {
  var _this = this;

  var pokemons = props.pokemons;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().main_wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().dex_title_main),
      children: "Pok\xE9Dex"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "by: Ricardo Melo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "github: ricardomelogt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["API used: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://pokeapi.co/",
        children: "https://pokeapi.co/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: " work in progress... "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_list),
      children: pokemons.map(function (pokemon) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_list_item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: '/pokemon/' + pokemon.entry_number,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListPic),
              src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.entry_number + ".png",
              alt: "Imagem de um " + pokemon.pokemon_species.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListText),
              children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, _this)
        }, pokemon.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTZkZmRhMjBiNzdjNmJiYjAzYzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJlLFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BRXhCQyxRQUZ3QixHQUVYRCxLQUZXLENBRXhCQyxRQUZ3QjtBQUloQyxzQkFDSTtBQUFLLGFBQVMsRUFBRUgscUZBQWhCO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUVBLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsNENBQWE7QUFBRyxZQUFJLEVBQUMscUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsNkJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSTtBQUFJLGVBQVMsRUFBRUEsa0ZBQWY7QUFBQSxnQkFDS0csUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDRCQUNWO0FBQUksbUJBQVMsRUFBRVIsdUZBQWY7QUFBQSxpQ0FDUTtBQUFHLGdCQUFJLEVBQUUsY0FBWVEsT0FBTyxDQUFDRSxZQUE3QjtBQUFBLG9DQUNBO0FBQUssdUJBQVMsRUFBRVYsb0ZBQWhCO0FBQW9DLGlCQUFHLEVBQUUsOEVBQTRFUSxPQUFPLENBQUNFLFlBQXBGLEdBQWlHLE1BQTFJO0FBQWtKLGlCQUFHLEVBQUUsa0JBQWdCRixPQUFPLENBQUNJLGVBQVIsQ0FBd0JDO0FBQS9MO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFNLHVCQUFTLEVBQUViLHFGQUFqQjtBQUFBLHlCQUF1Q1EsT0FBTyxDQUFDRSxZQUEvQyxTQUFnRUYsT0FBTyxDQUFDSSxlQUFSLENBQXdCQyxJQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFIsV0FBMkNMLE9BQU8sQ0FBQ0UsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7S0F4QnVCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9tYWluLWNzcy9tYWluLXN0eWxlLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgICBjb25zdCBwb2tlbW9ucyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMi8nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG8ucG9rZW1vbl9lbnRyaWVzO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHBva2Vtb25zXHJcbiAgICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB7IHBva2Vtb25zIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl93cmFwcGVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmRleF90aXRsZV9tYWlufT5Qb2vDqURleDwvaDE+XHJcbiAgICAgICAgICAgIDxwPmJ5OiBSaWNhcmRvIE1lbG88L3A+XHJcbiAgICAgICAgICAgIDxwPmdpdGh1YjogcmljYXJkb21lbG9ndDwvcD5cclxuICAgICAgICAgICAgPHA+QVBJIHVzZWQ6IDxhIGhyZWY9XCJodHRwczovL3Bva2VhcGkuY28vXCIgPmh0dHBzOi8vcG9rZWFwaS5jby88L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48c3Ryb25nPiB3b3JrIGluIHByb2dyZXNzLi4uIDwvc3Ryb25nPjwvcD5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb25zLm1hcCgocG9rZW1vbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2xpc3RfaXRlbX0ga2V5PXtwb2tlbW9uLmVudHJ5X251bWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJytwb2tlbW9uLmVudHJ5X251bWJlcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wb2tlTGlzdFBpY30gc3JjPXtcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi9cIitwb2tlbW9uLmVudHJ5X251bWJlcitcIi5wbmdcIn0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIitwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlTGlzdFRleHR9Pntwb2tlbW9uLmVudHJ5X251bWJlcn0gLSB7cG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJIb21lIiwicHJvcHMiLCJwb2tlbW9ucyIsIm1haW5fd3JhcHBlciIsImRleF90aXRsZV9tYWluIiwicG9rZV9saXN0IiwibWFwIiwicG9rZW1vbiIsInBva2VfbGlzdF9pdGVtIiwiZW50cnlfbnVtYmVyIiwicG9rZUxpc3RQaWMiLCJwb2tlbW9uX3NwZWNpZXMiLCJuYW1lIiwicG9rZUxpc3RUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==