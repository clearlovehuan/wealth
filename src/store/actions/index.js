// action生成器的封装
import types from '../actionTypes'
import {
	fetchMusic,
	fetchLogin,
	fetchUserInfo,
	fetchArticleList,
	fetchArticleWrite,
	fetchArticleCates,
	fetchArticle,
	fetchArticleDel
} from '@/utils/api'

const countAddOrSub = payload => ({type:types.COUNT_CHANGE,payload})
const msgChange = payload => ({type: types.STUDY_UPDATE, payload})

// 在Redux中，dispatch是同步的，它负责向Store中派发plain action object
// 用于支持异步action的生成器方法，必须 return一个function
export const getMusic = payload => {
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

// 登录
export const loginSubmit = data => {
	return function(dispatch) {
		fetchLogin(data).then(res=>{
			dispatch({
				type: types.FETCH_LOGIN,
				payload: res.token
			})
			localStorage.setItem('token', res.token)
			// 派发一个获取用户信息的action
			// dispatch(getInfo())
		})
	}
}

// 进入系统的第一件事：用token换取用户信息（权限信息、用户基本信息）
// 因为这个action每次刷新系统内页时，都要调用，所以我在Layout中触发这个action
export const getInfo = () => {
	return dispatch=>{
		fetchUserInfo({}).then(res=>{
			console.log('用户信息', res)
			dispatch({
				type: types.FETCH_USER_INFO,
				payload: res.data
			})
		})
	}
}

// 退出登录
export const logoutSubmit = payload => {
	localStorage.removeItem('token')
	window.location.href = '/#/login'
	// window.location.reload()
	return {
		type: types.LOGOUT_SUBMIT,
		payload: ''
	}
}

// 获取文章列表
export const getArticleList = (params) => {
	return dispatch=>{
		fetchArticleList(params).then(res=>{
			console.log('文章列表', res)
			dispatch({
				type: types.GET_ARTICLE,
				payload: res
			})
		})
	}
}

// 删除文章
export const delArticle = ({id,filter}) => {
	return dispatch=> {
		fetchArticleDel({id: id}).then(res=>{
			// 触发列表更新
			dispatch(getArticleList(filter))
		})
	}
}

// 文章新增与编辑
export const writeArticle = data => {
	return dispatch=>{
		fetchArticleWrite(data).then(()=>{
			console.log('文章新增/编辑成功')
			dispatch({
				type: types.WRITE_ARTICLE_DONE,
				payload: ''
			})
		})
	}
}

// 获取文章类目
export const getArticleCates = params => {
	return dispatch=>{
		fetchArticleCates(params||{}).then(res=>{
			dispatch({
				type: types.GET_ARTICLE_CATES,
				payload: res.list
			})
		})
	}
}

// 获取文章详情
export const getArticle = params => {
	return dispatch=> {
		fetchArticle(params).then(res=>{
			dispatch({
				type: types.GET_ARTICLE_INFO,
				payload: res.info
			})
		})
	}
}
