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
      const totalSubmissions = stats.value.totalSubmissions;
      const totalScore = stats.value.totalScore;

      if (totalSubmissions === 0) {
        // Verhindere die Division durch 0 und gib eine Standardfarbe zurück
        return "#808080";
      }

      const score = totalScore / totalSubmissions;

      /*
       * 0 - 60 dunkel rot
       * 60 -70 rot
       * gelb hell grün
       * dunkel grün */
      switch (true) {
        case score >= 0 && score < 0.6:
          return "#7c3232"; // Dunkelrot
        case score >= 0.6 && score < 0.7:
          return "#ff6363"; // Rot
        case score >= 0.7 && score < 0.8:
          return "#e08f43"; // Orange
        case score >= 0.8 && score < 0.9:
          return "#60a660"; // Grün
        case score >= 0.9 && score <= 1:
          return "#3b7c3b";
        default:
          return "#808080"; // Standardfarbe
      }
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
