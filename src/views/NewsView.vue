<template>
  <div>
    <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
      .then(response => {
        console.log(this);
        this.users = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
}
</script>

<style>

</style>