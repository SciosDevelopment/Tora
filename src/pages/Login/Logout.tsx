import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import useUser from '../../../src/hooks/useUser'
import {history} from '../../configureStore'

const LogoutPage = () => {
    const {onClearUserInfo} = useUser()
    const [cookies, _, removeCookie] = useCookies(['ToraLoginToken', 'ToraID','ToraNoID'])
    useEffect( () => logout(), [])
   
    const logout = () => {
        // remove client data
        onClearUserInfo()
        removeCookie('ToraLoginToken')
        removeCookie('ToraID')
        removeCookie('ToraNoID')
        axios.defaults.headers.common['Authorization'] = null
        alert("로그아웃하셨습니다.")
        history.goBack()
    }
    
    return <></>
}

export default LogoutPage