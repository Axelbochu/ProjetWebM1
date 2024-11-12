"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-bigints";
exports.ids = ["vendor-chunks/has-bigints"];
exports.modules = {

/***/ "(ssr)/./node_modules/has-bigints/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-bigints/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nvar $BigInt = typeof BigInt !== 'undefined' && BigInt;\n\nmodule.exports = function hasNativeBigInts() {\n\treturn typeof $BigInt === 'function'\n\t\t&& typeof BigInt === 'function'\n\t\t&& typeof $BigInt(42) === 'bigint' // eslint-disable-line no-magic-numbers\n\t\t&& typeof BigInt(42) === 'bigint'; // eslint-disable-line no-magic-numbers\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzLWJpZ2ludHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tMS1zaXRlLy4vbm9kZV9tb2R1bGVzL2hhcy1iaWdpbnRzL2luZGV4LmpzPzE0ODkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJEJpZ0ludCA9IHR5cGVvZiBCaWdJbnQgIT09ICd1bmRlZmluZWQnICYmIEJpZ0ludDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNOYXRpdmVCaWdJbnRzKCkge1xuXHRyZXR1cm4gdHlwZW9mICRCaWdJbnQgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nXG5cdFx0JiYgdHlwZW9mICRCaWdJbnQoNDIpID09PSAnYmlnaW50JyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW1hZ2ljLW51bWJlcnNcblx0XHQmJiB0eXBlb2YgQmlnSW50KDQyKSA9PT0gJ2JpZ2ludCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/has-bigints/index.js\n");

/***/ })

};
;