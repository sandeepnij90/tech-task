"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/DisplayData.tsx":
/*!************************************!*\
  !*** ./components/DisplayData.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayData: function() { return /* binding */ DisplayData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table */ \"(app-pages-browser)/./components/Table.tsx\");\n/* __next_internal_client_entry_do_not_use__ DisplayData auto */ \nvar _s = $RefreshSig$();\n\n\nconst DisplayData = (param)=>{\n    let { tableData } = param;\n    _s();\n    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"table\");\n    const handleView = ()=>{\n        if (view === \"table\") {\n            return setView(\"graph\");\n        }\n        setView(\"table\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Current predictions\"\n                }, void 0, false, {\n                    fileName: \"/Users/sandeepnijjar/projects/tech-task/tech-task/components/DisplayData.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                view === \"table\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                    data: tableData\n                }, void 0, false, {\n                    fileName: \"/Users/sandeepnijjar/projects/tech-task/tech-task/components/DisplayData.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 29\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sandeepnijjar/projects/tech-task/tech-task/components/DisplayData.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(DisplayData, \"fSBmnfQT+fyZWQQug/zOVwcvZbA=\");\n_c = DisplayData;\nvar _c;\n$RefreshReg$(_c, \"DisplayData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGlzcGxheURhdGEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDRDtBQU16QixNQUFNRSxjQUFjO1FBQUMsRUFBRUMsU0FBUyxFQUFTOztJQUM5QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQW9CO0lBRXBELE1BQU1NLGFBQWE7UUFDakIsSUFBSUYsU0FBUyxTQUFTO1lBQ3BCLE9BQU9DLFFBQVE7UUFDakI7UUFDQUEsUUFBUTtJQUNWO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNFO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFBRzs7Ozs7O2dCQUVITCxTQUFTLHdCQUFVLDhEQUFDSCx5Q0FBS0E7b0JBQUNTLE1BQU1QOzs7Ozs4Q0FBZ0I7Ozs7Ozs7O0FBSXpELEVBQUU7R0FuQldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGlzcGxheURhdGEudHN4P2IxOWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi9UYWJsZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0YWJsZURhdGE6IHsgbWV0cmljOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdO1xufVxuXG5leHBvcnQgY29uc3QgRGlzcGxheURhdGEgPSAoeyB0YWJsZURhdGEgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGU8XCJ0YWJsZVwiIHwgXCJncmFwaFwiPihcInRhYmxlXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVZpZXcgPSAoKSA9PiB7XG4gICAgaWYgKHZpZXcgPT09IFwidGFibGVcIikge1xuICAgICAgcmV0dXJuIHNldFZpZXcoXCJncmFwaFwiKTtcbiAgICB9XG4gICAgc2V0VmlldyhcInRhYmxlXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgxPkN1cnJlbnQgcHJlZGljdGlvbnM8L2gxPlxuXG4gICAgICAgIHt2aWV3ID09PSBcInRhYmxlXCIgPyA8VGFibGUgZGF0YT17dGFibGVEYXRhfSAvPiA6IDw+PC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGFibGUiLCJEaXNwbGF5RGF0YSIsInRhYmxlRGF0YSIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlVmlldyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DisplayData.tsx\n"));

/***/ })

});