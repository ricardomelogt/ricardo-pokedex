(() => {
var exports = {};
exports.id = "pages/pokemon/[id]";
exports.ids = ["pages/pokemon/[id]"];
exports.modules = {

/***/ "./pages/pokemon/[id].js":
/*!*******************************!*\
  !*** ./pages/pokemon/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pokemon),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main-css/poke-page.module.css */ "./main-css/poke-page.module.css");
/* harmony import */ var _main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\code-work\\ricardo-pokedex\\pages\\pokemon\\[id].js";

 // especificar numero maximo de pokemons da pokedex por ordem crescente:

var maxPokes = 620;
var pokeUnicoPaths = []; //{params:{id:'1',}},{params:{id:'2',}},

function Pokemon({
  pokemon
}) {
  console.log(pokemon); // poke stats:

  var hp_stat = pokemon.stats[0].base_stat,
      atk_stat = pokemon.stats[1].base_stat,
      def_stat = pokemon.stats[2].base_stat,
      spatk_stat = pokemon.stats[3].base_stat,
      spdef_stat = pokemon.stats[4].base_stat,
      speed_stat = pokemon.stats[5].base_stat; // back/forward nav

  var pokeIndex = pokemon.id,
      pokeNavBack = pokeIndex - 1,
      pokeNavForward = pokeIndex + 1;

  function checkNavLinks() {
    if (pokeIndex == 1) {
      pokeNavBack = 1;
    }

    if (pokeIndex == maxPokes) {
      pokeNavForward = maxPokes;
    }
  }

  ;
  checkNavLinks();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_info_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + pokeNavBack,
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + pokeNavForward,
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 67
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um " + pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "poke_types_wrapper",
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Type: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), pokemon.types.map(typesListItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: 'type_' + typesListItem.type.name + ' poke_type',
          children: typesListItem.type.name
        }, typesListItem.type.name, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Abilities: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), pokemon.abilities.map(typesListItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: 'ability_text ' + 'is_hidden_' + typesListItem.is_hidden,
          children: [typesListItem.ability.name, " "]
        }, typesListItem.ability.name, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Total stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}
async function getStaticProps({
  params
}) {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + params.id).then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Não foi possível carregar o pokemon.');
  }).then(respostaEmObjeto => {
    return respostaEmObjeto;
  });
  return {
    props: {
      pokemon
    }
  };
}
async function getStaticPaths() {
  for (var i = 0; i < maxPokes; i++) {
    pokeUnicoPaths.push({
      params: {
        id: (i + 1).toString()
      }
    });
  }

  return {
    paths: pokeUnicoPaths,
    fallback: false
  };
}

/***/ }),

/***/ "./main-css/poke-page.module.css":
/*!***************************************!*\
  !*** ./main-css/poke-page.module.css ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"poke_info_wrapper": "poke-page_poke_info_wrapper__3pvDP",
	"poke_stats": "poke-page_poke_stats__2qIVZ",
	"stats_bar": "poke-page_stats_bar__1YT9A"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDOEIsQ0FBQyxHQUFDLENBQUgsRUFBTUUsUUFBTjtBQUFKO0FBQVIsS0FBckI7QUFDSDs7QUFFRCxTQUFPO0FBQ0hDLElBQUFBLEtBQUssRUFBRS9DLGNBREo7QUFFSGdELElBQUFBLFFBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSDs7Ozs7Ozs7OztBQ2hHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4Ly4vcGFnZXMvcG9rZW1vbi9baWRdLmpzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9tYWluLWNzcy9wb2tlLXBhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBlc3BlY2lmaWNhciBudW1lcm8gbWF4aW1vIGRlIHBva2Vtb25zIGRhIHBva2VkZXggcG9yIG9yZGVtIGNyZXNjZW50ZTpcclxudmFyIG1heFBva2VzID0gNjIwO1xyXG52YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKCB7IHBva2Vtb24gfSApIHtcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb24pO1xyXG5cclxuICAgIC8vIHBva2Ugc3RhdHM6XHJcbiAgICB2YXIgaHBfc3RhdCA9IHBva2Vtb24uc3RhdHNbMF0uYmFzZV9zdGF0LFxyXG4gICAgYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzFdLmJhc2Vfc3RhdCxcclxuICAgIGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1syXS5iYXNlX3N0YXQsXHJcbiAgICBzcGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1szXS5iYXNlX3N0YXQsXHJcbiAgICBzcGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1s0XS5iYXNlX3N0YXQsXHJcbiAgICBzcGVlZF9zdGF0ID0gcG9rZW1vbi5zdGF0c1s1XS5iYXNlX3N0YXQ7XHJcblxyXG4gICAgLy8gYmFjay9mb3J3YXJkIG5hdlxyXG4gICAgdmFyIHBva2VJbmRleCA9IHBva2Vtb24uaWQsXHJcbiAgICBwb2tlTmF2QmFjayA9IHBva2VJbmRleCAtIDEsXHJcbiAgICBwb2tlTmF2Rm9yd2FyZCA9IHBva2VJbmRleCArIDE7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tOYXZMaW5rcygpIHtcclxuICAgICAgICBpZihwb2tlSW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIHBva2VOYXZCYWNrID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IG1heFBva2VzKXtcclxuICAgICAgICAgICAgcG9rZU5hdkZvcndhcmQgPSBtYXhQb2tlcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja05hdkxpbmtzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9pbmZvX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9wb2tlbW9uLycrIHBva2VOYXZCYWNrfT5hbnRlcmlvcjwvYT4gfCA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkZvcndhcmR9PnByw7N4aW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9e1wiSW1hZ2VtIGRlIHVtIFwiICsgcG9rZW1vbi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBva2VfdHlwZXNfd3JhcHBlclwiIGNsYXNzTmFtZT17c3R5bGVzLnBva2Vtb25fdHlwZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlR5cGU6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi50eXBlcy5tYXAoKHR5cGVzTGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0eXBlc0xpc3RJdGVtLnR5cGUubmFtZX0gY2xhc3NOYW1lPXsndHlwZV8nICsgdHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgKyAnIHBva2VfdHlwZSd9Pnt0eXBlc0xpc3RJdGVtLnR5cGUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BYmlsaXRpZXM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5hYmlsaXRpZXMubWFwKCh0eXBlc0xpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IGNsYXNzTmFtZT17J2FiaWxpdHlfdGV4dCAnKydpc19oaWRkZW5fJyArIHR5cGVzTGlzdEl0ZW0uaXNfaGlkZGVufT57dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX3N0YXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VG90YWwgc3RhdHM6IDxzcGFuPntocF9zdGF0ICsgYXRrX3N0YXQgKyBkZWZfc3RhdCArIHNwYXRrX3N0YXQgKyBzcGRlZl9zdGF0ICsgc3BlZWRfc3RhdH08L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5IUDo8L3NwYW4+IDxzcGFuPntocF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBocF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+QVRLOjwvc3Bhbj4gPHNwYW4+e2F0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkRFRjo8L3NwYW4+IDxzcGFuPntkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9BVEs6PC9zcGFuPiA8c3Bhbj57c3BhdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0RFRjo8L3NwYW4+IDxzcGFuPntzcGRlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BFRUQ6PC9zcGFuPiA8c3Bhbj57c3BlZWRfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BlZWRfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8nK3BhcmFtcy5pZClcclxuICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvIHBva2Vtb24uJylcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb3N0YUVtT2JqZXRvO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBva2Vtb25cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG1heFBva2VzIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9rZV9pbmZvX3dyYXBwZXJcIjogXCJwb2tlLXBhZ2VfcG9rZV9pbmZvX3dyYXBwZXJfXzNwdkRQXCIsXG5cdFwicG9rZV9zdGF0c1wiOiBcInBva2UtcGFnZV9wb2tlX3N0YXRzX18ycUlWWlwiLFxuXHRcInN0YXRzX2JhclwiOiBcInBva2UtcGFnZV9zdGF0c19iYXJfXzFZVDlBXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwibWF4UG9rZXMiLCJwb2tlVW5pY29QYXRocyIsIlBva2Vtb24iLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyIsImhwX3N0YXQiLCJzdGF0cyIsImJhc2Vfc3RhdCIsImF0a19zdGF0IiwiZGVmX3N0YXQiLCJzcGF0a19zdGF0Iiwic3BkZWZfc3RhdCIsInNwZWVkX3N0YXQiLCJwb2tlSW5kZXgiLCJpZCIsInBva2VOYXZCYWNrIiwicG9rZU5hdkZvcndhcmQiLCJjaGVja05hdkxpbmtzIiwicG9rZV9pbmZvX3dyYXBwZXIiLCJuYW1lIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJwb2tlbW9uX3R5cGVzIiwidHlwZXMiLCJtYXAiLCJ0eXBlc0xpc3RJdGVtIiwidHlwZSIsImFiaWxpdGllcyIsImlzX2hpZGRlbiIsImFiaWxpdHkiLCJwb2tlX3N0YXRzIiwic3RhdHNfYmFyIiwid2lkdGgiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2ZXIiLCJvayIsImpzb24iLCJFcnJvciIsInJlc3Bvc3RhRW1PYmpldG8iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiaSIsInB1c2giLCJ0b1N0cmluZyIsInBhdGhzIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9