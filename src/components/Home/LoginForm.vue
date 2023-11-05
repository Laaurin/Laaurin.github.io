<template>
    <form @submit.prevent="login" class="box">
      <div class="row">
        <input
          type="email"
          class="input"
          id="email"
          v-model="email"
          placeholder="Enter email"
          required
        />
      </div>
      <div class="row">
        <input
          type="password"
          class="input"
          id="password"
          v-model="password"
          placeholder="Enter password"
          required
        />
      </div>
      <div class="row">
        <button type="submit" class="login-button" @click="login">Login</button>
      </div>
      <div class="row">
        <button
          class="my-button register-button">
          <a
            href="https://p3pv41relm0.typeform.com/to/xFVQAa4j?typeform-source=lvp8ghhtd8b.typeform.com"
          >Register</a>
        </button>
      </div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      console.log("logging in")
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>

form {
  width: max-content;
}

.box {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Hinzugefügter Unschärfeeffekt */
  background: transparent;
  backdrop-filter: blur(10px); /* Unschärfeeffekt für den Hintergrund */
  filter: blur(0); /* Kein Unschärfeeffekt für den Inhalt */
  padding: 20px; /* Einen Innenabstand hinzufügen, um den Unschärfeeffekt sichtbar zu machen */
}


.input {
  background-color: #a9a9a9; /* Hier können Sie die gewünschte Hintergrundfarbe festlegen */
  color: whitesmoke;
  border-radius: 30px; /* Um die Standardrahmen zu entfernen */
  border-color: transparent;
  width: 250px;
}

.input::placeholder {
  color: #eaeaea; /* Ändere die Schriftfarbe des Placeholders hier nach deinen Wünschen */
}

.login-button {
  border-radius: 30px;
  border-color: transparent;
  color: whitesmoke;
  background: linear-gradient(45deg, #1f2a1f, #2c362d);
  width: 90%;
  margin-left: 5%;
  padding: 0;
}

 .register-button {
   border-radius: 30px;
   border: none; /* Entferne den Rahmen für einen sauberen Look */
   margin: 0;
   padding: 0;
   background: linear-gradient(45deg, #e08f43, #e39d61); /* Farbverlauf von oben nach unten */
   transition: background 0.3s; /* Füge eine Übergangseigenschaft hinzu, um den Farbverlauf sanfter zu machen */
 }


a {
  color: whitesmoke;
  text-decoration: none;
}

.row {
  margin-bottom: 0.75rem;
  height: 40px;
}
</style>
