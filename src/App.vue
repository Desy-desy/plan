<template>
  <div>
    <Header/>
    <HeaderNav></HeaderNav>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  components: {
    Header,
    HeaderNav,
  }
}
</script>
