<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, type Ref } from "vue";

const toggel: Ref<boolean> = ref(false);
</script>

<template>
  <div
    id="overlay"
    :class="[
      toggel && 'xs:hidden fixed top-0 left-0 w-full h-full z-[4] bg-copacity',
    ]"
  ></div>
  <button
    id="menu-btn"
    class="group xs:hidden fixed z-10 top-6 left-4 cursor-pointer w-5 h-5"
    :class="[toggel && 'rotate-90 duration-500']"
    type="button"
    @click="toggel = !toggel"
  >
    <span
      class="absolute top-0 left-0 w-5 h-0.5 bg-cwhite duration-500 group-hover:bg-clightgray"
      :class="[toggel && 'rotate-45 translate-y-[6px] translate-x-[-6px]']"
    ></span>
    <span
      class="absolute top-[5px] left-0 w-5 h-0.5 bg-cwhite duration-500 group-hover:bg-clightgray"
      :class="[toggel && 'hidden']"
    ></span>
    <span
      class="absolute top-2.5 left-0 w-5 h-0.5 bg-cwhite duration-500 group-hover:bg-clightgray"
      :class="[toggel && '-rotate-45 translate-y-[-6px] translate-x-[-6px]']"
    ></span>
  </button>

  <!-- Mobile Menu -->
  <div
    class="xs:hidden fixed top-0 left-0 w-[250px] h-full z-[5] bg-cblack flex justify-center -translate-x-full duration-500 transition-transform"
    :class="[toggel && 'translate-x-0 duration-1000']"
  >
    <ul class="text-xl text-cwhite mt-12">
      <li class="mt-4">
        <RouterLink
          @click="toggel = !toggel"
          class="hover:text-clightgray duration-500"
          to="/"
          >الرئيسية
        </RouterLink>
      </li>
      <li class="mt-4">
        <RouterLink
          @click="toggel = !toggel"
          class="hover:text-clightgray duration-500"
          to="/about"
          >من نحن</RouterLink
        >
      </li>
      <li class="mt-4">
        <RouterLink
          @click="toggel = !toggel"
          class="hover:text-clightgray duration-500"
          to="/call"
        >
          اتصل بنا</RouterLink
        >
      </li>
    </ul>
  </div>

  <!-- Desktop Menu -->
  <div
    class="flex items-center px-7 fixed z-[3] w-full h-16 top-0 left-0 bg-cblack"
  >
    <div class="mr-5 relative pb-0.5">
      <a
        ><font-awesome-icon
          icon="fa-solid fa-cart-shopping"
          class="text-cwhite duration-500 hover:cursor-pointer hover:text-clightgray"
      /></a>
    </div>

    <ul id="linked" class="text-xl hidden xs:flex text-cwhite">
      <li class="mr-5 relative pb-0.5">
        <RouterLink
          class="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-cwhite after:h-px after:scale-x-0 after:transition-transform after:origin-[right_center] hover:after:scale-x-100 hover:after:duration-500 hover:after:origin-[left_center]"
          to="/"
          >الرئيسية</RouterLink
        >
      </li>
      <li class="mr-5 relative pb-0.5">
        <RouterLink
          to="/about"
          class="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-cwhite after:h-px after:scale-x-0 after:transition-transform after:origin-[right_center] hover:after:scale-x-100 hover:after:duration-500 hover:after:origin-[left_center]"
          >من نحن</RouterLink
        >
      </li>
      <li class="mr-5 relative pb-0.5">
        <RouterLink
          to="/call"
          class="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-cwhite after:h-px after:scale-x-0 after:transition-transform after:origin-[right_center] hover:after:scale-x-100 hover:after:duration-500 hover:after:origin-[left_center]"
        >
          اتصل بنا</RouterLink
        >
      </li>
    </ul>
  </div>
</template>
