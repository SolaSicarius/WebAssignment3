<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img style="width: 100px height: 100px" alt="MovieBox logo" src="../assets/MovieBox_Logo_No_Background.png">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">Home</a>

      <a class="navbar-item" href="#">Movie List</a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="#">Add Movie</a>
          <a class="navbar-item" href="#">Update Movie</a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="#">Report an issue</a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log Out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
        name: "HeaderArea",
        mounted() {
        let user = localStorage.getItem('user-info');
        if(user)
                {
                        this.$router.push({name: 'HomePage'})
                }
        }
}
</script>