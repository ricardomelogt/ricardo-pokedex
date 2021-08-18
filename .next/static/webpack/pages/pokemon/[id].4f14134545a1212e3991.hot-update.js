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
      className: tipo01,
      children: tipo01
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this);
  }

  function mostrarTipo2() {
    if (qtdTypes == 2) {
      tipo02 = pokemon.types[1].type.name;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [" / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: tipo02,
          children: tipo02
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
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
        lineNumber: 34,
        columnNumber: 17
      }, this), " | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: '/pokemon/' + (pokemon.id + 1),
        children: "pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 69
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pokemon.id, ". ", pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon.sprites.front_default,
        alt: "Imagem de um " + pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "tipo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), mostrarTipo1(), mostrarTipo2()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["stats: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjRmMTQxMzQ1NDVhMTIxMmUzOTkxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNFLE9BQVQsT0FBZ0M7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFDM0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBRDJDLENBRzNDOztBQUNBLE1BQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWNDLE1BQTdCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxJQUFqQixDQUFzQkMsSUFBbkM7QUFBQSxNQUNBQyxNQURBOztBQUdBLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsd0JBQVE7QUFBTSxlQUFTLEVBQUVKLE1BQWpCO0FBQUEsZ0JBQTBCQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUFDSDs7QUFDRCxXQUFTSyxZQUFULEdBQXdCO0FBQ3BCLFFBQUlSLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNmTSxNQUFBQSxNQUFNLEdBQUdULE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJHLElBQWpCLENBQXNCQyxJQUEvQjtBQUNBLDBCQUFRO0FBQUEsdUNBQVM7QUFBTSxtQkFBUyxFQUFFQyxNQUFqQjtBQUFBLG9CQUEwQkE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUjtBQUNIO0FBQ0osR0FoQjBDLENBa0IzQzs7O0FBQ0EsTUFBSUcsT0FBTyxHQUFHWixPQUFPLENBQUNhLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUEvQjtBQUFBLE1BQ0FDLFFBQVEsR0FBR2YsT0FBTyxDQUFDYSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FENUI7QUFBQSxNQUVBRSxRQUFR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Qkg7S0FqRHVCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vbWFpbi1jc3MvcG9rZS1wYWdlLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oIHsgcG9rZW1vbiB9ICkge1xyXG4gICAgY29uc29sZS5sb2cocG9rZW1vbik7XHJcblxyXG4gICAgLy9tb3N0cmFyIG9zIHRpcG9zIGRvcyBwb2tlczpcclxuICAgIHZhciBxdGRUeXBlcyA9IHBva2Vtb24udHlwZXMubGVuZ3RoO1xyXG4gICAgdmFyIHRpcG8wMSA9IHBva2Vtb24udHlwZXNbMF0udHlwZS5uYW1lLFxyXG4gICAgdGlwbzAyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vc3RyYXJUaXBvMSgpIHtcclxuICAgICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17dGlwbzAxfT57dGlwbzAxfTwvc3Bhbj4pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb3N0cmFyVGlwbzIoKSB7XHJcbiAgICAgICAgaWYgKHF0ZFR5cGVzID09IDIpIHtcclxuICAgICAgICAgICAgdGlwbzAyID0gcG9rZW1vbi50eXBlc1sxXS50eXBlLm5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoPHNwYW4+IC8gPHNwYW4gY2xhc3NOYW1lPXt0aXBvMDJ9Pnt0aXBvMDJ9PC9zcGFuPjwvc3Bhbj4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHBva2Ugc3RhdHM6XHJcbiAgICB2YXIgaHBfc3RhdCA9IHBva2Vtb24uc3RhdHNbMF0uYmFzZV9zdGF0LFxyXG4gICAgYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzFdLmJhc2Vfc3RhdCxcclxuICAgIGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1syXS5iYXNlX3N0YXQsXHJcbiAgICBzcGF0a19zdGF0ID0gcG9rZW1vbi5zdGF0c1szXS5iYXNlX3N0YXQsXHJcbiAgICBzcGRlZl9zdGF0ID0gcG9rZW1vbi5zdGF0c1s0XS5iYXNlX3N0YXQsXHJcbiAgICBzcGVlZF9zdGF0ID0gcG9rZW1vbi5zdGF0c1s1XS5iYXNlX3N0YXQ7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9pbmZvX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9wb2tlbW9uLycrKHBva2Vtb24uaWQtMSl9PmFudGVyaW9yPC9hPiB8IDxhIGhyZWY9eycvcG9rZW1vbi8nKyhwb2tlbW9uLmlkKzEpfT5wcsOzeGltbzwvYT5cclxuICAgICAgICAgICAgICAgIDxoMj57cG9rZW1vbi5pZH0uIHtwb2tlbW9uLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtcIkltYWdlbSBkZSB1bSBcIiArIHBva2Vtb24ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZW1vbl90eXBlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+dGlwbzo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge21vc3RyYXJUaXBvMSgpfXttb3N0cmFyVGlwbzIoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX3N0YXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+c3RhdHM6IDxzcGFuPntocF9zdGF0ICsgYXRrX3N0YXQgKyBkZWZfc3RhdCArIHNwYXRrX3N0YXQgKyBzcGRlZl9zdGF0ICsgc3BlZWRfc3RhdH08L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5IUDo8L3NwYW4+IDxzcGFuPntocF9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBocF9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+QVRLOjwvc3Bhbj4gPHNwYW4+e2F0a19zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkRFRjo8L3NwYW4+IDxzcGFuPntkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogZGVmX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9BVEs6PC9zcGFuPiA8c3Bhbj57c3BhdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BhdGtfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQX0RFRjo8L3NwYW4+IDxzcGFuPntzcGRlZl9zdGF0fTwvc3Bhbj4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19iYXJ9IHN0eWxlPXt7IHdpZHRoOiBzcGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BFRUQ6PC9zcGFuPiA8c3Bhbj57c3BlZWRfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BlZWRfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8nK3BhcmFtcy5pZClcclxuICAgIC50aGVuKChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvIHBva2Vtb24uJylcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb3N0YUVtT2JqZXRvO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBva2Vtb25cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHJcbiAgICAvLyBlc3BlY2lmaWNhciBudW1lcm8gbWF4aW1vIGRlIHBva2Vtb25zIGRhIHBva2VkZXggcG9yIG9yZGVtIGNyZXNjZW50ZTpcclxuICAgIHZhciBtYXhQb2tlcyA9IDYyMDtcclxuICAgIHZhciBwb2tlVW5pY29QYXRocyA9IFtdIC8ve3BhcmFtczp7aWQ6JzEnLH19LHtwYXJhbXM6e2lkOicyJyx9fSxcclxuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG1heFBva2VzIDsgaSsrICkge1xyXG4gICAgICAgIHBva2VVbmljb1BhdGhzLnB1c2goIHtwYXJhbXM6e2lkOihpKzEpLnRvU3RyaW5nKCksfX0gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb2tlVW5pY29QYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwicXRkVHlwZXMiLCJ0eXBlcyIsImxlbmd0aCIsInRpcG8wMSIsInR5cGUiLCJuYW1lIiwidGlwbzAyIiwibW9zdHJhclRpcG8xIiwibW9zdHJhclRpcG8yIiwiaHBfc3RhdCIsInN0YXRzIiwiYmFzZV9zdGF0IiwiYXRrX3N0YXQiLCJkZWZfc3RhdCIsInNwYXRrX3N0YXQiLCJzcGRlZl9zdGF0Iiwic3BlZWRfc3RhdCIsInBva2VfaW5mb193cmFwcGVyIiwiaWQiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInBva2Vtb25fdHlwZXMiLCJwb2tlX3N0YXRzIiwic3RhdHNfYmFyIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9