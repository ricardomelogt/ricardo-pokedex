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
        lineNumber: 46,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + pokeNavForward,
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 67
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um " + pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "poke_types_wrapper",
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Type: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), pokemon.types.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'type_' + typesListItem.type.name + ' poke_type',
            children: typesListItem.type.name
          }, typesListItem.slot, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Abilities: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), pokemon.abilities.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text ' + 'is_hidden_' + typesListItem.is_hidden,
            children: [typesListItem.ability.name, " "]
          }, typesListItem.ability.name, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Egg groups: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), pokemonSpecies.egg_groups.map(function (egg_group) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text',
            children: [egg_group.name, " "]
          }, egg_group.name, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Total stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
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
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
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
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
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
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
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
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Moves: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content_box",
        children: pokemon.moves.map(function (moveNode) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text move_box ' + 'version_group_' + parseInt(moveNode.version_group_details[0].version_group.url[40] + moveNode.version_group_details[0].version_group.url[41]),
            children: [moveNode.move.name, " "]
          }, moveNode.move.name, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjgyOWM3MWFmZDE1OWYyYzFlMDBhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQUlFLFFBQVEsR0FBRyxHQUFmO0FBQ3dCOztBQUVULFNBQVNDLE9BQVQsT0FBZ0Q7QUFBQTs7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLGNBQW1CLFFBQW5CQSxjQUFtQjtBQUMzREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVosRUFEMkQsQ0FHM0Q7O0FBQ0EsTUFBSUksT0FBTyxHQUFHSixPQUFPLENBQUNLLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUEvQjtBQUFBLE1BQ0FDLFFBQVEsR0FBR1AsT0FBTyxDQUFDSyxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FENUI7QUFBQSxNQUVBRSxRQUFRLEdBQUdSLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBRjVCO0FBQUEsTUFHQUcsVUFBVSxHQUFHVCxPQUFPLENBQUNLLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUg5QjtBQUFBLE1BSUFJLFVBQVUsR0FBR1YsT0FBTyxDQUFDSyxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FKOUI7QUFBQSxNQUtBSyxVQUFVLEdBQUdYLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBTDlCLENBSjJELENBVzNEOztBQUNBLE1BQUlNLFNBQVMsR0FBR1osT0FBTyxDQUFDYSxFQUF4QjtBQUFBLE1BQ0FDLFdBQVcsR0FBR0YsU0FBUyxHQUFHLENBRDFCO0FBQUEsTUFFQUcsY0FBYyxHQUFHSCxTQUFTLEdBQUcsQ0FGN0I7O0FBSUEsV0FBU0ksYUFBVCxHQUF5QjtBQUNyQixRQUFHSixTQUFTLElBQUksQ0FBaEIsRUFBa0I7QUFDZEUsTUFBQUEsV0FBVyxHQUFHLENBQWQ7QUFDSDs7QUFD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Q0FBQ21DLEtBQVIsQ0FBY2pCLEdBQWQsQ0FBa0IsVUFBQ2tCLFFBQUQ7QUFBQSw4QkFDZjtBQUErQixxQkFBUyxFQUFFLDJCQUEyQixnQkFBM0IsR0FBOENDLFFBQVEsQ0FBRUQsUUFBUSxDQUFDRSxxQkFBVCxDQUErQixDQUEvQixFQUFrQ0MsYUFBbEMsQ0FBZ0RDLEdBQWhELENBQW9ELEVBQXBELElBQTJESixRQUFRLENBQUNFLHFCQUFULENBQStCLENBQS9CLEVBQWtDQyxhQUFsQyxDQUFnREMsR0FBaEQsQ0FBb0QsRUFBcEQsQ0FBN0QsQ0FBaEc7QUFBQSx1QkFBME5KLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjcEIsSUFBeE87QUFBQSxhQUFXZSxRQUFRLENBQUNLLElBQVQsQ0FBY3BCLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0RIO0tBdEZ1QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzJztcclxuXHJcbi8vIGVzcGVjaWZpY2FyIG51bWVybyBtYXhpbW8gZGUgcG9rZW1vbnMgZGEgcG9rZWRleCBwb3Igb3JkZW0gY3Jlc2NlbnRlOlxyXG52YXIgbWF4UG9rZXMgPSA2MjA7XHJcbnZhciBwb2tlVW5pY29QYXRocyA9IFtdIC8ve3BhcmFtczp7aWQ6JzEnLH19LHtwYXJhbXM6e2lkOicyJyx9fSxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oIHsgcG9rZW1vbiwgcG9rZW1vblNwZWNpZXMgfSApIHtcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb24pO1xyXG5cclxuICAgIC8vIHBva2Ugc3RhdHM6XHJcbiAgICB2YXIgaHBfc3RhdCA9IHBva2Vtb24uc3RhdHNbMF0uYmFzZV9zdGF0LFxyXG4gICAgYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzFdLmJhc2Vfc3RhdCxcclxuICAgIGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1syXS5iYXNlX3N0YXQsXHJcbiAgICBzcGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1szXS5iYXNlX3N0YXQsXHJcbiAgICBzcGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1s0XS5iYXNlX3N0YXQsXHJcbiAgICBzcGVlZF9zdGF0ID0gcG9rZW1vbi5zdGF0c1s1XS5iYXNlX3N0YXQ7XHJcblxyXG4gICAgLy8gYmFjay9mb3J3YXJkIG5hdlxyXG4gICAgdmFyIHBva2VJbmRleCA9IHBva2Vtb24uaWQsXHJcbiAgICBwb2tlTmF2QmFjayA9IHBva2VJbmRleCAtIDEsXHJcbiAgICBwb2tlTmF2Rm9yd2FyZCA9IHBva2VJbmRleCArIDE7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tOYXZMaW5rcygpIHtcclxuICAgICAgICBpZihwb2tlSW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIHBva2VOYXZCYWNrID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IG1heFBva2VzKXtcclxuICAgICAgICAgICAgcG9rZU5hdkZvcndhcmQgPSBtYXhQb2tlcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja05hdkxpbmtzKCk7XHJcblxyXG4gICAgcG9rZW1vbi50eXBlcy5tYXAoKHR5cGVzTGlzdEl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgPT0gJ2ZhaXJ5Jykge1xyXG4gICAgICAgICAgICB0eXBlc0xpc3RJdGVtLnR5cGUubmFtZSA9ICdub3JtYWwnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2VfaW5mb193cmFwcGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkJhY2t9PmFudGVyaW9yPC9hPiB8IDxhIGhyZWY9eycvcG9rZW1vbi8nKyBwb2tlTmF2Rm9yd2FyZH0+cHLDs3hpbW88L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIiArIHBva2Vtb24ubmFtZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9rZV90eXBlc193cmFwcGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMucG9rZW1vbl90eXBlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VHlwZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLnR5cGVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3R5cGVzTGlzdEl0ZW0uc2xvdH0gY2xhc3NOYW1lPXsndHlwZV8nICsgdHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgKyAnIHBva2VfdHlwZSd9Pnt0eXBlc0xpc3RJdGVtLnR5cGUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWJpbGl0aWVzOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24uYWJpbGl0aWVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3R5cGVzTGlzdEl0ZW0uYWJpbGl0eS5uYW1lfSBjbGFzc05hbWU9eydhYmlsaXR5X3RleHQgJysnaXNfaGlkZGVuXycgKyB0eXBlc0xpc3RJdGVtLmlzX2hpZGRlbn0+e3R5cGVzTGlzdEl0ZW0uYWJpbGl0eS5uYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RWdnIGdyb3VwczogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uU3BlY2llcy5lZ2dfZ3JvdXBzLm1hcCgoZWdnX2dyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17ZWdnX2dyb3VwLm5hbWV9IGNsYXNzTmFtZT17J2FiaWxpdHlfdGV4dCd9PntlZ2dfZ3JvdXAubmFtZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX3N0YXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VG90YWwgc3RhdHM6IDxzcGFuPntocF9zdGF0ICsgYXRrX3N0YXQgKyBkZWZfc3RhdCArIHNwYXRrX3N0YXQgKyBzcGRlZl9zdGF0ICsgc3BlZWRfc3RhdH08L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5IUDo8L3NwYW4+IDxzcGFuPntocF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBocF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+QVRLOjwvc3Bhbj4gPHNwYW4+e2F0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkRFRjo8L3NwYW4+IDxzcGFuPntkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9BVEs6PC9zcGFuPiA8c3Bhbj57c3BhdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0RFRjo8L3NwYW4+IDxzcGFuPntzcGRlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BFRUQ6PC9zcGFuPiA8c3Bhbj57c3BlZWRfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BlZWRfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzPk1vdmVzOiA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLm1vdmVzLm1hcCgobW92ZU5vZGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXttb3ZlTm9kZS5tb3ZlLm5hbWV9IGNsYXNzTmFtZT17J2FiaWxpdHlfdGV4dCBtb3ZlX2JveCAnICsgJ3ZlcnNpb25fZ3JvdXBfJyArIHBhcnNlSW50KCBtb3ZlTm9kZS52ZXJzaW9uX2dyb3VwX2RldGFpbHNbMF0udmVyc2lvbl9ncm91cC51cmxbNDBdICsgIG1vdmVOb2RlLnZlcnNpb25fZ3JvdXBfZGV0YWlsc1swXS52ZXJzaW9uX2dyb3VwLnVybFs0MV0gKSB9Pnttb3ZlTm9kZS5tb3ZlLm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycrcGFyYW1zLmlkKVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG8gcG9rZW1vbi4nKVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG87XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBva2Vtb25TcGVjaWVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1zcGVjaWVzLycrcGFyYW1zLmlkKVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG9zIGRhZG9zIHBva2Vtb25TcGVjaWVzLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uLFxyXG4gICAgICAgICAgICBwb2tlbW9uU3BlY2llcyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG1heFBva2VzIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwibWF4UG9rZXMiLCJQb2tlbW9uIiwicG9rZW1vbiIsInBva2Vtb25TcGVjaWVzIiwiY29uc29sZSIsImxvZyIsImhwX3N0YXQiLCJzdGF0cyIsImJhc2Vfc3RhdCIsImF0a19zdGF0IiwiZGVmX3N0YXQiLCJzcGF0a19zdGF0Iiwic3BkZWZfc3RhdCIsInNwZWVkX3N0YXQiLCJwb2tlSW5kZXgiLCJpZCIsInBva2VOYXZCYWNrIiwicG9rZU5hdkZvcndhcmQiLCJjaGVja05hdkxpbmtzIiwidHlwZXMiLCJtYXAiLCJ0eXBlc0xpc3RJdGVtIiwidHlwZSIsIm5hbWUiLCJwb2tlX2luZm9fd3JhcHBlciIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwicG9rZW1vbl90eXBlcyIsInNsb3QiLCJhYmlsaXRpZXMiLCJpc19oaWRkZW4iLCJhYmlsaXR5IiwiZWdnX2dyb3VwcyIsImVnZ19ncm91cCIsInBva2Vfc3RhdHMiLCJzdGF0c19iYXIiLCJ3aWR0aCIsIm1vdmVzIiwibW92ZU5vZGUiLCJwYXJzZUludCIsInZlcnNpb25fZ3JvdXBfZGV0YWlscyIsInZlcnNpb25fZ3JvdXAiLCJ1cmwiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==