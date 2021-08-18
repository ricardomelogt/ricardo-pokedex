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
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-css/main-style.module.css */ "./main-css/main-style.module.css");
/* harmony import */ var _main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\code-work\\ricardo-pokedex\\pages\\index.js";


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
function Home(props) {
  const {
    pokemons
  } = props;
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
            lineNumber: 40,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListText),
            children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 29
        }, this)
      }, pokemon.entry_number, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sZUFBZUUsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFFMUMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ2xCQyxJQURrQixDQUNaQyxnQkFBRCxJQUFzQjtBQUN4QixRQUFHQSxnQkFBZ0IsQ0FBQ0MsRUFBcEIsRUFBd0I7QUFDcEIsYUFBT0QsZ0JBQWdCLENBQUNFLElBQWpCLEVBQVA7QUFDSDtBQUNKLEdBTGtCLEVBTWxCSCxJQU5rQixDQU1aSSxnQkFBRCxJQUFzQjtBQUN4QixXQUFPQSxnQkFBZ0IsQ0FBQ0MsZUFBeEI7QUFDSCxHQVJrQixDQUF2QjtBQVVBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hSLE1BQUFBO0FBREcsS0FERixDQUdGOztBQUhFLEdBQVA7QUFLRDtBQUVZLFNBQVNTLElBQVQsQ0FBY0QsS0FBZCxFQUFxQjtBQUVoQyxRQUFNO0FBQUVSLElBQUFBO0FBQUYsTUFBZVEsS0FBckI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVgscUZBQWhCO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUVBLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsNENBQWE7QUFBRyxZQUFJLEVBQUMscUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsNkJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSTtBQUFJLGVBQVMsRUFBRUEsa0ZBQWY7QUFBQSxnQkFDS0csUUFBUSxDQUFDYSxHQUFULENBQWNDLE9BQUQsaUJBQ1Y7QUFBSSxpQkFBUyxFQUFFakIsdUZBQWY7QUFBQSwrQkFDUTtBQUFHLGNBQUksRUFBRSxjQUFZaUIsT0FBTyxDQUFDRSxZQUE3QjtBQUFBLGtDQUNBO0FBQUsscUJBQVMsRUFBRW5CLG9GQUFoQjtBQUFvQyxlQUFHLEVBQUUsOEVBQTRFaUIsT0FBTyxDQUFDRSxZQUFwRixHQUFpRyxNQUExSTtBQUFrSixlQUFHLEVBQUUsa0JBQWdCRixPQUFPLENBQUNJLGVBQVIsQ0FBd0JDO0FBQS9MO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFNLHFCQUFTLEVBQUV0QixxRkFBakI7QUFBQSx1QkFBdUNpQixPQUFPLENBQUNFLFlBQS9DLFNBQWdFRixPQUFPLENBQUNJLGVBQVIsQ0FBd0JDLElBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUixTQUEyQ0wsT0FBTyxDQUFDRSxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7Ozs7Ozs7Ozs7QUMvQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL21haW4tY3NzL21haW4tc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vbWFpbi1jc3MvbWFpbi1zdHlsZS5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0by5wb2tlbW9uX2VudHJpZXM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcG9rZW1vbnNcclxuICAgICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgcG9rZW1vbnMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZGV4X3RpdGxlX21haW59PlBva8OpRGV4PC9oMT5cclxuICAgICAgICAgICAgPHA+Ynk6IFJpY2FyZG8gTWVsbzwvcD5cclxuICAgICAgICAgICAgPHA+Z2l0aHViOiByaWNhcmRvbWVsb2d0PC9wPlxyXG4gICAgICAgICAgICA8cD5BUEkgdXNlZDogPGEgaHJlZj1cImh0dHBzOi8vcG9rZWFwaS5jby9cIiA+aHR0cHM6Ly9wb2tlYXBpLmNvLzwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+IHdvcmsgaW4gcHJvZ3Jlc3MuLi4gPC9zdHJvbmc+PC9wPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnBva2VfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnBva2VfbGlzdF9pdGVtfSBrZXk9e3Bva2Vtb24uZW50cnlfbnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvcG9rZW1vbi8nK3Bva2Vtb24uZW50cnlfbnVtYmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBva2VMaXN0UGljfSBzcmM9e1wiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL1wiK3Bva2Vtb24uZW50cnlfbnVtYmVyK1wiLnBuZ1wifSBhbHQ9e1wiSW1hZ2VtIGRlIHVtIFwiK3Bva2Vtb24ucG9rZW1vbl9zcGVjaWVzLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBva2VMaXN0VGV4dH0+e3Bva2Vtb24uZW50cnlfbnVtYmVyfSAtIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluX3dyYXBwZXJcIjogXCJtYWluLXN0eWxlX21haW5fd3JhcHBlcl9fUi1rVUlcIixcblx0XCJkZXhfdGl0bGVfbWFpblwiOiBcIm1haW4tc3R5bGVfZGV4X3RpdGxlX21haW5fXzJIdlVhXCIsXG5cdFwicG9rZV9saXN0XCI6IFwibWFpbi1zdHlsZV9wb2tlX2xpc3RfXzFsSzhiXCIsXG5cdFwicG9rZV9saXN0X2l0ZW1cIjogXCJtYWluLXN0eWxlX3Bva2VfbGlzdF9pdGVtX19qaEw3WlwiLFxuXHRcInBva2VMaXN0VGV4dFwiOiBcIm1haW4tc3R5bGVfcG9rZUxpc3RUZXh0X18zdlRHNVwiLFxuXHRcInBva2VMaXN0UGljXCI6IFwibWFpbi1zdHlsZV9wb2tlTGlzdFBpY19fM3hlczVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwb2tlbW9ucyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2ZXIiLCJvayIsImpzb24iLCJyZXNwb3N0YUVtT2JqZXRvIiwicG9rZW1vbl9lbnRyaWVzIiwicHJvcHMiLCJIb21lIiwibWFpbl93cmFwcGVyIiwiZGV4X3RpdGxlX21haW4iLCJwb2tlX2xpc3QiLCJtYXAiLCJwb2tlbW9uIiwicG9rZV9saXN0X2l0ZW0iLCJlbnRyeV9udW1iZXIiLCJwb2tlTGlzdFBpYyIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiLCJwb2tlTGlzdFRleHQiXSwic291cmNlUm9vdCI6IiJ9