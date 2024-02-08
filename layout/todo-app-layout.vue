<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <HomeNavigationComponent /> -->
    <q-page-container>
      <h1>Todo Layout</h1>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
// import HomeNavigationComponent from 'src/components/layout/HomeNavigationComponent.vue';
provide('SelectedApp', 'Todo');
</script>
