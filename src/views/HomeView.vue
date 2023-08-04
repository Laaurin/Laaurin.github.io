<template>
  <div class="landing-page">
    <h1 style="margin-top: 5rem" class="landing-title">Welcome to Vis Quiz</h1>
    <div class="landing-buttons">
      <router-link to="/editor" class="landing-button">
        Upload Question
      </router-link>
      <router-link to="/practice" class="landing-button">
        Practice
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.landing-title {
  font-size: 36px;
  margin-bottom: 30px;
}

.landing-buttons {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px; /* Füge einen oberen Abstand hinzu */
}

.landing-button {
  flex: 1; /* Ändere die Flex-Grow-Eigenschaft, um die Buttons gleich groß zu machen */
  max-width: 500px; /* Setze eine maximale Breite für die Buttons */
  height: 300px;
  font-size: 24px;
  padding: 15px 30px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #616e7f;
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex; /* Zentriere den Text horizontal */
  align-items: center; /* Zentriere den Text vertikal */
  justify-content: center; /* Zentriere den Text horizontal */
}

.landing-button:hover {
  background-color: #46505b;
}

.landing-button:focus {
  outline: none;
}
</style>
