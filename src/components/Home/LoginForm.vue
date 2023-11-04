<template>
  <div class="container d-flex justify-content-center align-items-center" style="height: 100%">
    <form @submit.prevent="login">
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

  </div>

  <!--<div class="">
    <div class="card-body">
      <h2 class="mb-4 text-center">Get started!</h2>
      <form
        @submit.prevent="login"
        class="d-flex flex-column align-items-center"
      >
        <div class="form-group">
          <input
            type="email"
            class="input"
            id="email"
            v-model="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="input"
            id="password"
            v-model="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div class="d-flex justify-content-center">
        <button
          class="mt-3 login-button">
          <a
            href="https://p3pv41relm0.typeform.com/to/xFVQAa4j?typeform-source=lvp8ghhtd8b.typeform.com"
          >Register</a>
        </button>
      </div>
    </div>
  </div>-->
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
.card {
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  height: 100%;
  padding: 10px;
}

.form-group {
  margin: 0.5rem;
}

.input {
  background-color: #a9a9a9; /* Hier können Sie die gewünschte Hintergrundfarbe festlegen */
  color: whitesmoke;
  border-radius: 30px; /* Um die Standardrahmen zu entfernen */
  border-color: transparent;
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



.label-sm {
  font-size: 12px;
  text-align: left;
}

a {
  color: whitesmoke;
  text-decoration: none;
}

.row {
  margin-bottom: 0.5rem;
  height: 36px;
  max-width: 250px;
}
</style>
