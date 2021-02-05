<template>
  <h4 v-if="requests.length === 0" class="text-center">No applications</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="(r, i) in requests"
        :key="r.id"
    >
      <td>{{i + 1}}</td>
      <td>{{r.name}}</td>
      <td>{{r.phone}}</td>
      <td>{{currency(r.amount)}}</td>
      <td>
        <app-status :type="r.status"></app-status>
      </td>
      <td>
        <router-link
            custom
            v-slot="{navigate}"
            :to="{name: 'Request', params: {id: r.id}}"
        >
          <button class="btn" @click="navigate">Open</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import {currency} from '../../utils/currency'
  import AppStatus from '../ui/AppStatus'

  export default {
    name: 'RequestTable',
    components: {AppStatus},
    props: ['requests'],
    setup() {
      return {
        currency
      }
    }
  }
</script>

<style scoped>

</style>
