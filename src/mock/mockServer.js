import Mock from 'mockjs'
import NavData from './datanav.json'
import HomeData from './datahome.json'
Mock.mock('/navdata', {
  code: 0,
  data: NavData.categoryL1List
})
Mock.mock('/homedata', {
  code: 0,
  data: HomeData
})
