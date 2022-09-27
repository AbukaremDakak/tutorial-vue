<script setup lang="ts">
import type { carddetails, likes } from "@/assets/type";
import { RouterLink } from "vue-router";
import Card from "@/components/Card.vue";
import EventService from "@/service/EventService";
import { onMounted, ref, watch, type Ref } from "vue";
import { useRoute } from "vue-router";

const card: Ref<carddetails | null> = ref(null);
const likeItems: Ref<likes | null> = ref(null);
const id: Ref<number> = ref(0);

const route = useRoute();

watch(
  (): string | string[] => route.params.id,
  async (newvalue: string | string[]) => {
    EventService.getCardDetials("/api/material/", +newvalue).then((el) => {
      card.value = el.data.data;
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
  <div :key="id">
    <div>{{ card?.name }}</div>
    <div>{{ card?.price }}</div>
    <img
      v-if="card?.images[0].image"
      :src="'https://mixcart.com.tr/storage/' + card?.images[0].image"
      alt="Item Picture"
      style="width: 400px; height: 300px; object-fit: cover"
    />
    <h1 v-else>No image has been</h1>
    <div>{{ card?.summary }}</div>
    <div class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(item, index) in likeItems" :key="index">
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

<style scoped></style>
