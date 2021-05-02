import { UserState, UserAction } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_USERINFO, CLEAR_USERINFO } from './actions'

const initialUserState: UserState = {
  userInfo: null,
}

const user = createReducer<UserState, UserAction>(initialUserState, {
  [SET_USERINFO]: (state, action) => ({userInfo: action.payload}),
  [CLEAR_USERINFO]: (state) => ({userInfo: state.userInfo})
})

export default user