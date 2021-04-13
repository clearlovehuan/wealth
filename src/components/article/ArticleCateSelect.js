import React from 'react'
import PropTypes from 'prop-types'

import { Select } from 'antd'
const { Option } = Select

const ArticleCateSelect = props =>{
	const { data, value, onChange, showAll } = props
	const renderOptions = ()=>{
		return data.map(ele=>(
			<Option key={ele.id} value={ele.cate}>{ele.cate_zh}</Option>
		))
	}
	return (
		<div className='qf-article-cate-select'>
			<Select
				{ ...props }
				style={{width:'100%'}}
				value={value}
				onChange={val=>onChange(val||'')}
			>
				{ showAll && <Option value=''>全部</Option>}
				{ renderOptions() }
			</Select>
		</div>
	)
}

ArticleCateSelect.propTypes = {
	data: PropTypes.array,
	value: PropTypes.string,
	onChange: PropTypes.func,
	showAll: PropTypes.bool
}
export default ArticleCateSelect
