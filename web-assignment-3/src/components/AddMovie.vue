<template>
  <Header />
  <h1>Hello user, Welcome to the Add Movie Page</h1>
  <div class="container">
    <div class="columns is-centered">
      <div
        class="column has-text-centered is-6-fullhd is-6-desktop is-6-tablet is-12-mobile"
      >
        <input
          class="input is-primary is-normal"
          type="text"
          name="title"
          v-model="movie.title"
          placeholder="Enter Movie Title"
        />
        <input
          class="input is-primary is-normal"
          type="text"
          name="description"
          v-model="Movmovieies.description"
          placeholder="Enter Description"
        />
        <input
          class="input is-primary is-normal"
          type="text"
          name="release"
          v-model="movie.release"
          placeholder="Enter Release Date"
        />
        <button class="button is-primary is-fullwidth is-normal" v-on:click="addMovie">
          <strong>Add New Movie</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios"
export default {
  name: "AddMovie",
  components: {
    Header,
  },
  data() {
    return {
      movie: {
        title: '',
        description: '',
        release: '',
      },
    };
  },
  methods: {
    async addMovie() {
      //console.warn(this.movie);
      const result = await axios.post("http://localhost:3000/movies", {
        title: this.movie.title,
        description: this.movie.description,
        release: this.movie.release,
      });
     //console.warn("result", result);
     if(result.status==201)
     {
      this.$router.push({name: 'HomePage'});
     }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
