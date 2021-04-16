import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const UploadImage = props => {
	let { value, onChange } = props
	const [list, setList] = useState([])
	// 用于赋初始值
	useEffect(()=>{
		if (value) {
			setList([{ thumbUrl: 'http://localhost:8888'+value }])
		}
		return undefined
	}, [value])
	// 图片上传
	const imgChange = ({file, fileList}) => {
		// console.log('图片上传 file', file)
		console.log('图片上传 fileList', fileList)
		setList(fileList)
		// 当图片上传成功时，把图片的访问地址返回给父组件
		if(file.status==='done') {
			if(file.response.err===0) {
				onChange && onChange(file.response.data.img)
			}else{
				console.log('ajax成功，业务失败')
			}
		}
	}
	return (
		<div className="qf-upload-image">
			<Upload
				action="http://localhost:9000/api/v1/upload/img"
				name='xxx'
				listType="picture-card"
				fileList={list}
				onChange={imgChange}
				maxCount={1}
			>
				{
					list.length >= 1
					? null
					: (
							<div>
								<PlusOutlined />
								<div style={{ marginTop: 8 }}>Upload</div>
							</div>
						)
				}
			</Upload>
		</div>
	)
}

UploadImage.propTypes = {
	// 这个属性，是 Form.Item 默认给的属性
	value: PropTypes.string,
	onChange: PropTypes.func
}
export default UploadImage
