<template>
  <section>
    <BreadcrumbsModule :data="data" :social="true" />
    <div class="container-xxl mt-12">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-2/3 w-full" id="component-news">

          <router-link :to="item.alias" append class="text-white" v-for="(item, i) in news" :key="i">
            <div id="news-card" class="flex flex-col sm:flex-row mb-5">
              <img :src="require(`../../assets/img/news/${item.img}.jpg`)" alt="" class="rounded">
              <div class="sm:ml-4 mt-4 sm:mt-0 flex flex-col justify-between">
                <div class="flex flex-col">
                  <span class="uppercase font-bold text-base sm:text-lg">{{ item.header }}</span>
                  <span class="opacity-75 mt-1 font-light text-sm sm:text-base">{{ item.short_discrition }}</span>
                </div>
                <div class="flex items-center mt-2 sm:mt-0">
                  <svg-vue icon="like" style="width: 16px; height: 16px;" />
                  <span class="text-sm sm:text-base ml-1">{{ item.likes }}</span>
                  <svg-vue icon="date" style="width: 16px; height: 16px;" class="ml-4" />
                  <span class="text-sm sm:text-base ml-1">{{ item.date }}</span>
                </div>
                <div class="horizontal-line"></div>
              </div>
            </div>
          </router-link>

          <div id="pagination" class="flex mb-5 justify-center md:justify-start">
            <div class="flex">
              <div id="container-pagination" class="rounded flex justify-center items-center">
                <svg-vue icon="arrow" style="width: 26px; height: 26px;" />
              </div>
              <div id="container-pagination" class="rounded flex justify-center items-center ml-3">
                <span>1</span>
              </div>
              <div id="container-pagination" class="rounded flex justify-center items-center ml-3">
                <span>2</span>
              </div>
              <div id="container-pagination" class="rounded flex justify-center items-center ml-3">
                <span>...</span>
              </div>
              <div id="container-pagination" class="rounded flex justify-center items-center ml-3">
                <span>35</span>
              </div>
              <div id="container-pagination" class="rounded flex justify-center items-center ml-3">
                <svg-vue icon="arrow" style="width: 26px; height: 26px;" class="transform rotate-180"/>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/3 w-full mt-10 md:mt-0" id="component-news">
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
    data() {
      return {
        news: [
          {
            alias: 'lorem-ipsum',
            header: 'Lorem ipsum dolor sit amet',
            short_discrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            img: 1,
            likes: 150,
            date: '12.09.2020'
          },
          {
            alias: 'lorem-ipsum',
            header: 'Lorem ipsum dolor sit amet',
            short_discrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            img: 2,
            likes: 151,
            date: '16.09.2020'
          },
          {
            alias: 'lorem-ipsum',
            header: 'Lorem ipsum dolor sit amet',
            short_discrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            img: 3,
            likes: 19,
            date: '18.09.2020'
          },
          {
            alias: 'lorem-ipsum',
            header: 'Lorem ipsum dolor sit amet',
            short_discrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            img: 4,
            likes: 10,
            date: '12.09.2020'
          },
          {
            alias: 'lorem-ipsum',
            header: 'Lorem ipsum dolor sit amet',
            short_discrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            img: 5,
            likes: 78,
            date: '12.09.2020'
          }
        ]    
      }
    },
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
  #component-news {
    margin: 0px 15px;
    font-size: 18px;

    a {
      text-decoration: none;      
    }
  }

  #bonus-card {
    display: flex;
    min-height: 222px;

    img {
      margin: 15px;
    }

    div {
      margin: 5px;
    }
  }

  #news-card {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-width: 140px; // ограничиваем ширину на больших экранах
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 0 5pt rgba(255, 255, 255, 0.05);

      .horizontal-line {
        visibility: hidden;
      }
    }
  }

  #container-pagination {
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 640px) {
    #component-news {
      font-size: 16px; // уменьшаем шрифт на мобильных устройствах
    }
    #news-card {
      font-size: 14px; // уменьшаем шрифт карточек на мобильных устройствах
    }
  }
</style>
