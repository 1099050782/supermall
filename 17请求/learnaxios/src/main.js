import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//axios发送并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 3
  }
})]).then(results => {
  console.log(results);
  console.log(results[0]);
  console.log(results[1]);
})
//封装request模块
import {request} from "./network/request";

request({
  url: 'home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
