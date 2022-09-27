<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, type Ref } from "vue";
import "@/assets/styles/navbar.css";

const toggel: Ref<boolean> = ref(false);
</script>

<template>
  <div id="overlay" :class="[toggel && 'overlay-show']"></div>
  <button
    id="menu-btn"
    class="hamburger"
    :class="[toggel && 'open']"
    type="button"
    @click="toggel = !toggel"
  >
    <span class="hamburger-top"></span>
    <span class="hamburger-middle"></span>
    <span class="hamburger-bottom"></span>
  </button>

  <!-- Mobile menu -->
  <div class="side-menu" :class="[toggel && 'show-menu']">
    <ul class="small">
      <li>
        <RouterLink to="/">الرئيسية </RouterLink>
      </li>
      <li>
        <RouterLink to="/about">من نحن</RouterLink>
      </li>
      <li>
        <RouterLink to="/call"> اتصل بنا</RouterLink>
      </li>
    </ul>
  </div>

  <!-- Desktop navbar  -->
  <div class="nav-header">
    <ul class="medium">
      <li>
        <RouterLink to="/call">اتصل بنا</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">من نحن</RouterLink>
      </li>
      <li>
        <RouterLink to="/">الرئيسية</RouterLink>
      </li>
    </ul>
    <div class="liIcon">
      <a
        ><font-awesome-icon
          icon="fa-solid fa-cart-shopping"
          style="color: #ecf0f1"
      /></a>
    </div>
  </div>
</template>
