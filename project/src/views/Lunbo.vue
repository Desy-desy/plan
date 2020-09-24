<template>
    <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 6" :key="item">
        <!-- <img src="../assets/1.jpg" width="100%" height="auto" alt="#"> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgs:["../assets/1.jpg","../assets/2.jpg","../assets/3.jpg","../assets/4.jpg","../assets/5.jpg","../assets/6.jpg"]
    }
  }
}
</script>


<style scoped>
  .el-carousel__item:nth-child(n) {
     background-image: url(../assets/1.jpg);
     background-size: 100% 100%;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  
</style>
