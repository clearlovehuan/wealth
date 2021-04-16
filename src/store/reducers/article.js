import types from '../actionTypes'

let initState = {
	article: {},
	done: 0,
	cates: [],
	info: {}
}

export default (state=initState, action) => {
	let newState = {...state}
	switch (action.type) {
		case types.GET_ARTICLE:
			newState.article = action.payload
			break
		case types.WRITE_ARTICLE_DONE:
			newState.done++
			// 每次新增或编辑完成后，重置info
			newState.info = {}
			break
		case types.GET_ARTICLE_CATES:
			newState.cates = action.payload
			break;
		case types.GET_ARTICLE_INFO:
			newState.info = action.payload
			break;
		default:
	}
	return newState
}
