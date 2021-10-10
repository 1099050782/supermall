<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control"
                 :titles="['流行', '新款', '精选']"/>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
    <ul>1</ul>
  </div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";

import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  data() {
    return {
      banners:[],
      recommends: []
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  background-color:#F5F5F5;
}
.home-nav {
  background-color: var(--color-tint);
  color: #F5F5F5;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
