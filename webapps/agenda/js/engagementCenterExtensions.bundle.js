/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(() => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/webapp/vue-app/engagementCenterExtensions/extensions.js":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/vue-app/engagementCenterExtensions/extensions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/*\r\n * Copyright (C) 2024 eXo Platform SAS.\r\n *\r\n * This program is free software: you can redistribute it and/or modify\r\n * it under the terms of the GNU Affero General Public License as published by\r\n * the Free Software Foundation, either version 3 of the License, or\r\n * (at your option) any later version.\r\n *\r\n * This program is distributed in the hope that it will be useful,\r\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\n * GNU Affero General Public License for more details.\r\n *\r\n * You should have received a copy of the GNU Affero General Public License\r\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\r\n */\n\nconst agendaUserActions = ['CreateEvent', 'UpdateEvent', 'ReplyToEvent', 'CreateDatePoll', 'VoteDatePoll'];\nfunction init() {\n  extensionRegistry.registerExtension('engagementCenterActions', 'user-actions', {\n    type: 'agenda',\n    options: {\n      rank: 40,\n      icon: 'fas fa-calendar-alt',\n      match: actionLabel => agendaUserActions.includes(actionLabel)\n    }\n  });\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/engagementCenterExtensions/extensions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main/webapp/vue-app/engagementCenterExtensions/extensions.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;