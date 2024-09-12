import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/container/HomeComponent.vue';
import News from '../components/container/NewsComponent.vue';
import NewsInfo from '../components/container/NewsInfoComponent.vue';
import StartGame from '../components/container/StartGameComponent.vue';
import Donation from '../components/container/DonationComponent.vue';
import DonationInfo from '../components/container/DonationInfoComponent.vue';
import BaseInfo from '../components/container/BaseInfoComponent.vue';
import Profile from '../components/container/ProfileComponent.vue';
import Forum from '../components/container/ForumComponent.vue';



Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: Home
    },
    {
      path: '/news',
      name: 'Новости',
      component: News,
      props: { data: 'Главная' }
    },
    {
      path: '/news/:id',
      name: null,
      component: NewsInfo,
      props: { data: 'Новости' }
    },
    {
      path: '/startgame',
      name: 'Начало игры',
      component: StartGame,
      props: { data: 'Главная' }
    },
    {
      path: '/donat',
      name: 'Донат',
      component: Donation,
      props: { data: 'Главная' }
    },
    {
      path: '/donat/:id',
      name: null,
      component: DonationInfo,
      props: { data: 'Донат' }
    },
    {
      path: '/baseinfo',
      name: 'База знаний',
      component: BaseInfo,
      props: { data: 'Главная' }
    },
    {
      path: '/profile',
      name: 'Профиль',
      component: Profile,
      props: { data: 'Главная' }
    },
    {
      path: '/forum',
      name: 'Форум',
      component: Forum,
      props: { data: 'Форум' }
    },
    {
      path: '*', 
      redirect: '/'
    }
  ],
  linkActiveClass: 'active-nav'
});

export default router;