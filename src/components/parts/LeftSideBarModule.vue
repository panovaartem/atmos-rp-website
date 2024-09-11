<template>
  <div>
    <ul>
      <li v-for="(item, i) in list" :key="i" >
        <div @click="selectList(i, item.name, item.index)" class="flex items-center">
          <span>{{ item.index }}</span>
          <span :class="{ 'active-list': i == activeItem }" class="ml-3 opacity-50 hover:opacity-100 cursor-pointer">{{ item.name }}</span>
        </div>
        <hr v-if="getNumber(i)">
      </li>
    </ul>
    <div class="mb-24 mt-10 w-full h-24 rounded flex flex-column items-center justify-center" id="social-help">
      <span>Не нашли ответ на вопрос?</span>
      <button class="btn-style bg-blue-500 hover:bg-blue-700 text-white font-bold rounded flex items-center justify-center">
        <div class="h-full w-10 flex justify-center rounded-l"><svg-vue icon="vk" style="width: 28px"/></div>
        <span class="font-normal uppercase font-bold text-lg ">Сообщество Вк</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 0, 
      parameters: {
        nameItem: null,
        indexItem: null,
      },
      list: [
        {
          index: '1.1',
          name: 'Основные правила'
        },
        {
          index: '1.2',
          name: 'Основные правила'
        },
        {
          index: '1.3',
          name: 'Основные правила'
        },
        {
          index: '1.4',
          name: 'Основные правила'
        },
        {
          index: '1.5',
          name: 'Основные правила'
        },
        {
          index: '1.6',
          name: 'Основные правила'
        }
      ],
    }
  },
  props: { 
    data: {
      type: String,
      required: true
    }
  },
  methods: {
    getNumber(i) {
      if(i == this.list.length-1) return false;
      else return true;
    },
    selectList(i, name, index) {
       this.activeItem = i;
       this.parameters.nameItem = name; 
       this.parameters.indexItem = index;
       this.setEmitParameteres(name, index);
     },
     setEmitParameteres(name, index) {
      this.$emit('list', {
        name: name,
        index: index
      })
    }
  },
  mounted() {
    this.parameters.nameItem = this.list[0].name;
    this.parameters.indexItem = this.list[0].index;
    this.setEmitParameteres(this.parameters.nameItem, this.parameters.indexItem);
  }
}
</script>

<style lang="less">
  hr {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.10);
  }
  .active-list {
    opacity: 100%;
  }
  .btn-style {
    display: flex;
    height: 50px;
    width: 346px;
  }

   #social-help{
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);

    button {
      margin-bottom: -25px;
      margin-top: 20px;
    }
   }
</style>