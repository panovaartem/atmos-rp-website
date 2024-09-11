<template>
  
  <div class="document-version mt-4 rounded flex ">
    <div class="w-1/3" >
      <div class="leading-10 w-full ml-4 mt-2" v-for="(item, i) in progress" :key="i">
        <div class="mb-3">
          <span>{{ item.name }}</span>
          <k-progress :percent="item.percent" :show-text="false" :line-height="12"  bg-color="#ffffff2c" ></k-progress>
        </div>
      </div>
      <div class="ml-4 mt-3">
        <span>Болезни</span>
        <div class="profile-border h-12 rounded  flex justify-center mr-8 mt-2  mb-4">
          <span class="opacity-50 pt-2">Нет</span>
        </div>
      </div>
    </div>

    <div class="w-2/3">
      <div class="my-1 p-2 mt-2">
        <span >Лицензии</span>
        <div class="flex justify-between mr-3 profile-border rounded p-3 mt-2">

          <div :class="item.status" class="rounded p-2"  v-for="(item, i) in license" :key="i">
            <div v-if="item.check" class="check rounded-full"><svg-vue icon="checcircleoutline" />
            </div>
            <svg-vue :icon="item.icon" style="width: 50px; height: 50px;" />
          </div>

        </div>
        <div class="flex mt-4">
          <div class="w-1/2" >
            <span>Недвижимость</span>
            <div class="profile-border rounded p-4 mr-3 mt-2" >
              <div class="my-1  flex flex-col space-y-2 ">
                <span>Гараж<span class="opacity-50"> #23</span></span>
                <span>Особняк "Келвин"<span class="opacity-50"> #223</span></span>
                <span class="rounded profile-border mt-3 h-5"></span>
                <span class="rounded profile-border mt-3 h-5"></span>
                <span class="rounded profile-border mt-3 h-5"></span>
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <span>Бизнесс</span>
            <div class="profile-border rounded p-4 mr-3 mt-2">
              <div class="my-1 flex flex-col space-y-2 ">
                <div class="flex items-center ">
                  <svg-vue icon="documentgreen" style="width: 17px; height: 17px;" />
                  <span class="ml-2">Магазин-24/7<span class="opacity-50 m"> #23</span></span>
                </div>
                <span class="rounded profile-border mt-3 h-5"></span>
                <span class="rounded profile-border mt-3 h-5"></span>
                <span class="rounded profile-border mt-3 h-5"></span>
                <span class="rounded profile-border mt-3 h-5"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>

</template>

<script>
  export default {
    data() {
      return { 
        activeItem: 0,
    }
  },
    props: { 
      license:{
        type: Array,
        required: true
      },
      progress: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="less">
  .profile-border {
    background-color: rgba(255, 247, 247, 0.1);
  }

  .license {
    background-color: rgba(33, 150, 83, 0.5);
    border: 2px solid rgba(85, 237, 148, 0.507);
  }

  .check {
    width: 20px;
    height: 20px;
    background-color:rgba(33, 150, 83);
    position: absolute;;
    margin-left: -18px;
    margin-top: -15px;
  }
  
</style>