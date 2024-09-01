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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: {\n    currentSpace: {\n      type: Object,\n      default: null\n    },\n    currentCalendar: {\n      type: Object,\n      default: null\n    },\n    agendaBaseLink: {\n      type: String,\n      default: null\n    }\n  },\n  data: () => ({\n    initialized: false\n  }),\n  computed: {\n    isMobile() {\n      return this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm';\n    },\n    displayButton() {\n      return (!this.isMobile || this.canCreateEvent) && (this.initialized || !eXo.env.portal.spaceId);\n    },\n    canCreateEvent() {\n      return !this.currentCalendar || !this.currentCalendar.acl || this.currentCalendar.acl.canCreate;\n    },\n    addEventButtonTooltip() {\n      if (!this.canCreateEvent) {\n        return this.$t('agenda.onlySpaceRedactorCanCreateEvent');\n      }\n      return '';\n    }\n  },\n  created() {\n    this.$root.$on('agenda-application-loaded', () => this.initialized = true);\n  },\n  methods: {\n    openEventForm() {\n      this.$root.$emit('agenda-event-quick-form', {\n        summary: '',\n        startDate: new Date(),\n        endDate: new Date(),\n        allDay: false,\n        calendar: {\n          owner: {}\n        },\n        reminders: [],\n        attachments: [],\n        attendees: []\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: {\n    eventType: {\n      type: String,\n      default: () => 'myEvents'\n    }\n  },\n  data: () => ({\n    initialized: false,\n    currentSpace: null,\n    currentCalendar: null,\n    loading: false,\n    ownerIds: [],\n    connectors: [],\n    periodStart: new Date(),\n    limit: 10,\n    period: {\n      start: new Date(),\n      end: null\n    },\n    settings: {\n      agendaDefaultView: 'week',\n      agendaWeekStartOn: 'MO',\n      showWorkingTime: false,\n      workingTimeStart: '08:00',\n      workingTimeEnd: '18:00'\n    },\n    events: [],\n    agendaBaseLink: null,\n    conferenceProviders: null,\n    selectedProviderType: null\n  }),\n  computed: {\n    enabledConferenceProviderName() {\n      return this.settings && this.conferenceProviders && this.conferenceProviders.length > 0 && this.conferenceProviders.find(provider => provider.configured);\n    },\n    conferenceProvider() {\n      return this.conferenceProviders && this.enabledConferenceProviderName && this.conferenceProviders.find(provider => provider.isInitialized && provider.linkSupported && provider.groupSupported && this.enabledConferenceProviderName.getType() === provider.getType());\n    },\n    weekdays() {\n      return this.settings && this.$agendaUtils.getWeekSequenceFromDay(this.settings.agendaWeekStartOn);\n    },\n    workingTime() {\n      return this.settings && {\n        showWorkingTime: this.settings.showWorkingTime,\n        workingTimeStart: this.settings.workingTimeStart,\n        workingTimeEnd: this.settings.workingTimeEnd\n      };\n    },\n    enabledConnectors() {\n      return this.connectors && this.connectors.filter(connector => connector.initialized && connector.enabled) || [];\n    }\n  },\n  watch: {\n    limit() {\n      this.retrieveEvents();\n    },\n    eventType() {\n      this.retrieveEvents();\n    },\n    initialized() {\n      if (this.initialized) {\n        this.$root.$emit('agenda-application-loaded');\n      }\n    },\n    period() {\n      this.retrieveEvents();\n    },\n    loading() {\n      if (this.loading) {\n        document.dispatchEvent(new CustomEvent('displayTopBarLoading'));\n      } else {\n        document.dispatchEvent(new CustomEvent('hideTopBarLoading'));\n        this.$root.$applicationLoaded();\n      }\n    }\n  },\n  created() {\n    if (eXo.env.portal.spaceId) {\n      this.limit = 5;\n    }\n    this.retrieveEvents().finally(() => document.dispatchEvent(new CustomEvent('hideTopBarLoading')));\n    this.$root.$on('agenda-settings-refresh', this.initSettings);\n    this.$root.$on('agenda-refresh', this.retrieveEvents);\n    this.$root.$on('agenda-event-saved', this.retrieveEvents);\n    this.$root.$on('agenda-event-deleted', this.retrieveEvents);\n    this.spaceId = eXo.env.portal.spaceId;\n    document.addEventListener('drawerOpened', () => this.$el.closest('#stickyBlockDesktop').style.position = 'static');\n    document.addEventListener('drawerClosed', () => this.$el.closest('#stickyBlockDesktop').style.position = 'sticky');\n\n    // Asynchronously load settings to use it in dialogs,\n    // not needed for main screen display\n    this.initSettings();\n  },\n  beforeDestroy() {\n    document.removeEventListener('drawerOpened', () => this.$el.closest('#stickyBlockDesktop').style.position = 'static');\n    document.removeEventListener('drawerClosed', () => this.$el.closest('#stickyBlockDesktop').style.position = 'sticky');\n  },\n  methods: {\n    initSettings(userSettings) {\n      if (userSettings) {\n        this.settings = userSettings;\n      } else {\n        return this.$settingsService.getUserSettings().then(settings => {\n          if (settings) {\n            this.settings = settings;\n            this.calendarType = this.settings && this.settings.agendaDefaultView;\n            this.refreshProviders(eXo.env.portal.spaceName);\n          }\n        }).finally(() => {\n          this.settingsLoaded = true;\n        });\n      }\n    },\n    refreshProviders(spacePrettyName) {\n      if (spacePrettyName) {\n        this.$webConferencingService.getAllProviders(spacePrettyName).then(providers => {\n          this.conferenceProviders = providers;\n          return this.$nextTick();\n        });\n      } else {\n        this.conferenceProviders = null;\n      }\n    },\n    retrieveEvents() {\n      if (!this.initialized && eXo.env.portal.spaceId) {\n        const spaceId = eXo.env.portal.spaceId;\n        return this.$spaceService.getSpaceById(spaceId, 'identity').then(space => {\n          this.currentSpace = space;\n          if (space && space.identity && space.identity.id) {\n            this.ownerIds = [space.identity.id];\n            const spaceGroupUri = this.currentSpace.groupId.replace(/\\//g, ':');\n            this.agendaBaseLink = `${eXo.env.portal.context}/g/${spaceGroupUri}/${this.currentSpace.prettyName}/agenda`;\n            return this.$calendarService.getCalendars(0, 1, false, this.ownerIds);\n          } else {\n            this.agendaBaseLink = `${eXo.env.portal.context}/${eXo.env.portal.portalName}/agenda`;\n          }\n        }).then(data => {\n          this.currentCalendar = data && data.calendars && data.calendars.length && data.calendars[0] || null;\n        }).finally(() => {\n          this.initialized = true;\n          this.loading = false;\n          this.retrieveEventsFromStore();\n        });\n      } else {\n        if (!eXo.env.portal.spaceId) {\n          this.agendaBaseLink = `${eXo.env.portal.context}/${eXo.env.portal.portalName}/agenda`;\n        }\n        return this.retrieveEventsFromStore();\n      }\n    },\n    retrieveEventsFromStore() {\n      this.loading = true;\n      const userIdentityId = this.eventType === 'myEvents' && eXo.env.portal.userIdentityId || null;\n      const responseTypes = ['ACCEPTED', 'TENTATIVE'];\n      return this.$eventService.getEvents(this.searchTerm, this.ownerIds, userIdentityId, this.$agendaUtils.toRFC3339(this.period.start, false), this.$agendaUtils.toRFC3339(this.period.end), this.limit, responseTypes).then(data => {\n        const events = data && data.events || [];\n        events.forEach(event => {\n          event.name = event.summary;\n          event.startDate = event.start && this.$agendaUtils.toDate(event.start) || null;\n          event.endDate = event.end && this.$agendaUtils.toDate(event.end) || null;\n        });\n        this.events = events;\n      }).catch(error => {\n        console.error('Error retrieving events', error);\n      }).finally(() => {\n        this.initialized = true;\n        this.loading = false;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"v-flex\", {\n    staticClass: \"agenda-timeline-header d-flex mb-5\"\n  }, [_c(\"div\", {\n    staticClass: \"d-flex align-center\"\n  }, [_c(\"a\", {\n    staticClass: \"widget-text-header text-capitalize-first-letter\",\n    attrs: {\n      href: _vm.agendaBaseLink\n    }\n  }, [_vm._v(\"\\n      \" + _vm._s(_vm.$t(\"agenda\")) + \"\\n    \")]), _vm._v(\" \"), _c(\"agenda-pending-invitation-badge\", {\n    attrs: {\n      \"current-space\": _vm.currentSpace,\n      \"offset-y\": 18,\n      \"offset-x\": 12\n    }\n  })], 1), _vm._v(\" \"), _c(\"v-spacer\"), _vm._v(\" \"), _vm.displayButton ? _c(\"div\", {\n    staticClass: \"d-inline-block\",\n    attrs: {\n      title: _vm.addEventButtonTooltip\n    }\n  }, [_c(\"v-btn\", {\n    staticClass: \"primary--text\",\n    attrs: {\n      disabled: !_vm.canCreateEvent,\n      title: _vm.$t(\"agenda.button.addEvent\"),\n      icon: \"\",\n      text: \"\"\n    },\n    on: {\n      click: _vm.openEventForm\n    }\n  }, [_c(\"v-icon\", [_vm._v(\"mdi-plus\")])], 1)], 1) : _vm._e()], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=template&id=34f95db3&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=template&id=34f95db3& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"v-app\", {\n    staticClass: \"agenda-application border-box-sizing\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(\"v-card\", {\n    staticClass: \"pa-5 application-body\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(\"agenda-timeline-header\", {\n    attrs: {\n      \"current-space\": _vm.currentSpace,\n      \"current-calendar\": _vm.currentCalendar,\n      \"agenda-base-link\": _vm.agendaBaseLink\n    }\n  }), _vm._v(\" \"), _c(\"agenda-timeline\", {\n    attrs: {\n      events: _vm.events,\n      \"period-start-date\": _vm.periodStart,\n      \"agenda-base-link\": _vm.agendaBaseLink,\n      loading: _vm.loading || !_vm.initialized,\n      limit: _vm.limit\n    }\n  })], 1), _vm._v(\" \"), _c(\"agenda-event-dialog\", {\n    ref: \"eventFormDialog\",\n    attrs: {\n      \"current-space\": _vm.currentSpace,\n      \"current-calendar\": _vm.currentCalendar,\n      settings: _vm.settings,\n      connectors: _vm.enabledConnectors,\n      \"conference-provider\": _vm.conferenceProvider,\n      weekdays: _vm.weekdays,\n      \"working-time\": _vm.workingTime\n    }\n  }), _vm._v(\" \"), _c(\"agenda-event-quick-form-drawer\", {\n    attrs: {\n      \"current-space\": _vm.currentSpace,\n      \"current-calendar\": _vm.currentCalendar,\n      settings: _vm.settings,\n      \"conference-provider\": _vm.conferenceProvider\n    }\n  }), _vm._v(\" \"), _c(\"agenda-event-save\"), _vm._v(\" \"), _c(\"agenda-connector\", {\n    attrs: {\n      settings: _vm.settings,\n      connectors: _vm.connectors\n    },\n    on: {\n      \"connectors-loaded\": function ($event) {\n        _vm.connectors = $event;\n      }\n    }\n  }), _vm._v(\" \"), _c(\"agenda-pending-invitation-drawer\", {\n    attrs: {\n      \"current-space\": _vm.currentSpace\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/initComponents.js":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/initComponents.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AgendaTimelineWidget_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AgendaTimelineWidget.vue */ \"./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue\");\n/* harmony import */ var _components_AgendaTimelineHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AgendaTimelineHeader.vue */ \"./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue\");\n\n\nconst components = {\n  'agenda-timeline-widget': _components_AgendaTimelineWidget_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'agenda-timeline-header': _components_AgendaTimelineHeader_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nfor (const key in components) {\n  Vue.component(key, components[key]);\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/initComponents.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/main.js":
/*!*********************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/main.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _initComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initComponents.js */ \"./src/main/webapp/vue-app/agenda-timeline/initComponents.js\");\n\n\n// get overrided components if exists\nif (extensionRegistry) {\n  const components = extensionRegistry.loadComponents('Agenda');\n  if (components && components.length > 0) {\n    components.forEach(cmp => {\n      Vue.component(cmp.componentName, cmp.componentOptions);\n    });\n  }\n}\nVue.use(Vuetify);\nconst vuetify = new Vuetify(eXo.env.portal.vuetifyPreset);\ndocument.dispatchEvent(new CustomEvent('displayTopBarLoading'));\nconst appId = 'AgendaTimelineApplication';\n\n//getting language of the PLF\nconst lang = eXo && eXo.env.portal.language || 'en';\n\n//should expose the locale ressources as REST API \nconst url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.Agenda-${lang}.json`;\nfunction init() {\n  exoi18n.loadLanguageAsync(lang, url).then(i18n => {\n    // init Vue app when locale ressources are ready\n    const eventType = eXo.env.portal.spaceId ? 'allEvents' : 'myEvents';\n    Vue.createApp({\n      template: `<agenda-timeline-widget id=\"${appId}\" event-type=\"${eventType}\" />`,\n      vuetify,\n      i18n\n    }, `#${appId}`, 'Agenda Timeline');\n  }).finally(() => {\n    Vue.prototype.$utils.includeExtensions('VisioConnector');\n    Vue.prototype.$utils.includeExtensions('ConnectorsExtensions');\n  });\n}\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/main.js?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue":
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaTimelineHeader_vue_vue_type_template_id_85b0cd08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08& */ \"./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08&\");\n/* harmony import */ var _AgendaTimelineHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaTimelineHeader.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaTimelineHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaTimelineHeader_vue_vue_type_template_id_85b0cd08___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaTimelineHeader_vue_vue_type_template_id_85b0cd08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue":
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AgendaTimelineWidget_vue_vue_type_template_id_34f95db3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgendaTimelineWidget.vue?vue&type=template&id=34f95db3& */ \"./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=template&id=34f95db3&\");\n/* harmony import */ var _AgendaTimelineWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgendaTimelineWidget.vue?vue&type=script&lang=js& */ \"./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AgendaTimelineWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AgendaTimelineWidget_vue_vue_type_template_id_34f95db3___WEBPACK_IMPORTED_MODULE_0__.render,\n  _AgendaTimelineWidget_vue_vue_type_template_id_34f95db3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaTimelineHeader.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaTimelineWidget.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08&":
/*!********************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineHeader_vue_vue_type_template_id_85b0cd08___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineHeader_vue_vue_type_template_id_85b0cd08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineHeader_vue_vue_type_template_id_85b0cd08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?vue&type=template&id=85b0cd08&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineHeader.vue?");

/***/ }),

/***/ "./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=template&id=34f95db3&":
/*!********************************************************************************************************************!*\
  !*** ./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=template&id=34f95db3& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineWidget_vue_vue_type_template_id_34f95db3___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineWidget_vue_vue_type_template_id_34f95db3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgendaTimelineWidget_vue_vue_type_template_id_34f95db3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgendaTimelineWidget.vue?vue&type=template&id=34f95db3& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?vue&type=template&id=34f95db3&\");\n\n\n//# sourceURL=webpack://exo-agenda/./src/main/webapp/vue-app/agenda-timeline/components/AgendaTimelineWidget.vue?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/webapp/vue-app/agenda-timeline/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;