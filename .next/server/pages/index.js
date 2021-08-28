(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-css/main-style.module.css */ "./main-css/main-style.module.css");
/* harmony import */ var _main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\projetos\\ricardo-pokedex\\pages\\index.js";


async function getStaticProps(context) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }
  }).then(respostaEmObjeto => {
    return respostaEmObjeto.pokemon_entries;
  });
  return {
    props: {
      pokemons
    } // will be passed to the page component as props

  };
}

const Home = function (props) {
  const {
    pokemons
  } = props;
  const maxPokes = 620;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().main_wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().dex_title_main),
      children: "Pok\xE9Dex"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "by: Ricardo Melo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://github.com/ricardomelogt/ricardo-pokedex",
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["API used: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://pokeapi.co/",
        children: "https://pokeapi.co/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: " work in progress... "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_list),
      children: pokemons.map(pokemon => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_list_item),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: '/pokemon/' + pokemon.entry_number,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListPic),
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.entry_number + ".png",
            alt: "Imagem de um " + pokemon.pokemon_species.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListText),
            children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 29
        }, this)
      }, pokemon.entry_number, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./main-css/main-style.module.css":
/*!****************************************!*\
  !*** ./main-css/main-style.module.css ***!
  \****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main_wrapper": "main-style_main_wrapper__R-kUI",
	"dex_title_main": "main-style_dex_title_main__2HvUa",
	"poke_list": "main-style_poke_list__1lK8b",
	"poke_list_item": "main-style_poke_list_item__jhL7Z",
	"pokeListText": "main-style_pokeListText__3vTG5",
	"pokeListPic": "main-style_pokeListPic__3xes5"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sZUFBZUUsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFFMUMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ2xCQyxJQURrQixDQUNaQyxnQkFBRCxJQUFzQjtBQUN4QixRQUFHQSxnQkFBZ0IsQ0FBQ0MsRUFBcEIsRUFBd0I7QUFDcEIsYUFBT0QsZ0JBQWdCLENBQUNFLElBQWpCLEVBQVA7QUFDSDtBQUNKLEdBTGtCLEVBTWxCSCxJQU5rQixDQU1aSSxnQkFBRCxJQUFzQjtBQUN4QixXQUFPQSxnQkFBZ0IsQ0FBQ0MsZUFBeEI7QUFDSCxHQVJrQixDQUF2QjtBQVVBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hSLE1BQUFBO0FBREcsS0FERixDQUdGOztBQUhFLEdBQVA7QUFLRDs7QUFFRixNQUFNUyxJQUFJLEdBQUcsVUFBU0QsS0FBVCxFQUFnQjtBQUUxQixRQUFNO0FBQUVSLElBQUFBO0FBQUYsTUFBZVEsS0FBckI7QUFDQSxRQUFNRSxRQUFRLEdBQUcsR0FBakI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWIscUZBQWhCO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUVBLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSw2QkFBRztBQUFHLFlBQUksRUFBQyxrREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsNENBQWE7QUFBRyxZQUFJLEVBQUMscUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsNkJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSTtBQUFJLGVBQVMsRUFBRUEsa0ZBQWY7QUFBQSxnQkFDS0csUUFBUSxDQUFDYyxHQUFULENBQWNDLE9BQUQsaUJBQ1Y7QUFBSSxpQkFBUyxFQUFFbEIsdUZBQWY7QUFBQSwrQkFDUTtBQUFHLGNBQUksRUFBRSxjQUFZa0IsT0FBTyxDQUFDRSxZQUE3QjtBQUFBLGtDQUNBO0FBQUsscUJBQVMsRUFBRXBCLG9GQUFoQjtBQUFvQyxlQUFHLEVBQUUsOEVBQTRFa0IsT0FBTyxDQUFDRSxZQUFwRixHQUFpRyxNQUExSTtBQUFrSixlQUFHLEVBQUUsa0JBQWdCRixPQUFPLENBQUNJLGVBQVIsQ0FBd0JDO0FBQS9MO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFNLHFCQUFTLEVBQUV2QixxRkFBakI7QUFBQSx1QkFBdUNrQixPQUFPLENBQUNFLFlBQS9DLFNBQWdFRixPQUFPLENBQUNJLGVBQVIsQ0FBd0JDLElBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUixTQUEyQ0wsT0FBTyxDQUFDRSxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkgsQ0F6QkE7O0FBMkJELGlFQUFlUixJQUFmOzs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvLi9tYWluLWNzcy9tYWluLXN0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21haW4tY3NzL21haW4tc3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgICBjb25zdCBwb2tlbW9ucyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMi8nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG8ucG9rZW1vbl9lbnRyaWVzO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHBva2Vtb25zXHJcbiAgICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBjb25zdCBIb21lID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB7IHBva2Vtb25zIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IG1heFBva2VzID0gNjIwO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZGV4X3RpdGxlX21haW59PlBva8OpRGV4PC9oMT5cclxuICAgICAgICAgICAgPHA+Ynk6IFJpY2FyZG8gTWVsbzwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yaWNhcmRvbWVsb2d0L3JpY2FyZG8tcG9rZWRleFwiPkdpdGh1YjwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPkFQSSB1c2VkOiA8YSBocmVmPVwiaHR0cHM6Ly9wb2tlYXBpLmNvL1wiID5odHRwczovL3Bva2VhcGkuY28vPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz4gd29yayBpbiBwcm9ncmVzcy4uLiA8L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9saXN0fT5cclxuICAgICAgICAgICAgICAgIHtwb2tlbW9ucy5tYXAoKHBva2Vtb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9saXN0X2l0ZW19IGtleT17cG9rZW1vbi5lbnRyeV9udW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9wb2tlbW9uLycrcG9rZW1vbi5lbnRyeV9udW1iZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucG9rZUxpc3RQaWN9IHNyYz17XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vXCIrcG9rZW1vbi5lbnRyeV9udW1iZXIrXCIucG5nXCJ9IGFsdD17XCJJbWFnZW0gZGUgdW0gXCIrcG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucG9rZUxpc3RUZXh0fT57cG9rZW1vbi5lbnRyeV9udW1iZXJ9IC0ge3Bva2Vtb24ucG9rZW1vbl9zcGVjaWVzLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluX3dyYXBwZXJcIjogXCJtYWluLXN0eWxlX21haW5fd3JhcHBlcl9fUi1rVUlcIixcblx0XCJkZXhfdGl0bGVfbWFpblwiOiBcIm1haW4tc3R5bGVfZGV4X3RpdGxlX21haW5fXzJIdlVhXCIsXG5cdFwicG9rZV9saXN0XCI6IFwibWFpbi1zdHlsZV9wb2tlX2xpc3RfXzFsSzhiXCIsXG5cdFwicG9rZV9saXN0X2l0ZW1cIjogXCJtYWluLXN0eWxlX3Bva2VfbGlzdF9pdGVtX19qaEw3WlwiLFxuXHRcInBva2VMaXN0VGV4dFwiOiBcIm1haW4tc3R5bGVfcG9rZUxpc3RUZXh0X18zdlRHNVwiLFxuXHRcInBva2VMaXN0UGljXCI6IFwibWFpbi1zdHlsZV9wb2tlTGlzdFBpY19fM3hlczVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwb2tlbW9ucyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2ZXIiLCJvayIsImpzb24iLCJyZXNwb3N0YUVtT2JqZXRvIiwicG9rZW1vbl9lbnRyaWVzIiwicHJvcHMiLCJIb21lIiwibWF4UG9rZXMiLCJtYWluX3dyYXBwZXIiLCJkZXhfdGl0bGVfbWFpbiIsInBva2VfbGlzdCIsIm1hcCIsInBva2Vtb24iLCJwb2tlX2xpc3RfaXRlbSIsImVudHJ5X251bWJlciIsInBva2VMaXN0UGljIiwicG9rZW1vbl9zcGVjaWVzIiwibmFtZSIsInBva2VMaXN0VGV4dCJdLCJzb3VyY2VSb290IjoiIn0=