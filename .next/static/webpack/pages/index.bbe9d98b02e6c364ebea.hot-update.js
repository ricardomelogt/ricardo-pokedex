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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmJlOWQ5OGIwMmU2YzM2NGViZWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJlLFNBQVNFLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BRXhCQyxRQUZ3QixHQUVYRCxLQUZXLENBRXhCQyxRQUZ3QjtBQUloQyxzQkFDSTtBQUFLLGFBQVMsRUFBRUgscUZBQWhCO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUVBLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsNENBQWE7QUFBRyxZQUFJLEVBQUMscUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsNkJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSTtBQUFJLGVBQVMsRUFBRUEsa0ZBQWY7QUFBQSxnQkFDS0csUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDRCQUNWO0FBQUksbUJBQVMsRUFBRVIsdUZBQWY7QUFBQSxpQ0FDUTtBQUFHLGdCQUFJLEVBQUUsY0FBWVEsT0FBTyxDQUFDRSxZQUE3QjtBQUFBLG9DQUNBO0FBQUssdUJBQVMsRUFBRVYsb0ZBQWhCO0FBQW9DLGlCQUFHLEVBQUUsOEVBQTRFUSxPQUFPLENBQUNFLFlBQXBGLEdBQWlHLE1BQTFJO0FBQWtKLGlCQUFHLEVBQUUsa0JBQWdCRixPQUFPLENBQUNJLGVBQVIsQ0FBd0JDO0FBQS9MO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFNLHVCQUFTLEVBQUViLHFGQUFqQjtBQUFBLHlCQUF1Q1EsT0FBTyxDQUFDRSxZQUEvQyxTQUFnRUYsT0FBTyxDQUFDSSxlQUFSLENBQXdCQyxJQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFIsV0FBMkNMLE9BQU8sQ0FBQ0UsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7S0F4QnVCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21haW4tY3NzL21haW4tc3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0by5wb2tlbW9uX2VudHJpZXM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcG9rZW1vbnNcclxuICAgICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgcG9rZW1vbnMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZGV4X3RpdGxlX21haW59PlBva8OpRGV4PC9oMT5cclxuICAgICAgICAgICAgPHA+Ynk6IFJpY2FyZG8gTWVsbzwvcD5cclxuICAgICAgICAgICAgPHA+Z2l0aHViOiByaWNhcmRvbWVsb2d0PC9wPlxyXG4gICAgICAgICAgICA8cD5BUEkgdXNlZDogPGEgaHJlZj1cImh0dHBzOi8vcG9rZWFwaS5jby9cIiA+aHR0cHM6Ly9wb2tlYXBpLmNvLzwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+IHdvcmsgaW4gcHJvZ3Jlc3MuLi4gPC9zdHJvbmc+PC9wPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnBva2VfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnBva2VfbGlzdF9pdGVtfSBrZXk9e3Bva2Vtb24uZW50cnlfbnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvcG9rZW1vbi8nK3Bva2Vtb24uZW50cnlfbnVtYmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBva2VMaXN0UGljfSBzcmM9e1wiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL1wiK3Bva2Vtb24uZW50cnlfbnVtYmVyK1wiLnBuZ1wifSBhbHQ9e1wiSW1hZ2VtIGRlIHVtIFwiK3Bva2Vtb24ucG9rZW1vbl9zcGVjaWVzLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBva2VMaXN0VGV4dH0+e3Bva2Vtb24uZW50cnlfbnVtYmVyfSAtIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJIb21lIiwicHJvcHMiLCJwb2tlbW9ucyIsIm1haW5fd3JhcHBlciIsImRleF90aXRsZV9tYWluIiwicG9rZV9saXN0IiwibWFwIiwicG9rZW1vbiIsInBva2VfbGlzdF9pdGVtIiwiZW50cnlfbnVtYmVyIiwicG9rZUxpc3RQaWMiLCJwb2tlbW9uX3NwZWNpZXMiLCJuYW1lIiwicG9rZUxpc3RUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==