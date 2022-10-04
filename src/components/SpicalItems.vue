<script setup lang="ts">
import Card from "@/components/Card.vue";
import { RouterLink } from "vue-router";
import type { carditem } from "@/assets/type";
import EventService from "@/service/EventService";
import _ from "lodash";
import { onBeforeMount, ref, type Ref } from "vue";

const items: Ref<Array<carditem>> = ref([]);

onBeforeMount(async () => {
  try {
    const res = await EventService.getEvent("/api/material");
    items.value = res.data.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h3 class="mt-2.5 text-cblack font-bold text-3xl mr-12">المواد المميزة:</h3>
    <ul
      class="flex flex-row flex-nowrap overflow-x-auto p-2.5 rounded-lg shadow-md my-2.5 h-[300px] bg-clightgray w-11/12 sm:w-10/12"
    >
      <li
        id="infinite-list-spical"
        v-for="(card, index) in items"
        :key="index"
        class="ml-2.5"
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
