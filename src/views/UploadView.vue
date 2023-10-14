<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <side-bar>
          <div class="button-outer">
            <button
              class="btn my-button button-text"
              @click="selectedComponent = 'multiple-choice'"
            >
              Multiple Choice
            </button>
          </div>
          <div class="button-outer">
            <button
              class="btn my-button button-text"
              @click="selectedComponent = 'flash-card'"
            >
              Flashcard
            </button>
          </div>
        </side-bar>
      </div>
      <div class="col-9">
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
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import MultipleChoiceQuestionBuilder from "@/components/upload/MultipleChoiceQuestionBuilder.vue";
import FlashCardBuilder from "@/components/upload/FlashCardBuilder.vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";

export default {
  components: {
    SideBar,
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
.col-3 {
  padding-left: 0;
}

.button-text {
  color: whitesmoke;
  text-align: left;
}

.button-outer {
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.my-button {
  width: 100%;
  text-align: left;
  padding: 0;
  position: relative; /* Position für das Pseudo-Element */
}

.my-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc; /* Farbe der Trennlinie */
}

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
