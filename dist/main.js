/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/battleship.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/battleship.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #111;\n}\n\n.main_container {\n    width: 100vw;\n    height: 100vh;\n\n    position: relative;\n}\n\n.player1_board,\n.computer_board {\n    width: 500px;\n    height: 500px;\n    outline: 5px solid #666;\n    background: linear-gradient(rgb(95, 95, 245), rgb(144, 247, 247));\n\n    position: absolute;\n\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n}\n\n.player1_board {\n    top: 50%;\n    left: 50px;\n\n    transform: translateY(-50%);\n}\n\n.computer_board {\n    bottom: 50%;\n    right: 50px;\n\n    transform: translateY(50%);\n}\n\n.board_tile {\n    border: 0.1px solid purple;\n    cursor: crosshair;\n}\n\n.ship_part {\n    background: violet;\n}\n\n.board_tile.hit,\n.board_tile.no,\n.board_tile[player=\"human\"] {\n    cursor: not-allowed;\n}\n\n.board_tile.no {\n    user-select: none;\n}\n\n.board_tile.hit {\n    background: blue;\n}\n\n.board_tile.ship_part.hit {\n    background: rgb(243, 64, 64);\n}\n\n.ships_container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 5px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.ships_container .ship_part {\n    width: 50px;\n    height: 50px;\n    border: 0.1px solid purple;\n}\n\n.ships_container .ship_container {\n    cursor: move;\n    margin: 0 auto;\n}\n\n.ship_container {\n    display: flex;\n    justify-content: center;\n\n    position: relative;\n}\n\nbutton.change_orientation {\n    border: none;\n    background: cyan;\n    box-shadow: inset 2px 0px 3px blue;\n\n    cursor: pointer;\n\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nbutton.change_orientation:active {\n    background: blue;\n}\n\n.vertical {\n    flex-flow: column nowrap;\n}\n\n.being_dragged .ship_part {\n    background: rgb(238, 130, 238, 0.7);\n}\n\n.placing_preview {\n    background: lime;\n}\n\n[player=\"human\"].board_tile {\n    user-select: none;\n}\n\n.start_game_btn {\n    padding: 5px 15px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    background: cadetblue;\n    border: none;\n    cursor: crosshair;\n\n    box-shadow: 2px 2px 5px blueviolet;\n}\n\n.start_game_btn:active {\n    background: rgb(35, 98, 100);\n}\n", "",{"version":3,"sources":["webpack://./src/css/battleship.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,iEAAiE;;IAEjE,kBAAkB;;IAElB,aAAa;IACb,uCAAuC;AAC3C;;AAEA;IACI,QAAQ;IACR,UAAU;;IAEV,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,WAAW;;IAEX,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,QAAQ;;IAER,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;;IAEvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kCAAkC;;IAElC,eAAe;;IAEf,kBAAkB;IAClB,YAAY;IACZ,WAAW;;IAEX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;;IAEjB,kCAAkC;AACtC;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #111;\n}\n\n.main_container {\n    width: 100vw;\n    height: 100vh;\n\n    position: relative;\n}\n\n.player1_board,\n.computer_board {\n    width: 500px;\n    height: 500px;\n    outline: 5px solid #666;\n    background: linear-gradient(rgb(95, 95, 245), rgb(144, 247, 247));\n\n    position: absolute;\n\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n}\n\n.player1_board {\n    top: 50%;\n    left: 50px;\n\n    transform: translateY(-50%);\n}\n\n.computer_board {\n    bottom: 50%;\n    right: 50px;\n\n    transform: translateY(50%);\n}\n\n.board_tile {\n    border: 0.1px solid purple;\n    cursor: crosshair;\n}\n\n.ship_part {\n    background: violet;\n}\n\n.board_tile.hit,\n.board_tile.no,\n.board_tile[player=\"human\"] {\n    cursor: not-allowed;\n}\n\n.board_tile.no {\n    user-select: none;\n}\n\n.board_tile.hit {\n    background: blue;\n}\n\n.board_tile.ship_part.hit {\n    background: rgb(243, 64, 64);\n}\n\n.ships_container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 5px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.ships_container .ship_part {\n    width: 50px;\n    height: 50px;\n    border: 0.1px solid purple;\n}\n\n.ships_container .ship_container {\n    cursor: move;\n    margin: 0 auto;\n}\n\n.ship_container {\n    display: flex;\n    justify-content: center;\n\n    position: relative;\n}\n\nbutton.change_orientation {\n    border: none;\n    background: cyan;\n    box-shadow: inset 2px 0px 3px blue;\n\n    cursor: pointer;\n\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nbutton.change_orientation:active {\n    background: blue;\n}\n\n.vertical {\n    flex-flow: column nowrap;\n}\n\n.being_dragged .ship_part {\n    background: rgb(238, 130, 238, 0.7);\n}\n\n.placing_preview {\n    background: lime;\n}\n\n[player=\"human\"].board_tile {\n    user-select: none;\n}\n\n.start_game_btn {\n    padding: 5px 15px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    background: cadetblue;\n    border: none;\n    cursor: crosshair;\n\n    box-shadow: 2px 2px 5px blueviolet;\n}\n\n.start_game_btn:active {\n    background: rgb(35, 98, 100);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/battleship.css":
/*!********************************!*\
  !*** ./src/css/battleship.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./battleship.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/battleship.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/DOM_elements.js":
/*!********************************!*\
  !*** ./src/js/DOM_elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_el": () => (/* binding */ DOM_el)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");


const DOM_el = (function () {
    const main_container = document.querySelector(".main_container");

    const player1_board = document.querySelector(".player1_board");
    const computer_board = document.querySelector(".computer_board");

    const ships_container = document.querySelector(".ships_container");

    const create_board_tile = () => {
        const board_tile = document.createElement("div");
        board_tile.classList.add("board_tile");

        return board_tile;
    };

    const populate_board = (board, player) => {
        while (board.lastChild) {
            board.lastChild.remove();
        }

        for (let i = 0; i < player.gameboard.tiles.flat().length; i++) {
            const board_tile = create_board_tile();
            board_tile.setAttribute(
                "data-id",
                i.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })
            );

            board_tile.setAttribute("player", player.type);
            board_tile.classList.add("no");
            board.append(board_tile);
        }
    };

    const get_board_tiles = (player) => {
        const board_tiles = document.querySelectorAll(
            `.board_tile[player=${player.type}]`
        );

        return Array.from(board_tiles);
    };

    const get_next_tile = (axis, player, tile) => {
        if (!(axis === "y" || axis === "x")) return;

        switch (axis) {
            case "x":
                return tile.nextElementSibling;

            case "y":
                return document.querySelector(
                    `[data-id="${
                        Number(tile.getAttribute("data-id")) + 10
                    }"][player="${player.type}"]`
                );

            default:
                return;
        }
    };

    const get_specific_tile = (player, [row, column]) => {
        return document.querySelector(
            `.board_tile[player="${player.type}"][data-id="${row}${column}"]`
        );
    };

    const create_ship_DOM = (parts) => {
        const ship_container = document.createElement("div");
        ship_container.setAttribute("size", parts);
        ship_container.classList.add("ship_container");
        ship_container.setAttribute("draggable", true);

        const change_orientation = document.createElement("button");
        change_orientation.classList.add("change_orientation");
        change_orientation.addEventListener("click", (e) => {
            e.target.closest(".ship_container").classList.toggle("vertical");
        });

        for (let i = 0; i < parts; i++) {
            const indiv_part = document.createElement("div");
            indiv_part.classList.add("ship_part");

            ship_container.append(indiv_part);
        }

        ship_container.append(change_orientation);
        ships_container.append(ship_container);
    };

    const is_valid = (ship_size, ship_orientation, tile, player) => {
        const row = Number(tile.getAttribute("data-id")[0]);
        const column = Number(tile.getAttribute("data-id")[1]);

        let next = null;
        switch (ship_orientation) {
            case "x":
                if (column + ship_size > 10) return false;

                next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next.classList.contains("ship_part")) return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            case "y":
                if (row + ship_size > 10) return false;

                next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next.classList.contains("ship_part")) return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            default:
                return;
        }
    };

    const place_ship_DOM = (player, length, [row, column], axis) => {
        const base_tile = get_board_tiles(player).find(
            (tile) => tile.getAttribute("data-id") === `${row}${column}`
        );

        if (is_valid(length, axis, base_tile, player)) {
            const ship_tiles = [base_tile];

            switch (axis) {
                case "x":
                    for (let i = 0; i < length - 1; i++) {
                        ship_tiles.push(
                            get_next_tile(axis, player, ship_tiles[i])
                        );
                    }
                    break;

                case "y":
                    for (let i = 0; i < length - 1; i++) {
                        ship_tiles.push(
                            get_next_tile(axis, player, ship_tiles[i])
                        );
                    }
                    break;

                default:
                    break;
            }

            ship_tiles.forEach((tile) => tile.classList.add("ship_part"));

            const placed_ship = player.gameboard.place_ship(
                length,
                [row, column],
                axis
            );
        } else {
            return false;
        }
    };

    const all_ship_containers = () => {
        return [...document.querySelectorAll(".ship_container")];
    };

    const reset_ships_container = () => {
        while (ships_container.lastChild) ships_container.lastChild.remove();

        DOM_el.create_ship_DOM(2);
        DOM_el.create_ship_DOM(3);
        DOM_el.create_ship_DOM(3);
        DOM_el.create_ship_DOM(4);
        DOM_el.create_ship_DOM(5);
    };

    const attack_DOM = (player, [row, column] = [0, 0]) => {
        switch (player.type) {
            case "AI":
                player.attack();

                const other_player = _game__WEBPACK_IMPORTED_MODULE_0__.Game.player1;

                const r = _game__WEBPACK_IMPORTED_MODULE_0__.Game.cds[0];
                const c = _game__WEBPACK_IMPORTED_MODULE_0__.Game.cds[1];

                const tile_hit = DOM_el.get_specific_tile(other_player, [r, c]);

                tile_hit.classList.add("hit");
                break;

            case "human":
                player.attack([row, column]);
                break;

            default:
                return;
        }
    };

    const select_tile = (target) => {
        // TODO: Improve the current "turn switch system"
        target.classList.add("hit");
        let coords = target.getAttribute("data-id");
        attack_DOM(_game__WEBPACK_IMPORTED_MODULE_0__.Game.player1, [Number(coords[0]), Number(coords[1])]);

        setTimeout(() => {
            console.log(_game__WEBPACK_IMPORTED_MODULE_0__.Game.end);
            if (_game__WEBPACK_IMPORTED_MODULE_0__.Game.end === false) play_turn(_game__WEBPACK_IMPORTED_MODULE_0__.Game.computer);
        }, 300);
    };

    const play_turn = (player) => {
        switch (player.type) {
            case "AI":
                attack_DOM(player, [0, 0]);
                break;

            case "human":
                break;

            default:
                return;
        }
    };

    const activate_start_button = () => {
        const btn = document.querySelector(".start_game_btn");
        btn.addEventListener("click", () => {
            setTimeout(() => {
                btn.remove();
            }, 300);

            get_board_tiles(_game__WEBPACK_IMPORTED_MODULE_0__.Game.computer).forEach((tile) => {
                tile.classList.remove("no");
                tile.addEventListener(
                    "click",
                    (e) => {
                        select_tile(e.target);
                    },
                    { once: true }
                );
            });
        });
    };

    document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    });

    const activate_drag_over_tiles = (player) => {
        get_board_tiles(player).forEach((tile) => {
            tile.addEventListener("drop", (e) => {
                e.preventDefault();

                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                const current_row = Number(tile.getAttribute("data-id")[0]);
                const current_column = Number(tile.getAttribute("data-id")[1]);
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                if (is_valid(ship_size, orientation, tile, player)) {
                    place_ship_DOM(
                        player,
                        ship_size,
                        [current_row, current_column],
                        orientation
                    );

                    let next = tile;
                    for (let i = 0; i < ship_size; i++) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }
                    selected.remove();
                }

                if (ships_container.childElementCount === 0) {
                    const play_game_button = document.createElement("button");
                    play_game_button.classList.add("start_game_btn");
                    play_game_button.textContent = "Start Game";

                    ships_container.append(play_game_button);

                    activate_start_button();
                }
            });

            tile.addEventListener("dragenter", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                if (is_valid(ship_size, orientation, tile, player)) {
                    setTimeout(() => {
                        let next = tile;
                        for (let i = 0; i < ship_size; i++) {
                            next.classList.add("placing_preview");
                            next = get_next_tile(orientation, player, next);
                        }
                    }, 0.1);
                }
            });

            tile.addEventListener("dragleave", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                let next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }
                }
            });
        });
    };

    return {
        main_container,
        player1_board,
        computer_board,
        create_board_tile,
        populate_board,
        get_board_tiles,
        get_next_tile,
        get_specific_tile,
        create_ship_DOM,
        all_ship_containers,
        activate_drag_over_tiles,
        place_ship_DOM,
        reset_ships_container,
    };
})();




/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");



const Game = (function () {
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("human");
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("AI");

    const play_game = () => {
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.player1_board, player1);
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.computer_board, computer);

        add_attack_methods(player1);
        add_attack_methods(computer);

        document.addEventListener("keydown", (e) => {
            if (e.key === "d") console.log(computer.gameboard);
        });

        choose_tiles_automatically(computer);

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.reset_ships_container();

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.activate_drag_over_tiles(player1);
    };

    const random_int = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const random_axis = () => {
        switch (random_int(0, 1)) {
            case 0:
                return "x";

            case 1:
                return "y";

            default:
                return;
        }
    };

    let end = false;
    const reset_game = () => {
        end = true;
        player1.gameboard.ships.splice(0, player1.gameboard.ships.length);

        computer.gameboard.ships.splice(0, computer.gameboard.ships.length);

        for (let i = 0; i < computer.gameboard.tiles.length; i++) {
            for (let j = 0; j < computer.gameboard.tiles[i].length; j++) {
                computer.gameboard.tiles[i][j] = "w";
                player1.gameboard.tiles[i][j] = "w";
            }
        }

        play_game();
    };

    const cds = [];

    const add_attack_methods = (player) => {
        switch (player.type) {
            case "AI":
                player.attack = function () {
                    const row = random_int(0, 9);
                    const column = random_int(0, 9);

                    cds[0] = row;
                    cds[1] = column;

                    const result = player1.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (result) {
                        case "no":
                            player.attack();
                            break;

                        case true:
                            setTimeout(() => {
                                alert("The computer wins!!!");
                                reset_game();
                            }, 300);
                            break;

                        case false:
                            break;

                        default:
                            return;
                    }
                };
                break;

            case "human":
                player.attack = ([row, column]) => {
                    const result = computer.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (result) {
                        case true:
                            alert("You win!!!");
                            reset_game();
                            break;

                        case false:
                            break;

                        default:
                            return "no";
                    }
                };
                break;

            default:
                return;
        }
    };

    const choose_tiles_automatically = (player) => {
        for (let i = 0; i < 5; i++) {
            let ship_size = null;

            let row = null;
            let column = null;

            const axis = random_axis();

            switch (i) {
                case 0:
                    ship_size = 2;
                    break;

                case 1:
                    ship_size = 3;
                    break;

                case 2:
                    ship_size = 3;
                    break;

                case 3:
                    ship_size = 4;
                    break;

                case 4:
                    ship_size = 5;
                    break;

                default:
                    return;
            }

            switch (axis) {
                case "x":
                    row = random_int(0, 9);
                    column = random_int(0, 9 - (ship_size - 1));

                case "y":
                    row = random_int(0, 9 - (ship_size - 1));
                    column = random_int(0, 9);
                    break;

                default:
                    return;
            }

            let valid = false;
            while (valid === false) {
                const axis = random_axis();
                switch (axis) {
                    case "x":
                        row = random_int(0, 9);
                        column = random_int(0, 9 - (ship_size - 1));

                    case "y":
                        row = random_int(0, 9 - (ship_size - 1));
                        column = random_int(0, 9);
                        break;

                    default:
                        return;
                }

                if (
                    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.place_ship_DOM(
                        player,
                        ship_size,
                        [row, column],
                        axis
                    ) !== false
                )
                    valid = true;
            }
        }
    };

    return {
        player1,
        computer,
        play_game,
        random_int,
        random_axis,
        end,
        reset_game,
        add_attack_methods,
        cds,
        choose_tiles_automatically,
    };
})();




/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");


const Gameboard = function () {
    const tiles = (function () {
        const rows = [];

        for (let i = 0; i < 10; i++) {
            const array = [];
            array.length = 10;
            array.fill("w");

            rows.push(array);
        }

        return rows;
    })();

    const ships = [];

    const place_ship = (length, [row, column], axis) => {
        if (!(axis === "x" || axis === "y")) return;
        if (length < 2 || length > 5) return;

        const new_ship = _ship__WEBPACK_IMPORTED_MODULE_0__.Ship.make_ship(length);
        new_ship.orientation = axis;

        new_ship.coordinates = "";

        switch (axis) {
            case "x":
                if (column + length > 10)
                    return "Not possible to place this ship here";

                for (let i = 0; i < length; i++) {
                    if (tiles[row][column + i] !== "w") return;
                }

                for (let i = 0; i < length; i++) {
                    column + i < 10
                        ? (tiles[row][column + i] = new_ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (new_ship.coordinates += `(${[row, column + i]}); `)
                        : (new_ship.coordinates += `(${[row, column + i]})`);
                }

                break;

            case "y":
                if (row + length > 10)
                    return "Not possible to place this ship here";

                for (let i = 0; i < length; i++) {
                    if (tiles[row + i][column] !== "w") return;
                }

                for (let i = 0; i < length; i++) {
                    row + i < 10
                        ? (tiles[row + i][column] = new_ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (new_ship.coordinates += `(${[row + i, column]}); `)
                        : (new_ship.coordinates += `(${[row + i, column]})`);
                }

                break;

            default:
                return;
        }

        ships.push(new_ship);

        return new_ship;
    };

    const receive_attack = ([row, column]) => {
        switch (tiles[row][column]) {
            case 0:
                tiles[row][column] = 1;
                let ship_hit = ships.find(({ coordinates }) =>
                    coordinates.includes(`(${row},${column})`)
                );

                let coords_array = ship_hit.coordinates.split(";");
                coords_array = coords_array.map((coord) => coord.trim());

                const part_hit = coords_array.indexOf(`(${row},${column})`);
                ship_hit.hit(part_hit);

                break;

            case "w":
                tiles[row][column] = "m";
                break;

            default:
                return "no";
        }

        return ships.every((ship) => ship.is_sunk());
    };

    return {
        tiles,
        place_ship,
        receive_attack,
        ships,
    };
};




/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");


const Player = function (type) {
    if (!(type === "human" || type === "AI")) return;

    const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

    return { gameboard, type };
};




/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (function () {
    const prototype = (function () {
        const hit = function (position) {
            this.parts[position] = 1;
        };

        const is_sunk = function () {
            return this.parts.every((part) => part === 1);
        };

        return {
            hit,
            is_sunk,
        };
    })();

    ////

    const make_ship = function (length) {
        if (!Number(length)) return;

        const parts = [];
        parts.length = length;
        parts.fill(0);

        return Object.assign(Object.create(prototype), {
            length,
            parts,
        });
    };

    return {
        make_ship,
    };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_battleship_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/battleship.css */ "./src/css/battleship.css");
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/js/game.js");



// import { play_game } from "./play_game";

const init = function () {
    _game__WEBPACK_IMPORTED_MODULE_2__.Game.play_game();
    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.all_ship_containers().forEach((container) =>
        container.addEventListener("dragstart", () => {
            container.classList.toggle("being_dragged");
        })
    );

    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.all_ship_containers().forEach((container) =>
        container.addEventListener("dragend", () => {
            container.classList.toggle("being_dragged");
        })
    );

    document.addEventListener("keydown", (e) => {
        if (e.key === "r") _game__WEBPACK_IMPORTED_MODULE_2__.Game.reset_game();
    });
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDJCQUEyQixrREFBZTtBQUMxQyxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvY3NzL2JhdHRsZXNoaXAuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2Nzcy9iYXR0bGVzaGlwLmNzcz9hYjFiIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL0RPTV9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogIzExMTtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXIxX2JvYXJkLFxcbi5jb21wdXRlcl9ib2FyZCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgb3V0bGluZTogNXB4IHNvbGlkICM2NjY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoOTUsIDk1LCAyNDUpLCByZ2IoMTQ0LCAyNDcsIDI0NykpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuLnBsYXllcjFfYm9hcmQge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uY29tcHV0ZXJfYm9hcmQge1xcbiAgICBib3R0b206IDUwJTtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbn1cXG5cXG4uYm9hcmRfdGlsZSB7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcHVycGxlO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnNoaXBfcGFydCB7XFxuICAgIGJhY2tncm91bmQ6IHZpb2xldDtcXG59XFxuXFxuLmJvYXJkX3RpbGUuaGl0LFxcbi5ib2FyZF90aWxlLm5vLFxcbi5ib2FyZF90aWxlW3BsYXllcj1cXFwiaHVtYW5cXFwiXSB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5ib2FyZF90aWxlLm5vIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5ib2FyZF90aWxlLmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5ib2FyZF90aWxlLnNoaXBfcGFydC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCA2NCwgNjQpO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciAuc2hpcF9wYXJ0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIgLnNoaXBfY29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNoaXBfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uLmNoYW5nZV9vcmllbnRhdGlvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogY3lhbjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDBweCAzcHggYmx1ZTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbmJ1dHRvbi5jaGFuZ2Vfb3JpZW50YXRpb246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbn1cXG5cXG4uYmVpbmdfZHJhZ2dlZCAuc2hpcF9wYXJ0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMTMwLCAyMzgsIDAuNyk7XFxufVxcblxcbi5wbGFjaW5nX3ByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW1lO1xcbn1cXG5cXG5bcGxheWVyPVxcXCJodW1hblxcXCJdLmJvYXJkX3RpbGUge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnN0YXJ0X2dhbWVfYnRuIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcblxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibHVldmlvbGV0O1xcbn1cXG5cXG4uc3RhcnRfZ2FtZV9idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCA5OCwgMTAwKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9iYXR0bGVzaGlwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpRUFBaUU7O0lBRWpFLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixVQUFVOztJQUVWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXOztJQUVYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsUUFBUTs7SUFFUixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQ0FBa0M7O0lBRWxDLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxufVxcblxcbi5tYWluX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyMV9ib2FyZCxcXG4uY29tcHV0ZXJfYm9hcmQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG91dGxpbmU6IDVweCBzb2xpZCAjNjY2O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDk1LCA5NSwgMjQ1KSwgcmdiKDE0NCwgMjQ3LCAyNDcpKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxufVxcblxcbi5wbGF5ZXIxX2JvYXJkIHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLmNvbXB1dGVyX2JvYXJkIHtcXG4gICAgYm90dG9tOiA1MCU7XFxuICAgIHJpZ2h0OiA1MHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG59XFxuXFxuLmJvYXJkX3RpbGUge1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5zaGlwX3BhcnQge1xcbiAgICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XFxufVxcblxcbi5ib2FyZF90aWxlLmhpdCxcXG4uYm9hcmRfdGlsZS5ubyxcXG4uYm9hcmRfdGlsZVtwbGF5ZXI9XFxcImh1bWFuXFxcIl0ge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5ubyB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5zaGlwX3BhcnQuaGl0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgNjQsIDY0KTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIgLnNoaXBfcGFydCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcHVycGxlO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIC5zaGlwX2NvbnRhaW5lciB7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zaGlwX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbi5jaGFuZ2Vfb3JpZW50YXRpb24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGN5YW47XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAwcHggM3B4IGJsdWU7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5idXR0b24uY2hhbmdlX29yaWVudGF0aW9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG59XFxuXFxuLmJlaW5nX2RyYWdnZWQgLnNoaXBfcGFydCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzgsIDEzMCwgMjM4LCAwLjcpO1xcbn1cXG5cXG4ucGxhY2luZ19wcmV2aWV3IHtcXG4gICAgYmFja2dyb3VuZDogbGltZTtcXG59XFxuXFxuW3BsYXllcj1cXFwiaHVtYW5cXFwiXS5ib2FyZF90aWxlIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zdGFydF9nYW1lX2J0biB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG5cXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmx1ZXZpb2xldDtcXG59XFxuXFxuLnN0YXJ0X2dhbWVfYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNSwgOTgsIDEwMCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmF0dGxlc2hpcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhdHRsZXNoaXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IERPTV9lbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWFpbl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcGxheWVyMV9ib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMV9ib2FyZFwiKTtcbiAgICBjb25zdCBjb21wdXRlcl9ib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJfYm9hcmRcIik7XG5cbiAgICBjb25zdCBzaGlwc19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzX2NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNyZWF0ZV9ib2FyZF90aWxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZF90aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9hcmRfdGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmRfdGlsZVwiKTtcblxuICAgICAgICByZXR1cm4gYm9hcmRfdGlsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcG9wdWxhdGVfYm9hcmQgPSAoYm9hcmQsIHBsYXllcikgPT4ge1xuICAgICAgICB3aGlsZSAoYm9hcmQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBib2FyZC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lYm9hcmQudGlsZXMuZmxhdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib2FyZF90aWxlID0gY3JlYXRlX2JvYXJkX3RpbGUoKTtcbiAgICAgICAgICAgIGJvYXJkX3RpbGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1pZFwiLFxuICAgICAgICAgICAgICAgIGkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLFxuICAgICAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGJvYXJkX3RpbGUuc2V0QXR0cmlidXRlKFwicGxheWVyXCIsIHBsYXllci50eXBlKTtcbiAgICAgICAgICAgIGJvYXJkX3RpbGUuY2xhc3NMaXN0LmFkZChcIm5vXCIpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKGJvYXJkX3RpbGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldF9ib2FyZF90aWxlcyA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmRfdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYC5ib2FyZF90aWxlW3BsYXllcj0ke3BsYXllci50eXBlfV1gXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYm9hcmRfdGlsZXMpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRfbmV4dF90aWxlID0gKGF4aXMsIHBsYXllciwgdGlsZSkgPT4ge1xuICAgICAgICBpZiAoIShheGlzID09PSBcInlcIiB8fCBheGlzID09PSBcInhcIikpIHJldHVybjtcblxuICAgICAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSkgKyAxMFxuICAgICAgICAgICAgICAgICAgICB9XCJdW3BsYXllcj1cIiR7cGxheWVyLnR5cGV9XCJdYFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldF9zcGVjaWZpY190aWxlID0gKHBsYXllciwgW3JvdywgY29sdW1uXSkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYm9hcmRfdGlsZVtwbGF5ZXI9XCIke3BsYXllci50eXBlfVwiXVtkYXRhLWlkPVwiJHtyb3d9JHtjb2x1bW59XCJdYFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVfc2hpcF9ET00gPSAocGFydHMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzaGlwX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsIHBhcnRzKTtcbiAgICAgICAgc2hpcF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNoaXBfY29udGFpbmVyXCIpO1xuICAgICAgICBzaGlwX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgY2hhbmdlX29yaWVudGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2hhbmdlX29yaWVudGF0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2Vfb3JpZW50YXRpb25cIik7XG4gICAgICAgIGNoYW5nZV9vcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIuc2hpcF9jb250YWluZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGl2X3BhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaW5kaXZfcGFydC5jbGFzc0xpc3QuYWRkKFwic2hpcF9wYXJ0XCIpO1xuXG4gICAgICAgICAgICBzaGlwX2NvbnRhaW5lci5hcHBlbmQoaW5kaXZfcGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwX2NvbnRhaW5lci5hcHBlbmQoY2hhbmdlX29yaWVudGF0aW9uKTtcbiAgICAgICAgc2hpcHNfY29udGFpbmVyLmFwcGVuZChzaGlwX2NvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzX3ZhbGlkID0gKHNoaXBfc2l6ZSwgc2hpcF9vcmllbnRhdGlvbiwgdGlsZSwgcGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE51bWJlcih0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIilbMF0pO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpWzFdKTtcblxuICAgICAgICBsZXQgbmV4dCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAoc2hpcF9vcmllbnRhdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uICsgc2hpcF9zaXplID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIG5leHQgPSB0aWxlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcF9wYXJ0XCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBnZXRfbmV4dF90aWxlKHNoaXBfb3JpZW50YXRpb24sIHBsYXllciwgbmV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgaWYgKHJvdyArIHNoaXBfc2l6ZSA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBfcGFydFwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShzaGlwX29yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZV9zaGlwX0RPTSA9IChwbGF5ZXIsIGxlbmd0aCwgW3JvdywgY29sdW1uXSwgYXhpcykgPT4ge1xuICAgICAgICBjb25zdCBiYXNlX3RpbGUgPSBnZXRfYm9hcmRfdGlsZXMocGxheWVyKS5maW5kKFxuICAgICAgICAgICAgKHRpbGUpID0+IHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSA9PT0gYCR7cm93fSR7Y29sdW1ufWBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaXNfdmFsaWQobGVuZ3RoLCBheGlzLCBiYXNlX3RpbGUsIHBsYXllcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBfdGlsZXMgPSBbYmFzZV90aWxlXTtcblxuICAgICAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfdGlsZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRfbmV4dF90aWxlKGF4aXMsIHBsYXllciwgc2hpcF90aWxlc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcF90aWxlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldF9uZXh0X3RpbGUoYXhpcywgcGxheWVyLCBzaGlwX3RpbGVzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwX3RpbGVzLmZvckVhY2goKHRpbGUpID0+IHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXBfcGFydFwiKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWNlZF9zaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZV9zaGlwKFxuICAgICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgICBbcm93LCBjb2x1bW5dLFxuICAgICAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWxsX3NoaXBfY29udGFpbmVycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBfY29udGFpbmVyXCIpXTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRfc2hpcHNfY29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAoc2hpcHNfY29udGFpbmVyLmxhc3RDaGlsZCkgc2hpcHNfY29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcblxuICAgICAgICBET01fZWwuY3JlYXRlX3NoaXBfRE9NKDIpO1xuICAgICAgICBET01fZWwuY3JlYXRlX3NoaXBfRE9NKDMpO1xuICAgICAgICBET01fZWwuY3JlYXRlX3NoaXBfRE9NKDMpO1xuICAgICAgICBET01fZWwuY3JlYXRlX3NoaXBfRE9NKDQpO1xuICAgICAgICBET01fZWwuY3JlYXRlX3NoaXBfRE9NKDUpO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRhY2tfRE9NID0gKHBsYXllciwgW3JvdywgY29sdW1uXSA9IFswLCAwXSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBsYXllci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQUlcIjpcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXR0YWNrKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvdGhlcl9wbGF5ZXIgPSBHYW1lLnBsYXllcjE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByID0gR2FtZS5jZHNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IEdhbWUuY2RzWzFdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZV9oaXQgPSBET01fZWwuZ2V0X3NwZWNpZmljX3RpbGUob3RoZXJfcGxheWVyLCBbciwgY10pO1xuXG4gICAgICAgICAgICAgICAgdGlsZV9oaXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImh1bWFuXCI6XG4gICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjayhbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0X3RpbGUgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIC8vIFRPRE86IEltcHJvdmUgdGhlIGN1cnJlbnQgXCJ0dXJuIHN3aXRjaCBzeXN0ZW1cIlxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgICAgICBhdHRhY2tfRE9NKEdhbWUucGxheWVyMSwgW051bWJlcihjb29yZHNbMF0pLCBOdW1iZXIoY29vcmRzWzFdKV0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coR2FtZS5lbmQpO1xuICAgICAgICAgICAgaWYgKEdhbWUuZW5kID09PSBmYWxzZSkgcGxheV90dXJuKEdhbWUuY29tcHV0ZXIpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5X3R1cm4gPSAocGxheWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBSVwiOlxuICAgICAgICAgICAgICAgIGF0dGFja19ET00ocGxheWVyLCBbMCwgMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaHVtYW5cIjpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aXZhdGVfc3RhcnRfYnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0X2dhbWVfYnRuXCIpO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICAgIGdldF9ib2FyZF90aWxlcyhHYW1lLmNvbXB1dGVyKS5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwibm9cIik7XG4gICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RfdGlsZShlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWN0aXZhdGVfZHJhZ19vdmVyX3RpbGVzID0gKHBsYXllcikgPT4ge1xuICAgICAgICBnZXRfYm9hcmRfdGlsZXMocGxheWVyKS5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlaW5nX2RyYWdnZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwX3NpemUgPSBOdW1iZXIoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudF9yb3cgPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50X2NvbHVtbiA9IE51bWJlcih0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIilbMV0pO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIilcbiAgICAgICAgICAgICAgICAgICAgPyAob3JpZW50YXRpb24gPSBcInlcIilcbiAgICAgICAgICAgICAgICAgICAgOiAob3JpZW50YXRpb24gPSBcInhcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNfdmFsaWQoc2hpcF9zaXplLCBvcmllbnRhdGlvbiwgdGlsZSwgcGxheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZV9zaGlwX0RPTShcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjdXJyZW50X3JvdywgY3VycmVudF9jb2x1bW5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNpbmdfcHJldmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBnZXRfbmV4dF90aWxlKG9yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzaGlwc19jb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheV9nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlfZ2FtZV9idXR0b24uY2xhc3NMaXN0LmFkZChcInN0YXJ0X2dhbWVfYnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgc2hpcHNfY29udGFpbmVyLmFwcGVuZChwbGF5X2dhbWVfYnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZV9zdGFydF9idXR0b24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlaW5nX2RyYWdnZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwX3NpemUgPSBOdW1iZXIoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgICAgICA/IChvcmllbnRhdGlvbiA9IFwieVwiKVxuICAgICAgICAgICAgICAgICAgICA6IChvcmllbnRhdGlvbiA9IFwieFwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc192YWxpZChzaGlwX3NpemUsIG9yaWVudGF0aW9uLCB0aWxlLCBwbGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX3NpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZChcInBsYWNpbmdfcHJldmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShvcmllbnRhdGlvbiwgcGxheWVyLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlaW5nX2RyYWdnZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwX3NpemUgPSBOdW1iZXIoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgICAgICA/IChvcmllbnRhdGlvbiA9IFwieVwiKVxuICAgICAgICAgICAgICAgICAgICA6IChvcmllbnRhdGlvbiA9IFwieFwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjaW5nX3ByZXZpZXdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShvcmllbnRhdGlvbiwgcGxheWVyLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbl9jb250YWluZXIsXG4gICAgICAgIHBsYXllcjFfYm9hcmQsXG4gICAgICAgIGNvbXB1dGVyX2JvYXJkLFxuICAgICAgICBjcmVhdGVfYm9hcmRfdGlsZSxcbiAgICAgICAgcG9wdWxhdGVfYm9hcmQsXG4gICAgICAgIGdldF9ib2FyZF90aWxlcyxcbiAgICAgICAgZ2V0X25leHRfdGlsZSxcbiAgICAgICAgZ2V0X3NwZWNpZmljX3RpbGUsXG4gICAgICAgIGNyZWF0ZV9zaGlwX0RPTSxcbiAgICAgICAgYWxsX3NoaXBfY29udGFpbmVycyxcbiAgICAgICAgYWN0aXZhdGVfZHJhZ19vdmVyX3RpbGVzLFxuICAgICAgICBwbGFjZV9zaGlwX0RPTSxcbiAgICAgICAgcmVzZXRfc2hpcHNfY29udGFpbmVyLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBET01fZWwgfTtcbiIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IEdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJodW1hblwiKTtcbiAgICBjb25zdCBjb21wdXRlciA9IFBsYXllcihcIkFJXCIpO1xuXG4gICAgY29uc3QgcGxheV9nYW1lID0gKCkgPT4ge1xuICAgICAgICBET01fZWwucG9wdWxhdGVfYm9hcmQoRE9NX2VsLnBsYXllcjFfYm9hcmQsIHBsYXllcjEpO1xuICAgICAgICBET01fZWwucG9wdWxhdGVfYm9hcmQoRE9NX2VsLmNvbXB1dGVyX2JvYXJkLCBjb21wdXRlcik7XG5cbiAgICAgICAgYWRkX2F0dGFja19tZXRob2RzKHBsYXllcjEpO1xuICAgICAgICBhZGRfYXR0YWNrX21ldGhvZHMoY29tcHV0ZXIpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiZFwiKSBjb25zb2xlLmxvZyhjb21wdXRlci5nYW1lYm9hcmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaG9vc2VfdGlsZXNfYXV0b21hdGljYWxseShjb21wdXRlcik7XG5cbiAgICAgICAgRE9NX2VsLnJlc2V0X3NoaXBzX2NvbnRhaW5lcigpO1xuXG4gICAgICAgIERPTV9lbC5hY3RpdmF0ZV9kcmFnX292ZXJfdGlsZXMocGxheWVyMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbV9pbnQgPSAobWluLCBtYXgpID0+IHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbV9heGlzID0gKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbV9pbnQoMCwgMSkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ4XCI7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ5XCI7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxldCBlbmQgPSBmYWxzZTtcbiAgICBjb25zdCByZXNldF9nYW1lID0gKCkgPT4ge1xuICAgICAgICBlbmQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwcy5zcGxpY2UoMCwgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoKTtcblxuICAgICAgICBjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMuc3BsaWNlKDAsIGNvbXB1dGVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXIuZ2FtZWJvYXJkLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbXB1dGVyLmdhbWVib2FyZC50aWxlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyLmdhbWVib2FyZC50aWxlc1tpXVtqXSA9IFwid1wiO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLnRpbGVzW2ldW2pdID0gXCJ3XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5X2dhbWUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2RzID0gW107XG5cbiAgICBjb25zdCBhZGRfYXR0YWNrX21ldGhvZHMgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBSVwiOlxuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2RzWzBdID0gcm93O1xuICAgICAgICAgICAgICAgICAgICBjZHNbMV0gPSBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyMS5nYW1lYm9hcmQucmVjZWl2ZV9hdHRhY2soW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVGhlIGNvbXB1dGVyIHdpbnMhISFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0X2dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJodW1hblwiOlxuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2sgPSAoW3JvdywgY29sdW1uXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZV9hdHRhY2soW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHdpbiEhIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldF9nYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibm9cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNob29zZV90aWxlc19hdXRvbWF0aWNhbGx5ID0gKHBsYXllcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXBfc2l6ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSByYW5kb21fYXhpcygpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc2l6ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc2l6ZSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSA1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gcmFuZG9tX2ludCgwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gcmFuZG9tX2ludCgwLCA5IC0gKHNoaXBfc2l6ZSAtIDEpKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHJhbmRvbV9pbnQoMCwgOSAtIChzaGlwX3NpemUgLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICh2YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlzID0gcmFuZG9tX2F4aXMoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSByYW5kb21faW50KDAsIDkgLSAoc2hpcF9zaXplIC0gMSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSByYW5kb21faW50KDAsIDkgLSAoc2hpcF9zaXplIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gcmFuZG9tX2ludCgwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBET01fZWwucGxhY2Vfc2hpcF9ET00oXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93LCBjb2x1bW5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICAgICAgICAgICApICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcjEsXG4gICAgICAgIGNvbXB1dGVyLFxuICAgICAgICBwbGF5X2dhbWUsXG4gICAgICAgIHJhbmRvbV9pbnQsXG4gICAgICAgIHJhbmRvbV9heGlzLFxuICAgICAgICBlbmQsXG4gICAgICAgIHJlc2V0X2dhbWUsXG4gICAgICAgIGFkZF9hdHRhY2tfbWV0aG9kcyxcbiAgICAgICAgY2RzLFxuICAgICAgICBjaG9vc2VfdGlsZXNfYXV0b21hdGljYWxseSxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgR2FtZSB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRpbGVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGFycmF5Lmxlbmd0aCA9IDEwO1xuICAgICAgICAgICAgYXJyYXkuZmlsbChcIndcIik7XG5cbiAgICAgICAgICAgIHJvd3MucHVzaChhcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlX3NoaXAgPSAobGVuZ3RoLCBbcm93LCBjb2x1bW5dLCBheGlzKSA9PiB7XG4gICAgICAgIGlmICghKGF4aXMgPT09IFwieFwiIHx8IGF4aXMgPT09IFwieVwiKSkgcmV0dXJuO1xuICAgICAgICBpZiAobGVuZ3RoIDwgMiB8fCBsZW5ndGggPiA1KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbmV3X3NoaXAgPSBTaGlwLm1ha2Vfc2hpcChsZW5ndGgpO1xuICAgICAgICBuZXdfc2hpcC5vcmllbnRhdGlvbiA9IGF4aXM7XG5cbiAgICAgICAgbmV3X3NoaXAuY29vcmRpbmF0ZXMgPSBcIlwiO1xuXG4gICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uICsgbGVuZ3RoID4gMTApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBwb3NzaWJsZSB0byBwbGFjZSB0aGlzIHNoaXAgaGVyZVwiO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZXNbcm93XVtjb2x1bW4gKyBpXSAhPT0gXCJ3XCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiArIGkgPCAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAodGlsZXNbcm93XVtjb2x1bW4gKyBpXSA9IG5ld19zaGlwLnBhcnRzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWxlc1tyb3ddW2NvbHVtbl07XG5cbiAgICAgICAgICAgICAgICAgICAgIShpID09PSBsZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAobmV3X3NoaXAuY29vcmRpbmF0ZXMgKz0gYCgke1tyb3csIGNvbHVtbiArIGldfSk7IGApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChuZXdfc2hpcC5jb29yZGluYXRlcyArPSBgKCR7W3JvdywgY29sdW1uICsgaV19KWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyBsZW5ndGggPiAxMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90IHBvc3NpYmxlIHRvIHBsYWNlIHRoaXMgc2hpcCBoZXJlXCI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlc1tyb3cgKyBpXVtjb2x1bW5dICE9PSBcIndcIikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ICsgaSA8IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICh0aWxlc1tyb3cgKyBpXVtjb2x1bW5dID0gbmV3X3NoaXAucGFydHNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRpbGVzW3Jvd11bY29sdW1uXTtcblxuICAgICAgICAgICAgICAgICAgICAhKGkgPT09IGxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChuZXdfc2hpcC5jb29yZGluYXRlcyArPSBgKCR7W3JvdyArIGksIGNvbHVtbl19KTsgYClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKG5ld19zaGlwLmNvb3JkaW5hdGVzICs9IGAoJHtbcm93ICsgaSwgY29sdW1uXX0pYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcHMucHVzaChuZXdfc2hpcCk7XG5cbiAgICAgICAgcmV0dXJuIG5ld19zaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlX2F0dGFjayA9IChbcm93LCBjb2x1bW5dKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGlsZXNbcm93XVtjb2x1bW5dKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGlsZXNbcm93XVtjb2x1bW5dID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcF9oaXQgPSBzaGlwcy5maW5kKCh7IGNvb3JkaW5hdGVzIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmluY2x1ZGVzKGAoJHtyb3d9LCR7Y29sdW1ufSlgKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzX2FycmF5ID0gc2hpcF9oaXQuY29vcmRpbmF0ZXMuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgICAgIGNvb3Jkc19hcnJheSA9IGNvb3Jkc19hcnJheS5tYXAoKGNvb3JkKSA9PiBjb29yZC50cmltKCkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydF9oaXQgPSBjb29yZHNfYXJyYXkuaW5kZXhPZihgKCR7cm93fSwke2NvbHVtbn0pYCk7XG4gICAgICAgICAgICAgICAgc2hpcF9oaXQuaGl0KHBhcnRfaGl0KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgICAgIHRpbGVzW3Jvd11bY29sdW1uXSA9IFwibVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNfc3VuaygpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGlsZXMsXG4gICAgICAgIHBsYWNlX3NoaXAsXG4gICAgICAgIHJlY2VpdmVfYXR0YWNrLFxuICAgICAgICBzaGlwcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAoISh0eXBlID09PSBcImh1bWFuXCIgfHwgdHlwZSA9PT0gXCJBSVwiKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICByZXR1cm4geyBnYW1lYm9hcmQsIHR5cGUgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY29uc3QgU2hpcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRzW3Bvc2l0aW9uXSA9IDE7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaXNfc3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiBwYXJ0ID09PSAxKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGl0LFxuICAgICAgICAgICAgaXNfc3VuayxcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8vL1xuXG4gICAgY29uc3QgbWFrZV9zaGlwID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgICBpZiAoIU51bWJlcihsZW5ndGgpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBbXTtcbiAgICAgICAgcGFydHMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICBwYXJ0cy5maWxsKDApO1xuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG90eXBlKSwge1xuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgcGFydHMsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlX3NoaXAsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9iYXR0bGVzaGlwLmNzc1wiO1xuaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuLy8gaW1wb3J0IHsgcGxheV9nYW1lIH0gZnJvbSBcIi4vcGxheV9nYW1lXCI7XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgR2FtZS5wbGF5X2dhbWUoKTtcbiAgICBET01fZWwuYWxsX3NoaXBfY29udGFpbmVycygpLmZvckVhY2goKGNvbnRhaW5lcikgPT5cbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJiZWluZ19kcmFnZ2VkXCIpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBET01fZWwuYWxsX3NoaXBfY29udGFpbmVycygpLmZvckVhY2goKGNvbnRhaW5lcikgPT5cbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYmVpbmdfZHJhZ2dlZFwiKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcInJcIikgR2FtZS5yZXNldF9nYW1lKCk7XG4gICAgfSk7XG59O1xuXG5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=