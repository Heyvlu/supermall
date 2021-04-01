<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <side-bar :sideList="['正在流行','上衣','裤子','裙子','内衣','女鞋','男装','包包','运动','配饰','美妆','个护','家居']"/>
    <scroll class="content" @scroll="scrollTo" :probe-type="3" ref="scroll">
      <div class="goods">
        <goods-list :goods="categoryList"/>
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" class="back-top"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import SideBar from './childComps/SideBar'
import GoodsList from 'components/content/goods/GoodsList'

import {getCategory,getRecommendDetail} from 'network/category'
import {backTopMixin} from 'common/mixin'

export default {
  name:"Category",
  components:{
    Scroll,
    NavBar,
    SideBar,
    GoodsList
  },
  data(){
    return {
      categoryList:[]
    }
  },
  mixins:[backTopMixin],
  methods:{
    scrollTo(position){
      this.listenShowBackTop(position);
    }
  },
  created(){
    getCategory().then(res=>{
      this.categoryList=res.data.data.list;
    })
  }
}
</script>

<style scoped>
  .category{
    height: calc(100vh - 49px - 44px);
  }

  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }

  .content{
    height: 100%;
    padding-left: 100px;
    overflow: hidden;
  }

  .goods{
    padding-top: 5px;
  }

  .back-top{
    z-index: 9999;
  }
</style>