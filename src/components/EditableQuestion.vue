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
          <div class="col">
            <div class="d-flex flex-wrap">
              <div v-for="label in question.questionLabels" :key="label.label">
                <question-label
                  :label-text="label.label"
                  :active="true"
                ></question-label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <button
        class="my-global-button"
        style="margin: 5px"
        @click="editQuestion"
      >
        <span v-if="editLabel">save</span>
        <span v-else><i class="bi bi-pencil-square"></i> Edit</span>
      </button>
      <button class="my-global-button" style="margin: 5px">
        <i class="bi bi-trash"></i> Delete
      </button>
    </div>
    <hr />
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
    editQuestion() {
      this.$emit("edit", this.question);
    },
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
