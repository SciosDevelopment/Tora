import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import useUser from '../../../src/hooks/useUser'
import {history} from '../../configureStore'

const LogoutPage = () => {
    const {onSetUserInfo, onGetUserInfo} = useUser()
    const [cookies, _, removeCookie] = useCookies(['ToraLoginToken', 'ToraID'])
    useEffect( () => logout(), [])

    const logout = () => {
        // remove client data
        onSetUserInfo(null)
        removeCookie('ToraLoginToken')
        removeCookie('ToraID')
        axios.defaults.headers.common['Authorization'] = null
        alert("로그아웃하셨습니다.")
        history.replace('/')
    }
    
    
    return (
        <></>
    )
}

export default LogoutPage