<template>
  <div class="grid-container">
    <div class="grid-x align-center">
      <div class="cell large-8 main-container">
        <Header />
        <Search />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
</script>