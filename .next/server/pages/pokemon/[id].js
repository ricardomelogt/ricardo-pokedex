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
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Egg groups (falta implementar) : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), pokemon.abilities.map(typesListItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: 'ability_text ' + 'is_hidden_' + typesListItem.is_hidden,
          children: [typesListItem.ability.name, " "]
        }, typesListItem.ability.name, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Total stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcG9rZW1vbi9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHLEdBQWY7QUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckIsRUFBd0I7O0FBRVQsU0FBU0MsT0FBVCxDQUFrQjtBQUFFQyxFQUFBQTtBQUFGLENBQWxCLEVBQWdDO0FBQzNDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWixFQUQyQyxDQUczQzs7QUFDQSxNQUFJRyxPQUFPLEdBQUdILE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBQS9CO0FBQUEsTUFDQUMsUUFBUSxHQUFHTixPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUQ1QjtBQUFBLE1BRUFFLFFBQVEsR0FBR1AsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FGNUI7QUFBQSxNQUdBRyxVQUFVLEdBQUdSLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBSDlCO0FBQUEsTUFJQUksVUFBVSxHQUFHVCxPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUo5QjtBQUFBLE1BS0FLLFVBQVUsR0FBR1YsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FMOUIsQ0FKMkMsQ0FXM0M7O0FBQ0EsTUFBSU0sU0FBUyxHQUFHWCxPQUFPLENBQUNZLEVBQXhCO0FBQUEsTUFDQUMsV0FBVyxHQUFHRixTQUFTLEdBQUcsQ0FEMUI7QUFBQSxNQUVBRyxjQUFjLEdBQUdILFNBQVMsR0FBRyxDQUY3Qjs7QUFJQSxXQUFTSSxhQUFULEdBQXlCO0FBQ3JCLFFBQUdKLFNBQVMsSUFBSSxDQUFoQixFQUFrQjtBQUNkRSxNQUFBQSxXQUFXLEdBQUcsQ0FBZDtBQUNIOztBQUNELFFBQUdGLFNBQVMsSUFBSWQsUUFBaEIsRUFBeUI7QUFDckJpQixNQUFBQSxjQUFjLEdBQUdqQixRQUFqQjtBQUNIO0FBQ0o7O0FBQUE7QUFFRGtCLEVBQUFBLGFBQWE7QUFFYixzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFbkIseUZBQWhCO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUUsY0FBYWlCLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosc0JBQ3NEO0FBQUcsWUFBSSxFQUFFLGNBQWFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHRELGVBRUk7QUFBQSxtQkFBS2QsT0FBTyxDQUFDWSxFQUFiLFFBQW1CWixPQUFPLENBQUNpQixJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUssV0FBRyxFQUFFakIsT0FBTyxDQUFDa0IsT0FBUixDQUFnQkMsYUFBMUI7QUFBeUMsV0FBRyxFQUFFLGtCQUFrQm5CLE9BQU8sQ0FBQ2lCO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUssVUFBRSxFQUFDLG9CQUFSO0FBQTZCLGlCQUFTLEVBQUVyQixxRkFBeEM7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVLSSxPQUFPLENBQUNxQixLQUFSLENBQWNDLEdBQWQsQ0FBbUJDLGFBQUQsaUJBQ2Y7QUFBb0MsbUJBQVMsRUFBRSxVQUFVQSxhQUFhLENBQUNDLElBQWQsQ0FBbUJQLElBQTdCLEdBQW9DLFlBQW5GO0FBQUEsb0JBQWtHTSxhQUFhLENBQUNDLElBQWQsQ0FBbUJQO0FBQXJILFdBQVdNLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQlAsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBVUk7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVLakIsT0FBTyxDQUFDeUIsU0FBUixDQUFrQkgsR0FBbEIsQ0FBdUJDLGFBQUQsaUJBQ25CO0FBQXVDLG1CQUFTLEVBQUUsa0JBQWdCLFlBQWhCLEdBQStCQSxhQUFhLENBQUNHLFNBQS9GO0FBQUEscUJBQTJHSCxhQUFhLENBQUNJLE9BQWQsQ0FBc0JWLElBQWpJO0FBQUEsV0FBV00sYUFBYSxDQUFDSSxPQUFkLENBQXNCVixJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosZUFnQkk7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVLakIsT0FBTyxDQUFDeUIsU0FBUixDQUFrQkgsR0FBbEIsQ0FBdUJDLGFBQUQsaUJBQ25CO0FBQXVDLG1CQUFTLEVBQUUsa0JBQWdCLFlBQWhCLEdBQStCQSxhQUFhLENBQUNHLFNBQS9GO0FBQUEscUJBQTJHSCxhQUFhLENBQUNJLE9BQWQsQ0FBc0JWLElBQWpJO0FBQUEsV0FBV00sYUFBYSxDQUFDSSxPQUFkLENBQXNCVixJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJKLGVBc0JJO0FBQUssaUJBQVMsRUFBRXJCLGtGQUFoQjtBQUFBLGdDQUNJO0FBQUEsbURBQWlCO0FBQUEsc0JBQU9PLE9BQU8sR0FBR0csUUFBVixHQUFxQkMsUUFBckIsR0FBZ0NDLFVBQWhDLEdBQTZDQyxVQUE3QyxHQUEwREM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSx1Q0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixvQkFBdUI7QUFBQSxzQkFBT1A7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF2QixvQkFBOEM7QUFBSyxxQkFBUyxFQUFFUCxpRkFBaEI7QUFBa0MsaUJBQUssRUFBRTtBQUFFa0MsY0FBQUEsS0FBSyxFQUFFM0IsT0FBTyxHQUFHLENBQVYsR0FBYztBQUF2QjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLHVDQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFOLG9CQUF3QjtBQUFBLHNCQUFPRztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXhCLG9CQUFnRDtBQUFLLHFCQUFTLEVBQUVWLGlGQUFoQjtBQUFrQyxpQkFBSyxFQUFFO0FBQUVrQyxjQUFBQSxLQUFLLEVBQUV4QixRQUFRLEdBQUcsQ0FBWCxHQUFlO0FBQXhCO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQUEsdUNBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQU4sb0JBQXdCO0FBQUEsc0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBeEIsb0JBQWdEO0FBQUsscUJBQVMsRUFBRVgsaUZBQWhCO0FBQWtDLGlCQUFLLEVBQUU7QUFBRWtDLGNBQUFBLEtBQUssRUFBRXZCLFFBQVEsR0FBRyxDQUFYLEdBQWU7QUFBeEI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBQSx1Q0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixvQkFBMkI7QUFBQSxzQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUEzQixvQkFBcUQ7QUFBSyxxQkFBUyxFQUFFWixpRkFBaEI7QUFBa0MsaUJBQUssRUFBRTtBQUFFa0MsY0FBQUEsS0FBSyxFQUFFdEIsVUFBVSxHQUFHLENBQWIsR0FBaUI7QUFBMUI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTUk7QUFBQSx1Q0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixvQkFBMkI7QUFBQSxzQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUEzQixvQkFBcUQ7QUFBSyxxQkFBUyxFQUFFYixpRkFBaEI7QUFBa0MsaUJBQUssRUFBRTtBQUFFa0MsY0FBQUEsS0FBSyxFQUFFckIsVUFBVSxHQUFHLENBQWIsR0FBaUI7QUFBMUI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0k7QUFBQSx1Q0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixvQkFBMEI7QUFBQSxzQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUExQixvQkFBb0Q7QUFBSyxxQkFBUyxFQUFFZCxpRkFBaEI7QUFBa0MsaUJBQUssRUFBRTtBQUFFa0MsY0FBQUEsS0FBSyxFQUFFcEIsVUFBVSxHQUFHLENBQWIsR0FBaUI7QUFBMUI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7QUFFTSxlQUFlcUIsY0FBZixDQUE4QjtBQUFFQyxFQUFBQTtBQUFGLENBQTlCLEVBQTBDO0FBQzdDLFFBQU1oQyxPQUFPLEdBQUcsTUFBTWlDLEtBQUssQ0FBQyx1Q0FBcUNELE1BQU0sQ0FBQ3BCLEVBQTdDLENBQUwsQ0FDckJzQixJQURxQixDQUNmQyxnQkFBRCxJQUFzQjtBQUN4QixRQUFHQSxnQkFBZ0IsQ0FBQ0MsRUFBcEIsRUFBd0I7QUFDcEIsYUFBT0QsZ0JBQWdCLENBQUNFLElBQWpCLEVBQVA7QUFDSDs7QUFFRCxVQUFNLElBQUlDLEtBQUosQ0FBVSxzQ0FBVixDQUFOO0FBQ0gsR0FQcUIsRUFRckJKLElBUnFCLENBUWZLLGdCQUFELElBQXNCO0FBQ3hCLFdBQU9BLGdCQUFQO0FBQ0gsR0FWcUIsQ0FBdEI7QUFZQSxTQUFPO0FBQ0hDLElBQUFBLEtBQUssRUFBRTtBQUNIeEMsTUFBQUE7QUFERztBQURKLEdBQVA7QUFLSDtBQUVNLGVBQWV5QyxjQUFmLEdBQWdDO0FBQ25DLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBaUJBLENBQUMsR0FBRzdDLFFBQXJCLEVBQWdDNkMsQ0FBQyxFQUFqQyxFQUFzQztBQUNsQzVDLElBQUFBLGNBQWMsQ0FBQzZDLElBQWYsQ0FBcUI7QUFBQ1gsTUFBQUEsTUFBTSxFQUFDO0FBQUNwQixRQUFBQSxFQUFFLEVBQUMsQ0FBQzhCLENBQUMsR0FBQyxDQUFILEVBQU1FLFFBQU47QUFBSjtBQUFSLEtBQXJCO0FBQ0g7O0FBRUQsU0FBTztBQUNIQyxJQUFBQSxLQUFLLEVBQUUvQyxjQURKO0FBRUhnRCxJQUFBQSxRQUFRLEVBQUU7QUFGUCxHQUFQO0FBSUg7Ozs7Ozs7Ozs7QUN0R0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyIsIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvLi9tYWluLWNzcy9wb2tlLXBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yaWNhcmRvLXBva2VkZXgvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vbWFpbi1jc3MvcG9rZS1wYWdlLm1vZHVsZS5jc3MnO1xyXG5cclxuLy8gZXNwZWNpZmljYXIgbnVtZXJvIG1heGltbyBkZSBwb2tlbW9ucyBkYSBwb2tlZGV4IHBvciBvcmRlbSBjcmVzY2VudGU6XHJcbnZhciBtYXhQb2tlcyA9IDYyMDtcclxudmFyIHBva2VVbmljb1BhdGhzID0gW10gLy97cGFyYW1zOntpZDonMScsfX0se3BhcmFtczp7aWQ6JzInLH19LFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vbiggeyBwb2tlbW9uIH0gKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuXHJcbiAgICAvLyBwb2tlIHN0YXRzOlxyXG4gICAgdmFyIGhwX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzBdLmJhc2Vfc3RhdCxcclxuICAgIGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1sxXS5iYXNlX3N0YXQsXHJcbiAgICBkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbMl0uYmFzZV9zdGF0LFxyXG4gICAgc3BhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbM10uYmFzZV9zdGF0LFxyXG4gICAgc3BkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbNF0uYmFzZV9zdGF0LFxyXG4gICAgc3BlZWRfc3RhdCA9IHBva2Vtb24uc3RhdHNbNV0uYmFzZV9zdGF0O1xyXG5cclxuICAgIC8vIGJhY2svZm9yd2FyZCBuYXZcclxuICAgIHZhciBwb2tlSW5kZXggPSBwb2tlbW9uLmlkLFxyXG4gICAgcG9rZU5hdkJhY2sgPSBwb2tlSW5kZXggLSAxLFxyXG4gICAgcG9rZU5hdkZvcndhcmQgPSBwb2tlSW5kZXggKyAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrTmF2TGlua3MoKSB7XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICBwb2tlTmF2QmFjayA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBva2VJbmRleCA9PSBtYXhQb2tlcyl7XHJcbiAgICAgICAgICAgIHBva2VOYXZGb3J3YXJkID0gbWF4UG9rZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY2hlY2tOYXZMaW5rcygpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2VfaW5mb193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvcG9rZW1vbi8nKyBwb2tlTmF2QmFja30+YW50ZXJpb3I8L2E+IHwgPGEgaHJlZj17Jy9wb2tlbW9uLycrIHBva2VOYXZGb3J3YXJkfT5wcsOzeGltbzwvYT5cclxuICAgICAgICAgICAgICAgIDxoMj57cG9rZW1vbi5pZH0uIHtwb2tlbW9uLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIiArIHBva2Vtb24ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb2tlX3R5cGVzX3dyYXBwZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlbW9uX3R5cGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UeXBlOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24udHlwZXMubWFwKCh0eXBlc0xpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dHlwZXNMaXN0SXRlbS50eXBlLm5hbWV9IGNsYXNzTmFtZT17J3R5cGVfJyArIHR5cGVzTGlzdEl0ZW0udHlwZS5uYW1lICsgJyBwb2tlX3R5cGUnfT57dHlwZXNMaXN0SXRlbS50eXBlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWJpbGl0aWVzOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24uYWJpbGl0aWVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3R5cGVzTGlzdEl0ZW0uYWJpbGl0eS5uYW1lfSBjbGFzc05hbWU9eydhYmlsaXR5X3RleHQgJysnaXNfaGlkZGVuXycgKyB0eXBlc0xpc3RJdGVtLmlzX2hpZGRlbn0+e3R5cGVzTGlzdEl0ZW0uYWJpbGl0eS5uYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZ2cgZ3JvdXBzIChmYWx0YSBpbXBsZW1lbnRhcikgOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24uYWJpbGl0aWVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3R5cGVzTGlzdEl0ZW0uYWJpbGl0eS5uYW1lfSBjbGFzc05hbWU9eydhYmlsaXR5X3RleHQgJysnaXNfaGlkZGVuXycgKyB0eXBlc0xpc3RJdGVtLmlzX2hpZGRlbn0+e3R5cGVzTGlzdEl0ZW0uYWJpbGl0eS5uYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9zdGF0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlRvdGFsIHN0YXRzOiA8c3Bhbj57aHBfc3RhdCArIGF0a19zdGF0ICsgZGVmX3N0YXQgKyBzcGF0a19zdGF0ICsgc3BkZWZfc3RhdCArIHNwZWVkX3N0YXR9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+SFA6PC9zcGFuPiA8c3Bhbj57aHBfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogaHBfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkFUSzo8L3NwYW4+IDxzcGFuPnthdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5ERUY6PC9zcGFuPiA8c3Bhbj57ZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfQVRLOjwvc3Bhbj4gPHNwYW4+e3NwYXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9ERUY6PC9zcGFuPiA8c3Bhbj57c3BkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQRUVEOjwvc3Bhbj4gPHNwYW4+e3NwZWVkX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZWVkX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgbyBwb2tlbW9uLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBtYXhQb2tlcyA7IGkrKyApIHtcclxuICAgICAgICBwb2tlVW5pY29QYXRocy5wdXNoKCB7cGFyYW1zOntpZDooaSsxKS50b1N0cmluZygpLH19ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZVVuaWNvUGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBva2VfaW5mb193cmFwcGVyXCI6IFwicG9rZS1wYWdlX3Bva2VfaW5mb193cmFwcGVyX18zcHZEUFwiLFxuXHRcInBva2Vfc3RhdHNcIjogXCJwb2tlLXBhZ2VfcG9rZV9zdGF0c19fMnFJVlpcIixcblx0XCJzdGF0c19iYXJcIjogXCJwb2tlLXBhZ2Vfc3RhdHNfYmFyX18xWVQ5QVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIm1heFBva2VzIiwicG9rZVVuaWNvUGF0aHMiLCJQb2tlbW9uIiwicG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciLCJocF9zdGF0Iiwic3RhdHMiLCJiYXNlX3N0YXQiLCJhdGtfc3RhdCIsImRlZl9zdGF0Iiwic3BhdGtfc3RhdCIsInNwZGVmX3N0YXQiLCJzcGVlZF9zdGF0IiwicG9rZUluZGV4IiwiaWQiLCJwb2tlTmF2QmFjayIsInBva2VOYXZGb3J3YXJkIiwiY2hlY2tOYXZMaW5rcyIsInBva2VfaW5mb193cmFwcGVyIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwicG9rZW1vbl90eXBlcyIsInR5cGVzIiwibWFwIiwidHlwZXNMaXN0SXRlbSIsInR5cGUiLCJhYmlsaXRpZXMiLCJpc19oaWRkZW4iLCJhYmlsaXR5IiwicG9rZV9zdGF0cyIsInN0YXRzX2JhciIsIndpZHRoIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2VydmVyIiwib2siLCJqc29uIiwiRXJyb3IiLCJyZXNwb3N0YUVtT2JqZXRvIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsImkiLCJwdXNoIiwidG9TdHJpbmciLCJwYXRocyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==