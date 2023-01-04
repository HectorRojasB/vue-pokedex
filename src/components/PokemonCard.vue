<template>
  <div class="pokemon-card" :class="pokemon.types[0].type.name">
    <div class="number-container">
      <p class="body-text small number">{{ pokemon.number }}</p>
    </div>
    <div class="image-container">
      <img
        class="image"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
      />
    </div>
    <div class="name-container">
      <p class="body-text large">{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>
