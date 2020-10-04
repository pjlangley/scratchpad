<template>
  <div class="container">
    <h1>Vue.js</h1>
    <button @click="goToSearch" class="btn btn-dark">
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  methods: {
    goToSearch() {
      this.$router.push('/search');
    }
  },
});
</script>

<style scoped>
.container {
  text-align: center;
}

h1 {
  margin-bottom: 1em;
}
</style>
