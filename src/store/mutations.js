/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVLIST,
  REACT_NAVINDEX,
  RECEIVE_NAVDETAIL
} from './mutation-type'

export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  }, 
  [RECEIVE_NAVDATA] (state, {navData}) {
    state.navData = navData
  },
  [RECEIVE_NAVLIST] (state) {
    let arr = []
    state.navData.forEach(item => {
      arr.push(item.name)
    })
    if (arr.length > 13) {
      arr.length = 13
    }
    state.navList = arr
  },
  [REACT_NAVINDEX] (state, {index}) {
    state.navIndex = index
  },
  [RECEIVE_NAVDETAIL] (state) {
    state.navDetail = state.navData[state.navIndex]
  }
}