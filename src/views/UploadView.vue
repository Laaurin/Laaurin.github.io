<template>
  <div>
    <button @click="selectedComponent = 'multiple-choice'">
      multiple choice
    </button>
    <button @click="selectedComponent = 'flash-card'">flashcard</button>
  </div>
  <multiple-choice-question-builder
    v-if="selectedComponent === 'multiple-choice'"
    :uploading="true"
    @return-question="submitQuestion"
  >
  </multiple-choice-question-builder>
  <flash-card-builder
    v-else-if="selectedComponent === 'flash-card'"
    :uploading="true"
    @return-question="submitQuestion"
  >
  </flash-card-builder>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import MultipleChoiceQuestionBuilder from "@/components/upload/MultipleChoiceQuestionBuilder.vue";
import FlashCardBuilder from "@/components/upload/FlashCardBuilder.vue";

export default {
  components: {
    FlashCardBuilder,
    MultipleChoiceQuestionBuilder,
  },
  setup() {
    const selectedComponent = ref("multiple-choice");
    const questionText = ref("");
    const answerOptions = ref([
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
    ]);
    const correctAnswerIndex = ref(null);
    const isPrivateQuestion = ref(false);
    const questionLabels = ref([]);
    const addedLabels = ref([]);
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const teamLabels = computed(() => store.getters.getTeamLabels);
    const displayLabels = computed(() =>
      teamLabels.value.concat(addedLabels.value)
    );
    return {
      selectedComponent,
      isLoggedIn,
      teamLabels,
      questionText,
      answerOptions,
      questionLabels,
      correctAnswerIndex,
      isPrivateQuestion,
      addedLabels,
      displayLabels,
    };
  },
  methods: {
    async submitQuestion(questionObject, addedLabels) {
      delete questionObject.id;
      questionObject.questionLabels = await this.saveNewLabelsToTeam(
        addedLabels,
        questionObject.questionLabels
      );
      console.log(questionObject);
      //const dataObj = this.createQuestion(questionObject);
      //console.log(dataObj);
      await this.$store.dispatch("uploadPrivateQuestion", questionObject);
    },

    addLabel(labelObject) {
      //this.teamLabels.push(labelObject);
      this.addedLabels.push(labelObject);
    },

    async submitForm() {
      // Validieren, ob eine richtige Antwort ausgewählt wurde
      if (this.correctAnswerIndex === null) {
        alert("Bitte wählen Sie eine richtige Antwort aus.");
        return;
      }

      if (this.isPrivateQuestion) {
        await this.saveNewLabelsToTeam();
        const dataObj = this.createQuestion();
        console.log(dataObj);
        await this.$store.dispatch("uploadPrivateQuestion", dataObj);
      } else {
        const dataObj = this.createQuestion();
        console.log(dataObj);
        await this.$store.dispatch("uploadPublicQuestion", dataObj);
      }

      // Optional: Zurücksetzen der Formularfelder nach dem Hinzufügen der Frage
      this.questionText = "";
      this.answerOptions.forEach((answer) => (answer.text = ""));
      this.correctAnswerIndex = null;
      this.isPrivateQuestion = false;
      this.questionLabels = [];
      this.addedLabels = [];
    },

    createQuestion() {
      const dataObj = {
        questionText: this.questionText,
        answerOptions: this.answerOptions.map((answer, index) => {
          return {
            text: answer.text,
            isCorrect: index === this.correctAnswerIndex,
          };
        }),
      };

      if (this.isPrivateQuestion) {
        // Füge die Labels zur Frage hinzu
        dataObj.questionLabels = this.questionLabels.map((labelObject) => {
          return {
            label: labelObject.label,
            id: labelObject.id,
          };
        });
      }

      return dataObj;
    },

    async saveNewLabelsToTeam(addedLabels, questionLabels) {
      console.log("adding labels...");
      for (const labelObject of addedLabels) {
        const id = await this.$store.dispatch(
          "addNewLabelToTeamLabels",
          labelObject.label
        );
        const index = questionLabels.findIndex(
          (label) => label.label === labelObject.label
        );

        if (index !== -1) {
          // Aktualisiere die ID des Labels
          questionLabels[index].id = id;
        }
      }
      return questionLabels;
    },

    toggleLabel(labelName) {
      if (this.questionLabels.includes(labelName)) {
        this.questionLabels = this.questionLabels.filter(
          (label) => label !== labelName
        );
      } else {
        this.questionLabels.push(labelName);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 5rem auto auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

h2 {
  text-align: center;
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
