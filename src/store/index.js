// Redux（应对面试 3-3-3）

// 第一个3，指的是三个api：createStore / combineReducers / applyMiddleware
// 第二个3，指的是Redux工作流程中的三个核心概念，分别Store、Action(Dispatch)、View
// 第三个3，指的是Store的三个特点：Store单一数据源、Store是只读的、只能通过纯函数Reducer进行修改。

// 是一个可预测状态的数据容器，它是基于Flux思想而开源的项目。
// 技术栈：Redux / React-Redux / Redux-Thunk / Redux-Saga ....

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// thunk用于解决Redux不支持异步action的问题
// thunk这个中间件，在View - Store之间起作用，它用于判断action是不是fn，
// 如果是就构建一个plain object，发送给Store
// 异步action，实际上发生了两次dispatch，第一次Redux什么都没做，第二次才是真正后端数据放入Redux中
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import study from './reducers/study'
import count from './reducers/count'
import music from './reducers/music'
import user from './reducers/user'

// createStore语法：createStore(reducer, {}, middlewares)
const rootReducer = combineReducers({
	study,
	count,
	music,
	user
})

const store = createStore(
	rootReducer,
	compose(applyMiddleware(logger), applyMiddleware(thunk))
)
export default store
