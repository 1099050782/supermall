<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  /*规定灵活的项目在必要的时候拆行或拆列*/
  flex-wrap: wrap;
  /*均等分 项目位于各行之前、之间、之后都留有空白的容器内*/
  justify-content: space-around;
  padding: 2px;
}
</style>
