<template>
  <div class="grid-container">
    <div class="grid-x align-center">
      <div class="cell large-8 main-container">
        <Header />
        <Search />
        <div class="items-container">
          <PokemonCard
            name="Aron"
            number="#304"
            image-url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png"
            type="steel"
          ></PokemonCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import PokemonCard from "@/components/PokemonCard.vue";
</script>