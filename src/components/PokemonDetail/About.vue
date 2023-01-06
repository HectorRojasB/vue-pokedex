<template>
  <div class="about-container">
    <p class="heading xlarge title" :class="type">About</p>
    <div class="about">
      <div class="property">
        <img src="../../icons/weight.svg" alt="weight" />
        {{ weight / 10 }} Kg
        <p class="body-text medium">Weight</p>
      </div>
      <div class="property">
        <img src="../../icons/height.svg" alt="height" />
        {{ height / 10 }} M
        <p class="body-text medium">Height</p>
      </div>
      <div class="property">
        <p v-for="ability in abilities" class="body-text large">
          {{ ability.ability.name }}
        </p>
        <p class="body-text medium">Moves</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    weight: Number,
    height: Number,
    abilities: []
  }
};
</script>

<style lang="scss">
.about {
  gap: 48px;
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: center;

  .property {
    text-align: center;
    text-transform: capitalize;

    .medium {
      margin-top: 10px;
    }
  }
}
</style>
