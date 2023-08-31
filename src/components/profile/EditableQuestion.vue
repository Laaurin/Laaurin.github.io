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
        <i
          :class="{ 'delete-icon': isDeleting, default: !isDeleting }"
          @animationend="resetDeleteButton"
          class="bi bi-trash"
        ></i>
        <span class="d-none d-md-inline">{{ deleteButtonText }}</span>
      </button>
    </div>
    <hr />
  </div>
</template>

<script>
import QuestionLabel from "@/components/label/QuestionLabel.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: { QuestionLabel },
  emits: ["edit", "delete"],
  props: {
    question: Object,
  },
  setup() {
    const store = useStore();
    const teamLabels = computed(() => store.getters.getTeamLabels);
    return {
      teamLabels,
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
        setTimeout(() => {
          this.isDeleting = false;
        }, 3000);
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
.default-icon {
  color: white;
}
.delete-icon {
  animation: colorChange 3s linear;
  animation-fill-mode: forwards;
}

@keyframes colorChange {
  0% {
    transform: translateY(0);
    color: red;
  }
  100% {
    transform: translateY(100%);
    color: white;
  }
}
</style>
