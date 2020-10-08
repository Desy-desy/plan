<template>
  <div class="alltvbg">
    <div class="alltvbody">
      <div class="alltv_header">
        <div class="left">
          <i class="logo"></i>
          <h2>全部直播</h2>
        </div>
        <div class="right_text">更多<i class="right"></i></div>
      </div>
        <div class="main">
          <a href="#" class="g_link" v-for="item in anchor" :key="item.id">
            <div class="g_item">
              <div class="g_pic">
                <span class="game_name">{{item.gamename}}</span>
                <div class="pic">
                  <img class="pic_con" :src="item.imgs" alt="#">
                </div>
              </div>
              <p class="title">{{item.title}}</p>
              <div class="info clearfix">
                <span class="nick">{{item.nick}}</span>
                <div class="viewer_wrap">
                  <i class="viewer_icon"></i>
                  <span class="viewer_count">{{item.count}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      <div class="alltv_header">
        <div class="left">
          <i class="lollogo"></i>
          <h2>英雄联盟</h2>
        </div>
        <div class="right_text">更多<i class="right"></i></div>
      </div>
        <div class="main">
          <a href="#" class="g_link" v-for="item in anchor" :key="item.id">
            <div class="g_item">
              <div class="g_pic">
                <span class="game_name">{{item.gamename}}</span>
                <div class="pic">
                  <img class="pic_con" :src="item.imgs" alt="#">
                </div>
              </div>
              <p class="title">{{item.title}}</p>
              <div class="info clearfix">
                <span class="nick">{{item.nick}}</span>
                <div class="viewer_wrap">
                  <i class="viewer_icon"></i>
                  <span class="viewer_count">{{item.count}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      <div class="alltv_header">
        <div class="left">
          <i class="wzrylogo"></i>
          <h2>王者荣耀</h2>
        </div>
        <div class="right_text">更多<i class="right"></i></div>
      </div>
        <div class="main">
          <a href="#" class="g_link" v-for="item in anchor" :key="item.id">
            <div class="g_item">
              <div class="g_pic">
                <span class="game_name">{{item.gamename}}</span>
                <div class="pic">
                  <img class="pic_con" :src="item.imgs" alt="#">
                </div>
              </div>
              <p class="title">{{item.title}}</p>
              <div class="info clearfix">
                <span class="nick">{{item.nick}}</span>
                <div class="viewer_wrap">
                  <i class="viewer_icon"></i>
                  <span class="viewer_count">{{item.count}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      <div class="alltv_header">
        <div class="left">
          <i class="xxlogo"></i>
          <h2>星秀</h2>
        </div>
        <div class="right_text">更多<i class="right"></i></div>
      </div>
        <div class="main">
          <a href="#" class="g_link" v-for="item in anchor" :key="item.id">
            <div class="g_item">
              <div class="g_pic">
                <span class="game_name">{{item.gamename}}</span>
                <div class="pic">
                  <img class="pic_con" :src="item.imgs" alt="#">
                </div>
              </div>
              <p class="title">{{item.title}}</p>
              <div class="info clearfix">
                <span class="nick">{{item.nick}}</span>
                <div class="viewer_wrap">
                  <i class="viewer_icon"></i>
                  <span class="viewer_count">{{item.count}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      <div class="alltv_header">
        <div class="left">
          <i class="chwllogo"></i>
          <h2>吃喝玩乐</h2>
        </div>
        <div class="right_text">更多<i class="right"></i></div>
      </div>
        <div class="main">
          <a href="#" class="g_link" v-for="item in anchor" :key="item.id">
            <div class="g_item">
              <div class="g_pic">
                <span class="game_name">{{item.gamename}}</span>
                <div class="pic">
                  <img class="pic_con" :src="item.imgs" alt="#">
                </div>
              </div>
              <p class="title">{{item.title}}</p>
              <div class="info clearfix">
                <span class="nick">{{item.nick}}</span>
                <div class="viewer_wrap">
                  <i class="viewer_icon"></i>
                  <span class="viewer_count">{{item.count}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      <div class="alltv_header">
        <div class="left">
          <i class="hpjylogo"></i>
          <h2>和平精英</h2>
        </div>
        <div class="right_text">更多<i class="right"></i></div>
      </div>
        <div class="main">
          <a href="#" class="g_link" v-for="item in anchor" :key="item.id">
            <div class="g_item">
              <div class="g_pic">
                <span class="game_name">{{item.gamename}}</span>
                <div class="pic">
                  <img class="pic_con" :src="item.imgs" alt="#">
                </div>
              </div>
              <p class="title">{{item.title}}</p>
              <div class="info clearfix">
                <span class="nick">{{item.nick}}</span>
                <div class="viewer_wrap">
                  <i class="viewer_icon"></i>
                  <span class="viewer_count">{{item.count}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      <div class="alltv_header">
        <div class="left">
          <i class="jdqslogo"></i>
          <h2>绝地求生</h2>
        </div>
        <div class="right_text">更多<i class="right"></i></div>
      </div>
        <div class="main">
          <a href="#" class="g_link" v-for="item in anchor" :key="item.id">
            <div class="g_item">
              <div class="g_pic">
                <span class="game_name">{{item.gamename}}</span>
                <div class="pic">
                  <img class="pic_con" :src="item.imgs" alt="#">
                </div>
              </div>
              <p class="title">{{item.title}}</p>
              <div class="info clearfix">
                <span class="nick">{{item.nick}}</span>
                <div class="viewer_wrap">
                  <i class="viewer_icon"></i>
                  <span class="viewer_count">{{item.count}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      anchor:[
        {gamename:"英雄联盟",imgs:require("../assets/lol.jpg"),title:"【帐】韩服王者局",nick:"聆听丶虎神",count:"122.5万"},
        {gamename:"炉石传说",imgs:require("../assets/game2.jpg"),title:"认真模式，万5冲万6",nick:"太极剑",count:"43.8万"},
        {gamename:"王者荣耀",imgs:require("../assets/game2.jpg"),title:"天秀李白，单排第四个100星！",nick:"正恒丶夕阳",count:"102.6万"},
        {gamename:"和平精英",imgs:require("../assets/game2.jpg"),title:"【王牌追猎1v4】",nick:"DK-不求人",count:"604.1万"}
        ]
    }
  }
}
</script>

<style scoped>
  .alltvbody{
    width: 100%;
  }
  div{
    display: block;
  }
  .logo{
    background-image: url(../assets/alltv.png);
    width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
  }
  .lollogo{
    background-image: url(../assets/Lol_logo.png);
    width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
  }
  .wzrylogo{
    background-image: url(../assets/wzry.png);
    width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
  }
  .xxlogo{
    background-image: url(../assets/xx.png);
    width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
  }
  .chwllogo{
    background-image: url(../assets/chwl.png);
    width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
  }
  .hpjylogo{
    background-image: url(../assets/hpjy.png);
    width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
  }
  .jdqslogo{
    background-image: url(../assets/jdqs.png);
    width: 25px;
    height: 25px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
    background-size: 100% 100%;
    background-color: transparent;
  }
  .left{
    float: left;
    width: 200px;
    margin-top:-12px;
    flex:1;
  }
  .right{
    display: inline-block;
    vertical-align: middle;
    width: 14px;
    height: 17px;
    margin-top: -3px;
    background-image: url(../assets/right.png);
    background-size: 100% 100%;
  }
  .alltvbg{
    margin-bottom: 12px;
    background-color: #fff;
  }
  .alltv_header{
    position: relative;
    padding: 12px 8px 15px;
    display: flex;;
    height: 25px;
  }
  a{
    /* display: flex; */
    text-decoration:none;
  }
  .right_text{
    width: 42px;
    float: right;
    padding: 2px 0 5px 10px;
    font-size: 14px;
    color: #666;
  }
  h2{
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    word-break: keep-all;
    font-size: 1.0625rem;
    color: #333;
  }
  .main{
    display: flex;
    flex-wrap:wrap;
  }
  .g_link{
    width:48%;
    margin-left: 1%;
    margin-right: 1%;
    padding-bottom: 10px;
  }
  .g_item{
    position: relative;
    overflow: hidden;
    -webkit-box-flex:1;
    justify-content: center;
  }
  .g_pic{
    position: relative;
  }
  .game_name{
    font-size: 12px;
    position: absolute;
    z-index: 2;
    top: 3px;
    right: 3px;
    padding: 2px 6px;
    vertical-align: middle;
    color: #eee;
    background: rgba(44,49,57,.7);
  }
  .pic{
    position: relative;
    width: 100%;
    height: 0px;
    padding-top: 56.25%;
    border-radius: 5px;
    overflow: hidden;
  }
  .pic_con{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .title{
    padding: .3rem 3px 0;
    font-size: 13px;
    color: #000;
    font-weight: 500;
    line-height: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    word-break: normal;
  }
  .info{
    color: #999;
    padding: 3px;
    height: 13px;
    line-height: 13px;
    font-size: 11px;
  }
  .nick{
    float: left;
    max-width: 40%;
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    word-break: normal;
  }
  .viewer_wrap{
    float: right;
  }
  .viewer_icon{
    float: left;
    margin-top: -1px;
    width: 11px;
    display: block;
    height: 11px;
    background: url(../assets/user.png) no-repeat 0 0/contain;
    background-size: 100%;
  }
  .viewer_count{
    float: left;
    padding-left: 3px;
  }
</style>