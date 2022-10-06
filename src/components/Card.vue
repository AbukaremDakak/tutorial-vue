<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, type ComputedRef, type Ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const imgLoading: Ref<boolean> = ref(false);
const imgPath: ComputedRef<string> = computed(() =>
  props.image.replace(".", ".thumb.small.")
);

function loadingImg(): void {
  imgLoading.value = true;
}
</script>

<template>
  <div
    class="flex flex-col bg-cblue text-cwhite py-2 w-[200px] h-[250] border-[1px] border-solid border-cblack cursor-pointer rounded hover:scale-105 hover:shadow-md"
  >
    <div class="h-full flex flex-col justify-between">
      <h4 class="self-center text-cyellow text-xl mb-2">
        {{ props.title }}
      </h4>
      <div
        class="relative w-[198px] h-[148.5px]"
        :class="[imgLoading ? 'hidden' : 'block']"
      >
        <div
          class="absolute top-1/2 left-1/2 -mt-8 -ml-8 border-[8px] border-solid border-cblack rounded-full border-t-[8px] border-t-solid border-t-clightgray w-16 h-16 animate-spin-slow"
        ></div>
      </div>
      <img
        :src="'https://mixcart.com.tr/storage/' + imgPath"
        alt="picture"
        class="w-full aspect-[4/3] object-cover"
        :class="[imgLoading ? 'block' : 'hidden']"
        @load="loadingImg"
      />
      <p class="text-cwhite truncate w-[200px] pr-2">
        {{ props.name }}
      </p>
      <p class="text-cyellow truncate w-[200px] pr-2">
        السعر: {{ props.price?.toFixed(2) }}
        <span class="text-cgreen text-xl font-extrabold">&#8378;</span>
      </p>
    </div>
  </div>
</template>
