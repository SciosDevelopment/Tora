import {FunctionComponent} from 'react'
import { ConnectedRouter } from 'connected-react-router'
import Router from './routes'
import {History} from 'history'

interface Interface {
  history : History
}
const App:FunctionComponent<Interface> = ({history} : Interface) => {
  // Router 사용
  return (
      <ConnectedRouter history={history}>
        <Router/>
      </ConnectedRouter>
  )
}

export default App