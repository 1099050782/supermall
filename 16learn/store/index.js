import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'zhangsan', age: 18},
      {id: 111, name: 'lisi', age: 28},
      {id: 112, name: 'wangwu', age: 21},
      {id: 113, name: 'huliu', age: 19}
    ],
    info: {
      name: 'huangba',
      age: 26,
      height:1.86
    }
  },
  mutations: {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // //1.普通
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    // 2.特殊
     incrementCount(state, payload) {
       state.counter += payload.count
     },
    addStudent(state, stu) {
      state.students.push(stu)
    },
  //  增加和删除
    updateInfo(state) {
      state.info.name = 'huangjie'
      //增加
      Vue.set(state.info, 'address', '北京')
      //删除
      Vue.delete(state.info, 'age')

    }
  },
  //接收一个context参数对象
  actions: {
    //context上下文
    aUpdateInfo(context, payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('111')
        }, 1000)
      })
    }
  },
  getters: {
    porwerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  //modules里面可以再添加state,mutations,getters等
  modules:{

  }
})

//3.导出store独享
export default store
