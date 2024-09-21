<template>
  <div class="container-xxl">
    <h2>
      <span class="mr-6 opacity-50">{{ data.index }}</span
      >{{ data.name }}
    </h2>
    <p class="my-8">
      Lorem ipsum nibh elementum commodo lectus sit, bibendum eu a cursus arcu
      mauris sagittis diam tempus porta amet auctor leo quam nec non eros. At,
      maecenas diam maecenas, urna auctor elementum quisque rutrum ipsum nec
      pellentesque. Quisque: nam sit justo urna integer, molestie donec sodales
    </p>
    <p class="p-3 rounded background-style">
      urna auctor elementum quisque rutrum ipsum nec pellentesque.
    </p>
    <p class="my-8">
      Lorem ipsum nibh elementum commodo lectus sit, bibendum eu a cursus arcu
      mauris sagittis diam tempus porta amet auctor leo quam nec non eros. At,
      maecenas diam maecenas, urna auctor elementum quisque rutrum ipsum nec
      pellentesque. Quisque: nam sit justo urna integer, molestie donec sodales
    </p>
    <p class="p-3 rounded background-style">
      Lorem ipsum nibh elementum commodo lectus sit, bibendum eu a cursus arcu
      mauris sagittis diam tempus porta amet auctor leo quam nec non eros. At,
      maecenas diam maecenas, urna auctor elementum quisque rutrum ipsum nec
      pellentesque. Quisque: nam sit justo urna integer, molestie donec sodales
    </p>
    <p class="my-8">
      Lorem ipsum nibh elementum commodo lectus sit, bibendum eu a cursus arcu
      mauris sagittis diam tempus porta amet auctor leo quam nec non eros. At,
      maecenas diam maecenas, urna auctor elementum quisque rutrum ipsum nec
      pellentesque. Quisque: nam sit justo urna integer, molestie donec sodales
    </p>
    <div id="info-img" class="flex items-center rounded">
      <div class="rounded p-3 background-style w-auto ml-4">
        <h4>Версия документа 1.10</h4>
        <span>От 20.09.2020</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data"],
};
</script>

<style lang="less">
#info-img {
  background-image: url("@/assets/img/info/infoBase.jpg");
  background-repeat: no-repeat;
  height: 120px;
}
</style>
