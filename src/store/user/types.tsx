import { ActionType } from 'typesafe-actions'
import { setUserInfo, clearUserInfo} from './actions'
//import { UserInfo } from './userInfo.interface' // 필요하면 사용

const userActions = { setUserInfo, clearUserInfo }

export type UserAction = ActionType<typeof userActions>

export type UserState = {
  userInfo: String | null // userID
  
}