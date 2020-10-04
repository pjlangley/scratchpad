<template>
  <header>
    <img alt="Vue logo" width="100" height="100" src="../assets/logo.png">
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
header {
  margin-bottom: 40px;
  text-align: center;
}
</style>
