module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "15fd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9ca3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5f0e680c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1da2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a2e7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("af767c42", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "52ed":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACzUlEQVRYR8VXy3EaQRDtXmr3amVgFIHkCIwikIhAUgSGy0xxsnSidjhgRyCIQCgC4wiEIrCUgX2FYtv1tmbwMLAfKLDmQjE7O/369e8t0zsvfmf7tBMAY8y5iFwzM36bzNy0DvwmopmIzJh5rJSa1XWsFgBjzI2IfPUMlt4vIq9E1NVaT6qAlAKwHj9uMfxGRDACz7FOROScmT8EBqdxHLe73W5+Lk3TK2b+QkRgaYS9QgD28AMux0ER+UNE35h5UkTxYDBoZVl2w8zXHhAYv8A7xpgpEX0mop9KqVYhAGv80V0iIuMkSTrOkypaLXMjZj7zcuQCDlQCwMtE9MN5TkS3jq4qw+HzNE0BwrEBJhA23F/MgDEGhz7ay/Y27sAEINz2dgDIdiJC3BHzsdYa//daaZp2oijKk1JEOh6j2CoEkHuPhEuSpFk35iFC35EC9JsAkMEigtgD8b3W+m4v14mo3+83oyhCUwrLMr9SRNAjkJD/ytAYgw3UKC2Xy9Nerwc2jr5WfcCr0TellGux/xWAy/5VfA5tfTgcniwWi7M4jl9cfvkMyCGyvwy0MQaz4ZKInpRSV2EO5AD8h4dmoLQVew3oaCEwxjgnN8vQocMo1VqfHtp7lGaj0fgVlrmfA6syJKJPu4iKOmCDLtt2WsEHgCHxfKxE9OJPSqmV3TU94A+iQzajoMuuzZg1AL4OEJGJ1rpdh96yM6j9+Xz+7FRV6NiGIvKpIqLvSilMsr1X1X0bACziV2+QjJRSt7sisF0PqiqXXiLyorVGnq2trZrQSqqpBwJarlu3Mqw2fHC0l433QlFqpRlap1NHQD4SkWmSJE+hVrDMXTIzREzutfM8SZJWkbYoleWWRshn9O9w5R8jdnNlMDhUmUO1PkxsGUGgQFJXLsi5LMvu6miKWgCcRcsIphiSKUwofJohPNNdpNxOACpd3+PAuwP4C2Z6mzDwI//+AAAAAElFTkSuQmCC"

/***/ }),

/***/ "64a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_verify_vue_vue_type_style_index_0_id_db454038_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("15fd");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_verify_vue_vue_type_style_index_0_id_db454038_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_verify_vue_vue_type_style_index_0_id_db454038_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_verify_vue_vue_type_style_index_0_id_db454038_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9ca3":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".box[data-v-db454038]{width:340px;border:1px solid #8b8989;padding:0 10px 0 10px}.box_title[data-v-db454038]{left:0;height:50px;font-size:15px;border:1px solid red;color:#000}.boxImage[data-v-db454038]{position:relative;width:100%;overflow:hidden;-webkit-box-shadow:0 0 px 0 rgba(0,0,0,.4);box-shadow:0 0 0 px rgba(0,0,0,.4)}.suessMask[data-v-db454038]{width:100%;height:100%;background-color:#fff;z-index:11;opacity:.6;position:absolute;top:0;left:0}.verifyImage[data-v-db454038]{height:200px;width:100%}.verified[data-v-db454038]{height:50px;width:50px;z-index:10;position:absolute;top:0;left:0}.drag[data-v-db454038]{border:1px solid red;height:34px;font-size:10px;line-height:34px;text-align:center}.drag[data-v-db454038],.stroke[data-v-db454038]{position:relative;width:100%}.stroke[data-v-db454038]{height:15px;background-color:#e4e4e4;top:10px;border-radius:20px}.handler[data-v-db454038]{width:60px;height:32px;border-radius:50px;cursor:move}.handler_bg[data-v-db454038]{background:#fff url(" + escape(__webpack_require__("c271")) + ") no-repeat 50%}.handler_ok_bg[data-v-db454038]{background:#fff url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==\") no-repeat 50%}.drag_text[data-v-db454038]{position:absolute;top:0;width:100%;text-align:center;-moz-user-select:none;-webkit-user-select:none;user-select:none;-o-user-select:none;-ms-user-select:none}.result[data-v-db454038]{margin-top:20px;height:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.result_title[data-v-db454038]{font-size:10px}.reflesh[data-v-db454038]{border:1px solid red;margin-left:150px}.out[data-v-db454038],.reflesh[data-v-db454038]{height:20px;width:20px}", ""]);

// exports


/***/ }),

/***/ "a2e7":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".animated{-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:.4s;animation-duration:.4s}.around{-webkit-animation-name:aroundAnimation;animation-name:aroundAnimation;-webkit-transform-origin:center bottom;transform-origin:center bottom;cursor:pointer}@-webkit-keyframes aroundAnimation{0%,20%,50%,80%,to{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transition-timing-function:cubic-bezier(.755,.5,.855,.06);transition-timing-function:cubic-bezier(.755,.5,.855,.06);-webkit-transform:translate3d(-20px,0,0,0);transform:translate3d(-20px,0,0,0)}70%{-webkit-transition-timing-function:cubic-bezier(.755,.05,.855,.06);transition-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}}@keyframes aroundAnimation{0%,20%,50%,80%,to{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transition-timing-function:cubic-bezier(.755,.5,.855,.06);transition-timing-function:cubic-bezier(.755,.5,.855,.06);-webkit-transform:translate3d(-20px,0,0,0);transform:translate3d(-20px,0,0,0)}70%{-webkit-transition-timing-function:cubic-bezier(.755,.05,.855,.06);transition-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}}", ""]);

// exports


/***/ }),

/***/ "b041":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "c271":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAgCAYAAABO6BuSAAABd0lEQVRYR+2Z3VHCQBDHf2sjagXagdiBHUgHhDfDiz4Bb5IObMEOQgVCBWIjWWcJUSAjlxuHmVxy93jZvdv/fmb3hOP1pFcII4QBcFv7HsbGCiVHyZjLZl9kOZA/1VeEJAxMDaVUFsxkXFH/Ap7oR8AWPY3erD2TeyMqAU90AYwa6ixUsoypJILF7AWfoaLwkrvgWnpi3UovmQHubuzWzb8ywOrlFoETR8DeBlTGKCuEIcJjA/4v4G1HNwQunTwF25LiccefR/7fwibMXHIm+gI8O4VXlszE/uIg1Rzhzskzlap8NrvjxIERsFPbxwTRwg6VRZeOMVx3kZi0vDPND0PM0t66i1k6ZulDDcSyFMtSy8tS2flsUAa70a4r79kItZyMCjZLazIKtqYBjzvO2C254LXsu5Cq9bI3LZPrPOIo6x4O8Xo3pjXn6dUgvoqWbsfyO1N5KAvD/uqmpbdPLBXMQ8C2W8Z0sqt5YWZvZY2QU7A4fi79BsD7JXCxDXyRAAAAAElFTkSuQmCC"

/***/ }),

/***/ "d124":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACpUlEQVRYR72XjTFEMRSFz1ZgtwMqQAWoYG0FqAAVoAJUgApQASpABagAFTBfJvdNXjbJS1juzM7Ovs3LOTn3NyO12bakqaRlSWNJa/71J0kfkl4l3Ui6rd12VLEQsCNJgAOKPXtAQDGe81n1v3kOkUO/LgszROBY0r7fnFOxKR8DjjeGBER3JW34dWeSTnIMcgTY6M5L/CAJIvcVaoVLNv17EMFFWyniKQL4FXBI7Em6bASOl6PGhQeHBGQ6iwkA+iKJ50jZeuocV9TAdV+SVkIlQgKh7DBdFLiRggTKosC6PQwJ4GeifRGy55QwdxCU4DmpMVLt0acXTFN+hHnPf4XYCOtDvAxlSVfnCiNAoO34SI2lLwZRgoQFMX/NBZ0kc8UV6WoEyGuACbzY2JD/lnKRHLwQZtCnB0upZipMLNqvB3xfQ6IWHL6m6gwCJv9koGyWSLSAQ4CMe5d0DgHkCBtLqe6kSLDeCldJ9nhf18AgYJ0sFf0pMjEJO1ELOO+4uIIA1YlGkwrAnBohCda0gvMOlXH6GwImO5uRRamUK7mzI/ATF4Q+B6QmRVMFaWxByAZdfR6ocHHAdf5sVKILwpY0zEV7TZ0Iz9VLQ4KvphANpVoLiV4hsiAqleIhcDtdLQmwWOtiAKtpRrWpFpJItfZkM8InjNS0ZNIpNiRrbccQSY1zdnpGgK4dA/gfA8mBpFM/JfcGEjsxp2RY+MuRjDuFDSzdRGQEzBWU59kC50L8TqYRR4B394rcWG4DyCLmQ5P9zfeb4lgeKmFTC98Mka1TMqdmyOUb2fmeu1HVXM04AaUaAkQ1nbN0NePyStYAiORczVzApWyIgPV6NqFiQgSzBhZfTi24AKbbQT5H1m1UQyAkDglO5qpYcBu22zLEUArwKvsGKpvX/t4r0rwAAAAASUVORK5CYII="

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"504d0e0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-verify/src/vue-verify.vue?vue&type=template&id=db454038&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box"},[_c('div',{staticClass:"box_title"},[_vm._v("拖动下方滑块完成拼图")]),_c('div',{staticClass:"boxImage"},[_c('div',{staticClass:"imageArea"},[_c('img',{staticClass:"verifyImage",attrs:{"src":_vm.verifyInfo.puzzle}})]),_c('div',[_c('img',{staticClass:"verified",class:{'around animated':_vm.btnFailShake},attrs:{"id":"verifiedGap","src":_vm.verifyInfo.puzzleGap},on:{"mousedown":function($event){return _vm.mousedownFn($event)},"mousemove":function($event){return _vm.mouseMoveFn($event)},"mouseup":function($event){return _vm.moseUpFn($event)}}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showStatus),expression:"showStatus"}],staticClass:"suessMask"},[_c('div',[_vm._v(_vm._s(_vm.sucesePrompt))])])]),_c('div',{ref:"dragDiv",staticClass:"drag"},[_c('div',{staticClass:"stroke"}),_c('div',{staticClass:"drag_text"},[_vm._v(_vm._s(_vm.confirmWords))]),_c('div',{ref:"moveDiv",staticClass:"handler handler_bg ",class:{'handler_ok_bg':_vm.confirmSuccess,'around animated':_vm.btnFailShake},staticStyle:{"position":"absolute","top":"0px","left":"0px"},on:{"mousedown":function($event){return _vm.mousedownFn($event)},"mousemove":function($event){return _vm.mouseMoveFn($event)},"mouseup":function($event){return _vm.moseUpFn($event)}}})]),_c('div',{staticClass:"result"},[_c('span',{staticClass:"result_title"},[_vm._v(_vm._s(_vm.resultTitle))]),_c('img',{staticClass:"reflesh",attrs:{"src":__webpack_require__("52ed")},on:{"click":_vm.refleshVerify}}),_c('img',{staticClass:"out",attrs:{"src":__webpack_require__("d124")},on:{"click":_vm.dropOut}})]),_c('div')])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-verify/src/vue-verify.vue?vue&type=template&id=db454038&scoped=true&

// EXTERNAL MODULE: ./packages/vue-verify/src/assets/css/animation.css
var animation = __webpack_require__("1da2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-verify/src/vue-verify.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vue_verifyvue_type_script_lang_js_ = ({
  name: 'vueVerify',
  //第一次 传入 一个对象 包括拼图 拼图缺口  缺口图片的x坐标
  props: {
    verifyInfo: {
      type: Object,
      required: true
    }

  },
  data () {
    return {
      showStatus: false,  /**/
      sucesePrompt: '验证成功',    /*验证成功的提示*/
      btnFailShake: false,        /*按钮失败抖动 */
      resultTitle: '由心诉科技提供支持', /* 动态结果文字提示 */
      failOpertionNumber: 0,        /* 失败操作次数 失败3次会重新换图*/
      beginClientX: 0,           /*距离屏幕左端距离*/
      mouseMoveStata: false,     /*触发拖动状态  判断*/
      maxwidth: '',               /*拖动最大宽度，依据滑块宽度算出来的*/
      confirmWords: '拖动滑块验证',   /*滑块文字*/
      confirmSuccess: false           /*验证成功判断*/
    }
  },
  components: {

  },
  mounted () {
    window.console.log(this.verifyInfo)
    // 获取滑块的长度
    // this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
    this.maxwidth = 200;
    window.console.log(this.maxwidth);
  },
  methods: {
    //  mousedoen 事件
    mousedownFn: function (e) {
      //获取移动的坐标
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault();   //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.clientX;
      }
    },
    // 验证成功函数 
    successFunction () {
      this.confirmSuccess = true
      this.confirmWords = '验证通过';
      this.showStatus = true;
      if (window.addEventListener) {
        document.getElementsByTagName('html')[0].removeEventListener('mousemove', this.mouseMoveFn);
        document.getElementsByTagName('html')[0].removeEventListener('mouseup', this.moseUpFn);
      } else {
        document.getElementsByTagName('html')[0].removeEventListener('mouseup', () => { });
      }
      document.getElementsByClassName('drag_text')[0].style.color = '#fff'
      document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px';
    },
    // mousemove事件           
    mouseMoveFn (e) {
      if (this.mouseMoveStata) {
        let width = e.clientX - this.beginClientX;
        if (width > 0 && width <= this.maxwidth) {
          document.getElementsByClassName('handler')[0].style.left = width + 'px';
          // 设置缺口图片的x坐标的位置
          document.getElementsByClassName('verified')[0].style.left = `${width}px`;
        } else if (width > this.maxwidth) {
          this.successFunction();
        }
      }
    },
    // mouseup事件
    moseUpFn (e) {
      //  1.鼠标放下进行延时验证 
      //  2. 验证失败 进行动画提示 并返回原点更新图片
      // #获取移动的x坐标值 
      this.mouseMoveStata = false;
      var width = e.clientX - this.beginClientX;
      if (width < this.maxwidth) {
        //  失败开启动画
        this.btnFailShake = true;
        //  关闭动画
        setTimeout(() => {
          this.btnFailShake = false;
          this.resultTitle = "拼图失败"
          // 设置滑块的初始的位置
          document.getElementsByClassName('handler')[0].style.left = `${0}px`;
          // 设置缺口图片的x坐标的位置
          document.getElementsByClassName('verified')[0].style.left = `${0}px`;
        }, 500)
      }
    },
    // 刷新数据 拼图
    refleshVerify(){

    },
    // 退出隐藏
    dropOut(){

    }

  },
});

// CONCATENATED MODULE: ./packages/vue-verify/src/vue-verify.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_verifyvue_type_script_lang_js_ = (vue_verifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-verify/src/vue-verify.vue?vue&type=style&index=0&id=db454038&scoped=true&lang=css&
var vue_verifyvue_type_style_index_0_id_db454038_scoped_true_lang_css_ = __webpack_require__("64a5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/vue-verify/src/vue-verify.vue






/* normalize component */

var component = normalizeComponent(
  src_vue_verifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "db454038",
  null
  
)

/* harmony default export */ var vue_verify = (component.exports);
// CONCATENATED MODULE: ./packages/vue-verify/index.js
// /packages/color - picker / index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
vue_verify.install = function (Vue) {
     Vue.component(vue_verify.name, vue_verify)
}

// 默认导出组件
/* harmony default export */ var packages_vue_verify = (vue_verify);

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [
     packages_vue_verify
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
     // 判断是否安装
     if (install.installed) return
     // 遍历注册全局组件
     components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
     install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
     // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
     install,
     // 以下是具体的组件列表
     vueVerify: packages_vue_verify
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vueImageVerify.common.js.map