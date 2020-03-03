import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

/*axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
  console.log(res);
})

axios({
  /!*url: 'http://123.207.32.32:8000/home/data?type=sell$page=3'*!/
  url: 'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})*/

// 2. axios 发送并发请求

/*axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  type: 'sell',
  page: 3
})]).then(result => {
  console.log(result);
})*/

/*// 全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([axios({
  url: 'home/multidata'
}), axios({
  url: 'home/data',
  type: 'sell',
  page: 3
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))*/

// 4. 创建对应的实例
/*
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 2
  }
}).then(res => {
  console.log(res);
})

const instance2 = axios.create({
  baseURL: 'http//:123.208.33.33:8000',
  timeout: 6000
})
*/

// 5. 封装request模块
import {request} from './network/request'

/*request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})*/

/*request({
  baseConfig: {

  },
  success: function (res) {

  },
  failure: function (err) {

  }
},
  )*/

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  /*console.log(err);*/
})

export default axios
