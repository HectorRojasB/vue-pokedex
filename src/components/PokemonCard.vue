<template>
  <div
    class="pokemon-card"
    :class="mainType"
    v-on:click="this.isModalOpen = true"
  >
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
  <Transition>
    <PokemonDetail
      :pokemon="pokemon"
      :main-type="mainType"
      v-if="this.isModalOpen"
      v-on:close-modal="this.isModalOpen = false"
    />
  </Transition>
</template>

<script>
import PokemonDetail from '@/components/PokemonDetail/Index.vue';

export default {
  data() {
    return {
      isModalOpen: this.isModalOpen
    };
  },
  components: { PokemonDetail },
  props: {
    pokemon: Object,
    mainType: String
  }
};
</script>

<style lang="scss">
.pokemon-card {
  margin-left: 8px;
  margin-top: 16px;
  border: 1px solid;
  border-radius: 10px;
  width: calc((100% / 3) - 16px);

  @each $type, $color in $types {
    &.#{$type} {
      border-color: $color;

      .number {
        color: $color;
      }

      .name-container {
        background: $color;
      }
    }
  }

  &:hover {
    cursor: pointer;
  }

  .number-container {
    display: flex;
    padding: 4px 8px;
    justify-content: flex-end;
  }

  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;

    .image {
      width: 72px;
      height: 72px;
    }
  }

  .name-container {
    color: $white;
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    border-radius: 0 0 8px 8px;
    text-transform: capitalize;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  top: 100%;
}

.v-enter-to,
.v-leave-from {
  top: 0;
}
</style>
