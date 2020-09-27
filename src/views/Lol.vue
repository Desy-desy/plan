<template>
  <div class="lol">
    <div class="nav_list_box">
      <router-link to="lolall" class="nav_list_item active">全部</router-link>
      <router-link to="jj" class="nav_list_item ">狙击职业哥</router-link>
      <router-link to="yd" class="nav_list_item ">云顶之奕S4</router-link>
      <router-link to="ns" class="nav_list_item ">女神</router-link>
      <router-link to="lolyx" class="nav_list_item ">英雄</router-link>
      <router-link to="lolyqw" class="nav_list_item ">一起玩</router-link>
    </div>
    <div class="icon">
      <i></i>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .nav_list_box{
    background: #fff;
    padding: 0 50px 0 10px;
    box-sizing: border-box;
    position: relative;
    height: 34px;
    overflow: hidden;
    opacity: 1;
  }
  .nav_list{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
  }
  .nav_list_item.active{
    border: 1px solid #ffa900;
    color: #ffa900;
  }
  .nav_list_item{
    border-radius: 20px;
    height: 30px;
    padding: 0 12px;
    line-height: 30px;
    margin-right: 10px;
    background: #fff;
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    max-width: 90px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .icon{
    height: 18px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 8px;
    border-radius: 20px;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 100px;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  i{
    float: right;;
    width: 12px;
    height: 7px;
    background: url(../assets/down.png) no-repeat 0 0/contain;
    font-style: normal;
  }
</style>