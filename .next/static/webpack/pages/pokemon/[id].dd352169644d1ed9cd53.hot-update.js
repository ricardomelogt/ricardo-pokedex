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
  var moveGeneration;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_info_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + pokeNavBack,
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + pokeNavForward,
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 67
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um " + pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "poke_types_wrapper",
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Type: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), pokemon.types.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'type_' + typesListItem.type.name + ' poke_type',
            children: typesListItem.type.name
          }, typesListItem.type.name, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Abilities: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), pokemon.abilities.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text ' + 'is_hidden_' + typesListItem.is_hidden,
            children: [typesListItem.ability.name, " "]
          }, typesListItem.ability.name, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Egg groups: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), pokemonSpecies.egg_groups.map(function (egg_group) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text',
            children: [egg_group.name, " "]
          }, egg_group.name, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Total stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Moves: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: pokemon.moves.map(function (moveNode) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text move_box',
            children: [moveNode.move.name, " "]
          }, moveNode.move.name, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLmRkMzUyMTY5NjQ0ZDFlZDljZDUzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQUlFLFFBQVEsR0FBRyxHQUFmO0FBQ3dCOztBQUVULFNBQVNDLE9BQVQsT0FBZ0Q7QUFBQTs7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLGNBQW1CLFFBQW5CQSxjQUFtQjtBQUMzREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVosRUFEMkQsQ0FHM0Q7O0FBQ0EsTUFBSUksT0FBTyxHQUFHSixPQUFPLENBQUNLLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUEvQjtBQUFBLE1BQ0FDLFFBQVEsR0FBR1AsT0FBTyxDQUFDSyxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FENUI7QUFBQSxNQUVBRSxRQUFRLEdBQUdSLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBRjVCO0FBQUEsTUFHQUcsVUFBVSxHQUFHVCxPQUFPLENBQUNLLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUg5QjtBQUFBLE1BSUFJLFVBQVUsR0FBR1YsT0FBTyxDQUFDSyxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FKOUI7QUFBQSxNQUtBSyxVQUFVLEdBQUdYLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBTDlCLENBSjJELENBVzNEOztBQUNBLE1BQUlNLFNBQVMsR0FBR1osT0FBTyxDQUFDYSxFQUF4QjtBQUFBLE1BQ0FDLFdBQVcsR0FBR0YsU0FBUyxHQUFHLENBRDFCO0FBQUEsTUFFQUcsY0FBYyxHQUFHSCxTQUFTLEdBQUcsQ0FGN0I7O0FBSUEsV0FBU0ksYUFBVCxHQUF5QjtBQUNyQixRQUFHSixTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDZEUsTUFBQUEsV0FBVyxHQUFHLENBQWQ7QUFDSDs7QUFD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LEVBQUMsYUFBZjtBQUFBLGtCQUNLWCxPQUFPLENBQUNtQyxLQUFSLENBQWNqQixHQUFkLENBQWtCLFVBQUNrQixRQUFEO0FBQUEsOEJBQ2Y7QUFBK0IscUJBQVMsRUFBRSx1QkFBMUM7QUFBQSx1QkFBb0VBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjaEIsSUFBbEY7QUFBQSxhQUFXZSxRQUFRLENBQUNDLElBQVQsQ0FBY2hCLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0RIO0tBdkZ1QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzJztcclxuXHJcbi8vIGVzcGVjaWZpY2FyIG51bWVybyBtYXhpbW8gZGUgcG9rZW1vbnMgZGEgcG9rZWRleCBwb3Igb3JkZW0gY3Jlc2NlbnRlOlxyXG52YXIgbWF4UG9rZXMgPSA2MjA7XHJcbnZhciBwb2tlVW5pY29QYXRocyA9IFtdIC8ve3BhcmFtczp7aWQ6JzEnLH19LHtwYXJhbXM6e2lkOicyJyx9fSxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oIHsgcG9rZW1vbiwgcG9rZW1vblNwZWNpZXMgfSApIHtcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb24pO1xyXG5cclxuICAgIC8vIHBva2Ugc3RhdHM6XHJcbiAgICB2YXIgaHBfc3RhdCA9IHBva2Vtb24uc3RhdHNbMF0uYmFzZV9zdGF0LFxyXG4gICAgYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzFdLmJhc2Vfc3RhdCxcclxuICAgIGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1syXS5iYXNlX3N0YXQsXHJcbiAgICBzcGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1szXS5iYXNlX3N0YXQsXHJcbiAgICBzcGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1s0XS5iYXNlX3N0YXQsXHJcbiAgICBzcGVlZF9zdGF0ID0gcG9rZW1vbi5zdGF0c1s1XS5iYXNlX3N0YXQ7XHJcblxyXG4gICAgLy8gYmFjay9mb3J3YXJkIG5hdlxyXG4gICAgdmFyIHBva2VJbmRleCA9IHBva2Vtb24uaWQsXHJcbiAgICBwb2tlTmF2QmFjayA9IHBva2VJbmRleCAtIDEsXHJcbiAgICBwb2tlTmF2Rm9yd2FyZCA9IHBva2VJbmRleCArIDE7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tOYXZMaW5rcygpIHtcclxuICAgICAgICBpZihwb2tlSW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIHBva2VOYXZCYWNrID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IG1heFBva2VzKXtcclxuICAgICAgICAgICAgcG9rZU5hdkZvcndhcmQgPSBtYXhQb2tlcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja05hdkxpbmtzKCk7XHJcblxyXG4gICAgcG9rZW1vbi50eXBlcy5tYXAoKHR5cGVzTGlzdEl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgPT0gJ2ZhaXJ5Jykge1xyXG4gICAgICAgICAgICB0eXBlc0xpc3RJdGVtLnR5cGUubmFtZSA9ICdub3JtYWwnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdmFyIG1vdmVHZW5lcmF0aW9uO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2VfaW5mb193cmFwcGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkJhY2t9PmFudGVyaW9yPC9hPiB8IDxhIGhyZWY9eycvcG9rZW1vbi8nKyBwb2tlTmF2Rm9yd2FyZH0+cHLDs3hpbW88L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIiArIHBva2Vtb24ubmFtZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9rZV90eXBlc193cmFwcGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMucG9rZW1vbl90eXBlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VHlwZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLnR5cGVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3R5cGVzTGlzdEl0ZW0udHlwZS5uYW1lfSBjbGFzc05hbWU9eyd0eXBlXycgKyB0eXBlc0xpc3RJdGVtLnR5cGUubmFtZSArICcgcG9rZV90eXBlJ30+e3R5cGVzTGlzdEl0ZW0udHlwZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BYmlsaXRpZXM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5hYmlsaXRpZXMubWFwKCh0eXBlc0xpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IGNsYXNzTmFtZT17J2FiaWxpdHlfdGV4dCAnKydpc19oaWRkZW5fJyArIHR5cGVzTGlzdEl0ZW0uaXNfaGlkZGVufT57dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZ2cgZ3JvdXBzOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2Vtb25TcGVjaWVzLmVnZ19ncm91cHMubWFwKChlZ2dfZ3JvdXApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtlZ2dfZ3JvdXAubmFtZX0gY2xhc3NOYW1lPXsnYWJpbGl0eV90ZXh0J30+e2VnZ19ncm91cC5uYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2Vfc3RhdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Ub3RhbCBzdGF0czogPHNwYW4+e2hwX3N0YXQgKyBhdGtfc3RhdCArIGRlZl9zdGF0ICsgc3BhdGtfc3RhdCArIHNwZGVmX3N0YXQgKyBzcGVlZF9zdGF0fTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkhQOjwvc3Bhbj4gPHNwYW4+e2hwX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGhwX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5BVEs6PC9zcGFuPiA8c3Bhbj57YXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+REVGOjwvc3Bhbj4gPHNwYW4+e2RlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0FUSzo8L3NwYW4+IDxzcGFuPntzcGF0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfREVGOjwvc3Bhbj4gPHNwYW4+e3NwZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUEVFRDo8L3NwYW4+IDxzcGFuPntzcGVlZF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGVlZF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDM+TW92ZXM6IDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24ubW92ZXMubWFwKChtb3ZlTm9kZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e21vdmVOb2RlLm1vdmUubmFtZX0gY2xhc3NOYW1lPXsnYWJpbGl0eV90ZXh0IG1vdmVfYm94J30+e21vdmVOb2RlLm1vdmUubmFtZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgbyBwb2tlbW9uLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcG9rZW1vblNwZWNpZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLXNwZWNpZXMvJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgb3MgZGFkb3MgcG9rZW1vblNwZWNpZXMuJylcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb3N0YUVtT2JqZXRvO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBva2Vtb24sXHJcbiAgICAgICAgICAgIHBva2Vtb25TcGVjaWVzLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbWF4UG9rZXMgOyBpKysgKSB7XHJcbiAgICAgICAgcG9rZVVuaWNvUGF0aHMucHVzaCgge3BhcmFtczp7aWQ6KGkrMSkudG9TdHJpbmcoKSx9fSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IHBva2VVbmljb1BhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJtYXhQb2tlcyIsIlBva2Vtb24iLCJwb2tlbW9uIiwicG9rZW1vblNwZWNpZXMiLCJjb25zb2xlIiwibG9nIiwiaHBfc3RhdCIsInN0YXRzIiwiYmFzZV9zdGF0IiwiYXRrX3N0YXQiLCJkZWZfc3RhdCIsInNwYXRrX3N0YXQiLCJzcGRlZl9zdGF0Iiwic3BlZWRfc3RhdCIsInBva2VJbmRleCIsImlkIiwicG9rZU5hdkJhY2siLCJwb2tlTmF2Rm9yd2FyZCIsImNoZWNrTmF2TGlua3MiLCJ0eXBlcyIsIm1hcCIsInR5cGVzTGlzdEl0ZW0iLCJ0eXBlIiwibmFtZSIsIm1vdmVHZW5lcmF0aW9uIiwicG9rZV9pbmZvX3dyYXBwZXIiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInBva2Vtb25fdHlwZXMiLCJhYmlsaXRpZXMiLCJpc19oaWRkZW4iLCJhYmlsaXR5IiwiZWdnX2dyb3VwcyIsImVnZ19ncm91cCIsInBva2Vfc3RhdHMiLCJzdGF0c19iYXIiLCJ3aWR0aCIsIm1vdmVzIiwibW92ZU5vZGUiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==