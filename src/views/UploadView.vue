<template>
  <div class="container">
    <h2>Upload new Question</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <div class="question-input-wrapper">
          <input
            type="text"
            id="question"
            v-model="questionText"
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
            v-model="answerOptions[0].text"
            required
          />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="0"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="option-input-wrapper">
          <label class="answer-label" for="answer2">Option 2:</label>
          <input
            type="text"
            id="answer2"
            v-model="answerOptions[1].text"
            required
          />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="1"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="option-input-wrapper">
          <label class="answer-label" for="answer3">Option 3:</label>
          <input
            type="text"
            id="answer3"
            v-model="answerOptions[2].text"
            required
          />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="2"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="option-input-wrapper">
          <label class="answer-label" for="answer4">Option 4:</label>
          <input
            type="text"
            id="answer4"
            v-model="answerOptions[3].text"
            required
          />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="3"
            required
          />
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          v-model="isPrivateQuestion"
          style="margin-right: 10px"
        />
        <label>private Question</label>
        <div v-if="isPrivateQuestion">
          <div class="label-list">
            <div
              class="label-wrapper"
              v-for="(labelObject, index) in displayLabels"
              :key="index"
            >
              <QuestionLabel
                :label-object="labelObject"
                :clickable="true"
                @toggle-label="toggleLabel"
              ></QuestionLabel>
            </div>
            <div class="label-wrapper">
              <new-label @new-label="addLabel"></new-label>
            </div>
          </div>
        </div>
      </div>
      <button class="my-global-button" type="submit">add Question</button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import QuestionLabel from "@/components/label/QuestionLabel.vue";
import NewLabel from "@/components/label/NewLabel.vue";

export default {
  components: { NewLabel, QuestionLabel },
  setup() {
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

    async saveNewLabelsToTeam() {
      console.log("adding labels...");
      for (const labelObject of this.addedLabels) {
        const id = await this.$store.dispatch(
          "addNewLabelToTeamLabels",
          labelObject.label
        );
        const index = this.questionLabels.findIndex(
          (label) => label.label === labelObject.label
        );

        if (index !== -1) {
          // Aktualisiere die ID des Labels
          this.questionLabels[index].id = id;
        }
      }
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
