<template>
  <div>
    <div class="horizontal-line"></div>
    <div id="footer" class="container-xxl flex items-center justify-between">
      <div class="flex items-center">
        <router-link :to="{ name: 'Главная' }">
          <svg-vue icon="logo" style="width: 136px; height: 35px;" />
        </router-link>
        <span class="ml-16 opacity-25">© 2024 atmos-rp — </span><a href="#" class="ml-1">@xttago</a>
      </div>
      <div class="flex items-center">
        <a href="#"><svg-vue icon="vk" style="width: 28px; height: 28px;" class="opacity-50 hover:opacity-100" /></a>
        <a href="#" class="ml-3"><svg-vue icon="youtube" style="width: 28px; height: 28px;" class="opacity-50 hover:opacity-100" /></a>
        <a href="#" class="ml-3"><svg-vue icon="discord" style="width: 28px; height: 28px;" class="opacity-50 hover:opacity-100" /></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  #footer {
    height: 85px;
    font-size: 16px;
  }
</style>