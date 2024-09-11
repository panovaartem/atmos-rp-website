<template>
  <vue-custom-scrollbar id="scrollbar">
    <div id="main" class="text-white">
      <div id="content">
        <Header />
        <router-view />
      </div>
      <Footer id="footer-container" />
    </div>
  </vue-custom-scrollbar>
</template>

<script>
  import vueCustomScrollbar from 'vue-custom-scrollbar'
  import Header from './components/layouts/HeaderComponent.vue'
  import Footer from './components/layouts/FooterComponent.vue'

  export default {
    components: {
      vueCustomScrollbar,
      Header,
      Footer,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  #scrollbar {
    height: 100%;
    background-color: #0F1014;
  }
  #main {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0F1014;
    // background-image: url('/img/background.png');
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    font-family: 'Rubik', sans-serif;
  }

  #content {
    flex: 1 0 auto;
  }
  
  #footer-container {
    flex-shrink: 0;
  }
</style>