import loadable from "@loadable/component"

import {
	DribbbleSquareOutlined
} from '@ant-design/icons'

const ArticleList = loadable(()=>import('./article/ArticleList'))
const ArticleInfo = loadable(()=>import('./article/ArticleInfo'))

const NotFound = loadable(()=>import('./user/NotFound'))

// 无权限的路由
export const constRoutes = [
	{
		id: 1101,
		text: '404',
		hidden: true,
		path: '/404',
		component: NotFound
	}
]

// 有权限的路由
export default [
	{
		id: 10,
		text: '文章管理',
		icon: <DribbbleSquareOutlined />,
		permission: ['admin', 'shop'],
		children: [
			{
				id: 1001,
				text:'文章列表',
				path: '/article/list',
				component: ArticleList,
				permission: ['shop']
			},
			{
				id: 1002,
				text:'文章详情',
				hidden: true,
				path: '/article/info',
				component: ArticleInfo,
				permission: ['admin']
			}
		]
	}
]
