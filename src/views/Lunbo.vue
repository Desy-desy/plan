<template>
  <div class="block">
    <el-carousel trigger="click" :height="bannerHeight+'px'">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <img :src="item.idview" width="100%" height="auto" alt="#" ref="bannerHeight" @load="imgload" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bannerHeight:"",
      imgs:[{id:0,idview:require("../assets/1.jpg")},{id:1,idview:require("../assets/2.jpg")},{id:2,idview:require("../assets/3.jpg")},{id:3,idview:require("../assets/4.jpg")},{id:4,idview:require("../assets/5.jpg")},{id:5,idview:require("../assets/6.jpg")},]
    }
  },
  methods:{
    imgload(){
      this.$nextTick(()=>{
        this.bannerHeight = this.$refs.bannerHeight[0].height;
      });
    }
  },
  mounted(){
    this.imgload();
    window.addEventListener(
      "resize",
      ()=>{
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        this.imgload();
      },
      false
    );
  }
}
</script>

