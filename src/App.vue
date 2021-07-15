<template>
  <component v-if="layout" :is="layout + '-layout'" />
</template>

<script>
import { computed } from 'vue'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout),
    }
  },
  components: {
    MainLayout, AuthLayout,
  },
}
</script>
