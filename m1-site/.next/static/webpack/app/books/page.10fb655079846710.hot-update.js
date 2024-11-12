/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/books/page",{

/***/ "(app-pages-browser)/./src/app/GlobalLayout.css":
/*!**********************************!*\
  !*** ./src/app/GlobalLayout.css ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3582e9ac1c51\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2xvYmFsTGF5b3V0LmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9HbG9iYWxMYXlvdXQuY3NzP2Y0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzNTgyZTlhYzFjNTFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/GlobalLayout.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/books/page.tsx":
/*!********************************!*\
  !*** ./src/app/books/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalLayout */ \"(app-pages-browser)/./src/app/GlobalLayout.tsx\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Title */ \"(app-pages-browser)/./src/app/components/Title.tsx\");\n/* harmony import */ var _components_BookCardSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BookCardSearch */ \"(app-pages-browser)/./src/app/components/BookCardSearch.tsx\");\n/* harmony import */ var _components_BookCardSearch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_BookCardSearch__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Books() {\n    var _this = this;\n    var books = [\n        {\n            coverImage: \"/images/livres/harry2.jpg\",\n            title: \"Harry Potter \\xe0 l'\\xe9cole des sorciers\",\n            author: \"J.K. Rowling\",\n            year: 1997,\n            rating: 4\n        },\n        {\n            coverImage: \"/images/livres/harry2.jpg\",\n            title: \"Harry Potter et la chambre des secrets\",\n            author: \"J.K. Rowling\",\n            year: 1998,\n            rating: 5\n        },\n        {\n            coverImage: \"/images/livres/onepiece1.png\",\n            title: \"Harry Potter et le prisonnier d'Azkaban\",\n            author: \"J.K. Rowling\",\n            year: 1999,\n            rating: 3\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__.GlobalLayout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                children: \"Books page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen bg-gray-100 flex flex-wrap gap-6 justify-center p-6\",\n                children: books.map(function(book, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCardSearch__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        coverImage: book.coverImage,\n                        title: book.title,\n                        author: book.author,\n                        year: book.year,\n                        rating: book.rating,\n                        onClick: function() {\n                            return console.log(\"D\\xe9tails de \".concat(book.title));\n                        }\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulb\\\\ProjetWebM1-1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = Books;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Books);\nvar _c;\n$RefreshReg$(_c, \"Books\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUUrQztBQUNIO0FBQ1E7QUFFcEQsU0FBU0c7O0lBQ1AsSUFBTUMsUUFBUTtRQUNaO1lBQ0VDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsUUFBUTtRQUNWO1FBQ0E7WUFDRUosWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFSixZQUFZO1lBQ1pDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFFBQVE7UUFDVjtLQUNEO0lBSUQscUJBQ0UsOERBQUNULHVEQUFZQTs7MEJBQ1gsOERBQUNDLG9EQUFLQTswQkFBQzs7Ozs7OzBCQUNQLDhEQUFDUztnQkFBSUMsV0FBVTswQkFDWlAsTUFBTVEsR0FBRyxDQUFDLFNBQUNDLE1BQU1DO3lDQUNoQiw4REFBQ1osNERBQUlBO3dCQUVIRyxZQUFZUSxLQUFLUixVQUFVO3dCQUMzQkMsT0FBT08sS0FBS1AsS0FBSzt3QkFDakJDLFFBQVFNLEtBQUtOLE1BQU07d0JBQ25CQyxNQUFNSyxLQUFLTCxJQUFJO3dCQUNmQyxRQUFRSSxLQUFLSixNQUFNO3dCQUNuQk0sU0FBUzttQ0FBTUMsUUFBUUMsR0FBRyxDQUFDLGlCQUF5QixPQUFYSixLQUFLUCxLQUFLOzt1QkFOOUNROzs7Ozs7Ozs7Ozs7Ozs7OztBQVlqQjtLQTdDU1g7QUErQ1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ib29rcy9wYWdlLnRzeD8yOTY0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEdsb2JhbExheW91dCB9IGZyb20gXCIuLi9HbG9iYWxMYXlvdXRcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9va0NhcmRTZWFyY2gnO1xyXG5cclxuZnVuY3Rpb24gQm9va3MoKSB7XHJcbiAgY29uc3QgYm9va3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIGNvdmVySW1hZ2U6ICcvaW1hZ2VzL2xpdnJlcy9oYXJyeTIuanBnJyxcclxuICAgICAgdGl0bGU6IFwiSGFycnkgUG90dGVyIMOgIGwnw6ljb2xlIGRlcyBzb3JjaWVyc1wiLFxyXG4gICAgICBhdXRob3I6ICdKLksuIFJvd2xpbmcnLFxyXG4gICAgICB5ZWFyOiAxOTk3LFxyXG4gICAgICByYXRpbmc6IDQsIC8vIFJlbXBsYWNleiBsYSByw6lkdWN0aW9uIHBhciB1bmUgbm90ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY292ZXJJbWFnZTogJy9pbWFnZXMvbGl2cmVzL2hhcnJ5Mi5qcGcnLFxyXG4gICAgICB0aXRsZTogXCJIYXJyeSBQb3R0ZXIgZXQgbGEgY2hhbWJyZSBkZXMgc2VjcmV0c1wiLFxyXG4gICAgICBhdXRob3I6ICdKLksuIFJvd2xpbmcnLFxyXG4gICAgICB5ZWFyOiAxOTk4LFxyXG4gICAgICByYXRpbmc6IDUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3ZlckltYWdlOiAnL2ltYWdlcy9saXZyZXMvb25lcGllY2UxLnBuZycsXHJcbiAgICAgIHRpdGxlOiBcIkhhcnJ5IFBvdHRlciBldCBsZSBwcmlzb25uaWVyIGQnQXprYWJhblwiLFxyXG4gICAgICBhdXRob3I6ICdKLksuIFJvd2xpbmcnLFxyXG4gICAgICB5ZWFyOiAxOTk5LFxyXG4gICAgICByYXRpbmc6IDMsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbExheW91dD5cclxuICAgICAgPFRpdGxlPkJvb2tzIHBhZ2U8L1RpdGxlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBmbGV4IGZsZXgtd3JhcCBnYXAtNiBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cclxuICAgICAgICB7Ym9va3MubWFwKChib29rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgY292ZXJJbWFnZT17Ym9vay5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICB0aXRsZT17Ym9vay50aXRsZX1cclxuICAgICAgICAgICAgYXV0aG9yPXtib29rLmF1dGhvcn1cclxuICAgICAgICAgICAgeWVhcj17Ym9vay55ZWFyfVxyXG4gICAgICAgICAgICByYXRpbmc9e2Jvb2sucmF0aW5nfSAvLyBBam91dGV6IGxhIG5vdGUgaWNpXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGBEw6l0YWlscyBkZSAke2Jvb2sudGl0bGV9YCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvR2xvYmFsTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzO1xyXG4iXSwibmFtZXMiOlsiR2xvYmFsTGF5b3V0IiwiVGl0bGUiLCJDYXJkIiwiQm9va3MiLCJib29rcyIsImNvdmVySW1hZ2UiLCJ0aXRsZSIsImF1dGhvciIsInllYXIiLCJyYXRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJib29rIiwiaW5kZXgiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

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