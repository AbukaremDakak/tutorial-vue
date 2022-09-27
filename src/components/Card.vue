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
  <div class="event-card">
    <div class="card-area">
      <h4 class="card-title">
        {{ props.title }}
      </h4>
      <p><span class="span-title">Name:</span> {{ props.name }}</p>
      <p>
        <span class="span-title">Price:</span> {{ props.price?.toFixed(2) }}
        <span style="color: #2ecc71; font-size: 20px; font-weight: 700"
          >&#8378;</span
        >
      </p>
    </div>

    <img
      :src="'https://mixcart.com.tr/storage/' + props.image"
      alt="picture"
      style="width: 75px; height: 75px"
    />
  </div>
</template>

<style scoped>
.event-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2980b9;
  color: #ecf0f1;
  padding: 7px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 5px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.card-area {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.card-title {
  align-self: center;
  color: #34495e;
  font-size: 20px;
}
.span-title {
  color: #f1c40f;
}
</style>
