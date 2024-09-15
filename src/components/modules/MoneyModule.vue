<template>
  <div id="donation-module-money" class="mt-3">
    <div class="w-full rounded flex" v-for="item in money" :key="item.price">
      <div class="flex items-center justify-center" :class="'coins-' + item.name">
        <svg-vue :icon="'money-' + item.name" style="width: 42px"/>
      </div>
      <div class="ml-3">
        <span class="text-green-500">{{ item.amount | numeral('$0,0') }}</span>
        <h5 class="mt-1">{{ item.price }} руб.</h5>
      </div>
    </div>  
  </div>
</template>

<script>
  export default {
    props: { 
      money: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="less">
  #donation-module-money {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    & > div {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 15px 0px;

      .coins-gold {
        background-color: rgba(226, 166, 59, 0.2);
        width: 60px;
        height: 60px;
        border-radius: 0px 5px 5px 0px;
      }

      .coins-green {
        background-color: rgba(39, 174, 96, 0.2);
        width: 60px;
        height: 60px;
        border-radius: 0px 5px 5px 0px;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
</style>