<template>
  <div>
    <div class="horizontal-line "></div>
    <div class="mt-16">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-1/2">
          <h2 class="font-bold">Особенности проекта</h2>
          <p class="mt-3">
            Проект ATMOS RP для GTA 5 направлен на полное погружение в мир выживания. 
            Это не ограничивает вашу свободу действий — наоборот, вы вольны поступать 
            так, как считаете нужным. Однако каждый ваш шаг должен отражать реальный выбор 
            в условиях борьбы за ресурсы, выживания и противостояния анклавам.
          </p>
          <div class="horizontal-line"></div>
          <div class="flex justify-between mt-4">
            <div class="flex flex-column">
              <span class="text-3xl font-bold">25к</span>
              <span class="opacity-50">Игроков</span>
            </div>
            <div class="flex flex-column">
              <span class="text-3xl font-bold">16</span>
              <span class="opacity-50">Анклавов</span>
            </div>
            <div class="flex flex-column">
              <span class="text-3xl font-bold">874</span>
              <span class="opacity-50">Предмета</span>
            </div>
            <div class="flex flex-column">
              <span class="text-3xl font-bold">100%</span>
              <span class="opacity-50">Погружения</span>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <div id="card-image" class="rounded h-full">
            <img src="@/assets/img/about.jpg" alt="">
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  #card-image {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);

    img {
      padding: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  p {
    font-size: 18px;
    line-height: 36px;
    color: #F2F2F2;
    opacity: 0.7;
  }
</style>