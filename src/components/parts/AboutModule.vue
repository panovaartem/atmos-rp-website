<template>
  <div>
    <div class="horizontal-line "></div>
    <div class="container-xxl mb-16 mt-16">
      <div class="flex">
        <div class="w-1/2 pr-12">
          <h2 class="font-bold">Особенности проекта</h2>
          <p class="mt-3">
            Цель и идея нашего проекта - максимально приблизить игру к реальной модели мира. 
            Это не означает, что мы ограничиваем вас в правах, наоборот, мы даём вам полную свободу, 
            но каждый ваш шаг должен быть сопоставим с шагом, который вы бы сделали в реальной жизни.
          </p>
          <div class="horizontal-line"></div>
          <div class="flex justify-between mt-4">
            <div class="flex flex-column">
              <span class="text-3xl font-bold">25к</span>
              <span class="opacity-50">Игроков</span>
            </div>
            <div class="flex flex-column">
              <span class="text-3xl font-bold">15</span>
              <span class="opacity-50">Организаций</span>
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
        <div class="w-1/2">
          <div id="card-image" class="rounded ml-12">
            <!-- <img src="/img/about.jpg" alt=""> -->
            <img src="#" alt="">
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