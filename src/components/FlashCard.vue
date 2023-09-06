<template>
  <div class="flashcard">
    <div class="card-content" :class="{ flipped: isFlipped }">
      <div class="front">
        <p>{{ flashCard.frontText }}</p>
      </div>
      <div class="back">
        <p>{{ flashCard.backText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashCard",
  props: {
    flashCard: Object,
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.flashcard {
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.card-content {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flipped .card-content {
  transform: rotateY(180deg);
}

.front,
.back {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  backface-visibility: hidden;
}

.front {
  background-color: #fff;
}

.back {
  background-color: #f0f0f0;
  transform: rotateY(180deg);
}

.question,
.answer {
  font-size: 18px;
  margin-bottom: 10px;
}

.flip-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.flip-button:hover {
  background-color: #0056b3;
}
</style>
