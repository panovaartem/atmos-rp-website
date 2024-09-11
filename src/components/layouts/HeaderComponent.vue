<template>
  <div>
    <div id="header" class="container-xxl flex items-center justify-between">
      <router-link :to="{ name: 'Главная' }">
        <svg-vue icon="logo" style="width: 136px; height: 35px;" />
      </router-link>
      <div class="flex items-center nav-container">
        <router-link :to="{ name: 'Главная' }" class="flex items-center text-white" exact>
          <svg-vue icon="home" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Главная</span>
        </router-link>
        <router-link :to="{ name: 'Новости' }" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="news" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Новости</span>
        </router-link>
        <a href="http://atmos-rp.test/forum/" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="forum" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Форум</span>
        </a>
        <router-link :to="{ name:'База знаний' }" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="info" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">База знаний</span>
        </router-link>
        <router-link :to="{ name: 'Донат' }" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="donat" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Донат</span>
        </router-link>
      </div>
      <router-link :to="{ name:'Профиль' }">
        <button class="btn-style-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded flex items-center">
          <div class="h-full w-10 bg-blue-700 flex justify-center rounded-l"><svg-vue icon="profile" style="width: 16px"/></div>
          <span class="px-4 font-normal">Профиль</span>
        </button>
      </router-link>
    </div>
    <div class="horizontal-line"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  #header {
    height: 100px;
  }

  .nav-container {
    .active-nav {
      opacity: 1;
    }

    a {
      opacity: 0.5;
    }
  }

  .btn-style-1 {
    display: flex;
    height: 39px;
  }
</style>