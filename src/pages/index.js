import loadable from "@loadable/component"

import { Dashboard } from '@/components'


const TestRedux = loadable(()=>import('./study'))
const TestReduxWithHook = loadable(()=>import('./study/TestReduxWithHook'))

export default [
	{
		id: 0,
		path: '/dashboard',
		component: Dashboard
	},
	{
		id: 1,
		path: '/redux',
		component: TestRedux
	},
	{
		id: 2,
		path: '/redux/hook',
		component: TestReduxWithHook
	}
]
