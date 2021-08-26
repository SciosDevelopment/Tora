import { UserState, UserAction } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_USERINFO, SET_USERID, CLEAR_USERINFO } from './actions'

const initialUserState: UserState = {
  userInfo: null,
  userID : null,
}

const user = createReducer<UserState, UserAction>(initialUserState, {
  [SET_USERINFO]: (state, action) => ({...state, userInfo: action.payload}),
  [SET_USERID] : (state, action) => ({...state, userID : action.payload}),
  [CLEAR_USERINFO]: (state) => ({userInfo: null, userID: null})
})

export default user