<script setup lang="ts">
import { ref } from 'vue-yue';

const show = ref(true);
setTimeout(() => show.value = false, 1000);
</script>

<template>
  <TextEdit :show="show" />
</template>