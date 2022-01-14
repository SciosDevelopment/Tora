import axios from 'axios'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {history} from '../../../configureStore'
// 참고 주소 https://woomin.netlify.app/Posts/2020-11-09-GitHub-OAuth/
// passport with github : https://minnnji23.tistory.com/30

const Redirect = () => {
    const searchParams = new URLSearchParams(useLocation().search)
    const code = searchParams.get('code')
    useEffect(()=>{
        const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
        const data = {installation_id:code}
        console.log(data)
        axios.post(`${SERVER_IP}/api/v1/user/get_github_id`, data)
        .then((res)=>console.log(data))
        .catch((e)=>{ 
            if(e.response) {
                var status = e.response.status // or use message
                const {message} =JSON.parse(e.request.response)
                // 메일 미인증 : 401
                if(status === 401) {
                    // alert("로그인이 필요합니다.")
                    // history.replace("/login")
                    alert(401)
                }

                // id 미존재 혹은 pw 불일치 : 404
                if(status === 404) {
                    alert(message)
                }
                
                if(status === 400) console.log(e.response.message)
                
                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                // temp
                alert("server is dead")
                console.log(e.request)
            }
            else console.log('Error', e.message)
        })
    },[])
   
    return <></>
}

export default Redirect