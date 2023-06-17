<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          width="auto"
          alt="MovieBox logo"
          src="../assets/MovieBox_Logo_No_Background.png"
        />
      </a>

      <!--<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>-->
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/add-movie">Add Movie</a>
        <!--<a class="navbar-item" href="/update-movie">Update Movie</a>-->
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
