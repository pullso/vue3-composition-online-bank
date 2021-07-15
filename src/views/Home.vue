<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-filter v-model="filter"></request-filter>
    <request-table
      :requests="requests"
    ></request-table>
    
    <teleport to="body">
      <app-modal
        title="Создать заявки"
        @close="modal = false"
        v-if="modal"
      >
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage'
import RequestTable from '../components/request/RequestTable'
import RequestModal from '../components/request/RequestModal'
import { computed, ref, onMounted } from 'vue'
import AppModal from '../components/ui/AppModal'
import { useStore } from 'vuex'
import AppLoader from '../components/ui/AppLoader'
import RequestFilter from '../components/request/RequestFilter'

export default {
  name: 'Home',
  setup () {
    const modal = ref(false)
    const filter = ref({})
    const store = useStore()
    const loading = ref(false)
    
    
    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })
    
    const requests = computed(()=>store.getters['request/requests']
      .filter(request => {
        if(filter.value.name) {
          return request.fio.includes(filter.value.name)
        }
        return request
      })
      .filter(request => {
        if(filter.value.status) {
          return filter.value.status === request.status
        }
        return request
      })
    )
    
    return {
      modal, requests, loading, filter
    }
  },
  components: { RequestFilter, AppModal, AppPage, RequestTable, RequestModal, AppLoader },
}
</script>
