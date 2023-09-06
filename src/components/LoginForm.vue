<template>
  <div class="card">
    <div class="card-body">
      <h2 class="mb-4">Login</h2>
      <form
        @submit.prevent="login"
        class="d-flex flex-column align-items-center"
      >
        <div class="form-group">
          <label for="email" class="form-label label-sm">Email address</label>
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
      <p class="mt-3">
        No account?
        <a
          href="https://p3pv41relm0.typeform.com/to/xFVQAa4j?typeform-source=lvp8ghhtd8b.typeform.com"
          >Register here</a
        >
      </p>
    </div>
  </div>
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
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
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
