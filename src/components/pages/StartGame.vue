<template>
  <section>
    <BreadcrumbsModule :data="data" :social="true" />
    <div class="container-xxl">
      <div class="flex mt-16 gap-8">
        <div class="w-1/3" id="grid-component">
          <div class="start-card rounded">
            <div class="start-number w-12 h-12 bg-white rounded flex justify-center items-center"><span class="text-black text-3xl font-bold">1</span></div>
            <div class="p-8 mt-2">
              <h2 class="font-bold">Лицензция игры</h2>
              <span class="start-block opacity-75 font-light">Для игры на наших серверах необходимо иметь лицензию игры GTA 5</span>
              <img src="@/assets/img/start/1.jpg" alt="#" class="w-full h-auto mt-2 object-cover rounded">
            </div>
            <button class="flex items-center justify-between w-full bg-buttonstart py-3 px-4">
              <div class="w-10 h-10 bg-black bg-opacity-50 flex items-center justify-center rounded">
                <svg-vue icon="steam" style="width: 20px; height: 20px;" />
              </div>
              <span>Купить в STEAM</span>
              <div class="w-10 h-10"></div>
            </button>
          </div>
        </div>
        <div class="w-1/3" id="grid-component">
          <div class="start-card rounded">
            <div class="start-number w-12 h-12 bg-white rounded flex justify-center items-center"><span class="text-black text-3xl font-bold">2</span></div>
            <div class="p-8 mt-2">
              <h2 class="font-bold">RAGE MP Лаунчер</h2>
              <span class="start-block opacity-75 font-light">Для подключения к серверу необходимо скачать лаунчер RAGE MP</span>
              <img src="@/assets/img/start/2.jpg" alt="#" class="w-full h-auto mt-2 object-cover rounded">
            </div>
            <button class="flex items-center justify-between w-full bg-buttonstart py-3 px-4">
              <div class="w-10 h-10 bg-black bg-opacity-50 flex items-center justify-center rounded">
                <svg-vue icon="download" style="width: 20px; height: 20px;" />
              </div>
              <span>Скачать RAGE MP</span>
              <div class="w-10 h-10"></div>
            </button>
          </div>
        </div>
        <div class="w-1/3" id="grid-component">
          <div class="start-card rounded">
            <div class="start-number w-12 h-12 bg-white rounded flex justify-center items-center"><span class="text-black text-3xl font-bold">3</span></div>
            <div class="p-8 mt-2">
              <h2 class="font-bold">Регистрация</h2>
              <span class="start-block opacity-75 font-light">Вы можете зарегистрировать аккаунт в игре или на сайте, после чего можно играть</span>
              <img src="@/assets/img/start/3.jpg" alt="#" class="w-full h-auto mt-2 object-cover rounded">
            </div>
            <button class="flex items-center justify-between w-full bg-buttonstart py-3 px-4">
              <div class="w-10 h-10 bg-black bg-opacity-50 flex items-center justify-center rounded">
                <svg-vue icon="profile" style="width: 20px; height: 20px;" />
              </div>
              <span>Создать аккаунт</span>
              <div class="w-10 h-10"></div>
            </button>
          </div>
        </div>
      </div>
      <ConnectingHelp />
    </div>
    <ConnectingModule v-if="server" :server="server" />
  </section>
</template>

<script>
  import BreadcrumbsModule from '@/components/modules/BreadcrumbsModule.vue';
  import ConnectingModule from '@/components/modules/ConnectingModule.vue';
  import ConnectingHelp from '@/components/modules/ConnectingHelp.vue';

  export default {
    data() {
      return {
        server: null,
      }
    },
    components: {
      BreadcrumbsModule,
      ConnectingModule,
      ConnectingHelp,
    },
    props: { 
      data: {
        type: String,
        required: true,
      }
    },
    // mounted() {
    //   fetch('https://cdn.rage.mp/master/').then(response => response.json()).then(json => {
    //     this.server = _.find(json, { 'name': '[voice] [roleplay] Grand RolePlay | discord.gg/grand | Server 1 | X2' });
    //     this.server['ip'] = _.findKey(json, { 'name': '[voice] [roleplay] Grand RolePlay | discord.gg/grand | Server 1 | X2' });
    //   })
    // }
  }
</script>

<style lang="less">
  .start-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);

    button {
      &:hover {
        filter: brightness(1.15);
      }
    }
  }

  .start-number {
    position: absolute;
    margin: -1.5rem 0px 0px 2rem;
  }

  .start-block {
    display: inline-block;
    min-height: 80px;
    margin-top: 10px;
  }
</style>