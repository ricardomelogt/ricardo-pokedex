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
          children: "Tipo: "
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
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUFBO0FBQUYsQ0FBOUIsRUFBMEM7QUFDN0MsUUFBTTdCLE9BQU8sR0FBRyxNQUFNOEIsS0FBSyxDQUFDLHVDQUFxQ0QsTUFBTSxDQUFDakIsRUFBN0MsQ0FBTCxDQUNyQm1CLElBRHFCLENBQ2ZDLGdCQUFELElBQXNCO0FBQ3hCLFFBQUdBLGdCQUFnQixDQUFDQyxFQUFwQixFQUF3QjtBQUNwQixhQUFPRCxnQkFBZ0IsQ0FBQ0UsSUFBakIsRUFBUDtBQUNIOztBQUVELFVBQU0sSUFBSUMsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDSCxHQVBxQixFQVFyQkosSUFScUIsQ0FRZkssZ0JBQUQsSUFBc0I7QUFDeEIsV0FBT0EsZ0JBQVA7QUFDSCxHQVZxQixDQUF0QjtBQVlBLFNBQU87QUFDSEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hyQyxNQUFBQTtBQURHO0FBREosR0FBUDtBQUtIO0FBRU0sZUFBZXNDLGNBQWYsR0FBZ0M7QUFDbkMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFpQkEsQ0FBQyxHQUFHMUMsUUFBckIsRUFBZ0MwQyxDQUFDLEVBQWpDLEVBQXNDO0FBQ2xDekMsSUFBQUEsY0FBYyxDQUFDMEMsSUFBZixDQUFxQjtBQUFDWCxNQUFBQSxNQUFNLEVBQUM7QUFBQ2pCLFFBQUFBLEVBQUUsRUFBQyxDQUFDMkIsQ0FBQyxHQUFDLENBQUgsRUFBTUUsUUFBTjtBQUFKO0FBQVIsS0FBckI7QUFDSDs7QUFFRCxTQUFPO0FBQ0hDLElBQUFBLEtBQUssRUFBRTVDLGNBREo7QUFFSDZDLElBQUFBLFFBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSDs7Ozs7Ozs7OztBQzFGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4Ly4vcGFnZXMvcG9rZW1vbi9baWRdLmpzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC8uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovL3JpY2FyZG8tcG9rZWRleC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmljYXJkby1wb2tlZGV4L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9tYWluLWNzcy9wb2tlLXBhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBlc3BlY2lmaWNhciBudW1lcm8gbWF4aW1vIGRlIHBva2Vtb25zIGRhIHBva2VkZXggcG9yIG9yZGVtIGNyZXNjZW50ZTpcclxudmFyIG1heFBva2VzID0gNjIwO1xyXG52YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKCB7IHBva2Vtb24gfSApIHtcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb24pO1xyXG5cclxuICAgIC8vIHBva2Ugc3RhdHM6XHJcbiAgICB2YXIgaHBfc3RhdCA9IHBva2Vtb24uc3RhdHNbMF0uYmFzZV9zdGF0LFxyXG4gICAgYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzFdLmJhc2Vfc3RhdCxcclxuICAgIGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1syXS5iYXNlX3N0YXQsXHJcbiAgICBzcGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1szXS5iYXNlX3N0YXQsXHJcbiAgICBzcGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1s0XS5iYXNlX3N0YXQsXHJcbiAgICBzcGVlZF9zdGF0ID0gcG9rZW1vbi5zdGF0c1s1XS5iYXNlX3N0YXQ7XHJcblxyXG4gICAgLy8gYmFjay9mb3J3YXJkIG5hdlxyXG4gICAgdmFyIHBva2VJbmRleCA9IHBva2Vtb24uaWQsXHJcbiAgICBwb2tlTmF2QmFjayA9IHBva2VJbmRleCAtIDEsXHJcbiAgICBwb2tlTmF2Rm9yd2FyZCA9IHBva2VJbmRleCArIDE7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tOYXZMaW5rcygpIHtcclxuICAgICAgICBpZihwb2tlSW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIHBva2VOYXZCYWNrID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IG1heFBva2VzKXtcclxuICAgICAgICAgICAgcG9rZU5hdkZvcndhcmQgPSBtYXhQb2tlcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja05hdkxpbmtzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9pbmZvX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9wb2tlbW9uLycrIHBva2VOYXZCYWNrfT5hbnRlcmlvcjwvYT4gfCA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkZvcndhcmR9PnByw7N4aW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9e1wiSW1hZ2VtIGRlIHVtIFwiICsgcG9rZW1vbi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBva2VfdHlwZXNfd3JhcHBlclwiIGNsYXNzTmFtZT17c3R5bGVzLnBva2Vtb25fdHlwZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlRpcG86IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi50eXBlcy5tYXAoKHR5cGVzTGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0eXBlc0xpc3RJdGVtLnR5cGUubmFtZX0gY2xhc3NOYW1lPXsndHlwZV8nICsgdHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgKyAnIHBva2VfdHlwZSd9Pnt0eXBlc0xpc3RJdGVtLnR5cGUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9zdGF0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnN0YXRzOiA8c3Bhbj57aHBfc3RhdCArIGF0a19zdGF0ICsgZGVmX3N0YXQgKyBzcGF0a19zdGF0ICsgc3BkZWZfc3RhdCArIHNwZWVkX3N0YXR9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+SFA6PC9zcGFuPiA8c3Bhbj57aHBfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogaHBfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkFUSzo8L3NwYW4+IDxzcGFuPnthdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5ERUY6PC9zcGFuPiA8c3Bhbj57ZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfQVRLOjwvc3Bhbj4gPHNwYW4+e3NwYXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9ERUY6PC9zcGFuPiA8c3Bhbj57c3BkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQRUVEOjwvc3Bhbj4gPHNwYW4+e3NwZWVkX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZWVkX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgbyBwb2tlbW9uLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBtYXhQb2tlcyA7IGkrKyApIHtcclxuICAgICAgICBwb2tlVW5pY29QYXRocy5wdXNoKCB7cGFyYW1zOntpZDooaSsxKS50b1N0cmluZygpLH19ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZVVuaWNvUGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBva2VfaW5mb193cmFwcGVyXCI6IFwicG9rZS1wYWdlX3Bva2VfaW5mb193cmFwcGVyX18zcHZEUFwiLFxuXHRcInBva2Vfc3RhdHNcIjogXCJwb2tlLXBhZ2VfcG9rZV9zdGF0c19fMnFJVlpcIixcblx0XCJzdGF0c19iYXJcIjogXCJwb2tlLXBhZ2Vfc3RhdHNfYmFyX18xWVQ5QVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIm1heFBva2VzIiwicG9rZVVuaWNvUGF0aHMiLCJQb2tlbW9uIiwicG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciLCJocF9zdGF0Iiwic3RhdHMiLCJiYXNlX3N0YXQiLCJhdGtfc3RhdCIsImRlZl9zdGF0Iiwic3BhdGtfc3RhdCIsInNwZGVmX3N0YXQiLCJzcGVlZF9zdGF0IiwicG9rZUluZGV4IiwiaWQiLCJwb2tlTmF2QmFjayIsInBva2VOYXZGb3J3YXJkIiwiY2hlY2tOYXZMaW5rcyIsInBva2VfaW5mb193cmFwcGVyIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwicG9rZW1vbl90eXBlcyIsInR5cGVzIiwibWFwIiwidHlwZXNMaXN0SXRlbSIsInR5cGUiLCJwb2tlX3N0YXRzIiwic3RhdHNfYmFyIiwid2lkdGgiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2ZXIiLCJvayIsImpzb24iLCJFcnJvciIsInJlc3Bvc3RhRW1PYmpldG8iLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiaSIsInB1c2giLCJ0b1N0cmluZyIsInBhdGhzIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9