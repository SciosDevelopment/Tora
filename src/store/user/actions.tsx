import { createAction } from 'typesafe-actions'

export const SET_USERINFO = 'user/SET_USERINFO'
export const CLEAR_USERINFO = 'user/CLEAR_USERINFO'

// 액션 생성 함수
export const setUserInfo = createAction(SET_USERINFO)<String>()
export const clearUserInfo = createAction(CLEAR_USERINFO)()