<script setup lang="ts">
import Card from "@/components/Card.vue";
import { RouterLink } from "vue-router";
import type { carditem } from "@/assets/type";
import EventService from "@/service/EventService";
import _ from "lodash";
import { onBeforeMount, onBeforeUnmount, onMounted, ref, type Ref } from "vue";

const items: Ref<Array<carditem>> = ref([]);
const infinityElement: Ref<HTMLDivElement | null> = ref<HTMLDivElement | null>(
  null
);
const offcet: Ref<number> = ref(10);
const limit: Ref<number> = ref(10);

onBeforeMount(async () => {
  try {
    const res = await EventService.getEvent("/api/material");
    items.value = res.data.data;
  } catch (error) {
    console.log(error);
  }
});

onMounted(() => {
  infinityElement.value?.addEventListener<"scroll">("scroll", handleScroll);
});

onBeforeUnmount(() =>
  infinityElement.value?.removeEventListener<"scroll">("scroll", handleScroll)
);

const scroller = _.debounce(async () => {
  if (infinityElement.value !== null) {
    if (
      infinityElement.value.scrollWidth >
      infinityElement.value.scrollLeft + infinityElement.value.clientWidth + 200
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
}, 300);
const handleScroll = () => {
  scroller();
};
</script>

<template>
  <div id="card-container-spical">
    <div class="card-container-spical">
      <h3 class="list-title-spical">المواد المميزة:</h3>
      <ul class="list-card-spical" ref="infinityElement">
        <li
          id="infinite-list-spical"
          v-for="(card, index) in items"
          :key="index"
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
  </div>
</template>

<style scoped>
.card-container-spical {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

.list-card-spical {
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  overflow-x: scroll;
  padding-top: 10px;
  border-radius: 10px;
  box-shadow: #34495e07 0px 1px 1px, #34495e07 0px 2px 2px,
    #34495e07 0px 4px 4px, #34495e07 0px 8px 8px, #34495e07 0px 16px 16px;
  width: 220px;
  height: 300px;
  margin-bottom: 10px;
  background-color: #bdc3c7;
}

.list-title-spical {
  direction: rtl;
  font-size: 30px;
  font-weight: 700;
  color: #34495e;
  margin-top: 10px;
  margin-right: 50px;
}

.list-card-spical li {
  margin-left: 10px;
}
</style>
