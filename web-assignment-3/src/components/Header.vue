<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          width="auto"
          alt="MovieBox logo"
          src="../assets/MovieBox_Logo_White.png"
        />
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/add-movie">Add Movie</a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light" v-on:click="logout" href="#">Log Out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderArea",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>
