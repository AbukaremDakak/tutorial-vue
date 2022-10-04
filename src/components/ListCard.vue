<script setup lang="ts">
import Card from "@/components/Card.vue";
import { RouterLink } from "vue-router";
import type { carditem } from "@/assets/type";
import _ from "lodash";
import EventService from "@/service/EventService";
import { onBeforeMount, onBeforeUnmount, onMounted, ref, type Ref } from "vue";

const items: Ref<Array<carditem>> = ref([]);
const infinityEl: Ref<HTMLDivElement | null> = ref<HTMLDivElement | null>(null);
const offcet: Ref<number> = ref(10);
const limit: Ref<number> = ref(10);
const scrolling: Ref<number> = ref(window.innerHeight);
const widthW: Ref<number> = ref(window.innerWidth);

onBeforeMount(async () => {
  try {
    const res = await EventService.getEvent("/api/material");
    items.value = res.data.data;
  } catch (error) {
    console.log(error);
  }
});

onMounted(() => window.addEventListener<"scroll">("scroll", handleScroll));

onBeforeUnmount(() =>
  window.removeEventListener<"scroll">("scroll", handleScroll)
);

const scroller = _.debounce(async () => {
  if (infinityEl.value !== null) {
    if (
      infinityEl.value.getBoundingClientRect().bottom >
      window.innerHeight + 200
    )
      return;

    try {
      const res = await EventService.getEvent(
        `/api/material?offcet=${offcet.value}&limit=${limit.value}`
      );

      items.value = [...items.value, ...res.data.data];
      offcet.value += limit.value;
    } catch (error) {
      console.log(error);
    }
  }
}, 200);
const handleScroll = () => {
  scroller();
};
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <h3 class="mt-2.5 text-cblack font-bold text-3xl mr-12">قائمة المواد:</h3>
    <ul
      class="flex justify-around flex-wrap flex-row pt-2.5 rounded-xl bg-clightgray my-2.5 w-11/12 sm:w-10/12 shadow-md"
      ref="infinityEl"
    >
      <li
        id="infinite-list"
        v-for="(card, index) in items"
        :key="index"
        class="mb-2.5"
      >
        <RouterLink :to="{ name: 'details', params: { id: card.id } }">
          <Card
            :title="card.store.name"
            :image="card.images[0].image"
            :name="card.name"
            :price="card.price"
          />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
