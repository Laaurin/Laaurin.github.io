<template>
  <div class="pop-up-window">
    <div class="pop-up-inner">
      <component
        :is="currentQuestionType"
        :inputQuestion="currentQuestion"
        @cancel="cancelEditing"
        @returnQuestion="saveChanges"
      ></component>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import QuestionLabel from "@/components/label/QuestionLabel.vue";
import NewLabel from "@/components/label/NewLabel.vue";
import { mapActions, useStore } from "vuex";
import MultipleChoiceQuestionBuilder from "@/components/upload/MultipleChoiceQuestionBuilder.vue";
import FlashCardBuilder from "@/components/upload/FlashCardBuilder.vue";

export default {
  components: {
    FlashCardBuilder,
    MultipleChoiceQuestionBuilder,
    QuestionLabel,
    NewLabel,
  },
  emits: ["close"],
  props: {
    question: Object,
  },
  setup(props) {
    const store = useStore();
    const teamLabels = computed(() => store.getters.getTeamLabels);
    const addedLabels = ref([]);
    const displayedLabels = computed(() =>
      teamLabels.value.concat(addedLabels.value)
    );
    const currentQuestion = ref({ ...props.question });
    const currentQuestionType = computed(() => {
      if (props.question.type === "multiple-choice") {
        return "multiple-choice-question-builder";
      } else if (props.question.type === "flash-card") {
        console.log("flashcard");
        return "flash-card-builder";
      }
      return null;
    });
    return {
      teamLabels,
      addedLabels,
      displayedLabels,
      currentQuestion,
      currentQuestionType,
    };
  },
  data() {
    return {
      questionText: "",
      answers: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      questionLabels: [],
      questionId: "",
      correctAnswerIndex: null,
      updatedQuestion: null,
    };
  },
  methods: {
    ...mapActions(["updateTeamQuestion", "addNewLabelToTeamLabels"]),

    async saveChanges(questionObject, addedLabels) {
      await this.updateTeamLabels(addedLabels);
      //const questionObject = this.createPrivateQuestion();
      console.log(questionObject);
      await this.updateTeamQuestion(questionObject);
      this.$emit("close");
    },

    cancelEditing() {
      this.$emit("close");
    },

    async updateTeamLabels(addedLabels) {
      for (const newLabel of addedLabels) {
        newLabel.id = await this.addNewLabelToTeamLabels(newLabel.label);
        console.log(newLabel);
      }
      console.log("added Labels: ", addedLabels);
    },

    addLabel(labelObject) {
      this.addedLabels.push(labelObject);
    },

    toggleLabel(otherLabelObject) {
      const labelExists = this.questionLabels.some(
        (label) => label.id === otherLabelObject.id
      );
      if (labelExists) {
        this.questionLabels = this.questionLabels.filter(
          (labelObject) => labelObject.id !== otherLabelObject.id
        );
      } else {
        this.questionLabels.push(otherLabelObject);
      }
    },

    isActive(otherLabelObject) {
      return this.questionLabels.some(
        (labelObject) => labelObject.label === otherLabelObject.label
      );
    },

    createPrivateQuestion() {
      return {
        id: this.questionId,
        questionText: this.questionText,
        questionLabels: this.questionLabels.map((labelObject) => {
          return {
            label: labelObject.label,
            id: labelObject.id,
          };
        }),
        answerOptions: this.answers.map((answer, index) => {
          return {
            text: answer.text,
            isCorrect: index === this.correctAnswerIndex,
          };
        }),
      };
    },
  },
};
</script>

<style scoped>
.pop-up-window {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pop-up-inner {
  background-color: white;
  border-radius: 1rem;
  padding: 32px;
}

.answer-label {
  font-size: 18px;
}

.question-input-wrapper {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

input[type="text"] {
  flex: 1;
  font-size: 16px;
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.option-input-wrapper {
  display: flex;
  grid-template-columns: auto 1fr; /* data und Eingabe in einer Zeile mit Grid-Layout */
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
}

.label-list {
  display: flex;
  flex-wrap: wrap; /* Labels in mehreren Zeilen anzeigen */
  align-items: center; /* Vertikal ausrichten */
  margin-top: 10px; /* Abstand oben */
}

.label-wrapper {
  margin-right: 10px; /* Abstand zwischen den Labels */
}
</style>
