<template>
  <div class="home">
    <Lunbo></Lunbo>
    <Alltv></Alltv>
  </div>
</template>

<script>
// @ is an alias to /src
import Lunbo from '@/views/Lunbo.vue'
import Alltv from '@/views/Alltv.vue'

export default {
  name: 'Home',
  components: {
    Lunbo,
    Alltv
  }
}
</script>

<style>
.el-carousel__button{
    display: block;
    opacity: 13.48;
    width: 10px !important;
    height: 2px;
    background-color: #FFF;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s;
  }
</style>