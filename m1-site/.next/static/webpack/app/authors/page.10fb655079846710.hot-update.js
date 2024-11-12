/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/page",{

/***/ "(app-pages-browser)/./src/app/GlobalLayout.css":
/*!**********************************!*\
  !*** ./src/app/GlobalLayout.css ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3582e9ac1c51\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2xvYmFsTGF5b3V0LmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9HbG9iYWxMYXlvdXQuY3NzP2Y0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzNTgyZTlhYzFjNTFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/GlobalLayout.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/authors/page.tsx":
/*!**********************************!*\
  !*** ./src/app/authors/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_BookCardSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BookCardSearch */ \"(app-pages-browser)/./src/app/components/BookCardSearch.tsx\");\n/* harmony import */ var _components_BookCardSearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_BookCardSearch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././components/Title */ \"(app-pages-browser)/./src/app/components/Title.tsx\");\n/* harmony import */ var _GlobalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GlobalLayout */ \"(app-pages-browser)/./src/app/GlobalLayout.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction authors() {\n    var _this = this;\n    var books = [\n        {\n            coverImage: \"/images/auteur/jk.jpg\",\n            title: \"J.K. Rowling\",\n            author: \"J.K. Rowling\",\n            year: 1997,\n            rating: 4\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalLayout__WEBPACK_IMPORTED_MODULE_3__.GlobalLayout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                children: \"Page auteurs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen bg-gray-100 flex flex-wrap gap-6 justify-center p-6\",\n                children: books.map(function(book, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCardSearch__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        coverImage: book.coverImage,\n                        title: book.title,\n                        author: book.author,\n                        year: book.year,\n                        rating: book.rating,\n                        onClick: function() {\n                            return console.log(\"D\\xe9tails de \".concat(book.title));\n                        }\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (authors);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ29EO0FBQ1A7QUFDRTtBQUMvQyxTQUFTRzs7SUFDUCxJQUFNQyxRQUFRO1FBQ1o7WUFDRUMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxRQUFRO1FBQ1Y7S0FDRDtJQUNDLHFCQUVJLDhEQUFDUCx1REFBWUE7OzBCQUNYLDhEQUFDRCxvREFBS0E7MEJBQUM7Ozs7OzswQkFDUCw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ2hCUCxNQUFNUSxHQUFHLENBQUMsU0FBQ0MsTUFBTUM7eUNBQ2hCLDhEQUFDZCw0REFBSUE7d0JBRUhLLFlBQVlRLEtBQUtSLFVBQVU7d0JBQzNCQyxPQUFPTyxLQUFLUCxLQUFLO3dCQUNqQkMsUUFBUU0sS0FBS04sTUFBTTt3QkFDbkJDLE1BQU1LLEtBQUtMLElBQUk7d0JBQ2ZDLFFBQVFJLEtBQUtKLE1BQU07d0JBQ25CTSxTQUFTO21DQUFNQyxRQUFRQyxHQUFHLENBQUMsaUJBQXlCLE9BQVhKLEtBQUtQLEtBQUs7O3VCQU45Q1E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZWpCO0FBQ0MsK0RBQWVYLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRob3JzL3BhZ2UudHN4P2NmZDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rQ2FyZFNlYXJjaCc7XHJcbmltcG9ydCB7IFRpdGxlfSBmcm9tICcuLi8uL2NvbXBvbmVudHMvVGl0bGUnO1xyXG5pbXBvcnQgeyBHbG9iYWxMYXlvdXQgfSBmcm9tIFwiLi4vR2xvYmFsTGF5b3V0XCI7XHJcbmZ1bmN0aW9uIGF1dGhvcnMoKXtcclxuICBjb25zdCBib29rcyA9IFtcclxuICAgIHtcclxuICAgICAgY292ZXJJbWFnZTogJy9pbWFnZXMvYXV0ZXVyL2prLmpwZycsXHJcbiAgICAgIHRpdGxlOiBcIkouSy4gUm93bGluZ1wiLFxyXG4gICAgICBhdXRob3I6ICdKLksuIFJvd2xpbmcnLFxyXG4gICAgICB5ZWFyOiAxOTk3LFxyXG4gICAgICByYXRpbmc6IDQsIC8vIFJlbXBsYWNleiBsYSByw6lkdWN0aW9uIHBhciB1bmUgbm90ZVxyXG4gICAgfSxcclxuICBdO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxHbG9iYWxMYXlvdXQ+XHJcbiAgICAgICAgICA8VGl0bGU+UGFnZSBhdXRldXJzPC9UaXRsZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIGZsZXggZmxleC13cmFwIGdhcC02IGp1c3RpZnktY2VudGVyIHAtNlwiPlxyXG4gICAgICAgIHtib29rcy5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjb3ZlckltYWdlPXtib29rLmNvdmVySW1hZ2V9XHJcbiAgICAgICAgICAgIHRpdGxlPXtib29rLnRpdGxlfVxyXG4gICAgICAgICAgICBhdXRob3I9e2Jvb2suYXV0aG9yfVxyXG4gICAgICAgICAgICB5ZWFyPXtib29rLnllYXJ9XHJcbiAgICAgICAgICAgIHJhdGluZz17Ym9vay5yYXRpbmd9IC8vIEFqb3V0ZXogbGEgbm90ZSBpY2lcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coYETDqXRhaWxzIGRlICR7Ym9vay50aXRsZX1gKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0dsb2JhbExheW91dD5cclxuICAgICAgICBcclxuXHJcbiAgICApIFxyXG59XHJcbiBleHBvcnQgZGVmYXVsdCBhdXRob3JzOyJdLCJuYW1lcyI6WyJDYXJkIiwiVGl0bGUiLCJHbG9iYWxMYXlvdXQiLCJhdXRob3JzIiwiYm9va3MiLCJjb3ZlckltYWdlIiwidGl0bGUiLCJhdXRob3IiLCJ5ZWFyIiwicmF0aW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYm9vayIsImluZGV4Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/BookCardSearch.tsx":
/*!***********************************************!*\
  !*** ./src/app/components/BookCardSearch.tsx ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});