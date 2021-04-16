import axios from './axios'

// QQ音乐
export function fetchMusic(params) {
	return axios({
		url: '/soso/fcgi-bin/client_search_cp',
		method: 'get',
		params
	})
}

// 登录接口
export function fetchLogin(data) {
	return axios({
		url: '/user/login',
		method: 'post',
		data
	})
}
// 获取用户信息
export function fetchUserInfo(params) {
	return axios({
		url: '/user/getUserInfo',
		method: 'get',
		params
	})
}

// 查询文章列表
export function fetchArticleList(params) {
	return axios({
		url: '/article/list',
		method: 'get',
		params
	})
}

// 文章新增与编辑
export function fetchArticleWrite(data) {
	return axios({
		url: '/article/write',
		method: 'post',
		data
	})
}

// 文章类目
export function fetchArticleCates(params) {
	return axios({
		url: '/article/cates',
		method: 'get',
		params
	})
}

// 文章详情
export function fetchArticle(params) {
	return axios({
		url: '/article/info',
		method: 'get',
		params
	})
}

// 删除文章
export function fetchArticleDel(params) {
	return axios({
		url: '/article/delete',
		method: 'get',
		params
	})
}
