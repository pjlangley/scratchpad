<template>
  <div class="container">
    <Header />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';

export default defineComponent({
  name: 'Container',
  components: {
    Header,
  },
});
</script>

<style scoped>
.container {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
