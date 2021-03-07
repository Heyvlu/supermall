<template>
      <tab-bar>
      <tab-bar-item path="/home" >
        <span class="svg-container" slot="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye1"></use>
          </svg>
        </span>
        <span class="svg-container" slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
        </span>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <span class="svg-container" slot="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-leimupinleifenleileibie"></use>
          </svg>
        </span>
        <span class="svg-container" slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-classify"></use>
          </svg>
        </span>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="cart" >
        <span class="svg-container" slot="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-che-copy"></use>
          </svg>
        </span>
        <span class="svg-container" slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-che-copy1"></use>
          </svg>
        </span>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" >
        <span class="svg-container" slot="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
          </svg>
        </span>
        <span class="svg-container" slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sself"></use>
          </svg>
        </span>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name:"MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>