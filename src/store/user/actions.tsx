import { createAction, createAsyncAction } from 'typesafe-actions'

export const SET_USERINFO = 'user/SET_USERINFO'

export const SET_TARGETUSERINFO_REQUEST = 'user/SET_TARGETUSERINFO_REQUEST'
export const SET_TARGETUSERINFO_SUCCESS = 'user/SET_TARGETUSERINFO_SUCCESS'
export const SET_TARGETUSERINFO_FAILURE = 'user/SET_TARGETUSERINFO_FAILURE'

export const CLEAR_TARGETUSERINFO = 'user/CLEAR_TARGETUSERINFO'

// 액션 생성 함수
export const setUserInfo = createAction(SET_USERINFO)<String>()

export const setTargetUserInfo = createAsyncAction(
  SET_TARGETUSERINFO_REQUEST,
  SET_TARGETUSERINFO_SUCCESS,
  SET_TARGETUSERINFO_FAILURE
)<number, String, Error>()

export const clearTargetUserInfo = createAction(CLEAR_TARGETUSERINFO)()