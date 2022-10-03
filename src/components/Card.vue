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
  <div class="card">
    <div class="card-area">
      <h4 class="card-title">
        {{ props.title }}
      </h4>
      <img
        :src="'https://mixcart.com.tr/storage/' + props.image"
        alt="picture"
        style="width: 198px; height: 150px"
      />
      <p class="item-p" style="color: #ecf0f1">{{ props.name }}</p>
      <p class="item-p">
        السعر: {{ props.price?.toFixed(2) }}
        <span style="color: #2ecc71; font-size: 20px; font-weight: 700"
          >&#8378;</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #2980b9;
  color: #ecf0f1;
  padding: 7px 0;
  width: 200px;
  height: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 5px;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #34495e02;
}

.card-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  align-self: center;
  color: #34495e;
  font-size: 20px;
}
.item-p {
  color: #f1c40f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  max-width: 200px;
  direction: rtl;
  text-align: start;
  padding-right: 10px;
}
</style>
