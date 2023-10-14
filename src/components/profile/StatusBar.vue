<template>
  <div class="status-bar">
    <div class="status-bar-inner" :style="{ backgroundColor: barColor }"></div>
  </div>
</template>

<script>
export default {
  props: {
    correctCount: Number,
    totalCount: Number,
  },
  computed: {
    barColor() {
      /*
       * 0 - 60 dunkel rot
       * 60 -70 rot
       * gelb hell grün
       * dunkel grün */
      const colors = [
        "#8b0000", // Dunkelrot
        "#ff0000", // Rot
        "#e08f43", // Orange
        "#ffff00", // Gelb
        "#008000", // Grün
      ];

      if (this.totalCount === 0) {
        // Verhindere die Division durch 0 und gib eine Standardfarbe zurück
        return "#808080";
      }

      const index = Math.min(
        Math.floor((this.correctCount / this.totalCount) * colors.length),
        colors.length - 1
      );

      console.log(index);

      return colors[index];
    },
  },
};
</script>

<style scoped>
.status-bar {
  background-color: transparent;
  width: 10px;
  height: 100%;
}

.status-bar-inner {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
