<template>
  <div>
    <div class="horizontal-line"></div>
    <div class="mb-16">
      <div class="flex 2xl:flex-row flex-col gap-8">
        <div class="w-full 2xl:w-1/3">
          <div class="weight-line"></div>
          <div class="uppercase font-bold mt-8">
            <span>Скидки</span
            ><span class="ml-2 opacity-50">Рюкзак “Выживший”</span>
          </div>
          <div id="bonus-card" class="w-auto mt-3 bonus-card rounded flex">
            <img
              src="@/assets/img/news/backpack.jpg"
              alt=""
              class="object-cover rounded h-36 w-36"
            />
            <div class="flex flex-col justify-between">
              <div class="flex flex-col">
                <span class="uppercase font-bold">Рюкзак</span>
                <span class="opacity-50">“Выживший”</span>
                <span class="opacity-50">24 слота / 28 кг.</span>
              </div>
              <div class="flex flex-col">
                <span class="uppercase font-bold"
                  >Скидка<span class="text-slate-400 ml-1">75%</span></span
                >
                <span class="opacity-50">До 28.09.2024</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full 2xl:w-1/3">
          <div class="weight-line"></div>
          <div class="uppercase font-bold mt-8">
            <span>Бонус недели</span
            ><span class="ml-2 opacity-50">Опыт рыбалки</span>
          </div>
          <div id="bonus-card" class="w-auto mt-3 bonus-card rounded flex">
            <img
              src="@/assets/img/news/fish.jpg"
              alt=""
              class="object-cover rounded h-36 w-36"
            />
            <div class="flex flex-col justify-between">
              <div class="flex flex-col">
                <span class="uppercase font-bold">Опыт</span>
                <span class="opacity-50">Рыбалка</span>
              </div>
              <div class="flex flex-col">
                <span class="uppercase font-bold"
                  >Бонус<span class="text-slate-400 ml-1">50%</span></span
                >
                <span class="opacity-50">До 28.09.2024</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full 2xl:w-1/3">
          <div class="weight-line"></div>
          <div class="uppercase font-bold mt-8">
            <span>События</span
            ><span class="ml-2 opacity-50">Ценные данные</span>
          </div>
          <div id="bonus-card" class="w-auto mt-3 bonus-card rounded flex">
            <img
              src="@/assets/img/news/tech.jpg"
              alt=""
              class="object-cover rounded h-36 w-36"
            />
            <div class="flex flex-col justify-between">
              <div class="flex flex-col">
                <span class="uppercase font-bold">Ценные данные</span>
                <span class="opacity-50">Раритет</span>
              </div>
              <div class="flex flex-col">
                <span class="uppercase font-bold text-slate-400 ml-1"
                  >Информация</span
                >
                <span class="opacity-50">Дата 30.09.2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#bonus-card {
  cursor: pointer;
  display: flex;
  min-height: 222px;

  img {
    margin: 15px;
  }

  div {
    margin: 5px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.weight-line {
  width: 115px;
  height: 3px;
  background-color: white;
}

.bonus-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
