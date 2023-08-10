<template>
  <div class="row">
    <div class="col">
      <div>
        <div class="text-start" @click="extended = !extended">
          {{ question.questionText }}
          <div v-if="extended">
            <div v-for="(option, index) in question.answerOptions" :key="index">
              {{ option.text }}
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div v-if="!editLabel" class="col">
            <div class="d-flex flex-wrap">
              <div v-for="label in question.questionLabels" :key="label">
                <question-label
                  :label-text="label"
                  :active="true"
                ></question-label>
              </div>
            </div>
          </div>
          <div v-else class="col">
            <div class="d-flex flex-wrap">
              <div v-for="label in availableLabels" :key="label">
                <question-label
                  :label-text="label"
                  :active="isActive(label)"
                ></question-label>
              </div>
            </div>
          </div>
          <div class="col">
            <button class="add-label" @click="editQuestion">
              <span v-if="editLabel">save</span>
              <span v-else><i class="bi bi-pencil-square"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <button>Edit</button>
      <button>Delete</button>
      <button>Labels</button>
    </div>
  </div>
</template>

<script>
import QuestionLabel from "@/components/QuestionLabel.vue";

export default {
  components: { QuestionLabel },
  emits: ["edit"],
  props: {
    question: Object,
    availableLabels: Object,
  },
  data() {
    return {
      extended: false,
      editLabel: false,
    };
  },
  methods: {
    isActive(label) {
      console.log(label, this.question.questionLabels.includes(label));
      return this.question.questionLabels.includes(label);
    },
    editQuestion() {
      this.$emit("edit", this.question);
    }
  },
};
</script>

<style scoped>
.add-label {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 1rem;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s; /* Füge eine Übergangseffekt hinzu */
}

.add-label:hover {
  color: #007bff;
  background-color: #fff;
}
</style>
