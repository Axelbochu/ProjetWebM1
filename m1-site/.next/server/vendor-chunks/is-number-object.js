"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-number-object";
exports.ids = ["vendor-chunks/is-number-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-number-object/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-number-object/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar numToStr = Number.prototype.toString;\nvar tryNumberObject = function tryNumberObject(value) {\n\ttry {\n\t\tnumToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar numClass = '[object Number]';\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\n\nmodule.exports = function isNumberObject(value) {\n\tif (typeof value === 'number') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtbnVtYmVyLW9iamVjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL20xLXNpdGUvLi9ub2RlX21vZHVsZXMvaXMtbnVtYmVyLW9iamVjdC9pbmRleC5qcz84NWQzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIG51bVRvU3RyID0gTnVtYmVyLnByb3RvdHlwZS50b1N0cmluZztcbnZhciB0cnlOdW1iZXJPYmplY3QgPSBmdW5jdGlvbiB0cnlOdW1iZXJPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRudW1Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbnVtQ2xhc3MgPSAnW29iamVjdCBOdW1iZXJdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNOdW1iZXJPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlOdW1iZXJPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IG51bUNsYXNzO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-number-object/index.js\n");

/***/ })

};
;