<template>
  <Header />
  <br />
  <h1>Hello {{ name }}, Welcome to the Home Page</h1>
  <br />
  <div class="container">
    <div class="columns is-centered">
      <div
        class="column has-text-centered is-12-fullhd is-12-desktop is-12-tablet is-12-mobile"
      >
        <table class="table">
          <thead>
            <tr>
              <td>Movie Title</td>
              <td>Description</td>
              <td>Release Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in movies" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.release }}</td>
              <td>
                <router-link :to="'/update-movie/' + item.id">
                  <button>
                    <strong>Update Details</strong>
                  </button>
                </router-link>
                <button v-on:click="deleteMovie(item.id)">
                  <strong>Delete Movie</strong>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
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
  methods: {
    async deleteMovie(id) {
      //console.warn(id)
      let result = await axios.delete("http://localhost:3000/movies/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/movies");
      this.movies = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
