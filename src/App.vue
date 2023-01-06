<template>
  <div class="grid-container">
    <div class="grid-x align-center">
      <div class="cell large-5 medium-8 main-container">
        <TopSection />
        <Search />
        <div class="items-container">
          <PokemonCard
            v-for="pokemon in store"
            :pokemon="pokemon"
            :key="pokemon.name"
            :main-type="pokemon.types[0].type.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopSection from '@/components/TopSection.vue';
import Search from '@/components/Search.vue';
import PokemonCard from '@/components/PokemonCard.vue';
import { getPokemons } from '@/api/routes';
import { store } from '@/store';

export default {
  components: { TopSection, Search, PokemonCard },
  computed: {
    store() {
      return store.pokemons;
    }
  },
  created() {
    getPokemons();
  }
};
</script>

<style lang="scss">
.main-container {
  position: relative;
  border-radius: 8px;
  padding: 16px 24px;
  background: $background;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  justify-content: space-between;
}
</style>
