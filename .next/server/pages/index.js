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
function Home(props) {
  const {
    pokemons
  } = props;
  var {
    pokemons_imgs
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListPic),
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.entry_number + ".png",
          alt: "Imagem de um " + pokemon.pokemon_species.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 24
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_main_css_main_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokeListText),
          children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 24
        }, this)]
      }, pokemon.entry_number, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sZUFBZUksY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFFMUMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ2xCQyxJQURrQixDQUNaQyxnQkFBRCxJQUFzQjtBQUN4QixRQUFHQSxnQkFBZ0IsQ0FBQ0MsRUFBcEIsRUFBd0I7QUFDcEIsYUFBT0QsZ0JBQWdCLENBQUNFLElBQWpCLEVBQVA7QUFDSDtBQUNKLEdBTGtCLEVBTWxCSCxJQU5rQixDQU1aSSxnQkFBRCxJQUFzQjtBQUN4QixXQUFPQSxnQkFBZ0IsQ0FBQ0MsZUFBeEI7QUFDSCxHQVJrQixDQUF2QjtBQVVBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hSLE1BQUFBO0FBREcsS0FERixDQUdGOztBQUhFLEdBQVA7QUFLRDtBQUVZLFNBQVNTLElBQVQsQ0FBY0QsS0FBZCxFQUFxQjtBQUVoQyxRQUFNO0FBQUVSLElBQUFBO0FBQUYsTUFBZVEsS0FBckI7QUFDQSxNQUFJO0FBQUVFLElBQUFBO0FBQUYsTUFBb0JGLEtBQXhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVYLHFGQUFoQjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFFQSx1RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLDRDQUFhO0FBQUcsWUFBSSxFQUFDLHFCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFBLDZCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBT0k7QUFBSSxlQUFTLEVBQUVBLGtGQUFmO0FBQUEsZ0JBQ0tHLFFBQVEsQ0FBQ2MsR0FBVCxDQUFjQyxPQUFELGlCQUNWO0FBQUksaUJBQVMsRUFBRWxCLHVGQUFmO0FBQUEsZ0NBQ0c7QUFBSyxtQkFBUyxFQUFFQSxvRkFBaEI7QUFBb0MsYUFBRyxFQUFFLDhFQUE0RWtCLE9BQU8sQ0FBQ0csWUFBcEYsR0FBaUcsTUFBMUk7QUFBa0osYUFBRyxFQUFFLGtCQUFnQkgsT0FBTyxDQUFDSSxlQUFSLENBQXdCQztBQUEvTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGVBRUc7QUFBTSxtQkFBUyxFQUFFdkIscUZBQWpCO0FBQUEscUJBQXVDa0IsT0FBTyxDQUFDRyxZQUEvQyxTQUFnRUgsT0FBTyxDQUFDSSxlQUFSLENBQXdCQyxJQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkg7QUFBQSxTQUEyQ0wsT0FBTyxDQUFDRyxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7Ozs7Ozs7Ozs7QUM3Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL21haW4tY3NzL21haW4tc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL21haW4tY3NzL21haW4tc3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0by5wb2tlbW9uX2VudHJpZXM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcG9rZW1vbnNcclxuICAgICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgcG9rZW1vbnMgfSA9IHByb3BzO1xyXG4gICAgdmFyIHsgcG9rZW1vbnNfaW1ncyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5kZXhfdGl0bGVfbWFpbn0+UG9rw6lEZXg8L2gxPlxyXG4gICAgICAgICAgICA8cD5ieTogUmljYXJkbyBNZWxvPC9wPlxyXG4gICAgICAgICAgICA8cD5naXRodWI6IHJpY2FyZG9tZWxvZ3Q8L3A+XHJcbiAgICAgICAgICAgIDxwPkFQSSB1c2VkOiA8YSBocmVmPVwiaHR0cHM6Ly9wb2tlYXBpLmNvL1wiID5odHRwczovL3Bva2VhcGkuY28vPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz4gd29yayBpbiBwcm9ncmVzcy4uLiA8L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9saXN0fT5cclxuICAgICAgICAgICAgICAgIHtwb2tlbW9ucy5tYXAoKHBva2Vtb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9saXN0X2l0ZW19IGtleT17cG9rZW1vbi5lbnRyeV9udW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucG9rZUxpc3RQaWN9IHNyYz17XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vXCIrcG9rZW1vbi5lbnRyeV9udW1iZXIrXCIucG5nXCJ9IGFsdD17XCJJbWFnZW0gZGUgdW0gXCIrcG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBva2VMaXN0VGV4dH0+e3Bva2Vtb24uZW50cnlfbnVtYmVyfSAtIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluX3dyYXBwZXJcIjogXCJtYWluLXN0eWxlX21haW5fd3JhcHBlcl9fUi1rVUlcIixcblx0XCJkZXhfdGl0bGVfbWFpblwiOiBcIm1haW4tc3R5bGVfZGV4X3RpdGxlX21haW5fXzJIdlVhXCIsXG5cdFwicG9rZV9saXN0XCI6IFwibWFpbi1zdHlsZV9wb2tlX2xpc3RfXzFsSzhiXCIsXG5cdFwicG9rZV9saXN0X2l0ZW1cIjogXCJtYWluLXN0eWxlX3Bva2VfbGlzdF9pdGVtX19qaEw3WlwiLFxuXHRcInBva2VMaXN0VGV4dFwiOiBcIm1haW4tc3R5bGVfcG9rZUxpc3RUZXh0X18zdlRHNVwiLFxuXHRcInBva2VMaXN0UGljXCI6IFwibWFpbi1zdHlsZV9wb2tlTGlzdFBpY19fM3hlczVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBva2Vtb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZlciIsIm9rIiwianNvbiIsInJlc3Bvc3RhRW1PYmpldG8iLCJwb2tlbW9uX2VudHJpZXMiLCJwcm9wcyIsIkhvbWUiLCJwb2tlbW9uc19pbWdzIiwibWFpbl93cmFwcGVyIiwiZGV4X3RpdGxlX21haW4iLCJwb2tlX2xpc3QiLCJtYXAiLCJwb2tlbW9uIiwicG9rZV9saXN0X2l0ZW0iLCJwb2tlTGlzdFBpYyIsImVudHJ5X251bWJlciIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiLCJwb2tlTGlzdFRleHQiXSwic291cmNlUm9vdCI6IiJ9