import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { getArticleCates } from '@/store/actions'

import { Select } from 'antd'
const { Option } = Select

const ArticleCateSelect = props =>{

	const { value, onChange, showAll } = props
	const newProps = {...props}
	delete newProps.showAll

	const cates = useSelector(store=>store.article.cates)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(getArticleCates({}))
		return undefined
	}, [])

	// 渲染来自后端api返回的异步数据
	const renderOptions = arr =>{
		return arr.map(ele=>(
			<Option key={ele.id||ele._id} value={ele.cate}>{ele.cate_zh}</Option>
		))
	}

	return (
		<div className='qf-article-cate-select'>
			<Select
				{...newProps}
				placeholder='请选择品类'
				style={{width:'100%'}}
				value={value}
				onChange={val=>onChange(val||'')}
			>
				{ showAll && <Option value=''>全部</Option> }
				{ cates.length>0 && renderOptions(cates) }
			</Select>
		</div>
	)
}

ArticleCateSelect.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	showAll: PropTypes.bool
}
export default ArticleCateSelect
