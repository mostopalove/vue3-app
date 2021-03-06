<template>
  <app-loader v-if="loading"></app-loader>
  <app-page v-else title="Application list">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>

    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal
          v-if="modal"
          title="Create application"
          @close="modal = false"
      >
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
  import {ref, computed, onMounted} from 'vue'
  import {useStore} from 'vuex'
  import AppPage from '../components/ui/AppPage'
  import RequestTable from '../components/request/RequestTable'
  import AppModal from '../components/ui/AppModal'
  import RequestModal from '../components/request/RequestModal'
  import AppLoader from '../components/ui/AppLoader'
  import RequestFilter from '../components/request/RequestFilter'

  export default {
    name: 'Home',
    components: {RequestFilter, AppLoader, RequestModal, AppModal, RequestTable, AppPage},
    setup() {
      const store = useStore()
      const modal = ref(false)
      const loading = ref(false)
      const filter = ref({})

      onMounted(async () => {
        loading.value = true
        await store.dispatch('request/load')
        loading.value = false
      })

      const requests = computed(() => {
        return store.getters['request/requests']
          .filter(request => {
            if (filter.value.name) {
              return request.name.includes(filter.value.name)
            }
            return request
          })
          .filter(request => {
            if (filter.value.status) {
              return request.status === filter.value.status
            }
            return request
          })
      })

      return {
        modal,
        requests,
        loading,
        filter
      }
    }
  }
</script>
