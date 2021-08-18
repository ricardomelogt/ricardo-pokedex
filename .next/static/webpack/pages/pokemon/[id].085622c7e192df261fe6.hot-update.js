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

  function mostrarTipo1() {// return (<span className={tipo01}>{tipo01}</span>)
  }

  function mostrarTipo2() {
    if (qtdTypes == 2) {
      tipo02 = pokemon.types[1].type.name; // return (<span> / <span className={tipo02}>{tipo02}</span></span>)
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
          children: "Tipo: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().type_normal) + ' ' + (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_type),
          children: "normal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().type_fighting) + ' ' + (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_type),
          children: "fighting"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().type_flying) + ' ' + (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().poke_type),
          children: "flying"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
            lineNumber: 45,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "HP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: hp_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 44
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: hp_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 67
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: atk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: atk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 69
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: def_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 45
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: def_stat / 2 + "px"
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
            children: "SP_ATK:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spatk_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spatk_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 74
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SP_DEF:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: spdef_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 48
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: spdef_stat / 2 + "px"
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
            children: "SPEED:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 27
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: speed_stat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 47
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_main_css_poke_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().stats_bar),
            style: {
              width: speed_stat / 2 + "px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 73
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjA4NTYyMmM3ZTE5MmRmMjYxZmU2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNFLE9BQVQsT0FBZ0M7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFDM0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBRDJDLENBRzNDOztBQUNBLE1BQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWNDLE1BQTdCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNJLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxJQUFqQixDQUFzQkMsSUFBbkM7QUFBQSxNQUNBQyxNQURBOztBQUdBLFdBQVNDLFlBQVQsR0FBd0IsQ0FDckI7QUFDRjs7QUFDRCxXQUFTQyxZQUFULEdBQXdCO0FBQ3BCLFFBQUlSLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNmTSxNQUFBQSxNQUFNLEdBQUdULE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJHLElBQWpCLENBQXNCQyxJQUEvQixDQURlLENBRWhCO0FBQ0Y7QUFDSixHQWhCMEMsQ0FrQjNDOzs7QUFDQSxNQUFJSSxPQUFPLEdBQUdaLE9BQU8sQ0FBQ2EsS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBQS9CO0FBQUEsTUFDQUMsUUFBUSxHQUFHZixPQUFPLENBQUNhLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUQ1QjtBQUFBLE1BRUFFLFFBQVEsR0FBR2hCLE9BQU8sQ0FBQ2EsS0FBUixDQUFjLENBQWQsRUFBaUJDLFNBRjVCO0FBQUEsTUFHQUcsVUFBVSxHQUFHakIsT0FBTyxDQUFDYSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsU0FIOUI7QUFBQSxNQUlBSSxVQUFVLEdBQUdsQixPQUFPLENBQUNhLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxTQUo5QjtBQUFBLE1BS0FL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UEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIO0tBcER1QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL21haW4tY3NzL3Bva2UtcGFnZS5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKCB7IHBva2Vtb24gfSApIHtcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb24pO1xyXG5cclxuICAgIC8vbW9zdHJhciBvcyB0aXBvcyBkb3MgcG9rZXM6XHJcbiAgICB2YXIgcXRkVHlwZXMgPSBwb2tlbW9uLnR5cGVzLmxlbmd0aDtcclxuICAgIHZhciB0aXBvMDEgPSBwb2tlbW9uLnR5cGVzWzBdLnR5cGUubmFtZSxcclxuICAgIHRpcG8wMjtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3N0cmFyVGlwbzEoKSB7XHJcbiAgICAgICAvLyByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17dGlwbzAxfT57dGlwbzAxfTwvc3Bhbj4pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb3N0cmFyVGlwbzIoKSB7XHJcbiAgICAgICAgaWYgKHF0ZFR5cGVzID09IDIpIHtcclxuICAgICAgICAgICAgdGlwbzAyID0gcG9rZW1vbi50eXBlc1sxXS50eXBlLm5hbWU7XHJcbiAgICAgICAgICAgLy8gcmV0dXJuICg8c3Bhbj4gLyA8c3BhbiBjbGFzc05hbWU9e3RpcG8wMn0+e3RpcG8wMn08L3NwYW4+PC9zcGFuPilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9rZSBzdGF0czpcclxuICAgIHZhciBocF9zdGF0ID0gcG9rZW1vbi5zdGF0c1swXS5iYXNlX3N0YXQsXHJcbiAgICBhdGtfc3RhdCA9IHBva2Vtb24uc3RhdHNbMV0uYmFzZV9zdGF0LFxyXG4gICAgZGVmX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzJdLmJhc2Vfc3RhdCxcclxuICAgIHNwYXRrX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzNdLmJhc2Vfc3RhdCxcclxuICAgIHNwZGVmX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzRdLmJhc2Vfc3RhdCxcclxuICAgIHNwZWVkX3N0YXQgPSBwb2tlbW9uLnN0YXRzWzVdLmJhc2Vfc3RhdDtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlX2luZm9fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3Bva2Vtb24vJysocG9rZW1vbi5pZC0xKX0+YW50ZXJpb3I8L2E+IHwgPGEgaHJlZj17Jy9wb2tlbW9uLycrKHBva2Vtb24uaWQrMSl9PnByw7N4aW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPGgyPntwb2tlbW9uLmlkfS4ge3Bva2Vtb24ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9e1wiSW1hZ2VtIGRlIHVtIFwiICsgcG9rZW1vbi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb2tlbW9uX3R5cGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UaXBvOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudHlwZV9ub3JtYWwgKyAnICcgKyBzdHlsZXMucG9rZV90eXBlfT5ub3JtYWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudHlwZV9maWdodGluZyArICcgJyArIHN0eWxlcy5wb2tlX3R5cGV9PmZpZ2h0aW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnR5cGVfZmx5aW5nICsgJyAnICsgc3R5bGVzLnBva2VfdHlwZX0+Zmx5aW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHttb3N0cmFyVGlwbzEoKX17bW9zdHJhclRpcG8yKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9rZV9zdGF0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnN0YXRzOiA8c3Bhbj57aHBfc3RhdCArIGF0a19zdGF0ICsgZGVmX3N0YXQgKyBzcGF0a19zdGF0ICsgc3BkZWZfc3RhdCArIHNwZWVkX3N0YXR9PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+SFA6PC9zcGFuPiA8c3Bhbj57aHBfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogaHBfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkFUSzo8L3NwYW4+IDxzcGFuPnthdGtfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5ERUY6PC9zcGFuPiA8c3Bhbj57ZGVmX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IGRlZl9zdGF0IC8gMiArIFwicHhcIiB9fT48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+U1BfQVRLOjwvc3Bhbj4gPHNwYW4+e3NwYXRrX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwYXRrX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5TUF9ERUY6PC9zcGFuPiA8c3Bhbj57c3BkZWZfc3RhdH08L3NwYW4+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfYmFyfSBzdHlsZT17eyB3aWR0aDogc3BkZWZfc3RhdCAvIDIgKyBcInB4XCIgfX0+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPlNQRUVEOjwvc3Bhbj4gPHNwYW4+e3NwZWVkX3N0YXR9PC9zcGFuPiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Jhcn0gc3R5bGU9e3sgd2lkdGg6IHNwZWVkX3N0YXQgLyAyICsgXCJweFwiIH19PjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJytwYXJhbXMuaWQpXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmKHJlc3Bvc3RhRG9TZXJ2ZXIub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FycmVnYXIgbyBwb2tlbW9uLicpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFFbU9iamV0bztcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblxyXG4gICAgLy8gZXNwZWNpZmljYXIgbnVtZXJvIG1heGltbyBkZSBwb2tlbW9ucyBkYSBwb2tlZGV4IHBvciBvcmRlbSBjcmVzY2VudGU6XHJcbiAgICB2YXIgbWF4UG9rZXMgPSA2MjA7XHJcbiAgICB2YXIgcG9rZVVuaWNvUGF0aHMgPSBbXSAvL3twYXJhbXM6e2lkOicxJyx9fSx7cGFyYW1zOntpZDonMicsfX0sXHJcbiAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBtYXhQb2tlcyA7IGkrKyApIHtcclxuICAgICAgICBwb2tlVW5pY29QYXRocy5wdXNoKCB7cGFyYW1zOntpZDooaSsxKS50b1N0cmluZygpLH19ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9rZVVuaWNvUGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlBva2Vtb24iLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyIsInF0ZFR5cGVzIiwidHlwZXMiLCJsZW5ndGgiLCJ0aXBvMDEiLCJ0eXBlIiwibmFtZSIsInRpcG8wMiIsIm1vc3RyYXJUaXBvMSIsIm1vc3RyYXJUaXBvMiIsImhwX3N0YXQiLCJzdGF0cyIsImJhc2Vfc3RhdCIsImF0a19zdGF0IiwiZGVmX3N0YXQiLCJzcGF0a19zdGF0Iiwic3BkZWZfc3RhdCIsInNwZWVkX3N0YXQiLCJwb2tlX2luZm9fd3JhcHBlciIsImlkIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJwb2tlbW9uX3R5cGVzIiwidHlwZV9ub3JtYWwiLCJwb2tlX3R5cGUiLCJ0eXBlX2ZpZ2h0aW5nIiwidHlwZV9mbHlpbmciLCJwb2tlX3N0YXRzIiwic3RhdHNfYmFyIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9