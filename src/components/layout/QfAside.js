import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { NavLink, useHistory } from 'react-router-dom'
import routes from '@/pages'


import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { Menu } from 'antd'
const { SubMenu } = Menu
// const routes = []

export default props=>{

	const [current, setCurrent] = useState(1)
	const userinfo = useSelector(store=>store.user.userinfo)

	// 作用：生成声明式链接
	const renderNavLinks = ()=> {

		const res = []
		const dash = routes[0]
		// 渲染仪表盘
		res.push(
			<Menu.Item key={dash.id} icon={dash.icon}>
				<NavLink
					to={'/dash'+dash.path}
				>
					{dash.text}
				</NavLink>
			</Menu.Item>
		)
		// 再渲染有二级菜单的菜单
		routes.map(ele=>{
			// 处理一级菜单的权限管理
			if(!ele.href && ele.permission.includes(userinfo.role)) {
				res.push(<SubMenu key={ele.id} title={ele.text} icon={ele.icon}>
					{
						ele.children && ele.children.map(ele=>(
							(!ele.hidden && ele.permission.includes(userinfo.role))
							&& <Menu.Item key={ele.id}>
								<NavLink
									to={'/dash'+ele.path}
								>
									{ele.text}
								</NavLink>
							</Menu.Item>
						))
					}
				</SubMenu>)
			}
		})
		return res
	}

	return(
		<div className='qf-aside'>
			<Logo />
			<Menu
				onClick={e=>setCurrent(e.key)}
				defaultOpenKeys={['sub1']}
				selectedKeys={[current]}
				mode="inline"
				theme={'dark'}
			>
				{ userinfo.role && renderNavLinks() }
			</Menu>

			<Toggle {...props} />
			{/*<Toggle collapse={collapse} onToggle={e=>onToggle(e)} />*/}
		</div>
	)
}

const Logo = props=>{
	const h = useHistory()
	return (
		<div className="qf-logo">
			<img
				src={'/logo.png'}
				onClick={()=>h.replace('/')}
			/>
		</div>
	)
}

const Toggle = props => {
	let { collapse, onToggle } = props
	return (
		<div className='qf-toggle'>
			{
				collapse
				? <MenuFoldOutlined onClick={()=>onToggle(false)} />
				: <MenuUnfoldOutlined onClick={()=>onToggle(true)} />
			}
		</div>
	)
}
