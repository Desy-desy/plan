<template>
  <div class="header_nav" >
    <div class="nav">
      <div class="th">
        <div class="btns" v-show="h">
          <router-link :to="item.adr" class="nav-link" v-for="(item,index) in navbtn" :key="item.id" :class="{'active': isActive == index}" @click.native="toggleActive(index)">{{item.name}}</router-link>
        </div>
        <div class="btnh" v-show="!h">
          <router-link :to="item.adr" class="nav-link" v-for="(item,index) in hnavbtn" :key="item.id" :class="{'active': isActive == index}" @click.native="toggleActive(index)">{{item.name}}</router-link>
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
      h:true,
      isActive:0,
      navbtn:[
        {adr:"/home",name:"首页"},
        {adr:"/wz",name:"王者荣耀"},
        {adr:"/jdqs",name:"绝地求生"},
        {adr:"/lol",name:"英雄联盟"},
        {adr:"/xx",name:"星秀"},
        {adr:"/hpjy",name:"和平精英"},
        {adr:"/cf",name:"穿越火线"},
        {adr:"/yz",name:"颜值"},
        {adr:"/ecy",name:"二次元"},
        {adr:"/dnf",name:"地下城与勇士"},
        {adr:"/bx",name:"暴雪专区"},
        {adr:"/yqk",name:"一起看"},
        {adr:"/wdsj",name:"我的世界"}
        ],
      hnavbtn:[
        {adr:"/hot",name:"热门"},
        {adr:"/hot",name:"网游"},
        {adr:"/hot",name:"单机"},
        {adr:"/hot",name:"娱乐"},
        {adr:"/hot",name:"手游"},
      ]
    }
  },
  methods:{
    navClick(){
      this.$router.push('/netgame');
      this.h=!this.h;
      this.isActive = 0;
    },
    hClick(){
      this.$router.push('/home');
      this.h=!this.h;
      this.isActive = 0;
    },
    toggleActive(index) {
      this.isActive = index;
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
  .btns::-webkit-scrollbar{   /* 隐藏滚动条 */
    display:none;
  }
  .nav-link{
    padding: 2px 0;
    margin-right: 20px;
  }
  .active{
    color: #ffa200;
    border-bottom: 2px solid;
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