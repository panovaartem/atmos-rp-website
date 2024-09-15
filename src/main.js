import Vue from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash';
import vSelect from 'vue-select';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import lodash from 'lodash';
import router from './router';
import KProgress from 'k-progress';
import Vuebar from 'vuebar';
import SvgIcon from '@/components/common/SvgIcon.vue';

import './assets/styles/main.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.config.productionTip = false

Vue.component('svg-vue', SvgIcon);
Vue.component('v-select', vSelect);
Vue.use(vueNumeralFilterInstaller, { locale: 'en' });
Vue.use(VueLodash, { name: 'custom', lodash: lodash });
Vue.use(Vuebar);
Vue.component('k-progress', KProgress);

new Vue({
  router, // добавляем роутер в экземпляр Vue
  render: h => h(App)
}).$mount('#app');