<template>
  <div class="container">
    <h2>{{ uploading ? "Upload Flashcard" : "Edit Flashcard" }}</h2>
    <form>
      <div class="flashcard">
        <div class="flashcard-content">
          <textarea
            v-model="question.questionText"
            placeholder="Enter Question..."
          ></textarea>
        </div>
      </div>
      <div class="flashcard">
        <div class="flashcard-content">
          <textarea
            v-model="question.solutionText"
            placeholder="Enter Solution..."
          ></textarea>
        </div>
      </div>
      <div class="label-list">
        <div
          class="label-wrapper"
          v-for="(labelObject, index) in teamLabels.concat(addedLabels)"
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
      <button class="my-global-button" @click.prevent="submit">
        {{ uploading ? "Upload Question" : "Save" }}
      </button>
      <button
        v-if="!uploading"
        class="my-global-button"
        @click.prevent="this.$emit('cancel')"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import QuestionLabel from "@/components/label/QuestionLabel.vue";
import NewLabel from "@/components/label/NewLabel.vue";
import { useStore } from "vuex";

export default {
  components: { NewLabel, QuestionLabel },
  emits: ["returnQuestion", "cancel"],
  props: {
    inputQuestion: Object,
    uploading: Boolean,
  },
  setup(props, { emit }) {
    const store = useStore();
    const teamLabels = computed(() => store.getters.getTeamLabels);
    const addedLabels = ref([]);
    const question = props.inputQuestion
      ? ref({ ...props.inputQuestion })
      : ref({
          id: "",
          questionText: "",
          solutionText: "",
          questionLabels: [],
          type: "flash-card",
        });

    const submit = () => {
      if (
        question.value.questionText === "" ||
        question.value.solutionText === ""
      ) {
        alert("sooo nicht");
        return;
      }
      emit("returnQuestion", question.value, addedLabels.value);
      question.value = {
        id: "",
        questionText: "",
        solutionText: "",
        questionLabels: [],
      };
      addedLabels.value = [];
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

    return {
      question,
      teamLabels,
      addedLabels,
      submit,
      isActive,
      toggleLabel,
      addLabel,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 500px;
  margin: 5rem auto auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.flashcard {
  width: 100%;
  height: 150px; /* Passen Sie die Größe nach Bedarf an */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Anordnung von Frage und Antwort untereinander */
}

.flashcard-content {
  padding: 10px;
  width: 80%;
}

textarea {
  width: 100%;
  height: 50%; /* Aufteilen des Platzes zwischen Frage und Antwort */
  border: none;
  outline: none;
  resize: none;
  font-size: 18px;
  font-family: Arial, sans-serif;
  margin-bottom: 10px; /* Abstand zwischen Frage und Antwort */
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
