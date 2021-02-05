<template>
  <component :is="layout"></component>
</template>

<script>
  import {computed} from 'vue'
  import {useRoute} from 'vue-router'
  import MainLayout from './layout/MainLayout'
  import AuthLayout from './layout/AuthLayout'

  export default {
    setup() {
      const route = useRoute()
      const layout = computed(() => route.meta.layout + '-layout')

      return {
        layout
      }
    },
    components: {MainLayout, AuthLayout}
  }
</script>
