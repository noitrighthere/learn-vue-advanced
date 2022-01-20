<template>
  <div>
    <div v-for="(item, index) in ask" :key="index">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: []
    }
  },
  // 컴포넌트가 생성되자마자 실행되는 로직(life cycle hook)
  created() {
    var vm = this;
    fetchAskList()
      .then(function(response) {
        vm.ask = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  
}
</script>

<style>

</style>