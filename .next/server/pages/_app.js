/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/web3modal.tsx":
/*!***********************************!*\
  !*** ./src/context/web3modal.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Web3Modal: () => (/* binding */ Web3Modal)\n/* harmony export */ });\n/* harmony import */ var _web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3modal/ethers5/react */ \"@web3modal/ethers5/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__]);\n_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ Web3Modal auto */ \n// Get projectId from WalletConnect Cloud\nconst projectId = \"5d16e2c0f85cdb58d7408b89cd47bf24\";\n// Define chains\nconst mainnet = {\n    chainId: 8453,\n    name: \"Base\",\n    currency: \"ETH\",\n    explorerUrl: \"https://basescan.org\",\n    rpcUrl: \"https://mainnet.base.org\"\n};\nconst testnet = {\n    chainId: 84532,\n    name: \"Base Sepolia Testnet\",\n    currency: \"ETH\",\n    explorerUrl: \"https://sepolia.basescan.org\",\n    rpcUrl: \"https://sepolia.base.org\"\n};\n// Metadata for your app\nconst metadata = {\n    name: \"DeFile\",\n    description: \"Decentralized File Locker\",\n    url: \"https://defile.vercel.app\",\n    icons: [\n        \"https://drive.google.com/uc?export=view&id=15E-Th6oVxc5iqNBNfHnkCCAy_6V858Tl\"\n    ]\n};\n// Create Ethers configuration with auth options\nconst ethersConfig = (0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__.defaultConfig)({\n    metadata,\n    auth: {\n        email: true,\n        socials: [\n            \"google\",\n            \"x\"\n        ],\n        showWallets: true,\n        walletFeatures: true // Enable wallet features\n    },\n    enableEIP6963: true,\n    enableInjected: true,\n    enableCoinbase: true,\n    rpcUrl: \"...\",\n    defaultChainId: 1 // Default chain ID for Coinbase SDK\n});\n// Create Web3Modal instance\n(0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__.createWeb3Modal)({\n    ethersConfig,\n    chains: [\n        mainnet\n    ],\n    projectId,\n    enableOnramp: true,\n    enableAnalytics: true // Enable analytics\n});\nfunction Web3Modal({ children }) {\n    return children;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC93ZWIzbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OytEQUV5RTtBQUV6RSx5Q0FBeUM7QUFDekMsTUFBTUUsWUFBWTtBQUVsQixnQkFBZ0I7QUFDaEIsTUFBTUMsVUFBVTtJQUNkQyxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxhQUFhO0lBQ2JDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLFVBQVU7SUFDZEwsU0FBUztJQUNUQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsYUFBYTtJQUNiQyxRQUFRO0FBQ1Y7QUFFQSx3QkFBd0I7QUFDeEIsTUFBTUUsV0FBVztJQUNmTCxNQUFNO0lBQ05NLGFBQWE7SUFDYkMsS0FBSztJQUNMQyxPQUFPO1FBQUM7S0FBK0U7QUFDekY7QUFFQSxnREFBZ0Q7QUFDaEQsTUFBTUMsZUFBZWIsdUVBQWFBLENBQUM7SUFDakNTO0lBQ0FLLE1BQUs7UUFDSEMsT0FBTztRQUNQQyxTQUFRO1lBQUM7WUFBUztTQUFJO1FBQ3RCQyxhQUFhO1FBQ2JDLGdCQUFnQixLQUFLLHlCQUF5QjtJQUNoRDtJQUNBQyxlQUFlO0lBQ2ZDLGdCQUFnQjtJQUNoQkMsZ0JBQWdCO0lBQ2hCZCxRQUFRO0lBQ1JlLGdCQUFnQixFQUFFLG9DQUFvQztBQUN4RDtBQUVBLDRCQUE0QjtBQUM1QnZCLHlFQUFlQSxDQUFDO0lBQ2RjO0lBQ0FVLFFBQVE7UUFBQ3JCO0tBQVE7SUFDakJEO0lBQ0F1QixjQUFjO0lBQ2RDLGlCQUFpQixLQUFLLG1CQUFtQjtBQUMzQztBQUVPLFNBQVNDLFVBQVUsRUFBRUMsUUFBUSxFQUFFO0lBQ3BDLE9BQU9BO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWZpbGUvLi9zcmMvY29udGV4dC93ZWIzbW9kYWwudHN4PzZjMjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGNyZWF0ZVdlYjNNb2RhbCwgZGVmYXVsdENvbmZpZyB9IGZyb20gJ0B3ZWIzbW9kYWwvZXRoZXJzNS9yZWFjdCdcblxuLy8gR2V0IHByb2plY3RJZCBmcm9tIFdhbGxldENvbm5lY3QgQ2xvdWRcbmNvbnN0IHByb2plY3RJZCA9ICc1ZDE2ZTJjMGY4NWNkYjU4ZDc0MDhiODljZDQ3YmYyNCdcblxuLy8gRGVmaW5lIGNoYWluc1xuY29uc3QgbWFpbm5ldCA9IHtcbiAgY2hhaW5JZDogODQ1MyxcbiAgbmFtZTogJ0Jhc2UnLFxuICBjdXJyZW5jeTogJ0VUSCcsXG4gIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9iYXNlc2Nhbi5vcmcnLFxuICBycGNVcmw6ICdodHRwczovL21haW5uZXQuYmFzZS5vcmcnLFxufVxuXG5jb25zdCB0ZXN0bmV0ID0ge1xuICBjaGFpbklkOiA4NDUzMixcbiAgbmFtZTogJ0Jhc2UgU2Vwb2xpYSBUZXN0bmV0JyxcbiAgY3VycmVuY3k6ICdFVEgnLFxuICBleHBsb3JlclVybDogJ2h0dHBzOi8vc2Vwb2xpYS5iYXNlc2Nhbi5vcmcnLFxuICBycGNVcmw6ICdodHRwczovL3NlcG9saWEuYmFzZS5vcmcnLFxufVxuXG4vLyBNZXRhZGF0YSBmb3IgeW91ciBhcHBcbmNvbnN0IG1ldGFkYXRhID0ge1xuICBuYW1lOiAnRGVGaWxlJyxcbiAgZGVzY3JpcHRpb246ICdEZWNlbnRyYWxpemVkIEZpbGUgTG9ja2VyJyxcbiAgdXJsOiAnaHR0cHM6Ly9kZWZpbGUudmVyY2VsLmFwcCcsIC8vIEVuc3VyZSB0aGlzIG1hdGNoZXMgeW91ciBkb21haW5cbiAgaWNvbnM6IFsnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTE1RS1UaDZvVnhjNWlxTkJOZkhua0NDQXlfNlY4NThUbCddXG59XG5cbi8vIENyZWF0ZSBFdGhlcnMgY29uZmlndXJhdGlvbiB3aXRoIGF1dGggb3B0aW9uc1xuY29uc3QgZXRoZXJzQ29uZmlnID0gZGVmYXVsdENvbmZpZyh7XG4gIG1ldGFkYXRhLFxuICBhdXRoOntcbiAgICBlbWFpbDogdHJ1ZSxcbiAgICBzb2NpYWxzOlsnZ29vZ2xlJywneCddLFxuICAgIHNob3dXYWxsZXRzOiB0cnVlLCAvLyBTaG93IHdhbGxldHMgIFxuICAgIHdhbGxldEZlYXR1cmVzOiB0cnVlIC8vIEVuYWJsZSB3YWxsZXQgZmVhdHVyZXNcbiAgfSxcbiAgZW5hYmxlRUlQNjk2MzogdHJ1ZSwgLy8gRW5hYmxlIEVJUDY5NjNcbiAgZW5hYmxlSW5qZWN0ZWQ6IHRydWUsIC8vIEVuYWJsZSBpbmplY3RlZCB3YWxsZXRzXG4gIGVuYWJsZUNvaW5iYXNlOiB0cnVlLCAvLyBFbmFibGUgQ29pbmJhc2Ugd2FsbGV0XG4gIHJwY1VybDogJy4uLicsIC8vIFJQQyBVUkwgZm9yIENvaW5iYXNlIFNES1xuICBkZWZhdWx0Q2hhaW5JZDogMSAvLyBEZWZhdWx0IGNoYWluIElEIGZvciBDb2luYmFzZSBTREtcbn0pXG5cbi8vIENyZWF0ZSBXZWIzTW9kYWwgaW5zdGFuY2VcbmNyZWF0ZVdlYjNNb2RhbCh7XG4gIGV0aGVyc0NvbmZpZyxcbiAgY2hhaW5zOiBbbWFpbm5ldF0sXG4gIHByb2plY3RJZCxcbiAgZW5hYmxlT25yYW1wOiB0cnVlLFxuICBlbmFibGVBbmFseXRpY3M6IHRydWUgLy8gRW5hYmxlIGFuYWx5dGljc1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIFdlYjNNb2RhbCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVXZWIzTW9kYWwiLCJkZWZhdWx0Q29uZmlnIiwicHJvamVjdElkIiwibWFpbm5ldCIsImNoYWluSWQiLCJuYW1lIiwiY3VycmVuY3kiLCJleHBsb3JlclVybCIsInJwY1VybCIsInRlc3RuZXQiLCJtZXRhZGF0YSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJldGhlcnNDb25maWciLCJhdXRoIiwiZW1haWwiLCJzb2NpYWxzIiwic2hvd1dhbGxldHMiLCJ3YWxsZXRGZWF0dXJlcyIsImVuYWJsZUVJUDY5NjMiLCJlbmFibGVJbmplY3RlZCIsImVuYWJsZUNvaW5iYXNlIiwiZGVmYXVsdENoYWluSWQiLCJjaGFpbnMiLCJlbmFibGVPbnJhbXAiLCJlbmFibGVBbmFseXRpY3MiLCJXZWIzTW9kYWwiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/web3modal.tsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/web3modal */ \"./src/context/web3modal.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_web3modal__WEBPACK_IMPORTED_MODULE_2__]);\n_context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_web3modal__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/adee/Web3-Dev/BaseDefile/src/pages/_app.js\",\n            lineNumber: 4,\n            columnNumber: 24\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adee/Web3-Dev/BaseDefile/src/pages/_app.js\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ29CO0FBQ2hELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMscUJBQVEsOERBQUNILHlEQUFTQTtrQkFBQyw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUMvQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmaWxlLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2FwcC9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICcuLi9jb250ZXh0L3dlYjNtb2RhbCdcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAgPFdlYjNNb2RhbD48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9XZWIzTW9kYWw+ICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiV2ViM01vZGFsIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethers5/react":
/*!*******************************************!*\
  !*** external "@web3modal/ethers5/react" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethers5/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();