<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <side-bar :show="true">
          <question-selection
            style="margin-left: 1rem"
            @questions-selected="passQuestions"
          ></question-selection>
        </side-bar>
      </div>
      <div class="col-9">
        <div v-if="startTraining">
          <question-training :question-set="questions"></question-training>
        </div>
        <div v-else class="hintergrund">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionSelection from "@/components/practice/QuestionSelection.vue";
import QuestionTraining from "@/components/practice/QuestionTraining.vue";
import { ref } from "vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";
import { useStore } from "vuex";
export default {
  name: "PracticeView",
  components: { SideBar, QuestionSelection, QuestionTraining },
  setup() {
    const store = useStore();
    const questions = ref([]);
    const startTraining = ref(false);
    const isProfileSelected = ref(store.getters.userProfileId !== null);
    return {
      questions,
      startTraining,
      isProfileSelected,
    };
  },
  methods: {
    passQuestions(newQuestions) {
      this.questions = newQuestions;
      this.startTraining = true;
      this.showOptions = false;
    },
  },
  created() {
    console.log(this.$store.getters.isProfileSelected);
  },
};
</script>

<style scoped>
.col-3 {
  padding: 0;
}

.col-9 {
  padding: 0;
}

.hintergrund {
  background-image: url("@/assets/images/silvano-home.svg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center; /* Das Bild wird zentriert positioniert */
  background-repeat: no-repeat; /* Das Bild wird nicht wiederholt */
  max-width: 100%; /* Die Breite entspricht der Container-Breite */
  width: auto;
  height: calc(100dvh - 100px); /* Die Höhe entspricht der Container-Höhe */
  padding: 0;
  margin: 0;
  z-index: -1;
}
</style>
