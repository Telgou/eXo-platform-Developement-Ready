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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: {\n    settings: {\n      type: Object,\n      default: () => null\n    }\n  },\n  data: () => ({\n    connectors: []\n  }),\n  computed: {\n    enabledConnectors() {\n      return this.connectors && this.connectors.filter(connector => connector.enabled) || [];\n    }\n  },\n  methods: {\n    openDrawer() {\n      this.$root.$emit('agenda-connectors-drawer-open');\n    },\n    getDayFromAbbreviation(day) {\n      return this.$agendaUtils.getDayNameFromDayAbbreviation(day, eXo.env.portal.language);\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: {\n    settings: {\n      type: Object,\n      default: () => null\n    }\n  },\n  data: () => ({\n    id: `Settings${parseInt(Math.random() * 10000).toString().toString()}`\n  }),\n  computed: {\n    DAY_NAME_BY_ABBREVIATION() {\n      return {\n        'MO': this.getDayFromAbbreviation('MO'),\n        'TU': this.getDayFromAbbreviation('TU'),\n        'WE': this.getDayFromAbbreviation('WE'),\n        'TH': this.getDayFromAbbreviation('TH'),\n        'FR': this.getDayFromAbbreviation('FR'),\n        'SA': this.getDayFromAbbreviation('SA'),\n        'SU': this.getDayFromAbbreviation('SU')\n      };\n    },\n    agendaSelectedView() {\n      if (this.settings.agendaDefaultView === 'day') {\n        return this.$t('agenda.label.viewDay');\n      } else if (this.settings.agendaDefaultView === 'week') {\n        return this.$t('agenda.label.viewWeek');\n      } else {\n        return this.$t('agenda.label.viewMonth');\n      }\n    },\n    agendaWeekStartOnLabel() {\n      return this.DAY_NAME_BY_ABBREVIATION && this.$t('agenda.settings.label.weekStartsOn', {\n        0: this.DAY_NAME_BY_ABBREVIATION[this.settings.agendaWeekStartOn]\n      });\n    },\n    agendaWorkingTime() {\n      return this.settings && this.settings.showWorkingTime && this.settings.workingTimeStart && this.settings.workingTimeEnd && this.$t('agenda.settings.label.workingTime', {\n        0: this.settings.workingTimeStart,\n        1: this.settings.workingTimeEnd\n      });\n    }\n  },\n  methods: {\n    openDrawer() {\n      this.$refs.agendaDrawer.open();\n    },\n    getDayFromAbbreviation(day) {\n      return this.$agendaUtils.getDayNameFromDayAbbreviation(day, eXo.env.portal.language);\n    },\n    updateSettings(settings) {\n      this.settings = settings;\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data: () => ({\n    displayed: true,\n    settings: {\n      agendaDefaultView: 'week',\n      agendaWeekStartOn: 'MO',\n      showWorkingTime: false,\n      workingTimeStart: '08:00',\n      workingTimeEnd: '18:00'\n    }\n  }),\n  created() {\n    this.$root.$on('agenda-settings-refresh', this.initSettings);\n    this.initSettings();\n  },\n  mounted() {\n    document.addEventListener('hideSettingsApps', event => {\n      if (event && event.detail && this.id !== event.detail) {\n        this.displayed = false;\n      }\n    });\n    document.addEventListener('showSettingsApps', () => this.displayed = true);\n    this.$root.$on('agenda-settings-refresh', this.initSettings);\n  },\n  methods: {\n    initSettings(userSettings) {\n      if (userSettings) {\n        this.settings = userSettings;\n        this.$root.$applicationLoaded();\n      } else {\n        return this.$settingsService.getUserSettings().then(settings => {\n          if (settings) {\n            this.settings = settings;\n          }\n          return this.$nextTick();\n        }).finally(() => this.$root.$applicationLoaded());\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"v-list-item\", [_c(\"v-list-item-content\", [_c(\"v-list-item-title\", {\n    staticClass: \"text-header\"\n  }, [_vm._v(\"\\n      \" + _vm._s(_vm.$t(\"agenda.connectYourPersonalAgenda\")) + \"\\n    \")]), _vm._v(\" \"), _c(\"v-list-item-subtitle\", {\n    staticClass: \"my-3\"\n  }, [_c(\"agenda-connector-status\", {\n    attrs: {\n      connectors: _vm.connectors\n    }\n  }, [_c(\"template\", {\n    slot: \"connectButton\"\n  }, [_c(\"span\", {\n    staticClass: \"text-subtitle\"\n  }, [_vm._v(\"\\n            \" + _vm._s(_vm.$t(\"agenda.connectYourPersonalAgendaSubTitle\")) + \"\\n          \")])])], 2)], 1)], 1), _vm._v(\" \"), _c(\"v-list-item-action\", [_c(\"v-btn\", {\n    attrs: {\n      small: \"\",\n      icon: \"\"\n    },\n    on: {\n      click: _vm.openDrawer\n    }\n  }, [_c(\"i\", {\n    staticClass: \"uiIconEdit uiIconLightBlue pb-2\"\n  })])], 1), _vm._v(\" \"), _c(\"agenda-connectors-drawer\", {\n    attrs: {\n      connectors: _vm.enabledConnectors\n    }\n  }), _vm._v(\" \"), _c(\"agenda-connector\", {\n    attrs: {\n      settings: _vm.settings,\n      connectors: _vm.connectors,\n      \"auto-connect\": \"\"\n    },\n    on: {\n      \"connectors-loaded\": function ($event) {\n        _vm.connectors = $event;\n      }\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"v-list-item\", [_c(\"v-list-item-content\", [_c(\"v-list-item-title\", {\n    staticClass: \"text-title\"\n  }, [_vm._v(\"\\n      \" + _vm._s(_vm.$t(\"agenda\")) + \"\\n    \")]), _vm._v(\" \"), _vm.settings ? _c(\"v-flex\", {\n    staticClass: \"d-flex flex-wrap\"\n  }, [_c(\"v-chip\", {\n    staticClass: \"ma-2\",\n    attrs: {\n      color: \"primary\"\n    }\n  }, [_c(\"span\", {\n    staticClass: \"text-capitalize\"\n  }, [_vm._v(_vm._s(_vm.agendaSelectedView))]), _vm._v(\" \"), _c(\"span\", {\n    staticClass: \"ps-1\"\n  }, [_vm._v(_vm._s(_vm.$t(\"agenda.view\")))])]), _vm._v(\" \"), _c(\"v-chip\", {\n    staticClass: \"ma-2\",\n    attrs: {\n      color: \"primary\"\n    }\n  }, [_c(\"div\", {\n    staticClass: \"text-truncate\"\n  }, [_vm._v(\"\\n          \" + _vm._s(_vm.agendaWeekStartOnLabel) + \"\\n        \")])]), _vm._v(\" \"), _vm.agendaWorkingTime ? _c(\"v-chip\", {\n    staticClass: \"ma-2\",\n    attrs: {\n      color: \"primary\"\n    }\n  }, [_c(\"div\", {\n    staticClass: \"text-truncate\"\n  }, [_vm._v(\"\\n          \" + _vm._s(_vm.agendaWorkingTime) + \"\\n        \")])]) : _vm._e(), _vm._v(\" \"), _vm.settings.reminders ? _vm._l(_vm.settings.reminders, function (reminder, index) {\n    return _c(\"v-chip\", {\n      key: index,\n      staticClass: \"ma-2\",\n      attrs: {\n        color: \"primary\"\n      }\n    }, [_c(\"div\", {\n      staticClass: \"text-truncate\"\n    }, [reminder.before ? [_vm._v(\"\\n              \" + _vm._s(_vm.$t(\"agenda.label.notifyMeBefore\", {\n      0: reminder.before,\n      1: _vm.$t(`agenda.option.${reminder.beforePeriodType.toLowerCase()}s`).toLowerCase()\n    })) + \"\\n            \")] : [_vm._v(\"\\n              \" + _vm._s(_vm.$t(\"agenda.label.notifyMeWhenEventStarts\")) + \"\\n            \")]], 2)]);\n  }) : _vm._e()], 2) : _vm._e()], 1), _vm._v(\" \"), _c(\"v-list-item-action\", [_c(\"v-btn\", {\n    attrs: {\n      small: \"\",\n      icon: \"\"\n    },\n    on: {\n      click: _vm.openDrawer\n    }\n  }, [_c(\"i\", {\n    staticClass: \"uiIconEdit uiIconLightBlue pb-2\"\n  })])], 1), _vm._v(\" \"), _c(\"agenda-user-setting-drawer\", {\n    ref: \"agendaDrawer\",\n    attrs: {\n      settings: _vm.settings\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=template&id=1347b5ae&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=template&id=1347b5ae& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm.displayed ? _c(\"v-app\", [_c(\"v-card\", {\n    staticClass: \"application-body\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(\"v-list\", {\n    attrs: {\n      \"two-line\": \"\"\n    }\n  }, [_c(\"agenda-user-general-settings\", {\n    attrs: {\n      settings: _vm.settings\n    }\n  }), _vm._v(\" \"), _c(\"agenda-user-connector-settings\", {\n    attrs: {\n      settings: _vm.settings\n    }\n  })], 1)], 1)], 1) : _vm._e();\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/initComponents.js":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/initComponents.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AgendaUserSettings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AgendaUserSettings.vue */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue\");\n/* harmony import */ var _components_AgendaUserGeneralSettings_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AgendaUserGeneralSettings.vue */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue\");\n/* harmony import */ var _components_AgendaUserConnectorSettings_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AgendaUserConnectorSettings.vue */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue\");\n\n\n\nconst components = {\n  'agenda-user-settings': _components_AgendaUserSettings_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'agenda-user-general-settings': _components_AgendaUserGeneralSettings_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'agenda-user-connector-settings': _components_AgendaUserConnectorSettings_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\nfor (const key in components) {\n  Vue.component(key, components[key]);\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/initComponents.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/main.js":
/*!*************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/main.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _initComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initComponents.js */ \"./src/main/webapp/vue-app/agenda-user-setting/initComponents.js\");\n\n\n// get overrided components if exists\nif (extensionRegistry) {\n  const components = extensionRegistry.loadComponents('AgendaSettings');\n  if (components && components.length > 0) {\n    components.forEach(cmp => {\n      Vue.component(cmp.componentName, cmp.componentOptions);\n    });\n  }\n}\nVue.use(Vuetify);\nconst vuetify = new Vuetify(eXo.env.portal.vuetifyPreset);\ndocument.dispatchEvent(new CustomEvent('displayTopBarLoading'));\nconst appId = 'AgendaSettingsApplication';\n\n//getting language of the PLF\nconst lang = eXo && eXo.env.portal.language || 'en';\n\n//should expose the locale ressources as REST API \nconst url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.Agenda-${lang}.json`;\nfunction init() {\n  const appElement = document.createElement('div');\n  appElement.id = appId;\n  exoi18n.loadLanguageAsync(lang, url).then(i18n => {\n    // init Vue app when locale ressources are ready\n    Vue.createApp({\n      mounted() {\n        document.dispatchEvent(new CustomEvent('hideTopBarLoading'));\n      },\n      template: `<agenda-user-settings v-cacheable id=\"${appId}\" />`,\n      vuetify,\n      i18n\n    }, appElement, 'User Settings Agenda');\n  }).finally(() => Vue.prototype.$utils.includeExtensions('ConnectorsExtensions'));\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/main.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue":
/*!************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaUserConnectorSettings_vue_vue_type_template_id_b949240c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c& */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c&\");\n/* harmony import */ var _AgendaUserConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaUserConnectorSettings.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaUserConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaUserConnectorSettings_vue_vue_type_template_id_b949240c___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaUserConnectorSettings_vue_vue_type_template_id_b949240c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue":
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaUserGeneralSettings_vue_vue_type_template_id_663382d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6& */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6&\");\n/* harmony import */ var _AgendaUserGeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaUserGeneralSettings.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaUserGeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaUserGeneralSettings_vue_vue_type_template_id_663382d6___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaUserGeneralSettings_vue_vue_type_template_id_663382d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue":
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaUserSettings_vue_vue_type_template_id_1347b5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaUserSettings.vue?vue&type=template&id=1347b5ae& */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=template&id=1347b5ae&\");\n/* harmony import */ var _AgendaUserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaUserSettings.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaUserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaUserSettings_vue_vue_type_template_id_1347b5ae___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaUserSettings_vue_vue_type_template_id_1347b5ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaUserConnectorSettings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserGeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaUserGeneralSettings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserGeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaUserSettings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserConnectorSettings_vue_vue_type_template_id_b949240c___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserConnectorSettings_vue_vue_type_template_id_b949240c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserConnectorSettings_vue_vue_type_template_id_b949240c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?vue&type=template&id=b949240c&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserConnectorSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserGeneralSettings_vue_vue_type_template_id_663382d6___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserGeneralSettings_vue_vue_type_template_id_663382d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserGeneralSettings_vue_vue_type_template_id_663382d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?vue&type=template&id=663382d6&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserGeneralSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=template&id=1347b5ae&":
/*!**********************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=template&id=1347b5ae& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserSettings_vue_vue_type_template_id_1347b5ae___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserSettings_vue_vue_type_template_id_1347b5ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaUserSettings_vue_vue_type_template_id_1347b5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaUserSettings.vue?vue&type=template&id=1347b5ae& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?vue&type=template&id=1347b5ae&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-user-setting/components/AgendaUserSettings.vue?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/webapp/vue-app/agenda-user-setting/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;