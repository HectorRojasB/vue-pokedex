<template>
  <div class="stats-container">
    <p class="heading xlarge title" :class="type">Base Stats</p>
    <div class="stats">
      <div class="single-stat" v-for="stat in stats">
        <p class="heading medium">{{ statsLabels[stat.stat.name] }}</p>
        <p class="value">{{ stat.base_stat }}</p>
        <div class="value-container" :class="type">
          <div
            class="set-value"
            :style="{ width: (stat.base_stat * 100) / 700 + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statsLabels: {
        hp: 'HP',
        attack: 'ATK',
        defense: 'DEF',
        'special-attack': 'SATK',
        'special-defense': 'SDEF',
        speed: 'SPD'
      }
    };
  },
  props: {
    type: String,
    stats: []
  }
};
</script>

<style lang="scss">
.stats {
  text-align: left;
  margin-top: 16px;

  .single-stat {
    gap: 8px;
    display: flex;
    align-items: center;

    .medium {
      width: 50px;
      text-align: right;
    }

    .value {
      width: 28px;
      text-align: right;
      margin-left: 25px;
    }

    .value-container {
      height: 4px;
      width: 100%;
      border-radius: 4px;

      @each $type, $color in $types {
        &.#{$type} {
          background-color: rgba($color, 0.2);

          .set-value {
            height: 4px;
            background: $color;
          }
        }
      }
    }
  }
}
</style>
