<template>
  <div id="header">
    <a href="#" class="logo"><img src="../assets/logo_2018.png" alt="#" width="100px" height="30px"></a>
    <a href="#" class="btn">打开app</a>
    <a href="#" class="search"><img src="../assets/search.png" alt="#" ></a>
  </div>

</template>

<script>

export default {
  name:'Nav',
  components: {
    
  }
}
</script>


<style scoped>
a{
  text-decoration: none;
}
#header{
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid#ededed;
}
.logo{
  float: left;
  margin-left: 2%;
  background-size: 100% 100%;
  vertical-align: middle;
}
.search{
  float: right;
  width: 42px;
  height: 28px;
  margin-right: 3%;
  background: #f4f4f4;
  border-radius: 14px;
}
.search img{
  display: block;
  margin: 6px auto;
  width: 16px;
  height: 16px;
  margin: 6px auto;
}
.btn{
  float: right;
  margin-right: 2%;
  width: 86px;
  height: 28x;
  font-size: 13px;
  line-height: 28px;
  text-align: center;
  color: #fff;
  border-radius: 15px;
  background-color: #ffa200;
}
</style>
