import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import News from '@/components/pages/News.vue';
import StartGame from '@/components/pages/StartGame.vue';
import Donation from '@/components/pages/Donation.vue';
import BaseInfo from '@/components/pages/Guide.vue';
import Profile from '@/components/pages/Profile.vue';
import Forum from '@/components/pages/Forum.vue';
import NewsInfo from '@/components/pages/details/NewsDetails.vue';
import DonationInfo from '@/components/pages/details/DonationDetails.vue';



Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Главная',
      component: Home,
      meta: {
        title: 'ATMOS-RP | Главная | Полное погружение в игровую атмосферу RageMp'
      }
    },
    {
      path: '/news',
      name: 'Новости',
      component: News,
      props: {
        data: 'Главная'
      },
      meta: {
        title: 'ATMOS-RP | Новости'
      }
    },
    {
      path: '/news/:id',
      name: null,
      component: NewsInfo,
      props: {
        data: 'Новости'
      },
      meta: {
        title: 'ATMOS-RP | Новости'
      }
    },
    {
      path: '/startgame',
      name: 'Начало игры',
      component: StartGame,
      props: {
        data: 'Главная'
      },
      meta: {
        title: 'ATMOS-RP | Начало игры'
      }
    },
    {
      path: '/donat',
      name: 'Донат',
      component: Donation,
      props: {
        data: 'Главная'
      },
      meta: {
        title: 'ATMOS-RP | Донат'
      }
    },
    {
      path: '/donat/:id',
      name: null,
      component: DonationInfo,
      props: {
        data: 'Донат'
      },
      meta: {
        title: 'ATMOS-RP | Донат'
      }
    },
    {
      path: '/baseinfo',
      name: 'База знаний',
      component: BaseInfo,
      props: {
        data: 'Главная'
      },
      meta: {
        title: 'ATMOS-RP | База  знаний'
      }
    },
    {
      path: '/profile',
      name: 'Профиль',
      component: Profile,
      props: {
        data: 'Главная'
      },
      meta: {
        title: 'ATMOS-RP | Профиль'
      }
    },
    {
      path: '/forum',
      name: 'Форум',
      component: Forum,
      props: {
        data: 'Главная'
      },
      meta: {
        title: 'ATMOS-RP | Форум'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  linkActiveClass: 'active-nav'
});

router.afterEach((to) => {
  const defaultTitle = 'ATMOS-RP | Главная | Полное погружение в игровую атмосферу RageMp';
  document.title = to.meta.title || defaultTitle;
});

export default router;