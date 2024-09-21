<template>
  <div class="container-xxl mt-12">
    <h2 class="ml-3 mb-4">Рабочие навыки</h2>
    <div class="grid grid-cols-4 gap-8">
      <div class="background-style rounded" v-for="(item, i) in work" :key="i">
        <div class="flex items-center p-2">
          <div class="background-style ml-3 flex items-center rounded p-2">
            <svg-vue :icon="item.icon" style="width: 30px; height: 30px" />
          </div>
          <div class="ml-3">
            <h5>{{ item.name }}</h5>
            <span v-if="item.lvl <= 6" class="text-gray-400 text-opacity-25"
              >{{ item.lvl }} уровень</span
            >
            <span
              v-else-if="item.lvl <= 11"
              class="text-yellow-400 text-opacity-50"
              >{{ item.lvl }} уровень</span
            >
            <span
              v-else-if="item.lvl <= 21"
              class="text-orange-400 text-opacity-75"
              >{{ item.lvl }} уровень</span
            >
            <span v-else-if="item.lvl <= 31" class="text-red-800"
              >{{ item.lvl }} уровень</span
            >
          </div>
        </div>
        <div class="-mb-2 bar-width">
          <k-progress
            :percent="58"
            :show-text="false"
            :cut-width="5"
            :line-height="5"
            bg-color="#ffffff2c"
          ></k-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    work: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less">
.bar-width {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
