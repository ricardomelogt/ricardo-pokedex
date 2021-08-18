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
      className: 'type_' + tipo01 + ' poke_type',
      children: tipo01
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this);
  }

  function mostrarTipo2() {
    if (qtdTypes == 2) {
      tipo02 = pokemon.types[1].type.name;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [" / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: 'type_' + tipo02 + ' poke_type',
          children: tipo02
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
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
        lineNumber: 38,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id + 1),
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 69
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
        }, this), mostrarTipo1(), mostrarTipo2()]
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
            lineNumber: 46,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLmM4N2YzNzhlMGY2OWE2ZDc0MjhiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNFLE9BQVQsT0FBZ0M7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFDM0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBRDJDLENBRzNDOztBQUNBLE1BQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWNDLE1BQTdCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxJQUFqQixDQUFzQkMsSUFBbkM7QUFBQSxNQUNBQyxNQURBOztBQUdBLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsd0JBQ0E7QUFBTSxlQUFTLEVBQUUsVUFBVUosTUFBVixHQUFtQixZQUFwQztBQUFBLGdCQUFtREE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBO0FBR0g7O0FBQ0QsV0FBU0ssWUFBVCxHQUF3QjtBQUNwQixRQUFJUixRQUFRLElBQUksQ0FBaEIsRUFBbUI7QUFDZk0sTUFBQUEsTUFBTSxHQUFHVCxPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxJQUFqQixDQUFzQkMsSUFBL0I7QUFDQSwwQkFDQTtBQUFBLHVDQUFTO0FBQU0sbUJBQVMsRUFBRSxVQUFVQyxNQUFWLEdBQW1CLFlBQXBDO0FBQUEsb0JBQW1EQTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBR0g7QUFDSixHQXBCMEMsQ0FzQjNDOzs7QUFDQSxNQUFJRyxPQUFPLEdBQUdaLE9BQU8sQ0FBQ2EsS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBQS9CO0FBQUEsTUFDQUMsUUFBUSxHQUFHZixPQUFPLENBQUNhLEtBQVIsQ0FBYyxD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1Qkg7S0FyRHVCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vbWFpbi1jc3MvcG9rZS1wYWdlLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oIHsgcG9rZW1vbiB9ICkge1xyXG4gICAgY29uc29sZS5sb2cocG9rZW1vbik7XHJcblxyXG4gICAgLy9tb3N0cmFyIG9zIHRpcG9zIGRvcyBwb2tlczpcclxuICAgIHZhciBxdGRUeXBlcyA9IHBva2Vtb24udHlwZXMubGVuZ3RoO1xyXG4gICAgdmFyIHRpcG8wMSA9IHBva2Vtb24udHlwZXNbMF0udHlwZS5uYW1lLFxyXG4gICAgdGlwbzAyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vc3RyYXJUaXBvMSgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3R5cGVfJyArIHRpcG8wMSArICcgcG9rZV90eXBlJ30+e3RpcG8wMX08L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9zdHJhclRpcG8yKCkge1xyXG4gICAgICAgIGlmIChxdGRUeXBlcyA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRpcG8wMiA9IHBva2Vtb24udHlwZXNbMV0udHlwZS5uYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3Bhbj4gLyA8c3BhbiBjbGFzc05hbWU9eyd0eXBlXycgKyB0aXBvMDIgKyAnIHBva2VfdHlwZSd9Pnt0aXBvMDJ9PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwb2tlIHN0YXRzOlxyXG4gICAgdmFyIGhwX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzBdLmJhc2Vfc3RhdCxcclxuICAgIGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1sxXS5iYXNlX3N0YXQsXHJcbiAgICBkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbMl0uYmFzZV9zdGF0LFxyXG4gICAgc3BhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbM10uYmFzZV9zdGF0LFxyXG4gICAgc3BkZWZfc3RhdCA9IHBva2Vtb24uc3RhdHNbNF0uYmFzZV9zdGF0LFxyXG4gICAgc3BlZWRfc3RhdCA9IHBva2Vtb24uc3RhdHNbNV0uYmFzZV9zdGF0O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBva2VfaW5mb193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvcG9rZW1vbi8nKyhwb2tlbW9uLmlkLTEpfT5hbnRlcmlvcjwvYT4gfCA8YSBocmVmPXsnL3Bva2Vtb24vJysocG9rZW1vbi5pZCsxKX0+cHLDs3hpbW88L2E+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Bva2Vtb24uaWR9LiB7cG9rZW1vbi5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD17XCJJbWFnZW0gZGUgdW0gXCIgKyBwb2tlbW9uLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9rZV90eXBlc193cmFwcGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMucG9rZW1vbl90eXBlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGlwbzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHttb3N0cmFyVGlwbzEoKX17bW9zdHJhclRpcG8yKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9zdGF0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnN0YXRzOiA8c3Bhbj57aHBfc3RhdCArIGF0a19zdGF0ICsgZGVmX3N0YXQgKyBzcGF0a19zdGF0ICsgc3BkZWZfc3RhdCArIHNwZWVkX3N0YXR9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+SFA6PC9zcGFuPiA8c3Bhbj57aHBfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogaHBfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkFUSzo8L3NwYW4+IDxzcGFuPnthdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5ERUY6PC9zcGFuPiA8c3Bhbj57ZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfQVRLOjwvc3Bhbj4gPHNwYW4+e3NwYXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9ERUY6PC9zcGFuPiA8c3Bhbj57c3BkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQRUVEOjwvc3Bhbj4gPHNwYW4+e3NwZWVkX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZWVkX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgbyBwb2tlbW9uLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblxyXG4gICAgLy8gZXNwZWNpZmljYXIgbnVtZXJvIG1heGltbyBkZSBwb2tlbW9ucyBkYSBwb2tlZGV4IHBvciBvcmRlbSBjcmVzY2VudGU6XHJcbiAgICB2YXIgbWF4UG9rZXMgPSA2MjA7XHJcbiAgICB2YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBtYXhQb2tlcyA7IGkrKyApIHtcclxuICAgICAgICBwb2tlVW5pY29QYXRocy5wdXNoKCB7cGFyYW1zOntpZDooaSsxKS50b1N0cmluZygpLH19ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZVVuaWNvUGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlBva2Vtb24iLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyIsInF0ZFR5cGVzIiwidHlwZXMiLCJsZW5ndGgiLCJ0aXBvMDEiLCJ0eXBlIiwibmFtZSIsInRpcG8wMiIsIm1vc3RyYXJUaXBvMSIsIm1vc3RyYXJUaXBvMiIsImhwX3N0YXQiLCJzdGF0cyIsImJhc2Vfc3RhdCIsImF0a19zdGF0IiwiZGVmX3N0YXQiLCJzcGF0a19zdGF0Iiwic3BkZWZfc3RhdCIsInNwZWVkX3N0YXQiLCJwb2tlX2luZm9fd3JhcHBlciIsImlkIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJwb2tlbW9uX3R5cGVzIiwicG9rZV9zdGF0cyIsInN0YXRzX2JhciIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==