<template>
  <div class="container">
    <div class="columns is-centered">
      <div
        class="column has-text-centered is-6-fullhd is-6-desktop is-6-tablet is-12-mobile"
      >
        <br/>
        <h1 class="title">Log In</h1>
        <input
          class="input is-primary is-normal"
          type="text"
          v-model="email"
          placeholder="Enter Email"
        />
        <input
          class="input is-primary is-normal"
          type="password"
          v-model="password"
          placeholder="Enter Password"
        />
        <button class="button is-primary is-fullwidth is-normal" v-on:click="login">
          <strong>Log In</strong>
        </button>
        <br/>
        <br/>
        <h1 class="subtitle">Haven't Signed Up?</h1>
        <router-link class="button is-primary is-fullwidth is-normal" to="/sign-up">
          <strong>Sign up</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      }
      console.warn(result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
