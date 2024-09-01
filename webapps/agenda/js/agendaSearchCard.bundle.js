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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: {\n    result: {\n      type: Object,\n      default: null\n    }\n  },\n  data: () => ({\n    lineHeight: 22,\n    spaceAvatarSize: 37,\n    maxEllipsisHeight: 92,\n    currentUserId: eXo.env.portal.userIdentityId,\n    fullDateFormat: {\n      year: 'numeric',\n      month: 'long',\n      day: 'numeric'\n    },\n    dateTimeFormat: {\n      hour: '2-digit',\n      minute: '2-digit'\n    }\n  }),\n  computed: {\n    labels() {\n      return {\n        CancelRequest: this.$t('profile.CancelRequest'),\n        Confirm: this.$t('profile.Confirm'),\n        Connect: this.$t('profile.Connect'),\n        Ignore: this.$t('profile.Ignore'),\n        RemoveConnection: this.$t('profile.RemoveConnection'),\n        StatusTitle: this.$t('profile.StatusTitle'),\n        join: this.$t('space.join'),\n        leave: this.$t('space.leave'),\n        members: this.$t('space.members')\n      };\n    },\n    eventUrl() {\n      return this.result && this.result.id && `${eXo.env.portal.context}/${eXo.env.portal.portalName}/agenda?eventId=${this.result.id}`;\n    },\n    eventDescription() {\n      return this.result && this.result.description;\n    },\n    excerpts() {\n      return this.result && this.result.excerpts;\n    },\n    excerptHtml() {\n      return this.excerpts && this.excerpts.concat('\\r\\n...');\n    },\n    excerptText() {\n      return this.excerpts.length ? $('<div />').html(this.excerptHtml).text() : this.eventDescription;\n    },\n    eventStartDate() {\n      return this.result && this.result.start;\n    },\n    eventTitle() {\n      return this.result && this.result.summary || '';\n    },\n    eventTitleText() {\n      return $('<div />').html(this.eventTitle).text();\n    },\n    owner() {\n      return this.result && this.result.calendar && this.result.calendar.owner;\n    },\n    ownerProfile() {\n      return this.owner && (this.owner.profile || this.owner.space);\n    },\n    calendarOwnerLink() {\n      if (this.owner) {\n        if (this.owner.providerId === 'organization') {\n          return `${eXo.env.portal.context}/${eXo.env.portal.portalName}/profile/${this.owner.remoteId}`;\n        } else if (this.owner.providerId === 'space') {\n          return `${eXo.env.portal.context}/g/:spaces:${this.owner.remoteId}/`;\n        }\n      }\n      return '';\n    },\n    eventOwnerDisplayName() {\n      return this.ownerProfile && this.ownerProfile.displayName;\n    },\n    eventOwnerAvatarUrl() {\n      return this.ownerProfile && this.ownerProfile.avatarUrl;\n    },\n    isConfirmedEvent() {\n      return this.result && (this.result.status === 'CONFIRMED' || !this.result.status);\n    },\n    isTentativeEvent() {\n      return this.result && this.result.status === 'TENTATIVE';\n    },\n    currentAttendee() {\n      return this.result.attendees.find(attendee => attendee.identity.id === this.currentUserId);\n    },\n    hasVoted() {\n      return this.currentAttendee && this.currentAttendee.response === 'TENTATIVE';\n    },\n    voteLabel() {\n      if (!this.currentAttendee) {\n        return this.$t('agenda.datePoll');\n      }\n      return this.hasVoted && this.$t('agenda.datePollVoted') || this.$t('agenda.datePollVoteNeeded');\n    }\n  },\n  mounted() {\n    this.computeEllipsis();\n  },\n  methods: {\n    computeEllipsis() {\n      if (!this.excerptHtml || this.excerptHtml.length === 0) {\n        return;\n      }\n      const excerptParent = this.$refs.excerptNode;\n      if (!excerptParent) {\n        return;\n      }\n      excerptParent.innerHTML = this.excerpts.length ? this.excerptHtml : this.eventDescription;\n      if (excerptParent.innerHTML.length) {\n        const charsToDelete = 50;\n        let excerptParentHeight = excerptParent.getBoundingClientRect().height || this.lineHeight;\n        let lastExcerptParentHeight = 0;\n        if (excerptParentHeight > this.maxEllipsisHeight) {\n          let diffWithPrevious = excerptParentHeight;\n          let deleteCharsTentatives = 3;\n          while (excerptParentHeight > this.maxEllipsisHeight && (diffWithPrevious > 0 || deleteCharsTentatives)) {\n            excerptParent.innerHTML = this.deleteLastChars(excerptParent.innerHTML.replace(/&[a-z]*;/, ''), charsToDelete);\n            lastExcerptParentHeight = excerptParentHeight;\n            excerptParentHeight = excerptParent.getBoundingClientRect().height || this.lineHeight;\n            diffWithPrevious = lastExcerptParentHeight - excerptParentHeight;\n            if (diffWithPrevious === 0 && excerptParentHeight > this.maxEllipsisHeight) {\n              deleteCharsTentatives--;\n            }\n          }\n          excerptParent.innerHTML = this.deleteLastChars(excerptParent.innerHTML, 4);\n          excerptParent.innerHTML = `${excerptParent.innerHTML}...`;\n        }\n      }\n    },\n    deleteLastChars(html, charsToDelete) {\n      if (html.slice(-1) === '>') {\n        // Replace empty tags\n        html = html.replace(/<[a-zA-Z 0-9 \"'=]*><\\/[a-zA-Z 0-9]*>$/g, '');\n      }\n      html = html.replace(/<br>(\\.*)$/g, '');\n      charsToDelete = charsToDelete || 1;\n      let newHtml = '';\n      if (html.slice(-1) === '>') {\n        // Delete last inner html char\n        html = html.replace(/(<br>)*$/g, '');\n        newHtml = html.replace(new RegExp(`([^>]{${charsToDelete}})(</)([a-zA-Z 0-9]*)(>)$`), '$2$3');\n        newHtml = $('<div />').html(newHtml).html().replace(/&[a-z]*;/, '');\n        if (newHtml.length === html.length) {\n          newHtml = html.replace(new RegExp('([^>]*)(</)([a-zA-Z 0-9]*)(>)$'), '$2$3');\n        }\n      } else {\n        newHtml = html.substring(0, html.trimRight().length - charsToDelete);\n      }\n      return newHtml;\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=template&id=54b3b34d&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=template&id=54b3b34d& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"v-card\", {\n    staticClass: \"agendaSearchCard d-flex flex-column border-radius box-shadow\",\n    attrs: {\n      flat: \"\",\n      \"min-height\": \"227\"\n    }\n  }, [_vm.ownerProfile ? _c(\"v-card-text\", {\n    staticClass: \"px-2 pt-2 pb-0\"\n  }, [_c(\"a\", {\n    staticClass: \"flex-nowrap flex-shrink-0 d-flex spaceAvatar\"\n  }, [_c(\"v-avatar\", {\n    staticClass: \"pull-left my-auto\",\n    attrs: {\n      size: _vm.spaceAvatarSize,\n      tile: \"\"\n    }\n  }, [_c(\"v-img\", {\n    staticClass: \"mx-auto\",\n    attrs: {\n      src: _vm.eventOwnerAvatarUrl,\n      height: _vm.spaceAvatarSize,\n      width: _vm.spaceAvatarSize,\n      \"max-height\": _vm.spaceAvatarSize,\n      \"max-width\": _vm.spaceAvatarSize\n    }\n  })], 1), _vm._v(\" \"), _vm.eventTitle ? _c(\"div\", {\n    staticClass: \"d-flex flex-column text-truncate pull-left ms-2\"\n  }, [_vm.eventTitle ? _c(\"a\", {\n    directives: [{\n      name: \"sanitized-html\",\n      rawName: \"v-sanitized-html\",\n      value: _vm.eventTitle,\n      expression: \"eventTitle\"\n    }],\n    staticClass: \"pt-2 text-left text-truncate\",\n    attrs: {\n      href: _vm.eventUrl,\n      title: _vm.eventTitleText\n    }\n  }) : _vm._e(), _vm._v(\" \"), _vm.eventOwnerDisplayName ? _c(\"a\", {\n    staticClass: \"text-sub-title my-0\",\n    attrs: {\n      href: _vm.calendarOwnerLink\n    }\n  }, [_vm._t(\"subTitle\", function () {\n    return [_vm._v(\"\\n            \" + _vm._s(_vm.eventOwnerDisplayName) + \"\\n          \")];\n  })], 2) : _vm._e()]) : _vm._e()], 1)]) : _vm._e(), _vm._v(\" \"), _c(\"div\", {\n    staticClass: \"mx-auto d-flex flex-grow-1 px-3 py-0\"\n  }, [_c(\"div\", {\n    ref: \"excerptNode\",\n    staticClass: \"text-wrap text-break caption flex-grow-1\",\n    attrs: {\n      title: _vm.excerptText\n    }\n  })]), _vm._v(\" \"), _c(\"v-list\", {\n    staticClass: \"light-grey-background flex-grow-0 border-top-color no-border-radius pa-0\"\n  }, [_vm.isConfirmedEvent ? _c(\"v-list-item\", {\n    staticClass: \"px-0 pt-1 pb-2\",\n    attrs: {\n      \"two-line\": \"\"\n    }\n  }, [_c(\"v-list-item-icon\", {\n    staticClass: \"mx-0 my-auto\"\n  }, [_c(\"span\", {\n    staticClass: \"uiIconPLFEventTask tertiary--text ps-1 pe-2 display-1\"\n  })]), _vm._v(\" \"), _c(\"v-list-item-content\", [_c(\"v-list-item-title\", [_c(\"date-format\", {\n    staticClass: \"me-1\",\n    attrs: {\n      value: _vm.eventStartDate,\n      format: _vm.fullDateFormat\n    }\n  }), _vm._v(\" \"), _c(\"date-format\", {\n    staticClass: \"me-1\",\n    attrs: {\n      value: _vm.eventStartDate,\n      format: _vm.dateTimeFormat\n    }\n  })], 1)], 1)], 1) : _vm.isTentativeEvent ? _c(\"v-list-item\", {\n    staticClass: \"px-2 pt-1 pb-2\",\n    attrs: {\n      \"two-line\": \"\"\n    }\n  }, [_c(\"v-list-item-icon\", {\n    staticClass: \"mx-0 my-auto\"\n  }, [_c(\"span\", {\n    staticClass: \"uiIconStatistics uiIcon32x32 uiIconPLFFont tertiary--text ps-1 pe-2\"\n  })]), _vm._v(\" \"), _c(\"v-list-item-content\", {\n    staticClass: \"pb-0\"\n  }, [_c(\"v-list-item-title\", [_vm._v(\"\\n          \" + _vm._s(_vm.voteLabel) + \"\\n        \")])], 1)], 1) : _vm._e()], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-search/initComponents.js":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-search/initComponents.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AgendaSearchCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AgendaSearchCard.vue */ \"./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue\");\n\nconst components = {\n  'agenda-search-card': _components_AgendaSearchCard_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\nfor (const key in components) {\n  Vue.component(key, components[key]);\n}\n\n// get override components if exists\nif (extensionRegistry) {\n  const components = extensionRegistry.loadComponents('agendaSearchCard');\n  if (components && components.length > 0) {\n    components.forEach(cmp => {\n      Vue.component(cmp.componentName, cmp.componentOptions);\n    });\n  }\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-search/initComponents.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-search/main.js":
/*!*******************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-search/main.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"USER_TIMEZONE_ID\": () => (/* binding */ USER_TIMEZONE_ID),\n/* harmony export */   \"fetchSearchResult\": () => (/* binding */ fetchSearchResult),\n/* harmony export */   \"formatSearchResult\": () => (/* binding */ formatSearchResult)\n/* harmony export */ });\n/* harmony import */ var _initComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initComponents.js */ \"./src/main/webapp/vue-app/agenda-search/initComponents.js\");\n\nconst USER_TIMEZONE_ID = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;\nfunction formatSearchResult(results) {\n  return results || [];\n}\nfunction fetchSearchResult(uri, options) {\n  uri = `${uri}&timeZoneId=${USER_TIMEZONE_ID}`;\n  return fetch(uri, options);\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-search/main.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue":
/*!*******************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaSearchCard_vue_vue_type_template_id_54b3b34d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaSearchCard.vue?vue&type=template&id=54b3b34d& */ \"./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=template&id=54b3b34d&\");\n/* harmony import */ var _AgendaSearchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaSearchCard.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaSearchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaSearchCard_vue_vue_type_template_id_54b3b34d___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaSearchCard_vue_vue_type_template_id_54b3b34d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaSearchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaSearchCard.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaSearchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=template&id=54b3b34d&":
/*!**************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=template&id=54b3b34d& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaSearchCard_vue_vue_type_template_id_54b3b34d___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaSearchCard_vue_vue_type_template_id_54b3b34d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaSearchCard_vue_vue_type_template_id_54b3b34d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaSearchCard.vue?vue&type=template&id=54b3b34d& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?vue&type=template&id=54b3b34d&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-search/components/AgendaSearchCard.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ normalizeComponent)\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent(\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */,\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options =\n    typeof scriptExports === 'function' ? scriptExports.options : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) {\n    // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n          injectStyles.call(\n            this,\n            (options.functional ? this.parent : this).$root.$options.shadowRoot\n          )\n        }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection(h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://exo-agenda/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/webapp/vue-app/agenda-search/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;