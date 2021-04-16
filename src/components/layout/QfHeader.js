import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutSubmit } from '@/store/actions'

import {
	Row,
	Col,
	Dropdown
} from 'antd'
import {
	LogoutOutlined,
	DribbbleSquareOutlined
} from '@ant-design/icons'

export default props =>{
	console.log('header props', props)
	const dispatch = useDispatch()
	const logout = () => {
		dispatch(logoutSubmit())
	}
	const menu = (
		<div className='lang'>
			<div onClick={()=>props.onLang('enGB')}>English</div>
			<div onClick={()=>props.onLang('zhCN')}>中文</div>
		</div>
	)
	return(
		<div className='qf-header'>
			<Row>
				<Col span={1} offset={23}>
					<LogoutOutlined onClick={logout} />
					<Dropdown overlay={menu}>
					  <DribbbleSquareOutlined />
					</Dropdown>
				</Col>
			</Row>
		</div>
	)
}
