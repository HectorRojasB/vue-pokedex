<template>
  <div class="pokemon-detail" :class="mainType">
    <img
      src="../../icons/Pokeball (1).png"
      class="pokeball-shadow"
      alt="pokeball mask"
    />
    <div class="header">
      <div class="title">
        <img
          src="../../icons/arrow-left.png"
          class="arrow-icon"
          v-on:click="$emit('close-modal')"
          alt="back arrow"
        />
        <p class="heading xlarge">{{ pokemon.name }}</p>
      </div>
      <p class="heading medium">#{{ pokemon.id }}</p>
    </div>

    <div class="pokemon-sprite">
      <img
        class="sprite"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
      />
    </div>

    <div class="info-wrapper">
      <Types :types="pokemon.types" />

      <About
        :type="mainType"
        :weight="pokemon.weight"
        :height="pokemon.height"
        :abilities="pokemon.abilities"
      />
      <Stats :type="mainType" :stats="pokemon.stats" />
    </div>
  </div>
</template>

<script>
import Types from '@/components/PokemonDetail/Types.vue';
import About from '@/components/PokemonDetail/About.vue';
import Stats from '@/components/PokemonDetail/Stats.vue';

export default {
  components: { About, Types, Stats },
  props: {
    pokemon: Object,
    mainType: String
  }
};
</script>

<style lang="scss">
.pokemon-detail {
  top: 0;
  left: 29%;
  height: 100vh;
  position: fixed;
  width: inherit;
  flex-direction: column;

  @each $type, $color in $types {
    &.#{$type} {
      background-color: $color;

      .info-wrapper {
        .stats {
          .medium {
            color: $color;
          }
        }
      }
    }
  }

  .pokeball-shadow {
    top: 8px;
    right: 8px;
    position: absolute;
  }

  .header {
    padding: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .heading {
      color: $white;
      text-transform: capitalize;
    }

    .title {
      display: flex;

      .arrow-icon {
        margin-right: 16px;
      }
    }
  }

  .pokemon-sprite {
    display: flex;
    justify-content: center;

    .sprite {
      width: 200px;
      height: 200px;
    }
  }

  .info-wrapper {
    text-align: center;
    background: $white;
    border-radius: 8px;
    margin: 0 4px 4px 4px;
    padding: 56px 20px 20px 20px;

    .title {
      margin-top: 16px;
      @each $type, $color in $types {
        &.#{$type} {
          color: $color;
        }
      }
    }
  }
}
</style>
