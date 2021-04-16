import Dashboard from './common/Dashboard'
import Login from './common/Login'
import { Route, Switch, Redirect } from 'react-router-dom'

export default props =>{
	return (
		<Switch>
			<Route path='/login' render={()=>{
				const token = localStorage.getItem('token')
				return token ? <Redirect to='/dash' /> : <Login />
			}} />
			<Route path='/dash' render={()=>{
				const token = localStorage.getItem('token')
				return token ? <Dashboard {...props} /> : <Redirect to='/login' />
			}} />
		</Switch>
	)
}
