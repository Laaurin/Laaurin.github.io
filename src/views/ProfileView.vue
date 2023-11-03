<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 sidebar">
        <side-bar>
          <question-filter
            @questions-filtered="updateQuestions"
          ></question-filter>
        </side-bar>
      </div>
      <div class="col">
        <profile-questions :questions="filteredQuestions"></profile-questions>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex"; // Stelle sicher, dass die Vuex-Store-Verbindung hergestellt ist

import ProfileQuestions from "@/components/profile/ProfileQuestions.vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";
import QuestionFilter from "@/components/profile/QuestionFilter.vue";

export default {
  components: { QuestionFilter, SideBar, ProfileQuestions },
  setup() {
    const store = useStore();

    const filteredQuestions = ref([]);

    const debug = () => {
      console.log(store.getters.getTeamQuestions);
    };

    const updateQuestions = (newQuestions) => {
      console.log("Called");
      filteredQuestions.value = newQuestions;
    };

    return {
      filteredQuestions,
      updateQuestions,
      debug,
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 88px;
  height: calc(100dvh - 100px);
}

.col-3 {
  padding-left: 0;
}
</style>
