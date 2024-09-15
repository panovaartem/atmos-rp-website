<template>
  <section>
    <BreadcrumbsModule :data="data" :social="false" />
    <div class="container-xxl"> 
      <div class="mt-12 flex gap-8">
        <div class="w-1/6" id="grid-component" v-for="(item, i) in selection" :key="i">
          <div @click="selectInfo(i, item.name)" :class="{ active: i == activeItem }" class="w-full h-24 rounded flex flex-column items-center justify-center base-component" >
            <svg-vue :icon="item.icon" style="width: 70px; height: 70px;" />
            <span class="uppercase mt-3 font-bold mb-3">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="flex mt-12 gap-8">
        <div class="w-1/3" id="grid-component">
          <LeftSideBarModule :data="nameItem" @list="getList" />
        </div>
        <div class="w-2/3" id="grid-component">
          <MainInfoModule :data="getListItem" />
        </div>
     </div>
    </div>
  </section>
</template>
<script>
  import BreadcrumbsModule from '@/components/modules/BreadcrumbsModule.vue';
  import LeftSideBarModule from '@/components/modules/LeftSideBarModule.vue';
  import MainInfoModule from '@/components/modules/MainInfoModule.vue';

  export default {
    data() {
      return { 
        getListItem: {},
        activeItem: 0,
        nameItem: 'Правила',
        selection: [
          {
            name: 'Правила',
            icon: 'rules'
          },
          {
            name: 'Основы',
            icon: 'base'
          },
          {
            name: 'Анклавы',
            icon: 'enclaves'
          },
          {
            name: 'Зоны',
            icon: 'zones'
          },
          {
            name: 'Крафт',
            icon: 'craft'
          },
          {
            name: 'Транспорт',
            icon: 'vehicle'
          }
        ]
      }
    },
    components: {
      BreadcrumbsModule,
      LeftSideBarModule,
      MainInfoModule,
    },  
    methods: {
     selectInfo(i, name) {
       this.activeItem = i;
       this.nameItem = name; 
     },
     getList(data) {
      this.getListItem = data;
     }
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
  .base-component {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    svg { 
      margin-top:-25px;
    }
  }

  .active {
    background-color: rgba(71, 85, 105, 0.5);
    border: 1px solid #475569;

    &:hover {
      background-color: #475569;
    }
  }
</style>