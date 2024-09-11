<template>
  <div class="container-grid mt-12" > 
    <h2 class="flex ml-3 mb-4">Навыки владения оружием</h2>

    <div class="flex">
      <div class="w-1/3 space-y-4" id = "grid-component"  >
        <div class="document-version rounded" v-for="(item, i) in skill1" :key="i">
            <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
              <svg-vue :icon="item.icon" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>{{item.name}}</h5>
                <span class="text-blue-500">{{item.percent}}</span>
              </div>
            </div>  
            <div class="-mb-2" id="BarWidthGun">
              <k-progress :percent="58" :show-text="false" :cut-width="5" :line-height="12" bg-color="#ffffff2c"></k-progress>
            </div>    
        </div>

  
      </div>
  
      <div class="w-1/3 space-y-4" id = "grid-component">
        <div class="document-version rounded" v-for="(item, i) in skill2" :key="i">
            <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
              <svg-vue :icon="item.icon" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>{{item.name}}</h5>
                <span class="text-blue-500">{{item.percent}}</span>
              </div>
            </div>  
            <div class="-mb-2" id="BarWidthGun">
              <k-progress :percent="58" :show-text="false" :cut-width="5" :line-height="12" bg-color="#ffffff2c"></k-progress>
            </div>    
        </div>

    
      </div>

      <div class="w-1/3 space-y-4" id = "grid-component" >
          <div class="document-version rounded" v-for="(item, i) in skill3" :key="i">
              <div class="flex mt-3">
                <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
                <svg-vue :icon="item.icon" style="width: 30px; height: 30px;"/>
                </div>
                <div class="ml-3">
                  <h5>{{item.name}}</h5>
                  <span class="text-blue-500">{{item.percent}}</span>
                </div>
              </div>  
              <div class="-mb-2" id="BarWidthGun">
                <k-progress :percent="58" :show-text="false" :cut-width="5" :line-height="12" bg-color="#ffffff2c"></k-progress>
              </div>    
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    skill1:{
      type: Array,
      required: true
    },
    skill2:{
      type: Array,
      required: true
    },
    skill3:{
      type: Array,
      required: true
    }
}
}
</script>

<style lang="less" >
  #BarWidthGun{
    width: 507px;
  }
</style>