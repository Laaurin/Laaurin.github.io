<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Willem C. Vis Moot - Training</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/upload" class="nav-item nav-link"
            >Upload Question</router-link
          >
          <router-link to="/practice" class="nav-item nav-link"
            >Practice</router-link
          >
          <router-link to="/profile" class="nav-item nav-link"
            >Profile</router-link
          >
        </div>
        <div class="navbar-nav justify-content-end">
          <button class="sign-out-button" v-if="isLoggedIn" @click="logout">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isAuthenticated);
    return {
      isLoggedIn,
    };
  },
  name: "TheHeader",
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped>
.sign-out-button {
  border: none;
  background-color: transparent;
  outline: none;
  float: end;
}
</style>
