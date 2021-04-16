import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import './style.scss'

import { useDispatch, useSelector } from 'react-redux'
import { loginSubmit } from '@/store/actions'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
}

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
}

const styles = {
	wrap: {
		marginTop: '50px',
		width: '200px'
	},
	box: {
		background: 'red',
		width: '100px',
		height: '100px'
	}
}

export default props=>{

	const history = useHistory()
  const dispatch = useDispatch()
  const token = useSelector(store=>store.user.token)

	const login = (values) => {
		console.log('values', values)
    dispatch(loginSubmit(values))
	}
  // 当redux中的token进来时，这个副作用将再次执行
  useEffect(()=>{
    if(token) history.replace('/dash')
    return undefined
  })

	return (
		<div className='qf-login'>
			<div className='wrap'>
				<Form
					{...layout}
					name="basic"
					initialValues={{
						remember: true
					}}
					onFinish={login}
				>
					<Form.Item
						label="用户名"
						name="username"
						rules={[
							{ required: true, message: '请填写用户名' }
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="密码"
						name="password"
						rules={[
							{ required: true, message: 'Please input your password!' }
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>记住密码</Checkbox>
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}
