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
  const [cookies, setCookie, removeCookie] = useCookies(['ToraLoginToken', 'ToraID'])
  const {onSetUserInfo} = useUser()
  

  // page이동시 마다 확인 : 임시 체크
  useEffect(()=> {initializeUserInfo()}, [window.location.href])
  
  const initializeUserInfo = async() => {
      // Token이 존재하면 return
      if(axios.defaults.headers.common['Authorization'] !== undefined) return
      
      // cookie에 있는 토큰이 유효하면 로그인 토큰 재발급, 유효하지않으면 Cookie 제거
      if(cookies.ToraLoginToken !== undefined) {
        axios.defaults.headers.common['Authorization'] = cookies.ToraLoginToken
        var userID_ = cookies.ToraID
        
        // token 유효성 테스트 : 유효하면 재발급
        axios.post('http://localhost:3001/confirmToken', {userID: userID_})
        .then((res)=>{
          // 재발급
          const {accessToken} = res.data
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
          const TOKEN_EXPIRY_TIME = 30 * 24 * 3600 * 1000 // 30일 유지

          setCookie('ToraLoginToken', axios.defaults.headers.common['Authorization'], {maxAge:TOKEN_EXPIRY_TIME})
          setCookie('ToraID', userID_, {maxAge:TOKEN_EXPIRY_TIME})
          onSetUserInfo(userID_)
        })
        .catch((e) => {
          // 유효하지 않거나, 만료된 토큰 제거
          removeCookie('ToraLoginToken')
          removeCookie('ToraID')
        })
      }
  }
 
  return (
    <ConnectedRouter history={history}>
      <Router/>
    </ConnectedRouter>
  )
}

export default App