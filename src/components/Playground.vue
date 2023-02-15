<script setup>
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import { DateExtent, extents } from '../interfaces/DateExtentInterface';

import '@vuepic/vue-datepicker/dist/main.css';

// const extents: Map<string, string> = new Map([]);
// const currentExtent: DateExtent = extents.get('day');

const week = ref();
const month = ref();

onMounted(() => {
  const startMonth = { month: 2, year: 2023 };
  const endMonth = { month: 3, year: 2023 };
  month.value = [startMonth, endMonth];
  const startWeek = '02/05/2023';
  const endWeek = '02/19/2023';
  week.value = [startWeek, endWeek];
});
</script>

<template>
  <div>
    <Datepicker v-model="month" range month-picker week-start="0" />
    <Datepicker v-model="week" range week-picker week-start="0" />
  </div>
</template>
