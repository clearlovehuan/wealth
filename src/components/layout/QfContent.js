import React from 'react'
import { useSelector } from 'react-redux'

import { Route, Redirect, Switch } from 'react-router-dom'

// authorRoutes有权限的路由
// constRoutes没有权限的路由
import authorRoutes, { constRoutes } from '@/pages'

export default ()=>{

	const userinfo = useSelector(store=>store.user.userinfo)

	const NoMatch = ()=>{
		return <Redirect to='/dash/404' />
	}

	// 生成“有权限的路由规则”
	// 当role是空，说明getUserInfo这个接口还没有完成
	// 一定要确保有role时，才执行权限功能代码
	const renderAuthorRoutes = ()=> {
		const res = []
		const role = userinfo.role
		const dash = authorRoutes[0]
		const recursion = arr => {
			arr.map(ele=>{
				res.push(
					<Route
						key={ele.id}
						path={'/dash'+ele.path}
						exact
						component={ele.permission.includes(role)?ele.component:NoMatch}
					/>
				)
				ele.children && recursion(ele.children)
			})
		}
		authorRoutes.map(ele=>(
			ele.children && recursion(ele.children)
		))
		res.push(
			<Route
				key={dash.id}
				path={'/dash'+dash.path}
				exact
				component={dash.component}
			/>
		)
		return res
	}

	// 生成“没有权限”的路由规则
	// 这一套路由规则和role没有关系
	const renderConstRoutes = ()=> {
		return constRoutes.map(ele=>(
			<Route
				path={'/dash'+ele.path}
				key={ele.id}
				component={ele.component}
				exact
			/>
		))
	}

	return(
		<div className='qf-content'>
			<Switch>
				{ userinfo.role && renderAuthorRoutes() }
				{ renderConstRoutes() }
				{/*<Redirect from='/dash/*' to='/dash/article/list' />*/}
			</Switch>
		</div>
	)
}
