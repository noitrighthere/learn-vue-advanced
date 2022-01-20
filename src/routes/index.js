import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'

Vue.use(VueRouter);

export const router = new VueRouter({
  // #(해시)값을 없앰
  mode: 'history',
  // 라우터에 대한 정보를 관리하는 객체
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path : url 주소
      path: '/news',
      // component : url 주소로 갔을 때 표시될 컴포넌트 (페이지)
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
  ]
});