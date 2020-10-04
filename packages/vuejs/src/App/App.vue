<template>
  <Container>
    <router-view></router-view>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './Container.vue';

export default defineComponent({
  name: 'App',
  components: {
    Container,
  }
});
</script>

<style scoped>
</style>
