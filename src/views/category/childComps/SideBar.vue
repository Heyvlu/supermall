<template>
  <div class="side-bar">
    <div v-for="(item,index) in sideList" :key="index" 
        class="side-bar-item"
        :class="{active:index===currentIndex}"
        @click="beActive(index)"
        >{{item}}</div>
  </div>
</template>

<script>
export default {
  name:"SideBar",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    sideList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    beActive(index){
      this.currentIndex=index;
    }
  }
}
</script>

<style scoped>
  .side-bar{
    position: fixed;
    left: 0;
    top: 44px;

    height: calc(100vh - 49px - 44px);
    width: 100px;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .side-bar-item{
    flex: 1;
    background: rgb(110, 99, 99,.1);
    padding-top: 10%;
    box-sizing: border-box;
  }

  .active{
    background: #fff;
    border-left: 4px solid rgb(231, 125, 142);
  }
</style>