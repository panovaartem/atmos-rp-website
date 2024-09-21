<template>
  <section>
    <BreadcrumbsModule :data="data" :social="false" :image="true" />
    <div class="container-xxl mt-12">
      <div class="flex gap-8">
        <div class="w-1/3">
          <div class="flex background-style rounded p-3 h-24">
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
              <h3>Меню персонажа</h3>
              <span class="opacity-50">Горячая клавиша в игре (M)</span>
            </div>
          </div>
          <StatisticBonusModule :list="list" :header="header" :warn="23" />
        </div>

        <div class="w-2/3">
          <div class="flex">
            <div
              class="rounded p-3 h-24 background-style flex items-center w-full justify-between"
            >
              <div class="flex ml-2">
                <div style="position: relative">
                  <div id="player-online"></div>
                  <img
                    src="@/assets/img/profile/ava.png"
                    alt=""
                    style="widht: 65px; height: 65px"
                  />
                </div>
                <div class="flex flex-column ml-4">
                  <h2>Jesse Redman</h2>
                  <span class="text-base opacity-75 -mt-2"
                    >Привелегия:
                    <span class="uppercase text-yellow-500 font-bold mx-2">
                      gold</span
                    >
                    (37 дней)
                  </span>
                </div>
              </div>
              <div class="flex">
                <router-link
                  :to="{ name: 'Главная' }"
                  class="background-style p-2 px-3 rounded mr-4"
                >
                  <svg-vue icon="setting" style="width: 25px; height: 25px" />
                </router-link>
                <router-link
                  :to="{ name: 'Главная' }"
                  class="flex text-white background-style p-2 px-3 rounded mr-3"
                >
                  <svg-vue icon="close" style="width: 25px; height: 25px" />
                  <span class="ml-2">Выход</span>
                </router-link>
              </div>
            </div>
          </div>
          <ProfileRightSideModule :progress="progress" :license="license" />
        </div>
      </div>
    </div>
    <AutomobileModule :cars="cars" />
    <WorkSkillsModule :work="work" />

    <div class="container-xxl mt-12">
      <h2 class="flex ml-3 mb-4">Налоги на недвижимость</h2>
      <div>
        <div class="background-style rounded flex p-3">
          <div>
            <img
              src="@/assets/img/profile/taxes-money.png"
              alt=""
              style="widht: 65px; height: 65px"
            />
          </div>
          <div class="ml-3">
            <h4>
              Cтавки по налогам снижены -
              <span class="uppercase text-yellow-500 font-bold opacity-75"
                >gold</span
              >
            </h4>
            <div class="flex">
              <span class="opacity-50">Гараж: </span>
              <span class="text-blue-500 ml-1">$300/день</span>
              <span class="opacity-50 ml-2">| Квартира:</span>
              <span class="text-blue-500 ml-1">$800/день</span>
              <span class="opacity-50 ml-2">| Загородный дом:</span>
              <span class="text-blue-500 ml-1">$2000/день</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GunSkillModule :gunskills="gunskills" />
    <UpgradeModule />
  </section>
</template>

<script>
import BreadcrumbsModule from "@/components/modules/BreadcrumbsModule.vue";
import StatisticBonusModule from "@/components/modules/StatisticBonusModule.vue";
import AutomobileModule from "@/components/modules/AutomobileModule.vue";
import ProfileRightSideModule from "@/components/modules/ProfileRightSideModule.vue";
import WorkSkillsModule from "@/components/modules/WorkSkillsModule.vue";
import GunSkillModule from "@/components/modules/GunSkillModule.vue";
import UpgradeModule from "@/components/modules/UpgradeModule.vue";

export default {
  data() {
    return {
      header: "Cтатистика",
      cars: [
        {
          name: "Yosemite Rancher",
          hangar: 23,
          mileage: 300,
          image: "/assets/img/profile/car1.jpg",
        },
        {
          name: "Peyote Custom",
          hangar: null,
          mileage: 72,
          image: "/assets/img/profile/car2.jpg",
        },
        {
          name: "Caracara 4x4",
          hangar: null,
          mileage: 25,
          image: "/assets/img/profile/car3.jpg",
        },
      ],
      list: [
        {
          name: "Время в игре",
          key: "10 часов",
        },
        {
          name: "Игровой возраст",
          key: "23 года",
        },
        {
          name: "Баланс в карманах",
          key: "5 300 крышек",
        },
        {
          name: "Баланс в хранилище",
          key: "17 950 крышек",
        },
        {
          name: "Уровень преступности",
          key: "Нет",
        },
        {
          name: "Анклав",
          key: "Пепельный Союз",
        },
      ],
      license: [
        {
          icon: "gun-1",
          status: "background-style",
          check: null,
        },
        {
          icon: "car-1",
          status: "license",
          check: "active",
        },
        {
          icon: "delivery-truck-1",
          status: "background-style",
          check: null,
        },
        {
          icon: "taxi-1",
          status: "background-style",
          check: null,
        },
        {
          icon: "airplane-1",
          status: "background-style",
          check: null,
        },
        {
          icon: "sea-life-1",
          status: "background-style",
          check: null,
        },
      ],
      progress: [
        {
          name: "Вождение",
          percent: 50,
        },
        {
          name: "Владение оружием",
          percent: 25,
        },
        {
          name: "Сила",
          percent: 80,
        },
        {
          name: "Голод",
          percent: 95,
        },
        {
          name: "Жажда",
          percent: 10,
        },
      ],
      work: [
        {
          icon: "farmer",
          name: "Фермер",
          lvl: 3,
        },
        {
          icon: "axe",
          name: "Лесоруб",
          lvl: 1,
        },
        {
          icon: "cook-hat",
          name: "Повар",
          lvl: 29,
        },
        {
          icon: "electric-car1",
          name: "Механник",
          lvl: 30,
        },
        {
          icon: "streetcleaner",
          name: "Уборщик улиц",
          lvl: 7,
        },
        {
          icon: "recycle",
          name: "Сборщик",
          lvl: 1,
        },
        {
          icon: "sea-life-1",
          name: "Рыболов",
          lvl: 14,
        },
        {
          icon: "divider",
          name: "Изготовитель",
          lvl: 11,
        },
        {
          icon: "parcel",
          name: "Грузчик",
          lvl: 23,
        },
        {
          icon: "taxi-1",
          name: "Таксист",
          lvl: 9,
        },
        {
          icon: "drill",
          name: "Строитель",
          lvl: 30,
        },
        {
          icon: "email",
          name: "Почтальон",
          lvl: 1,
        },
        {
          icon: "coal",
          name: "Шахтер",
          lvl: 0,
        },
        {
          icon: "delivery-truck-1",
          name: "Дальнобольщик",
          lvl: 9,
        },
        {
          icon: "oil-barrel",
          name: "Нефтянник",
          lvl: 1,
        },
      ],
      gunskills: [
        {
          icon: "pistol",
          name: "Пистолеты",
          percent: 30,
        },
        {
          icon: "machine-gun",
          name: "Пулементы",
          percent: 30,
        },
        {
          icon: "uzi",
          name: "Пистолет-пулеметы",
          percent: 30,
        },
        {
          icon: "ak-47",
          name: "Винтовки",
          percent: 30,
        },
        {
          icon: "shotgun",
          name: "Дробовики",
          percent: 30,
        },
        {
          icon: "sniper-rifle",
          name: "Снайперские винтовки",
          percent: 30,
        },
      ]
    };
  },
  components: {
    BreadcrumbsModule,
    StatisticBonusModule,
    AutomobileModule,
    ProfileRightSideModule,
    WorkSkillsModule,
    GunSkillModule,
    UpgradeModule,
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
#player-online {
  width: 15px;
  height: 15px;
  background-color: rgb(66, 226, 66);
  position: absolute;
  margin-left: 55px;
  margin-top: 45px;
  border-radius: 100%;
}
</style>
