<template>
  <div>
    <p>{{question}}</p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    question: Object
  },
  setup(props) {
    const question = computed(() => props.question);
    return {
      question,
    }
  }
};
</script>

<style scoped>

</style>