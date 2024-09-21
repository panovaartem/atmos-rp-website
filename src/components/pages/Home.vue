<template>
  <section class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row justify-between items-end mt-3 lg:mt-16">
      <div class="lg:w-1/2 lg:pr-12 mt-10 mb-8 md:mb-12">
        <div class="flex space-x-3">
          <span class="badge-style rounded">Roleplay</span>
          <span class="badge-style rounded">Atmosphere</span>
          <span class="badge-style rounded">Apocalypse</span>
        </div>
        <h1 class="text-3xl xl:text-4xl 2xl:text-5xl font-bold uppercase leading-relaxed mt-6 xl:mt-12">
          <span class="italic">Atmos Rp</span> - Полное <span class="gradient-text">погружение</span> в игровую атмосферу
        </h1>
        <p class="text-base xl:text-xl leading-relaxed w-full lg:w-3/4 xl:mt-4">
          Уникальная возможность окунуться в максимально реалистичную модификацию GTA 5 RolePlay
        </p>
        <button class="p-2 bg-red-900 hover:bg-red-700 button-start xl:mt-6 flex justify-center items-center" @click.prevent="enterPage('Начало игры')">
          <svg-vue icon="start" style="width: 44px; height: 44px;" />
          <span class="uppercase ml-6 mr-3">Начать играть</span>
        </button>
      </div>
      <img class="hidden lg:block w-full md:w-1/2 lg:w-1/3 mt-6 lg:mt-0" src="@/assets/img/person.png" alt="Person">
    </div>
    <BonusModule />
    <AboutModule />
  </section>
</template>

<script>
  import BonusModule from '@/components/modules/BonusModule.vue';
  import AboutModule from '@/components/modules/AboutModule.vue';

  export default {
    components: {
      BonusModule,
      AboutModule,
    },
    methods: {
      enterPage(page) {
        this.$router.push({ name: page });
      }
    }
  }
</script>

<style lang="less">
  .badge-style {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
  }
  .button-start {
    color: white;
    border-radius: 9999px;
  }
  .gradient-text {
    color: rgba(255, 255, 255, 0.3);
  }
</style>
