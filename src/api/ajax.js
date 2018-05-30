/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
URL:请求地址 data:请求体 type:请求方式
 */
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') { // 默认为GET请求
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise // 初始化请求函数
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' // 准备数据拼接字符串
      Object.keys(data).forEach(key => { // 将对象转化为数组
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&')) // 去除多余&符号
        url = url + '?' + dataStr
      }

      // 发送GET请求
      promise = axios.get(url)
    } else { // POST请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve 获取请求成功的数据
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject 返回错误信息
      reject(error)
    })
  })
}