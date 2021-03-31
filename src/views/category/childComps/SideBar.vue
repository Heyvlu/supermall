<template>
  <div class="side-bar">
    <div v-for="(item,index) in sideList" :key="index" class="side-bar-item">{{item}}</div>
  </div>
</template>

<script>
export default {
  name:"SideBar",
  props:{
    sideList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .side-bar{
    position: fixed;
    height: calc(100vh - 49px - 44px);
    width: 100px;
    text-align: center;
    
  }

  .side-bar-item{
    background: rgb(110, 99, 99,.1);
  }
</style>