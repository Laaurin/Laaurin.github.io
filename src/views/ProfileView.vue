<template>
  <div>
    <div>
      <the-side-bar>
        <question-filter
          @questions-filtered="updateQuestions"
        ></question-filter>
      </the-side-bar>
    </div>
    <div :style="{'margin-left': sidebarWidth}">
      <profile-questions :questions="filteredQuestions"></profile-questions>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";

import ProfileQuestions from "@/components/profile/ProfileQuestions.vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";
import QuestionFilter from "@/components/profile/QuestionFilter.vue";
import TheSideBar from "@/components/UI/SideBar/TheSideBar.vue";

export default {
  components: { TheSideBar, QuestionFilter, SideBar, ProfileQuestions },
  setup() {
    const store = useStore();
    const sidebarWidth = computed(() => {const a = store.getters.getSidebarWidth
    console.log(a);
    return a;});

    const filteredQuestions = ref([]);

    const updateQuestions = (newQuestions) => {
      console.log("Called");
      filteredQuestions.value = newQuestions;
    };

    return {
      sidebarWidth,
      filteredQuestions,
      updateQuestions,
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
