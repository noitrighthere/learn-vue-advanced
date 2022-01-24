import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import createListView from '../views/CreateListView.js';

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
      name: 'news',
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    }
  ]
});