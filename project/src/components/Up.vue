<template>
  <div class="box">
    <div class="up">
      <ul>
        <li class="top" @click="top">
          <i class="toplogo"></i>
          <br>
          顶部
        </li>
        <li class="link">
          <i class="linklogo"></i>
          <br>
          反馈
        </li>
        <li class="star">
          <i class="starlogo"></i>
          <br>
          开播
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // document.getElementsByClassName('top')[0].onclick = function () {
  //   document.body.scrollTop = document.documentElement.scrollTop = 0;
  // }
export default {
  
  methods:{
    top(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      console.log("回到顶部");
    }
  }
}
</script>

<style scoped>
.up{
  width: 37.5px;
  position: fixed;
  right: 0;
  bottom: 20%;
  z-index: 10;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
li{
  background-color: rgba(46,46,58,.85);
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 12px;
  margin-bottom: 2px;
  height: 32.5px;
  padding: 3px 0 2px;
  border-radius: 3px 0 0 3px;
}
.top{
  opacity: 1;
}
.toplogo{
  background-image: url(../assets/toplogo.png);
  display: inline-block;
  width: 14px;
  height: 15px;
  background-size: 100% 100%;
}
.linklogo{
  background-image: url(../assets/linklogo.png);
  display: inline-block;
  width: 14px;
  height: 15px;
  background-size: 100% 100%;
}
.starlogo{
  background-image: url(../assets/starlogo.png);
  display: inline-block;
  width: 14px;
  height: 15px;
  background-size: 100% 100%;
}
</style>