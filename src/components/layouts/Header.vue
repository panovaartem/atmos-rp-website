<template>
  <div>
    <div id="header" class="container flex items-center justify-between">
      <router-link :to="{ name: 'Главная' }">
        <svg-vue icon="logo-color" style="width: 139px; height: 35px;" />
      </router-link>
      <div class="items-center nav-container hidden xl:flex">
        <router-link :to="{ name: 'Главная' }" class="flex items-center text-white" exact>
          <svg-vue icon="home" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Главная</span>
        </router-link>
        <router-link :to="{ name: 'Новости' }" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="news" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Новости</span>
        </router-link>
        <router-link :to="{ name:'Форум' }" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="forum" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Форум</span>
        </router-link>
        <router-link :to="{ name:'База знаний' }" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="info" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">База знаний</span>
        </router-link>
        <router-link :to="{ name: 'Донат' }" class="flex items-center ml-10 text-white" exact>
          <svg-vue icon="donat" style="width: 16px; height: 16px;" />
          <span class="ml-2 text-lg">Донат</span>
        </router-link>
      </div>
      <router-link :to="{ name:'Профиль' }" class="flex gap-3">
        <button class="btn-style-1 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded flex items-center">
          <div class="h-full w-10 bg-slate-700 flex justify-center items-center rounded-l">
            <svg-vue icon="profile" style="width: 16px"/>
          </div>
          <span class="px-4 font-normal">Профиль</span>
        </button>
        <button class="block xl:hidden btn-style-1 text-white font-bold rounded flex items-center">
          <div class="h-full w-10 bg-zinc-950 hover:bg-zinc-900 flex justify-center items-center rounded">
            <svg-vue icon="profile" style="width: 16px"/>
          </div>
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
  a, .router-link {
    text-decoration: none !important;  // Отключает подчеркивание для всех ссылок
  }

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

    a:hover {
      opacity: 1;
    }
  }

  .btn-style-1 {
    display: flex;
    height: 39px;
  }
</style>