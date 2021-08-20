const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《计算机组成原理》',
        date: '2005-10',
        price: 98,
        count: 1,
      },
      {
        id: 2,
        name: '《计算机网络安全》',
        date: '2005-5',
        price: 100,
        count: 1,
      },
      {
        id: 3,
        name: '《算法设计与分析》',
        date: '2005-2',
        price: 68,
        count: 1,
      },
      {
        id: 4,
        name: '《数据结构》',
        date: '2005-12',
        price: 128,
        count: 1,
      },
    ]
  },

  methods: {
    //方法二:
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2);
    // }
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      // //1.方法一:(普通的for循环)
      // let totalPrice = 0;
      //     for (let i = 0; i < this.books.length; i++) {
      //       totalPrice += this.books[i].price * this.books[i].count;
      //     }
      //     return totalPrice;

    // //  2.方法二: for (let i in this.books)
    //   let totalPrice = 0;
    //   for (let i in this.books) {
    //     const book = this.books[i];
    //     totalPrice += book.price * book.count;
    //   }
    //   return totalPrice;

    // //  3. 方法三: for (let i of this.books)
    //   let totalPrice = 0;
    //      for (let item of this.books) {
    //        totalPrice += item.price * item.count;
    //      }
    //      return totalPrice;

    //  4. 方法四: reduce
    }
  },
  //方法三:
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },

})