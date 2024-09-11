import Vue from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash';
import vSelect from 'vue-select';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import lodash from 'lodash';
import router from './router/router';
import KProgress from 'k-progress';

import './icons.js';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.config.productionTip = false

Vue.component('v-select', vSelect);
Vue.use(vueNumeralFilterInstaller, { locale: 'en' });
Vue.use(VueLodash, { name: 'custom', lodash: lodash });
Vue.component('k-progress', KProgress);

new Vue({
  router, // добавляем роутер в экземпляр Vue
  render: h => h(App)
}).$mount('#app');