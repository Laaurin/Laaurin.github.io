<template>
  <div class="row question-wrapper">
    <div class="col-1 ps-3">
      <status-bar
        v-if="stats.totalSubmissions !== 0"
        :correct-count="stats.totalScore"
        :total-count="stats.totalSubmissions"
      ></status-bar>
    </div>
    <div class="col">
      <div>
        <div class="text-start overflow-hidden" @click="extended = !extended">
          {{ question.questionText }}
          <div v-if="extended">
            <div v-for="(option, index) in question.answerOptions" :key="index">
              {{ option.text }}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-wrap">
            <div
              v-for="labelObject in question.questionLabels"
              :key="labelObject.id"
              class="overflow-hidden"
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
    <div class="col-3 d-flex justify-content-end">
      <div class="vertical-line"></div>
      <button
        class="my-global-button"
        style="margin: 5px"
        @click="editQuestion"
      >
        <i class="bi bi-pencil-square"></i>
        <!--<span class="d-none d-md-inline">Edit</span>-->
      </button>
      <button
        class="my-global-button"
        style="margin: 5px"
        @click="toggleDelete"
      >
        <i
          :class="{ 'delete-icon': isDeleting, default: !isDeleting }"
          class="bi bi-trash"
        ></i>
        <!--<span class="d-none d-md-inline">{{ deleteButtonText }}</span>-->
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import QuestionLabel from "@/components/label/QuestionLabel.vue";
import StatusBar from "@/components/profile/StatusBar.vue";

export default {
  components: { StatusBar, QuestionLabel },
  props: {
    question: Object,
  },
  setup(props, { emit }) {
    const store = useStore();

    const teamLabels = computed(() => store.getters.getTeamLabels);

    const stats = computed(() => {
      const questionStats = store.getters.userStats.find(
        (stat) => stat.id === props.question.id
      );
      return questionStats ?? { totalSubmissions: 0, totalScore: 0 };
    });

    const showLabels = computed(() => {
      return props.question.questionLabels.length === 0;
    });

    const extended = ref(false);
    const isDeleting = ref(false);

    const deleteButtonText = computed(() => {
      return isDeleting.value ? "Confirm" : "Delete";
    });

    const editQuestion = () => {
      emit("edit", props.question);
    };

    const toggleDelete = () => {
      if (isDeleting.value) {
        deleteQuestion(); // Hier die eigentliche Löschfunktion aufrufen
      } else {
        isDeleting.value = true;
        setTimeout(() => {
          isDeleting.value = false;
        }, 3000);
      }
    };

    const deleteQuestion = () => {
      emit("delete", props.question);
      isDeleting.value = false;
    };

    return {
      teamLabels,
      stats,
      showLabels,
      extended,
      isDeleting,
      deleteButtonText,
      editQuestion,
      toggleDelete,
    };
  },
};
</script>

<style scoped>
.question-wrapper {
  margin-top: 15px;
  margin-bottom: 15px;
  z-index: 1;
}
.default-icon {
  color: white;
}
.delete-icon {
  animation: colorChange 3s linear;
  animation-fill-mode: forwards;
}
.vertical-line {
  width: 1px; /* Breite der vertikalen Linie */
  height: 100%; /* Höhe der vertikalen Linie */
  background-color: #000; /* Farbe der Linie */
  margin: 0 10px; /* Abstand zu den umgebenden Elementen anpassen */
}

.my-global-button {
  max-height: 40px;
  padding: 5px 28px;
}

i {
  font-size: 14px;
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
