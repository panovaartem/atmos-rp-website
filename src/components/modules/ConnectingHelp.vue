<template>
  <div>
    <div class="mt-10 mb-16">
      <div class="connecting-help rounded p-6 flex flex-column">
        <div class="flex">
          <div
            id="connecting-info"
            class="flex items-center justify-center rounded"
          >
            <svg-vue
              icon="info"
              style="width: 44px; height: 44px"
              class="icon-connection"
            />
          </div>
          <div class="flex flex-column ml-4">
            <h3>Войдите в лаунчер RAGE MP</h3>
            <span class="opacity-50"
              >В правом верхнем углу лаунчера необходимо нажать на иконку
              подключения и вписать IP нашего сервера</span
            >
          </div>
        </div>
        <div class="flex items-center flex-column">
          <img src="@/assets/img/start/info.jpg" alt="" class="mt-4 rounded" />
          <span class="opacity-50 mt-4"
            >Или вписать в поиск ключевое слово “ATMOS” и выбрать наш сервер
            врунчую</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.connecting-help {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);

  img {
    border: 1px solid rgba(242, 242, 242, 0.15);
  }
}

#connecting-info {
  background-color: rgba(33, 150, 83, 0.5);
  border: 1px solid rgba(85, 237, 149, 0.5);
  width: 100px;
  height: 60px;
}

.icon-connection {
  path {
    fill: #27ae60;
  }
}
</style>
