import loadable from "@loadable/component"

import {
	DribbbleSquareOutlined,
	UsergroupAddOutlined,
	PieChartOutlined
} from '@ant-design/icons'

// 仪表盘
const DashCanvas = loadable(()=>import('./dash/DashCanvas'))

// 文章管理模块
const ArticleList = loadable(()=>import('./article/ArticleList'))
const ArticleInfo = loadable(()=>import('./article/ArticleInfo'))

// 用户管理模块
const NotFound = loadable(()=>import('./user/NotFound'))
const UserManager = loadable(()=>import('./user/UserManager'))

// 出勤模块
const AttendanceList = loadable(() => ('./attendance/attendanceList.js'))
const AttendanceInfo = loadable(() => './attendance/attendanceInfo.js')

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
		id: 9,
		href: true,
		text: '首页大屏',
		icon: <PieChartOutlined />,
		permission: ['admin'],
		path: '',
		component: DashCanvas
	},
	{
		id: 10,
		text: '文章管理',
		icon: <DribbbleSquareOutlined />,
		permission: ['admin', 'manager', 'editor'],
		children: [
			{
				id: 1001,
				text:'文章列表',
				path: '/article/list',
				component: ArticleList,
				permission: ['admin', 'editor']
			},
			{
				id: 1002,
				text:'文章详情',
				hidden: true,
				path: '/article/info',
				component: ArticleInfo,
				permission: ['admin', 'editor']
			}
		]
	},
	{
		id: 11,
		text: '权限管理',
		icon: <UsergroupAddOutlined />,
		permission: ['admin'],
		children: [
			{
				id: 1101,
				text:'成员管理',
				path: '/user/manager',
				component: UserManager,
				permission: ['admin']
			}
		]
	},
	{
		id: 12,
		text: '考勤管理',
		icon: '',
		permission: ['admin'],
		children: [
			{
				id: 1201,
				text:'我的考勤',
				path: '/attendance/list',
				component: AttendanceList,
				permission: ['admin']
			},
			{
				id: 1202,
				text:'请假加班',
				path: '/attendance/info',
				component: AttendanceInfo,
				permission: ['admin']
			}
		]
	}
]

//最后一次测试
