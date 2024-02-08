<template>
  <q-layout view="lHh Lpr lFf">
    <BaseNavigationComponent />
    <q-page-container>
      <h1>Todo Layout</h1>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import BaseNavigationComponent from 'src/components/layout/BaseNavigationLayout.vue';
provide('SelectedApp', 'Todo');
</script>
