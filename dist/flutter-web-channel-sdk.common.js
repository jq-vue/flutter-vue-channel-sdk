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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0b14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelRequest", function() { return ChannelRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelRequestQuery", function() { return ChannelRequestQuery; });


const ChannelRequest = {
  flutterRequest: 'flutterRequest',
  flutterResponse: 'flutterResponse',
  webRequest: 'webRequest',
  webResponse: 'webResponse'
};
var ChannelRequestQuery = {
  request: 'webRequest',
  channelApi: '',
  channelArgument: '',
  data: ''
};


/***/ }),

/***/ "1eb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "a72a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFlutterChannel", function() { return initFlutterChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageWebToFlutterChannel", function() { return messageWebToFlutterChannel; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flutter_channel_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0b14");
/* harmony import */ var _flutter_channel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e8d1");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$eventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();


var _openAppCheck = true;
// 初始化SDK
function initFlutterChannel(handleChannelCallback, openAppCheck = true) {
  _openAppCheck = openAppCheck;
  if (!Object(_flutter_channel_util__WEBPACK_IMPORTED_MODULE_2__["checkIsAppOpen"])() && _openAppCheck) {
    alert('SDK初始化失败,请在APP内使用!');
  } else {
    window.messageFlutterToWebChannel = _messageFlutterToWebChannel;
    _handleWebFlutterEvent(handleChannelCallback);
    console.log('flutter-web-channel-sdk', '初始化完成');
  }
}

// 向flutter交互
function messageWebToFlutterChannel({
  channelApi = '',
  channelArgument = '',
  data = ''
}) {
  if (!Object(_flutter_channel_util__WEBPACK_IMPORTED_MODULE_2__["checkIsAppOpen"])() && _openAppCheck == true) {
    alert('SDK初始化失败,请在APP内使用!');
  } else {
    if (!Object(_flutter_channel_util__WEBPACK_IMPORTED_MODULE_2__["valueEmpty"])(channelApi)) {
      alert('channelApi不能为空');
    } else {
      try {
        _flutter_channel_enum__WEBPACK_IMPORTED_MODULE_1__["ChannelRequestQuery"].channelApi = channelApi;
        _flutter_channel_enum__WEBPACK_IMPORTED_MODULE_1__["ChannelRequestQuery"].data = data;
        _flutter_channel_enum__WEBPACK_IMPORTED_MODULE_1__["ChannelRequestQuery"].channelArgument = channelArgument;
        var json = JSON.stringify(_flutter_channel_enum__WEBPACK_IMPORTED_MODULE_1__["ChannelRequestQuery"]);
        webMessageToFlutter.postMessage(json, '*');
        console.log('flutter-web-channel-sdk交互了flutter：', _flutter_channel_enum__WEBPACK_IMPORTED_MODULE_1__["ChannelRequestQuery"]);
        _respEvent({
          request: _flutter_channel_enum__WEBPACK_IMPORTED_MODULE_1__["ChannelRequestQuery"],
          response: undefined
        });
      } catch (error) {
        console.log('flutter-web-channel-sdk和APP交互出错：', error);
        alert('和APP交互出错,请检查参数！');
      }
    }
  }
}

// flutter向web交互
function _messageFlutterToWebChannel(flutterData) {
  console.log('flutter-web-channel-sdk收到flutter交互', flutterData);
  _respEvent({
    request: undefined,
    response: flutterData
  });
}

// 响应 
var _respEvent = respData => vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$eventBus.$emit('VueFlutterEventBus', respData);

// 监听   
var _handleWebFlutterEvent = handleCallback => vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$eventBus.$on('VueFlutterEventBus', handleCallback);


/***/ }),

/***/ "b635":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sdk = __webpack_require__("a72a");
var fUtil = __webpack_require__("e8d1");
var fEnum = __webpack_require__("0b14");
module.exports = {
  sdk,
  fUtil,
  fEnum
};

/***/ }),

/***/ "e8d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToMap", function() { return jsonToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapTojson", function() { return mapTojson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueEmpty", function() { return valueEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsAppOpen", function() { return checkIsAppOpen; });


// 检测是否app内打开
const checkIsAppOpen = () => navigator.userAgent.indexOf("flutter-mini-webview-plugin") != -1;

// map转json
function mapTojson(strMap) {
  var obj = Object.create(null);
  for (var [k, v] of strMap) {
    obj[k] = v;
  }
  var json = JSON.stringify(obj);
  return json;
}

// json转map
function jsonToMap(jsonStr) {
  var json = JSON.parse(jsonStr);
  let strMap = new Map();
  for (let k of Object.keys(json)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

// 校验值是否为空
function valueEmpty(value) {
  if (value == "null" || value == "undefined" || value == undefined || value == "") {
    return false;
  }
  return true;
}


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b635");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });
//# sourceMappingURL=flutter-web-channel-sdk.common.js.map