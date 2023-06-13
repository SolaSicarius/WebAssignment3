<template>
  <header>
    <br>
    <div class="columns is-centered">
      <img style="width: 100px" alt="MovieBox logo" src="./assets/MovieBox_Logo_No_Background.png">
    </div>
  </header>
  <SignUp />
  <div class="container">
    <div class="columns is-centered">
      <div class="column has-text-centered is-6-fullhd is-6-desktop is-6-tablet is-12-mobile">
        <input class="input is-primary is-normal" type="text" placeholder="Enter Name" />
        <input class="input is-primary is-normal" type="text" placeholder="Enter Email" />
        <input class="input is-primary is-normal" type="password" placeholder="Enter Password" />
        <button class="button is-primary is-fullwidth is-normal">Sign Up</button>
      </div>
    </div>
</div>
</template>

<script>
import SignUp from './components/SignUp.vue'
export default {
  name: 'App',
  components:{
    SignUp
  }
}
</script>

<style>

</style>