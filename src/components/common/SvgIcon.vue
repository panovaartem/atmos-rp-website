<template>
    <component :is="iconComponent" v-bind="$attrs" />
  </template>
  
  <script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      }
    },
    computed: {
      iconComponent() {
        return () => import(`@/assets/icons/${this.icon}.svg`);
      }
    }
  };
  </script>
  