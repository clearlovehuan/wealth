import React from 'react'

// import { connect } from 'react-redux'
// connect语法：connect(fn1,fn2)(UIComponent)

// import { countAddOrSub, changeMsg } from '@/store/actions'

// const mapStateToProps = store => {
// 	return {
// 		msg: store.study.msg,
// 		count: store.count.count
// 	}
// }
// const mapDispatchToProps = dispatch => {
// 	return {
// 		changeMsg: val=>dispatch(changeMsg(val)),
// 		changeCount: step=>dispatch(countAddOrSub(step))
// 	}
// }

export default props=> {
	console.log('props', props)
	let { msg, count } = props

	// 点击事件
	const click = () => {
		props.changeMsg('hello world')
	}

	// 计数器
	const clickCount = arg => {
		props.changeCount(arg)
	}
	return (
		<div>
			<h1>学习Redux</h1>
			<hr/>
			<h1>{msg}</h1>
			<button onClick={click}>修改redux中的msgs</button>
			<hr/>

			<h1>{count}</h1>
			<button onClick={()=>clickCount(-5)}>自减</button>
			<button onClick={()=>clickCount(5)}>自增</button>
		</div>
	)
}

// export default connect(store=>({}), dispatch=>({}))(props=>{
// 	return { <div></div> }
// })
