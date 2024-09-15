<template>
  <div v-bar="{ preventParentScroll: true, scrollThrottle: 30 }">
    <div id="main" class="text-white">
      <Header />
      <div id="content">
        <router-view />
      </div>
      <Footer id="footer-container" />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header.vue'
  import Footer from '@/components/layouts/Footer.vue'

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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #0F1014;
    background-image: url('./assets/img/background.png');
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    font-family: 'Rubik', sans-serif;
  }

  #content {
    flex: 1;
  }
  
  #footer-container {
    /* flex-shrink: 0; */
  }
</style>
