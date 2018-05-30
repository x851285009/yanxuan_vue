import { 
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVLIST,
  REACT_NAVINDEX,
  RECEIVE_NAVDETAIL
} from './mutation-type'

import {
  reqHomeData,
  reqNavData
} from '../api'

export default {
  async getHomeData ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
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