<script setup lang="ts">
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
</script>

<template>
  <div
    class="flex flex-col bg-cblue text-cwhite py-2 w-[200px] h-[250] border-[1px] border-solid border-cblack cursor-pointer rounded hover:scale-105 hover:shadow-md"
  >
    <div class="h-full flex flex-col justify-between">
      <h4 class="self-center text-cblack text-xl mb-2">
        {{ props.title }}
      </h4>
      <img
        :src="'https://mixcart.com.tr/storage/' + props.image"
        alt="picture"
        class="w-[198px] h-[150px]"
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
