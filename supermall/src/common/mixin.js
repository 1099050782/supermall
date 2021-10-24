import {debounce} from "@/common/utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    //防抖动debounce
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    console.log("hai");
  }
}
