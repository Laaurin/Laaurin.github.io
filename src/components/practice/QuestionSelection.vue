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
  <div v-for="labelObject in userLabels" :key="labelObject.label">
    <button
      class="my-global-button set-selection-button"
      @click="selectQuestionsByLabel"
    >
      <div class="container text-center">
        <div class="row justify-content-start">
          <div class="col-3">
            <i class="bi bi-tag-fill"></i>
          </div>
          <div class="col-4">
            {{ labelObject.label }}
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
    selectPrivateQuestions() {
      this.questions = this.userQuestions;
      this.submit();
    },
    selectQuestionsByLabel() {
      this.questions = this.userQuestions;
      this.submit();
      console.log("funktioniert noch nicht");
    },
    submit() {
      this.$emit("questionsSelected", this.questions);
    },
    async loadPublicQuestions() {
      const querySnap = await getDocs(query(collection(db, "questions")));

      querySnap.forEach((doc) => {
        this.publicQuestions.push(doc.data());
      });
    },
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
