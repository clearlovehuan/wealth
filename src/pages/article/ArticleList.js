import React, { useState, useEffect } from 'react'
import {
	Row,
	Col,
	Input,
	Table,
	Radio,
	Divider
} from 'antd'

import { ArticleCateSelect } from '@/components'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
		render: (age)=>{
			return <div>{age*100}</div>
		}
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
	{
		title: 'handle',
		dataIndex: 'handle',
		render: ()=>{
			return (
				<div className='qf-table-row-handle'>
					<a className='edit'>编辑</a>
          <a className='del'>删除</a>
				</div>
			)
		}
	}
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  }
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  })
}

export default ()=> {
	const [filter, setFilter] = useState({
		text: '',
		cate: ''
	})
	const [tableSize, setTableSize] = useState('default')

	useEffect(()=>{
		console.log('我要触发调接口', filter)
		return undefined
	}, [filter])


	// 当查询条件变化时，更新filter，进一步触副作用调接口
	const filterChange = (val,key) => {
		// 深复制
		const newFilter = {...filter}
		newFilter[key] = val
		setFilter(newFilter)
	}

	const customTableHeader = ()=> {
		const changeSize = ()=> {
			setTableSize('small')
		}
		return (
			<div className='qf-table-custom-header'>
				<Row>
					<Col span={2}>我的标题</Col>
					<Col offset={20} span={2}>
						<span onClick={changeSize}>test</span>
					</Col>
				</Row>
			</div>
		)
	}

	return (
		<div className='qf-article-list'>
			<div className='qf-filter-wrap'>
				<Row align='middle'>
		      <Col span={2}>
						<span className='label'>搜索:</span>
					</Col>
					<Col span={4}>
						<Input
							allowClear
							placeholder="请输入文章关键字"
							value={filter.text}
							onChange={e=>filterChange(e.target.value, 'text')}
						/>
					</Col>
					<Col span={2}>
						<span className='label'>类别:</span>
					</Col>
					<Col span={3}>
						<ArticleCateSelect
							data={[{id:1,cate:'good',cate_zh:'精华'}]}
							value={filter.cate}
							onChange={val=>filterChange(val, 'cate')}
							allowClear
							showAll
						/>
					</Col>
		    </Row>
			</div>

			<div className='qf-table-wrap' style={{paddingTop: 0}}>
				<Table
					rowSelection={{
						type: 'checkbox',
						...rowSelection
					}}
					columns={columns}
					dataSource={data}
					title={customTableHeader}
					size={tableSize}
				/>
			</div>
		</div>
	)
}
