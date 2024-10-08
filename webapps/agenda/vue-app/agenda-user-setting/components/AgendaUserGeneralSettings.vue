<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="text-title">
        {{ $t('agenda') }}
      </v-list-item-title>
      <v-flex v-if="settings" class="d-flex flex-wrap">
        <v-chip
          class="ma-2"
          color="primary">
          <span class="text-capitalize">{{ agendaSelectedView }}</span>
          <span class="ps-1">{{ $t('agenda.view') }}</span>
        </v-chip>
        <v-chip
          class="ma-2"
          color="primary">
          <div class="text-truncate">
            {{ agendaWeekStartOnLabel }}
          </div>
        </v-chip>
        <v-chip
          v-if="agendaWorkingTime"
          class="ma-2"
          color="primary">
          <div class="text-truncate">
            {{ agendaWorkingTime }}
          </div>
        </v-chip>
        <template v-if="settings.reminders">
          <v-chip
            v-for="(reminder, index) in settings.reminders"
            :key="index"
            class="ma-2"
            color="primary">
            <div class="text-truncate">
              <template v-if="reminder.before">
                {{ $t('agenda.label.notifyMeBefore', {0: reminder.before, 1: $t(`agenda.option.${reminder.beforePeriodType.toLowerCase()}s`).toLowerCase()}) }}
              </template>
              <template v-else>
                {{ $t('agenda.label.notifyMeWhenEventStarts') }}
              </template>
            </div>
          </v-chip>
        </template>
      </v-flex>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn
        small
        icon
        @click="openDrawer">
        <i class="uiIconEdit uiIconLightBlue pb-2"></i>
      </v-btn>
    </v-list-item-action>
    <agenda-user-setting-drawer ref="agendaDrawer" :settings="settings" />
  </v-list-item>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: () => null,
    },
  },
  data: () => ({
    id: `Settings${parseInt(Math.random() * 10000)
      .toString()
      .toString()}`,
  }),
  computed: {
    DAY_NAME_BY_ABBREVIATION () {
      return {
        'MO': this.getDayFromAbbreviation('MO'),
        'TU': this.getDayFromAbbreviation('TU'),
        'WE': this.getDayFromAbbreviation('WE'),
        'TH': this.getDayFromAbbreviation('TH'),
        'FR': this.getDayFromAbbreviation('FR'),
        'SA': this.getDayFromAbbreviation('SA'),
        'SU': this.getDayFromAbbreviation('SU'),
      };
    },
    agendaSelectedView () {
      if (this.settings.agendaDefaultView === 'day') {
        return this.$t('agenda.label.viewDay');
      } else if (this.settings.agendaDefaultView === 'week') {
        return this.$t('agenda.label.viewWeek');
      } else {
        return this.$t('agenda.label.viewMonth');
      }
    },
    agendaWeekStartOnLabel () {
      return this.DAY_NAME_BY_ABBREVIATION && this.$t('agenda.settings.label.weekStartsOn',
        {0: this.DAY_NAME_BY_ABBREVIATION[this.settings.agendaWeekStartOn]});
    },
    agendaWorkingTime () {
      return this.settings && this.settings.showWorkingTime && this.settings.workingTimeStart && this.settings.workingTimeEnd
            && this.$t('agenda.settings.label.workingTime',
              {0: this.settings.workingTimeStart, 1: this.settings.workingTimeEnd});
    }
  },
  methods: {
    openDrawer(){
      this.$refs.agendaDrawer.open();
    },
    getDayFromAbbreviation(day) {
      return this.$agendaUtils.getDayNameFromDayAbbreviation(day, eXo.env.portal.language);
    },
    updateSettings(settings) {
      this.settings = settings;
    },
  }
};
</script>
