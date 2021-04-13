import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import './style.scss'

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

	const login = (values) => {
		// axios
		localStorage.setItem('token', values.username)
		// // props.onLogin(true)
		setTimeout(()=>{
			history.replace('/dash')
		}, 1000)
		console.log('values', values)
	}

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
