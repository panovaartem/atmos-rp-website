<template>
  <section>
    <BreadcrumbsModule :data="data" :social="false" />
    <div class="container-grid mt-12">
      <div class="flex">
        <div class="w-2/3" id="component-news">
          <h2>Lorem ipsum dolor sit amet</h2>
          <div class="mt-3 flex flex-column rounded" id="img-news-info">
            
            <div class="flex justify-end w-full pt-6 pr-10">
              <div class="flex py-2 px-3 items-center">
                <svg-vue icon="date" style="width: 16px; height: 16px;" class="mr-2"/>
                <span class="text-base">12.09.2019</span>
              </div>
              <div class="rounded py-2 px-3 document-version w-auto ml-4 flex items-center">
                <svg-vue icon="like" style="width: 16px; height: 16px;"/>
                <span class="text-base ml-2 ">153</span>
              </div>
            </div>

            <div class="flex justify-start ml-5">
              <div class="rounded p-3 document-version flex items-center ">
                <img src="@/assets/img/profile/ava.png" alt="">
                <div class="flex flex-column  ml-4">  
                  <span class="font-bold">Jesse Redman</span>
                  <span class="text-base">Administrator</span>
                </div>
              </div>
            </div>

          </div>
            <div>
              <p class="my-8">Lorem ipsum nibh elementum commodo lectus sit, bibendum eu a cursus arcu mauris sagittis diam tempus porta amet auctor 
                leo quam nec non eros. At, maecenas diam maecenas, urna auctor elementum quisque rutrum ipsum nec pellentesque. Quisque: 
                nam sit justo urna integer, molestie donec sodales  </p>
              <span class="p-3 rounded document-version ">
                urna auctor elementum quisque <a href="">rutrum ipsum</a> nec pellentesque. 
              </span>
              <h3 class="mt-5">Lorem ipsum dolor sit amet. </h3>
              <p class="my-8">Lorem ipsum nibh elementum commodo lectus sit, bibendum eu a cursus arcu mauris sagittis diam tempus porta amet auctor 
                leo quam nec non eros. At, maecenas diam maecenas, urna auctor elementum quisque rutrum ipsum nec pellentesque. Quisque: 
                nam sit justo urna integer, molestie donec sodales  </p>
                <div class="flex mb-5">
                  <img src="@/assets/img/news/1.jpg" alt="" style="width:330px; height:200px;" class="rounded">
                  <div class="ml-5">
                    <h4>Lorem ipsum dolor sit</h4>
                    <ul class="list-disc ml-3 text-base mt-3 opacity-75" style="line-height:180%;">
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>
                  </div>
                </div>

            </div>
        </div>
        <div class="w-1/3" id="component-news">
          <RightSideEvents />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BreadcrumbsModule from '../parts/BreadcrumbsModule.vue';
  import RightSideEvents from '../parts/RightSideEvents.vue';

  export default {
    components: {
      BreadcrumbsModule,
      RightSideEvents
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
#img-news-info {
  background-image: url('../../assets/img/news/borderNewsInfo.jpg');
  background-repeat: no-repeat;
  height: 180px;
 }
  .document-version {
    background-color: rgba(242, 242, 242, 0.1);
    border: 1px solid rgba(242, 242, 242, 0.3);
  }
</style>
