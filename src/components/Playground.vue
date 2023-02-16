<script setup>
import { ref, onMounted, computed } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import { DateExtent, extents } from '../interfaces/DateExtentInterface';

import '@vuepic/vue-datepicker/dist/main.css';

// const extents: Map<string, string> = new Map([]);
// const currentExtent: DateExtent = extents.get('day');
// could use two isolated calendars for a range of weeks; the available dates in the end calendar could exclude any dates before and including
// that selected in the start calendar.
const week1 = ref(['02/05/2023', '02/11/2023']);
const wp1 = ref();
const week2 = ref();
const wp2 = ref();
const month = ref();
const minForEndWeek = computed(() => {
  console.log(week1.value[1]);

  const endDate = new Date(week1.value[1]);
  endDate.setDate(endDate.getDate() + 1);
  return endDate;
});

onMounted(() => {
  const startMonth = { month: 2, year: 2023 };
  const endMonth = { month: 3, year: 2023 };
  month.value = [startMonth, endMonth];
  week2.value = ['02/26/2023', '03/04/2023'];
});

function displayDate(dateVal, prefix = 'Start') {
  const newDate = new Date(dateVal);
  const d = newDate.getDate();
  const m = newDate.getMonth() + 1;
  const y = newDate.getFullYear();

  return `${prefix} ${m}/${d}/${y}`;
}
</script>

<style scoped>
.holder {
  width: 45%;
  display: inline-grid;
}
</style>
<template>
  <div>
    <Datepicker v-model="month" range month-picker week-start="0" dark />
    <div class="holder">
      <Datepicker
        v-model="week1"
        ref="wp1"
        week-picker
        week-start="0"
        :disabled-week-days="[1, 2, 3, 4, 5]"
        dark
      >
        <template #action-preview="{ value }">
          {{ displayDate(value[0]) }}
        </template>
      </Datepicker>
    </div>
    <div class="holder">
      <Datepicker
        v-model="week2"
        ref="wp2"
        :min-date="minForEndWeek"
        week-picker
        week-start="0"
        :disabled-week-days="[1, 2, 3, 4, 5]"
        dark
      >
        <template #action-preview="{ value }">
          {{ displayDate(value[1], 'End') }}
        </template>
      </Datepicker>
    </div>
  </div>
</template>
