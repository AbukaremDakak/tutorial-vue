<script setup lang="ts">
import { RouterView } from "vue-router";
import "@/assets/app.css";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
</template>
