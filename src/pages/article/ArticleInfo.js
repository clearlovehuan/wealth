import React, {useState, useRef, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { writeArticle, getArticle } from '@/store/actions'

import {
	Input,
	Button,
	Form
} from 'antd'

import {
	ArticleCateSelect,
	UploadImage
} from '@/components'


import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const itemLayout = {
  labelCol: {
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    sm: {
      span: 16,
    },
  },
}

const modules = {
	toolbar: [
		[{ 'header': [1, 2, false] }],
		['bold', 'italic', 'underline','strike', 'blockquote'],
		[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
		['link', 'image'],
		['clean']
	],
}


export default props => {
	// 富文本编辑器
	const [content, setContent] = useState('')
	const [flag, setFlag] = useState(0)
	const [id, setId] = useState(null)
	// 表单上各种api操作
	const [form] = Form.useForm()

	const dispatch = useDispatch()
	const done = useSelector(store=>store.article.done)
	const info = useSelector(store=>store.article.info)
	console.log('info', info)

	// 格式化查询字符串，得到 id
	useEffect(()=>{
		console.log('query', )
		const search = props.location.search // ?id=920930932
		// 当是“编辑”时
		if(search) {
			const id = search.replace('?id=', '')
			dispatch(getArticle({id}))
			setId(id)
		}
		return undefined
	}, [])

	useEffect(()=>{
		// 只有编辑时，才需要执行这行代码
		if (id) {
			form.setFieldsValue(info)
			setContent(info.content)
		}
		return undefined
	}, [info])


	useEffect(()=>{
		setFlag(flag+1)
		return undefined
	}, [done])

	useEffect(()=>{
		if(flag>1) {
			props.history.goBack()
		}
		return undefined
	}, [flag])

	// 提交
	const submit = data => {
		data.content = content
		if(id) data.id = id
		dispatch(writeArticle(data))
	}

	return (
		<div className='qf-article-info'>
			<div className='qf-filter-wrap'>
				<Form
					form={form}
					name="submit"
					onFinish={submit}
					initialValues={{}}
					scrollToFirstError
				>
					<Form.Item
						{...itemLayout}
						name="title"
						label="文章标题"
						rules={[
							{ required: true, message: 'Please input your E-mail!' }
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						{...itemLayout}
						name='cate'
						label='文章类别'
						rules={[
							{ required: true, message: 'Please input your E-mail!' }
						]}
					>
						<ArticleCateSelect
							data={[{id:1, cate:'good', cate_zh:'精华'}]}
						/>
					</Form.Item>
					<Form.Item
						name='img'
						label='文章缩略图'
						{...itemLayout}
					>
						<UploadImage />
					</Form.Item>
					<Form.Item
						wrapperCol={{span:16,offset:4}}
					>
						<ReactQuill
							value={content}
							onChange={e=>setContent(e)}
							modules={modules}
						/>
					</Form.Item>
					<Form.Item
						wrapperCol={{offset:4}}
					>
						<Button
							style={{marginTop:'25px'}}
							htmlType="submit"
						>
							{ id ? "修改" : "新增" }
						</Button>
					</Form.Item>
				</Form>






			</div>
		</div>
	)
}
