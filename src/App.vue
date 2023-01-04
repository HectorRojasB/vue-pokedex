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
          ></PokemonCard>
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
    getPokemons(), console.log(this.store);
  }
};
</script>
