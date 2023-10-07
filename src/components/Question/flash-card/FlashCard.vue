<template>
  <div class="container">
    <div class="tile-shadow flashcard-outer">
      <div class="row">
        <p>{{ question.questionText }}</p>
      </div>
      <div class="row">
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
    <self-evaluation
      :question-id="question.id"
      @submit="this.$emit('next')"
    ></self-evaluation>
  </div>
</template>

<script>
import SelfEvaluation from "@/components/SelfEvaluation.vue";

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
}
.base-tile {
  width: 500px;
  height: 300px;
  perspective: 1000px;
}

.base-card {
  width: 100%;
  height: 100%;
  border-width: 0;
}

.tile-shadow {
  box-shadow: 0 2px 10px #1b1c1e20;
  border-radius: 10px;
}

.front,
.back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-image: linear-gradient(to bottom, #5e2ca5, #f40072);
  border-image-slice: 1;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
}

.front {
  background-color: lightgreen;
}
</style>
