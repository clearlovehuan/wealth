import types from '../actionTypes'

let initState = {
	count: 1
}

// action = { type, payload }
export default (state=initState, action) => {
	let newState = { ...state }
	switch (action.type) {
		case types.COUNT_CHANGE:
			newState.count += action.payload
			break
		default:
	}
	return newState
}
