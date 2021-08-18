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
  var pokemons_imgs = props.pokemons_imgs;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().main_wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().dex_title_main),
      children: "Pok\xE9Dex"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "by: Ricardo Melo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "github: ricardomelogt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["API used: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://pokeapi.co/",
        children: "https://pokeapi.co/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: " work in progress... "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_list),
      children: pokemons.map(function (pokemon) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_list_item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
            href: '/pokemon/${pokemon.entry_number}',
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListPic),
              src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.entry_number + ".png",
              alt: "Imagem de um " + pokemon.pokemon_species.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListText),
              children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)
        }, pokemon.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmJiN2U1Yzg4ZGU2YWZjOGUxYWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJlLFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BRXhCQyxRQUZ3QixHQUVYRCxLQUZXLENBRXhCQyxRQUZ3QjtBQUFBLE1BRzFCQyxhQUgwQixHQUdSRixLQUhRLENBRzFCRSxhQUgwQjtBQUtoQyxzQkFDSTtBQUFLLGFBQVMsRUFBRUoscUZBQWhCO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUVBLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsNENBQWE7QUFBRyxZQUFJLEVBQUMscUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsNkJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSTtBQUFJLGVBQVMsRUFBRUEsa0ZBQWY7QUFBQSxnQkFDS0csUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDRCQUNWO0FBQUksbUJBQVMsRUFBRVQsdUZBQWY7QUFBQSxpQ0FDSTtBQUFNLGdCQUFJLEVBQUUsa0NBQVo7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUVBLG9GQUFoQjtBQUFvQyxpQkFBRyxFQUFFLDhFQUE0RVMsT0FBTyxDQUFDRyxZQUFwRixHQUFpRyxNQUExSTtBQUFrSixpQkFBRyxFQUFFLGtCQUFnQkgsT0FBTyxDQUFDSSxlQUFSLENBQXdCQztBQUEvTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTSx1QkFBUyxFQUFFZCxxRkFBakI7QUFBQSx5QkFBdUNTLE9BQU8sQ0FBQ0csWUFBL0MsU0FBZ0VILE9BQU8sQ0FBQ0ksZUFBUixDQUF3QkMsSUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQTJDTCxPQUFPLENBQUNHLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIO0tBekJ1QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vbWFpbi1jc3MvbWFpbi1zdHlsZS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gICAgY29uc3QgcG9rZW1vbnMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzIvJylcclxuICAgICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YUVtT2JqZXRvLnBva2Vtb25fZW50cmllcztcclxuICAgICAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBwb2tlbW9uc1xyXG4gICAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgeyBwb2tlbW9ucyB9ID0gcHJvcHM7XHJcbiAgICB2YXIgeyBwb2tlbW9uc19pbWdzIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl93cmFwcGVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmRleF90aXRsZV9tYWlufT5Qb2vDqURleDwvaDE+XHJcbiAgICAgICAgICAgIDxwPmJ5OiBSaWNhcmRvIE1lbG88L3A+XHJcbiAgICAgICAgICAgIDxwPmdpdGh1YjogcmljYXJkb21lbG9ndDwvcD5cclxuICAgICAgICAgICAgPHA+QVBJIHVzZWQ6IDxhIGhyZWY9XCJodHRwczovL3Bva2VhcGkuY28vXCIgPmh0dHBzOi8vcG9rZWFwaS5jby88L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48c3Ryb25nPiB3b3JrIGluIHByb2dyZXNzLi4uIDwvc3Ryb25nPjwvcD5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb25zLm1hcCgocG9rZW1vbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2xpc3RfaXRlbX0ga2V5PXtwb2tlbW9uLmVudHJ5X251bWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9eycvcG9rZW1vbi8ke3Bva2Vtb24uZW50cnlfbnVtYmVyfSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wb2tlTGlzdFBpY30gc3JjPXtcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi9cIitwb2tlbW9uLmVudHJ5X251bWJlcitcIi5wbmdcIn0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIitwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlTGlzdFRleHR9Pntwb2tlbW9uLmVudHJ5X251bWJlcn0gLSB7cG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiSG9tZSIsInByb3BzIiwicG9rZW1vbnMiLCJwb2tlbW9uc19pbWdzIiwibWFpbl93cmFwcGVyIiwiZGV4X3RpdGxlX21haW4iLCJwb2tlX2xpc3QiLCJtYXAiLCJwb2tlbW9uIiwicG9rZV9saXN0X2l0ZW0iLCJwb2tlTGlzdFBpYyIsImVudHJ5X251bWJlciIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiLCJwb2tlTGlzdFRleHQiXSwic291cmNlUm9vdCI6IiJ9