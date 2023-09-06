<template>
  <div class="flashcard-builder">
    <div class="flashcard">
      <div class="flashcard-content">
        <textarea v-model="question" placeholder="Frage eingeben..."></textarea>
      </div>
    </div>
    <div class="flashcard">
      <div class="flashcard-content">
        <textarea v-model="answer" placeholder="Antwort eingeben..."></textarea>
      </div>
    </div>
  </div>
  <button></button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const question = ref("");
    const answer = ref("");

    return {
      question,
      answer,
    };
  },
};
</script>

<style scoped>
.flashcard-builder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Passen Sie die Höhe nach Bedarf an */
}

.flashcard {
  width: 200px; /* Passen Sie die Größe nach Bedarf an */
  height: 150px; /* Passen Sie die Größe nach Bedarf an */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 20px; /* Abstand zwischen den Karten */
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Anordnung von Frage und Antwort untereinander */
}

.flashcard-content {
  padding: 10px;
}

textarea {
  width: 100%;
  height: 50%; /* Aufteilen des Platzes zwischen Frage und Antwort */
  border: none;
  outline: none;
  resize: none;
  font-size: 18px;
  font-family: Arial, sans-serif;
  margin-bottom: 10px; /* Abstand zwischen Frage und Antwort */
}
</style>
