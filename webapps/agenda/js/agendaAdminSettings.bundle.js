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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: {\n    settings: {\n      type: Object,\n      default: () => null\n    }\n  },\n  data: () => ({\n    connectors: [],\n    headers: [],\n    itemsPerPage: 10\n  }),\n  computed: {\n    hideFooter() {\n      return this.connectors && this.connectors.length <= this.itemsPerPage;\n    }\n  },\n  watch: {\n    settings() {\n      this.refreshConnectorsList();\n    }\n  },\n  mounted() {\n    document.dispatchEvent(new CustomEvent('hideTopBarLoading'));\n    this.skeleton = false;\n  },\n  created() {\n    this.headers = [{\n      text: this.$t('agenda.avatar'),\n      align: 'center'\n    }, {\n      text: this.$t('agenda.name'),\n      align: 'center'\n    }, {\n      text: this.$t('agenda.description'),\n      align: 'center'\n    }, {\n      text: this.$t('agenda.connectorClientApiKey'),\n      align: 'center',\n      width: '40%'\n    }, {\n      text: this.$t('agenda.connectorSecretApiKey'),\n      align: 'center',\n      width: '15%'\n    }, {\n      text: this.$t('agenda.active'),\n      align: 'center'\n    }];\n    // Retrieving list of registered connectors from extensionRegistry\n    document.addEventListener('agenda-connectors-refresh', this.refreshConnectorsList);\n  },\n  methods: {\n    refreshConnectorsList() {\n      const connectors = extensionRegistry.loadExtensions('agenda', 'connectors') || [];\n      if (this.settings && this.settings.remoteProviders) {\n        //in case of a new connector is added.\n        connectors.forEach(connector => {\n          const connectorObj = this.settings.remoteProviders.find(connectorSettings => connectorSettings.name === connector.name);\n          connector.enabled = connectorObj && connectorObj.enabled || false;\n          connector.apiKey = connectorObj && connectorObj.apiKey || '';\n          connector.secretKey = connectorObj && connectorObj.secretKey || '';\n          connector.loading = false;\n          connector.apiEditing = false;\n          connector.secretEditing = false;\n        });\n      } else {\n        connectors.forEach(connector => connector.enabled = false);\n      }\n      this.connectors = connectors;\n    },\n    enableDisableConnector(connector) {\n      connector.loading = true;\n      this.$settingsService.saveRemoteProviderStatus(connector.name, connector.enabled, connector.isOauth).then(result => Object.assign(connector, result)).catch(() => connector.enabled = !connector.enabled).finally(() => connector.loading = false);\n    },\n    editApiKey(connector) {\n      if (connector.apiEditing) {\n        this.$settingsService.saveRemoteProviderApiKey(connector.name, connector.apiKey).then(result => Object.assign(connector, result)).finally(() => connector.apiEditing = false);\n      } else {\n        connector.apiEditing = true;\n        this.$nextTick(() => {\n          const $input = this.$refs[`${connector.name}ApiInput`];\n          if ($input) {\n            $input.focus();\n          }\n        });\n      }\n    },\n    editSecretKey(connector) {\n      if (connector.secretEditing) {\n        this.$settingsService.saveRemoteProviderSecretKey(connector.name, connector.secretKey).then(result => Object.assign(connector, result)).finally(() => connector.secretEditing = false);\n      } else {\n        connector.secretEditing = true;\n        this.$nextTick(() => {\n          const $input = this.$refs[`${connector.name}SecretInput`];\n          if ($input) {\n            $input.focus();\n          }\n        });\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data: () => ({\n    settings: null\n  }),\n  created() {\n    this.refreshSettings().finally(() => this.$root.$applicationLoaded());\n  },\n  methods: {\n    refreshSettings() {\n      return this.$settingsService.getUserSettings().then(settings => this.settings = settings);\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", [_c(\"div\", {\n    staticClass: \"pb-5 text-title\"\n  }, [_vm._v(\"\\n    \" + _vm._s(_vm.$t(\"agenda.agendaConnectors\")) + \"\\n  \")]), _vm._v(\" \"), _c(\"v-divider\"), _vm._v(\" \"), _c(\"v-data-table\", {\n    attrs: {\n      headers: _vm.headers,\n      items: _vm.connectors,\n      \"items-per-page\": _vm.itemsPerPage,\n      \"hide-default-footer\": _vm.hideFooter,\n      \"footer-props\": {\n        itemsPerPageText: `${_vm.$t(\"agenda.itemsPerPage\")}:`\n      },\n      \"no-data-text\": _vm.$t(\"agenda.noConnectors\"),\n      \"disable-sort\": \"\"\n    },\n    scopedSlots: _vm._u([{\n      key: \"item\",\n      fn: function (props) {\n        return [_c(\"tr\", [_c(\"td\", [_c(\"div\", {\n          staticClass: \"align-center\"\n        }, [_c(\"v-avatar\", {\n          attrs: {\n            tile: \"\",\n            size: \"40\"\n          }\n        }, [_c(\"img\", {\n          attrs: {\n            alt: props.item.name,\n            src: props.item.avatar\n          }\n        })])], 1)]), _vm._v(\" \"), _c(\"td\", [_c(\"div\", {\n          staticClass: \"align-center\"\n        }, [_vm._v(\"\\n            \" + _vm._s(_vm.$t(props.item.name)) + \"\\n          \")])]), _vm._v(\" \"), _c(\"td\", [_c(\"div\", {\n          staticClass: \"align-center\"\n        }, [_vm._v(\"\\n            \" + _vm._s(_vm.$t(props.item.description)) + \"\\n          \")])]), _vm._v(\" \"), _c(\"td\", [_c(\"div\", {\n          staticClass: \"align-center\"\n        }, [_c(\"v-text-field\", {\n          ref: `${props.item.name}ApiInput`,\n          class: props.item.isOauth ? \"mx-2 pa-0\" : \"mx-2 pa-0 me-8\",\n          attrs: {\n            readonly: !props.item.apiEditing,\n            placeholder: !props.item.isOauth ? _vm.$t(\"agenda.noConnectorClientApiKey\") : _vm.$t(\"agenda.connectorClientApiKey\"),\n            dense: \"\"\n          },\n          scopedSlots: _vm._u([{\n            key: \"prepend\",\n            fn: function () {\n              return [_c(\"i\", {\n                class: !props.item.isOauth ? \"uiIcon uiIconLock grey--text mt-1\" : \"uiIcon uiIconLock primary--text mt-1\"\n              })];\n            },\n            proxy: true\n          }, props.item.isOauth ? {\n            key: \"append-outer\",\n            fn: function () {\n              return [_c(\"v-slide-x-reverse-transition\", {\n                attrs: {\n                  mode: \"out-in\"\n                }\n              }, [_c(\"i\", {\n                key: `icon-${props.item.apiEditing}`,\n                class: props.item.apiEditing ? \"uiIcon uiIconTick clickable success--text mt-1\" : \"uiIcon uiIconEdit clickable primary--text mt-1\",\n                on: {\n                  click: function ($event) {\n                    return _vm.editApiKey(props.item);\n                  }\n                }\n              })])];\n            },\n            proxy: true\n          } : null], null, true),\n          model: {\n            value: props.item.apiKey,\n            callback: function ($$v) {\n              _vm.$set(props.item, \"apiKey\", $$v);\n            },\n            expression: \"props.item.apiKey\"\n          }\n        })], 1)]), _vm._v(\" \"), _c(\"td\", [_c(\"v-text-field\", {\n          ref: `${props.item.name}SecretInput`,\n          class: props.item.mandatorySecretKey ? \"mx-2 pa-0\" : \"mx-2 pa-0 me-8\",\n          attrs: {\n            readonly: !props.item.secretEditing,\n            placeholder: !props.item.mandatorySecretKey ? _vm.$t(\"agenda.noConnectorClientSecretKey\") : _vm.$t(\"agenda.connectorSecretApiKey\"),\n            dense: \"\"\n          },\n          scopedSlots: _vm._u([{\n            key: \"prepend\",\n            fn: function () {\n              return [_c(\"em\", {\n                class: !props.item.mandatorySecretKey ? \"uiIcon uiIconLock grey--text mt-1\" : \"uiIcon uiIconLock primary--text mt-1\"\n              })];\n            },\n            proxy: true\n          }, props.item.mandatorySecretKey ? {\n            key: \"append-outer\",\n            fn: function () {\n              return [_c(\"v-slide-x-reverse-transition\", {\n                attrs: {\n                  mode: \"out-in\"\n                }\n              }, [_c(\"em\", {\n                key: `icon-${props.item.secretEditing}`,\n                class: props.item.secretEditing ? \"uiIcon uiIconTick clickable success--text mt-1\" : \"uiIcon uiIconEdit clickable primary--text mt-1\",\n                on: {\n                  click: function ($event) {\n                    return _vm.editSecretKey(props.item);\n                  }\n                }\n              })])];\n            },\n            proxy: true\n          } : null], null, true),\n          model: {\n            value: props.item.secretKey,\n            callback: function ($$v) {\n              _vm.$set(props.item, \"secretKey\", $$v);\n            },\n            expression: \"props.item.secretKey\"\n          }\n        })], 1), _vm._v(\" \"), _c(\"td\", [_c(\"div\", {\n          staticClass: \"d-flex flex-column align-center\"\n        }, [_c(\"v-switch\", {\n          staticClass: \"connectorSwitcher my-auto\",\n          attrs: {\n            disabled: props.item.isOauth && (props.item.loading || props.item.editing || !props.item.apiKey),\n            loading: props.item.loading,\n            ripple: false,\n            color: \"primary\"\n          },\n          on: {\n            change: function ($event) {\n              return _vm.enableDisableConnector(props.item);\n            }\n          },\n          model: {\n            value: props.item.enabled,\n            callback: function ($$v) {\n              _vm.$set(props.item, \"enabled\", $$v);\n            },\n            expression: \"props.item.enabled\"\n          }\n        })], 1)])])];\n      }\n    }])\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=template&id=3398b358&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=template&id=3398b358& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"v-app\", {\n    staticClass: \"connectorsAdminSettings\"\n  }, [_c(\"v-main\", {\n    staticClass: \"application-body pa-5\"\n  }, [_c(\"agenda-admin-connector-settings\", {\n    attrs: {\n      settings: _vm.settings\n    }\n  })], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/initComponents.js":
/*!*************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/initComponents.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AgendaAdminSettings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AgendaAdminSettings.vue */ \"./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue\");\n/* harmony import */ var _components_AgendaAdminConnectorSettings_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AgendaAdminConnectorSettings.vue */ \"./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue\");\n\n\nconst components = {\n  'agenda-admin-settings': _components_AgendaAdminSettings_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'agenda-admin-connector-settings': _components_AgendaAdminConnectorSettings_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nfor (const key in components) {\n  Vue.component(key, components[key]);\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/initComponents.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/main.js":
/*!***************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/main.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _initComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initComponents.js */ \"./src/main/webapp/vue-app/agenda-admin-settings/initComponents.js\");\n\n\n// get overrided components if exists\nif (extensionRegistry) {\n  const components = extensionRegistry.loadComponents('agendaAdminSettings');\n  if (components && components.length > 0) {\n    components.forEach(cmp => {\n      Vue.component(cmp.componentName, cmp.componentOptions);\n    });\n  }\n}\nVue.use(Vuetify);\nconst vuetify = new Vuetify(eXo.env.portal.vuetifyPreset);\ndocument.dispatchEvent(new CustomEvent('displayTopBarLoading'));\nconst appId = 'AgendaAdminSettingsApplication';\n\n//getting language of the PLF\nconst lang = eXo && eXo.env.portal.language || 'en';\n\n//should expose the locale ressources as REST API \nconst url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.Agenda-${lang}.json`;\nfunction init() {\n  exoi18n.loadLanguageAsync(lang, url).then(i18n => {\n    // init Vue app when locale ressources are ready\n    Vue.createApp({\n      template: `<agenda-admin-settings id=\"${appId}\" />`,\n      vuetify,\n      i18n\n    }, `#${appId}`, 'Agenda administration');\n  }).finally(() => {\n    Vue.prototype.$utils.includeExtensions('VisioConnector');\n    Vue.prototype.$utils.includeExtensions('ConnectorsExtensions');\n  });\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/main.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue":
/*!***************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaAdminConnectorSettings_vue_vue_type_template_id_c089e5a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2& */ \"./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2&\");\n/* harmony import */ var _AgendaAdminConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaAdminConnectorSettings.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaAdminConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaAdminConnectorSettings_vue_vue_type_template_id_c089e5a2___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaAdminConnectorSettings_vue_vue_type_template_id_c089e5a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaAdminSettings_vue_vue_type_template_id_3398b358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaAdminSettings.vue?vue&type=template&id=3398b358& */ \"./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=template&id=3398b358&\");\n/* harmony import */ var _AgendaAdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaAdminSettings.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaAdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaAdminSettings_vue_vue_type_template_id_3398b358___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaAdminSettings_vue_vue_type_template_id_3398b358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaAdminConnectorSettings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminConnectorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaAdminSettings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2&":
/*!**********************************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminConnectorSettings_vue_vue_type_template_id_c089e5a2___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminConnectorSettings_vue_vue_type_template_id_c089e5a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminConnectorSettings_vue_vue_type_template_id_c089e5a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?vue&type=template&id=c089e5a2&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminConnectorSettings.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=template&id=3398b358&":
/*!*************************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=template&id=3398b358& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminSettings_vue_vue_type_template_id_3398b358___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminSettings_vue_vue_type_template_id_3398b358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaAdminSettings_vue_vue_type_template_id_3398b358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaAdminSettings.vue?vue&type=template&id=3398b358& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?vue&type=template&id=3398b358&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-admin-settings/components/AgendaAdminSettings.vue?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/webapp/vue-app/agenda-admin-settings/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;