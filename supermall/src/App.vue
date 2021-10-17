<template>
  <div id="app" class="wrapper">
<!--   让Home不随意销毁-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
