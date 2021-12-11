import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import './scss/style.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import configureStore, {history} from './configureStore'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
//axios.defaults.withCredentials = true
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>
  ,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
