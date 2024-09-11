<template>
  <div>
    <div class="mt-4 w-full rounded flex flex-column  justify-center document-version">
      <div class="flex justify-between items-center">
        <h2 class="mt-4 ml-4 mb-4">{{ header }}</h2>
        <div class="mr-4 warning rounded p-2 px-4 " v-if="typeInfo()">
          <span class="uppercase text-yellow-500">warn: {{ warn }}</span>
        </div>
      </div>
      <div>
        <ul>
          <li class=" px-4 pb-1" v-for="(item, i) in list" :key="i">
            <div class="flex justify-between">
              <span class="opacity-50">{{ item.name }}</span>
              <span>{{ item.key }}</span>
            </div>
            <hr v-if="getNumber(i)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    list: {
      type: Array,
      required: true
    },
    header:{
      type: String,
      required: true
    },
    warn:{
      type: [Number, Boolean],
      required: true
    }
  },
  methods: {
    getNumber(i) {
      if(i == this.list.length-1) return false;
      else return true;
    },
    typeInfo() {
      if(this.warn == false) return false;
      else if(this.warn >= 0) return true;
    }
  }
}
</script>

<style lang="less">
.document-version {
    background-color: rgba(242, 242, 242, 0.1);
    border: 1px solid rgba(242, 242, 242, 0.2);
  }

.warning {
    background-color: rgba(255, 255, 255, 0.05);
  }  
</style>