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

var _jsxFileName = "C:\\projetos\\ricardo-pokedex\\pages\\pokemon\\[id].js";

 // especificar numero maximo de pokemons da pokedex por ordem crescente:

var maxPokes = 620;
var pokeUnicoPaths = []; //{params:{id:'1',}},{params:{id:'2',}},

function Pokemon({
  pokemon,
  pokemonSpecies
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
  pokemon.types.map(typesListItem => {
    if (typesListItem.type.name == 'fairy') {
      typesListItem.type.name = 'normal';
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_info_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "top_nav_container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: '/pokemon/' + pokeNavBack,
          children: "anterior"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: '/pokemon/' + pokeNavForward,
          children: "pr\xF3ximo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 71
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "poke_info_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: [pokemon.id, ". ", pokemon.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: pokemon.sprites.front_default,
          alt: "Imagem de um " + pokemon.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "poke_types_wrapper",
          className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Type: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), pokemon.types.map(typesListItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'type_' + typesListItem.type.name + ' poke_type',
            children: typesListItem.type.name
          }, typesListItem.slot, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "content_box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Abilities: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), pokemon.abilities.map(typesListItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text ' + 'is_hidden_' + typesListItem.is_hidden,
            children: [typesListItem.ability.name, " "]
          }, typesListItem.ability.name, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 29
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "content_box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Egg groups: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), pokemonSpecies.egg_groups.map(egg_group => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text',
            children: [egg_group.name, " "]
          }, egg_group.name, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Total stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Moves: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this), pokemon.moves.map(moveNode => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: 'ability_text move_box ' + 'version_group_' + parseInt(moveNode.version_group_details[0].version_group.url[40] + moveNode.version_group_details[0].version_group.url[41]),
          children: [moveNode.move.name, " "]
        }, moveNode.move.name, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
  const pokemonSpecies = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + params.id).then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Não foi possível carregar os dados pokemonSpecies.');
  }).then(respostaEmObjeto => {
    return respostaEmObjeto;
  });
  return {
    props: {
      pokemon,
      pokemonSpecies
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEIsQ0FDdEJDLGdCQUFELElBQXNCO0FBQ3hCLFFBQUdBLGdCQUFnQixDQUFDQyxFQUFwQixFQUF3QjtBQUNwQixhQUFPRCxnQkFBZ0IsQ0FBQ0UsSUFBakIsRUFBUDtBQUNIOztBQUVELFVBQU0sSUFBSUMsS0FBSixDQUFVLG9EQUFWLENBQU47QUFDSCxHQVA0QixFQVE1QkosSUFSNEIsQ0FRdEJLLGdCQUFELElBQXNCO0FBQ3hCLFdBQU9BLGdCQUFQO0FBQ0gsR0FWNEIsQ0FBN0I7QUFZQSxTQUFPO0FBQ0hDLElBQUFBLEtBQUssRUFBRTtBQUNIbkQsTUFBQUEsT0FERztBQUVIQyxNQUFBQTtBQUZHO0FBREosR0FBUDtBQU1IO0FBRU0sZUFBZW1ELGNBQWYsR0FBZ0M7QUFDbkMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFpQkEsQ0FBQyxHQUFHeEQsUUFBckIsRUFBZ0N3RCxDQUFDLEVBQWpDLEVBQXNDO0FBQ2xDdkQsSUFBQUEsY0FBYyxDQUFDd0QsSUFBZixDQUFxQjtBQUFDWCxNQUFBQSxNQUFNLEVBQUM7QUFBQzlCLFFBQUFBLEVBQUUsRUFBQyxDQUFDd0MsQ0FBQyxHQUFDLENBQUgsRUFBTUUsUUFBTjtBQUFKO0FBQVIsS0FBckI7QUFDSDs7QUFFRCxTQUFPO0FBQ0hDLElBQUFBLEtBQUssRUFBRTFELGNBREo7QUFFSDJELElBQUFBLFFBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSDs7Ozs7Ozs7OztBQzdJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4Ly4vcGFnZXMvcG9rZW1vbi9baWRdLmpzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9tYWluLWNzcy9wb2tlLXBhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBlc3BlY2lmaWNhciBudW1lcm8gbWF4aW1vIGRlIHBva2Vtb25zIGRhIHBva2VkZXggcG9yIG9yZGVtIGNyZXNjZW50ZTpcclxudmFyIG1heFBva2VzID0gNjIwO1xyXG52YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKCB7IHBva2Vtb24sIHBva2Vtb25TcGVjaWVzIH0gKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuXHJcbiAgICAvLyBwb2tlIHN0YXRzOlxyXG4gICAgdmFyIGhwX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzBdLmJhc2Vfc3RhdCxcclxuICAgIGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1sxXS5iYXNlX3N0YXQsXHJcbiAgICBkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbMl0uYmFzZV9zdGF0LFxyXG4gICAgc3BhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbM10uYmFzZV9zdGF0LFxyXG4gICAgc3BkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbNF0uYmFzZV9zdGF0LFxyXG4gICAgc3BlZWRfc3RhdCA9IHBva2Vtb24uc3RhdHNbNV0uYmFzZV9zdGF0O1xyXG5cclxuICAgIC8vIGJhY2svZm9yd2FyZCBuYXZcclxuICAgIHZhciBwb2tlSW5kZXggPSBwb2tlbW9uLmlkLFxyXG4gICAgcG9rZU5hdkJhY2sgPSBwb2tlSW5kZXggLSAxLFxyXG4gICAgcG9rZU5hdkZvcndhcmQgPSBwb2tlSW5kZXggKyAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrTmF2TGlua3MoKSB7XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICBwb2tlTmF2QmFjayA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBva2VJbmRleCA9PSBtYXhQb2tlcyl7XHJcbiAgICAgICAgICAgIHBva2VOYXZGb3J3YXJkID0gbWF4UG9rZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY2hlY2tOYXZMaW5rcygpO1xyXG5cclxuICAgIHBva2Vtb24udHlwZXMubWFwKCh0eXBlc0xpc3RJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVzTGlzdEl0ZW0udHlwZS5uYW1lID09ICdmYWlyeScpIHtcclxuICAgICAgICAgICAgdHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgPSAnbm9ybWFsJztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2luZm9fd3JhcHBlcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcF9uYXZfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9wb2tlbW9uLycrIHBva2VOYXZCYWNrfT5hbnRlcmlvcjwvYT4gfCA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkZvcndhcmR9PnByw7N4aW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBva2VfaW5mb19ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Bva2Vtb24uaWR9LiB7cG9rZW1vbi5uYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIiArIHBva2Vtb24ubmFtZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBva2VfdHlwZXNfd3JhcHBlclwiIGNsYXNzTmFtZT17c3R5bGVzLnBva2Vtb25fdHlwZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UeXBlOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLnR5cGVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0eXBlc0xpc3RJdGVtLnNsb3R9IGNsYXNzTmFtZT17J3R5cGVfJyArIHR5cGVzTGlzdEl0ZW0udHlwZS5uYW1lICsgJyBwb2tlX3R5cGUnfT57dHlwZXNMaXN0SXRlbS50eXBlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BYmlsaXRpZXM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24uYWJpbGl0aWVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0eXBlc0xpc3RJdGVtLmFiaWxpdHkubmFtZX0gY2xhc3NOYW1lPXsnYWJpbGl0eV90ZXh0ICcrJ2lzX2hpZGRlbl8nICsgdHlwZXNMaXN0SXRlbS5pc19oaWRkZW59Pnt0eXBlc0xpc3RJdGVtLmFiaWxpdHkubmFtZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZ2cgZ3JvdXBzOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uU3BlY2llcy5lZ2dfZ3JvdXBzLm1hcCgoZWdnX2dyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2VnZ19ncm91cC5uYW1lfSBjbGFzc05hbWU9eydhYmlsaXR5X3RleHQnfT57ZWdnX2dyb3VwLm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2Vfc3RhdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Ub3RhbCBzdGF0czogPHNwYW4+e2hwX3N0YXQgKyBhdGtfc3RhdCArIGRlZl9zdGF0ICsgc3BhdGtfc3RhdCArIHNwZGVmX3N0YXQgKyBzcGVlZF9zdGF0fTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkhQOjwvc3Bhbj4gPHNwYW4+e2hwX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGhwX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5BVEs6PC9zcGFuPiA8c3Bhbj57YXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+REVGOjwvc3Bhbj4gPHNwYW4+e2RlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0FUSzo8L3NwYW4+IDxzcGFuPntzcGF0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfREVGOjwvc3Bhbj4gPHNwYW4+e3NwZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUEVFRDo8L3NwYW4+IDxzcGFuPntzcGVlZF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGVlZF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPk1vdmVzOiA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLm1vdmVzLm1hcCgobW92ZU5vZGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXttb3ZlTm9kZS5tb3ZlLm5hbWV9IGNsYXNzTmFtZT17J2FiaWxpdHlfdGV4dCBtb3ZlX2JveCAnICsgJ3ZlcnNpb25fZ3JvdXBfJyArIHBhcnNlSW50KCBtb3ZlTm9kZS52ZXJzaW9uX2dyb3VwX2RldGFpbHNbMF0udmVyc2lvbl9ncm91cC51cmxbNDBdICsgIG1vdmVOb2RlLnZlcnNpb25fZ3JvdXBfZGV0YWlsc1swXS52ZXJzaW9uX2dyb3VwLnVybFs0MV0gKSB9Pnttb3ZlTm9kZS5tb3ZlLm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycrcGFyYW1zLmlkKVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG8gcG9rZW1vbi4nKVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG87XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBva2Vtb25TcGVjaWVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1zcGVjaWVzLycrcGFyYW1zLmlkKVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG9zIGRhZG9zIHBva2Vtb25TcGVjaWVzLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uLFxyXG4gICAgICAgICAgICBwb2tlbW9uU3BlY2llcyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG1heFBva2VzIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9rZV9pbmZvX3dyYXBwZXJcIjogXCJwb2tlLXBhZ2VfcG9rZV9pbmZvX3dyYXBwZXJfXzNwdkRQXCIsXG5cdFwicG9rZV9zdGF0c1wiOiBcInBva2UtcGFnZV9wb2tlX3N0YXRzX18ycUlWWlwiLFxuXHRcInN0YXRzX2JhclwiOiBcInBva2UtcGFnZV9zdGF0c19iYXJfXzFZVDlBXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwibWF4UG9rZXMiLCJwb2tlVW5pY29QYXRocyIsIlBva2Vtb24iLCJwb2tlbW9uIiwicG9rZW1vblNwZWNpZXMiLCJjb25zb2xlIiwibG9nIiwiaHBfc3RhdCIsInN0YXRzIiwiYmFzZV9zdGF0IiwiYXRrX3N0YXQiLCJkZWZfc3RhdCIsInNwYXRrX3N0YXQiLCJzcGRlZl9zdGF0Iiwic3BlZWRfc3RhdCIsInBva2VJbmRleCIsImlkIiwicG9rZU5hdkJhY2siLCJwb2tlTmF2Rm9yd2FyZCIsImNoZWNrTmF2TGlua3MiLCJ0eXBlcyIsIm1hcCIsInR5cGVzTGlzdEl0ZW0iLCJ0eXBlIiwibmFtZSIsInBva2VfaW5mb193cmFwcGVyIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJwb2tlbW9uX3R5cGVzIiwic2xvdCIsImFiaWxpdGllcyIsImlzX2hpZGRlbiIsImFiaWxpdHkiLCJlZ2dfZ3JvdXBzIiwiZWdnX2dyb3VwIiwicG9rZV9zdGF0cyIsInN0YXRzX2JhciIsIndpZHRoIiwibW92ZXMiLCJtb3ZlTm9kZSIsInBhcnNlSW50IiwidmVyc2lvbl9ncm91cF9kZXRhaWxzIiwidmVyc2lvbl9ncm91cCIsInVybCIsIm1vdmUiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2ZXIiLCJvayIsImpzb24iLCJFcnJvciIsInJlc3Bvc3RhRW1PYmpldG8iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiaSIsInB1c2giLCJ0b1N0cmluZyIsInBhdGhzIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9