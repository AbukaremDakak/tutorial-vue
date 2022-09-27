<script setup lang="ts">
import { RouterView } from "vue-router";
import "@/assets/styles/app.css";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
</template>
