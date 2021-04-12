import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
// 使用react-redux中的Hooks API可以更方便，替代掉connect高阶组件的写法
import { msgChange, countAddOrSub, getMusic } from '@/store/actions'

const str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.top&searchid=26529553481854736&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E8%85%BE%E8%AE%AF%E9%9F%B3%E4%B9%90%E7%9B%9B%E5%85%B8&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
const params = {}
str.split('&').map(ele=>{
	const arr = ele.split('=')
	params[arr[0]] = arr[1]
})

export default props=> {

	const dispatch = useDispatch()
	const msg = useSelector(store=>store.study.msg)
	const count = useSelector(store=>store.count.count)
	const changeCount = step => dispatch(countAddOrSub(step))
	const musicList = useSelector(store=>store.music.list)

	useEffect(()=>{
		// 触发
		params.w = '张杰'
		console.log('params', params)
		// 页面初始化
		dispatch(getMusic(params))
		return undefined
	}, [])

	// 点击事件
	const click = () => {
		dispatch(msgChange('hello world'))
	}
	return (
		<div>
			<h1>学习Redux</h1>
			<hr/>
			<h1>{msg}</h1>
			<button onClick={click}>修改redux中的msgs</button>
			<hr/>
			<hr/>

			<h1>{count}</h1>
			<button onClick={()=>changeCount(-1)}>自减</button>
			<button onClick={()=>changeCount(1)}>自增</button>
			<hr/>

			<h1>音乐列表</h1>
			{
				musicList.map(ele=>(
					<div key={ele.id}>
						<span>{ele.id}</span>
					</div>
				))
			}


		</div>
	)
}
