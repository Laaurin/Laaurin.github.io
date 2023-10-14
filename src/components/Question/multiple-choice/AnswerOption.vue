<template>
  <label class="test">
    <input
      class="radio-input"
      type="radio"
      name="engine"
      @change="selectAnswer"
      v-model="selectedOption"
    />
    <div :class="radioTileClasses" class="radio-tile" ref="radioTile">
      <span class="radio-label" :class="{ 'cutoff-text': !isSelected }">
        {{ answerOption.text }}
      </span>
    </div>
  </label>
</template>

<script>
export default {
  name: "AnswerOption",
  props: {
    answerOption: Object,
    isSelected: Boolean,
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
      console.log("select");
      if (this.submitted) {
        return;
      }
      this.$emit("selected", this.index);
    },
  },
  computed: {
    isTextTooLarge() {
      const radioTileWidth = this.$refs.radioTile.clientWidth;
      const radioLabelWidth =
        this.$refs.radioTile.querySelector(".radio-data").clientWidth;

      return radioLabelWidth > radioTileWidth;
    },
    radioTileClasses() {
      return {
        "radio-tile": true,
        selected: !this.submitted && this.index === this.selectedAnswerIndex,
        correct:
          this.submitted &&
          //this.index === this.selectedAnswerIndex &&
          this.answerOption.isCorrect,
        incorrect:
          this.submitted && this.isSelected && !this.answerOption.isCorrect,
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
.cutoff-text {
  --max-lines: 3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
}

.radio-input:focus + .radio-tile {
  border-color: #616e7f;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
}

.radio-input:focus + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
}

.test {
  width: 100%;
  height: 100%;
}

.radio-tile {
  min-height: 100px;
  min-width: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
