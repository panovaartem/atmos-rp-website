<template>
  <section class="mb-8">
    <h2 class="mt-4">Привилегии</h2>
    <span class="text-base opacity-50">Срок действия от начала покупки - 30 дней</span>
    <StatusModule :status="status" />

    <h2 class="mt-4">Валюта</h2>
    <span class="text-base opacity-50">Игровая валюта начисляется в течении 5 минут после оплаты</span>
    <MoneyModule :money="money" />
  </section>
</template>

<script>
  import StatusModule from './StatusModule.vue';
  import MoneyModule from './MoneyModule.vue';

  export default {
    data() {
      return {
        status: [
          {
            name: 'gold',
            price: 800,
            link: '/gold'
          },
          {
            name: 'silver',
            price: 450,
            link: '/silver'
          },
          {
            name: 'bronze',
            price: 250,
            link: '/bronze'
          },
          {
            name: 'super +',
            price: 1900,
            link: '/super'
          }
        ],
        money: [
          {
            name: 'gold',
            amount: 100000,
            price: 250,
            link: '/money-one'
          },
          {
            name: 'gold',
            amount: 230000,
            price: 800,
            link: '/money-two'
          },
          {
            name: 'gold',
            amount: 500000,
            price: 1150,
            link: '/money-three'
          },
          {
            name: 'green',
            amount: 1000000,
            price: 1900,
            link: '/money-four'
          }
        ],
        items: []
      }
    },
    components: {
      StatusModule,
      MoneyModule
    }
  }
</script>

<style lang="less">
  
</style>