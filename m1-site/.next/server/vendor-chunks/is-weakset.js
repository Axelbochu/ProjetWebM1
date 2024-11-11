"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-weakset";
exports.ids = ["vendor-chunks/is-weakset"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-weakset/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-weakset/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\n\nvar $WeakSet = GetIntrinsic('%WeakSet%', true);\n\nvar $setHas = callBound('WeakSet.prototype.has', true);\n\nif ($setHas) {\n\tvar $mapHas = callBound('WeakMap.prototype.has', true);\n\n\t/** @type {import('.')} */\n\tmodule.exports = function isWeakSet(x) {\n\t\tif (!x || typeof x !== 'object') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\t$setHas(x, $setHas);\n\t\t\tif ($mapHas) {\n\t\t\t\ttry {\n\t\t\t\t\t$mapHas(x, $mapHas);\n\t\t\t\t} catch (e) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t\t// @ts-expect-error TS can't figure out that $WeakSet is always truthy here\n\t\t\treturn x instanceof $WeakSet; // core-js workaround, pre-v3\n\t\t} catch (e) {}\n\t\treturn false;\n\t};\n} else {\n\t/** @type {import('.')} */\n\t// eslint-disable-next-line no-unused-vars\n\tmodule.exports = function isWeakSet(x) {\n\t\t// `WeakSet` does not exist, or does not have a `has` method\n\t\treturn false;\n\t};\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtd2Vha3NldC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBZTtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBcUI7O0FBRTdDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbTEtc2l0ZS8uL25vZGVfbW9kdWxlcy9pcy13ZWFrc2V0L2luZGV4LmpzPzFkNGIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcblxudmFyICRXZWFrU2V0ID0gR2V0SW50cmluc2ljKCclV2Vha1NldCUnLCB0cnVlKTtcblxudmFyICRzZXRIYXMgPSBjYWxsQm91bmQoJ1dlYWtTZXQucHJvdG90eXBlLmhhcycsIHRydWUpO1xuXG5pZiAoJHNldEhhcykge1xuXHR2YXIgJG1hcEhhcyA9IGNhbGxCb3VuZCgnV2Vha01hcC5wcm90b3R5cGUuaGFzJywgdHJ1ZSk7XG5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1dlYWtTZXQoeCkge1xuXHRcdGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdCRzZXRIYXMoeCwgJHNldEhhcyk7XG5cdFx0XHRpZiAoJG1hcEhhcykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdCRtYXBIYXMoeCwgJG1hcEhhcyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUyBjYW4ndCBmaWd1cmUgb3V0IHRoYXQgJFdlYWtTZXQgaXMgYWx3YXlzIHRydXRoeSBoZXJlXG5cdFx0XHRyZXR1cm4geCBpbnN0YW5jZW9mICRXZWFrU2V0OyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12M1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufSBlbHNlIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNXZWFrU2V0KHgpIHtcblx0XHQvLyBgV2Vha1NldGAgZG9lcyBub3QgZXhpc3QsIG9yIGRvZXMgbm90IGhhdmUgYSBgaGFzYCBtZXRob2Rcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-weakset/index.js\n");

/***/ })

};
;