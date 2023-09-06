<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <div class="question-input-wrapper">
        <input
          type="text"
          id="question"
          v-model="question.questionText"
          placeholder="Enter your question here"
          required
        />
      </div>
    </div>
    <div class="mb-3">
      <div class="option-input-wrapper">
        <label class="answer-label" for="answer1">Option 1:</label>
        <input
          type="text"
          id="answer1"
          v-model="question.answerOptions[0].text"
          required
        />
        <input type="radio" v-model="correctAnswerIndex" :value="0" required />
      </div>
    </div>
    <div class="mb-3">
      <div class="option-input-wrapper">
        <label class="answer-label" for="answer2">Option 2:</label>
        <input
          type="text"
          id="answer2"
          v-model="question.answerOptions[1].text"
          required
        />
        <input type="radio" v-model="correctAnswerIndex" :value="1" required />
      </div>
    </div>
    <div class="mb-3">
      <div class="option-input-wrapper">
        <label class="answer-label" for="answer3">Option 3:</label>
        <input
          type="text"
          id="answer3"
          v-model="question.answerOptions[2].text"
          required
        />
        <input type="radio" v-model="correctAnswerIndex" :value="2" required />
      </div>
    </div>
    <div class="mb-3">
      <div class="option-input-wrapper">
        <label class="answer-label" for="answer4">Option 4:</label>
        <input
          type="text"
          id="answer4"
          v-model="question.answerOptions[3].text"
          required
        />
        <input type="radio" v-model="correctAnswerIndex" :value="3" required />
      </div>
    </div>
    <div class="label-list">
      <div
        class="label-wrapper"
        v-for="(labelObject, index) in teamLabels"
        :key="index"
      >
        <QuestionLabel
          :label-object="labelObject"
          :clickable="true"
          :active="isActive(labelObject)"
          @toggle-label="toggleLabel"
          @remove-label="deleteLabel"
        ></QuestionLabel>
      </div>
      <div class="label-wrapper">
        <new-label @new-label="addLabel"></new-label>
      </div>
    </div>
    <button class="my-global-button" @click="submitForm">
      {{ uploading ? "Upload Question" : "Save" }}
    </button>
    <button v-if="!uploading" class="my-global-button" @click="cancelEditing">
      Cancel
    </button>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  props: {
    inputQuestion: Object,
    uploading: Boolean,
  },
  emits: ["returnQuestion"],
  setup(props) {
    const store = useStore();
    const teamLabels = computed(() => store.getters.getTeamLabels);
    const addedLabels = ref([]);
    const displayedLabels = computed(() =>
      teamLabels.value.concat(addedLabels.value)
    );

    const question = props.inputQuestion
      ? ref({ ...props.inputQuestion })
      : ref({
          id: "",
          questionText: "",
          answerOptions: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ],
          questionLabels: [],
        });

    const correctAnswerIndex = computed(() => {
      for (const [
        index,
        answerOption,
      ] of question.value.answerOptions.entries()) {
        if (answerOption.isCorrect) {
          return index;
        }
      }
      return -1; // Falls keine richtige Antwort gefunden wurde
    });

    return {
      teamLabels,
      addedLabels,
      displayedLabels,
      question,
      correctAnswerIndex,
    };
  },
  methods: {
    submitForm() {
      if (this.correctAnswerIndex === null) {
        alert("Bitte wählen Sie eine richtige Antwort aus.");
        return;
      }
      this.$emit("returnQuestion", this.question);
      this.question = {
        id: "",
        questionText: "",
        answerOptions: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
        questionLabels: [],
      };
    },

    isActive(otherLabelObject) {
      return this.question.questionLabels.some(
        (labelObject) => labelObject.label === otherLabelObject.label
      );
    },

    toggleLabel(otherLabelObject) {
      const labelExists = this.question.questionLabels.some(
        (label) => label.id === otherLabelObject.id
      );
      if (labelExists) {
        this.question.questionLabels = this.questionLabels.filter(
          (labelObject) => labelObject.id !== otherLabelObject.id
        );
      } else {
        this.questionLabels.push(otherLabelObject);
      }
    },
  },
};
</script>

<style scoped></style>
