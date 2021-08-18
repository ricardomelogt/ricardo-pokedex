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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListPic),
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.entry_number + ".png",
            alt: "Imagem de um " + pokemon.pokemon_species.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 24
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListText),
            children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 24
          }, _this)]
        }, pokemon.entry_number, true, {
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

/*#__PURE__*/
(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
  href: '/pokemon/${pokemon.entry_number}',
  children: "// content"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 48,
  columnNumber: 1
}, undefined);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2JiYzI0MjdhOWEwN2FlMWJjMjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJlLFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BRXhCQyxRQUZ3QixHQUVYRCxLQUZXLENBRXhCQyxRQUZ3QjtBQUFBLE1BRzFCQyxhQUgwQixHQUdSRixLQUhRLENBRzFCRSxhQUgwQjtBQUtoQyxzQkFDSTtBQUFLLGFBQVMsRUFBRUoscUZBQWhCO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUVBLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsNENBQWE7QUFBRyxZQUFJLEVBQUMscUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsNkJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSTtBQUFJLGVBQVMsRUFBRUEsa0ZBQWY7QUFBQSxnQkFDS0csUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDRCQUNWO0FBQUksbUJBQVMsRUFBRVQsdUZBQWY7QUFBQSxrQ0FDRztBQUFLLHFCQUFTLEVBQUVBLG9GQUFoQjtBQUFvQyxlQUFHLEVBQUUsOEVBQTRFUyxPQUFPLENBQUNHLFlBQXBGLEdBQWlHLE1BQTFJO0FBQWtKLGVBQUcsRUFBRSxrQkFBZ0JILE9BQU8sQ0FBQ0ksZUFBUixDQUF3QkM7QUFBL0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxlQUVHO0FBQU0scUJBQVMsRUFBRWQscUZBQWpCO0FBQUEsdUJBQXVDUyxPQUFPLENBQUNHLFlBQS9DLFNBQWdFSCxPQUFPLENBQUNJLGVBQVIsQ0FBd0JDLElBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSDtBQUFBLFdBQTJDTCxPQUFPLENBQUNHLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIO0tBdkJ1Qlg7O0FBeUJ4QjtBQUFBO0FBQU0sTUFBSSxFQUFFLGtDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21haW4tY3NzL21haW4tc3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0by5wb2tlbW9uX2VudHJpZXM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcG9rZW1vbnNcclxuICAgICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgcG9rZW1vbnMgfSA9IHByb3BzO1xyXG4gICAgdmFyIHsgcG9rZW1vbnNfaW1ncyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5kZXhfdGl0bGVfbWFpbn0+UG9rw6lEZXg8L2gxPlxyXG4gICAgICAgICAgICA8cD5ieTogUmljYXJkbyBNZWxvPC9wPlxyXG4gICAgICAgICAgICA8cD5naXRodWI6IHJpY2FyZG9tZWxvZ3Q8L3A+XHJcbiAgICAgICAgICAgIDxwPkFQSSB1c2VkOiA8YSBocmVmPVwiaHR0cHM6Ly9wb2tlYXBpLmNvL1wiID5odHRwczovL3Bva2VhcGkuY28vPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz4gd29yayBpbiBwcm9ncmVzcy4uLiA8L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9saXN0fT5cclxuICAgICAgICAgICAgICAgIHtwb2tlbW9ucy5tYXAoKHBva2Vtb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9saXN0X2l0ZW19IGtleT17cG9rZW1vbi5lbnRyeV9udW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucG9rZUxpc3RQaWN9IHNyYz17XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vXCIrcG9rZW1vbi5lbnRyeV9udW1iZXIrXCIucG5nXCJ9IGFsdD17XCJJbWFnZW0gZGUgdW0gXCIrcG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBva2VMaXN0VGV4dH0+e3Bva2Vtb24uZW50cnlfbnVtYmVyfSAtIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbjxsaW5rIGhyZWY9eycvcG9rZW1vbi8ke3Bva2Vtb24uZW50cnlfbnVtYmVyfSd9PlxyXG4vLyBjb250ZW50XHJcbjwvbGluaz4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkhvbWUiLCJwcm9wcyIsInBva2Vtb25zIiwicG9rZW1vbnNfaW1ncyIsIm1haW5fd3JhcHBlciIsImRleF90aXRsZV9tYWluIiwicG9rZV9saXN0IiwibWFwIiwicG9rZW1vbiIsInBva2VfbGlzdF9pdGVtIiwicG9rZUxpc3RQaWMiLCJlbnRyeV9udW1iZXIiLCJwb2tlbW9uX3NwZWNpZXMiLCJuYW1lIiwicG9rZUxpc3RUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==