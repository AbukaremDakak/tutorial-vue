<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="main-header">
    <ul>
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
  </nav>

  <RouterView />
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
  height: 65px;
  text-transform: uppercase;
  background-color: #34495e;
}

/* Desktop Menu */

.main-header ul {
  display: flex;
  font-size: 20px;
}

.main-header ul li {
  position: relative;
  margin-right: 20px;
  padding-bottom: 2px;
}

/* Menu Items Bottom Border */
.main-header ul li a.router-link-exact-active {
  color: #bdc3c7;
}
.main-header ul li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ecf0f1;
  height: 1px;
  transform: scaleX(0);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  transform-origin: right center;
}

.main-header ul li a:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
  transition-duration: 0.4s;
}
</style>
