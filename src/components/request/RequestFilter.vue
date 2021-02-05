<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Enter name" v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Select status</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">Clear</button>
  </div>
</template>

<script>
  import {ref, watch, computed} from 'vue'
  export default {
    name: 'RequestFilter',
    emits: ['update:modelValue'],
    props: ['modelValue'],
    setup(_, {emit}) {
      const name = ref()
      const status = ref()
      const isActive = computed(() => name.value || status.value)

      watch([name, status], values => {
        emit('update:modelValue', {
          name: values[0],
          status: values[1]
        })
      })

      const reset = () => {
        name.value = ''
        status.value = null
      }

      return {
        name,
        status,
        isActive,
        reset
      }
    }
  }
</script>

<style scoped>

</style>
