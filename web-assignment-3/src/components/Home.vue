<template>
  <Header />
  <h1>Hello {{ name }}, Welcome to the Home Page</h1>
  <table class="table">
    <thead>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>description</td>
        <td>release date</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in movies" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.release }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      movies: [],
    };
  },
  components: {
    Header,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/movies");
    //console.warn(result);
    this.movies = result.data;
  },
};
</script>
