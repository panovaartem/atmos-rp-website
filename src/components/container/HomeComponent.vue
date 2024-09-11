<template>
  <section>
    <div class="container-xxl">
      <div class="mt-3 flex">
        <div class="mt-16 w-2/3 pr-12">
          <span class="badge-style rounded">Roleplay</span>
          <span class="badge-style rounded ml-3">Atmosphere</span>
          <span class="badge-style rounded ml-3">GTA 5</span>
          <h1 class="uppercase font-bold leading-relaxed mt-6">Atmos Rp - Полное <span class="gradient-text">погружение</span> в игровую атмосферу</h1>
          <p class="text-xl leading-relaxed w-3/4">Уникальная возможность окунуться в максимально реалистичную модификацую GTA 5 RolePlay</p>
          <button class="button-start mt-8 flex justify-center items-center" @click.prevent="enterPage('Начало игры')">
            <svg-vue icon="start" style="width: 44px; height: 44px;" />
            <span class="uppercase ml-6">Начать играть</span>
          </button>
        </div>
        <img class="w-1/3 w-auto" src="@/assets/img/person.png" alt="#">
      </div>
    </div>
    <BonusModule />
    <AboutModule />
  </section>
</template>

<script>
  import BonusModule from '../parts/BonusModule.vue';
  import AboutModule from '../parts/AboutModule.vue';

  export default {
    components: {
      BonusModule,
      AboutModule
    },
    methods: {
      enterPage(page) {
        this.$router.push({ name: page });
      }
    }
  }
</script>

<style lang="less">
  h1 {
    font-size: 48px;
  }
  
  .badge-style {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 7px 12px;
  }

  .gradient-text {
    background: linear-gradient(180deg, #0085FF 0%, #B1DAFF 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .button-start {
    width: 450px;
    height: 80px;
    background: linear-gradient(91.81deg, #1857AB 0%, #5B95E2 100%);
    border: 3px solid #5B95E2;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 10px 2px #003780;
    border-radius: 5px;

    span {
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 43px;
    }

    &:hover {
      filter: brightness(1.15);
    }
  }
</style>