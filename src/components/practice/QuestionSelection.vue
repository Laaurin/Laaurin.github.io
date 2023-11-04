<template>
  <div class="button-outer">
    <button class="btn set-selection-button" @click="selectPublicQuestions">
      <div class="button-content">
        <div class="button-icon">
          <i class="bi bi-people-fill"></i>
        </div>
        <div class="button-text">Public Questions</div>
      </div>
    </button>
  </div>
  <div class="button-outer">
    <button class="btn set-selection-button" @click="selectPrivateQuestions">
      <div class="button-content">
        <div class="button-icon">
          <i class="bi bi-person-fill"></i>
        </div>
        <div class="button-text">Team Questions</div>
      </div>
    </button>
  </div>
  <div v-for="label in teamLabelsInUse" :key="label" class="button-outer">
    <button
      class="btn set-selection-button"
      @click="selectQuestionsByLabel(label)"
    >
      <div class="button-content">
        <div class="button-icon">
          <i class="bi bi-tag-fill"></i>
        </div>
        <div class="button-text">{{ label }}</div>
      </div>
    </button>
  </div>
</template>

<script>
import { collection, getDocs, query } from "firebase/firestore";
import db from "@/firebase/init";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  emits: ["questionsSelected"],
  name: "QuestionSelection",
  setup() {
    const store = useStore();
    const questions = ref([]);
    const teamLabelsInUse = computed(() => {
      const labelsInUse = new Set();

      teamQuestions.value.forEach((question) => {
        question.questionLabels.forEach((label) => {
          labelsInUse.add(label.label);
        });
      });

      // Sortieren Sie die Labels alphabetisch
      return Array.from(labelsInUse).sort((a, b) =>
        a.localeCompare(b, "en", { sensitivity: "base" })
      );
    });

    const publicQuestions = computed(() => {
      return store.getters.getPublicQuestions;
    });
    const teamQuestions = computed(() => {
      return store.getters.getTeamQuestions;
    });
    const teamLabels = computed(() => {
      return store.getters.getTeamLabels;
    });
    return {
      publicQuestions,
      teamLabels,
      teamQuestions,
      questions,
      teamLabelsInUse,
    };
  },
  methods: {
    async selectPublicQuestions() {
      if (this.publicQuestions.length === 0) {
        await this.loadPublicQuestions();
      }
      this.questions = this.publicQuestions;
      this.submit();
    },

    async loadPublicQuestions() {
      const querySnap = await getDocs(query(collection(db, "questions")));

      querySnap.forEach((doc) => {
        this.publicQuestions.push(doc.data());
      });
    },

    selectPrivateQuestions() {
      this.questions = this.teamQuestions;
      this.submit();
    },

    selectQuestionsByLabel(label) {
      console.log("selecting data: ", label);
      this.questions = this.teamQuestions.filter((question) =>
        question.questionLabels.some(
          (questionLabel) => questionLabel.label === label
        )
      );
      console.log("after filter: ", this.questions);
      this.submit();
    },

    submit() {
      console.log("questions:" + this.questions);
      this.$emit("questionsSelected", this.questions);
    },
  },
};
</script>

<style scoped>
.set-selection-button {
  width: 100%;
  text-align: left;
  padding: 0;
  position: relative; /* Position für das Pseudo-Element */
}

.set-selection-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc; /* Farbe der Trennlinie */
}

.button-content {
  display: flex; /* Zeigt die Elemente in einer Zeile an */
  align-items: center; /* Zentriert die Elemente vertikal in der Zeile */
}

.button-text {
  color: #eaeaea;
}

.button-icon {
  color: #eaeaea;
}

.button-outer {
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
