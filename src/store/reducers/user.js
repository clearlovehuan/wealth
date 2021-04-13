let initState = {
	userinfo: {
		role: 'shop'
	}
}

export default (state=initState) => {
	let newState = {...state}
	return newState
}
