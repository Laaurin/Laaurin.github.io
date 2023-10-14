<template>
  <div class="shadow flashcard-outer">
    <div>
      <p>{{ question.questionText }}</p>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div v-if="isFlipped" @click="toggleAnswer">
        <hr />
        <p>
          {{ question.solutionText }}
        </p>
      </div>
      <button v-else class="my-global-button" @click="toggleAnswer">
        show answer
      </button>
    </div>
  </div>
  <div class="mt-3">
    <self-evaluation
      :question-id="question.id"
      @submit="this.$emit('next')"
    ></self-evaluation>
  </div>
</template>

<script>
import SelfEvaluation from "@/components/Question/flash-card/SelfEvaluation.vue";

export default {
  components: { SelfEvaluation },
  props: ["question"],
  emits: ["submitted", "next"],
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style scoped>
.flashcard-outer {
  min-height: 500px;
  border-radius: 10px;
  padding: 20px;
}
</style>
