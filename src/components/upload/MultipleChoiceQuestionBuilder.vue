<template>
  <div class="container">
    <h2>{{ uploading ? "Upload Question" : "Edit Question" }}</h2>
    <form>
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
            v-model="question.answerOptions[1].text"
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
            v-model="question.answerOptions[2].text"
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
            v-model="question.answerOptions[3].text"
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
      <div
        v-if="uploading"
        class="d-flex justify-content-center align-items-center"
      >
        <input
          type="checkbox"
          v-model="isPrivateQuestion"
          style="margin-right: 10px"
        />
        <label>private Question</label>
      </div>
      <div class="private-question-wrapper">
        <div v-if="isPrivateQuestion || !uploading">
          <div class="label-list">
            <div
              class="label-wrapper"
              v-for="(labelObject, index) in teamLabels.concat(addedLabels)"
              :key="index"
            >
              <QuestionLabel
                :label-object="labelObject"
                :clickable="true"
                :active="isActive(labelObject)"
                @toggle-label="toggleLabel"
              ></QuestionLabel>
            </div>
            <div class="label-wrapper">
              <new-label @new-label="addLabel"></new-label>
            </div>
          </div>
        </div>
      </div>
    </form>
    <button class="my-global-button" @click="submit">
      {{ uploading ? "Upload Question" : "Save" }}
    </button>
    <button
      v-if="!uploading"
      class="my-global-button"
      @click.prevent="this.$emit('cancel')"
    >
      Cancel
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import NewLabel from "@/components/label/NewLabel.vue";
import QuestionLabel from "@/components/label/QuestionLabel.vue";

export default {
  components: { QuestionLabel, NewLabel },

  props: {
    inputQuestion: Object,
    uploading: Boolean,
  },

  setup(props, { emit }) {
    const store = useStore();
    const teamLabels = computed(() => store.getters.getTeamLabels);
    const addedLabels = ref([]);
    const isPrivateQuestion = ref(false);

    // Hier prüfen, ob eine Frage über props übergeben wurde
    const question = ref(
      props.inputQuestion
        ? { ...props.inputQuestion }
        : {
            id: "",
            questionText: "",
            answerOptions: [
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
            ],
            questionLabels: [],
            type: "multiple-choice",
          }
    );

    const correctAnswerIndex = ref(null);

    const submit = async () => {
      if (correctAnswerIndex.value === null) {
        alert("Bitte wählen Sie eine richtige Antwort aus.");
        return;
      }
      if (props.uploading && !isPrivateQuestion.value) {
        await store.dispatch("uploadPublicQuestion", question.value);
        question.value = {
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
        correctAnswerIndex.value = null;
        return;
      }
      question.value.answerOptions = question.value.answerOptions.map(
        (answer, index) => {
          return {
            text: answer.text,
            isCorrect: index === correctAnswerIndex.value,
          };
        }
      );
      emit("returnQuestion", question.value, addedLabels.value);
      question.value = {
        id: "",
        questionText: "",
        answerOptions: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
        questionLabels: [],
        type: "multiple-choice",
      };
      addedLabels.value = [];
      correctAnswerIndex.value = null;
      isPrivateQuestion.value = false;
    };

    const isActive = (otherLabelObject) => {
      return question.value.questionLabels.some(
        (labelObject) => labelObject.label === otherLabelObject.label
      );
    };

    const toggleLabel = (otherLabelObject) => {
      const labelExists = question.value.questionLabels.some(
        (label) => label.id === otherLabelObject.id
      );
      if (labelExists) {
        question.value.questionLabels = question.value.questionLabels.filter(
          (labelObject) => labelObject.id !== otherLabelObject.id
        );
      } else {
        question.value.questionLabels.push(otherLabelObject);
      }
    };

    const addLabel = (labelObject) => {
      addedLabels.value.push(labelObject);
    };

    onMounted(() => {
      if (props.inputQuestion) {
        correctAnswerIndex.value = question.value.answerOptions.findIndex(
          (option) => option.isCorrect
        );
      }
    });

    return {
      teamLabels,
      addedLabels,
      question,
      correctAnswerIndex,
      isPrivateQuestion,
      submit,
      isActive,
      toggleLabel,
      addLabel,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Hinzugefügte Regel für die Zentrierung */
}

.private-question-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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
