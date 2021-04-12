// action生成器的封装
import types from '../actionTypes'
import { fetchMusic } from '@/utils/api'

const countAddOrSub = payload => ({type:types.COUNT_CHANGE,payload})
const msgChange = payload => ({type: types.STUDY_UPDATE, payload})

// 在Redux中，dispatch是同步的，它负责向Store中派发plain action object
// 用于支持异步action的生成器方法，必须 return一个function
const getMusic = payload => {
	console.log('payload', payload)
	return function(dispatch) {
		fetchMusic(payload).then(res=>{
			console.log('音乐列表', res)
			dispatch({
				type: types.GET_QQ_MUSIC,
				payload: res.song.list
			})
		}).catch(()=>{
			dispatch({
				type: types.GET_QQ_MUSIC,
				payload: []
			})
		})
	}
}

export {
	countAddOrSub,
	msgChange,
	getMusic
}
