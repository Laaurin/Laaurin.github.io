<template>
  <label class="test">
    <input
      class="radio-input"
      type="radio"
      name="engine"
      @change="selectAnswer"
      v-model="selectedOption"
    />
    <span :class="radioTileClasses">
      <span class="radio-label">{{ answerOption.text }}</span>
    </span>
  </label>
</template>

<script>
export default {
  name: "AnswerOption",
  props: {
    answerOption: Object,
    index: Number,
    selectedAnswerIndex: Number,
    submitted: Boolean,
  },
  emits: ["selected"],
  data() {
    return {
      selectedOption: false,
    };
  },
  methods: {
    selectAnswer() {
      if (this.submitted) {
        return;
      }
      this.$emit("selected", this.index);
    },
  },
  computed: {
    radioTileClasses() {
      return {
        "radio-tile": true,
        selected: !this.submitted && this.index === this.selectedAnswerIndex,
        correct:
          this.submitted &&
          //this.index === this.selectedAnswerIndex &&
          this.answerOption.isCorrect,
        incorrect:
          this.submitted &&
          this.index === this.selectedAnswerIndex &&
          !this.answerOption.isCorrect,
        //"not-selected":
        //  this.submittedd &&
        //  this.answerOption.isCorrect &&
        //  this.index !== this.selectedAnswerIndex,
      };
    },
  },
  watch: {
    answerOption() {
      this.selectedOption = false;
    },
  },
};
</script>

<style scoped>
.radio-input:focus + .radio-tile {
  border-color: #616e7f;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
}

.radio-input:focus + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
}

.test {
  margin-top: 10px;
  margin-bottom: 10px;
}

.radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 380px;
  min-height: 100px;
  width: 380px;
  border-radius: 0.5rem;
  border: 2px solid #b5bfd9;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden; /* Hinzugefügt: Verhindert das Überlaufen der Hintergrundfarbe */
}

.radio-tile:hover {
  border-color: #616e7f;
}

.radio-tile:hover:before {
  transform: scale(1);
  opacity: 1;
}

.radio-label {
  color: #707070;
  transition: 0.375s ease;
  text-align: center;
  font-size: 16px;
}

.radio-input {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
}

.selected {
  border-color: #616e7f;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #616e7f;
}

.correct {
  border-color: lightgreen !important;
}

.incorrect {
  border-color: red !important;
}
</style>
