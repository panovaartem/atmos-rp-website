<template>
  <div>
    <div class="flex donation-help rounded p-3 mt-4" id="donation-module">
      <div :class="`img-style-${i+1}`" class=" rounded flex flex-column items-center justify-end tb-5"
        v-for="(item, i) in privileges" :key="i">
        <h2 class="uppercase ">{{ item.name }}</h2>
        <span class="opacity-50 mb-4">{{ item.parameters }}</span>
      </div>
    </div>
    <div class="mt-3 donation-help flex items-center rounded">
      <div class="donation-help ml-3 flex m-3 p-3 rounded">
        <svg-vue icon="inventory" style="width: 70px; height: 70px;" />
      </div>
      <div class="flex flex-column ml-3">
        <h2>Шанс сохранения инвентаря после смерти</h2>
        <span>После смерти у вас будет шанс <span class="text-green-500">80%</span> сохранить содержимое
          инвентаря</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        privileges: [
          {
            name: 'Cклад',
            parameters:'+800 000 кг'  
          },
          {
            name: 'Груз',
            parameters:'+10 000 кг'
          },
          {
            name: 'Стак',
            parameters:'900 предметов'
          },
        ],
      } 
    }
  }
</script>

<style lang="less">
  #donation-module {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  .img-style-1 {
    background: linear-gradient(180deg, rgba(15, 16, 20, 0) 0%, #0F1014 100%), url("@/assets/img/donate/stock.jpg") no-repeat;
    height: 300px;
    background-size: cover;
  }
  .img-style-2 {
    background: linear-gradient(180deg, rgba(15, 16, 20, 0) 0%, #0F1014 100%), url("@/assets/img/donate/cargo.jpg") no-repeat;
    height: 300px;
    background-size: cover;
  }
  .img-style-3 {
    background: linear-gradient(180deg, rgba(15, 16, 20, 0) 0%, #0F1014 100%), url("@/assets/img/donate/stack.jpg") no-repeat;
    height: 300px;
    background-size: cover;
  }
  .donation-help {
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
</style>