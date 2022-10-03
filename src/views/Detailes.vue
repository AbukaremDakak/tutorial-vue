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
  <div class="main-container" :key="id">
    <!-- Item Details -->
    <div class="item-container">
      <h4 class="item-title">{{ card?.name }}</h4>
      <img
        v-if="card?.images[0].image"
        :src="'https://mixcart.com.tr/storage/' + card?.images[0].image"
        alt="Item Picture"
        class="item-image"
      />
      <h1 v-else>No image has been</h1>
      <div>
        <p class="item-summary">
          {{ card?.summary }}
        </p>
      </div>
      <div>
        <p class="item-price">
          السعر:{{ card?.price.toFixed(2) }}
          <span style="color: #2ecc71; font-size: 20px; font-weight: 700"
            >&#8378;</span
          >
        </p>
      </div>
      <div class="item-state">
        <div class="item-counter-container">
          <button class="item-counter-btn up" @click="counter++">
            &#8679;
          </button>
          <button class="item-counter-btn down" @click="counter--">
            &#8681;
          </button>
        </div>
        <h2 class="item-btn-title">{{ counter }}&nbsp</h2>
        <button
          class="item-btn"
          @click="addState = !addState"
          :class="{
            'item-btn-added': addState,
            'item-btn-removed': !addState,
          }"
        >
          {{ btn }}
        </button>
      </div>
    </div>

    <!-- The Same Material -->
    <div id="main-house">
      <div class="card-container">
        <h3 class="list-title">المواد المشابهة:</h3>
        <ul class="list-card">
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
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Item Styles */
.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: #34495e07 0px 1px 1px, #34495e07 0px 2px 2px,
    #34495e07 0px 4px 4px, #34495e07 0px 8px 8px, #34495e07 0px 16px 16px;
  padding: 10px;
  margin: 10px;
  background-color: #2980b9;
}

.item-title {
  margin-bottom: 10px;
  color: #34495e;
  font-size: 20px;
  direction: rtl;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
}

.item-image {
  width: 298px;
  height: 225px;
  object-fit: cover;
}
.item-summary {
  color: #ecf0f1;
  overflow-y: auto;
  width: 300px;
  height: 75px;
  direction: rtl;
  text-align: start;
  margin-top: 10px;
  padding: 7px;
}

.item-price {
  color: #f1c40f;
  direction: rtl;
  font-size: 25px;
  font-weight: 500;
}

.item-state {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 300px;
  padding: 0 5px;
}

.item-btn {
  margin-left: auto;
  color: #ecf0f1;
  padding: 5px;
  width: 125px;
  border: none;
  border-radius: 5px;
  font-size: 19px;
}

.item-btn-title {
  margin-left: 10px;
  color: #ecf0f1;
}

.item-counter-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35px;
}

.item-counter-btn {
  border: none;
  width: 10px;
  height: 15px;
  background-color: #ecf0f1;
  color: #34495e;
}

.up {
  border-radius: 5px 5px 0 0;
}

.down {
  border-radius: 0 0 5px 5px;
}

.item-btn-added {
  background-color: #2ecc71;
}

.item-btn-removed {
  background-color: #e74c3c;
}

/* Card Styles */
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 98vw;
}

.list-card {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 10px;
  border-radius: 10px;
  box-shadow: #34495e07 0px 1px 1px, #34495e07 0px 2px 2px,
    #34495e07 0px 4px 4px, #34495e07 0px 8px 8px, #34495e07 0px 16px 16px;
  width: 220px;
  margin-bottom: 10px;
  background-color: #bdc3c7;
}

.list-title {
  direction: rtl;
  font-size: 30px;
  font-weight: 700;
  color: #34495e;
  margin-top: 10px;
  margin-right: 50px;
}

.list-card li {
  margin-bottom: 10px;
}
</style>
