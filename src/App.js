import { HashRouter } from 'react-router-dom'
import { AuthorLayout } from '@/components'
import { Provider } from 'react-redux'
import store from '@/store'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <AuthorLayout />
      </Provider>
    </HashRouter>
  )
}

export default App



// <Switch>
// {
//   routes.map(ele=>(
//     <Route
//       key={ele.id}
//       path={ele.path}
//       component={ele.component}
//     />
//   ))
// }
// </Switch>
