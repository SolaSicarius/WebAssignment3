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
          v-model="Movies.title"
          placeholder="Enter Movie Title"
        />
        <input
          class="input is-primary is-normal"
          type="text"
          name="description"
          v-model="Movies.description"
          placeholder="Enter Description"
        />
        <input
          class="input is-primary is-normal"
          type="text"
          name="release"
          v-model="Movies.release"
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
export default {
  name: "AddMovie",
  components: {
    Header,
  },
  data() {
    return {
      Movies: {
        title: "",
        description: "",
        release: "",
      },
    };
  },
  methods: {
    addMovie() {
      console.warn(this.Movies);
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
