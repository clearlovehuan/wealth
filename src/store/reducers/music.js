import types from '../actionTypes'

let initState = {
	list: []
}

export default (state=initState, action) => {
	// let newState = {...state}
	let newState = JSON.parse(JSON.stringify(state))
	switch (action.type) {
		case types.GET_QQ_MUSIC:
			// do something
			newState.list = action.payload

			break
		default:
	}
	return newState
}
