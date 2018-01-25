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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _three = __webpack_require__(0);\n\nvar THREE = _interopRequireWildcard(_three);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar cv = document.getElementById('maincanvas');\n\nvar W = 3240;\nvar H = 960;\n\nfunction update() {\n    requestAnimationFrame(update);\n    //calculate size\n}\n\nupdate();\n\nonresize = function onresize() {\n    var w = window.innerWidth;\n    var h = w / W * H;\n    cv.style.width = w;\n    cv.style.height = h;\n};\n\nonresize();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbIlRIUkVFIiwiY3YiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiVyIsIkgiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbnJlc2l6ZSIsInciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0lBQVlBLEs7Ozs7QUFFWixJQUFJQyxLQUFLQyxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQVQ7O0FBRUEsSUFBTUMsSUFBSSxJQUFWO0FBQ0EsSUFBTUMsSUFBSSxHQUFWOztBQUVBLFNBQVNDLE1BQVQsR0FBa0I7QUFDZEMsMEJBQXNCRCxNQUF0QjtBQUNBO0FBRUg7O0FBRURBOztBQUVBRSxXQUFXLG9CQUFXO0FBQ2xCLFFBQUlDLElBQUlDLE9BQU9DLFVBQWY7QUFDQSxRQUFJQyxJQUFJSCxJQUFJTCxDQUFKLEdBQVFDLENBQWhCO0FBQ0FKLE9BQUdZLEtBQUgsQ0FBU0MsS0FBVCxHQUFpQkwsQ0FBakI7QUFDQVIsT0FBR1ksS0FBSCxDQUFTRSxNQUFULEdBQWtCSCxDQUFsQjtBQUNILENBTEQ7O0FBT0FKIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIlxuXG52YXIgY3YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbmNhbnZhcycpO1xuXG5jb25zdCBXID0gMzI0MDtcbmNvbnN0IEggPSA5NjA7XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAvL2NhbGN1bGF0ZSBzaXplXG5cbn1cblxudXBkYXRlKCk7XG5cbm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgaCA9IHcgLyBXICogSDtcbiAgICBjdi5zdHlsZS53aWR0aCA9IHc7XG4gICAgY3Yuc3R5bGUuaGVpZ2h0ID0gaDtcbn1cblxub25yZXNpemUoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);