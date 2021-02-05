<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>

    <div class="sidebar-content">
      <p>Welcome to my app. Important information will be displayed here.</p>
    </div>
  </div>
</template>

<script>
  import {computed} from 'vue'
  import {useStore} from 'vuex'

  export default {
    name: 'TheSidebar',
    setup() {
      const store = useStore()

      const sidebar = computed(() => store.state.sidebar)

      return {
        sidebar,
        close: () => store.commit('closeSidebar')
      }
    }
  }
</script>

<style scoped>

</style>
