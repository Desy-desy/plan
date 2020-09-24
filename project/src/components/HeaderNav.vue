<template>
  <div class="header_nav" >
    <div class="nav">
      <div class="th">
        <div class="btns" v-show="h">
          <router-link to="/home" class="nav-link">首页</router-link>
          <router-link to="/wz" class="nav-link">王者荣耀</router-link>
          <router-link to="/jdqs" class="nav-link">绝地求生</router-link>
          <router-link to="/lol" class="nav-link">英雄联盟</router-link>
          <router-link to="/xx" class="nav-link">星秀</router-link>
          <router-link to="/chwl" class="nav-link">吃喝玩乐</router-link>
          <router-link to="/zjyx" class="nav-link">主机游戏</router-link>
          <router-link to="/hpjy" class="nav-link">和平精英</router-link>
          <router-link to="/cf" class="nav-link">穿越火线</router-link>
          <router-link to="/yz" class="nav-link">颜值</router-link>
          <router-link to="/ecy" class="nav-link">二次元</router-link>
          <router-link to="/dnf" class="nav-link">地下城与勇士</router-link>
          <router-link to="/bx" class="nav-link">暴雪专区</router-link>
          <router-link to="/yqk" class="nav-link">一起看</router-link>
          <router-link to="/wdsj" class="nav-link">我的世界</router-link>
        </div>
        <div class="btnh" v-show="!h">
          <router-link to="/hot" class="nav-link">热门</router-link>
          <router-link to="#" class="nav-link">网游</router-link>
          <router-link to="" class="nav-link">单机</router-link>
          <router-link to="#" class="nav-link">娱乐</router-link>
          <router-link to="#" class="nav-link">手游</router-link>
        </div>
      </div>
      <i class="icon" @click="navClick()" v-show="h"><img src="../assets/icon.png"></i>
      <i class="icon" @click="hClick()" v-show="!h"><img src="../assets/hnav.png"></i>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      h:true
    }
  },
  methods:{
    navClick(){
      this.$router.push('/netgame');
      this.h=!this.h;
    },
    hClick(){
      this.$router.push('/home');
      this.h=!this.h;
    }
  }
}
</script>

<style scoped>
  .header_nav{
    position: relative;
    height: 46px;
    line-height: 46px;
    background: #fff;
  }
  .th{
    font-size: 15px;
    padding: 0 40px 0 10px;
  }
  .btns{
    overflow:scroll;
    white-space: nowrap;
  }
  .nav-link{
    padding: 2px 0;
    margin-right: 20px;
  }
  a{
    text-decoration: none;
    color: #151515;
  }
  i img{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 13px;
    right: 10px;
    background-size: 100% 100%;
  }
</style>