import { useState, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { AuthorLayout } from '@/components'
import { Provider } from 'react-redux'
import store from '@/store'

// 国际化 i18n
import { ConfigProvider } from 'antd'
import { LangProvider } from '@/lang'

import enGB from 'antd/lib/locale/en_GB'  // 英文
import zhCN from 'antd/lib/locale/zh_CN'  // 中文
import en from '@/lang/en'
import zh from '@/lang/zh'

const langs = { enGB, zhCN }
const qfLangs = { enGB: en, zhCN: zh }

function App() {
  // 支持国际化
  const [lang, setLang] = useState(enGB)
  const [qfLang, setQfLang ] = useState(en)
  const langChange = e => {
    setLang(langs[e])
    setQfLang(qfLangs[e])
  }
  return (
    <HashRouter>
      <Provider store={store}>
        <ConfigProvider locale={lang}>
          <LangProvider value={qfLang}>
            <AuthorLayout onLang={e=>langChange(e)} />
          </LangProvider>
        </ConfigProvider>
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
