<template>
  <div class="user">
    <img src="~assets/img/profile/avatar.svg" class="userImage" alt="">
    <div class="center">
      <div class="text">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" class="phoneImage">
        <span class="phoneNumber">暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" class="arrowImage">
    </div>
  </div>
</template>

<script>
export default {
  name:"UserInfo"
}
</script>

<style scoped>
  .user{
    display: flex;
    height: 85px;
    color: #fff;
    background: var(--color-tint);
  }

  .userImage{
    width: 70px;
    margin-bottom: 5px;
    margin-left: 15px;
  }

  .center{
    flex: 1;
    padding-left: 15px;
    padding-top: 16px;
  }

  .phone{
    font-size: 10px;
    padding-top: 5px;
  }

  .phoneImage{
    height: 19px;
    position: fixed;
    left: 94px;
  }

  .phoneNumber{
    padding-left: 14px;
  }

  .arrow{
    width: 20px;
    margin-right: 15px;
  }

  .arrowImage{
    width: 20px;
    padding-top: 33px;
  }
</style>