<template>
  <div class="status-bar">
    <div class="status-bar-inner" :style="{ backgroundColor: barColor }"></div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    questionId: Number,
    correctCount: Number,
    totalCount: Number,
  },
  setup(props) {
    const store = useStore();
    const stats = computed(() => {
      const questionStats = store.getters.userStats.find(
        (stat) => stat.id === props.questionId
      );
      return questionStats ?? { totalSubmissions: 0, totalScore: 0 };
    });
    const barColor = computed(() => {
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

      if (stats.value.totalSubmissions === 0) {
        // Verhindere die Division durch 0 und gib eine Standardfarbe zurück
        return "#808080";
      }

      const index = Math.min(
        Math.floor(
          (stats.value.totalScore / stats.value.totalSubmissions) *
            colors.length
        ),
        colors.length - 1
      );

      console.log(index);

      return colors[index];
    });
    return {
      barColor,
    };
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
