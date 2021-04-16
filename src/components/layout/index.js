import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getInfo } from '@/store/actions'

import { Layout } from 'antd'
import './style.scss'


import QfAside from './QfAside'
import QfContent from './QfContent'
import QfHeader from './QfHeader'
const { Header, Sider, Content } = Layout

export default props => {
	const [ collapse, setCollapse ] = useState(false)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getInfo({}))
		return undefined
	}, [])
	return(
		<div className='qf-layout'>
			<Layout>

				<Sider width={150} collapsed={collapse}>
					<QfAside collapse={collapse} onToggle={e=>setCollapse(e)} />
				</Sider>

				<Layout>
					<Header>
						<QfHeader {...props} />
					</Header>
					<Content>
						<QfContent />
					</Content>

				</Layout>
			</Layout>
		</div>
	)
}
