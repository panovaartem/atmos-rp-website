<template>
  <section>
    <BreadcrumbsModule :data="data" :social="false" />
    <div class="container-xxl mt-12">
      <div class="flex">
        <div class="w-1/3" id="grid-component">
          <v-select v-model="selected" :options="options" class="style-chooser" />
          <input type="text" class="w-full rounded mt-4" placeholder="Логин вашего аккаунта">
          <input type="number" class="w-full rounded mt-4" placeholder="Сумма пополнения">
          <button class="btn-style-deposit bg-blue-500 hover:bg-blue-700 text-white font-bold rounded flex items-center w-full mt-4">
            <div class="h-full w-16 bg-blue-700 flex justify-center rounded-l"><svg-vue icon="buy" style="width: 36px"/></div>
            <span class="px-4 uppercase ml-10">Пополнить счет</span>
          </button>
          <a href="" class="flex text-white opacity-50 justify-center mt-4 hover:opacity-100">
            <svg-vue icon="document" style="width: 24px"/>
            <span class="ml-2 text-base">Публичная оферта</span>
          </a>
        </div>
        <div class="w-2/3" id="grid-component">
          <div class="flex donation-help rounded p-3">
            <div id="donation-info" class="flex items-center justify-center rounded">
              <svg-vue icon="info" style="width: 44px; height: 44px;" class="icon-connection" />
            </div>
            <div class="flex flex-column ml-4">
              <h3>Покупка всех платных услуг выполняется в игре</h3>
              <span class="opacity-50">Горячая клавиша в игре (J)</span>
            </div>
          </div>
          <DonationModule />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BreadcrumbsModule from '../parts/BreadcrumbsModule.vue';
  import DonationModule from '../parts/DonationModule.vue';
  import 'vue-select/dist/vue-select.css';

  export default {
    data() {
      return {
        selected: 'ATMOS-RP #1 - Light',
        options: ['ATMOS-RP #1 - Light', 'ATMOS-RP #2 - Medium', 'ATMOS-RP #3 - Hard']
      }
    },
    components: {
      BreadcrumbsModule,
      DonationModule
    }, 
    props: { 
      data: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less">
  #donation-info {
    background-color: rgba(33, 150, 83, 0.5);
    border: 1px solid rgba(85, 237, 149, 0.5);
    width: 100px;
    height: 60px;
  }

  .donation-help {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);

    span { 
      margin-top: -5px;
    }
  }

  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 15px 25px;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: white;
  }

  .style-chooser .vs__selected {
    color:  rgba(255, 255, 255, 1);
  }

  .vs__dropdown-menu {
    color: white;
    opacity: 1;
  }

  .btn-style-deposit {
    display: flex;
    height: 60px;

    span {
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 43px;
    }
  }

  input {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 15px 30px;
    
    &::placeholder {
      color:  rgba(255, 255, 255, 0.5);
    }
  }
</style>