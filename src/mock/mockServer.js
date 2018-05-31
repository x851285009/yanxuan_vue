import Mock from 'mockjs'
import HomeData from './datahome.json'
import TopicData from './datatopic.json'
import NavData from './datanav.json'

Mock.mock('/homedata', {
  code: 0,
  data: HomeData
})
Mock.mock('/topicdata', {
  code: 0,
  data: TopicData
})
Mock.mock('/navdata', {
  code: 0,
  data: NavData.categoryL1List
})
