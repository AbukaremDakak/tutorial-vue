<script setup lang="ts">
import type { carddetails, likes } from "@/assets/type";
import { RouterLink } from "vue-router";
import Card from "@/components/Card.vue";
import EventService from "@/service/EventService";
import { computed, ref, watch, type ComputedRef, type Ref } from "vue";
import { useRoute } from "vue-router";

const card: Ref<carddetails | null> = ref(null);
const likeItems: Ref<likes | null> = ref(null);
const id: Ref<number> = ref(0);
const counter: Ref<number> = ref(0);
const addState: Ref<boolean> = ref(true);
const btn: ComputedRef<string> = computed(() =>
  addState.value ? "إضافة إلى السلة" : "حذف من السلة"
);

const route = useRoute();

watch(
  (): string | string[] => route.params.id,
  async (newvalue: string | string[]) => {
    EventService.getCardDetials("/api/material/", +newvalue).then((el) => {
      card.value = el.data.data;
      addState.value = true;
      counter.value = 0;
      likeItems.value = el.data.data.likeMaterials;

      if (id.value >= 0 && id.value <= 77) {
        id.value++;
      } else {
        id.value = 0;
      }
    });
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex flex-col items-center mt-main" :key="id">
    <!-- Item Details -->
    <div
      class="flex flex-col items-center rounded-lg p-2.5 m-2.5 bg-cblue w-11/12 sm:w-10/12 md:w-[600px] shadow-md"
    >
      <h4
        class="w-full text-cblack mb-2.5 truncate text-xl font-medium text-right"
      >
        {{ card?.name }}
      </h4>
      <img
        v-if="card?.images[0].image"
        :src="'https://mixcart.com.tr/storage/' + card?.images[0].image"
        alt="Item Picture"
        class="w-full object-cover"
      />
      <h1 v-else>No image has been</h1>
      <div>
        <p class="w-full h-[150px] overflow-y-auto mt-2.5 p-1.5 text-cwhite">
          {{ card?.summary }}
        </p>
      </div>
      <div>
        <p class="text-cyellow text-2xl font-medium">
          السعر&nbsp;:&nbsp;{{ card?.price.toFixed(2) }}
          <span class="text-cgreen font-bold">&#8378;</span>
        </p>
      </div>
      <div class="w-4/5 flex justify-end xs:justify-around py-1 items-center">
        <button
          class="w-[175px] p-1 ml-auto xs:ml-0 text-cwhite border-none rounded text-xl"
          @click="addState = !addState"
          :class="[addState ? 'bg-cgreen' : 'bg-cred']"
        >
          {{ btn }}
        </button>
        <div class="flex">
          <div class="flex flex-col justify-between h-9 ml-2.5">
            <button
              class="border-none w-2.5 h-3.5 bg-cwhite text-cblack rounded-t-md"
              @click="counter++"
            >
              &#8679;
            </button>
            <button
              class="border-none w-2.5 h-3.5 bg-cwhite text-cblack rounded-b-md"
              @click="counter--"
            >
              &#8681;
            </button>
          </div>
          <h2 class="text-cwhite ml-2.5 text-4xl">{{ counter }}&nbsp</h2>
        </div>
      </div>
    </div>

    <!-- The Same Material -->
    <div class="flex flex-col items-center justify-center">
      <h3 class="mt-2.5 text-cblack font-bold text-3xl mr-12">
        المواد المشابهة:
      </h3>
      <ul
        class="flex justify-around flex-wrap flex-row pt-2.5 rounded-xl bg-clightgray my-2.5 w-11/12 sm:w-10/12 shadow-md"
      >
        <li v-for="(item, index) in likeItems" :key="index" class="mb-2.5">
          <RouterLink :to="{ name: 'details', params: { id: item.id } }">
            <Card
              :image="item.images[0].image"
              :name="item.name"
              :price="item.price"
            />
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
