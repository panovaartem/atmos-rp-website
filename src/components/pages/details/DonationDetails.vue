<template>
  <section>
    <BreadcrumbsModule :data="data" :social="false" />
    <div class="container-xxl mt-12">
      <div class="flex gap-8">
        <div class="w-1/3">
          <div
            class="w-full rounded flex justify-center items-center flex-column"
          >
            <div
              class="rounded w-full h-24 flex items-center justify-center flex-column"
              :class="$route.params.id"
            >
              <h2 class="uppercase">{{ $route.params.id }}</h2>
              <span class="uppercase text-sm opacity-25">Статус</span>
            </div>
          </div>

          <StatisticBonusModule :list="list" :header="header" :warn="false" />
          <button
            class="btn-style-deposit bg-slate-600 hover:bg-slate-700 text-white font-bold rounded flex items-center w-full mt-8"
          >
            <div class="h-full w-16 bg-slate-700 flex justify-center rounded-l">
              <svg-vue icon="buy" style="width: 36px" />
            </div>
            <span class="px-4 uppercase ml-12">Купить статус</span>
          </button>
        </div>

        <div class="w-2/3">
          <div class="flex donation-help rounded p-3">
            <div
              id="donation-info"
              class="flex items-center justify-center rounded"
            >
              <svg-vue
                icon="info"
                style="width: 44px; height: 44px"
                class="icon-connection"
              />
            </div>
            <div class="flex flex-column ml-4">
              <h3>
                Стоимость услуги на 30 дней -
                <span class="text-green-500">800 рублей</span>
              </h3>
              <span class="opacity-50"
                >Если у вас имеется активная услуга, покупка новой прибавит 30
                дней</span
              >
            </div>
          </div>
          <DonationBlockModule />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadcrumbsModule from "@/components/modules/BreadcrumbsModule.vue";
import StatisticBonusModule from "@/components/modules/StatisticBonusModule.vue";
import DonationBlockModule from "@/components/modules/DonationBlockModule.vue";

export default {
  data() {
    return {
      header: "Бонусы",
      list: [
        {
          name: "Опыт на всех работах",
          key: "100%",
        },
        {
          name: "Бонус зарплат",
          key: "2х",
        },
        {
          name: "Переносимый на вес",
          key: "+60кг",
        },
        {
          name: "Обработка материалов",
          key: "из склада",
        },
        {
          name: "Скорость сборки",
          key: "0 сек",
        },
        {
          name: "Бонус сбора ресурсов",
          key: "2х",
        },
      ],
    };
  },
  components: {
    BreadcrumbsModule,
    StatisticBonusModule,
    DonationBlockModule,
  },
  props: {
    data: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less">
.gold {
  background: linear-gradient(180deg, #0f1014 0%, #574400 100%);
  border: 1px solid #ffc700;

  h2 {
    color: #ffc700;
  }
}

.silver {
  background: linear-gradient(180deg, #0f1014 0%, #3c3c3c 100%);
  border: 1px solid #d3d3d3;

  h2 {
    color: #d3d3d3;
  }
}

.bronze {
  background: linear-gradient(180deg, #0f1014 0%, #491a00 100%);
  border: 1px solid #de5000;

  h2 {
    color: #de5000;
  }
}

.super {
  background: linear-gradient(180deg, #0f1014 0%, #003814 100%);
  border: 1px solid #00ff66;

  h2 {
    color: #00ff66;
  }
}
</style>
