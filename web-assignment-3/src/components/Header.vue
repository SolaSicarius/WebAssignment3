<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          width="50"
          alt="MovieBox logo"
          src="../assets/MovieBox_Logo_White.png"
        />
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" data-target="collapse" :aria-expanded="isActive" :class="{ 'is-active': isActive }" @click="isActive = !isActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/add-movie">Add Movie</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-light" v-on:click="logout" href="#">Log Out</a>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderArea",
  data() {
    return {
      isActive: false,
      showNavbar: true
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>
