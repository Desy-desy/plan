<template>
<div id="box">
  <div class="logo">
    <ul>
      <li v-for="item in pics" :key="item.title">
        <a href="">
          <img :src="item.pic">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
name:'Hot',
components:{
  
},
  data(){
    return{
      pics:[
        {pic:require('../assets/ECY.jpg'),title:'二次元'},
        {pic:require('../assets/LOLlogo.jpg'),title:'英雄联盟'},
        {pic:require('../assets/YZ.jpg'),title:'颜值'},
        {pic:require('../assets/DNF.jpg'),title:'地下城与勇士'},
        {pic:require('../assets/BX.jpg'),title:'暴雪专区'},
        {pic:require('../assets/YQK.jpg'),title:'一起看'},
        {pic:require('../assets/WD.jpg'),title:'我的世界'},
        {pic:require('../assets/WZ.jpg'),title:'王者荣耀'},
        {pic:require('../assets/HP.jpg'),title:'和平精英'},
        {pic:require('../assets/JD.jpg'),title:'绝地求生'},
        {pic:require('../assets/CF.jpg'),title:'穿越火线'},
        {pic:require('../assets/XX.jpg'),title:'星秀'},
        {pic:require('../assets/CH.jpg'),title:'吃喝玩乐'},
        {pic:require('../assets/ZJ.jpg'),title:'主机游戏'},
      ]
    }
  }
} 
</script>

<style scoped>
.logo{
  display: block;
  border-top: 1px solid #ccc;
}
ul{
    list-style: none;
}
li{
    float: left;
    margin-top: 20px;
    width: 25%;
    height: 70px;
}
a{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
img{
    display: block;
    /* margin: 0 auto; */
    width: 70%;
    height: auto;
    border:none;
}
span{
    position: absolute;
    bottom: -5px;
    left: -15px;
    width: 100%;
    font-size: 11px;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

</style>