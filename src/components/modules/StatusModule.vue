<template>
  <div id="donation-module" class="mt-3">
    <div
      class="w-full rounded flex justify-center items-center flex-column status-module"
      v-for="item in status"
      :key="item.name"
    >
      <div
        class="rounded w-full h-24 flex items-center justify-center flex-column"
        :class="item.name"
      >
        <h2 class="uppercase">{{ item.name }}</h2>
        <span class="uppercase text-sm opacity-25">Статус</span>
      </div>
      <h4 class="mt-3">{{ item.price }} руб.</h4>
      <router-link :to="item.name" append class="mt-2 text-base w-full rounded"
        >Подробнее</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less">
#donation-module {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.status-module {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 15px;

  div {
    box-sizing: border-box;
    border-radius: 5px;

    span {
      margin-top: -10px;
    }
  }

  .gold {
    background: linear-gradient(180deg, #0f1014 0%, #574400 100%);
    border: 1px solid #ffc700;

    h2 {
      color: #ffc700;
    }
  }

  .silver {
    background: linear-gradient(180deg, #0f1014 0%, #3c3c3c 100%);
    border: 1px solid #d3d3d3;

    h2 {
      color: #d3d3d3;
    }
  }

  .bronze {
    background: linear-gradient(180deg, #0f1014 0%, #491a00 100%);
    border: 1px solid #de5000;

    h2 {
      color: #de5000;
    }
  }

  .super {
    background: linear-gradient(180deg, #0f1014 0%, #003814 100%);
    border: 1px solid #00ff66;

    h2 {
      color: #00ff66;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.05);
    height: 40px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
