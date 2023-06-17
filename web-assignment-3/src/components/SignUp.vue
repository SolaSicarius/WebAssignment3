<template>
  <h1>Sign Up Page</h1>
  <div class="container">
    <div class="columns is-centered">
      <div
        class="column has-text-centered is-6-fullhd is-6-desktop is-6-tablet is-12-mobile"
      >
        <input
          class="input is-primary is-normal"
          type="text"
          v-model="name"
          placeholder="Enter Name"
        />
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
        <button class="button is-primary is-fullwidth is-normal" v-on:click="signUp">
          <strong>Sign Up</strong>
        </button>
        <router-link class="button is-light is-fullwidth is-normal" to="/login">
          <strong>Log In</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
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
