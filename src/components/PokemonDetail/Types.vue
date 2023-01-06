<template>
  <div class="types">
    <div
      v-for="type in types"
      :key="type.type.name"
      class="heading large pill"
      :class="type.type.name"
    >
      {{ type.type.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    types: []
  }
};
</script>

<style lang="scss">
.types {
  gap: 16px;
  display: flex;
  justify-content: center;

  .pill {
    display: flex;
    color: $white;
    padding: 4px 8px;
    border-radius: 10px;
    text-transform: capitalize;

    @each $type, $color in $types {
      &.#{$type} {
        background-color: $color;
      }
    }
  }
}
</style>
