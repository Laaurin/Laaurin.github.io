<template>
  <div class="card" style="height: 100%">
    <div class="card-body">
      <h2 class="mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="form-label label-sm"> Email address </label>
          <input
            type="email"
            class="form-control form-control-sm"
            id="email"
            v-model="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password" class="form-label label-sm">Password</label>
          <input
            type="password"
            class="form-control form-control-sm"
            id="password"
            v-model="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" class="my-global-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Hier kannst du die Login-Logik implementieren
      signInWithEmailAndPassword(auth, this.email, this.password).then(() => {
        this.$root.loggedIn = true;
        console.log("Email:", this.email);
        console.log("Password:", this.password);
      });
    },
  },
};
</script>

<style>
.card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  height: 100%;
}

.label-sm {
  font-size: 12px;
  text-align: left;
}
</style>
