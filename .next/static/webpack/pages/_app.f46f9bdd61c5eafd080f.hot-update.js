"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./main-css/myCss.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./main-css/myCss.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-moz-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\r\n/*My css*/\r\n\r\n/* poke abilities */\r\n.ability_text.is_hidden_true {\r\n    text-decoration: line-through;\r\n    opacity: 0.5;\r\n}\r\n\r\n.ability_text.is_hidden_true::after {\r\n    content: '(hidden ability)';\r\n    text-decoration: none;\r\n}\r\n\r\n.ability_text {\r\n    padding: 5px;\r\n    border: 1px solid rgb(53, 53, 53);\r\n    border-radius: 3px;\r\n}\r\n\r\n/* poke types style */\r\n.poke_type {\r\n    background-color: #dedede;\r\n    padding: 6px 12px;\r\n    border-radius: 5px;\r\n    display: -moz-inline-box;\r\n    display: inline-flex;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n    text-transform: capitalize;\r\n    font-weight: bold;\r\n    margin-right: 10px;\r\n}\r\n\r\n.type_normal {\r\n    color: #4e4e4e;\r\n}\r\n\r\n.type_fighting {\r\n    color: white;\r\n    background-color: rgb(146, 43, 43);\r\n}\r\n\r\n.type_flying {\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgb(147, 172, 201);\r\n}\r\n\r\n.type_poison {\r\n    color: white;\r\n    background-color: rgb(163, 60, 184);\r\n}\r\n\r\n.type_ground {\r\n    color: white;\r\n    background-color: rgb(196, 134, 76);\r\n}\r\n\r\n.type_rock {\r\n    color: white;\r\n    background-color: rgb(141, 102, 71);\r\n}\r\n\r\n.type_bug {\r\n    color: white;\r\n    background-color: rgb(128, 145, 37);\r\n}\r\n\r\n.type_ghost {\r\n    color: white;\r\n    background-color: rgb(111, 82, 138);\r\n}\r\n\r\n.type_steel {\r\n    color: white;\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\n.type_fire {\r\n    color: white;\r\n    background-color: rgb(231, 68, 27);\r\n}\r\n\r\n.type_water {\r\n    color: white;\r\n    background-color: rgb(14, 111, 221);\r\n}\r\n\r\n.type_grass {\r\n    color: white;\r\n    background-color: rgb(22, 163, 40);\r\n}\r\n\r\n.type_electric {\r\n    color: rgb(58, 58, 58);\r\n    background-color: rgb(224, 221, 20);\r\n}\r\n\r\n.type_ice {\r\n    color: white;\r\n    background-color: rgb(34, 184, 204);\r\n}\r\n\r\n.type_dragon {\r\n    color: white;\r\n    background-color: rgb(108, 39, 236);\r\n}\r\n\r\n.type_dark {\r\n    color: white;\r\n    background-color: rgb(49, 49, 49);\r\n}\r\n\r\n/* end poke types style */", "",{"version":3,"sources":["webpack://main-css/myCss.css"],"names":[],"mappings":"AAAA,2EAA2E,CAAC,KAAK,gBAAgB,CAAC,6BAA6B,CAAC,KAAK,QAAQ,CAAC,KAAK,aAAa,CAAC,GAAG,aAAa,CAAC,cAAc,CAAC,GAAG,8BAAsB,CAAtB,2BAAsB,CAAtB,sBAAsB,CAAC,QAAQ,CAAC,gBAAgB,CAAC,IAAI,+BAA+B,CAAC,aAAa,CAAC,EAAE,4BAA4B,CAAC,YAAY,kBAAkB,CAAC,yBAAyB,CAAC,qCAA+B,CAA/B,gCAAgC,CAAC,SAAS,kBAAkB,CAAC,cAAc,+BAA+B,CAAC,aAAa,CAAC,MAAM,aAAa,CAAC,QAAQ,aAAa,CAAC,aAAa,CAAC,iBAAiB,CAAC,uBAAuB,CAAC,IAAI,aAAa,CAAC,IAAI,SAAS,CAAC,IAAI,iBAAiB,CAAC,sCAAsC,mBAAmB,CAAC,cAAc,CAAC,gBAAgB,CAAC,QAAQ,CAAC,aAAa,gBAAgB,CAAC,cAAc,mBAAmB,CAAC,gDAAgD,yBAAyB,CAAC,wHAAwH,iBAAiB,CAAC,SAAS,CAAC,4GAA4G,6BAA6B,CAAC,SAAS,0BAA0B,CAAC,OAAO,6BAAqB,CAArB,0BAAqB,CAArB,qBAAqB,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,SAAS,CAAC,kBAAkB,CAAC,SAAS,uBAAuB,CAAC,SAAS,aAAa,CAAC,6BAA6B,6BAAqB,CAArB,0BAAqB,CAArB,qBAAqB,CAAC,SAAS,CAAC,kFAAkF,WAAW,CAAC,cAAc,4BAA4B,CAAC,mBAAmB,CAAC,yCAAyC,uBAAuB,CAAC,6BAA6B,yBAAyB,CAAC,YAAY,CAAC,QAAQ,aAAa,CAAC,QAAQ,iBAAiB,CAAC,SAAS,YAAY,CAAC,SAAS,YAAY;AACtxD,SAAS;;AAET,mBAAmB;AACnB;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA,qBAAqB;AACrB;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,wBAAoB;IAApB,oBAAoB;IACpB,sBAAmB;SAAnB,mBAAmB;IACnB,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,iCAAiC;AACrC;;AAEA,yBAAyB","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\r\n/*My css*/\r\n\r\n/* poke abilities */\r\n.ability_text.is_hidden_true {\r\n    text-decoration: line-through;\r\n    opacity: 0.5;\r\n}\r\n\r\n.ability_text.is_hidden_true::after {\r\n    content: '(hidden ability)';\r\n    text-decoration: none;\r\n}\r\n\r\n.ability_text {\r\n    padding: 5px;\r\n    border: 1px solid rgb(53, 53, 53);\r\n    border-radius: 3px;\r\n}\r\n\r\n/* poke types style */\r\n.poke_type {\r\n    background-color: #dedede;\r\n    padding: 6px 12px;\r\n    border-radius: 5px;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    text-transform: capitalize;\r\n    font-weight: bold;\r\n    margin-right: 10px;\r\n}\r\n\r\n.type_normal {\r\n    color: #4e4e4e;\r\n}\r\n\r\n.type_fighting {\r\n    color: white;\r\n    background-color: rgb(146, 43, 43);\r\n}\r\n\r\n.type_flying {\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgb(147, 172, 201);\r\n}\r\n\r\n.type_poison {\r\n    color: white;\r\n    background-color: rgb(163, 60, 184);\r\n}\r\n\r\n.type_ground {\r\n    color: white;\r\n    background-color: rgb(196, 134, 76);\r\n}\r\n\r\n.type_rock {\r\n    color: white;\r\n    background-color: rgb(141, 102, 71);\r\n}\r\n\r\n.type_bug {\r\n    color: white;\r\n    background-color: rgb(128, 145, 37);\r\n}\r\n\r\n.type_ghost {\r\n    color: white;\r\n    background-color: rgb(111, 82, 138);\r\n}\r\n\r\n.type_steel {\r\n    color: white;\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\n.type_fire {\r\n    color: white;\r\n    background-color: rgb(231, 68, 27);\r\n}\r\n\r\n.type_water {\r\n    color: white;\r\n    background-color: rgb(14, 111, 221);\r\n}\r\n\r\n.type_grass {\r\n    color: white;\r\n    background-color: rgb(22, 163, 40);\r\n}\r\n\r\n.type_electric {\r\n    color: rgb(58, 58, 58);\r\n    background-color: rgb(224, 221, 20);\r\n}\r\n\r\n.type_ice {\r\n    color: white;\r\n    background-color: rgb(34, 184, 204);\r\n}\r\n\r\n.type_dragon {\r\n    color: white;\r\n    background-color: rgb(108, 39, 236);\r\n}\r\n\r\n.type_dark {\r\n    color: white;\r\n    background-color: rgb(49, 49, 49);\r\n}\r\n\r\n/* end poke types style */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mNDZmOWJkZDYxYzVlYWZkMDgwZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQytGO0FBQy9GLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSwySEFBMkgsaUJBQWlCLDhCQUE4QixLQUFLLFNBQVMsS0FBSyxjQUFjLEdBQUcsY0FBYyxlQUFlLEdBQUcsK0JBQStCLDRCQUE0Qix1QkFBdUIsU0FBUyxpQkFBaUIsSUFBSSxnQ0FBZ0MsY0FBYyxFQUFFLDZCQUE2QixZQUFZLG1CQUFtQiwwQkFBMEIsc0NBQXNDLGlDQUFpQyxTQUFTLG1CQUFtQixjQUFjLGdDQUFnQyxjQUFjLE1BQU0sY0FBYyxRQUFRLGNBQWMsY0FBYyxrQkFBa0Isd0JBQXdCLElBQUksY0FBYyxJQUFJLFVBQVUsSUFBSSxrQkFBa0Isc0NBQXNDLG9CQUFvQixlQUFlLGlCQUFpQixTQUFTLGFBQWEsaUJBQWlCLGNBQWMsb0JBQW9CLGdEQUFnRCwwQkFBMEIsd0hBQXdILGtCQUFrQixVQUFVLDRHQUE0Ryw4QkFBOEIsU0FBUywyQkFBMkIsT0FBTyw4QkFBOEIsMkJBQTJCLHNCQUFzQixjQUFjLGNBQWMsZUFBZSxVQUFVLG1CQUFtQixTQUFTLHdCQUF3QixTQUFTLGNBQWMsNkJBQTZCLDhCQUE4QiwyQkFBMkIsc0JBQXNCLFVBQVUsa0ZBQWtGLFlBQVksY0FBYyw2QkFBNkIsb0JBQW9CLHlDQUF5Qyx3QkFBd0IsNkJBQTZCLDBCQUEwQixhQUFhLFFBQVEsY0FBYyxRQUFRLGtCQUFrQixTQUFTLGFBQWEsU0FBUyxhQUFhLDRFQUE0RSxzQ0FBc0MscUJBQXFCLEtBQUssNkNBQTZDLG9DQUFvQyw4QkFBOEIsS0FBSyx1QkFBdUIscUJBQXFCLDBDQUEwQywyQkFBMkIsS0FBSyw4Q0FBOEMsa0NBQWtDLDBCQUEwQiwyQkFBMkIsaUNBQWlDLDZCQUE2QiwrQkFBK0IsaUNBQWlDLG1DQUFtQywwQkFBMEIsMkJBQTJCLEtBQUssc0JBQXNCLHVCQUF1QixLQUFLLHdCQUF3QixxQkFBcUIsMkNBQTJDLEtBQUssc0JBQXNCLGtDQUFrQyw2Q0FBNkMsS0FBSyxzQkFBc0IscUJBQXFCLDRDQUE0QyxLQUFLLHNCQUFzQixxQkFBcUIsNENBQTRDLEtBQUssb0JBQW9CLHFCQUFxQiw0Q0FBNEMsS0FBSyxtQkFBbUIscUJBQXFCLDRDQUE0QyxLQUFLLHFCQUFxQixxQkFBcUIsNENBQTRDLEtBQUsscUJBQXFCLHFCQUFxQiw2Q0FBNkMsS0FBSyxvQkFBb0IscUJBQXFCLDJDQUEyQyxLQUFLLHFCQUFxQixxQkFBcUIsNENBQTRDLEtBQUsscUJBQXFCLHFCQUFxQiwyQ0FBMkMsS0FBSyx3QkFBd0IsK0JBQStCLDRDQUE0QyxLQUFLLG1CQUFtQixxQkFBcUIsNENBQTRDLEtBQUssc0JBQXNCLHFCQUFxQiw0Q0FBNEMsS0FBSyxvQkFBb0IscUJBQXFCLDBDQUEwQyxLQUFLLHlDQUF5Qyx1K0JBQXUrQixhQUFhLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGlIQUFpSCxpQkFBaUIsOEJBQThCLEtBQUssU0FBUyxLQUFLLGNBQWMsR0FBRyxjQUFjLGVBQWUsR0FBRyx1QkFBdUIsU0FBUyxpQkFBaUIsSUFBSSxnQ0FBZ0MsY0FBYyxFQUFFLDZCQUE2QixZQUFZLG1CQUFtQiwwQkFBMEIsaUNBQWlDLFNBQVMsbUJBQW1CLGNBQWMsZ0NBQWdDLGNBQWMsTUFBTSxjQUFjLFFBQVEsY0FBYyxjQUFjLGtCQUFrQix3QkFBd0IsSUFBSSxjQUFjLElBQUksVUFBVSxJQUFJLGtCQUFrQixzQ0FBc0Msb0JBQW9CLGVBQWUsaUJBQWlCLFNBQVMsYUFBYSxpQkFBaUIsY0FBYyxvQkFBb0IsZ0RBQWdELDBCQUEwQix3SEFBd0gsa0JBQWtCLFVBQVUsNEdBQTRHLDhCQUE4QixTQUFTLDJCQUEyQixPQUFPLHNCQUFzQixjQUFjLGNBQWMsZUFBZSxVQUFVLG1CQUFtQixTQUFTLHdCQUF3QixTQUFTLGNBQWMsNkJBQTZCLHNCQUFzQixVQUFVLGtGQUFrRixZQUFZLGNBQWMsNkJBQTZCLG9CQUFvQix5Q0FBeUMsd0JBQXdCLDZCQUE2QiwwQkFBMEIsYUFBYSxRQUFRLGNBQWMsUUFBUSxrQkFBa0IsU0FBUyxhQUFhLFNBQVMsYUFBYSw0RUFBNEUsc0NBQXNDLHFCQUFxQixLQUFLLDZDQUE2QyxvQ0FBb0MsOEJBQThCLEtBQUssdUJBQXVCLHFCQUFxQiwwQ0FBMEMsMkJBQTJCLEtBQUssOENBQThDLGtDQUFrQywwQkFBMEIsMkJBQTJCLDZCQUE2Qiw0QkFBNEIsbUNBQW1DLDBCQUEwQiwyQkFBMkIsS0FBSyxzQkFBc0IsdUJBQXVCLEtBQUssd0JBQXdCLHFCQUFxQiwyQ0FBMkMsS0FBSyxzQkFBc0Isa0NBQWtDLDZDQUE2QyxLQUFLLHNCQUFzQixxQkFBcUIsNENBQTRDLEtBQUssc0JBQXNCLHFCQUFxQiw0Q0FBNEMsS0FBSyxvQkFBb0IscUJBQXFCLDRDQUE0QyxLQUFLLG1CQUFtQixxQkFBcUIsNENBQTRDLEtBQUsscUJBQXFCLHFCQUFxQiw0Q0FBNEMsS0FBSyxxQkFBcUIscUJBQXFCLDZDQUE2QyxLQUFLLG9CQUFvQixxQkFBcUIsMkNBQTJDLEtBQUsscUJBQXFCLHFCQUFxQiw0Q0FBNEMsS0FBSyxxQkFBcUIscUJBQXFCLDJDQUEyQyxLQUFLLHdCQUF3QiwrQkFBK0IsNENBQTRDLEtBQUssbUJBQW1CLHFCQUFxQiw0Q0FBNEMsS0FBSyxzQkFBc0IscUJBQXFCLDRDQUE0QyxLQUFLLG9CQUFvQixxQkFBcUIsMENBQTBDLEtBQUsscURBQXFEO0FBQ3gzVDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21haW4tY3NzL215Q3NzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovaHRtbHtsaW5lLWhlaWdodDoxLjE1Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9bWFpbntkaXNwbGF5OmJsb2NrfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9aHJ7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9cHJle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7LW1vei10ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9Y29kZSxrYmQsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9W3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5key13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHN7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XFxyXFxuLypNeSBjc3MqL1xcclxcblxcclxcbi8qIHBva2UgYWJpbGl0aWVzICovXFxyXFxuLmFiaWxpdHlfdGV4dC5pc19oaWRkZW5fdHJ1ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5hYmlsaXR5X3RleHQuaXNfaGlkZGVuX3RydWU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyhoaWRkZW4gYWJpbGl0eSknO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hYmlsaXR5X3RleHQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1MywgNTMsIDUzKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwb2tlIHR5cGVzIHN0eWxlICovXFxyXFxuLnBva2VfdHlwZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XFxyXFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50eXBlX25vcm1hbCB7XFxyXFxuICAgIGNvbG9yOiAjNGU0ZTRlO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9maWdodGluZyB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwgNDMsIDQzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGVfZmx5aW5nIHtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgMTcyLCAyMDEpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9wb2lzb24ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDYwLCAxODQpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9ncm91bmQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDEzNCwgNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9yb2NrIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQxLCAxMDIsIDcxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGVfYnVnIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxNDUsIDM3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGVfZ2hvc3Qge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDgyLCAxMzgpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9zdGVlbCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9maXJlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCA2OCwgMjcpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV93YXRlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTEsIDIyMSk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2dyYXNzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE2MywgNDApO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9lbGVjdHJpYyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyMSwgMjApO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9pY2Uge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMTg0LCAyMDQpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9kcmFnb24ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDM5LCAyMzYpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9kYXJrIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBwb2tlIHR5cGVzIHN0eWxlICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL21haW4tY3NzL215Q3NzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkUsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLEtBQUssUUFBUSxDQUFDLEtBQUssYUFBYSxDQUFDLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLDhCQUFzQixDQUF0QiwyQkFBc0IsQ0FBdEIsc0JBQXNCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksK0JBQStCLENBQUMsYUFBYSxDQUFDLEVBQUUsNEJBQTRCLENBQUMsWUFBWSxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxxQ0FBK0IsQ0FBL0IsZ0NBQWdDLENBQUMsU0FBUyxrQkFBa0IsQ0FBQyxjQUFjLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxRQUFRLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxzQ0FBc0MsbUJBQW1CLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLGdCQUFnQixDQUFDLGNBQWMsbUJBQW1CLENBQUMsZ0RBQWdELHlCQUF5QixDQUFDLHdIQUF3SCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsNEdBQTRHLDZCQUE2QixDQUFDLFNBQVMsMEJBQTBCLENBQUMsT0FBTyw2QkFBcUIsQ0FBckIsMEJBQXFCLENBQXJCLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLHVCQUF1QixDQUFDLFNBQVMsYUFBYSxDQUFDLDZCQUE2Qiw2QkFBcUIsQ0FBckIsMEJBQXFCLENBQXJCLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxrRkFBa0YsV0FBVyxDQUFDLGNBQWMsNEJBQTRCLENBQUMsbUJBQW1CLENBQUMseUNBQXlDLHVCQUF1QixDQUFDLDZCQUE2Qix5QkFBeUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxhQUFhLENBQUMsUUFBUSxpQkFBaUIsQ0FBQyxTQUFTLFlBQVksQ0FBQyxTQUFTLFlBQVk7QUFDdHhELFNBQVM7O0FBRVQsbUJBQW1CO0FBQ25CO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixzQkFBbUI7U0FBbkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQSx5QkFBeUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL2h0bWx7bGluZS1oZWlnaHQ6MS4xNTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5e21hcmdpbjowfW1haW57ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1wcmV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9Y29kZSxrYmQsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9W3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHN7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XFxyXFxuLypNeSBjc3MqL1xcclxcblxcclxcbi8qIHBva2UgYWJpbGl0aWVzICovXFxyXFxuLmFiaWxpdHlfdGV4dC5pc19oaWRkZW5fdHJ1ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5hYmlsaXR5X3RleHQuaXNfaGlkZGVuX3RydWU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyhoaWRkZW4gYWJpbGl0eSknO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hYmlsaXR5X3RleHQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1MywgNTMsIDUzKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwb2tlIHR5cGVzIHN0eWxlICovXFxyXFxuLnBva2VfdHlwZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XFxyXFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGVfbm9ybWFsIHtcXHJcXG4gICAgY29sb3I6ICM0ZTRlNGU7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2ZpZ2h0aW5nIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LCA0MywgNDMpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9mbHlpbmcge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAxNzIsIDIwMSk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX3BvaXNvbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgNjAsIDE4NCk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2dyb3VuZCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTM0LCA3Nik7XFxyXFxufVxcclxcblxcclxcbi50eXBlX3JvY2sge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDEwMiwgNzEpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9idWcge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDE0NSwgMzcpO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZV9naG9zdCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgODIsIDEzOCk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX3N0ZWVsIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2ZpcmUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDY4LCAyNyk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX3dhdGVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDExMSwgMjIxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGVfZ3Jhc3Mge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTYzLCA0MCk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2VsZWN0cmljIHtcXHJcXG4gICAgY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjIxLCAyMCk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2ljZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAxODQsIDIwNCk7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2RyYWdvbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOCwgMzksIDIzNik7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2Rhcmsge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIHBva2UgdHlwZXMgc3R5bGUgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9