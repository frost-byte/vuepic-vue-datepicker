<script setup>
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import { DateExtent, extents } from '../interfaces/DateExtentInterface';

import '@vuepic/vue-datepicker/dist/main.css';

// const extents: Map<string, string> = new Map([]);
// const currentExtent: DateExtent = extents.get('day');
// could use two isolated calendars for a range of weeks; the available dates in the end calendar could exclude any dates before and including
// that selected in the start calendar.
const week1 = ref();
const month = ref();

onMounted(() => {
  const startMonth = { month: 2, year: 2023 };
  const endMonth = { month: 3, year: 2023 };
  month.value = [startMonth, endMonth];
  const startWeek = '02/05/2023';
  const endWeek = '02/19/2023';
  week1.value = [startWeek, endWeek];
});
</script>

<template>
  <div>
    <Datepicker v-model="month" range month-picker week-start="0" dark />
    <Datepicker
      v-model="week1"
      week-picker
      week-start="0"
      :disabled-week-days="[1, 2, 3, 4, 5]"
      dark
    />
  </div>
</template>
