<template>
  <div class="container">
    <div class="columns is-centered">
      <div
        class="column has-text-centered is-6-fullhd is-6-desktop is-6-tablet is-12-mobile"
      >
        <br/>
        <h1 class="title">Sign Up</h1>
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
        <br/>
        <br/>
        <h1 class="subtitle">Already Signed Up?</h1>
        <router-link class="button is-primary is-fullwidth is-normal" to="/login">
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
