import React from 'react'
import { useSelector } from 'react-redux'

import { Route, Redirect, Switch } from 'react-router-dom'

// authorRoutes有权限的路由
// constRoutes没有权限的路由
import authorRoutes, { constRoutes } from '@/pages'

// const NoMatch = ()=>{
// 	return <Redirect to='/dash/404' />
// }



const AuthorRoute = ({noMatch, permission, ...rest}) => {
	const userinfo = useSelector(store=>store.user.userinfo)
	return (
		permission.includes(userinfo.role)
		? <Route {...rest} />
		: <Route {...rest} render={()=>noMatch} />
	)
}

// <Route
// 	key={ele.id}
// 	path={'/dash'+ele.path}
// 	component={ele.permission.includes(userinfo.role)?ele.component:NoMatch}
// />

export default ()=>{

	// const userinfo = useSelector(store=>store.user.userinfo)

	// 生成“有权限的路由规则”
	const renderAuthorRoutes = ()=> {
		const res = []
		const recursion = arr => {
			arr.map(ele=>{
				res.push(
					<AuthorRoute
						key={ele.id}
						noMatch={<Redirect to='/dash/404' />}
						path={'/dash'+ele.path}
						permission={ele.permission||[]}
						component={ele.component}
						exact
					/>
				)
				ele.children && recursion(ele.children)
			})
		}
		authorRoutes.map(ele=>(
			ele.children && recursion(ele.children)
		))
		return res
	}

	// 生成“没有权限”的路由规则
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
				{renderAuthorRoutes()}
				{renderConstRoutes()}
				<Redirect from='/dash/*' to='/dash/article/list' />
			</Switch>
		</div>
	)
}
