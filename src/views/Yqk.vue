<template>
  <div class="nav_list_box">
    <div class="nav_list">
      <a href="#" class="nav_list_item active">全部</a>
      <a href="#" class="nav_list_item ">电影</a>
      <a href="#" class="nav_list_item ">电视剧</a>
      <a href="#" class="nav_list_item ">原创</a>
      <a href="#" class="nav_list_item ">综艺</a>
      <a href="#" class="nav_list_item ">正能量</a>
    </div>
    <div class="icon">
      <i></i>
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
    height: 24px;
    padding: 0 12px;
    line-height: 24px;
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