<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info/>
    <account-info/>
    <normal-list :list="orderList" class="border"/>
    <normal-list :list="serviceList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import NormalList from './childComps/NormalList'

export default {
  name:"Profile",
  components:{
    NavBar,
    UserInfo,
    AccountInfo,
    NormalList
  },
  data(){
    return {
      orderList:[
        {icon:"message.svg",info:'我的消息'},
        {icon:"pointer.svg",info:'积分商城'},
        {icon:"vip.svg",info:'会员卡'}
      ],
      serviceList:[
        {icon:"cart.svg",info:"我的购物车"},
        {icon:"shopping.svg",info:"下载购物APP"}
      ]
    }
  }
}
</script>

<style scoped>
  .profile{
    height:100vh;
  }

  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }

  .border{
    border-bottom: 15px solid rgba(87, 82, 82, 0.09);
  }
</style>