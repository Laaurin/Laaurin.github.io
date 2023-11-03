<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-3">
        <side-bar>
          <question-selection
            @questions-selected="passQuestions"
          ></question-selection>
        </side-bar>
      </div>
      <div class="col-9">
        <div v-if="startTraining">
          <question-training :question-set="questions"></question-training>
        </div>
      </div>
    </div>
  </div>
  <user-selection
    v-if="isProfileSelected === false"
    @user-selected="isProfileSelected = true"
  ></user-selection>
</template>

<script>
import QuestionSelection from "@/components/practice/QuestionSelection.vue";
import QuestionTraining from "@/components/practice/QuestionTraining.vue";
import { ref } from "vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";
import UserSelection from "@/components/user/UserSelection.vue";
import { useStore } from "vuex";
export default {
  name: "PracticeView",
  components: { UserSelection, SideBar, QuestionSelection, QuestionTraining },
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
.container {
  margin-left: 0;
  margin-right: 0;
  padding-right: 0;
  padding-left: 0;
}

.col-3 {
  padding-left: 0;
}
</style>
