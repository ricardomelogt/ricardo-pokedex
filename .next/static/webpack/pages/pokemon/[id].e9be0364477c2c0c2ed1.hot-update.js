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
          children: "Tipo: "
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
        "class": "ability_box"
      }, void 0, false, {
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
            lineNumber: 51,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLmU5YmUwMzY0NDc3YzJjMGMyZWQxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQUlFLFFBQVEsR0FBRyxHQUFmO0FBQ3dCOztBQUVULFNBQVNDLE9BQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFDM0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBRDJDLENBRzNDOztBQUNBLE1BQUlHLE9BQU8sR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FBL0I7QUFBQSxNQUNBQyxRQUFRLEdBQUdOLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBRDVCO0FBQUEsTUFFQUUsUUFBUSxHQUFHUCxPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUY1QjtBQUFBLE1BR0FHLFVBQVUsR0FBR1IsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FIOUI7QUFBQSxNQUlBSSxVQUFVLEdBQUdULE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBSjlCO0FBQUEsTUFLQUssVUFBVSxHQUFHVixPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUw5QixDQUoyQyxDQVczQzs7QUFDQSxNQUFJTSxTQUFTLEdBQUdYLE9BQU8sQ0FBQ1ksRUFBeEI7QUFBQSxNQUNBQyxXQUFXLEdBQUdGLFNBQVMsR0FBRyxDQUQxQjtBQUFBLE1BRUFHLGNBQWMsR0FBR0gsU0FBUyxHQUFHLENBRjdCOztBQUlBLFdBQVNJLGFBQVQsR0FBeUI7QUFDckIsUUFBR0osU0FBUyxJQUFJLENBQWhCLEVBQWtCO0FBQ2RFLE1BQUFBLFdBQVcsR0FBRyxDQUFkO0FBQ0g7O0FBQ0QsUUFBR0YsU0FBUyxJQUFJYixRQUFoQixFQUF5QjtBQUNy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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRCSDtLQXZEdUJYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzJztcclxuXHJcbi8vIGVzcGVjaWZpY2FyIG51bWVybyBtYXhpbW8gZGUgcG9rZW1vbnMgZGEgcG9rZWRleCBwb3Igb3JkZW0gY3Jlc2NlbnRlOlxyXG52YXIgbWF4UG9rZXMgPSA2MjA7XHJcbnZhciBwb2tlVW5pY29QYXRocyA9IFtdIC8ve3BhcmFtczp7aWQ6JzEnLH19LHtwYXJhbXM6e2lkOicyJyx9fSxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oIHsgcG9rZW1vbiB9ICkge1xyXG4gICAgY29uc29sZS5sb2cocG9rZW1vbik7XHJcblxyXG4gICAgLy8gcG9rZSBzdGF0czpcclxuICAgIHZhciBocF9zdGF0ID0gcG9rZW1vbi5zdGF0c1swXS5iYXNlX3N0YXQsXHJcbiAgICBhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbMV0uYmFzZV9zdGF0LFxyXG4gICAgZGVmX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzJdLmJhc2Vfc3RhdCxcclxuICAgIHNwYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzNdLmJhc2Vfc3RhdCxcclxuICAgIHNwZGVmX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzRdLmJhc2Vfc3RhdCxcclxuICAgIHNwZWVkX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzVdLmJhc2Vfc3RhdDtcclxuXHJcbiAgICAvLyBiYWNrL2ZvcndhcmQgbmF2XHJcbiAgICB2YXIgcG9rZUluZGV4ID0gcG9rZW1vbi5pZCxcclxuICAgIHBva2VOYXZCYWNrID0gcG9rZUluZGV4IC0gMSxcclxuICAgIHBva2VOYXZGb3J3YXJkID0gcG9rZUluZGV4ICsgMTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja05hdkxpbmtzKCkge1xyXG4gICAgICAgIGlmKHBva2VJbmRleCA9PSAxKXtcclxuICAgICAgICAgICAgcG9rZU5hdkJhY2sgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwb2tlSW5kZXggPT0gbWF4UG9rZXMpe1xyXG4gICAgICAgICAgICBwb2tlTmF2Rm9yd2FyZCA9IG1heFBva2VzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNoZWNrTmF2TGlua3MoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2luZm9fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJysgcG9rZU5hdkJhY2t9PmFudGVyaW9yPC9hPiB8IDxhIGhyZWY9eycvcG9rZW1vbi8nKyBwb2tlTmF2Rm9yd2FyZH0+cHLDs3hpbW88L2E+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Bva2Vtb24uaWR9LiB7cG9rZW1vbi5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD17XCJJbWFnZW0gZGUgdW0gXCIgKyBwb2tlbW9uLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9rZV90eXBlc193cmFwcGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMucG9rZW1vbl90eXBlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGlwbzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLnR5cGVzLm1hcCgodHlwZXNMaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3R5cGVzTGlzdEl0ZW0udHlwZS5uYW1lfSBjbGFzc05hbWU9eyd0eXBlXycgKyB0eXBlc0xpc3RJdGVtLnR5cGUubmFtZSArICcgcG9rZV90eXBlJ30+e3R5cGVzTGlzdEl0ZW0udHlwZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFiaWxpdHlfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9zdGF0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnN0YXRzOiA8c3Bhbj57aHBfc3RhdCArIGF0a19zdGF0ICsgZGVmX3N0YXQgKyBzcGF0a19zdGF0ICsgc3BkZWZfc3RhdCArIHNwZWVkX3N0YXR9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+SFA6PC9zcGFuPiA8c3Bhbj57aHBfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogaHBfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkFUSzo8L3NwYW4+IDxzcGFuPnthdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5ERUY6PC9zcGFuPiA8c3Bhbj57ZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfQVRLOjwvc3Bhbj4gPHNwYW4+e3NwYXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9ERUY6PC9zcGFuPiA8c3Bhbj57c3BkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQRUVEOjwvc3Bhbj4gPHNwYW4+e3NwZWVkX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZWVkX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgbyBwb2tlbW9uLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBtYXhQb2tlcyA7IGkrKyApIHtcclxuICAgICAgICBwb2tlVW5pY29QYXRocy5wdXNoKCB7cGFyYW1zOntpZDooaSsxKS50b1N0cmluZygpLH19ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZVVuaWNvUGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIm1heFBva2VzIiwiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwiaHBfc3RhdCIsInN0YXRzIiwiYmFzZV9zdGF0IiwiYXRrX3N0YXQiLCJkZWZfc3RhdCIsInNwYXRrX3N0YXQiLCJzcGRlZl9zdGF0Iiwic3BlZWRfc3RhdCIsInBva2VJbmRleCIsImlkIiwicG9rZU5hdkJhY2siLCJwb2tlTmF2Rm9yd2FyZCIsImNoZWNrTmF2TGlua3MiLCJwb2tlX2luZm9fd3JhcHBlciIsIm5hbWUiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInBva2Vtb25fdHlwZXMiLCJ0eXBlcyIsIm1hcCIsInR5cGVzTGlzdEl0ZW0iLCJ0eXBlIiwicG9rZV9zdGF0cyIsInN0YXRzX2JhciIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==