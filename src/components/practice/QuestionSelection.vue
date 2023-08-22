<template>
  <div>
    <button
      class="my-global-button set-selection-button"
      @click="selectPublicQuestions"
    >
      <i class="bi bi-people-fill"> public questions </i>
    </button>
  </div>
  <div>
    <button
      class="my-global-button set-selection-button"
      @click="selectPrivateQuestions"
    >
      <div class="container text-center">
        <div class="row justify-content-start">
          <div class="col-3">
            <i class="bi bi-person-fill"></i>
          </div>
          <div class="col-4">Team Questions</div>
        </div>
      </div>
    </button>
  </div>
  <div v-for="label in userLabelsInUse" :key="label">
    <button
      class="my-global-button set-selection-button"
      @click="selectQuestionsByLabel(label)"
    >
      <div class="container text-center">
        <div class="row justify-content-start">
          <div class="col-3">
            <i class="bi bi-tag-fill"></i>
          </div>
          <div class="col-4">
            {{ label }}
          </div>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import { collection, getDocs, query } from "firebase/firestore";
import db from "@/firebase/init";
import { inject } from "vue";

export default {
  emits: ["questionsSelected"],
  name: "QuestionSelection",
  setup() {
    const publicQuestions = inject("publicQuestions");
    const userQuestions = inject("userQuestions");
    const userLabels = inject("userLabels");
    return {
      publicQuestions: publicQuestions,
      userQuestions: userQuestions,
      userLabels: userLabels,
    };
  },
  data() {
    return {
      questions: [],
      userLabelsInUse: [],
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
      this.questions = this.userQuestions;
      this.submit();
    },

    selectQuestionsByLabel(label) {
      console.log("selecting label: ", label);
      this.questions = this.userQuestions.filter((question) =>
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

    getLabelsInUse(questions) {
      const labelsInUse = new Set();

      questions.forEach((question) => {
        question.questionLabels.forEach((label) => {
          labelsInUse.add(label.label);
        });
      });

      return Array.from(labelsInUse);
    },
  },
  created() {
    this.userLabelsInUse = this.getLabelsInUse(this.userQuestions);
  },
};
</script>

<style scoped>
.set-selection-button {
  min-width: 250px;
}
.button-content {
  display: flex;
}

.button-icon {
  align-items: start;
}

.button-text {
  align-items: center;
}
</style>
