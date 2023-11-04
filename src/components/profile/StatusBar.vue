<template>
  <div class="status-bar">
    <div class="status-bar-inner" :style="{ backgroundColor: barColor }"></div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    questionId: Number,
    correctCount: Number,
    totalCount: Number,
  },
  setup(props) {
    const stats = computed(() => {
      const questionStats = {
        totalSubmissions: props.totalCount,
        totalScore: props.correctCount,
      };
      return questionStats ?? { totalSubmissions: 0, totalScore: 0 };
    });
    const barColor = computed(() => {
      /*
       * 0 - 60 dunkel rot
       * 60 -70 rot
       * gelb hell grün
       * dunkel grün */
      const colors = [
        "#7c3232", // Dunkelrot
        "#ff6363", // Rot
        "#e08f43", // Orange
        "#e7e76c", // Gelb
        "#3b7c3b", // Grün
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

._status-bar-inner {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.status-bar-inner {
  width: 15px;
  height: 15px;
  border-radius: 50%; /* Ändere border-radius auf 50% für einen Kreis */
}
</style>
