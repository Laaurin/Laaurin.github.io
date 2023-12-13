<template>
  <div>
    <div>
      <div>
        <the-side-bar>
          <question-selection
            style="margin-left: 1rem"
            @questions-selected="passQuestions"
          ></question-selection>
        </the-side-bar>
      </div>
      <div>
        <div v-if="startTraining" :style="{'margin-left': sidebarWidth}">
          <question-training :question-set="questions"></question-training>
        </div>
        <div v-else class="hintergrund d-flex justify-content-center align-items-center">
          <blur-box>
            <h2 style="color: var(--primary)">public questions</h2>
            <p>train questions submitted by participants from all around the globe</p>
            <h2>team questions</h2>
            <p>repeat all of your internal facts</p>
            <h2 style="color: var(--primary)">specified units</h2>
            <p>individualize your repetition to improve your question handling in particular fields</p>
            <h2>evaluate your performance</h2>
            <p>monitor your progress per question in your profile<br>
              <span style="color: var(--need-improvement)">needs improvement</span> -
              <span style="color: var(--okay)">okay</span> -
              <span style="color: var(--good)">good</span> -
              <span style="color: var(--very-good)">very good</span> -
              <span style="color: var(--excellent)">excellent</span>
            </p>
          </blur-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionSelection from "@/components/practice/QuestionSelection.vue";
import QuestionTraining from "@/components/practice/QuestionTraining.vue";
import { computed, ref } from "vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";
import { useStore } from "vuex";
import BlurBox from "@/components/UI/BlurBox.vue";
import TheSideBar from "@/components/UI/SideBar/TheSideBar.vue";
export default {
  name: "PracticeView",
  components: { TheSideBar, BlurBox, SideBar, QuestionSelection, QuestionTraining },
  setup() {
    const store = useStore();
    const questions = ref([]);
    const startTraining = ref(false);
    const isProfileSelected = ref(store.getters.userProfileId !== null);
    const sidebarWidth = computed(() => store.getters.getSidebarWidth);
    return {
      questions,
      startTraining,
      isProfileSelected,
      sidebarWidth
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
h2 {
  font-weight: bold;
}

p {
  font-weight: bold;
}

.col-3 {
  padding: 0;
}

.col-9 {
  padding: 0;
}

.hintergrund {
  background-image: url("@/assets/images/architecture.jpg");
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
