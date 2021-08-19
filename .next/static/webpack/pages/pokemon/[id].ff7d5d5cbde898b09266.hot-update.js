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

  var pokemon = _ref.pokemon;
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
        }, this), pokemon.types.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'type_' + typesListItem.type.name + ' poke_type',
            children: typesListItem.type.name
          }, typesListItem.type.name, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ability_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Abilities: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), pokemon.abilities.map(function (typesListItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: 'ability_text ' + 'is_hidden_' + typesListItem.is_hidden,
            children: [typesListItem.ability.name, " "]
          }, typesListItem.ability.name, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 32
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLmZmN2Q1ZDVjYmRlODk4YjA5MjY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQUlFLFFBQVEsR0FBRyxHQUFmO0FBQ3dCOztBQUVULFNBQVNDLE9BQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFDM0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBRDJDLENBRzNDOztBQUNBLE1BQUlHLE9BQU8sR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FBL0I7QUFBQSxNQUNBQyxRQUFRLEdBQUdOLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBRDVCO0FBQUEsTUFFQUUsUUFBUSxHQUFHUCxPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUY1QjtBQUFBLE1BR0FHLFVBQVUsR0FBR1IsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FIOUI7QUFBQSxNQUlBSSxVQUFVLEdBQUdULE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBSjlCO0FBQUEsTUFLQUssVUFBVSxHQUFHVixPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUw5QixDQUoyQyxDQVczQzs7QUFDQSxNQUFJTSxTQUFTLEdBQUdYLE9BQU8sQ0FBQ1ksRUFBeEI7QUFBQSxNQUNBQyxXQUFXLEdBQUdGLFNBQVMsR0FBRyxDQUQxQjtBQUFBLE1BRUFHLGNBQWMsR0FBR0gsU0FBUyxHQUFHLENBRjdCOztBQUlBLFdBQVNJLGFBQVQsR0FBeUI7QUFDckIsUUFBR0osU0FBUyxJQUFJLENBQWhCLEVBQWtCO0FBQ2RFLE1BQUFBLFdBQVcsR0FBRyxDQUFkO0FBQ0g7O0FBQ0QsUUFBR0YsU0FBUyxJQUFJYixRQUFoQixFQUF5QjtBQUNy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QU5KLGVBT0k7QUFBQSx1Q0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixvQkFBMEI7QUFBQSxzQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUExQixvQkFBb0Q7QUFBSyxxQkFBUyxFQUFFYixpRkFBaEI7QUFBa0MsaUJBQUssRUFBRTtBQUFFaUMsY0FBQUEsS0FBSyxFQUFFcEIsVUFBVSxHQUFHLENBQWIsR0FBaUI7QUFBMUI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErQkg7S0ExRHVCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb2tlbW9uL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9tYWluLWNzcy9wb2tlLXBhZ2UubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBlc3BlY2lmaWNhciBudW1lcm8gbWF4aW1vIGRlIHBva2Vtb25zIGRhIHBva2VkZXggcG9yIG9yZGVtIGNyZXNjZW50ZTpcclxudmFyIG1heFBva2VzID0gNjIwO1xyXG52YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKCB7IHBva2Vtb24gfSApIHtcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb24pO1xyXG5cclxuICAgIC8vIHBva2Ugc3RhdHM6XHJcbiAgICB2YXIgaHBfc3RhdCA9IHBva2Vtb24uc3RhdHNbMF0uYmFzZV9zdGF0LFxyXG4gICAgYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzFdLmJhc2Vfc3RhdCxcclxuICAgIGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1syXS5iYXNlX3N0YXQsXHJcbiAgICBzcGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1szXS5iYXNlX3N0YXQsXHJcbiAgICBzcGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1s0XS5iYXNlX3N0YXQsXHJcbiAgICBzcGVlZF9zdGF0ID0gcG9rZW1vbi5zdGF0c1s1XS5iYXNlX3N0YXQ7XHJcblxyXG4gICAgLy8gYmFjay9mb3J3YXJkIG5hdlxyXG4gICAgdmFyIHBva2VJbmRleCA9IHBva2Vtb24uaWQsXHJcbiAgICBwb2tlTmF2QmFjayA9IHBva2VJbmRleCAtIDEsXHJcbiAgICBwb2tlTmF2Rm9yd2FyZCA9IHBva2VJbmRleCArIDE7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tOYXZMaW5rcygpIHtcclxuICAgICAgICBpZihwb2tlSW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIHBva2VOYXZCYWNrID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocG9rZUluZGV4ID09IG1heFBva2VzKXtcclxuICAgICAgICAgICAgcG9rZU5hdkZvcndhcmQgPSBtYXhQb2tlcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja05hdkxpbmtzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9pbmZvX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9wb2tlbW9uLycrIHBva2VOYXZCYWNrfT5hbnRlcmlvcjwvYT4gfCA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkZvcndhcmR9PnByw7N4aW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9e1wiSW1hZ2VtIGRlIHVtIFwiICsgcG9rZW1vbi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBva2VfdHlwZXNfd3JhcHBlclwiIGNsYXNzTmFtZT17c3R5bGVzLnBva2Vtb25fdHlwZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlR5cGU6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi50eXBlcy5tYXAoKHR5cGVzTGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0eXBlc0xpc3RJdGVtLnR5cGUubmFtZX0gY2xhc3NOYW1lPXsndHlwZV8nICsgdHlwZXNMaXN0SXRlbS50eXBlLm5hbWUgKyAnIHBva2VfdHlwZSd9Pnt0eXBlc0xpc3RJdGVtLnR5cGUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJpbGl0eV9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BYmlsaXRpZXM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5hYmlsaXRpZXMubWFwKCh0eXBlc0xpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IGNsYXNzTmFtZT17J2FiaWxpdHlfdGV4dCAnKydpc19oaWRkZW5fJyArIHR5cGVzTGlzdEl0ZW0uaXNfaGlkZGVufT57dHlwZXNMaXN0SXRlbS5hYmlsaXR5Lm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX3N0YXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+c3RhdHM6IDxzcGFuPntocF9zdGF0ICsgYXRrX3N0YXQgKyBkZWZfc3RhdCArIHNwYXRrX3N0YXQgKyBzcGRlZl9zdGF0ICsgc3BlZWRfc3RhdH08L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5IUDo8L3NwYW4+IDxzcGFuPntocF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBocF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+QVRLOjwvc3Bhbj4gPHNwYW4+e2F0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkRFRjo8L3NwYW4+IDxzcGFuPntkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9BVEs6PC9zcGFuPiA8c3Bhbj57c3BhdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0RFRjo8L3NwYW4+IDxzcGFuPntzcGRlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BFRUQ6PC9zcGFuPiA8c3Bhbj57c3BlZWRfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BlZWRfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8nK3BhcmFtcy5pZClcclxuICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvIHBva2Vtb24uJylcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb3N0YUVtT2JqZXRvO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBva2Vtb25cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG1heFBva2VzIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwibWF4UG9rZXMiLCJQb2tlbW9uIiwicG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciLCJocF9zdGF0Iiwic3RhdHMiLCJiYXNlX3N0YXQiLCJhdGtfc3RhdCIsImRlZl9zdGF0Iiwic3BhdGtfc3RhdCIsInNwZGVmX3N0YXQiLCJzcGVlZF9zdGF0IiwicG9rZUluZGV4IiwiaWQiLCJwb2tlTmF2QmFjayIsInBva2VOYXZGb3J3YXJkIiwiY2hlY2tOYXZMaW5rcyIsInBva2VfaW5mb193cmFwcGVyIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwicG9rZW1vbl90eXBlcyIsInR5cGVzIiwibWFwIiwidHlwZXNMaXN0SXRlbSIsInR5cGUiLCJhYmlsaXRpZXMiLCJpc19oaWRkZW4iLCJhYmlsaXR5IiwicG9rZV9zdGF0cyIsInN0YXRzX2JhciIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==