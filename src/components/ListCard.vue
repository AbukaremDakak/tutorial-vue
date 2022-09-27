<script setup lang="ts">
import Card from "@/components/Card.vue";
import { RouterLink } from "vue-router";
import type { carditem } from "@/assets/type";
import EventService from "@/service/EventService";
import { onBeforeMount, onMounted, ref, type Ref } from "vue";

const items: Ref<Array<carditem>> = ref([]);

onBeforeMount(() => {
  EventService.getEvent("/api/material")
    .then((el) => {
      items.value = el.data.data;
    })
    .catch((error) => console.log(error));
});
</script>
<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(card, index) in items" :key="index">
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

<style scoped></style>
