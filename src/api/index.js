/*
包含n个接口请求函数的模块
函数的返回值: promise对象
请求函数统一用req开头
 */
import ajax from './ajax'
export const reqHomeData = () => ajax('/homedata')
export const reqTopciData = () => ajax('/topicdata')
export const reqNavData = () => ajax('/navdata')
