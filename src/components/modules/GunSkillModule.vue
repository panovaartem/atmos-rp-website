<template>
  <div class="container-xxl mt-12" > 
    <h2 class="flex ml-3 mb-4">Навыки владения оружием</h2>
    <div class="grid grid-cols-3 gap-8">
      <div class="background-style rounded" v-for="(item, i) in gunskills" :key="i">
          <div class="flex mt-3">
            <div class="background-style ml-3  flex items-center rounded p-2 mb-3">
            <svg-vue :icon="item.icon" style="width: 30px; height: 30px;"/>
            </div>
            <div class="ml-3">
              <h5>{{item.name}}</h5>
              <span class="text-blue-500">{{item.percent}}</span>
            </div>
          </div>  
          <div class="-mb-2">
            <k-progress :percent="58" :show-text="false" :cut-width="5" :line-height="5" bg-color="#ffffff2c"></k-progress>
          </div>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    gunskills:{
      type: Array,
      required: true
    },
}
}
</script>

<style lang="less" >

</style>