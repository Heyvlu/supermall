<template>
  <div class="count">
    <div class="left">
      <div>
        <span class="number">0.00</span>元
      </div>
      <div>我的余额</div>
    </div>
    <div class="center">
      <div>
        <span class="number">0</span>个
      </div>
      <div>我的优惠</div>
    </div>
    <div class="right">
      <div>
        <span class="number">0</span>分
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"AccountInfo"
}
</script>

<style scoped>
  .count{
    display: flex;
    height: 100px;
    font-size: 14px;
    border-bottom: 15px solid rgba(87, 82, 82, 0.07);
  }

  .left, .center, .right{
    flex: 1;
    text-align: center;
    padding-top: 19px;
  }

  .left, .center{
    border-right: 1px solid rgba(87, 82, 82, 0.09);
  }

  .number{
    font-size: 25px;
    color: #ff5f3e;
    font-weight: 700;
  }
</style>