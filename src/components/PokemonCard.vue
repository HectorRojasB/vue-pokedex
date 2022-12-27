<template>
  <div class="pokemon-card" :class="type">
    <div class="number-container">
      <p class="body-text small number">{{ number }}</p>
    </div>
    <div class="image-container">
      <img class="image" :src="imageUrl" :alt="name" />
    </div>
    <div class="name-container">
      <p class="body-text small">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    number: String,
    imageUrl: String,
    name: String,
    type: String,
  },
};
</script>
