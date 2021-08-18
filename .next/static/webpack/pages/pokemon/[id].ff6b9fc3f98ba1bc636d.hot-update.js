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

  function mostrarTipo1() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: pokemon.types[0].type.name,
      children: pokemon.types[0].type.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, this);
  }

  function mostrarTipo2() {
    if (qtdTypes == 2) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: pokemon.types[1].type.name,
        children: pokemon.types[1].type.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
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
        lineNumber: 29,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id + 1),
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 69
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um " + pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "tipo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), mostrarTipo1(), " / ", mostrarTipo2()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: pokemon.stats[1].base_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 45
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: pokemon.stats[2].base_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 45
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: pokemon.stats[3].base_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 48
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: pokemon.stats[4].base_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 48
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: pokemon.stats[5].base_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 47
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLmZmNmI5ZmMzZjk4YmExYmM2MzZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNFLE9BQVQsT0FBZ0M7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFDM0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBRDJDLENBRzNDOztBQUNBLE1BQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWNDLE1BQTdCOztBQUNBLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsd0JBQVE7QUFBTSxlQUFTLEVBQUVOLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJHLElBQWpCLENBQXNCQyxJQUF2QztBQUFBLGdCQUE4Q1IsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkcsSUFBakIsQ0FBc0JDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQUNIOztBQUNELFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsUUFBSU4sUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ2YsMEJBQVE7QUFBTSxpQkFBUyxFQUFFSCxPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxJQUFqQixDQUFzQkMsSUFBdkM7QUFBQSxrQkFBOENSLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJHLElBQWpCLENBQXNCQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVI7QUFDSDtBQUNKLEdBWjBDLENBYzNDOzs7QUFDQSxNQUFJRSxPQUFPLEdBQUdWLE9BQU8sQ0FBQ1csS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBQS9CO0FBQUEsTUFDQUMsUUFBUSxHQUFHYixPQUFPLENBQUNXLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUQ1QjtBQUFBLE1BRUFFLFFBQVEsR0FBR2QsT0FBTyxDQUFDVyxLQUFSLENB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LGtCQUFOLG9CQUEyQjtBQUFBLHNCQUFPWixPQUFPLENBQUNXLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFPSTtBQUFBLHVDQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFOLG9CQUEwQjtBQUFBLHNCQUFPWixPQUFPLENBQUNXLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIO0tBN0N1QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vbWFpbi1jc3MvcG9rZS1wYWdlLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vbiggeyBwb2tlbW9uIH0gKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuXHJcbiAgICAvL21vc3RyYXIgb3MgdGlwb3MgZG9zIHBva2VzOlxyXG4gICAgdmFyIHF0ZFR5cGVzID0gcG9rZW1vbi50eXBlcy5sZW5ndGg7XHJcbiAgICBmdW5jdGlvbiBtb3N0cmFyVGlwbzEoKSB7XHJcbiAgICAgICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3Bva2Vtb24udHlwZXNbMF0udHlwZS5uYW1lfT57cG9rZW1vbi50eXBlc1swXS50eXBlLm5hbWV9PC9zcGFuPilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vc3RyYXJUaXBvMigpIHtcclxuICAgICAgICBpZiAocXRkVHlwZXMgPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17cG9rZW1vbi50eXBlc1sxXS50eXBlLm5hbWV9Pntwb2tlbW9uLnR5cGVzWzFdLnR5cGUubmFtZX08L3NwYW4+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwb2tlIHN0YXRzOlxyXG4gICAgdmFyIGhwX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzBdLmJhc2Vfc3RhdCxcclxuICAgIGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1sxXS5iYXNlX3N0YXQsXHJcbiAgICBkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbMl0uYmFzZV9zdGF0LFxyXG4gICAgc3BhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbM10uYmFzZV9zdGF0LFxyXG4gICAgc3BkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbNF0uYmFzZV9zdGF0LFxyXG4gICAgc3BlZWRfc3RhdCA9IHBva2Vtb24uc3RhdHNbNV0uYmFzZV9zdGF0O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2VfaW5mb193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvcG9rZW1vbi8nKyhwb2tlbW9uLmlkLTEpfT5hbnRlcmlvcjwvYT4gfCA8YSBocmVmPXsnL3Bva2Vtb24vJysocG9rZW1vbi5pZCsxKX0+cHLDs3hpbW88L2E+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Bva2Vtb24uaWR9LiB7cG9rZW1vbi5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD17XCJJbWFnZW0gZGUgdW0gXCIgKyBwb2tlbW9uLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2Vtb25fdHlwZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnRpcG86PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHttb3N0cmFyVGlwbzEoKX0gLyB7bW9zdHJhclRpcG8yKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9zdGF0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnN0YXRzOiA8c3Bhbj57aHBfc3RhdCArIGF0a19zdGF0ICsgZGVmX3N0YXQgKyBzcGF0a19zdGF0ICsgc3BkZWZfc3RhdCArIHNwZWVkX3N0YXR9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+SFA6PC9zcGFuPiA8c3Bhbj57aHBfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogaHBfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkFUSzo8L3NwYW4+IDxzcGFuPntwb2tlbW9uLnN0YXRzWzFdLmJhc2Vfc3RhdH08L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkRFRjo8L3NwYW4+IDxzcGFuPntwb2tlbW9uLnN0YXRzWzJdLmJhc2Vfc3RhdH08L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0FUSzo8L3NwYW4+IDxzcGFuPntwb2tlbW9uLnN0YXRzWzNdLmJhc2Vfc3RhdH08L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0RFRjo8L3NwYW4+IDxzcGFuPntwb2tlbW9uLnN0YXRzWzRdLmJhc2Vfc3RhdH08L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQRUVEOjwvc3Bhbj4gPHNwYW4+e3Bva2Vtb24uc3RhdHNbNV0uYmFzZV9zdGF0fTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycrcGFyYW1zLmlkKVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2VydmVyLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG8gcG9rZW1vbi4nKVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRW1PYmpldG87XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9rZW1vblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cclxuICAgIC8vIGVzcGVjaWZpY2FyIG51bWVybyBtYXhpbW8gZGUgcG9rZW1vbnMgZGEgcG9rZWRleCBwb3Igb3JkZW0gY3Jlc2NlbnRlOlxyXG4gICAgdmFyIG1heFBva2VzID0gNjIwO1xyXG4gICAgdmFyIHBva2VVbmljb1BhdGhzID0gW10gLy97cGFyYW1zOntpZDonMScsfX0se3BhcmFtczp7aWQ6JzInLH19LFxyXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgNjIwIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwicXRkVHlwZXMiLCJ0eXBlcyIsImxlbmd0aCIsIm1vc3RyYXJUaXBvMSIsInR5cGUiLCJuYW1lIiwibW9zdHJhclRpcG8yIiwiaHBfc3RhdCIsInN0YXRzIiwiYmFzZV9zdGF0IiwiYXRrX3N0YXQiLCJkZWZfc3RhdCIsInNwYXRrX3N0YXQiLCJzcGRlZl9zdGF0Iiwic3BlZWRfc3RhdCIsInBva2VfaW5mb193cmFwcGVyIiwiaWQiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInBva2Vtb25fdHlwZXMiLCJwb2tlX3N0YXRzIiwic3RhdHNfYmFyIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9