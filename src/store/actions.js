import { 
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVLIST,
  REACT_NAVINDEX,
  RECEIVE_NAVDETAIL
} from './mutation-type'

import {
  reqHomeData,
  reqTopciData,
  reqNavData
} from '../api'

export default {
  async getHomeData ({commit}, callback) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      callback && callback()
    }
  },
  async getTopicData ({commit}) {
    const result = await reqTopciData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
    }
  },
  async getNavData ({commit}) {
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },
  getNavList ({commit}, callback) {
      commit(RECEIVE_NAVLIST)
      callback && callback()
  },
  setNavIndex ({commit}, index) {
    commit(REACT_NAVINDEX, {index})
  },
  getNavDetail ({commit}, callback) {
    commit(RECEIVE_NAVDETAIL)
    callback && callback()
  }
}