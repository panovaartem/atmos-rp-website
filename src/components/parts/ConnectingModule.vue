<template>
  <div>
    <div class="container-xxl mt-12">
      <h2>Как подключиться к серверу?</h2>
      <div id="image-connect" class="rounded flex items-center mt-6">
        <div class="rounded px-10 py-2 ml-16 flex items-center">
          <span class="opacity-50">Server IP:</span>
          <span class="opacity-100 ml-2">{{ server.ip }}</span>
          <span  class="opacity-50 mx-4">|</span>
          <span class="opacity-50">Игроков онлайн:</span>
          <span class="opacity-100 ml-2">{{ server.players }}</span>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    props: { 
      server: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="less">
  #image-connect {
    width: 100%;
    height: 180px;
    border: 1px solid rgba(242, 242, 242, 0.3);
    background-image: url('../../assets/img/start/connect.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;

    div {
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(0, 0, 0, 1);
      font-size: 24px;
      width: auto;
    }
  }
</style>