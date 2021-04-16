import { ActionType } from 'typesafe-actions'
import { TEST1, TEST2, TEST3 } from './actions'
// import { UserInfo } from '../../components/User/interfaces/UserInfo.interface'

const testActions = { TEST1, TEST2, TEST3}

export type TestAction = ActionType<typeof testActions>

export type TestState = {
  testText: String | null
}