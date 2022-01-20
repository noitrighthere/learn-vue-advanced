<template>
  <div>
    <p v-for="(item, index) in fetchedAsk" :key="index">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
    'fetchedAsk'
    ]),
    // #2
    // ...mapState({ 
    //   ask: state => state.ask
    // })

    // # 1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  // 컴포넌트가 생성되자마자 실행되는 로직(life cycle hook)
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  
}
</script>

<style>

</style>