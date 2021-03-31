<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <side-bar :sideList="['正在流行','上衣','裤子','裙子','内衣','女鞋','男装','包包','运动','配饰','美妆','个护','家居']"/>
    <scroll class="content">

    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import SideBar from './childComps/SideBar'

export default {
  name:"Category",
  components:{
    Scroll,
    NavBar,
    SideBar
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
  }
</style>