<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Willem C. Vis Moot - Training</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/editor" class="nav-item nav-link"
            >Upload Question</router-link
          >
          <router-link to="/practice" class="nav-item nav-link"
            >Practice</router-link
          >
          <router-link to="/profile" class="nav-item nav-link"
            >Profile</router-link
          >
          <button v-if="this.$root.loggedIn" @click="logOut">sign out</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  emits: ["sign-out"],
  methods: {
    logOut() {
      this.$emit("signOut");
    },
  },
};
</script>

<style scoped></style>
