<template>
  <div class="normal-list">
    <div v-for="(item,index) in list" :key="index" class="item">
      <span><img :src="iconURL(item)" alt=""  class="listImage"></span>
      <span class="text">{{item.info}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"NormalList",
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isShow:true
    }
  },
  methods:{
		iconURL(item) {
			return require('assets/img/profile/' + item.icon)
    }
  }
}
</script>

<style scoped>
  .normal-list{
    background: #fff;
    font-size: 16px;
  }

  .item{
    height:45px;
    display: flex;
  }

  .listImage{
    width: 20px;
    margin-left: 13px;
    padding-top: 12px;
  }

  .text{
    flex: 1;
    padding-left: 8px;
    padding-top: 13px;
    border-bottom: 1px solid rgba(87, 82, 82, 0.06);
  }
</style>