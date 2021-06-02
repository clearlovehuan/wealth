import types from '../actionTypes'

let initState = {
	token: '',
	userinfo: {role: ''},
	lang: ''
}

export default (state=initState, action) => {
	let newState = {...state}
	switch (action.type) {
		case types.FETCH_LOGIN:
			newState.token = action.payload
			break
		case types.FETCH_USER_INFO:
			newState.userinfo = action.payload
			// newState.userinfo = ['admin']
			console.log('redux userinfo', newState)
			break;
		case types.LOGOUT_SUBMIT:
			newState.token = ''
			newState.userinfo = {}
			break;
		default:
	}
	return newState
}
