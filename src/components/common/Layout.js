import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '@/pages'

export default ()=> {
	return (
		<div className='qf-layout'>
			<Switch>
				{
					routes.map(ele=>(
						<Route exact key={ele.id} path={ele.path} component={ele.component} />
					))
				}
				<Redirect from ='/*' to='/dashboard' />
			</Switch>
		</div>
	)
}
