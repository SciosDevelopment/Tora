import { ActionType } from 'typesafe-actions'
import { setUserInfo, setUserID, clearUserInfo} from './actions'
// import { UserInfo } from './userInfo.interface' // 필요하면 사용

const userActions = { setUserInfo, setUserID, clearUserInfo }

export type UserAction = ActionType<typeof userActions>

export type UserState = {
  userInfo: String | null, // userTextID
  userID : Number | null, // userNoID
}