<template>
  <div id="breadcrumbs" :class="{bgi: image == true }">
    <div class="container-xxl py-8 font-bold flex justify-between">
      <div class="flex items-center">
        <router-link :to="{ name: data}">
          <svg-vue v-if="data == 'Главная'" icon="home" style="width: 40px; height: 40px;" class="opacity-50 hover:opacity-100"/>
          <span v-else class="uppercase opacity-50 hover:opacity-100 text-white">{{ data }}</span>
        </router-link>
        <span class="opacity-25 ml-3">/</span>
        <span class="ml-3 uppercase">{{ getName() }}</span>
      </div>
      <div class="flex items-center" v-if="social">
        <a href="">
          <div id="social-crumbs" class="flex items-center rounded">
            <div class="bg-youtube p-2 rounded">
              <svg-vue icon="youtube" style="width: 28px; height: 28px;" />
            </div>
            <span class="uppercase text-2xl ml-3 text-white">Youtube</span>
          </div>
        </a>
        <a href="" class="ml-4">
          <div id="social-crumbs" class="flex items-center rounded">
            <div class="bg-discord p-2 rounded">
              <svg-vue icon="discord" style="width: 28px; height: 28px;" />
            </div>
            <span class="uppercase text-2xl ml-3 text-white">Discord</span>
          </div>
        </a>
        <a href="" class="ml-4">
          <div id="social-crumbs" class="flex items-center rounded">
            <div class="bg-vk p-2 rounded">
              <svg-vue icon="vk" style="width: 28px; height: 28px;" />
            </div>
            <span class="uppercase text-2xl ml-3 text-white">Вконтакте</span>
          </div>
        </a>
      </div>
    </div>
    <div class="horizontal-line"></div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: String,
        required: true
      },
      social: {
        type: Boolean,
        default: false
      },
      image:{
        type: Boolean,
        default: false
      }
    },
    methods: {
      getName() {
        let name;
        if (this.$route.name) name = this.$route.name;
        else name = this.$route.params.id;
        name = name.replace(/-/g, ' ');
        return name;
      }
    }
  }
</script>

<style lang="less">
  #breadcrumbs {
    font-size: 36px;

    a {
      text-decoration: none;
    }
  }

  .bgi {
    // background-image: url('/img/breadcrumbs.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  #social-crumbs {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
</style>