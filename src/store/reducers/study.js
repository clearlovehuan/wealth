import types from '../actionTypes'
let initState = {
	msg: 'hello redux'
}

// reducer是一个纯函数，唯一的输入得到唯一的输出。
// 在Redux中，只能使用reducer来修改store(state)
// 深度理解action，它只能是一个 Plain Object，它只能通过 dispatch(action={}) 派发到Store中来
export default (state=initState, action) => {
	console.log('来自View中的action', action)
	// 因为Store(state)是只读的，所以每次修改Store之前，都要深复制一下。
	// let newState = Object.assign({}, state)
	let newState = { ...state }

	switch (action.type) {
		case types.STUDY_UPDATE:
			// do something
			newState.msg = action.payload
			console.log('newState', newState)
			break;
		default:
			// do something
	}
	return newState
}
