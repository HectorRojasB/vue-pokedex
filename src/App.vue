<template>
  <div class="grid-container">
    <div class="grid-x align-center">
      <div class="cell large-8 main-container">
        <Header />
        <Search />
        <div class="items-container">
          <PokemonCard
            v-for="pokemon in store"
            :key="pokemon.id"
            :name="pokemon.name"
            :number="pokemon.id"
            :image-url="pokemon.sprites.front_default"
            :type="pokemon.types[0].type.name"
          ></PokemonCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import PokemonCard from "@/components/PokemonCard.vue";
import { getPokemons } from "@/api/routes";
import { store } from "@/store";

export default {
  components: { Header, Search, PokemonCard },
  computed: {
    store() {
      return store.pokemons;
    },
  },
  created() {
    getPokemons();
    console.log(this.store);
  },
};
</script>
