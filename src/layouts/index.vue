<template>
  <router-view v-if='!configLoading'></router-view>
</template>
<script>
  import { PAGE_CONFIG_INIT } from '@/store/actionTypes';
  import { mapState } from 'vuex';
  export default {
    name: 'indexLayout',
    data () {
      return {
        loading: true
      }
    },
    computed: {
      ...mapState({
        configLoading: state => state.pageConfig.configLoading
      })
    },
    created () {  
      // 接口初始化之后再进入
      // this.loading = false
      this.$store.dispatch({
        type: PAGE_CONFIG_INIT
      })
    }
  }
</script>