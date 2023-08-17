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
              <div
                v-for="labelObject in question.questionLabels"
                :key="labelObject.id"
              >
                <question-label
                  :label-object="labelObject"
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
        <i class="bi bi-pencil-square"></i>
        <span class="d-none d-md-inline">Edit</span>
      </button>
      <button
        class="my-global-button"
        style="margin: 5px"
        @click="toggleDelete"
      >
        <i v-if="!isDeleting" class="bi bi-trash"></i>
        <span class="d-none d-md-inline">{{ deleteButtonText }}</span>
      </button>
    </div>
    <hr />
  </div>
</template>

<script>
import QuestionLabel from "@/components/QuestionLabel.vue";
import { inject } from "vue";

export default {
  components: { QuestionLabel },
  emits: ["edit", "delete"],
  props: {
    question: Object,
  },
  setup() {
    const userLabels = inject("userLabels");
    return {
      userLabels: userLabels,
    };
  },
  data() {
    return {
      extended: false,
      isDeleting: false,
    };
  },
  computed: {
    deleteButtonText() {
      return this.isDeleting ? "Confirm " : "Delete";
    },
  },
  methods: {
    editQuestion() {
      this.$emit("edit", this.question);
    },
    toggleDelete() {
      if (this.isDeleting) {
        this.delete(); // Hier die eigentliche Löschfunktion aufrufen
      } else {
        this.isDeleting = true;
      }
    },
    delete() {
      this.$emit("delete", this.question);
      this.isDeleting = false;
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
