<template>
  <div class="app" >
    <Header/>
    <HeaderNav></HeaderNav>
    <Up v-show="toph" :key="id"></Up>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import Up from '@/components/Up.vue'

export default {
  data(){
    return{
      toph:true,
      id:'8'
    }
  },
  components: {
    Header,
    HeaderNav,
    Up
  },
  mounted(){
    let cc= document.getElementsByClassName("app")[0];
    cc.addEventListener('scroll',function(e){
      let a1 = e.target.scrollTop;
      if(a1>800){
        console.log(this.toph);
        this.toph=true;
        // this.$set(this.toph,toph,true)
      }else{
        this.toph=false;
        console.log(this.toph);
        // Vue.set(toph,0,false)
      }
    },false)
 },
 methods:{
 }
}
</script>

<style  scoped>
.app{
  height :100vh;
  overflow-y: auto;
}
</style>
