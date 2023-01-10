<template>
  <div class="flex-container align-center">
    <div class="main-container">
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
  width: 487px;
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
.parent-container {
  display: flex;
  justify-content: center;
}
</style>
