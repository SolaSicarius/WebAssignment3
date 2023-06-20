<template>
  <Header />
  <div class="container">
    <div class="columns is-centered">
      <div
        class="column has-text-centered is-9-fullhd is-6-desktop is-9-tablet is-12-mobile"
      >
        <br />
        <h1 class="title">Under The Dome Episode List</h1>
        <table class="table">
          <thead>
            <tr>
              <th class="has-text-centered">Episode Name</th>
              <th class="has-text-centered">Episode Summary</th>
              <th class="has-text-centered">Season</th>
              <th class="has-text-centered">Episode</th>
              <th class="has-text-centered">Release Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Cinema" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.summary }}</td>
              <td>{{ item.season }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.airdate }}</td>
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
  name: "TheaterLocation",
  components: {
    Header,
  },
  data() {
    return {
      Cinema: [],
    };
  },
  mounted() {
    axios
      .get("https://api.tvmaze.com/shows/1/episodes")
      .then((response) => {
        console.log(response.data);
        this.Cinema = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
