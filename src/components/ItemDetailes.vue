<script setup lang="ts">
import type { carddetails, likes } from "@/assets/type";
import { RouterLink } from "vue-router";
import Card from "@/components/Card.vue";
import EventService from "@/service/EventService";
import { computed, ref, toRaw, watch, type ComputedRef, type Ref } from "vue";
import { useRoute } from "vue-router";

const card: Ref<carddetails | null> = ref(null);
const likeItems: Ref<likes | null> = ref(null);
const id: Ref<number> = ref(0);
const imgPath: Ref<string | undefined> = ref("");
const counter: Ref<number> = ref(0);
const imgIndex: Ref<number> = ref(0);
const arrayLength: Ref<number> = ref(0);
const imgLoading: Ref<boolean> = ref(false);
const addState: Ref<boolean> = ref(true);
const compRef: ComputedRef<{ btn: string; path: string | undefined }> =
  computed(() => {
    return {
      btn: addState.value ? "إضافة إلى السلة" : "حذف من السلة",
      path: (imgPath.value = card.value?.images[imgIndex.value].image.replace(
        ".",
        ".thumb.large."
      )),
    };
  });

const route = useRoute();

watch(
  (): string | string[] => route.params.id,
  async (newvalue: string | string[]) => {
    try {
      const item = await EventService.getCardDetials(
        "/api/material/",
        +newvalue
      );
      card.value = item.data.data;
      arrayLength.value = item.data.data.images.length;
      imgIndex.value = 0;
      imgLoading.value = false;
      addState.value = true;
      counter.value = 0;
      likeItems.value = item.data.data.likeMaterials;

      if (id.value >= 0 && id.value <= 77) {
        id.value++;
      } else {
        id.value = 0;
      }
    } catch (error) {
      console.log(error);
    }
  },
  { immediate: true }
);

function nextBtn(): void {
  imgLoading.value = false;
  if (imgIndex.value < arrayLength.value - 1) {
    imgIndex.value++;
  } else {
    imgIndex.value = 0;
  }
}

function backBtn() {
  imgLoading.value = false;
  if (imgIndex.value > 0) {
    imgIndex.value--;
  } else {
    imgIndex.value = arrayLength.value - 1;
  }
}

function loadingImg() {
  imgLoading.value = true;
}
</script>

<template>
  <div class="flex flex-col items-center mt-main" :key="id">
    <!-- Item Details -->
    <div
      class="flex flex-col items-center rounded-lg p-2.5 m-2.5 bg-cblue h-[525px] xs:h-[625px] sm:h-[700px] md:h-[775px] w-[300px] xs:w-[400px] sm:w-[500px] md:w-[600px] shadow-md"
    >
      <h4
        class="w-full text-cyellow mb-2.5 truncate text-xl font-medium text-right"
      >
        {{ card?.name }}
      </h4>
      <div
        class="relative h-[200px] xs:h-[300px] sm:h-[400px] md:h-[450px] mb-2.5"
      >
        <div
          class="top-1/2 left-1/2 -mt-16 -ml-16 border-[16px] border-solid border-cblack rounded-full border-t-[16px] border-t-solid border-t-clightgray w-32 h-32 animate-spin-slow"
          :class="[imgLoading ? 'hidden' : 'absolute']"
        ></div>
        <div class="relative">
          <img
            v-if="card?.images[imgIndex].image"
            :src="'https://mixcart.com.tr/storage/' + compRef.path"
            alt="Item Picture"
            class="w-full aspect-[4/3] object-cover"
            :class="[imgLoading ? 'block' : 'hidden']"
            @load="loadingImg"
          />
          <h1 v-else>No image has been</h1>
          <button
            v-if="toRaw(arrayLength) > 1"
            @click="nextBtn"
            class="top-0 right-0 bottom-0 border-none hover:bg-clightgray w-6 sm:w-8 md:w-10"
            :class="[imgLoading ? 'absolute' : 'hidden']"
          >
            &lt;
          </button>
          <button
            v-if="toRaw(arrayLength) > 1"
            @click="backBtn"
            class="top-0 left-0 bottom-0 border-none hover:bg-clightgray w-6 sm:w-8 md:w-10"
            :class="[imgLoading ? 'absolute' : 'hidden']"
          >
            &gt;
          </button>
        </div>
      </div>
      <div>
        <p class="w-full h-[150px] overflow-y-auto mt-2.5 p-1.5 text-cwhite">
          {{ card?.summary }}
        </p>
      </div>
      <div>
        <p class="text-cyellow mt-2.5 text-2xl font-medium">
          السعر&nbsp;:&nbsp;{{ card?.price.toFixed(2) }}
          <span class="text-cgreen font-bold">&#8378;</span>
        </p>
      </div>
      <div
        class="w-4/5 mt-2.5 flex justify-end xs:justify-around py-1 items-center"
      >
        <button
          class="w-[175px] p-1 ml-auto xs:ml-0 shadow-inner text-cwhite border-none rounded text-xl"
          @click="addState = !addState"
          :class="[addState ? 'bg-cgreen' : 'bg-cred']"
        >
          {{ compRef.btn }}
        </button>
        <div class="flex items-center">
          <div class="flex flex-col justify-between h-8 ml-2.5">
            <button
              class="border-none w-3 h-3 pb-0.5 cursor-pointer bg-cwhite text-cblack flex items-center justify-center"
              @click="counter++"
            >
              +
            </button>
            <button
              class="border-none w-3 h-3 pb-0.5 bg-cwhite text-cblack flex items-center justify-center"
              @click="counter--"
            >
              -
            </button>
          </div>
          <h2 class="text-cwhite ml-2.5 text-4xl">{{ counter }}</h2>
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
