"use strict";
self["webpackHotUpdate_N_E"]("pages/pokemon/[id]",{

/***/ "./pages/pokemon/[id].js":
/*!*******************************!*\
  !*** ./pages/pokemon/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Pokemon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main-css/poke-page.module.css */ "./main-css/poke-page.module.css");
/* harmony import */ var _main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\code-work\\ricardo-pokedex\\pages\\pokemon\\[id].js";

 // especificar numero maximo de pokemons da pokedex por ordem crescente:

var maxPokes = 620;
//{params:{id:'1',}},{params:{id:'2',}},
var __N_SSG = true;
function Pokemon(_ref) {
  var _this = this;

  var pokemon = _ref.pokemon,
      pokemonSpecies = _ref.pokemonSpecies;
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
  pokemon.types.map(function (typesListItem) {
    if (typesListItem.type.name == 'fairy') {
      typesListItem.type.name = 'normal';
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_info_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + pokeNavBack,
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + pokeNavForward,
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 67
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um " + pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "poke_types_wrapper",
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Type: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), pokemon.types.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'type_' + typesListItem.type.name + ' poke_type',
            children: typesListItem.type.name
          }, typesListItem.type.name, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Abilities: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), pokemon.abilities.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text ' + 'is_hidden_' + typesListItem.is_hidden,
            children: [typesListItem.ability.name, " "]
          }, typesListItem.ability.name, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Egg groups: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), pokemonSpecies.egg_groups.map(function (egg_group) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text ' + ' move_box',
            children: [egg_group.name, " "]
          }, egg_group.name, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Total stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Moves: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), pokemon.moves.map(function (moveNode) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text',
            children: [moveNode.move.name, " "]
          }, moveNode.move.name, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}
_c = Pokemon;

var _c;

$RefreshReg$(_c, "Pokemon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjE5NzRmYzRlNTgzNWY2MTU5M2I4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQUlFLFFBQVEsR0FBRyxHQUFmO0FBQ3dCOztBQUVULFNBQVNDLE9BQVQsT0FBZ0Q7QUFBQTs7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLGNBQW1CLFFBQW5CQSxjQUFtQjtBQUMzREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVosRUFEMkQsQ0FHM0Q7O0FBQ0EsTUFBSUksT0FBTyxHQUFHSixPQUFPLENBQUNLLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUEvQjtBQUFBLE1BQ0FDLFFBQVEsR0FBR1AsT0FBTyxDQUFDSyxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FENUI7QUFBQSxNQUVBRSxRQUFRLEdBQUdSLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBRjVCO0FBQUEsTUFHQUcsVUFBVSxHQUFHVCxPQUFPLENBQUNLLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUg5QjtBQUFBLE1BSUFJLFVBQVUsR0FBR1YsT0FBTyxDQUFDSyxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FKOUI7QUFBQSxNQUtBSyxVQUFVLEdBQUdYLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBTDlCLENBSjJELENBVzNEOztBQUNBLE1BQUlNLFNBQVMsR0FBR1osT0FBTyxDQUFDYSxFQUF4QjtBQUFBLE1BQ0FDLFdBQVcsR0FBR0YsU0FBUyxHQUFHLENBRDFCO0FBQUEsTUFFQUcsY0FBYyxHQUFHSCxTQUFTLEdBQUcsQ0FGN0I7O0FBSUEsV0FBU0ksYUFBVCxHQUF5QjtBQUNyQixRQUFHSixTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDZEUsTUFBQUEsV0FBVyxHQUFHLENBQWQ7QUFDSDs7QUFD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LGdCQURKLEVBRUtYLE9BQU8sQ0FBQ2tDLEtBQVIsQ0FBY2hCLEdBQWQsQ0FBa0IsVUFBQ2lCLFFBQUQ7QUFBQSw4QkFDZjtBQUErQixxQkFBUyxFQUFFLGNBQTFDO0FBQUEsdUJBQTJEQSxRQUFRLENBQUNDLElBQVQsQ0FBY2YsSUFBekU7QUFBQSxhQUFXYyxRQUFRLENBQUNDLElBQVQsQ0FBY2YsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWxCLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9ESDtLQXJGdUJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb2tlbW9uL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9tYWluLWNzcy9wb2tlLXBhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBlc3BlY2lmaWNhciBudW1lcm8gbWF4aW1vIGRlIHBva2Vtb25zIGRhIHBva2VkZXggcG9yIG9yZGVtIGNyZXNjZW50ZTpcclxudmFyIG1heFBva2VzID0gNjIwO1xyXG52YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKCB7IHBva2Vtb24sIHBva2Vtb25TcGVjaWVzIH0gKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuXHJcbiAgICAvLyBwb2tlIHN0YXRzOlxyXG4gICAgdmFyIGhwX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzBdLmJhc2Vfc3RhdCxcclxuICAgIGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1sxXS5iYXNlX3N0YXQsXHJcbiAgICBkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbMl0uYmFzZV9zdGF0LFxyXG4gICAgc3BhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbM10uYmFzZV9zdGF0LFxyXG4gICAgc3BkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbNF0uYmFzZV9zdGF0LFxyXG4gICAgc3BlZWRfc3RhdCA9IHBva2Vtb24uc3RhdHNbNV0uYmFzZV9zdGF0O1xyXG5cclxuICAgIC8vIGJhY2svZm9yd2FyZCBuYXZcclxuICAgIHZhciBwb2tlSW5kZXggPSBwb2tlbW9uLmlkLFxyXG4gICAgcG9rZU5hdkJhY2sgPSBwb2tlSW5kZXggLSAxLFxyXG4gICAgcG9rZU5hdkZvcndhcmQgPSBwb2tlSW5kZXggKyAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrTmF2TGlua3MoKSB7XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICBwb2tlTmF2QmFjayA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBva2VJbmRleCA9PSBtYXhQb2tlcyl7XHJcbiAgICAgICAgICAgIHBva2VOYXZGb3J3YXJkID0gbWF4UG9rZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY2hlY2tOYXZMaW5rcygpO1xyXG5cclxuICAgIHBva2Vtb24udHlwZXMubWFwKCh0eXBlc0xpc3RJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVzTGlzdEl0ZW0udHlwZS5uYW1lID09ICdmYWlyeScpIHtcclxuICAgICAgICAgICAgdHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgPSAnbm9ybWFsJztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2VfaW5mb193cmFwcGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkJhY2t9PmFudGVyaW9yPC9hPiB8IDxhIGhyZWY9eycvcG9rZW1vbi8nKyBwb2tlTmF2Rm9yd2FyZH0+cHLDs3hpbW88L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIiArIHBva2Vtb24ubmFtZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9rZV90eXBlc193cmFwcGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMucG9rZW1vbl90eXBlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VHlwZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLnR5cGVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3R5cGVzTGlzdEl0ZW0udHlwZS5uYW1lfSBjbGFzc05hbWU9eyd0eXBlXycgKyB0eXBlc0xpc3RJdGVtLnR5cGUubmFtZSArICcgcG9rZV90eXBlJ30+e3R5cGVzTGlzdEl0ZW0udHlwZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BYmlsaXRpZXM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5hYmlsaXRpZXMubWFwKCh0eXBlc0xpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IGNsYXNzTmFtZT17J2FiaWxpdHlfdGV4dCAnKydpc19oaWRkZW5fJyArIHR5cGVzTGlzdEl0ZW0uaXNfaGlkZGVufT57dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZ2cgZ3JvdXBzOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2Vtb25TcGVjaWVzLmVnZ19ncm91cHMubWFwKChlZ2dfZ3JvdXApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtlZ2dfZ3JvdXAubmFtZX0gY2xhc3NOYW1lPXsnYWJpbGl0eV90ZXh0ICcgKyAnIG1vdmVfYm94J30+e2VnZ19ncm91cC5uYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2Vfc3RhdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Ub3RhbCBzdGF0czogPHNwYW4+e2hwX3N0YXQgKyBhdGtfc3RhdCArIGRlZl9zdGF0ICsgc3BhdGtfc3RhdCArIHNwZGVmX3N0YXQgKyBzcGVlZF9zdGF0fTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkhQOjwvc3Bhbj4gPHNwYW4+e2hwX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGhwX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5BVEs6PC9zcGFuPiA8c3Bhbj57YXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+REVGOjwvc3Bhbj4gPHNwYW4+e2RlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0FUSzo8L3NwYW4+IDxzcGFuPntzcGF0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfREVGOjwvc3Bhbj4gPHNwYW4+e3NwZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUEVFRDo8L3NwYW4+IDxzcGFuPntzcGVlZF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGVlZF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW92ZXM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5tb3Zlcy5tYXAoKG1vdmVOb2RlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17bW92ZU5vZGUubW92ZS5uYW1lfSBjbGFzc05hbWU9eydhYmlsaXR5X3RleHQnfT57bW92ZU5vZGUubW92ZS5uYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8nK3BhcmFtcy5pZClcclxuICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvIHBva2Vtb24uJylcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb3N0YUVtT2JqZXRvO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwb2tlbW9uU3BlY2llcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tc3BlY2llcy8nK3BhcmFtcy5pZClcclxuICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvcyBkYWRvcyBwb2tlbW9uU3BlY2llcy4nKVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG87XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9rZW1vbixcclxuICAgICAgICAgICAgcG9rZW1vblNwZWNpZXMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBtYXhQb2tlcyA7IGkrKyApIHtcclxuICAgICAgICBwb2tlVW5pY29QYXRocy5wdXNoKCB7cGFyYW1zOntpZDooaSsxKS50b1N0cmluZygpLH19ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZVVuaWNvUGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIm1heFBva2VzIiwiUG9rZW1vbiIsInBva2Vtb24iLCJwb2tlbW9uU3BlY2llcyIsImNvbnNvbGUiLCJsb2ciLCJocF9zdGF0Iiwic3RhdHMiLCJiYXNlX3N0YXQiLCJhdGtfc3RhdCIsImRlZl9zdGF0Iiwic3BhdGtfc3RhdCIsInNwZGVmX3N0YXQiLCJzcGVlZF9zdGF0IiwicG9rZUluZGV4IiwiaWQiLCJwb2tlTmF2QmFjayIsInBva2VOYXZGb3J3YXJkIiwiY2hlY2tOYXZMaW5rcyIsInR5cGVzIiwibWFwIiwidHlwZXNMaXN0SXRlbSIsInR5cGUiLCJuYW1lIiwicG9rZV9pbmZvX3dyYXBwZXIiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInBva2Vtb25fdHlwZXMiLCJhYmlsaXRpZXMiLCJpc19oaWRkZW4iLCJhYmlsaXR5IiwiZWdnX2dyb3VwcyIsImVnZ19ncm91cCIsInBva2Vfc3RhdHMiLCJzdGF0c19iYXIiLCJ3aWR0aCIsIm1vdmVzIiwibW92ZU5vZGUiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==