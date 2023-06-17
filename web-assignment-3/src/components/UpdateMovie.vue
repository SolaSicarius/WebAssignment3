<template>
  <Header />
  <h1>Hello user, Welcome to the Update Movie Page</h1>
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
          v-model="movie.description"
          placeholder="Enter Description"
        />
        <input
          class="input is-primary is-normal"
          type="text"
          name="release"
          v-model="movie.release"
          placeholder="Enter Release Date"
        />
        <button class="button is-primary is-fullwidth is-normal" v-on:click="updateMovie">
          <strong>Update Movie</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios"
export default {
  name: 'UpdateMovie',
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
    async updateMovie()
    {
      const result = await axios.put("http://localhost:3000/movies/" + this.$route.params.id, {
        title: this.movie.title,
        description: this.movie.description,
        release: this.movie.release,
      });
      if(result.status==200)
      {
        this.$router.push({name: 'HomePage'});
      }
      console.warn(this.movie)
    }
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get('http://localhost:3000/movies/' + this.$route.params.id)
    this.movie = result.data;
  },
};
</script>
