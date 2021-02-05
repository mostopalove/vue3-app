<template>
  <the-nav-bar></the-nav-bar>
  <the-sidebar></the-sidebar>
  <div class="container with-nav">
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
  import TheNavBar from '../components/TheNavBar'
  import AppMessage from '../components/ui/AppMessage'
  import TheSidebar from '../components/TheSidebar'

  export default {
    name: 'MainLayout',
    components: {TheSidebar, AppMessage, TheNavBar}
  }
</script>

<style scoped>

</style>
