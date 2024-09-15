<template>
  <div class="container-xxl mt-12">
    <h2 class="ml-3 mb-4">Рабочие навыки</h2>
    <div class="flex ">

      <div class="w-1/4 space-y-4" id = "grid-component" >

        <div class="document-version rounded" v-for="(item, i) in work1" :key="i">
          <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
              <svg-vue :icon="item.icon" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>{{ item.name }}</h5>
                <span v-if="item.lvl <= 6 " class="text-gray-400 text-opacity-25">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 11 " class="text-yellow-400 text-opacity-50">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 21 " class="text-orange-400 text-opacity-75">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 31 " class="text-red-800">{{item.lvl}} уровень</span>
              </div> 
          </div>
            <div class="-mb-2" id="BarWidth">
              <k-progress :percent="58" :show-text="false" :cut-width="5" :line-height="12" bg-color="#ffffff2c"></k-progress>
            </div>
        </div>
        
        </div>

      <div class="w-1/4 space-y-4 "  id = "grid-component">

        <div class="document-version rounded" v-for="(item, i) in work2" :key="i">
          <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
              <svg-vue :icon="item.icon" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>{{ item.name }}</h5>
                <span v-if="item.lvl <= 6 " class="text-gray-400 text-opacity-25">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 11 " class="text-yellow-400 text-opacity-50">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 21 " class="text-orange-400 text-opacity-75">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 31 " class="text-red-800">{{item.lvl}} уровень</span>
              </div> 
          </div>
            <div class="-mb-2 w-64" id="BarWidth">
              <k-progress :percent="85" :show-text="false" :cut-width="5" :line-height="12" bg-color="#ffffff2c"></k-progress>
            </div>
        </div>

      </div>


      <div class="w-1/4 space-y-4 " id = "grid-component">

        <div class="document-version rounded" v-for="(item, i) in work3" :key="i">
          <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
              <svg-vue :icon="item.icon" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>{{ item.name }}</h5>
                <span v-if="item.lvl <= 6 " class="text-gray-400 text-opacity-25">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 11 " class="text-yellow-400 text-opacity-50">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 21 " class="text-orange-400 text-opacity-75">{{item.lvl}} уровень</span>
                <span v-else-if="item.lvl <= 31 " class="text-red-800">{{item.lvl}} уровень</span>
              </div> 
          </div>
            <div class="-mb-2 w-64" id="BarWidth">
              <k-progress :percent="25" :show-text="false" :cut-width="5" :line-height="12" bg-color="#ffffff2c"></k-progress>
            </div>
        </div>

      </div>


      <div class="w-1/4 space-y-4 " id = "grid-component">

        <div class="document-version rounded">
          <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
              <svg-vue icon="coal" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>Шахтер</h5>
                <span class="text-gray-400 text-opacity-25">0 уровень</span>
              </div> 
          </div>
            <div class="-mb-2 w-64" id="BarWidth">
              <k-progress :percent="0" :show-text="false" :cut-width="5" :line-height="12" bg-color="#ffffff2c"></k-progress>
            </div>
        </div>

        <div class="document-version rounded">
          <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
          <svg-vue icon="delivery-truck-1" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>Дальнобольщик</h5>
                <span class="text-yellow-600 text-opacity-75">9 уровень</span>
              </div> 
          </div>
            <div class="-mb-2 rounded" id="BarWidth">
              <k-progress :percent="90" :show-text="false" :line-height="12"  bg-color="#ffffff2c"></k-progress>
            </div>
        </div>

        <div class="document-version rounded">
          <div class="flex mt-3">
              <div class="document-version ml-3  flex items-center rounded p-2 mb-3">
              <svg-vue icon="oil-barrel" style="width: 30px; height: 30px;"/>
              </div>
              <div class="ml-3">
                <h5>Нефтянник</h5>
                <span class="text-gray-400 text-opacity-75">1 уровень</span>
              </div> 
          </div>
            <div class="-mb-2" id="BarWidth">
              <k-progress :percent="10" :show-text="false" :line-height="12"  bg-color="#ffffff2c"></k-progress>
            </div>
        </div>

        

            
        </div>

    </div>

  </div>

</template>

<script>

export default {

    props: { 
      work1:{
        type: Array,
        required: true
      },
      work2:{
        type: Array,
        required: true
      },
      work3:{
        type: Array,
        required: true
      },
      work4:{
        type: Array,
        required: true
      }
    }
  }
</script>

<style  lang="less">
#BarWidth{
  width: 387px;
}
</style>