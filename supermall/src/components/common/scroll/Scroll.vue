<template>
<!--  ref绑定在组件中，通过this.$refs.refname获取到的是一个组件对象；绑定在普通元素中，获取的是一个元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {

    })
  }
}
</script>

<style scoped>

</style>
