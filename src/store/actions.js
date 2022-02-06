import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
  // promise
  /*  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  },
  */
  // async
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // promise
  /*
  FETCH_JOBS({commit}) {
    return fetchJobsList()
      .then(({
        data
      }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  */
 // await
   async FETCH_JOBS({ commit }) {
     try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response
     } catch (error) {
      console.log(error);
     }
   },
  /* Promise
  FETCH_ASK({commit}) {
    return fetchAskList()
      .then(({
        data
      }) => {
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  */
  // Async
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
} 