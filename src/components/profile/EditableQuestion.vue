<template>
  <div class="row question-wrapper">
    <div class="col-1">
      <status-bar
        v-if="stats.totalSubmissions !== 0"
        :correct-count="stats.totalScore"
        :total-count="stats.totalSubmissions"
      ></status-bar>
    </div>
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
    <div class="col-4">
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
  </div>
</template>

<script>
import QuestionLabel from "@/components/label/QuestionLabel.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import StatusBar from "@/components/profile/StatusBar.vue";

export default {
  components: { StatusBar, QuestionLabel },
  emits: ["edit", "delete"],
  props: {
    question: Object,
  },
  setup(props) {
    const store = useStore();
    const teamLabels = computed(() => store.getters.getTeamLabels);
    const stats = computed(() => {
      const questionStats = store.getters.userStats.find(
        (stat) => stat.id === props.question.id
      );
      return questionStats ?? { totalSubmissions: 0, totalScore: 0 };
    });

    // Jetzt können Sie auf das gewünschte Objekt in matchingStat zugreifen
    return {
      teamLabels,
      stats,
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
.question-wrapper {
  margin-top: 15px;
  margin-bottom: 15px;
}
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
