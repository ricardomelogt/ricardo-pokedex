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


var __N_SSG = true;
function Pokemon(_ref) {
  var pokemon = _ref.pokemon;
  console.log(pokemon); //mostrar os tipos dos pokes:

  var qtdTypes = pokemon.types.length;
  var tipo01 = pokemon.types[0].type.name,
      tipo02;

  function mostrarTipo1() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: (tipo01, (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_type)),
      children: pokemon.types[0].type.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, this);
  }

  function mostrarTipo2() {
    if (qtdTypes == 2) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [" / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: pokemon.types[1].type.name,
          children: pokemon.types[1].type.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, this);
    }
  } // poke stats:


  var hp_stat = pokemon.stats[0].base_stat,
      atk_stat = pokemon.stats[1].base_stat,
      def_stat = pokemon.stats[2].base_stat,
      spatk_stat = pokemon.stats[3].base_stat,
      spdef_stat = pokemon.stats[4].base_stat,
      speed_stat = pokemon.stats[5].base_stat;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_info_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id - 1),
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id + 1),
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 69
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um " + pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "tipo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), mostrarTipo1(), mostrarTipo2()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLmRhZmZmMWY4MjJhMjU4ODk5NzRiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNFLE9BQVQsT0FBZ0M7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFDM0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBRDJDLENBRzNDOztBQUNBLE1BQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWNDLE1BQTdCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxJQUFqQixDQUFzQkMsSUFBbkM7QUFBQSxNQUNBQyxNQURBOztBQUdBLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsd0JBQVE7QUFBTSxlQUFTLEdBQUVKLE1BQU0sRUFBRVIsaUZBQVYsQ0FBZjtBQUFBLGdCQUE0Q0UsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkcsSUFBakIsQ0FBc0JDO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQUNIOztBQUNELFdBQVNJLFlBQVQsR0FBd0I7QUFDcEIsUUFBSVQsUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ2YsMEJBQVE7QUFBQSx1Q0FBUztBQUFNLG1CQUFTLEVBQUVILE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJHLElBQWpCLENBQXNCQyxJQUF2QztBQUFBLG9CQUE4Q1IsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkcsSUFBakIsQ0FBc0JDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVI7QUFDSDtBQUNKLEdBZjBDLENBaUIzQzs7O0FBQ0EsTUFBSUssT0FBTyxHQUFHYixPQUFPLENBQUNjLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUEv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O0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIO0tBaER1QnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oIHsgcG9rZW1vbiB9ICkge1xyXG4gICAgY29uc29sZS5sb2cocG9rZW1vbik7XHJcblxyXG4gICAgLy9tb3N0cmFyIG9zIHRpcG9zIGRvcyBwb2tlczpcclxuICAgIHZhciBxdGRUeXBlcyA9IHBva2Vtb24udHlwZXMubGVuZ3RoO1xyXG4gICAgdmFyIHRpcG8wMSA9IHBva2Vtb24udHlwZXNbMF0udHlwZS5uYW1lLFxyXG4gICAgdGlwbzAyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vc3RyYXJUaXBvMSgpIHtcclxuICAgICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17dGlwbzAxLCBzdHlsZXMucG9rZV90eXBlfT57cG9rZW1vbi50eXBlc1swXS50eXBlLm5hbWV9PC9zcGFuPilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vc3RyYXJUaXBvMigpIHtcclxuICAgICAgICBpZiAocXRkVHlwZXMgPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxzcGFuPiAvIDxzcGFuIGNsYXNzTmFtZT17cG9rZW1vbi50eXBlc1sxXS50eXBlLm5hbWV9Pntwb2tlbW9uLnR5cGVzWzFdLnR5cGUubmFtZX08L3NwYW4+PC9zcGFuPilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9rZSBzdGF0czpcclxuICAgIHZhciBocF9zdGF0ID0gcG9rZW1vbi5zdGF0c1swXS5iYXNlX3N0YXQsXHJcbiAgICBhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbMV0uYmFzZV9zdGF0LFxyXG4gICAgZGVmX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzJdLmJhc2Vfc3RhdCxcclxuICAgIHNwYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzNdLmJhc2Vfc3RhdCxcclxuICAgIHNwZGVmX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzRdLmJhc2Vfc3RhdCxcclxuICAgIHNwZWVkX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzVdLmJhc2Vfc3RhdDtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2luZm9fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJysocG9rZW1vbi5pZC0xKX0+YW50ZXJpb3I8L2E+IHwgPGEgaHJlZj17Jy9wb2tlbW9uLycrKHBva2Vtb24uaWQrMSl9PnByw7N4aW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9e1wiSW1hZ2VtIGRlIHVtIFwiICsgcG9rZW1vbi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlbW9uX3R5cGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj50aXBvOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7bW9zdHJhclRpcG8xKCl9e21vc3RyYXJUaXBvMigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2Vfc3RhdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5zdGF0czogPHNwYW4+e2hwX3N0YXQgKyBhdGtfc3RhdCArIGRlZl9zdGF0ICsgc3BhdGtfc3RhdCArIHNwZGVmX3N0YXQgKyBzcGVlZF9zdGF0fTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkhQOjwvc3Bhbj4gPHNwYW4+e2hwX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGhwX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5BVEs6PC9zcGFuPiA8c3Bhbj57YXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+REVGOjwvc3Bhbj4gPHNwYW4+e2RlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0FUSzo8L3NwYW4+IDxzcGFuPntzcGF0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGF0a19zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfREVGOjwvc3Bhbj4gPHNwYW4+e3NwZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUEVFRDo8L3NwYW4+IDxzcGFuPntzcGVlZF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGVlZF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycrcGFyYW1zLmlkKVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG8gcG9rZW1vbi4nKVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG87XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9rZW1vblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cclxuICAgIC8vIGVzcGVjaWZpY2FyIG51bWVybyBtYXhpbW8gZGUgcG9rZW1vbnMgZGEgcG9rZWRleCBwb3Igb3JkZW0gY3Jlc2NlbnRlOlxyXG4gICAgdmFyIG1heFBva2VzID0gNjIwO1xyXG4gICAgdmFyIHBva2VVbmljb1BhdGhzID0gW10gLy97cGFyYW1zOntpZDonMScsfX0se3BhcmFtczp7aWQ6JzInLH19LFxyXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgNjIwIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwicXRkVHlwZXMiLCJ0eXBlcyIsImxlbmd0aCIsInRpcG8wMSIsInR5cGUiLCJuYW1lIiwidGlwbzAyIiwibW9zdHJhclRpcG8xIiwicG9rZV90eXBlIiwibW9zdHJhclRpcG8yIiwiaHBfc3RhdCIsInN0YXRzIiwiYmFzZV9zdGF0IiwiYXRrX3N0YXQiLCJkZWZfc3RhdCIsInNwYXRrX3N0YXQiLCJzcGRlZl9zdGF0Iiwic3BlZWRfc3RhdCIsInBva2VfaW5mb193cmFwcGVyIiwiaWQiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInBva2Vtb25fdHlwZXMiLCJwb2tlX3N0YXRzIiwic3RhdHNfYmFyIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9