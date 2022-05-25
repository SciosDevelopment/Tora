import {FunctionComponent, useEffect} from 'react'
import { ConnectedRouter } from 'connected-react-router'
import axios from 'axios'
import Router from './routes'
import {History} from 'history'
import {useCookies} from 'react-cookie'
import useUser from './hooks/useUser'

interface Interface { history : History}

const App:FunctionComponent<Interface> = ({history} : Interface) => {
  // Router 사용
  const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
  const [cookies, setCookie, removeCookie] = useCookies(['ToraLoginToken', 'ToraID', 'ToraNoID'])
  const {onSetUserInfo, onGetUserInfo, onSetUserID, onGetUserID} = useUser()

  // page이동시 마다 확인 : 임시 체크
  useEffect(()=> {initializeUserInfo()}, [window.location.href])
  
  // 이부분 추후 논의
  const initializeUserInfo = async() => {
      // Cookie가 존재하지 않고 Token이 존재하는경우 : 쿠키가 만료됐지만 로그인한 이력이 있는 경우
      console.log(axios.defaults.headers)
      if(axios.defaults.headers.common['Authorization'] !== undefined && cookies.ToraLoginToken === undefined) {
        var ExpiryTime = new Date()
        const TOKEN_EXPIRY_TIME = 10 
        ExpiryTime.setMinutes(new Date().getMinutes() + TOKEN_EXPIRY_TIME) // 10분 유지
        setCookie('ToraLoginToken', axios.defaults.headers.common['Authorization'], {expires:ExpiryTime})
        setCookie('ToraID', onGetUserInfo, {expires:ExpiryTime})
        setCookie('ToraNoID', onGetUserID, {expires:ExpiryTime})
      }
      
      // Cookie가 존재하고 Token이 존재하지 않는경우 : 새로고침시 토큰 및 유저정보 유지
      if(axios.defaults.headers.common['Authorization'] === undefined && cookies.ToraLoginToken !== undefined) {
        axios.defaults.headers.common['Authorization'] = cookies.ToraLoginToken
        var userID_ = cookies.ToraID
        var userNoID_ = cookies.ToraNoID
        onSetUserInfo(userID_)
        onSetUserID(userNoID_)
      }
  }
  
 
  return (
    <ConnectedRouter history={history}>
      <Router/>
    </ConnectedRouter>
  )
}

export default App