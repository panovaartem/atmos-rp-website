<template>
  <div class="container-grid mt-12">
    <h2 class="ml-3 mb-4">Улучшения</h2>
    <div class="flex mt-3 ">
      <div class="w-1/3 space-y-4" id = "grid-component" >
        <div class="flex upgradeBorderGreen1 rounded p-2 mb-6" >
          <div class="flex p-2">
            <div id="upgradeBorderGreen2" class="flex items-center justify-center rounded p-2 ml-2 ">
              <svg-vue icon="plus" style="width: 30px; height: 50px;"/>
            </div>
            <div class="ml-3 space-y-4">
              <h5>Бережливость </h5>
              <span>Когда вы за рулем, двигатель авто изнашивается на <span class="text-yellow-400">70%</span> медленнее</span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3 space-y-4" id = "grid-component" >
        <div class="flex upgradeBorderRed1 rounded p-2 mb-6" >
          <div class="flex p-2">
            <div id="upgradeBorderRed2" class="flex items-center justify-center rounded p-2 ml-2 ">
              <svg-vue icon="minus" style="width: 30px; height: 50px;"/>
            </div>
            <div class="ml-3 ">
              <h5>Спортивный <span class="ml-2 profile-border p-2 rounded opacity-75">70 руб.</span></h5>
              <span>Вы гораздо быстрее качаете силу и выносливость <span class="text-yellow-400">(x3)</span> </span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3 space-y-4" id = "grid-component" >
        <div class="flex upgradeBorderRed1 rounded p-2 mb-6" >
          <div class="flex p-2">
            <div id="upgradeBorderRed2" class="flex items-center justify-center rounded p-2 ml-2 ">
              <svg-vue icon="minus" style="width: 30px; height: 50px;"/>
            </div>
            <div class="ml-3 ">
              <h5>Наценщик <span class="ml-2 profile-border p-2 rounded opacity-75">200 руб.</span></h5>
              <span>Навык наценки прокачивается быстрее <span class="text-yellow-400">(x3)</span> </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .upgradeBorderGreen1{ 
    background-color: rgba(39, 174, 95, 0.5);

    #upgradeBorderGreen2 {
    background-color: rgb(33, 150, 83);
    width: 65px;
    height: 86px;
    } 
    }

  .upgradeBorderRed1{ 
    background-color: rgba(235, 86, 86, 0.5);

    #upgradeBorderRed2 {
    background-color: rgb(235, 87, 87);
    width: 65px;
    height: 86px;
    } 
    }
  
</style>