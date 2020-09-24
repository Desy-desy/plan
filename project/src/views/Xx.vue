<template>
  <div class="xx">
    <div class="nav_list_box">
      <router-link to="xxall" class="nav_list_item active">全部</router-link>
      <router-link to="qa" class="nav_list_item ">全偶少女</router-link>
      <router-link to="hs" class="nav_list_item ">好声音</router-link>
      <router-link to="xxxx" class="nav_list_item ">新秀</router-link>
      <router-link to="tk" class="nav_list_item ">脱口秀</router-link>
      <router-link to="wd" class="nav_list_item ">舞蹈</router-link>
      <router-link to="nt" class="nav_list_item ">女团</router-link>
      <router-link to="yq" class="nav_list_item ">乐器</router-link>
      <router-link to="xxyz" class="nav_list_item">颜值</router-link>
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
    height: 24px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 8px;
    border-radius: 20px;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 55px;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  i{
    width: 12px;
    height: 7px;
    background: url(../assets/down.png) no-repeat 0 0/contain;
    font-style: normal;
  }
</style>