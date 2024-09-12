<template>
  <div v-bar="{ preventParentScroll: true, scrollThrottle: 30 }">
    <div id="main" class="text-white">
      <div id="content">
        <Header />
        <router-view />
      </div>
      <Footer id="footer-container" />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/layouts/HeaderComponent.vue'
  import Footer from '@/components/layouts/FooterComponent.vue'

  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  #main {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0F1014;
    background-image: url('./assets/img/background.png');
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