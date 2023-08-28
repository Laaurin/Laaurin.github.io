<template>
  <div>
    <div v-for="labelObject in userLabels" :key="labelObject.id">
      <question-label :label-object="labelObject"></question-label>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import QuestionLabel from "@/components/Label/QuestionLabel.vue";

export default {
  components: { QuestionLabel },
  setup() {
    const userLabels = inject("userLabels");
    return {
      userLabels: userLabels,
    };
  },
  name: "LabelWindow",
};
</script>

<style scoped>

</style>