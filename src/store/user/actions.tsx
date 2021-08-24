import { createAction } from 'typesafe-actions'

export const SET_USERINFO = 'user/SET_USERINFO'
export const SET_USERID = 'user/SET_USERID'
export const CLEAR_USERINFO = 'user/CLEAR_USERINFO'

// 액션 생성 함수
export const setUserInfo = createAction(SET_USERINFO)<String>()
export const setUserID = createAction(SET_USERID)<Number>()
export const clearUserInfo = createAction(CLEAR_USERINFO)()