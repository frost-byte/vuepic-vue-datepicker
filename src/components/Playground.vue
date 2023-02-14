<script setup>
// week-picker
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import { DateExtent, extents } from '../interfaces/DateExtentInterface';

import '@vuepic/vue-datepicker/dist/main.css';

// const extents: Map<string, string> = new Map([]);
// const currentExtent: DateExtent = extents.get('day');

const date = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});
</script>

<template>
  <div>
    <Datepicker v-model="date" range />
  </div>
</template>
