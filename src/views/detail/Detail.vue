<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
  import {debounce} from 'common/utils'
  import {backTopMixin} from 'common/mixin'

  export default{
    name:"Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList
    },
    mixins:[backTopMixin],
    data(){
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0
      }
    },
    created(){
      // 1.保存传入的iid
      this.iid=this.$route.params.iid;

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res=>{
        // console.log(res);
        // 1.获取顶部的图片轮播数据
        const data=res.data.result;
        this.topImages=data.itemInfo.topImages;
      
        // 2.获取商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      
        // 3.创建店铺信息的对象
        this.shop=new Shop(data.shopInfo);

        // 4.保存商品的详情数据
        this.detailInfo=data.detailInfo;

        // 5.获取参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);
      
        // 6.取出评论的信息
        if(data.rate.cRate !==0){
          this.commentInfo=data.rate.list[0];
        }

        // this.$nextTick(()=>{
        // })
      });

      // 3.请求推荐数据
      getRecommend().then(res=>{
        this.recommends=res.data.data.list;
      })

      // 4.给getThemeTopY赋值(对给this.getThemeTopY赋值的操作进行防抖)
      this.getThemeTopY=debounce(()=>{
        this.themeTopYs=[];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop -44);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop -44);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop -44);
      },100)
    },
    methods:{
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      detailImageLoad(){
        this.getThemeTopY();
      },
      contentScroll(position){
        // 1.获取y值
        const positionY=-position.y;

        // 2.positionY和主题中值进行对比
        // [0, 2647, 4004, 4202]
        // positionY在0和2647之间，index=0
        // positionY在=2647和4004之间，index=1
        // positionY在=4004和4202之间，index=2
        // positionY大于等于4202，index=3
        let length=this.themeTopYs.length;
        for(let i =0;i<length;i++){
          if(this.currentIndex!==i && ((i<length - 1 && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1]) || (i===length-1 && positionY>=this.themeTopYs[i]))){
            this.currentIndex = i;
            this.$refs.nav.currentIndex=this.currentIndex;
          }
        }

        // 3.是否显示回到顶部
        this.listenShowBackTop(position);
      },
      addToCart(){
        // 1.获取购物车需要展示的信息
        const product={};
        product.image=this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.realPrice;
        product.iid=this.iid;

        // 2.将商品添加到购物车里
        this.$store.dispatch('addCart',product).then(res=>{
          this.$toast.show(res,2000);
        })
      }
    }
  }
</script>

<style scoped>
  #detail{
    position:relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    height: calc(100% - 44px - 49px);
  }
</style>