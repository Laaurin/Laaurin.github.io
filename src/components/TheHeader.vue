<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
          <router-link to="/editor" class="nav-item nav-link"
            >Editor</router-link
          >
          <router-link to="/practice" class="nav-item nav-link"
            >Practice</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped></style>
