<template>
  <v-list
    class="flex-grow-1 d-flex flex-column pa-0"
    dense>
    <v-list-item
      v-if="!reminders || !reminders.length"
      class="px-0 reminder-list-item"
      dense>
      <label class="text-subtitle mx-auto">
        {{ $t('agenda.noRemindersYet') }}
      </label>
    </v-list-item>
    <agenda-reminder-user-setting-item
      v-for="(reminder, index) in reminders"
      :key="index"
      :reminder="reminder"
      @remove="removeReminder(reminder)" />
    <v-list-item
      v-if="canAddReminder"
      class="ps-0 my-auto reminder-list-item"
      dense>
      <a class="add-notification-link" @click="addReminder">
        {{ $t('agenda.addReminder') }}
      </a>
    </v-list-item>
  </v-list>
</template>

<script>
const MAX_REMINDERS = 5;

export default {
  props: {
    reminders: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    canAddReminder() {
      return this.reminders.length < MAX_REMINDERS;
    },
  },
  methods: {
    addReminder() {
      this.reminders.push({before: 0, beforePeriodType: 'MINUTE'});
    },
    removeReminder(reminder) {
      this.reminders.splice(this.reminders.indexOf(reminder), 1);
    },
  },
};
</script>