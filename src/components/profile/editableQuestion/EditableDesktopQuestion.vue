<template>
  <div class="mobile-question-wrapper" @mouseenter="showOptions=true" @mouseleave="showOptions=false">
    <div class="status-bar-wrapper">
      <status-bar
        :correct-count="stats.totalScore"
        :total-count="stats.totalSubmissions"
      ></status-bar>
    </div>
    <div class="text-options-wrapper">
      <div class="text-options-wrapper-inner">
        <div class="text-content">
          <span class="cutoff-text">
            {{ question.questionText }}
          </span>
          <div class="label-container">
            <div
              v-for="labelObject in question.questionLabels"
              :key="labelObject.id"
            >
              <question-label
                :label-object="labelObject"
                :active="true"
                :size="'small'"
              ></question-label>
            </div>
          </div>
        </div>
        <div class="status-bar-wrapper">
          <svg width="14" height="24" v-if="showOptions">
            <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
          </svg>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import StatusBar from "@/components/profile/StatusBar.vue";
import QuestionLabel from "@/components/label/QuestionLabel.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "EditableDesktopQuestion",
  components: { StatusBar, QuestionLabel },
  props: {
    question: Object,
  },
  setup(props) {
    const store = useStore();
    const showOptions = ref(false);
    const stats = computed(() => {
      const questionStats = store.getters.userStats.find(
        (stat) => stat.id === props.question.id
      );
      return questionStats ?? { totalSubmissions: 0, totalScore: 0 };
    });
    return {
      stats,
      showOptions,
    };
  }
};
</script>

<style scoped>
.mobile-question-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.25rem;
  min-height: 75px;
}

.status-bar-wrapper {
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: 1rem;
  height: 2rem;
  padding-top: 0.25rem;
}

.text-options-wrapper {
  flex: 1 1 0;
  margin-left: 0.5rem;
}

.text-options-wrapper-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  height: 100%;
}

.text-content {
  display: flex;
  justify-content: space-between;
  min-width: 0;
  flex-direction: column;
  height: 100%;
}

.label-container {
  display: flex;
  align-items: center;
}

.cutoff-text {
  --max-lines: 3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
}
</style>