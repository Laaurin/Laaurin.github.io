<template>
  <footer>
    <hr />
    <section class="footer-wrapper">
      <div class="container">
        <section class="row text-center d-flex justify-content-center pt-4">
          <div class="col-md-2">
            <router-link class="link" to="/impressum">Impressum</router-link>
            <router-link class="link" to="/sponsors">Sponsors</router-link>
          </div>
        </section>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.link {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
