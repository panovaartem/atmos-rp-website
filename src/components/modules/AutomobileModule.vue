<template>
  <div class="container-xxl mt-12">
    <h2 class="flex ml-3 mb-4">
      Автомобили <span class="opacity-50 ml-3">Спец.Транспорт</span>
    </h2>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="(item, i) in cars" :key="i">
        <div class="background-style rounded">
          <div
            class="img-car rounded"
            :style="{ backgroundImage: `url(${item.image})` }"
          >
            <div class="flex ml-3">
              <div class="document-black p-2 mt-2 rounded mr-2">
                <svg-vue icon="infocircle" style="width: 25px; height: 25px" />
              </div>
              <div class="flex text-white document-black p-2 mt-2 rounded mr-2">
                <span>Пробег: {{ item.mileage }} км.</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center flex-column items-center my-4">
            <h3>{{ item.name }}</h3>
            <span v-if="item.hangar != null">
              Гараж <span class="opacity-50">#{{ item.hangar }}</span>
            </span>
            <span v-else class="opacity-50">Не припарковано</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    cars: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less">
.img-car {
  height: 140px;
  background-repeat: no-repeat;
  background-size: cover;
}
.document-black {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
